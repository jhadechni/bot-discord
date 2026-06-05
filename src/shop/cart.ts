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
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import { SHOP_COLORS } from '../utils/shop-ui.js';
import type { CatalogMode, CatalogViewState } from './catalog.js';
import {
  buildCategorySelectRow,
  queryCatalogProducts,
  resolveCatalogViewState,
} from './catalog.js';
import { getCategoryDefinition, getSubcategoryDefinition } from './taxonomy.js';

export interface CartItem {
  contentsSummary?: string | null;
  productId: string;
  productName: string;
  productType: string;
  productCategory: string;
  quantity: number;
  unitPrice: Decimal;
  lineTotal: Decimal;
  notes: string | null;
}

export type CartViewMode = 'browse' | 'cart' | 'search';

export interface CartSession {
  guildId: string;
  userId: string;
  channelId: string;
  messageId: string;
  currentCategory: string | null;
  currentCatalogMode: CatalogMode;
  currentPage: number;
  currentSubcategory: string | null;
  items: CartItem[];
  pendingProductId: string | null;
  viewMode: CartViewMode;
  searchQuery?: string | null;
}

const CART_TTL_MS = 30 * 60 * 1000;
const CART_PAGE_SIZE = 10;

const sessions = new Map<string, { session: CartSession; timer: ReturnType<typeof setTimeout> }>();

function cartKey(guildId: string, userId: string): string {
  return `${guildId}:${userId}`;
}

export function getCart(guildId: string, userId: string): CartSession | undefined {
  return sessions.get(cartKey(guildId, userId))?.session;
}

export function setCart(session: CartSession): void {
  const key = cartKey(session.guildId, session.userId);
  const existing = sessions.get(key);
  if (existing) clearTimeout(existing.timer);
  const timer = setTimeout(() => sessions.delete(key), CART_TTL_MS);
  sessions.set(key, { session, timer });
}

export function deleteCart(guildId: string, userId: string): void {
  const key = cartKey(guildId, userId);
  const existing = sessions.get(key);
  if (existing) clearTimeout(existing.timer);
  sessions.delete(key);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + Number(item.lineTotal), 0);
}

export async function queryCartProducts(guildId: string) {
  return queryCatalogProducts(guildId);
}

export type CartProductOption = Awaited<ReturnType<typeof queryCartProducts>>[number];

export function buildCartEmbed(session: CartSession): EmbedBuilder {
  const { items } = session;

  if (items.length === 0) {
    return new EmbedBuilder()
      .setTitle('🛒 Carrito')
      .setDescription('El carrito está vacío. Usa el selector o **Buscar** para agregar productos.')
      .setColor(SHOP_COLORS.neutral)
      .setFooter({ text: `${SHOP_FOOTER.text}  ·  Explora productos para empezar` });
  }

  const lines = items.map((item, index) => {
    const emoji = getCategoryDefinition(item.productCategory).emoji;
    const line = `**${index + 1}.** ${emoji} **${item.productName}** × ${item.quantity}  —  ${formatPrice(item.unitPrice)} c/u  →  **${formatPrice(item.lineTotal)}**`;
    const extraLines = [];
    if (item.contentsSummary) extraLines.push(`> 🎁 ${item.contentsSummary}`);
    if (item.notes) extraLines.push(`> 📝 ${item.notes}`);
    return extraLines.length > 0 ? `${line}\n${extraLines.join('\n')}` : line;
  });

  const total = cartTotal(items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return new EmbedBuilder()
    .setTitle(`🛒 Carrito · ${items.length} producto${items.length !== 1 ? 's' : ''}`)
    .setDescription(lines.join('\n\n'))
    .setColor(SHOP_COLORS.warning)
    .addFields({ name: 'Total', value: `**${formatPrice(total)}**  ·  ${count} unidad${count !== 1 ? 'es' : ''}` })
    .setFooter({ text: `${SHOP_FOOTER.text}  ·  Revisa el pedido antes de confirmarlo` });
}

function buildBrowseEmbed(state: CatalogViewState): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const count = state.totalSubcategoryProducts;
  const itemLabel = state.currentMode === 'services' ? 'servicio' : 'producto';

  return new EmbedBuilder()
    .setTitle(`${category.emoji} ${category.label} / ${subcategory.label}`)
    .setDescription(`${count} ${itemLabel}${count !== 1 ? 's' : ''} disponibles. Selecciona uno del menú para añadir al carrito.`)
    .setColor(SHOP_COLORS.info)
    .setFooter({ text: SHOP_FOOTER.text })
    .setTimestamp();
}

function buildCartProductSelectRow(
  products: CartProductOption[],
): ActionRowBuilder<StringSelectMenuBuilder> {
  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId('pedido:cart:add:select')
      .setPlaceholder('🔍 Selecciona un producto para añadir…')
      .addOptions(
        products.slice(0, 25).map(p => {
          const price = p.prices[0];
          const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
          const icon = getCategoryDefinition(p.category).emoji;
          return new StringSelectMenuOptionBuilder()
            .setLabel(`${icon} ${p.name}`.slice(0, 100))
            .setValue(p.id)
            .setDescription(`💰 ${priceStr}`);
        }),
      ),
  );
}

function buildBrowsePaginationRow(state: CatalogViewState): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('pedido:cart:page:prev')
      .setLabel('◀ Anterior')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(state.currentPage <= 1),
    new ButtonBuilder()
      .setCustomId('pedido:cart:page:label')
      .setLabel(`Pág. ${state.currentPage}/${state.totalPages}`)
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true),
    new ButtonBuilder()
      .setCustomId('pedido:cart:page:next')
      .setLabel('Siguiente ▶')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(state.currentPage >= state.totalPages),
  );
}

