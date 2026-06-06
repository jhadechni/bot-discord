import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import { randomUUID } from 'node:crypto';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import { MODERATION_COLORS, buildModerationLogEmbed, buildModerationErrorEmbed } from '../../utils/moderation-ui.js';
import { buildAquarisEmbed } from '../../utils/message-ui.js';
import { logger } from '../../core/logger.js';

// ── Tipos ─────────────────────────────────────────────────────────────────────

export type ExpulsionReason = {
  id: string;
  label: string;
  body: string;
};

// ── Session en RAM ────────────────────────────────────────────────────────────

export const pendingExpulsions = new Map<string, {
  targetId: string;
  targetTag: string;
  label: string;
  body: string;
  comments: string | null;
}>();

// ── Helpers ───────────────────────────────────────────────────────────────────

export function parseExpulsionReasons(raw: unknown): ExpulsionReason[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (r): r is ExpulsionReason =>
      typeof r === 'object' && r !== null &&
      typeof r.id === 'string' &&
      typeof r.label === 'string' &&
      typeof r.body === 'string',
  );
}

export function buildExpulsionSelectorEmbed(target: { id: string; username: string; displayName: string }, reasons: ExpulsionReason[]) {
  return buildAquarisEmbed({
    title: '🚪 Expulsión de jugador',
    color: MODERATION_COLORS.danger,
    footer: 'moderation',
    description: [
      `**Usuario:** <@${target.id}> — \`${target.username}\``,
      `**Nick en pantalla:** ${target.displayName}`,
      '',
      'Selecciona el motivo de la expulsión o elige **"Motivo personalizado"** para escribir uno libre.',
      '',
      '> ⚠️ Esta acción quitará todos los roles del usuario, le asignará el rol de visitante, actualizará su estado en la lista de jugadores y lo eliminará de todas sus protecciones.',
    ].join('\n'),
  });
}

export function buildExpulsionConfirmEmbed(
  target: { id: string; username: string },
  reason: { label: string; body: string },
) {
  const bodyPreview = reason.body.length > 1024 ? reason.body.slice(0, 1021) + '...' : reason.body;
  return buildAquarisEmbed({
    title: '⚠️ Confirmar expulsión',
    color: MODERATION_COLORS.warning,
    footer: 'moderation',
    description: `¿Confirmas la expulsión de <@${target.id}>?`,
    fields: [
      { name: 'Usuario', value: `<@${target.id}> — \`${target.username}\``, inline: true },
      { name: 'Motivo', value: reason.label, inline: true },
      { name: 'Mensaje al jugador', value: bodyPreview, inline: false },
    ],
  });
}

export function buildReasonSelectMenu(reasons: ExpulsionReason[], targetId: string, selectedId?: string) {
  const options = [
    ...reasons.map(r =>
      new StringSelectMenuOptionBuilder()
        .setValue(r.id)
        .setLabel(r.label.length > 100 ? r.label.slice(0, 97) + '...' : r.label)
        .setEmoji('📋')
        .setDefault(r.id === selectedId),
    ),
    new StringSelectMenuOptionBuilder()
      .setValue('__custom__')
      .setLabel('Motivo personalizado')
      .setDescription('Escribir un motivo libre')
      .setEmoji('✏️')
      .setDefault(selectedId === '__custom__'),
  ];

  return new StringSelectMenuBuilder()
    .setCustomId(`expulsion:select:${targetId}`)
    .setPlaceholder('Selecciona el motivo...')
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions(options);
}

export function buildConfirmRow(targetId: string, disabled = true) {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`expulsion:confirm:${targetId}`)
      .setLabel('Confirmar expulsión')
      .setStyle(ButtonStyle.Danger)
      .setEmoji('🚪')
      .setDisabled(disabled),
    new ButtonBuilder()
      .setCustomId(`expulsion:cancel:${targetId}`)
      .setLabel('Cancelar')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(false),
  );
}

