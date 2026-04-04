import {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  type AutocompleteInteraction,
  type ChatInputCommandInteraction,
  type GuildMember,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { upsertShopUser } from '../../database/shop-user.js';
import { syncProductosToSheet, syncInventarioToSheet } from '../../shop/sync.js';
import {
  queryCatalogProducts,
  groupBySections,
  paginateSectionProducts,
  buildCatalogEmbed,
  buildCatalogButtons,
} from '../../shop/catalog.js';

const TYPE_LABELS: Record<string, string> = {
  single:  '📦 Unidad',
  bulk:    '🗃️ Granel',
  kit:     '🎒 Kit',
  service: '🔧 Servicio',
};

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

export const tiendaCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('tienda')
    .setDescription('Tienda del clan Aquaris')
    .addSubcommand(sub =>
      sub.setName('ver').setDescription('Muestra el catálogo de productos disponibles'),
    )
    .addSubcommand(sub =>
      sub
        .setName('material-agregar')
        .setDescription('[Staff] Registra un nuevo material base en el inventario')
        .addStringOption(opt =>
          opt
            .setName('nombre')
            .setDescription('Nombre del material (ej: piedra, diamante)')
            .setRequired(true),
        )
        .addStringOption(opt =>
          opt
            .setName('unidad')
            .setDescription('Unidad de medida (por defecto: item)')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('material-eliminar')
        .setDescription('[Staff] Elimina un material base (solo si no tiene uso activo)')
        .addStringOption(opt =>
          opt
            .setName('nombre')
            .setDescription('Nombre del material')
            .setRequired(true)
            .setAutocomplete(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-agregar')
        .setDescription('[Staff] Crea un nuevo producto vendible en el catálogo')
        .addStringOption(opt =>
          opt.setName('nombre').setDescription('Nombre del producto').setRequired(true),
        )
        .addStringOption(opt =>
          opt
            .setName('tipo')
            .setDescription('Tipo de producto')
            .setRequired(true)
            .addChoices(
              { name: '📦 Unidad (single)', value: 'single' },
              { name: '🗃️ Granel (bulk)', value: 'bulk' },
              { name: '🎒 Kit (kit)', value: 'kit' },
              { name: '🔧 Servicio (service)', value: 'service' },
            ),
        )
        .addNumberOption(opt =>
          opt
            .setName('precio')
            .setDescription('Precio en $')
            .setRequired(true)
            .setMinValue(0),
        )
        .addStringOption(opt =>
          opt
            .setName('descripcion')
            .setDescription('Descripción opcional del producto')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-componente')
        .setDescription('[Staff] Define cuánto material consume un producto')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('material')
            .setDescription('Nombre del material')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addIntegerOption(opt =>
          opt
            .setName('cantidad')
            .setDescription('Cantidad requerida del material')
            .setRequired(true)
            .setMinValue(1),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-precio')
        .setDescription('[Staff] Actualiza el precio de un producto')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addNumberOption(opt =>
          opt
            .setName('precio')
            .setDescription('Nuevo precio en $')
            .setRequired(true)
            .setMinValue(0),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-activar')
        .setDescription('[Staff] Activa un producto para que aparezca en el catálogo')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-desactivar')
        .setDescription('[Staff] Oculta un producto del catálogo sin eliminarlo')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-eliminar')
        .setDescription('[Staff] Elimina un producto (solo si no tiene pedidos asociados)')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('stats')
        .setDescription('[Staff] Estadísticas de ventas e inventario')
        .addStringOption(opt =>
          opt
            .setName('periodo')
            .setDescription('Período a consultar (por defecto: esta semana)')
            .setRequired(false)
            .addChoices(
              { name: '📅 Hoy',        value: 'hoy' },
              { name: '📆 Esta semana', value: 'semana' },
              { name: '🗓️ Este mes',    value: 'mes' },
              { name: '📊 Todo',        value: 'todo' },
            ),
        ),
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }

    const focused = interaction.options.getFocused(true);
    const value   = focused.value.toLowerCase();

    // 'nombre' autocomplete → materiales (solo en subcomandos que lo necesitan)
    // 'material' autocomplete → materiales
    if (focused.name === 'nombre' || focused.name === 'material') {
      const materials = await prisma.shopMaterial.findMany({
        where:  { guildId, name: { contains: value, mode: 'insensitive' } },
        take:   25,
        select: { name: true },
        orderBy: { name: 'asc' },
      });
      await interaction.respond(materials.map(m => ({ name: m.name, value: m.name })));
      return;
    }

    // 'producto' autocomplete → productos
    if (focused.name === 'producto') {
      const products = await prisma.shopProduct.findMany({
        where:  { guildId, name: { contains: value, mode: 'insensitive' } },
        take:   25,
        select: { name: true },
        orderBy: { name: 'asc' },
      });
      await interaction.respond(products.map(p => ({ name: p.name, value: p.name })));
      return;
    }

    await interaction.respond([]);
  },

  async execute(interaction: ChatInputCommandInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) return;

    const sub = interaction.options.getSubcommand();

    // ── /tienda ver ──────────────────────────────────────────────────────────
    if (sub === 'ver') {
      await interaction.deferReply();

      const products = await queryCatalogProducts(guildId);

      if (products.length === 0) {
        await interaction.editReply('🏪 La tienda está vacía por el momento.');
        return;
      }

      const sections        = groupBySections(products);
      const availableSections = [...sections.keys()];
      const firstSection    = availableSections[0]!;
      const pages          = paginateSectionProducts(sections.get(firstSection)!);
      const currentPage    = 1;
      const embed          = buildCatalogEmbed(
        pages[currentPage - 1]!,
        firstSection,
        availableSections,
        currentPage,
        pages.length,
      );
      const components     = buildCatalogButtons(
        availableSections,
        firstSection,
        currentPage,
        pages.length,
      );

      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Verificación de permisos de staff ────────────────────────────────────
    const config = await getOrCreateGuildConfig(guildId);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({
        content: '❌ Solo el staff puede usar este subcomando.',
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });
    const staffUser = await upsertShopUser(guildId, interaction.user);

    // ── /tienda material-agregar ─────────────────────────────────────────────
    if (sub === 'material-agregar') {
      const nombre = interaction.options.getString('nombre', true).trim();
      const unidad = interaction.options.getString('unidad') ?? 'item';

      const existing = await prisma.shopMaterial.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
      });
      if (existing) {
        await interaction.editReply(`❌ Ya existe un material llamado **${nombre}**.`);
        return;
      }

      await prisma.shopMaterial.create({
        data: {
          guildId,
          name:     nombre,
          baseUnit: unidad,
          inventory: { create: { guildId } },
        },
      });

      void syncInventarioToSheet(guildId);
      await interaction.editReply(
        `✅ Material **${nombre}** registrado (unidad: \`${unidad}\`, stock inicial: 0).\n` +
        `Usa \`/stock sumar\` para agregar stock.`,
      );
      return;
    }

    // ── /tienda material-eliminar ────────────────────────────────────────────
    if (sub === 'material-eliminar') {
      const nombre = interaction.options.getString('nombre', true);

      const material = await prisma.shopMaterial.findUnique({
        where:   { guildId_name: { guildId, name: nombre } },
        include: { components: true, inventory: true },
      });
      if (!material) {
        await interaction.editReply(`❌ No existe un material llamado **${nombre}**.`);
        return;
      }
      if (material.components.length > 0) {
        await interaction.editReply(
          `❌ **${nombre}** es componente de ${material.components.length} producto(s). Elimínalos primero.`,
        );
        return;
      }
      if ((material.inventory?.currentStock ?? 0) > 0) {
        await interaction.editReply(
          `❌ **${nombre}** tiene ${material.inventory?.currentStock} en stock. Retíralo antes de eliminar.`,
        );
        return;
      }

      await prisma.shopMaterial.delete({ where: { id: material.id } });
      void syncInventarioToSheet(guildId);
      await interaction.editReply(`✅ Material **${nombre}** eliminado.`);
      return;
    }

    // ── /tienda producto-agregar ─────────────────────────────────────────────
    if (sub === 'producto-agregar') {
      const nombre     = interaction.options.getString('nombre', true).trim();
      const tipo       = interaction.options.getString('tipo', true);
      const precio     = interaction.options.getNumber('precio', true);
      const descripcion = interaction.options.getString('descripcion') ?? null;

      const existing = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
      });
      if (existing) {
        await interaction.editReply(`❌ Ya existe un producto llamado **${nombre}**.`);
        return;
      }

      await prisma.shopProduct.create({
        data: {
          guildId,
          name:        nombre,
          productType: tipo,
          description: descripcion,
          prices: {
            create: { price: precio, changedByUserId: staffUser.id },
          },
        },
      });

      void syncProductosToSheet(guildId);
      await interaction.editReply(
        `✅ Producto **${nombre}** creado a **${precio} $**.\n` +
        `Usa \`/tienda producto-componente\` para definir sus materiales.`,
      );
      return;
    }

    // ── /tienda producto-componente ──────────────────────────────────────────
    if (sub === 'producto-componente') {
      const nombreProducto = interaction.options.getString('producto', true);
      const nombreMaterial = interaction.options.getString('material', true);
      const cantidad       = interaction.options.getInteger('cantidad', true);

      const [product, material] = await Promise.all([
        prisma.shopProduct.findUnique({ where: { guildId_name: { guildId, name: nombreProducto } } }),
        prisma.shopMaterial.findUnique({ where: { guildId_name: { guildId, name: nombreMaterial } } }),
      ]);
      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }
      if (!material) {
        await interaction.editReply(`❌ Material **${nombreMaterial}** no encontrado.`);
        return;
      }

      await prisma.shopProductComponent.upsert({
        where:  { productId_materialId: { productId: product.id, materialId: material.id } },
        update: { quantityRequired: cantidad },
        create: { productId: product.id, materialId: material.id, quantityRequired: cantidad },
      });

      await interaction.editReply(
        `✅ **${nombreProducto}** requiere **${cantidad} x ${nombreMaterial}**.`,
      );
      return;
    }

    // ── /tienda producto-precio ──────────────────────────────────────────────
    if (sub === 'producto-precio') {
      const nombreProducto = interaction.options.getString('producto', true);
      const nuevoPrecio    = interaction.options.getNumber('precio', true);

      const product = await prisma.shopProduct.findUnique({
        where:   { guildId_name: { guildId, name: nombreProducto } },
        include: { prices: { where: { validTo: null } } },
      });
      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }

      await prisma.$transaction(async tx => {
        for (const p of product.prices) {
          await tx.shopProductPrice.update({
            where: { id: p.id },
            data:  { validTo: new Date() },
          });
        }
        await tx.shopProductPrice.create({
          data: { productId: product.id, price: nuevoPrecio, changedByUserId: staffUser.id },
        });
      });

      void syncProductosToSheet(guildId);
      await interaction.editReply(
        `✅ Precio de **${nombreProducto}** actualizado a **${nuevoPrecio} $**.`,
      );
      return;
    }

    // ── /tienda producto-activar / producto-desactivar ───────────────────────
    if (sub === 'producto-activar' || sub === 'producto-desactivar') {
      const nombreProducto = interaction.options.getString('producto', true);
      const activar        = sub === 'producto-activar';

      const product = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombreProducto } },
      });
      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }
      if (product.isActive === activar) {
        await interaction.editReply(
          `ℹ️ **${nombreProducto}** ya está ${activar ? 'activo' : 'desactivado'}.`,
        );
        return;
      }

      await prisma.shopProduct.update({ where: { id: product.id }, data: { isActive: activar } });
      void syncProductosToSheet(guildId);
      await interaction.editReply(
        `${activar ? '✅' : '⛔'} **${nombreProducto}** ${activar ? 'activado' : 'desactivado'}.`,
      );
      return;
    }

    // ── /tienda producto-eliminar ────────────────────────────────────────────
    if (sub === 'producto-eliminar') {
      const nombreProducto = interaction.options.getString('producto', true);

      const product = await prisma.shopProduct.findUnique({
        where:   { guildId_name: { guildId, name: nombreProducto } },
        include: { orderItems: { take: 1 } },
      });
      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }
      if (product.orderItems.length > 0) {
        await interaction.editReply(
          `❌ **${nombreProducto}** tiene pedidos asociados. Usa \`/tienda producto-desactivar\` en su lugar.`,
        );
        return;
      }

      await prisma.shopProduct.delete({ where: { id: product.id } });
      void syncProductosToSheet(guildId);
      await interaction.editReply(`✅ Producto **${nombreProducto}** eliminado.`);
      return;
    }

    // ── /tienda stats ─────────────────────────────────────────────────────────
    if (sub === 'stats') {
      const periodo = interaction.options.getString('periodo') ?? 'semana';

      const now = new Date();
      let from: Date | undefined;
      let periodoLabel: string;

      if (periodo === 'hoy') {
        from = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        periodoLabel = 'Hoy';
      } else if (periodo === 'semana') {
        from = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        periodoLabel = 'Últimos 7 días';
      } else if (periodo === 'mes') {
        from = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        periodoLabel = 'Últimos 30 días';
      } else {
        from = undefined;
        periodoLabel = 'Todo el tiempo';
      }

      // Ventas cerradas en el período
      const sales = await prisma.shopSale.findMany({
        where: {
          guildId,
          ...(from ? { soldAt: { gte: from } } : {}),
        },
        include: {
          order: {
            include: { items: { include: { product: true } } },
          },
          buyer: true,
        },
      });

      // Pedidos activos (estado actual, sin filtro de período)
      const [pendingCount, acceptedCount] = await Promise.all([
        prisma.shopOrder.count({ where: { guildId, status: 'pending' } }),
        prisma.shopOrder.count({ where: { guildId, status: 'accepted' } }),
      ]);

      const totalRevenue = sales.reduce(
        (sum, s) => sum + Number(s.totalAmount),
        0,
      );
      const avgOrder = sales.length > 0 ? totalRevenue / sales.length : 0;

      // Top productos por cantidad vendida
      const productQty = new Map<string, number>();
      for (const sale of sales) {
        for (const item of sale.order.items) {
          const prev = productQty.get(item.product.name) ?? 0;
          productQty.set(item.product.name, prev + item.deliveredQuantity);
        }
      }
      const topProducts = [...productQty.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      // Top compradores por gasto
      const buyerSpend = new Map<string, { name: string; total: number }>();
      for (const sale of sales) {
        const key  = sale.buyer.discordUserId;
        const prev = buyerSpend.get(key);
        buyerSpend.set(key, {
          name:  sale.buyer.displayName,
          total: (prev?.total ?? 0) + Number(sale.totalAmount),
        });
      }
      const topBuyers = [...buyerSpend.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .slice(0, 5);

      const fmt = (n: number) =>
        n.toLocaleString('es-CO', { minimumFractionDigits: 0, maximumFractionDigits: 2 });

      const embed = new EmbedBuilder()
        .setTitle('📊 Estadísticas — Tienda Aquaris')
        .setColor(0x5865f2)
        .setFooter({ text: `Período: ${periodoLabel}` })
        .setTimestamp()
        .addFields(
          {
            name:   '💰 Ingresos',
            value:  `**${fmt(totalRevenue)} $**`,
            inline: true,
          },
          {
            name:   '📦 Pedidos entregados',
            value:  `**${sales.length}**`,
            inline: true,
          },
          {
            name:   '📈 Promedio por pedido',
            value:  sales.length > 0 ? `**${fmt(avgOrder)} $**` : '—',
            inline: true,
          },
        );

      if (topProducts.length > 0) {
        embed.addFields({
          name:  '🏆 Top productos (unidades vendidas)',
          value: topProducts
            .map(([name, qty], i) => `${i + 1}. **${name}** — ${qty}`)
            .join('\n'),
          inline: false,
        });
      }

      if (topBuyers.length > 0) {
        embed.addFields({
          name:  '👤 Top compradores (gasto)',
          value: topBuyers
            .map(([, { name, total }], i) => `${i + 1}. **${name}** — ${fmt(total)} $`)
            .join('\n'),
          inline: false,
        });
      }

      embed.addFields({
        name:  '🔄 Pedidos activos ahora',
        value: `🟡 Pendientes: **${pendingCount}**  ·  🟢 Aceptados: **${acceptedCount}**`,
        inline: false,
      });

      await interaction.editReply({ embeds: [embed] });
      return;
    }
  },
};
