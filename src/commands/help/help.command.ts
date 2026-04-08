import {
  EmbedBuilder,
  GuildMember,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';

function hasStaffAccess(member: GuildMember | null, staffRoleId: string | null): boolean {
  if (!member) return false;
  if (member.permissions.has(PermissionFlagsBits.ManageGuild)) return true;
  if (!staffRoleId) return false;
  return member.roles.cache.has(staffRoleId);
}

export const helpCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Muestra la lista actual de comandos del bot'),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    const member = interaction.member instanceof GuildMember
      ? interaction.member
      : await interaction.guild?.members.fetch(interaction.user.id).catch(() => null);

    const config = guildId ? await getOrCreateGuildConfig(guildId) : null;
    const isStaff = hasStaffAccess(member ?? null, config?.staffRoleId ?? null);

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle('📖 Comandos del Bot Aquaris')
      .setDescription(
        isStaff
          ? 'Listado actual de comandos públicos y de staff.'
          : 'Listado actual de comandos públicos. Los comandos de staff solo se muestran a quien tiene acceso.',
      )
      .addFields(
        {
          name: '🔧 General',
          value: [
            '`/ping` — Comprueba que el bot responde.',
            '`/help` — Muestra este listado.',
          ].join('\n'),
        },
        {
          name: '🛒 Tienda',
          value: [
            '`/tienda ver` — Abre el catálogo público.',
            '`/pedido crear` — Crea un pedido directo.',
            '`/pedido estado` — Consulta el estado de un pedido.',
            '`/pedido carrito` — Abre el carrito interactivo.',
          ].join('\n'),
        },
        {
          name: '📋 Comunidad',
          value: [
            '`/apply` — Envía tu solicitud de ingreso al clan.',
            '`/suggest` — Envía una sugerencia al servidor.',
            '`/perfil [usuario]` — Consulta el perfil de XP.',
            '`/top [tipo]` — Muestra rankings del servidor.',
            '`/remind add|lista|editar|cancelar` — Gestiona tus recordatorios.',
          ].join('\n'),
        },
      )
      .setFooter({ text: 'Aquaris Bot' })
      .setTimestamp();

    if (isStaff) {
      embed.addFields(
        {
          name: '🛡️ Moderación',
          value: [
            '`/mod disciplina warn|kick|ban|unban|tempban`',
            '`/mod disciplina timeout|untimeout|mute|tempmute|unmute`',
            '`/mod historial warnings|logs|reason`',
            '`/mod chat clear`',
            '`/mod filtro añadir|eliminar|lista`',
          ].join('\n'),
        },
        {
          name: '🏪 Staff Tienda',
          value: [
            '`/catalogo material-agregar|material-configurar|material-eliminar`',
            '`/catalogo producto-agregar|producto-precio|producto-clasificar`',
            '`/catalogo producto-presentacion|producto-componente`',
            '`/catalogo producto-activar|producto-desactivar|producto-eliminar|stats`',
            '`/stock ver|bajo|sumar|restar|actualizar|alerta`',
            '`/pedidos lista`',
          ].join('\n'),
        },
        {
          name: '⚙️ Configuración y utilidades',
          value: [
            '`/config ver`',
            '`/config set-welcome|set-logs|set-suggestions|set-recruitment`',
            '`/config set-niveles|set-boost|set-rol`',
            '`/config nick-rol-agregar|nick-rol-quitar`',
            '`/config set-shop-staff|set-shop-categoria`',
            '`/adormirdani` y `/atrabajardani` — utilidades internas de staff.',
          ].join('\n'),
        },
      );
    }

    await interaction.editReply({ embeds: [embed] });
  },
};