// ── Ejecución de expulsión ────────────────────────────────────────────────────

export async function executeExpulsion(params: {
  guildId: string;
  targetId: string;
  targetTag: string;
  label: string;
  body: string;
  comments: string | null;
  moderatorId: string;
  guild: import('discord.js').Guild;
}) {
  const { guildId, targetId, targetTag, label, body, comments, moderatorId, guild } = params;
  const results = {
    rolesReset: false,
    visitorAssigned: false,
    clanPlayerUpdated: false,
    protectionsRemoved: 0,
    clanPlayerFound: false,
    dmDelivered: false,
  };

  // 1. Enviar DM al jugador antes de quitarle los roles
  try {
    const targetUser = await guild.client.users.fetch(targetId).catch(() => null);
    if (targetUser) {
      const dmDescription = [
        body,
        ...(comments ? [`\n**Comentario del staff:** ${comments}`] : []),
        `\n-# Si crees que esto fue un error, contacta con el staff de Aquaris.`,
      ].join('\n');
      await targetUser.send({
        embeds: [
          buildAquarisEmbed({
            title: '🚪 Has sido expulsado del clan Aquaris',
            description: dmDescription,
            color: MODERATION_COLORS.danger,
            footer: 'moderation',
          }),
        ],
      });
      results.dmDelivered = true;
    }
  } catch {
    results.dmDelivered = false;
  }

  // 2. Quitar todos los roles y asignar visitante
  const config = await getOrCreateGuildConfig(guildId);
  try {
    const member = await guild.members.fetch(targetId).catch(() => null);
    if (member) {
      const rolesToRemove = member.roles.cache
        .filter(r => r.id !== guild.id)
        .map(r => r.id);

      if (rolesToRemove.length > 0) {
        await member.roles.remove(rolesToRemove, label);
      }
      results.rolesReset = true;

      if (config.visitorRoleId) {
        await member.roles.add(config.visitorRoleId, 'Expulsión del clan');
        results.visitorAssigned = true;
      }
    }
  } catch (err) {
    logger.warn({ err, targetId }, 'expulsion: no se pudieron actualizar los roles del miembro');
  }

  // 2. Buscar ClanPlayer por username o tag de Discord
  const clanPlayer = await prisma.clanPlayer.findFirst({
    where: {
      OR: [
        { discord: targetTag },
        { discord: targetTag.split('#')[0] ?? targetTag },
      ],
    },
  });

  // 3. Actualizar estado en ClanPlayer
  if (clanPlayer) {
    results.clanPlayerFound = true;
    try {
      await prisma.clanPlayer.update({
        where: { id: clanPlayer.id },
        data: { status: 'retirado', updatedAt: new Date() },
      });
      results.clanPlayerUpdated = true;
    } catch (err) {
      logger.warn({ err, targetId }, 'expulsion: no se pudo actualizar ClanPlayer');
    }

    // 4. Eliminar de protecciones
    try {
      const deleted = await prisma.protectionMember.deleteMany({
        where: { playerName: clanPlayer.minecraftNick },
      });
      results.protectionsRemoved = deleted.count;
    } catch (err) {
      logger.warn({ err, targetId }, 'expulsion: no se pudieron eliminar protecciones');
    }
  }

  // 5. Registrar en ModerationLog
  const log = await prisma.moderationLog.create({
    data: {
      guildId,
      targetId,
      moderatorId,
      type: 'KICK',
      reason: body,
      active: false,
    },
  });

  // 6. Log al canal de moderación
  const logsChannel = getLogChannel(guild, config, 'mod');

  if (logsChannel) {
    const logEmbed = buildModerationLogEmbed({
      title: '🚪 Jugador expulsado',
      color: MODERATION_COLORS.kick,
      targetId,
      targetTag,
      moderatorId,
      reason: label,
      logId: log.id,
      createdAt: new Date(),
    });

    logEmbed.addFields(
      {
        name: 'Roles',
        value: results.rolesReset
          ? `✅ Roles quitados${results.visitorAssigned ? ' · Visitante asignado' : ' · Sin rol visitante configurado'}`
          : '⚠️ No se pudieron actualizar los roles',
        inline: true,
      },
      {
        name: 'Estado clan',
        value: results.clanPlayerFound
          ? `✅ Marcado como retirado${results.clanPlayerUpdated ? '' : ' (error al actualizar)'}`
          : '⚠️ No encontrado en lista de jugadores',
        inline: true,
      },
      {
        name: 'Protecciones',
        value: results.clanPlayerFound
          ? `🗑️ ${results.protectionsRemoved} eliminadas`
          : '—',
        inline: true,
      },
      {
        name: 'DM al jugador',
        value: results.dmDelivered ? '✅ Enviado' : '❌ No entregado (DMs cerrados)',
        inline: true,
      },
    );

    if (comments) {
      logEmbed.addFields({ name: 'Comentario interno', value: comments, inline: false });
    }

    await logsChannel.send({ embeds: [logEmbed] });
  }

  return results;
}

