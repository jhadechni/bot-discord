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
  STOCK_CAPTURE_UNIT_CHOICES,
  convertCaptureQuantityToBase,
  formatCaptureInput,
} from '../../shop/quantities.js';
import {
  SHOP_COLORS,
  buildInventoryEmbed,
  buildLowStockEmbed,
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

export const stockCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('stock')
    .setDescription('[Staff] Gestión de inventario de materiales')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub.setName('ver').setDescription('Lista todos los materiales con su stock actual'),
    )
    .addSubcommand(sub =>
      sub.setName('bajo').setDescription('Materiales por debajo del umbral de alerta'),
    )
    .addSubcommand(sub =>
      sub
        .setName('sumar')
        .setDescription('Añade stock a un material')
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
            .setDescription('Cantidad a añadir')
            .setRequired(true)
            .setMinValue(1),
        )
        .addStringOption(opt =>
          opt
            .setName('modo')
            .setDescription('Cómo interpretar la cantidad')
            .setRequired(false)
            .addChoices(
              ...STOCK_CAPTURE_UNIT_CHOICES.map(choice => ({ name: choice.label, value: choice.value })),
            ),
        )
        .addStringOption(opt =>
          opt.setName('motivo').setDescription('Motivo del ingreso (opcional)').setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('restar')
        .setDescription('Retira stock de un material')
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
            .setDescription('Cantidad a retirar')
            .setRequired(true)
            .setMinValue(1),
        )
        .addStringOption(opt =>
          opt
            .setName('modo')
            .setDescription('Cómo interpretar la cantidad')
            .setRequired(false)
            .addChoices(
              ...STOCK_CAPTURE_UNIT_CHOICES.map(choice => ({ name: choice.label, value: choice.value })),
            ),
        )
        .addStringOption(opt =>
          opt.setName('motivo').setDescription('Motivo del retiro').setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('actualizar')
        .setDescription('Establece el stock absoluto de un material')
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
            .setDescription('Nueva cantidad total')
            .setRequired(true)
            .setMinValue(0),
        )
        .addStringOption(opt =>
          opt
            .setName('modo')
            .setDescription('Cómo interpretar la cantidad')
            .setRequired(false)
            .addChoices(
              ...STOCK_CAPTURE_UNIT_CHOICES.map(choice => ({ name: choice.label, value: choice.value })),
            ),
        )
        .addStringOption(opt =>
          opt.setName('motivo').setDescription('Motivo del ajuste (opcional)').setRequired(false),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('alerta')
        .setDescription('Configura el umbral de alerta de stock bajo para un material')
        .addStringOption(opt =>
          opt
            .setName('material')
            .setDescription('Nombre del material')
            .setRequired(true)
            .setAutocomplete(true),
        )
        .addIntegerOption(opt =>
          opt
            .setName('minimo')
            .setDescription('Alerta cuando el stock disponible baje de este valor')
            .setRequired(true)
            .setMinValue(0),
        ),
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }
    const config = await getOrCreateGuildConfig(guildId);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.respond([]);
      return;
    }

    const value = interaction.options.getFocused().toLowerCase();
    const materials = await prisma.shopMaterial.findMany({
      where:   { guildId, name: { contains: value, mode: 'insensitive' } },
      take:    25,
      select:  { name: true },
      orderBy: { name: 'asc' },
    });
    await interaction.respond(materials.map(m => ({ name: m.name, value: m.name })));
  },

  async execute(interaction: ChatInputCommandInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) return;

    const config = await getOrCreateGuildConfig(guildId);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({
        embeds: [buildShopErrorEmbed('Permiso insuficiente', 'Solo el staff puede gestionar el inventario.')],
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });
    const sub = interaction.options.getSubcommand();

    // ── /stock ver ───────────────────────────────────────────────────────────
    if (sub === 'ver') {
      const inventories = await prisma.shopInventory.findMany({
        where:   { guildId },
        include: { material: true },
        orderBy: { material: { name: 'asc' } },
      });

      if (inventories.length === 0) {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Sin materiales',
              description: 'No hay materiales registrados. El catálogo y los materiales se administran fuera de Discord.',
              color: SHOP_COLORS.neutral,
            }),
          ],
        });
        return;
      }

      await interaction.editReply({ embeds: [buildInventoryEmbed(inventories)] });
      return;
    }

    // ── /stock bajo ──────────────────────────────────────────────────────────
    if (sub === 'bajo') {
      const inventories = await prisma.shopInventory.findMany({
        where:   { guildId, minStockAlert: { gt: 0 } },
        include: { material: true },
        orderBy: { material: { name: 'asc' } },
      });

      const bajos = inventories.filter(
        inv => (inv.currentStock - inv.reservedStock) <= inv.minStockAlert,
      );

      if (bajos.length === 0) {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Stock en orden',
              description: 'Todos los materiales están por encima del umbral de alerta.',
              color: SHOP_COLORS.success,
            }),
          ],
        });
        return;
      }

      await interaction.editReply({ embeds: [buildLowStockEmbed(bajos)] });
      return;
    }

    // ── Subcomandos que modifican stock (requieren material + ShopUser) ───────
    const staffUser     = await upsertShopUser(guildId, interaction.user, true);
    const nombreMaterial = interaction.options.getString('material', true);

    const material = await prisma.shopMaterial.findUnique({
      where:   { guildId_name: { guildId, name: nombreMaterial } },
      include: { inventory: true },
    });
    if (!material?.inventory) {
      await interaction.editReply({
        embeds: [buildShopErrorEmbed('Material no encontrado', `Material **${nombreMaterial}** no encontrado.`)],
      });
      return;
    }

    const inv = material.inventory;

    // ── /stock sumar ─────────────────────────────────────────────────────────
    if (sub === 'sumar') {
      const cantidad = interaction.options.getInteger('cantidad', true);
      const modo = (interaction.options.getString('modo') ?? 'unit') as typeof STOCK_CAPTURE_UNIT_CHOICES[number]['value'];
      const cantidadBase = convertCaptureQuantityToBase(cantidad, modo, material.stackSize);
      const motivo   = interaction.options.getString('motivo') ?? 'Ingreso manual';

      await prisma.$transaction([
        prisma.shopInventory.update({
          where: { id: inv.id },
          data:  { currentStock: { increment: cantidadBase } },
        }),
        prisma.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:    material.id,
            movementType:  'stock_add',
            quantity:      cantidadBase,
            reason:        motivo,
            performedById: staffUser.id,
          },
        }),
      ]);

      await interaction.editReply(
        `✅ Ingreso registrado: **+${formatCaptureInput({
          baseQuantity: cantidadBase,
          captureQuantity: cantidad,
          captureUnit: modo,
          unitLabel: material.baseUnit,
        })}** de **${nombreMaterial}**.\n` +
        `Stock total: ${inv.currentStock + cantidadBase}`,
      );
      return;
    }

    // ── /stock restar ────────────────────────────────────────────────────────
    if (sub === 'restar') {
      const cantidad = interaction.options.getInteger('cantidad', true);
      const modo = (interaction.options.getString('modo') ?? 'unit') as typeof STOCK_CAPTURE_UNIT_CHOICES[number]['value'];
      const cantidadBase = convertCaptureQuantityToBase(cantidad, modo, material.stackSize);
      const motivo   = interaction.options.getString('motivo') ?? 'Retiro manual';
      const disponible = inv.currentStock - inv.reservedStock;

      if (cantidadBase > disponible) {
        await interaction.editReply(
          `❌ Stock disponible insuficiente.\n` +
          `Total: ${inv.currentStock}  ·  Reservado: ${inv.reservedStock}  ·  Disponible: **${disponible}**`,
        );
        return;
      }

      await prisma.$transaction([
        prisma.shopInventory.update({
          where: { id: inv.id },
          data:  { currentStock: { decrement: cantidadBase } },
        }),
        prisma.shopWithdrawal.create({
          data: {
            guildId,
            materialId: material.id,
            quantity: cantidadBase,
            reason: motivo,
            performedById: staffUser.id,
          },
        }),
        prisma.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:    material.id,
            movementType:  'withdrawal',
            quantity:      cantidadBase,
            reason:        motivo,
            performedById: staffUser.id,
          },
        }),
      ]);

      await interaction.editReply(
        `✅ Retiro registrado: **-${formatCaptureInput({
          baseQuantity: cantidadBase,
          captureQuantity: cantidad,
          captureUnit: modo,
          unitLabel: material.baseUnit,
        })}** de **${nombreMaterial}**.\n` +
        `Stock total: ${inv.currentStock - cantidadBase}`,
      );
      return;
    }

    // ── /stock actualizar ────────────────────────────────────────────────────
    if (sub === 'actualizar') {
      const cantidad = interaction.options.getInteger('cantidad', true);
      const modo = (interaction.options.getString('modo') ?? 'unit') as typeof STOCK_CAPTURE_UNIT_CHOICES[number]['value'];
      const nuevaCantidad = convertCaptureQuantityToBase(cantidad, modo, material.stackSize);
      const motivo        = interaction.options.getString('motivo') ?? 'Ajuste manual';

      if (nuevaCantidad < inv.reservedStock) {
        await interaction.editReply(
          `❌ No puedes bajar el stock por debajo del reservado (${inv.reservedStock}).`,
        );
        return;
      }

      const delta = nuevaCantidad - inv.currentStock;

      await prisma.$transaction([
        prisma.shopInventory.update({
          where: { id: inv.id },
          data:  { currentStock: nuevaCantidad },
        }),
        prisma.shopInventoryMovement.create({
          data: {
            guildId,
            materialId:    material.id,
            movementType:  'manual_adjustment',
            quantity:      delta,
            reason:        motivo,
            performedById: staffUser.id,
          },
        }),
      ]);

      await interaction.editReply(
        `✅ Stock de **${nombreMaterial}** ajustado a **${formatCaptureInput({
          baseQuantity: nuevaCantidad,
          captureQuantity: cantidad,
          captureUnit: modo,
          unitLabel: material.baseUnit,
        })}** (${delta >= 0 ? '+' : ''}${delta}).`,
      );
      return;
    }

    // ── /stock alerta ────────────────────────────────────────────────────────
    if (sub === 'alerta') {
      const minimo = interaction.options.getInteger('minimo', true);

      await prisma.shopInventory.update({
        where: { id: inv.id },
        data:  { minStockAlert: minimo },
      });

      await interaction.editReply(
        minimo === 0
          ? `✅ Alerta de stock desactivada para **${nombreMaterial}**.`
          : `✅ Alerta configurada: se avisará cuando **${nombreMaterial}** baje de **${minimo}** unidades.`,
      );
      return;
    }
  },
};