function buildCartActionsRow(session: CartSession): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('pedido:cart:search')
      .setLabel('🔍 Buscar')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId('pedido:cart:view:cart')
      .setLabel(`🛒 Ver carrito (${session.items.length})`)
      .setStyle(session.items.length > 0 ? ButtonStyle.Success : ButtonStyle.Secondary),
  );
}

function buildCartSubcategorySelectRow(
  subcategoryKeys: string[],
  currentCategory: string,
  currentSubcategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId('pedido:cart:subcategory')
    .setPlaceholder('Selecciona una subcategoría')
    .addOptions(
      subcategoryKeys.map(subcategoryKey =>
        new StringSelectMenuOptionBuilder()
          .setLabel(getSubcategoryDefinition(currentCategory, subcategoryKey).label.slice(0, 100))
          .setValue(subcategoryKey)
          .setDefault(subcategoryKey === currentSubcategory),
      ),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildCartModeRow(session: CartSession): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('pedido:cart:view:browse')
      .setLabel('← Explorar')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId('pedido:cart:confirm')
      .setLabel('✅ Confirmar pedido')
      .setStyle(ButtonStyle.Success)
      .setDisabled(session.items.length === 0),
    new ButtonBuilder()
      .setCustomId('pedido:cart:clear')
      .setLabel('🗑️ Vaciar')
      .setStyle(ButtonStyle.Danger)
      .setDisabled(session.items.length === 0),
  );
}

function buildRemoveSelectRow(session: CartSession): ActionRowBuilder<StringSelectMenuBuilder> | null {
  if (session.items.length === 0) return null;

  const removeSelect = new StringSelectMenuBuilder()
    .setCustomId('pedido:cart:remove')
    .setPlaceholder('🗑️ Quitar producto del carrito…')
    .addOptions(
      session.items.map((item, index) =>
        new StringSelectMenuOptionBuilder()
          .setLabel(`${item.productName} × ${item.quantity}`.slice(0, 100))
          .setValue(String(index))
          .setDescription(formatPrice(item.lineTotal).slice(0, 100))
          .setEmoji('🗑️'),
      ),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(removeSelect);
}

function buildBrowseComponents(
  session: CartSession,
  state: CatalogViewState,
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];

  if (state.categoryKeys.length > 1) {
    rows.push(buildCategorySelectRow('pedido:cart', state.currentMode, state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    rows.push(buildCartSubcategorySelectRow(state.subcategoryKeys, state.currentCategory, state.currentSubcategory));
  }

  const useProductSelect = state.allSubcategoryProducts.length > 0 && state.allSubcategoryProducts.length <= 25;
  const usePagination = !useProductSelect && state.totalPages > 1;

  if (state.pageProducts.length > 0) {
    rows.push(buildCartProductSelectRow(usePagination ? state.pageProducts : state.allSubcategoryProducts));
  }

  if (usePagination) {
    rows.push(buildBrowsePaginationRow(state));
  }

  rows.push(buildCartActionsRow(session));
  return rows;
}

function buildCartComponents(
  session: CartSession,
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];
  const removeRow = buildRemoveSelectRow(session);
  if (removeRow) rows.push(removeRow);
  rows.push(buildCartModeRow(session));
  return rows;
}

export function buildCartSearchView(
  session: CartSession,
  results: CartProductOption[],
  query: string,
): {
  components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
  embeds: EmbedBuilder[];
} {
  const components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];

  components.push(
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('pedido:cart:search_back')
        .setLabel('← Volver al catálogo')
        .setStyle(ButtonStyle.Secondary),
    ),
  );

  const searchEmbed = new EmbedBuilder()
    .setColor(results.length > 0 ? SHOP_COLORS.info : SHOP_COLORS.neutral)
    .setTitle(results.length > 0 ? `🔍 "${query.slice(0, 50)}" — ${results.length} resultado${results.length !== 1 ? 's' : ''}` : '🔍 Sin resultados')
    .setDescription(results.length > 0
      ? 'Selecciona un producto del menú para añadirlo al carrito.'
      : `No se encontraron productos para **"${query.slice(0, 100)}"**.\nIntenta con otro término.`)
    .setFooter({ text: SHOP_FOOTER.text });

  if (results.length > 0) {
    components.push(buildCartProductSelectRow(results));
  }

  components.push(buildCartActionsRow(session));

  return { components, embeds: [searchEmbed, buildCartEmbed(session)] };
}

export function buildCartView(
  session: CartSession,
  products: CartProductOption[],
): {
  components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
  embeds: EmbedBuilder[];
  state: CatalogViewState;
} {
  const state = resolveCatalogViewState(
    products,
    session.currentCatalogMode,
    session.currentCategory,
    session.currentSubcategory,
    session.currentPage,
    CART_PAGE_SIZE,
  );

  if (session.viewMode === 'cart') {
    return {
      components: buildCartComponents(session),
      embeds: [buildCartEmbed(session)],
      state,
    };
  }

  return {
    components: buildBrowseComponents(session, state),
    embeds: [buildBrowseEmbed(state), buildCartEmbed(session)],
    state,
  };
}

export function buildQtyModal(productName: string, presentationTypeName?: string): ModalBuilder {
  const shortName = productName.slice(0, 40);
  const qtyLabel = presentationTypeName
    ? `Cantidad (en ${presentationTypeName.toLowerCase()}s)`.slice(0, 45)
    : 'Cantidad';

  return new ModalBuilder()
    .setCustomId('pedido:cart:qty_modal')
    .setTitle(`Añadir: ${shortName}`)
    .addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        new TextInputBuilder()
          .setCustomId('qty')
          .setLabel(qtyLabel)
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
          .setPlaceholder('Ej: variante específica, preferencia de entrega…'),
      ),
    );
}
