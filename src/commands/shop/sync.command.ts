import {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  type ChatInputCommandInteraction,
  type GuildMember,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { upsertShopUser } from '../../database/shop-user.js';
import { sheetsEnabled } from '../../shop/sync.js';
import {
  syncProductosToSheet,
  syncInventarioToSheet,
  syncVentasToSheet,
  syncPedidosToSheet,
  importProductosFromSheet,
  importInventarioFromSheet,
  type ImportSummary,
} from '../../shop/sync.js';

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

function summaryText(summary: ImportSummary): string {
  const lines = [
    `✅ Creados: **${summary.created}**`,
    `🔄 Actualizados: **${summary.updated}**`,
    `⏸️ Sin cambios: **${summary.unchanged}**`,
  ];
  if (summary.notFound > 0)  lines.push(`⚠️ No encontrados: **${summary.notFound}**`);
  if (summary.errors.length > 0) {
    lines.push(`❌ Errores (${summary.errors.length}):`);
    for (const e of summary.errors.slice(0, 5)) lines.push(`  • ${e}`);
    if (summary.errors.length > 5) lines.push(`  …y ${summary.errors.length - 5} más`);
  }
  return lines.join('\n');
}

export const syncCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('sync')
    .setDescription('[Staff] Sincronización entre la base de datos y Google Sheets')
    .addSubcommandGroup(group =>
      group
        .setName('exportar')
        .setDescription('Exporta datos de la BD a Google Sheets')
        .addSubcommand(sub =>
          sub.setName('productos').setDescription('Exporta el catálogo de productos a Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('inventario').setDescription('Exporta el inventario de materiales a Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('ventas').setDescription('Exporta el historial completo de ventas a Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('pedidos').setDescription('Exporta los pedidos activos a Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('todo').setDescription('Exporta productos, inventario, ventas y pedidos a Sheets'),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('importar')
        .setDescription('Importa datos de Google Sheets a la BD')
        .addSubcommand(sub =>
          sub.setName('productos').setDescription('Importa productos desde el tab Productos de Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('inventario').setDescription('Importa stock desde el tab Inventario de Sheets'),
        ),
    ),

  async execute(interaction: ChatInputCommandInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) return;

    const config = await getOrCreateGuildConfig(guildId);
    if (!hasStaffPermission(interaction, config.staffRoleId ?? null)) {
      await interaction.reply({ content: '❌ Solo el staff puede usar `/sync`.', ephemeral: true });
      return;
    }

    if (!sheetsEnabled()) {
      await interaction.reply({
        content: '⚠️ Google Sheets no está configurado (`GOOGLE_SHEETS_ID` no definido en `.env`).',
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const group = interaction.options.getSubcommandGroup(true);
    const sub   = interaction.options.getSubcommand(true);

    // ── Exportar ─────────────────────────────────────────────────────────────
    if (group === 'exportar') {
      const tasks: Array<() => Promise<void>> = [];

      if (sub === 'productos' || sub === 'todo') tasks.push(() => syncProductosToSheet(guildId));
      if (sub === 'inventario' || sub === 'todo') tasks.push(() => syncInventarioToSheet(guildId));
      if (sub === 'ventas'     || sub === 'todo') tasks.push(() => syncVentasToSheet(guildId));
      if (sub === 'pedidos'    || sub === 'todo') tasks.push(() => syncPedidosToSheet(guildId));

      await Promise.all(tasks.map(t => t()));

      const label = sub === 'todo' ? 'Todos los tabs' : sub.charAt(0).toUpperCase() + sub.slice(1);
      await interaction.editReply(`✅ **${label}** exportado(s) a Google Sheets correctamente.`);
      return;
    }

    // ── Importar ──────────────────────────────────────────────────────────────
    if (group === 'importar') {
      const staffUser = await upsertShopUser(guildId, interaction.user);

      let summary: ImportSummary;

      if (sub === 'productos') {
        summary = await importProductosFromSheet(guildId, staffUser.id);
        const embed = new EmbedBuilder()
          .setTitle('📥 Importación de Productos')
          .setDescription(summaryText(summary))
          .setColor(summary.errors.length > 0 ? 0xffa500 : 0x57f287)
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });

        // Re-exportar para que el sheet quede sincronizado con el estado real de la BD
        void syncProductosToSheet(guildId);
        return;
      }

      if (sub === 'inventario') {
        summary = await importInventarioFromSheet(guildId, staffUser.id);
        const embed = new EmbedBuilder()
          .setTitle('📥 Importación de Inventario')
          .setDescription(summaryText(summary))
          .setColor(summary.errors.length > 0 ? 0xffa500 : 0x57f287)
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });

        // Re-exportar para reflejar el estado real (ej: disponible, reservado)
        void syncInventarioToSheet(guildId);
        return;
      }
    }
  },
};
