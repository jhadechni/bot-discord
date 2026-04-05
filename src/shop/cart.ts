import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  type MessageActionRowComponentBuilder,
} from 'discord.js';
import type { Decimal } from '@prisma/client/runtime/client';
import { COLORS, formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import type { CatalogProduct } from './catalog.js';
import { queryCatalogProducts } from './catalog.js';
import {
  coerceShopTaxonomy,
  compareCategoryKeys,
  compareSubcategoryKeys,
  getCategoryDefinition,
  getSubcategoryDefinition,
} from './taxonomy.js';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export interface CartItem {
  productId:   string;
  productName: string;
  productType: string;
  quantity:    number;
  unitPrice:   Decimal;
  lineTotal:   Decimal;
  notes:       string | null;
}

export interface CartSession {
  guildId:        string;
  userId:         string;
  channelId:      string;
  messageId:      string;
  currentCategory: string | null;
  currentPage: number;
  currentSubcategory: string | null;
  items:          CartItem[];
  pendingProductId: string | null; // producto seleccionado en la vista, esperando modal de qty
}

// ── Store en memoria ──────────────────────────────────────────────────────────

const CART_TTL_MS = 30 * 60 * 1000; // 30 minutos de inactividad

const sessions = new Map<string, { session: CartSession; timer: ReturnType<typeof setTimeout> }>();

function cartKey(guildId: string, userId: string): string {
  return `${guildId}:${userId}`;
}

export function getCart(guildId: string, userId: string): CartSession | undefined {
  return sessions.get(cartKey(guildId, userId))?.session;
}

export function setCart(session: CartSession): void {
  const key     = cartKey(session.guildId, session.userId);
  const existing = sessions.get(key);
  if (existing) clearTimeout(existing.timer);
  const timer   = setTimeout(() => sessions.delete(key), CART_TTL_MS);
  sessions.set(key, { session, timer });
}

export function deleteCart(guildId: string, userId: string): void {
  const key     = cartKey(guildId, userId);
  const existing = sessions.get(key);
  if (existing) clearTimeout(existing.timer);
  sessions.delete(key);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + Number(item.lineTotal), 0);
}

// ── Consulta de productos para el carrito ─────────────────────────────────────

const CART_PAGE_SIZE = 3;

export async function queryCartProducts(guildId: string) {
  return queryCatalogProducts(guildId);
}

export type CartProductOption = Awaited<ReturnType<typeof queryCartProducts>>[number];

type CartCatalogState = {
  categoryKeys: string[];
  currentCategory: string;
  currentPage: number;
  currentSubcategory: string;
  pageProducts: CatalogProduct[];
  subcategoryKeys: string[];
  totalPages: number;
  totalSubcategoryProducts: number;
};

function groupCartProducts(products: CatalogProduct[]) {
  const grouped = new Map<string, Map<string, CatalogProduct[]>>();

  for (const product of products) {
    const taxonomy = coerceShopTaxonomy(product.category, product.subcategory);

    if (!grouped.has(taxonomy.category)) {
      grouped.set(taxonomy.category, new Map());
    }

    const subcategories = grouped.get(taxonomy.category)!;
    if (!subcategories.has(taxonomy.subcategory)) {
      subcategories.set(taxonomy.subcategory, []);
    }

    subcategories.get(taxonomy.subcategory)!.push(product);
  }

  const orderedCategories = [...grouped.keys()].sort(compareCategoryKeys);

  return new Map(
    orderedCategories.map(categoryKey => {
      const subcategoryMap = grouped.get(categoryKey)!;
      const orderedSubcategories = [...subcategoryMap.keys()].sort((left, right) =>
        compareSubcategoryKeys(categoryKey, left, right),
      );

      return [
        categoryKey,
        new Map(
          orderedSubcategories.map(subcategoryKey => [
            subcategoryKey,
            subcategoryMap.get(subcategoryKey)!,
          ]),
        ),
      ];
    }),
  );
}

function paginateProducts(products: CatalogProduct[]): CatalogProduct[][] {
  const pages: CatalogProduct[][] = [];

  for (let index = 0; index < products.length; index += CART_PAGE_SIZE) {
    pages.push(products.slice(index, index + CART_PAGE_SIZE));
  }

  return pages.length > 0 ? pages : [[]];
}

