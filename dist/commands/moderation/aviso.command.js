import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { getLogChannel } from '../../utils/log-channel.js';
import { buildAquarisEmbed } from '../../utils/message-ui.js';
import { MODERATION_COLORS, buildModerationErrorEmbed } from '../../utils/moderation-ui.js';
export const avisoCommand = {
    data: {},
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const target = interaction.options.getUser('usuario', true);
        const mensaje = interaction.options.getString('mensaje', true).trim();
        if (target.bot) {
            await interaction.editReply({
                embeds: [buildModerationErrorEmbed('No válido', 'No puedes enviar un aviso a un bot.')],
            });
            return;
        }
        const dmEmbed = buildAquarisEmbed({
            title: '<:RolAquaris:1506435880162955305>  Aviso del equipo de Aquaris',
            description: `<:calamaraquaris:1506691948096913599>  **Mensaje del equipo de moderación:**\n\n` +
                `> ${mensaje}\n\n` +
                `-# 💙 Si tienes dudas, contacta con el staff. <:LogoDiscord:1506669476035432638>`,
            color: MODERATION_COLORS.info,
            footer: 'moderation',
        });
        let dmDelivered = true;
        try {
            await target.send({ embeds: [dmEmbed] });
        }
        catch {
            dmDelivered = false;
        }
        const config = await getOrCreateGuildConfig(guildId);
        const logsChannel = getLogChannel(interaction.guild, config, 'mod');
        if (logsChannel) {
            await logsChannel.send({
                embeds: [
                    buildAquarisEmbed({
                        title: '<:RolAquaris:1506435880162955305>  Aviso enviado',
                        color: MODERATION_COLORS.log,
                        footer: 'logsModeration',
                        fields: [
                            { name: 'Usuario', value: `<@${target.id}> (${target.tag})`, inline: true },
                            { name: 'Staff', value: `<@${interaction.user.id}>`, inline: true },
                            { name: 'DM entregado', value: dmDelivered ? '✅ Sí' : '❌ No (DMs cerrados)', inline: true },
                            { name: 'Mensaje', value: mensaje, inline: false },
                        ],
                    }),
                ],
            });
        }
        await interaction.editReply({
            embeds: [
                buildAquarisEmbed({
                    title: dmDelivered ? '✅ Aviso enviado' : '⚠️ Aviso no entregado',
                    description: dmDelivered
                        ? `El aviso fue enviado a <@${target.id}> por mensaje directo.`
                        : `No se pudo enviar el DM a <@${target.id}>. Es posible que tenga los mensajes directos cerrados.`,
                    color: dmDelivered ? MODERATION_COLORS.success : MODERATION_COLORS.warning,
                    footer: 'moderation',
                }),
            ],
        });
    },
};
//# sourceMappingURL=aviso.command.js.map