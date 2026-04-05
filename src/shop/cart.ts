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
import type { CatalogViewState } from './catalog.js';
import {
  PRODUCT_TYPE_ICONS,
  buildCategorySelectRow,
  buildProductGridEmbed,
  queryCatalogProducts,
  resolveCatalogViewState,
} from './catalog.js';
import { getSubcategoryDefinition } from './taxonomy.js';

export interface CartItem {
  productId: string;
  productName: string;
  productType: string;
  quantity: number;
  unitPrice: Decimal;
  lineTotal: Decimal;
  notes: string | null;
}

export type CartViewMode = 'browse' | 'cart';

export interface CartSession {
  guildId: string;
  userId: string;
  channelId: string;
  messageId: string;
  currentCategory: string | null;
  currentPage: number;
  currentSubcategory: string | null;
  items: CartItem[];
  pendingProductId: string | null;
  viewMode: CartViewMode;
}

const CART_TTL_MS = 30 * 60 * 1000;
const CART_PAGE_SIZE = 3;

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
      .setTitle('🛒 Tu carrito')
      .setDescription('**El carrito está vacío.**\n\nCambia a **Explorar** para agregar productos.')
      .setColor(COLORS.neutral)
      .setFooter(SHOP_FOOTER);
  }

  const lines = items.map((item, index) => {
    const emoji = PRODUCT_TYPE_ICONS[item.productType] ?? '🛍️';
    const line = `**${index + 1}.** ${emoji} **${item.productName}** × ${item.quantity}  —  ${formatPrice(item.unitPrice)} c/u  →  **${formatPrice(item.lineTotal)}**`;
    return item.notes ? `${line}\n> 📝 ${item.notes}` : line;
  });

  const total = cartTotal(items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return new EmbedBuilder()
    .setTitle(`🛒 Tu carrito  ·  ${items.length} producto${items.length !== 1 ? 's' : ''}`)
    .setDescription(lines.join('\n\n'))
    .setColor(COLORS.warning)
    .addFields({
      name: '💰 Resumen',
      value: `**${formatPrice(total)}**  ·  ${count} unidad${count !== 1 ? 'es' : ''}`,
    })
    .setFooter({ text: `${SHOP_FOOTER.text}  ·  Revisa el pedido antes de confirmarlo` });
}

function buildBrowseEmbed(state: CatalogViewState): EmbedBuilder {
  return buildProductGridEmbed(state, {
    color: COLORS.blurple,
    footerHint: 'Usa los botones numerados para agregar',
    numberItems: true,
    pageSize: CART_PAGE_SIZE,
    titlePrefix: '🛍️ Explorar productos',
  });
}

function buildBrowseActionRow(state: CatalogViewState): ActionRowBuilder<ButtonBuilder> {
  const buttons: ButtonBuilder[] = [
    new ButtonBuilder()
      .setCustomId('pedido:cart:page:prev')
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
      .setCustomId('pedido:cart:page:next')
      .setLabel('Siguiente')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(state.currentPage >= state.totalPages),
  );

  return new ActionRowBuilder<ButtonBuilder>().addComponents(buttons);
}

function buildBrowseModeRow(session: CartSession): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('pedido:cart:view:cart')
      .setLabel(`🛒 Ver carrito (${session.items.length})`)
      .setStyle(ButtonStyle.Success),
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
  const confirmButton = new ButtonBuilder()
    .setCustomId('pedido:cart:confirm')
    .setLabel('✅ Confirmar pedido')
    .setStyle(ButtonStyle.Success)
    .setDisabled(session.items.length === 0);

  const clearButton = new ButtonBuilder()
    .setCustomId('pedido:cart:clear')
    .setLabel('🗑️ Vaciar')
    .setStyle(ButtonStyle.Danger)
    .setDisabled(session.items.length === 0);

  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('pedido:cart:view:browse')
      .setLabel('← Explorar')
      .setStyle(ButtonStyle.Secondary),
    confirmButton,
    clearButton,
  );
}

function buildRemoveSelectRow(session: CartSession): ActionRowBuilder<StringSelectMenuBuilder> | null {
  if (session.items.length === 0) return null;

  const removeOptions = session.items.map((item, index) =>
    new StringSelectMenuOptionBuilder()
      .setLabel(`${item.productName} × ${item.quantity}`.slice(0, 100))
      .setValue(String(index))
      .setDescription(formatPrice(item.lineTotal).slice(0, 100))
      .setEmoji('🗑️'),
  );

  const removeSelect = new StringSelectMenuBuilder()
    .setCustomId('pedido:cart:remove')
    .setPlaceholder('🗑️ Quitar producto del carrito...')
    .addOptions(removeOptions);

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(removeSelect);
}

function buildBrowseComponents(
  session: CartSession,
  state: CatalogViewState,
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];

  if (state.categoryKeys.length > 1) {
    rows.push(buildCategorySelectRow('pedido:cart', state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    rows.push(buildCartSubcategorySelectRow(state.subcategoryKeys, state.currentCategory, state.currentSubcategory));
  }

  rows.push(buildBrowseActionRow(state));
  rows.push(buildBrowseModeRow(session));

  return rows;
}

function buildCartComponents(
  session: CartSession,
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];
  const removeRow = buildRemoveSelectRow(session);

  if (removeRow) {
    rows.push(removeRow);
  }

  rows.push(buildCartModeRow(session));
  return rows;
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
