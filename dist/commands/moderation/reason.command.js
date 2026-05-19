import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { MODERATION_COLORS, buildModerationErrorEmbed, buildModerationNoticeEmbed, } from '../../utils/moderation-ui.js';
export const reasonCommand = {
    data: new SlashCommandBuilder()
        .setName('reason')
        .setDescription('Edita el motivo de una acción de moderación')
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addStringOption(opt => opt.setName('id').setDescription('ID de la acción (obtenido con /logs)').setRequired(true))
        .addStringOption(opt => opt.setName('motivo').setDescription('Nuevo motivo').setRequired(true).setMaxLength(500)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const id = interaction.options.getString('id', true);
        const newReason = interaction.options.getString('motivo', true);
        const entry = await prisma.moderationLog.findFirst({
            where: { id, guildId },
        });
        if (!entry) {
            await interaction.editReply({
                embeds: [
                    buildModerationErrorEmbed('Acción no encontrada', 'No se encontró ninguna acción con ese ID en este servidor.'),
                ],
            });
            return;
        }
        await prisma.moderationLog.update({
            where: { id },
            data: { reason: newReason },
        });
        await interaction.editReply({
            embeds: [
                buildModerationNoticeEmbed({
                    title: '✅ Motivo actualizado',
                    description: 'El motivo de la acción fue actualizado correctamente.',
                    color: MODERATION_COLORS.success,
                    fields: [
                        { name: 'Registro', value: `\`${id}\``, inline: true },
                        { name: 'Tipo', value: entry.type, inline: true },
                        { name: 'Usuario', value: `<@${entry.targetId}>`, inline: true },
                        { name: 'Motivo anterior', value: entry.reason ?? 'Sin motivo' },
                        { name: 'Motivo nuevo', value: newReason },
                    ],
                }),
            ],
        });
    },
};
//# sourceMappingURL=reason.command.js.map