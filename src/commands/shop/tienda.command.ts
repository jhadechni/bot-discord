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
import {
  buildCatalogView,
  queryCatalogProducts,
} from '../../shop/catalog.js';
import {
  PRESENTATION_TYPE_CHOICES,
  hasProductInventoryDefinition,
  resolvePresentationLabel,
  resolvePresentationQuantity,
} from '../../shop/quantities.js';
import {
  assertShopTaxonomy,
  getCategoryDefinition,
  getSubcategoryDefinition,
  listCategoryDefinitions,
  listSubcategoryDefinitions,
  reloadTaxonomyFromDatabase,
} from '../../shop/taxonomy.js';

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

async function resolveMaterialPresentation(params: {
  cantidadBase?: number | null;
  etiquetaPresentacion?: string | null;
  guildId: string;
  materialName?: string | null;
  presentationType?: string | null;
}) {
  if (!params.materialName) {
    return null;
  }

  const material = await prisma.shopMaterial.findUnique({
    where: { guildId_name: { guildId: params.guildId, name: params.materialName } },
  });

  if (!material) {
    throw new Error(`Material **${params.materialName}** no encontrado.`);
  }

  const presentationType = (params.presentationType ?? 'unit') as typeof PRESENTATION_TYPE_CHOICES[number]['value'];
  const presentationQuantity = resolvePresentationQuantity({
    customQuantity: params.cantidadBase ?? null,
    presentationType,
    stackSize: material.stackSize,
  });

  return {
    material,
    presentationLabel: params.etiquetaPresentacion?.trim() || resolvePresentationLabel({
      presentationQuantity,
      presentationType,
      stackSize: material.stackSize,
    }),
    presentationQuantity,
    presentationType,
  };
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
        )
        .addIntegerOption(opt =>
          opt
            .setName('stack_max')
            .setDescription('Máximo stack del material')
            .setRequired(false)
            .addChoices(
              { name: '1', value: 1 },
              { name: '16', value: 16 },
              { name: '64', value: 64 },
            ),
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
        .setName('material-configurar')
        .setDescription('[Staff] Ajusta la unidad visual y el stack máximo de un material')
        .addStringOption(opt =>
          opt
            .setName('nombre')
            .setDescription('Nombre del material')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('unidad')
            .setDescription('Unidad visual (ej: item, bloque, poción)')
            .setRequired(false),
        )
        .addIntegerOption(opt =>
          opt
            .setName('stack_max')
            .setDescription('Máximo stack del material')
            .setRequired(false)
            .addChoices(
              { name: '1', value: 1 },
              { name: '16', value: 16 },
              { name: '64', value: 64 },
            ),
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
            .setName('categoria')
            .setDescription('Categoría del juego')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('subcategoria')
            .setDescription('Subcategoría dentro de la categoría')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('descripcion')
            .setDescription('Descripción opcional del producto')
            .setRequired(false),
        )
        .addStringOption(opt =>
          opt
            .setName('material_base')
            .setDescription('Material base si esta oferta vende un material directamente')
            .setRequired(false)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('presentacion')
            .setDescription('Cómo se vende el material base')
            .setRequired(false)
            .addChoices(
              ...PRESENTATION_TYPE_CHOICES.map(choice => ({ name: choice.label, value: choice.value })),
            ),
        )
        .addIntegerOption(opt =>
          opt
            .setName('cantidad_base')
            .setDescription('Cantidad base si la presentación es personalizada')
            .setRequired(false)
            .setMinValue(1),
        )
        .addStringOption(opt =>
          opt
            .setName('etiqueta_presentacion')
            .setDescription('Texto visible para la presentación (opcional)')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-presentacion')
        .setDescription('[Staff] Configura una presentación estandarizada para una oferta de material')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('material_base')
            .setDescription('Material base que representa la oferta')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('presentacion')
            .setDescription('Forma de venta')
            .setRequired(true)
            .addChoices(
              ...PRESENTATION_TYPE_CHOICES.map(choice => ({ name: choice.label, value: choice.value })),
            ),
        )
        .addIntegerOption(opt =>
          opt
            .setName('cantidad_base')
            .setDescription('Cantidad base si la presentación es personalizada')
            .setRequired(false)
            .setMinValue(1),
        )
        .addStringOption(opt =>
          opt
            .setName('etiqueta_presentacion')
            .setDescription('Texto visible para la presentación (opcional)')
            .setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('producto-clasificar')
        .setDescription('[Staff] Cambia la categoría y subcategoría de un producto')
        .addStringOption(opt =>
          opt
            .setName('producto')
            .setDescription('Nombre del producto')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('categoria')
            .setDescription('Nueva categoría')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addStringOption(opt =>
          opt
            .setName('subcategoria')
            .setDescription('Nueva subcategoría')
            .setRequired(true)
            .setAutocomplete(true),
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

    if (focused.name === 'categoria') {
      await reloadTaxonomyFromDatabase();

      const categories = listCategoryDefinitions()
        .filter(category => {
          const haystack = `${category.label} ${category.key}`.toLowerCase();
          return haystack.includes(value);
        })
        .slice(0, 25)
        .map(category => ({
          name: `${category.emoji} ${category.label}`,
          value: category.key,
        }));
      await interaction.respond(categories);
      return;
    }

    if (focused.name === 'subcategoria') {
      await reloadTaxonomyFromDatabase();

      const categoria = interaction.options.getString('categoria');
      const subcategories = listSubcategoryDefinitions(categoria)
        .filter(subcategory => {
          const haystack = `${subcategory.label} ${subcategory.key}`.toLowerCase();
          return haystack.includes(value);
        })
        .slice(0, 25)
        .map(subcategory => ({
          name: subcategory.label,
          value: subcategory.key,
        }));
      await interaction.respond(subcategories);
      return;
    }

    // 'nombre' autocomplete → materiales (solo en subcomandos que lo necesitan)
    // 'material' autocomplete → materiales
    if (focused.name === 'nombre' || focused.name === 'material' || focused.name === 'material_base') {
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
      await interaction.deferReply({ephemeral: true });

      const products = await queryCatalogProducts(guildId);

      if (products.length === 0) {
        await interaction.editReply('🏪 La tienda está vacía por el momento.');
        return;
      }

      const { embed, components } = buildCatalogView(products);

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
    const staffUser = await upsertShopUser(guildId, interaction.user, true);

    // ── /tienda material-agregar ─────────────────────────────────────────────
    if (sub === 'material-agregar') {
      const nombre = interaction.options.getString('nombre', true).trim();
      const unidad = interaction.options.getString('unidad') ?? 'item';
      const stackMax = interaction.options.getInteger('stack_max') ?? 64;

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
          stackSize: stackMax,
          inventory: { create: { guildId } },
        },
      });

      await interaction.editReply(
        `✅ Material **${nombre}** registrado (unidad: \`${unidad}\`, stack max: \`${stackMax}\`, stock inicial: 0).\n` +
        `Usa \`/stock sumar\` para agregar stock.`,
      );
      return;
    }

    // ── /tienda material-eliminar ────────────────────────────────────────────
    if (sub === 'material-eliminar') {
      const nombre = interaction.options.getString('nombre', true);

      const material = await prisma.shopMaterial.findUnique({
        where:   { guildId_name: { guildId, name: nombre } },
        include: {
          components: true,
          directProducts: { take: 1 },
          inventory: true,
          movements: { take: 1 },
          withdrawals: { take: 1 },
        },
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
      if (material.directProducts.length > 0) {
        await interaction.editReply(
          `❌ **${nombre}** está configurado como material base de una oferta en la tienda. Elimínala o cambia su presentación primero.`,
        );
        return;
      }
      if ((material.inventory?.currentStock ?? 0) > 0) {
        await interaction.editReply(
          `❌ **${nombre}** tiene ${material.inventory?.currentStock} en stock. Retíralo antes de eliminar.`,
        );
        return;
      }
      if ((material.inventory?.reservedStock ?? 0) > 0) {
        await interaction.editReply(
          `❌ **${nombre}** tiene stock reservado. Libera los pedidos activos antes de eliminarlo.`,
        );
        return;
      }
      if (material.movements.length > 0 || material.withdrawals.length > 0) {
        await interaction.editReply(
          `❌ **${nombre}** ya tiene historial de inventario. No se puede eliminar sin perder trazabilidad.`,
        );
        return;
      }

      await prisma.shopMaterial.delete({ where: { id: material.id } });
      await interaction.editReply(`✅ Material **${nombre}** eliminado.`);
      return;
    }

    // ── /tienda material-configurar ─────────────────────────────────────────
    if (sub === 'material-configurar') {
      const nombre = interaction.options.getString('nombre', true);
      const unidad = interaction.options.getString('unidad');
      const stackMax = interaction.options.getInteger('stack_max');

      if (!unidad && !stackMax) {
        await interaction.editReply('❌ Debes indicar al menos `unidad` o `stack_max`.');
        return;
      }

      const material = await prisma.shopMaterial.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
      });

      if (!material) {
        await interaction.editReply(`❌ No existe un material llamado **${nombre}**.`);
        return;
      }

      await prisma.shopMaterial.update({
        where: { id: material.id },
        data: {
          baseUnit: unidad ?? material.baseUnit,
          stackSize: stackMax ?? material.stackSize,
        },
      });

      await interaction.editReply(
        `✅ **${nombre}** actualizado.\nUnidad: \`${unidad ?? material.baseUnit}\` · Stack max: \`${stackMax ?? material.stackSize}\``,
      );
      return;
    }

    // ── /tienda producto-agregar ─────────────────────────────────────────────
    if (sub === 'producto-agregar') {
      const nombre     = interaction.options.getString('nombre', true).trim();
      const tipo       = interaction.options.getString('tipo', true);
      const precio     = interaction.options.getNumber('precio', true);
      const descripcion = interaction.options.getString('descripcion') ?? null;
      const materialBaseName = interaction.options.getString('material_base');
      const presentationType = interaction.options.getString('presentacion');
      const cantidadBase = interaction.options.getInteger('cantidad_base');
      const etiquetaPresentacion = interaction.options.getString('etiqueta_presentacion');
      const categoriaRaw = interaction.options.getString('categoria', true);
      const subcategoriaRaw = interaction.options.getString('subcategoria', true);

      await reloadTaxonomyFromDatabase();

      let taxonomy: ReturnType<typeof assertShopTaxonomy>;
      try {
        taxonomy = assertShopTaxonomy(categoriaRaw, subcategoriaRaw);
      } catch (err) {
        await interaction.editReply(`❌ ${err instanceof Error ? err.message : 'Clasificación inválida.'}`);
        return;
      }
      const categoryLabel = getCategoryDefinition(taxonomy.category).label;
      const subcategoryLabel = getSubcategoryDefinition(taxonomy.category, taxonomy.subcategory).label;

      const existing = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
      });
      if (existing) {
        await interaction.editReply(`❌ Ya existe un producto llamado **${nombre}**.`);
        return;
      }

      if (tipo === 'service' && materialBaseName) {
        await interaction.editReply('❌ Un servicio no debe tener material base ni presentación de inventario.');
        return;
      }

      let presentationConfig = null;
      try {
        presentationConfig = await resolveMaterialPresentation({
          cantidadBase,
          etiquetaPresentacion,
          guildId,
          materialName: materialBaseName,
          presentationType,
        });
      } catch (err) {
        await interaction.editReply(`❌ ${err instanceof Error ? err.message : 'Presentación inválida.'}`);
        return;
      }

      await prisma.shopProduct.create({
        data: {
          guildId,
          name:        nombre,
          productType: tipo,
          category:    taxonomy.category,
          subcategory: taxonomy.subcategory,
          description: descripcion,
          baseMaterialId: presentationConfig?.material.id ?? null,
          presentationType: presentationConfig?.presentationType ?? 'custom',
          presentationQuantity: presentationConfig?.presentationQuantity ?? 1,
          presentationLabel: presentationConfig?.presentationLabel ?? null,
          isActive: tipo === 'service' || !!presentationConfig,
          ...(presentationConfig
            ? {
                components: {
                  create: {
                    materialId: presentationConfig.material.id,
                    quantityRequired: presentationConfig.presentationQuantity,
                  },
                },
              }
            : {}),
          prices: {
            create: { price: precio, changedByUserId: staffUser.id },
          },
        },
      });

      await interaction.editReply(
        `✅ Producto **${nombre}** creado a **${precio} $**.\n` +
        `Clasificación: **${categoryLabel} / ${subcategoryLabel}**.\n` +
        (
          tipo === 'service'
            ? 'Quedó activo porque es un servicio sin inventario base.'
            : presentationConfig
              ? `Quedó activo como oferta de **${presentationConfig.presentationLabel}** de **${presentationConfig.material.name}**.`
              : 'Quedó inactivo hasta que definas sus materiales y lo actives.'
        ),
      );
      return;
    }

    // ── /tienda producto-presentacion ───────────────────────────────────────
    if (sub === 'producto-presentacion') {
      const nombreProducto = interaction.options.getString('producto', true);
      const materialBaseName = interaction.options.getString('material_base', true);
      const presentationType = interaction.options.getString('presentacion', true);
      const cantidadBase = interaction.options.getInteger('cantidad_base');
      const etiquetaPresentacion = interaction.options.getString('etiqueta_presentacion');

      const product = await prisma.shopProduct.findUnique({
        where: {
          guildId_name: { guildId, name: nombreProducto },
        },
      });

      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }

      if (product.productType === 'service') {
        await interaction.editReply('❌ Un servicio no debe configurarse como oferta de material.');
        return;
      }

      const activeOrders = await prisma.shopOrderItem.count({
        where: {
          productId: product.id,
          order: {
            guildId,
            status: { in: ['pending', 'accepted'] },
          },
        },
      });
      if (activeOrders > 0) {
        await interaction.editReply(
          `❌ **${nombreProducto}** tiene pedidos activos. No cambies su presentación hasta que se resuelvan.`,
        );
        return;
      }

      let presentationConfig;
      try {
        presentationConfig = await resolveMaterialPresentation({
          cantidadBase,
          etiquetaPresentacion,
          guildId,
          materialName: materialBaseName,
          presentationType,
        });
      } catch (err) {
        await interaction.editReply(`❌ ${err instanceof Error ? err.message : 'Presentación inválida.'}`);
        return;
      }

      if (!presentationConfig) {
        await interaction.editReply('❌ No se pudo resolver la presentación solicitada.');
        return;
      }

      await prisma.$transaction(async tx => {
        if (product.baseMaterialId && product.baseMaterialId !== presentationConfig.material.id) {
          await tx.shopProductComponent.deleteMany({
            where: {
              productId: product.id,
              materialId: product.baseMaterialId,
            },
          });
        }

        await tx.shopProduct.update({
          where: { id: product.id },
          data: {
            baseMaterialId: presentationConfig.material.id,
            isActive: true,
            presentationType: presentationConfig.presentationType,
            presentationQuantity: presentationConfig.presentationQuantity,
            presentationLabel: presentationConfig.presentationLabel,
          },
        });

        await tx.shopProductComponent.upsert({
          where: {
            productId_materialId: {
              productId: product.id,
              materialId: presentationConfig.material.id,
            },
          },
          update: { quantityRequired: presentationConfig.presentationQuantity },
          create: {
            productId: product.id,
            materialId: presentationConfig.material.id,
            quantityRequired: presentationConfig.presentationQuantity,
          },
        });
      });

      await interaction.editReply(
        `✅ **${nombreProducto}** ahora vende **${presentationConfig.presentationLabel}** de **${presentationConfig.material.name}**.\n` +
        `Consumo base: ${presentationConfig.presentationQuantity} ${presentationConfig.material.baseUnit}.`,
      );
      return;
    }

    // ── /tienda producto-clasificar ─────────────────────────────────────────
    if (sub === 'producto-clasificar') {
      const nombreProducto = interaction.options.getString('producto', true);
      const categoriaRaw = interaction.options.getString('categoria', true);
      const subcategoriaRaw = interaction.options.getString('subcategoria', true);

      await reloadTaxonomyFromDatabase();

      let taxonomy: ReturnType<typeof assertShopTaxonomy>;
      try {
        taxonomy = assertShopTaxonomy(categoriaRaw, subcategoriaRaw);
      } catch (err) {
        await interaction.editReply(`❌ ${err instanceof Error ? err.message : 'Clasificación inválida.'}`);
        return;
      }
      const categoryLabel = getCategoryDefinition(taxonomy.category).label;
      const subcategoryLabel = getSubcategoryDefinition(taxonomy.category, taxonomy.subcategory).label;

      const product = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombreProducto } },
      });
      if (!product) {
        await interaction.editReply(`❌ Producto **${nombreProducto}** no encontrado.`);
        return;
      }

      await prisma.shopProduct.update({
        where: { id: product.id },
        data:  {
          category: taxonomy.category,
          subcategory: taxonomy.subcategory,
        },
      });

      await interaction.editReply(
        `✅ **${nombreProducto}** ahora pertenece a **${categoryLabel} / ${subcategoryLabel}**.`,
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

      if (product.baseMaterialId === material.id) {
        await interaction.editReply(
          `❌ **${nombreProducto}** ya usa **${nombreMaterial}** como material base estandarizado. Usa \`/tienda producto-presentacion\` para cambiar esa cantidad.`,
        );
        return;
      }

      const activeOrders = await prisma.shopOrderItem.count({
        where: {
          productId: product.id,
          order: {
            guildId,
            status: { in: ['pending', 'accepted'] },
          },
        },
      });
      if (activeOrders > 0) {
        await interaction.editReply(
          `❌ **${nombreProducto}** tiene pedidos activos. No cambies su receta hasta que se resuelvan.`,
        );
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
        where:   { guildId_name: { guildId, name: nombreProducto } },
        include: { components: { take: 1 } },
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
      if (activar && !hasProductInventoryDefinition(product)) {
        await interaction.editReply(
          `❌ **${nombreProducto}** no se puede activar porque no tiene una definición de inventario configurada.`,
        );
        return;
      }

      await prisma.shopProduct.update({ where: { id: product.id }, data: { isActive: activar } });
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

      await prisma.$transaction([
        prisma.shopProductPrice.deleteMany({ where: { productId: product.id } }),
        prisma.shopProductComponent.deleteMany({ where: { productId: product.id } }),
        prisma.shopProduct.delete({ where: { id: product.id } }),
      ]);
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
