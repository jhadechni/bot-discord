import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import { MODERATION_COLORS, buildModerationErrorEmbed, buildModerationNoticeEmbed, } from '../../utils/moderation-ui.js';
export const clearCommand = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Elimina mensajes del canal')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption(opt => opt
        .setName('cantidad')
        .setDescription('Número de mensajes a eliminar (1-100)')
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100))
        .addUserOption(opt => opt.setName('usuario').setDescription('Filtrar por usuario (opcional)').setRequired(false)),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const channel = interaction.channel;
        if (!channel?.isTextBased() || !('bulkDelete' in channel)) {
            await interaction.editReply({
                embeds: [
                    buildModerationErrorEmbed('No se pudo limpiar el canal', 'Este comando solo puede usarse en canales de texto donde pueda borrar mensajes.'),
                ],
            });
            return;
        }
        const amount = interaction.options.getInteger('cantidad', true);
        const filterUser = interaction.options.getUser('usuario');
        const fetched = await channel.messages.fetch({ limit: 100 });
        let toDelete = [...fetched.values()];
        // Filtrar por usuario si se especificó
        if (filterUser) {
            toDelete = toDelete.filter(m => m.author.id === filterUser.id);
        }
        // Discord solo permite borrar mensajes de menos de 14 días con bulkDelete
        const twoWeeksAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;
        toDelete = toDelete.filter(m => m.createdTimestamp > twoWeeksAgo).slice(0, amount);
        if (toDelete.length === 0) {
            await interaction.editReply({
                embeds: [
                    buildModerationErrorEmbed('⚠️ No hay mensajes recientes', 'No se encontraron mensajes recientes que puedan eliminarse.'),
                ],
            });
            return;
        }
        const deleted = await channel.bulkDelete(toDelete, true);
        const config = await getOrCreateGuildConfig(interaction.guildId);
        const logsChannel = getLogChannel(interaction.guild, config, 'mod');
        if (logsChannel) {
            await logsChannel.send({
                embeds: [
                    buildModerationNoticeEmbed({
                        title: '🗑️ Limpieza de mensajes',
                        color: MODERATION_COLORS.system,
                        footer: 'logs',
                        fields: [
                            { name: 'Moderador', value: `<@${interaction.user.id}>\nID: \`${interaction.user.id}\``, inline: true },
                            { name: 'Canal', value: `<#${channel.id}>`, inline: true },
                            { name: 'Mensajes eliminados', value: `${deleted.size}`, inline: true },
                        ],
                    }),
                ],
            });
        }
        await interaction.editReply({
            embeds: [
                buildModerationNoticeEmbed({
                    title: '🗑️ Limpieza completada',
                    description: `Se eliminaron **${deleted.size}** mensaje${deleted.size === 1 ? '' : 's'} en <#${channel.id}>.`,
                    color: MODERATION_COLORS.system,
                }),
            ],
        });
    },
};
//# sourceMappingURL=clear.command.js.map