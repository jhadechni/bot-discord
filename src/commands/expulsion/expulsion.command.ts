import {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
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
  text: string;
};

// ── Session en RAM ────────────────────────────────────────────────────────────

export const pendingExpulsions = new Map<string, {
  targetId: string;
  targetTag: string;
  reason: string;
}>();

// ── Helpers ───────────────────────────────────────────────────────────────────

export function parseExpulsionReasons(raw: unknown): ExpulsionReason[] {
  if (!Array.isArray(raw)) return [];
  return raw.filter(
    (r): r is ExpulsionReason =>
      typeof r === 'object' && r !== null &&
      typeof r.id === 'string' &&
      typeof r.text === 'string',
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

export function buildExpulsionConfirmEmbed(target: { id: string; username: string }, reason: string) {
  return buildAquarisEmbed({
    title: '⚠️ Confirmar expulsión',
    color: MODERATION_COLORS.warning,
    footer: 'moderation',
    description: `¿Confirmas la expulsión de <@${target.id}>?`,
    fields: [
      { name: 'Usuario', value: `<@${target.id}> — \`${target.username}\``, inline: true },
      { name: 'Motivo', value: reason, inline: false },
    ],
  });
}

export function buildReasonSelectMenu(reasons: ExpulsionReason[], targetId: string) {
  const options = [
    ...reasons.map(r =>
      new StringSelectMenuOptionBuilder()
        .setValue(r.id)
        .setLabel(r.text.length > 100 ? r.text.slice(0, 97) + '...' : r.text)
        .setEmoji('📋'),
    ),
    new StringSelectMenuOptionBuilder()
      .setValue('__custom__')
      .setLabel('Motivo personalizado')
      .setDescription('Escribir un motivo libre')
      .setEmoji('✏️'),
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
  reason: string;
  moderatorId: string;
  guild: import('discord.js').Guild;
}) {
  const { guildId, targetId, targetTag, reason, moderatorId, guild } = params;
  const results = {
    rolesReset: false,
    visitorAssigned: false,
    clanPlayerUpdated: false,
    protectionsRemoved: 0,
    clanPlayerFound: false,
  };

  // 1. Quitar todos los roles y asignar visitante
  const config = await getOrCreateGuildConfig(guildId);
  try {
    const member = await guild.members.fetch(targetId).catch(() => null);
    if (member) {
      const rolesToRemove = member.roles.cache
        .filter(r => r.id !== guild.id)
        .map(r => r.id);

      if (rolesToRemove.length > 0) {
        await member.roles.remove(rolesToRemove, reason);
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
      reason,
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
      reason,
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
    );

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
            .setDescription('Agrega un motivo predeterminado')
            .addStringOption(opt =>
              opt.setName('texto').setDescription('Texto del motivo').setRequired(true).setMaxLength(200),
            ),
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
    await interaction.deferReply({ ephemeral: true });

    const group = interaction.options.getSubcommandGroup(false);
    const sub = interaction.options.getSubcommand();
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

    // ── motivo add ────────────────────────────────────────────────────────────
    if (group === 'motivo' && sub === 'add') {
      const text = interaction.options.getString('texto', true).trim();

      if (reasons.length >= 24) {
        await interaction.editReply({
          embeds: [buildModerationErrorEmbed('Límite alcanzado', 'Máximo 24 motivos predeterminados.')],
        });
        return;
      }

      const updated: ExpulsionReason[] = [...reasons, { id: randomUUID().slice(0, 8), text }];
      await prisma.guildConfig.update({ where: { guildId }, data: { expulsionReasons: updated } });

      await interaction.editReply({
        embeds: [
          buildAquarisEmbed({
            title: '✅ Motivo agregado',
            color: MODERATION_COLORS.success,
            footer: 'moderation',
            description: `**"${text}"** fue agregado a los motivos predeterminados.`,
          }),
        ],
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
          : reasons.map((r, i) => `**${i + 1}.** ${r.text}\n\`ID: ${r.id}\``).join('\n\n'),
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
