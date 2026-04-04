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
  syncComponentesToSheet,
  syncInventarioToSheet,
  syncCategoriasToSheet,
  syncVentasToSheet,
  syncPedidosToSheet,
  importCategoriasFromSheet,
  importProductosFromSheet,
  importComponentesFromSheet,
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
  const formatNames = (names: string[] | undefined): string | null => {
    if (!names || names.length === 0) return null;
    const visible = names.slice(0, 10);
    const suffix = names.length > 10 ? ` …y ${names.length - 10} más` : '';
    return `${visible.join(', ')}${suffix}`;
  };

  const lines = [
    `✅ Creados: **${summary.created}**`,
    `🔄 Actualizados: **${summary.updated}**`,
    `⏸️ Sin cambios: **${summary.unchanged}**`,
  ];
  if (summary.notFound > 0)  lines.push(`⚠️ No encontrados: **${summary.notFound}**`);
  const createdNames = formatNames(summary.createdNames);
  if (createdNames) {
    lines.push(`🆕 Nombres creados: ${createdNames}`);
  }
  const notFoundNames = formatNames(summary.notFoundNames);
  if (notFoundNames) {
    lines.push(`🔎 Nombres no encontrados: ${notFoundNames}`);
  }
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
          sub.setName('categorias').setDescription('Exporta la taxonomía de categorías/subcategorías a Sheets y aplica dropdowns'),
        )
        .addSubcommand(sub =>
          sub.setName('productos').setDescription('Exporta el catálogo de productos a Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('componentes').setDescription('Exporta las recetas producto-material a Sheets'),
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
          sub.setName('todo').setDescription('Exporta categorías, productos, componentes, inventario, ventas y pedidos a Sheets'),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('importar')
        .setDescription('Importa datos de Google Sheets a la BD')
        .addSubcommand(sub =>
          sub.setName('categorias').setDescription('Carga la taxonomía de categorías desde el tab Categorías de Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('productos').setDescription('Importa productos desde el tab Productos de Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('componentes').setDescription('Importa recetas desde el tab Componentes de Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('inventario').setDescription('Importa stock desde el tab Inventario de Sheets'),
        )
        .addSubcommand(sub =>
          sub.setName('todo').setDescription('Importa categorías, productos, componentes e inventario desde Sheets'),
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

      if (sub === 'categorias' || sub === 'todo') tasks.push(() => syncCategoriasToSheet());
      if (sub === 'productos'  || sub === 'todo') tasks.push(() => syncProductosToSheet(guildId));
      if (sub === 'componentes' || sub === 'todo') tasks.push(() => syncComponentesToSheet(guildId));
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
      const staffUser = await upsertShopUser(guildId, interaction.user, true);

      let summary: ImportSummary;

      if (sub === 'categorias') {
        summary = await importCategoriasFromSheet();
        const catCount = summary.created;
        const embed = new EmbedBuilder()
          .setTitle('📥 Taxonomía importada desde Sheets')
          .setDescription(
            summary.errors.length > 0
              ? summaryText(summary)
              : `✅ **${catCount}** categoría${catCount !== 1 ? 's' : ''} cargada${catCount !== 1 ? 's' : ''} en memoria.\nLos productos se clasificarán con esta taxonomía hasta el próximo reinicio o re-importación.`,
          )
          .setColor(summary.errors.length > 0 ? 0xffa500 : 0x57f287)
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
        return;
      }

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

      if (sub === 'componentes') {
        summary = await importComponentesFromSheet(guildId);
        const embed = new EmbedBuilder()
          .setTitle('📥 Importación de Componentes')
          .setDescription(summaryText(summary))
          .setColor(summary.errors.length > 0 ? 0xffa500 : 0x57f287)
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
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
        return;
      }

      if (sub === 'todo') {
        // 1. Categorías primero — los productos necesitan la taxonomía para clasificarse
        const sumCategorias = await importCategoriasFromSheet();
        // 2. Productos
        const sumProductos = await importProductosFromSheet(guildId, staffUser.id);
        // 3. Inventario / materiales base
        const sumInventario = await importInventarioFromSheet(guildId, staffUser.id);
        // 4. Componentes, ya con productos y materiales cargados
        const sumComponentes = await importComponentesFromSheet(guildId);

        const hasErrors =
          sumCategorias.errors.length > 0 ||
          sumProductos.errors.length > 0 ||
          sumInventario.errors.length > 0 ||
          sumComponentes.errors.length > 0;
        const catLabel = `✅ ${sumCategorias.created} categorías cargadas`;
        const embed = new EmbedBuilder()
          .setTitle('📥 Importación Completa desde Sheets')
          .addFields(
            { name: '🗂️ Categorías',  value: sumCategorias.errors.length > 0 ? summaryText(sumCategorias) : catLabel, inline: false },
            { name: '📦 Productos',   value: summaryText(sumProductos),  inline: false },
            { name: '🧩 Componentes', value: summaryText(sumComponentes), inline: false },
            { name: '🗃️ Inventario',  value: summaryText(sumInventario), inline: false },
          )
          .setColor(hasErrors ? 0xffa500 : 0x57f287)
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
        return;
      }
    }
  },
};
