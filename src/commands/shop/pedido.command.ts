import {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ChannelType,
  type AutocompleteInteraction,
  type ChatInputCommandInteraction,
  type GuildMember,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { upsertShopUser } from '../../database/shop-user.js';
import {
  buildCustomerOrderEmbed,
  buildOrderEmbed,
  buildPendingButtons,
  createPendingOrder,
  getOrderFull,
  getOrderStockAssessment,
} from '../../shop/order-utils.js';
import { COLORS, formatPrice, SHOP_FOOTER } from '../../utils/ui.js';
import { syncPedidosToSheet } from '../../shop/sync.js';
import {
  queryCartProducts,
  buildCartEmbed,
  buildCartComponents,
  setCart,
} from '../../shop/cart.js';

function hasStaffPermission(
  interaction: ChatInputCommandInteraction,
  staffRoleId: string | null,
): boolean {
  if (interaction.memberPermissions?.has(PermissionFlagsBits.ManageGuild)) return true;
  if (staffRoleId) {
    const member = interaction.member as GuildMember;
    return member.roles.cache.has(staffRoleId);
  }
  return false;
}

export const pedidoCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('pedido')
    .setDescription('Gestión de pedidos en la tienda Aquaris')
    .addSubcommand(sub =>
      sub
        .setName('crear')
        .setDescription('Crea un nuevo pedido')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Producto que deseas pedir')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addIntegerOption(opt =>
          opt
            .setName('cantidad')
            .setDescription('Cantidad')
            .setRequired(true)
            .setMinValue(1),
        )
        .addStringOption(opt =>
          opt
            .setName('notas')
            .setDescription('Notas adicionales (opcional)')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('estado')
        .setDescription('Consulta el estado de un pedido')
        .addStringOption(opt =>
          opt
            .setName('codigo')
            .setDescription('Código del pedido (ej: AQ-ABC123)')
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub.setName('lista').setDescription('[Staff] Lista los pedidos pendientes y aceptados'),
    )
    .addSubcommand(sub =>
      sub.setName('carrito').setDescription('Abre tu carrito interactivo para crear un pedido'),
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }

    const value = interaction.options.getFocused().toLowerCase();
    const products = await prisma.shopProduct.findMany({
      where:   {
        guildId,
        isActive: true,
        name: { contains: value, mode: 'insensitive' },
        OR: [
          { productType: 'service' },
          { components: { some: {} } },
        ],
      },
      take:    25,
      select:  { name: true },
      orderBy: { name: 'asc' },
    });
    await interaction.respond(products.map(p => ({ name: p.name, value: p.name })));
  },

  async execute(interaction: ChatInputCommandInteraction) {
    const guildId = interaction.guildId;
    if (!guildId || !interaction.guild) return;

    const sub    = interaction.options.getSubcommand();
    const config = await getOrCreateGuildConfig(guildId);

    // ── /pedido crear ────────────────────────────────────────────────────────
    if (sub === 'crear') {
      await interaction.deferReply({ ephemeral: true });

      const nombreProducto = interaction.options.getString('producto', true);
      const cantidad       = interaction.options.getInteger('cantidad', true);
      const notas          = interaction.options.getString('notas') ?? null;

      const product = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombreProducto } },
      });

      if (!product || !product.isActive) {
        await interaction.editReply(`❌ El producto **${nombreProducto}** no está disponible.`);
        return;
      }
      const customer  = await upsertShopUser(guildId, interaction.user);
      let createdOrder;
      try {
        createdOrder = await createPendingOrder({
          guildId,
          customerUserId: customer.id,
          items: [{ productId: product.id, quantity: cantidad, notes: notas }],
          staffChannelId: config.shopStaffChannelId ?? null,
        });
      } catch (err) {
        await interaction.editReply(
          `❌ ${err instanceof Error ? err.message : 'No se pudo crear el pedido.'}`,
        );
        return;
      }
      const orderCode = createdOrder.orderCode;

      // Publicar notificación en el canal del staff
      const orderFull = await getOrderFull(orderCode);
      const stockAssessment = orderFull ? await getOrderStockAssessment(orderFull.id) : null;
      if (orderFull && config.shopStaffChannelId) {
        const staffCh = interaction.guild.channels.cache.get(config.shopStaffChannelId);
        if (staffCh?.isTextBased()) {
          await staffCh.send({
            embeds:     [buildOrderEmbed(orderFull, stockAssessment)],
            components: [buildPendingButtons(orderCode)],
          });
        }
      }

      const isFullyAvailable = stockAssessment?.isFullyAvailable ?? true;
      const confirmEmbed = new EmbedBuilder()
        .setTitle('📝 Pedido recibido')
        .setColor(COLORS.warning)
        .setDescription(
          isFullyAvailable
            ? `Tu pedido **${orderCode}** fue recibido y quedó pendiente de revisión por el staff.`
            : `Tu pedido **${orderCode}** fue recibido.\nEl staff revisará tu pedido lo antes posible y te avisará cuando haya novedades.`,
        )
        .addFields(
          { name: '🛍️ Producto',  value: `**${nombreProducto}** × ${cantidad}`, inline: true },
          { name: '💰 Total',     value: `**${formatPrice(orderFull?.totalAmount ?? 0)}**`, inline: true },
          { name: '📋 Estado',    value: '🟡 En revisión del staff',              inline: true },
        )
        .setFooter({ text: `${SHOP_FOOTER.text}  ·  Usa /pedido estado para consultar` })
        .setTimestamp();

      if ((orderFull?.totalDiscountAmount ?? 0).toString() !== '0') {
        confirmEmbed.addFields({
          name: '🏷️ Descuentos',
          value: `-${formatPrice(orderFull?.totalDiscountAmount ?? 0)}`,
          inline: true,
        });
      }

      if (notas) confirmEmbed.addFields({ name: '📝 Notas', value: notas });

      await interaction.editReply({ embeds: [confirmEmbed] });
      void syncPedidosToSheet(guildId);
      return;
    }

    // ── /pedido carrito ──────────────────────────────────────────────────────
    if (sub === 'carrito') {
      await interaction.deferReply({ ephemeral: true });

      const products = await queryCartProducts(guildId);

      if (products.length === 0) {
        await interaction.editReply('🏪 La tienda no tiene productos disponibles en este momento.');
        return;
      }

      const session = {
        guildId,
        userId:         interaction.user.id,
        channelId:      interaction.channelId,
        messageId:      '',   // se rellena después de enviar
        items:          [],
        pendingProduct: null,
      };

      const embed      = buildCartEmbed(session);
      const components = buildCartComponents(session, products);
      const reply      = await interaction.editReply({ embeds: [embed], components });

      // Guardar el messageId real para que los handlers del modal puedan recuperarlo
      setCart({ ...session, messageId: reply.id });
      return;
    }

    // ── /pedido estado ───────────────────────────────────────────────────────
    if (sub === 'estado') {
      await interaction.deferReply({ ephemeral: true });

      const codigo = interaction.options.getString('codigo', true).trim().toUpperCase();
      const order  = await getOrderFull(codigo);

      if (!order || order.guildId !== guildId) {
        await interaction.editReply(`❌ No se encontró el pedido **${codigo}**.`);
        return;
      }

      const isCustomer = order.customer.discordUserId === interaction.user.id;
      const isStaff    = hasStaffPermission(interaction, config.staffRoleId ?? null);

      if (!isCustomer && !isStaff) {
        await interaction.editReply('❌ Solo puedes consultar tus propios pedidos.');
        return;
      }

      const stockAssessment = isStaff && ['pending', 'accepted'].includes(order.status)
        ? await getOrderStockAssessment(order.id)
        : null;

      await interaction.editReply({
        embeds: [isStaff ? buildOrderEmbed(order, stockAssessment) : buildCustomerOrderEmbed(order)],
      });
      return;
    }

    // ── /pedido lista ────────────────────────────────────────────────────────
    if (sub === 'lista') {
      if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
        await interaction.reply({
          content:   '❌ Solo el staff puede ver la lista de pedidos.',
          ephemeral: true,
        });
        return;
      }

      await interaction.deferReply({ ephemeral: true });

      const orders = await prisma.shopOrder.findMany({
        where:   { guildId, status: { in: ['pending', 'accepted'] } },
        include: { customer: true, items: { include: { product: true } } },
        orderBy: { createdAt: 'asc' },
        take:    25,
      });

      if (orders.length === 0) {
        await interaction.editReply('📋 No hay pedidos activos en este momento.');
        return;
      }

      const pending  = orders.filter(o => o.status === 'pending');
      const accepted = orders.filter(o => o.status === 'accepted');

      const embed = new EmbedBuilder()
        .setTitle('📋 Pedidos activos')
        .setColor(COLORS.blurple)
        .setDescription(
          `🟡 **${pending.length}** pendiente${pending.length !== 1 ? 's' : ''}` +
          `  ·  🟢 **${accepted.length}** aceptado${accepted.length !== 1 ? 's' : ''}`,
        )
        .setFooter(SHOP_FOOTER)
        .setTimestamp();

      const addOrderField = (order: typeof orders[0]) => {
        const items = order.items.map(i => `${i.product.name} ×${i.quantity}`).join(', ');
        const ts    = `<t:${Math.floor(order.createdAt.getTime() / 1000)}:R>`;
        embed.addFields({
          name:  `${order.status === 'pending' ? '🟡' : '🟢'} ${order.orderCode}`,
          value: `<@${order.customer.discordUserId}>  ·  ${items}  ·  **${formatPrice(order.totalAmount)}**\n${ts}`,
        });
      };

      if (pending.length > 0) {
        embed.addFields({ name: '─── Pendientes ───', value: '\u200B' });
        pending.forEach(addOrderField);
      }
      if (accepted.length > 0) {
        embed.addFields({ name: '─── Aceptados ───', value: '\u200B' });
        accepted.forEach(addOrderField);
      }

      await interaction.editReply({ embeds: [embed] });
      return;
    }
  },
};