function resolveCartCatalogState(
  products: CatalogProduct[],
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
): CartCatalogState {
  const grouped = groupCartProducts(products);
  const categoryKeys = [...grouped.keys()];
  const fallbackCategory = categoryKeys[0] ?? 'general';
  const normalizedCategory = coerceShopTaxonomy(categoryKey, null).category;
  const currentCategory = grouped.has(normalizedCategory) ? normalizedCategory : fallbackCategory;
  const subcategoryMap = grouped.get(currentCategory) ?? new Map([['otros', []]]);
  const subcategoryKeys = [...subcategoryMap.keys()];
  const fallbackSubcategory = subcategoryKeys[0] ?? 'otros';
  const normalizedSubcategory = coerceShopTaxonomy(currentCategory, subcategoryKey).subcategory;
  const currentSubcategory = subcategoryMap.has(normalizedSubcategory)
    ? normalizedSubcategory
    : fallbackSubcategory;
  const subcategoryProducts = subcategoryMap.get(currentSubcategory) ?? [];
  const pages = paginateProducts(subcategoryProducts);
  const currentPage = Math.min(Math.max(requestedPage, 1), pages.length);

  return {
    categoryKeys,
    currentCategory,
    currentPage,
    currentSubcategory,
    pageProducts: pages[currentPage - 1] ?? [],
    subcategoryKeys,
    totalPages: pages.length,
    totalSubcategoryProducts: subcategoryProducts.length,
  };
}

// ── Embed del carrito ─────────────────────────────────────────────────────────

const TYPE_EMOJI: Record<string, string> = {
  single:  '📦',
  bulk:    '🗃️',
  kit:     '🎒',
  service: '🔧',
};

export function buildCartEmbed(session: CartSession): EmbedBuilder {
  const { items } = session;

  if (items.length === 0) {
    return new EmbedBuilder()
      .setTitle('🛒 Tu carrito')
      .setDescription(
        '**El carrito está vacío.**\n\n' +
        'Usa el menú de abajo para agregar productos.',
      )
      .setColor(COLORS.neutral)
      .setFooter(SHOP_FOOTER);
  }

  const lines = items.map((item, i) => {
    const emoji   = TYPE_EMOJI[item.productType] ?? '🛍️';
    const line    = `**${i + 1}.** ${emoji} **${item.productName}** × ${item.quantity}  —  ${formatPrice(item.unitPrice)} c/u  →  **${formatPrice(item.lineTotal)}**`;
    return item.notes ? `${line}\n   > 📝 ${item.notes}` : line;
  });

  const total = cartTotal(items);
  const count = items.reduce((s, i) => s + i.quantity, 0);

  return new EmbedBuilder()
    .setTitle('🛒 Tu carrito')
    .setDescription(lines.join('\n\n'))
    .setColor(COLORS.warning)
    .addFields({
      name:  '💰 Total',
      value: `**${formatPrice(total)}**  ·  ${count} unidad${count !== 1 ? 'es' : ''}`,
    })
    .setFooter({
      text: `${SHOP_FOOTER.text}  ·  ${items.length} producto${items.length !== 1 ? 's' : ''} en el carrito`,
    });
}

function buildCartBrowseEmbed(state: CartCatalogState): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const lines = state.pageProducts.map((product, index) => {
    const price = product.prices[0];
    const priceStr = price
      ? `💰 **${formatPrice(price.price, price.currency)}**`
      : '💰 _Sin precio_';
    const description = product.description ? `\n${product.description}` : '';

    return `**${index + 1}. ${product.name}**\n${priceStr}${description}`;
  });

  return new EmbedBuilder()
    .setTitle(`🛍️ Explorar productos  ·  ${category.emoji} ${category.label}`)
    .setDescription(
      [
        `**${subcategory.label}**`,
        lines.length > 0
          ? lines.join('\n\n')
          : '_No hay productos en esta sección._',
      ].join('\n\n'),
    )
    .setColor(COLORS.blurple)
    .setFooter({
      text: [
        `${state.totalSubcategoryProducts} producto${state.totalSubcategoryProducts !== 1 ? 's' : ''}`,
        `Pág. ${state.currentPage}/${state.totalPages}`,
        'Usa los botones numerados para agregar',
      ].join('  ·  '),
    });
}

// ── Componentes del carrito ───────────────────────────────────────────────────

