import {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
  type Guild,
  type AutocompleteInteraction,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { logger } from '../../core/logger.js';
import { parseTime, formatTime } from '../../utils/time.js';
import {
  REMINDER_COLORS,
  buildReminderErrorEmbed,
  buildReminderNoticeEmbed,
} from '../../utils/reminder-ui.js';

async function hasStaffAccess(guildId: string, userId: string, guild: Guild): Promise<boolean> {
  const config = await getOrCreateGuildConfig(guildId);
  try {
    const member = await guild.members.fetch(userId);
    const staffRoles = [config.staffRoleId, config.liderRoleId, config.coLiderRoleId].filter(Boolean) as string[];
    if (staffRoles.some(r => member.roles.cache.has(r))) return true;
    if (member.permissions.has('Administrator')) return true;
  } catch (err) {
    logger.warn({ err }, 'kit: no se pudo comprobar rol de staff');
  }
  return false;
}

export const kitCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('kit')
    .setDescription('Gestiona las plantillas de recordatorios de kits (staff)')
    .addSubcommand(sub =>
      sub.setName('crear').setDescription('Crear una nueva plantilla de kit'),
    )
    .addSubcommand(sub =>
      sub.setName('lista').setDescription('Ver todas las plantillas configuradas'),
    )
    .addSubcommand(sub =>
      sub
        .setName('eliminar')
        .setDescription('Eliminar una plantilla de kit')
        .addStringOption(opt =>
          opt
            .setName('nombre')
            .setDescription('Nombre del kit')
            .setRequired(true)
            .setAutocomplete(true),
        ),
    ),

  async autocomplete(interaction: AutocompleteInteraction) {
    const guildId = interaction.guildId;
    if (!guildId) { await interaction.respond([]); return; }

    const focused = interaction.options.getFocused();
    const templates = await prisma.reminderTemplate.findMany({
      where: { guildId, isActive: true, name: { contains: focused, mode: 'insensitive' } },
      take: 25,
      orderBy: { name: 'asc' },
    });

    await interaction.respond(templates.map(t => ({ name: t.name, value: t.name })));
  },

  async execute(interaction) {
    const guildId = interaction.guildId;
    const guild = interaction.guild;
    if (!guildId || !guild) {
      await interaction.reply({
        embeds: [buildReminderErrorEmbed('Servidor requerido', 'Este comando solo funciona en un servidor.')],
        ephemeral: true,
      });
      return;
    }

    if (!(await hasStaffAccess(guildId, interaction.user.id, guild))) {
      await interaction.reply({
        embeds: [
          buildReminderErrorEmbed(
            'Permiso insuficiente',
            'Solo el staff puede gestionar las plantillas de kits.',
          ),
        ],
        ephemeral: true,
      });
      return;
    }

    const sub = interaction.options.getSubcommand();

    if (sub === 'crear') {
      const modal = new ModalBuilder()
        .setCustomId('kit:create_modal')
        .setTitle('Nueva plantilla de kit');

      modal.addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('kit_name')
            .setLabel('Nombre')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: Kit Semanal, Kit Diario, Kit VIP')
            .setRequired(true)
            .setMaxLength(50),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('kit_cooldown')
            .setLabel('Cooldown (cada cuánto se puede reclamar)')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: 7d, 24h, 3d12h')
            .setRequired(true)
            .setMaxLength(20),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('kit_description')
            .setLabel('Descripción (opcional)')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: Kit de recursos semanales del servidor')
            .setRequired(false)
            .setMaxLength(100),
        ),
      );

      await interaction.showModal(modal);
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    if (sub === 'lista') {
      const templates = await prisma.reminderTemplate.findMany({
        where: { guildId, isActive: true },
        orderBy: { name: 'asc' },
      });

      if (templates.length === 0) {
        await interaction.editReply({
          embeds: [
            buildReminderNoticeEmbed({
              title: 'Sin plantillas',
              description: 'No hay plantillas configuradas. Usa `/kit crear` para añadir una.',
              color: REMINDER_COLORS.info,
            }),
          ],
        });
        return;
      }

      const embed = buildReminderNoticeEmbed({
        title: 'Plantillas de kits',
        color: REMINDER_COLORS.info,
        fields:
          templates.map(t => ({
            name: t.name,
            value: `Cooldown: **${formatTime(t.cooldownMin)}**${t.description ? `\n${t.description}` : ''}`,
            inline: true,
          })),
      }).setFooter({ text: `Aquaris • Recordatorios · ${templates.length} plantilla${templates.length === 1 ? '' : 's'} · /remind kit para activar recordatorios` });

      await interaction.editReply({ embeds: [embed] });
      return;
    }

    if (sub === 'eliminar') {
      const nombre = interaction.options.getString('nombre', true);

      const template = await prisma.reminderTemplate.findFirst({
        where: { guildId, name: nombre, isActive: true },
      });

      if (!template) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Plantilla no encontrada',
              `No se encontró ninguna plantilla llamada **${nombre}**.`,
            ),
          ],
        });
        return;
      }

      // Soft delete: desactiva sin borrar (los Reminder existentes mantienen su FK)
      await prisma.reminderTemplate.update({
        where: { id: template.id },
        data: { isActive: false },
      });

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Plantilla eliminada',
            description: `La plantilla **${nombre}** fue desactivada.`,
            color: REMINDER_COLORS.success,
          }),
        ],
      });
    }
  },
};
