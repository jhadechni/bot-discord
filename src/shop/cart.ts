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
import { prisma } from '../database/prisma.js';
import { COLORS, formatPrice, SHOP_FOOTER } from '../utils/ui.js';

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
  items:          CartItem[];
  pendingProduct: string | null; // producto seleccionado en dropdown, esperando modal de qty
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

export type CartProductOption = Awaited<ReturnType<typeof queryCartProducts>>[number];

export async function queryCartProducts(guildId: string) {
  return prisma.shopProduct.findMany({
    where:   {
      guildId,
      isActive: true,
      OR: [
        { productType: 'service' },
        { components: { some: {} } },
      ],
    },
    include: { prices: { where: { validTo: null }, take: 1 } },
    orderBy: [{ category: 'asc' }, { name: 'asc' }],
  });
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

// ── Componentes del carrito ───────────────────────────────────────────────────

export function buildCartComponents(
  session:  CartSession,
  products: CartProductOption[],
): Array<ActionRowBuilder<MessageActionRowComponentBuilder>> {
  const rows: Array<ActionRowBuilder<MessageActionRowComponentBuilder>> = [];

  // ── Fila 1: Seleccionar producto para agregar ─────────────────────────────
  const addOptions = products.slice(0, 25).map(p => {
    const price   = p.prices[0];
    const emoji   = TYPE_EMOJI[p.productType] ?? '🛍️';
    const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';

    return new StringSelectMenuOptionBuilder()
      .setLabel(p.name.slice(0, 100))
      .setValue(p.name)
      .setDescription(`${priceStr}`.slice(0, 100))
      .setEmoji(emoji);
  });

  if (addOptions.length > 0) {
    const addSelect = new StringSelectMenuBuilder()
      .setCustomId('pedido:cart:add')
      .setPlaceholder('➕ Agregar producto al carrito...')
      .addOptions(addOptions);

    rows.push(
      new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(addSelect),
    );
  }

  // ── Fila 2: Seleccionar producto para quitar (solo si hay ítems) ──────────
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

  // ── Fila 3: Botones de acción ──────────────────────────────────────────────
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
