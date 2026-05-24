import { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ChannelType, } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { COLORS } from '../../utils/ui.js';
import { logger } from '../../core/logger.js';
// ── Helpers ───────────────────────────────────────────────────────────────────
export function parseNotifRoles(raw) {
    if (!Array.isArray(raw))
        return [];
    return raw.filter((r) => typeof r === 'object' &&
        r !== null &&
        typeof r.roleId === 'string' &&
        typeof r.label === 'string' &&
        typeof r.emoji === 'string' &&
        typeof r.description === 'string');
}
// Panel público: embed + botón para abrir el selector ephemeral
export function buildNotifPanel(roles) {
    const embed = new EmbedBuilder()
        .setColor(COLORS.blurple)
        .setTitle('🔔 Personaliza tus notificaciones')
        .setDescription('Selecciona los temas que te interesan y recibirás pings cuando haya novedades.\n' +
        'Puedes activar y desactivar cuando quieras — los canales siguen visibles para todos.')
        .setTimestamp();
    if (roles.length === 0) {
        return { embeds: [embed], components: [] };
    }
    const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('notif:open')
        .setLabel('Gestionar mis notificaciones')
        .setEmoji('🔔')
        .setStyle(ButtonStyle.Primary));
    return { embeds: [embed], components: [row] };
}
// Ephemeral por usuario: select menu pre-marcado con sus roles actuales
export function buildNotifEphemeral(roles, currentRoleIds) {
    const menu = new StringSelectMenuBuilder()
        .setCustomId('notif:select')
        .setPlaceholder('Elige tus temas de interés...')
        .setMinValues(0)
        .setMaxValues(roles.length)
        .addOptions(roles.map(r => new StringSelectMenuOptionBuilder()
        .setValue(r.roleId)
        .setLabel(r.label)
        .setEmoji(r.emoji)
        .setDescription(r.description)
        .setDefault(currentRoleIds.has(r.roleId))));
    return {
        embeds: [
            new EmbedBuilder()
                .setColor(COLORS.blurple)
                .setDescription('Activa o desactiva los temas que te interesan. Los cambios se aplican al instante.')
                .setFooter({ text: 'Aquaris • Notificaciones  ·  💙 by jhadechni' }),
        ],
        components: [
            new ActionRowBuilder().addComponents(menu),
        ],
    };
}
// ── Comando ───────────────────────────────────────────────────────────────────
export const notifCommand = {
    data: new SlashCommandBuilder()
        .setName('notif')
        .setDescription('Sistema de roles de notificación voluntarios')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addSubcommand(sub => sub
        .setName('setup')
        .setDescription('Publica el panel de roles en el canal actual'))
        .addSubcommand(sub => sub
        .setName('add')
        .setDescription('Agrega un rol al panel de notificaciones')
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol de Discord a agregar').setRequired(true))
        .addStringOption(opt => opt.setName('emoji').setDescription('Emoji del rol (ej: 🛒)').setRequired(true))
        .addStringOption(opt => opt
        .setName('descripcion')
        .setDescription('Descripción breve del tipo de notificaciones')
        .setRequired(true)
        .setMaxLength(80)))
        .addSubcommand(sub => sub
        .setName('remove')
        .setDescription('Elimina un rol del panel de notificaciones')
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol a eliminar del panel').setRequired(true)))
        .addSubcommand(sub => sub
        .setName('refresh')
        .setDescription('Actualiza el embed del panel si cambió la configuración')),
    async execute(interaction) {
        if (!interaction.inCachedGuild())
            return;
        await interaction.deferReply({ ephemeral: true });
        const sub = interaction.options.getSubcommand();
        const { guildId } = interaction;
        const config = await getOrCreateGuildConfig(guildId);
        const roles = parseNotifRoles(config.notifRoles);
        // ── setup ────────────────────────────────────────────────────────────────
        if (sub === 'setup') {
            const channel = interaction.channel;
            const panel = buildNotifPanel(roles);
            const msg = await channel.send(panel);
            await prisma.guildConfig.update({
                where: { guildId },
                data: {
                    notifPanelChannelId: channel.id,
                    notifPanelMessageId: msg.id,
                },
            });
            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(COLORS.success)
                        .setDescription(`✅ Panel publicado en ${channel}.`),
                ],
            });
            return;
        }
        // ── add ──────────────────────────────────────────────────────────────────
        if (sub === 'add') {
            const role = interaction.options.getRole('rol', true);
            const emoji = interaction.options.getString('emoji', true).trim();
            const description = interaction.options.getString('descripcion', true);
            if (roles.some(r => r.roleId === role.id)) {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(COLORS.warning)
                            .setDescription(`⚠️ El rol ${role} ya está en el panel.`),
                    ],
                });
                return;
            }
            if (roles.length >= 25) {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(COLORS.danger)
                            .setDescription('❌ Máximo 25 roles por panel (límite de Discord).'),
                    ],
                });
                return;
            }
            const updated = [
                ...roles,
                { roleId: role.id, label: role.name, emoji, description },
            ];
            await prisma.guildConfig.update({
                where: { guildId },
                data: { notifRoles: updated },
            });
            await refreshPanel(guildId, updated, config.notifPanelChannelId, config.notifPanelMessageId, interaction.client);
            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(COLORS.success)
                        .setDescription(`✅ Rol ${role} agregado al panel.`),
                ],
            });
            return;
        }
        // ── remove ───────────────────────────────────────────────────────────────
        if (sub === 'remove') {
            const role = interaction.options.getRole('rol', true);
            const updated = roles.filter(r => r.roleId !== role.id);
            if (updated.length === roles.length) {
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor(COLORS.warning)
                            .setDescription(`⚠️ El rol ${role} no está en el panel.`),
                    ],
                });
                return;
            }
            await prisma.guildConfig.update({
                where: { guildId },
                data: { notifRoles: updated },
            });
            await refreshPanel(guildId, updated, config.notifPanelChannelId, config.notifPanelMessageId, interaction.client);
            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(COLORS.success)
                        .setDescription(`✅ Rol ${role} eliminado del panel.`),
                ],
            });
            return;
        }
        // ── refresh ──────────────────────────────────────────────────────────────
        if (sub === 'refresh') {
            const updated = await refreshPanel(guildId, roles, config.notifPanelChannelId, config.notifPanelMessageId, interaction.client);
            await interaction.editReply({
                embeds: [
                    new EmbedBuilder()
                        .setColor(updated ? COLORS.success : COLORS.warning)
                        .setDescription(updated
                        ? '✅ Panel actualizado.'
                        : '⚠️ No se encontró el panel. Usa `/notif setup` para publicarlo.'),
                ],
            });
        }
    },
};
// ── refreshPanel ─────────────────────────────────────────────────────────────
async function refreshPanel(guildId, roles, channelId, messageId, client) {
    if (!channelId || !messageId)
        return false;
    try {
        const channel = await client.channels.fetch(channelId);
        if (!channel || channel.type !== ChannelType.GuildText)
            return false;
        const msg = await channel.messages.fetch(messageId);
        const panel = buildNotifPanel(roles);
        await msg.edit(panel);
        return true;
    }
    catch (err) {
        logger.warn({ err, guildId }, 'notif: no se pudo actualizar el panel');
        return false;
    }
}
//# sourceMappingURL=notif.command.js.map