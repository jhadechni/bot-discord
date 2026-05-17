import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { invalidateFilterCache } from '../../utils/filter.js';
import { syncAutoModRule } from '../../utils/automod-sync.js';
import {
  MODERATION_COLORS,
  buildModerationErrorEmbed,
  buildModerationNoticeEmbed,
} from '../../utils/moderation-ui.js';

const FILTER_FIELD_LIMIT = 950;
const FILTER_MAX_FIELDS = 5;

function buildFilterWordPreview(words: string[]): { fields: { name: string; value: string }[]; shown: number } {
  const fields: { name: string; value: string }[] = [];
  let current: string[] = [];
  let currentLength = 0;
  let shown = 0;

  for (const word of words) {
    const formatted = `\`${word}\``;
    const separatorLength = current.length > 0 ? 2 : 0;

    if (currentLength + separatorLength + formatted.length > FILTER_FIELD_LIMIT) {
      fields.push({ name: `Bloque ${fields.length + 1}`, value: current.join(', ') });
      current = [];
      currentLength = 0;

      if (fields.length >= FILTER_MAX_FIELDS) {
        break;
      }
    }

    current.push(formatted);
    currentLength += separatorLength + formatted.length;
    shown += 1;
  }

  if (current.length > 0 && fields.length < FILTER_MAX_FIELDS) {
    fields.push({ name: `Bloque ${fields.length + 1}`, value: current.join(', ') });
  }

  return { fields, shown };
}

export const filterCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('filter')
    .setDescription('Gestiona las palabras filtradas del servidor')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
    .addSubcommand(sub =>
      sub
        .setName('añadir')
        .setDescription('Añade una palabra al filtro')
        .addStringOption(opt =>
          opt.setName('palabra').setDescription('Palabra a filtrar').setRequired(true).setMaxLength(100),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('eliminar')
        .setDescription('Elimina una palabra del filtro')
        .addStringOption(opt =>
          opt.setName('palabra').setDescription('Palabra a eliminar').setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub.setName('lista').setDescription('Muestra todas las palabras filtradas'),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const sub = interaction.options.getSubcommand();

    if (sub === 'añadir') {
      const word = interaction.options.getString('palabra', true).toLowerCase().trim();

      try {
        await prisma.filterWord.create({
          data: { guildId, word, addedById: interaction.user.id },
        });
        invalidateFilterCache(guildId);
        void syncAutoModRule(interaction.client, guildId);
        await interaction.editReply({
          embeds: [
            buildModerationNoticeEmbed({
              title: 'Palabra añadida al filtro',
              description: `\`${word}\` ahora será filtrada.`,
              color: MODERATION_COLORS.success,
            }),
          ],
        });
      } catch {
        await interaction.editReply({
          embeds: [
            buildModerationNoticeEmbed({
              title: 'Palabra ya registrada',
              description: `\`${word}\` ya estaba en el filtro.`,
              color: MODERATION_COLORS.warning,
            }),
          ],
        });
      }
      return;
    }

    if (sub === 'eliminar') {
      const word = interaction.options.getString('palabra', true).toLowerCase().trim();

      const deleted = await prisma.filterWord.deleteMany({
        where: { guildId, word },
      });

      if (deleted.count === 0) {
        await interaction.editReply({
          embeds: [
            buildModerationErrorEmbed(
              'Palabra no encontrada',
              `\`${word}\` no estaba registrada en el filtro.`,
            ),
          ],
        });
      } else {
        invalidateFilterCache(guildId);
        void syncAutoModRule(interaction.client, guildId);
        await interaction.editReply({
          embeds: [
            buildModerationNoticeEmbed({
              title: 'Palabra eliminada del filtro',
              description: `\`${word}\` dejó de estar filtrada.`,
              color: MODERATION_COLORS.success,
            }),
          ],
        });
      }
      return;
    }

    // lista
    const words = await prisma.filterWord.findMany({
      where: { guildId },
      orderBy: { createdAt: 'asc' },
    });

    if (words.length === 0) {
      await interaction.editReply({
        embeds: [
          buildModerationNoticeEmbed({
            title: 'Filtro vacío',
            description: 'No hay palabras registradas en el filtro.',
            color: MODERATION_COLORS.info,
          }),
        ],
      });
      return;
    }

    const preview = buildFilterWordPreview(words.map(w => w.word));
    const remaining = words.length - preview.shown;

    await interaction.editReply({
      embeds: [
        buildModerationNoticeEmbed({
          title: 'Palabras filtradas',
          description:
            `Total registradas: **${words.length}**.\n` +
            `Mostrando **${preview.shown}** para mantener el embed dentro de los límites de Discord.` +
            (remaining > 0 ? ` Quedan **${remaining}** fuera de esta vista.` : ''),
          color: MODERATION_COLORS.danger,
          fields: preview.fields,
        }),
      ],
    });
  },
};