// ── Comando ───────────────────────────────────────────────────────────────────

export const expulsionCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('expulsion')
    .setDescription('Sistema de expulsión de jugadores del clan')
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addSubcommand(sub =>
      sub
        .setName('ejecutar')
        .setDescription('Inicia el flujo de expulsión de un jugador')
        .addStringOption(opt =>
          opt.setName('usuario').setDescription('Jugador Aquaris a expulsar').setRequired(true).setAutocomplete(true),
        ),
    )
    .addSubcommandGroup(group =>
      group
        .setName('motivo')
        .setDescription('Gestiona los motivos predeterminados de expulsión')
        .addSubcommand(sub =>
          sub
            .setName('add')
            .setDescription('Agrega un motivo predeterminado (abre formulario)'),
        )
        .addSubcommand(sub =>
          sub
            .setName('remove')
            .setDescription('Elimina un motivo predeterminado')
            .addStringOption(opt =>
              opt.setName('id').setDescription('ID del motivo (visible en /expulsion motivo ver)').setRequired(true),
            ),
        )
        .addSubcommand(sub =>
          sub.setName('ver').setDescription('Lista los motivos predeterminados configurados'),
        ),
    ),

  async execute(interaction) {
    if (!interaction.inCachedGuild()) return;

    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();

    // ── motivo add — abre modal, no puede haber deferReply previo ────────────
    if (group === 'motivo' && sub === 'add') {
      const { guildId } = interaction;
      const config = await getOrCreateGuildConfig(guildId);
      const reasons = parseExpulsionReasons(config.expulsionReasons);

      if (reasons.length >= 24) {
        await interaction.reply({
          embeds: [buildModerationErrorEmbed('Límite alcanzado', 'Máximo 24 motivos predeterminados.')],
          flags: 64,
        });
        return;
      }

      await interaction.showModal(
        new ModalBuilder()
          .setCustomId('expulsion:add_reason_modal')
          .setTitle('Nuevo motivo de expulsión')
          .addComponents(
            new ActionRowBuilder<TextInputBuilder>().addComponents(
              new TextInputBuilder()
                .setCustomId('label')
                .setLabel('Nombre corto (aparece en el selector)')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setMaxLength(80)
                .setPlaceholder('Ej: Inactividad extendida'),
            ),
            new ActionRowBuilder<TextInputBuilder>().addComponents(
              new TextInputBuilder()
                .setCustomId('body')
                .setLabel('Mensaje completo (se envía al jugador por DM)')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true)
                .setMaxLength(4000)
                .setPlaceholder('Escribe el mensaje completo aquí...'),
            ),
          ),
      );
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const { guildId } = interaction;
    const config = await getOrCreateGuildConfig(guildId);
    const reasons = parseExpulsionReasons(config.expulsionReasons);

    // ── ejecutar ─────────────────────────────────────────────────────────────
    if (sub === 'ejecutar') {
      const targetId = interaction.options.getString('usuario', true);
      const targetMember = await interaction.guild.members.fetch(targetId).catch(() => null);

      if (!targetMember) {
        await interaction.editReply({
          embeds: [buildModerationErrorEmbed('Usuario no encontrado', 'No se pudo encontrar ese miembro en el servidor.')],
        });
        return;
      }

      const target = targetMember.user;

      if (target.id === interaction.user.id) {
        await interaction.editReply({
          embeds: [buildModerationErrorEmbed('Acción no permitida', 'No puedes expulsarte a ti mismo.')],
        });
        return;
      }

      if (target.bot) {
        await interaction.editReply({
          embeds: [buildModerationErrorEmbed('Acción no permitida', 'No puedes expulsar bots con este comando.')],
        });
        return;
      }

      pendingExpulsions.delete(interaction.user.id);

      const embed = buildExpulsionSelectorEmbed(
        { id: target.id, username: target.username, displayName: targetMember.displayName },
        reasons,
      );

      const selectRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        buildReasonSelectMenu(reasons, target.id),
      );

      await interaction.editReply({
        embeds: [embed],
        components: [selectRow, buildConfirmRow(target.id, true)],
      });
      return;
    }

    // ── motivo remove ─────────────────────────────────────────────────────────
    if (group === 'motivo' && sub === 'remove') {
      const id = interaction.options.getString('id', true).trim();
      const updated = reasons.filter(r => r.id !== id);

      if (updated.length === reasons.length) {
        await interaction.editReply({
          embeds: [buildModerationErrorEmbed('No encontrado', `No existe un motivo con ID \`${id}\`.`)],
        });
        return;
      }

      await prisma.guildConfig.update({ where: { guildId }, data: { expulsionReasons: updated } });

      await interaction.editReply({
        embeds: [
          buildAquarisEmbed({
            title: '🗑️ Motivo eliminado',
            color: MODERATION_COLORS.success,
            footer: 'moderation',
            description: 'El motivo fue eliminado de los predeterminados.',
          }),
        ],
      });
      return;
    }

    // ── motivo ver ────────────────────────────────────────────────────────────
    if (group === 'motivo' && sub === 'ver') {
      const embed = buildAquarisEmbed({
        title: '📋 Motivos de expulsión predeterminados',
        color: MODERATION_COLORS.info,
        footer: 'moderation',
        description: reasons.length === 0
          ? 'No hay motivos predeterminados configurados.\nUsa `/expulsion motivo add` para agregar uno.'
          : reasons.map((r, i) => {
              const preview = r.body.length > 80 ? r.body.slice(0, 77).replace(/\n/g, ' ') + '...' : r.body.replace(/\n/g, ' ');
              return `**${i + 1}.** **${r.label}**\n> ${preview}\n\`ID: ${r.id}\``;
            }).join('\n\n'),
      });

      await interaction.editReply({ embeds: [embed] });
    }
  },

  async autocomplete(interaction) {
    if (!interaction.inCachedGuild()) return;
    const focused = interaction.options.getFocused().toLowerCase();
    const config = await getOrCreateGuildConfig(interaction.guildId);

    if (!config.aquarisRoleId) {
      await interaction.respond([]);
      return;
    }

    const role = interaction.guild.roles.cache.get(config.aquarisRoleId);
    if (!role) {
      await interaction.respond([]);
      return;
    }

    const results = role.members
      .filter(m =>
        !m.user.bot &&
        m.id !== interaction.user.id &&
        (!focused ||
          m.user.username.toLowerCase().includes(focused) ||
          (m.nickname?.toLowerCase().includes(focused) ?? false)),
      )
      .first(25);

    await interaction.respond(
      results.map(m => ({
        name: `${m.displayName} (${m.user.username})`,
        value: m.id,
      })),
    );
  },
};
