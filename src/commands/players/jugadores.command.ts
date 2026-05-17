import {
  GuildMember,
  PermissionFlagsBits,
  SlashCommandBuilder,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import {
  buildClanPlayerBasicsModal,
  canManageClanPlayers,
  findAcceptedInterviewTicket,
  startClanPlayerRegistrationSession,
} from '../../recruitment/player-registration.js';
import { buildRecruitmentErrorEmbed } from '../../utils/recruitment-ui.js';

export const jugadoresCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('jugadores')
    .setDescription('Operaciones del roster del clan')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub
        .setName('registrar')
        .setDescription('Registra al jugador entrevistado y cierra el canal privado'),
    ),

  async execute(interaction) {
    const guildId = interaction.guildId;
    const guild = interaction.guild;
    if (!guildId || !guild) {
      await interaction.reply({
        embeds: [
          buildRecruitmentErrorEmbed(
            'Servidor requerido',
            'Este comando solo se puede usar dentro del servidor.',
          ),
        ],
        ephemeral: true,
      });
      return;
    }

    const member = interaction.member instanceof GuildMember
      ? interaction.member
      : await guild.members.fetch(interaction.user.id).catch(() => null);

    if (!member || !(await canManageClanPlayers(member))) {
      await interaction.reply({
        embeds: [
          buildRecruitmentErrorEmbed(
            'Permiso insuficiente',
            'Solo el staff puede registrar jugadores en el roster.',
          ),
        ],
        ephemeral: true,
      });
      return;
    }

    const ticket = await findAcceptedInterviewTicket(guildId, interaction.channelId);
    if (!ticket) {
      await interaction.reply({
        embeds: [
          buildRecruitmentErrorEmbed(
            'Entrevista no encontrada',
            'Usa este comando dentro del canal privado de una entrevista aceptada.',
          ),
        ],
        ephemeral: true,
      });
      return;
    }

    const applicantMember = await guild.members.fetch(ticket.userId).catch(() => null);
    const session = startClanPlayerRegistrationSession({
      guildId,
      channelId: interaction.channelId,
      ticketId: ticket.id,
      applicantUserId: ticket.userId,
      applicantMember,
    });

    await interaction.showModal(buildClanPlayerBasicsModal(session));
  },
};