function buildCategoryRow(
  categoryKeys: string[],
  currentCategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId('pedido:cart:category')
    .setPlaceholder('Selecciona una categoría')
    .addOptions(
      categoryKeys.map(categoryKey => {
        const category = getCategoryDefinition(categoryKey);
        return new StringSelectMenuOptionBuilder()
          .setLabel(`${category.emoji} ${category.label}`.slice(0, 100))
          .setValue(categoryKey)
          .setDefault(categoryKey === currentCategory);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildSubcategoryRow(
  currentCategory: string,
  subcategoryKeys: string[],
  currentSubcategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`pedido:cart:subcategory:${currentCategory}`)
    .setPlaceholder('Selecciona una subcategoría')
    .addOptions(
      subcategoryKeys.map(subcategoryKey => {
        const subcategory = getSubcategoryDefinition(currentCategory, subcategoryKey);
        return new StringSelectMenuOptionBuilder()
          .setLabel(subcategory.label.slice(0, 100))
          .setValue(subcategoryKey)
          .setDefault(subcategoryKey === currentSubcategory);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildProductActionRow(state: CartCatalogState): ActionRowBuilder<ButtonBuilder> {
  const buttons: ButtonBuilder[] = [
    new ButtonBuilder()
      .setCustomId(`pedido:cart:page:${state.currentCategory}:${state.currentSubcategory}:${state.currentPage - 1}`)
      .setLabel('Anterior')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(state.currentPage <= 1),
  ];

  for (const [index, product] of state.pageProducts.entries()) {
    buttons.push(
      new ButtonBuilder()
        .setCustomId(`pedido:cart:add:${index}`)
        .setLabel(String(index + 1))
        .setStyle(ButtonStyle.Primary)
        .setDisabled(!product.prices[0]),
    );
  }

  buttons.push(
    new ButtonBuilder()
      .setCustomId(`pedido:cart:page:${state.currentCategory}:${state.currentSubcategory}:${state.currentPage + 1}`)
      .setLabel('Siguiente')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(state.currentPage >= state.totalPages),
  );

  return new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);
}

export function buildCartComponents(
  session:  CartSession,
  state: CartCatalogState,
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];

  if (state.categoryKeys.length > 1) {
    rows.push(buildCategoryRow(state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    rows.push(buildSubcategoryRow(
      state.currentCategory,
      state.subcategoryKeys,
      state.currentSubcategory,
    ));
  }

  rows.push(buildProductActionRow(state));

  if (session.items.length > 0) {
    const removeOptions = session.items.map((item, i) =>
      new StringSelectMenuOptionBuilder()
        .setLabel(`${item.productName} × ${item.quantity}`.slice(0, 100))
        .setValue(String(i))
        .setDescription(formatPrice(item.lineTotal).slice(0, 100))
        .setEmoji('🗑️'),
    );

    const removeSelect = new StringSelectMenuBuilder()
      .setCustomId('pedido:cart:remove')
      .setPlaceholder('🗑️ Quitar producto del carrito...')
      .addOptions(removeOptions);

    rows.push(
      new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(removeSelect),
    );
  }

  const confirmBtn = new ButtonBuilder()
    .setCustomId('pedido:cart:confirm')
    .setLabel('✅ Confirmar pedido')
    .setStyle(ButtonStyle.Success)
    .setDisabled(session.items.length === 0);

  const clearBtn = new ButtonBuilder()
    .setCustomId('pedido:cart:clear')
    .setLabel('🗑️ Vaciar')
    .setStyle(ButtonStyle.Danger)
    .setDisabled(session.items.length === 0);

  rows.push(
    new ActionRowBuilder<ButtonBuilder>().addComponents(confirmBtn, clearBtn),
  );

  return rows;
}

export function buildCartView(
  session: CartSession,
  products: CartProductOption[],
): {
  components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
  embeds: EmbedBuilder[];
  state: CartCatalogState;
} {
  const state = resolveCartCatalogState(
    products,
    session.currentCategory,
    session.currentSubcategory,
    session.currentPage,
  );

  return {
    components: buildCartComponents(session, state),
    embeds: [buildCartBrowseEmbed(state), buildCartEmbed(session)],
    state,
  };
}

// ── Modal de cantidad ─────────────────────────────────────────────────────────

export function buildQtyModal(productName: string): ModalBuilder {
  const shortName = productName.slice(0, 40);

  return new ModalBuilder()
    .setCustomId('pedido:cart:qty_modal')
    .setTitle(`Agregar: ${shortName}`)
    .addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('qty')
          .setLabel('Cantidad')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMinLength(1)
          .setMaxLength(5)
          .setPlaceholder('1'),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('notes')
          .setLabel('Notas para el staff (opcional)')
          .setStyle(TextInputStyle.Short)
          .setRequired(false)
          .setMaxLength(200)
          .setPlaceholder('Ej: variante específica, preferencia de entrega...'),
      ),
    );
}
