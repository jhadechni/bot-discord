import {
  SlashCommandBuilder,
  PermissionFlagsBits,
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
import {
  queryCartProducts,
  buildCartView,
  setCart,
} from '../../shop/cart.js';
import { buildShopGuildWhere, findFirstInShopScopes } from '../../shop/scope.js';
import {
  SHOP_COLORS,
  buildActiveOrdersEmbed,
  buildOrderReceivedEmbed,
  buildShopErrorEmbed,
  buildShopNoticeEmbed,
} from '../../utils/shop-ui.js';

function hasStaffPermission(
  interaction: ChatInputCommandInteraction | AutocompleteInteraction,
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
      sub.setName('carrito').setDescription('Abre tu carrito interactivo para crear un pedido'),
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }

    const value = interaction.options.getFocused().toLowerCase();
    const products = await prisma.shopProduct.findMany({
      where:   {
        ...buildShopGuildWhere(guildId),
        isActive: true,
        name: { contains: value, mode: 'insensitive' },
        OR: [
          { productType: 'service' },
          { baseMaterialId: { not: null } },
          { components: { some: {} } },
        ],
      },
      take:    25,
      select:  { name: true },
      orderBy: { name: 'asc' },
    });
    const uniqueProducts = [...new Map(products.map(product => [product.name, product])).values()];
    await interaction.respond(uniqueProducts.map(product => ({ name: product.name, value: product.name })));
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

      const product = await findFirstInShopScopes(guildId, scope =>
        prisma.shopProduct.findUnique({
          where: { guildId_name: { guildId: scope, name: nombreProducto } },
        }),
      );

      if (!product || !product.isActive) {
        await interaction.editReply({
          embeds: [buildShopErrorEmbed('Producto no disponible', `**${nombreProducto}** no está disponible.`)],
        });
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
        await interaction.editReply({
          embeds: [
            buildShopErrorEmbed(
              'No se pudo crear el pedido',
              err instanceof Error ? err.message : 'No se pudo crear el pedido.',
            ),
          ],
        });
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
          }).catch(() => null);
        }
      }

      const isFullyAvailable = stockAssessment?.isFullyAvailable ?? true;
      await interaction.editReply({
        embeds: [
          buildOrderReceivedEmbed({
            orderCode,
            productLabel: `**${nombreProducto}** x ${cantidad}`,
            totalAmount: orderFull?.totalAmount ?? 0,
            discountAmount: orderFull?.totalDiscountAmount ?? 0,
            isFullyAvailable,
            notes: notas,
          }),
        ],
      });
      return;
    }

    // ── /pedido carrito ──────────────────────────────────────────────────────
    if (sub === 'carrito') {
      await interaction.deferReply({ ephemeral: true });

      const products = await queryCartProducts(guildId);

      if (products.length === 0) {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Tienda sin productos',
              description: 'La tienda no tiene productos disponibles en este momento.',
              color: SHOP_COLORS.neutral,
            }),
          ],
        });
        return;
      }

      const session = {
        guildId,
        userId:         interaction.user.id,
        channelId:      interaction.channelId,
        messageId:      '',   // se rellena después de enviar
        currentCategory: null,
        currentCatalogMode: 'products' as const,
        currentPage: 1,
        currentSubcategory: null,
        items:          [],
        pendingProductId: null,
        viewMode: 'browse' as const,
      };

      const view  = buildCartView(session, products);
      const reply = await interaction.editReply({ embeds: view.embeds, components: view.components });

      // Guardar el messageId real para que los handlers del modal puedan recuperarlo
      setCart({
        ...session,
        currentCategory: view.state.currentCategory,
        currentPage: view.state.currentPage,
        currentSubcategory: view.state.currentSubcategory,
        messageId: reply.id,
      });
      return;
    }

    // ── /pedido estado ───────────────────────────────────────────────────────
    if (sub === 'estado') {
      await interaction.deferReply({ ephemeral: true });

      const codigo = interaction.options.getString('codigo', true).trim().toUpperCase();
      const order  = await getOrderFull(codigo);

      if (!order || order.guildId !== guildId) {
        await interaction.editReply({
          embeds: [buildShopErrorEmbed('Pedido no encontrado', `No se encontró el pedido **${codigo}**.`)],
        });
        return;
      }

      const isCustomer = order.customer.discordUserId === interaction.user.id;
      const isStaff    = hasStaffPermission(interaction, config.staffRoleId ?? null);

      if (!isCustomer && !isStaff) {
        await interaction.editReply({
          embeds: [buildShopErrorEmbed('Acceso restringido', 'Solo puedes consultar tus propios pedidos.')],
        });
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

  },
};

export const pedidosCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('pedidos')
    .setDescription('[Staff] Gestión interna de pedidos')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub.setName('lista').setDescription('Lista los pedidos pendientes y aceptados'),
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) return;

    const config = await getOrCreateGuildConfig(guildId);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({
        embeds: [buildShopErrorEmbed('Permiso insuficiente', 'Solo el staff puede ver la lista de pedidos.')],
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
      await interaction.editReply({
        embeds: [
          buildShopNoticeEmbed({
            title: 'Sin pedidos activos',
            description: 'No hay pedidos pendientes ni aceptados en este momento.',
            color: SHOP_COLORS.neutral,
          }),
        ],
      });
      return;
    }

    await interaction.editReply({ embeds: [buildActiveOrdersEmbed(orders)] });
  },
};
