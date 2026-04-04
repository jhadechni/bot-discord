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
  generateOrderCode,
  buildOrderEmbed,
  buildPendingButtons,
  getOrderFull,
} from '../../shop/order-utils.js';

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
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }

    const value = interaction.options.getFocused().toLowerCase();
    const products = await prisma.shopProduct.findMany({
      where:   { guildId, isActive: true, name: { contains: value, mode: 'insensitive' } },
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
        where:   { guildId_name: { guildId, name: nombreProducto } },
        include: { prices: { where: { validTo: null }, take: 1 } },
      });

      if (!product || !product.isActive) {
        await interaction.editReply(`❌ El producto **${nombreProducto}** no está disponible.`);
        return;
      }

      const priceRecord = product.prices[0];
      if (!priceRecord) {
        await interaction.editReply(`❌ **${nombreProducto}** no tiene precio configurado.`);
        return;
      }

      const unitPrice = priceRecord.price;
      const lineTotal = unitPrice.mul(cantidad);
      const orderCode = await generateOrderCode();
      const customer  = await upsertShopUser(guildId, interaction.user);

      const order = await prisma.shopOrder.create({
        data: {
          guildId,
          orderCode,
          customerUserId: customer.id,
          subtotalAmount: lineTotal,
          totalAmount:    lineTotal,
          items: {
            create: {
              productId:      product.id,
              quantity:       cantidad,
              unitPrice,
              grossLineTotal: lineTotal,
              notes:          notas,
            },
          },
        },
      });

      await prisma.shopOrderEvent.create({
        data: {
          orderId:      order.id,
          eventType:    'created',
          newStatus:    'pending',
          performedById: customer.id,
        },
      });

      // Publicar notificación en el canal del staff
      const orderFull = await getOrderFull(orderCode);
      if (orderFull && config.shopStaffChannelId) {
        const staffCh = interaction.guild.channels.cache.get(config.shopStaffChannelId);
        if (staffCh?.isTextBased()) {
          const staffMsg = await staffCh.send({
            embeds:     [buildOrderEmbed(orderFull)],
            components: [buildPendingButtons(orderCode)],
          });
          // Guardamos el ID del mensaje en staffChannelId para poder actualizarlo
          // desde acciones slash si fuera necesario
          await prisma.shopOrder.update({
            where: { id: order.id },
            data:  { staffChannelId: staffMsg.id },
          });
        }
      }

      await interaction.editReply(
        `✅ Pedido **${orderCode}** creado.\n` +
        `**${nombreProducto}** × ${cantidad}  →  **${lineTotal} $**\n` +
        `El staff revisará tu pedido pronto.`,
      );
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

      await interaction.editReply({ embeds: [buildOrderEmbed(order)] });
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

      const embed = new EmbedBuilder()
        .setTitle('📋 Pedidos activos')
        .setColor(0x5865f2)
        .setTimestamp();

      for (const order of orders) {
        const statusLabel = order.status === 'pending' ? '🟡 Pendiente' : '🟢 Aceptado';
        const itemSummary = order.items
          .map(i => `${i.product.name} ×${i.quantity}`)
          .join(', ');
        embed.addFields({
          name:   `${order.orderCode} — ${statusLabel}`,
          value:  `<@${order.customer.discordUserId}>: ${itemSummary}  ·  **${order.totalAmount} $**`,
          inline: false,
        });
      }

      await interaction.editReply({ embeds: [embed] });
      return;
    }
  },
};
