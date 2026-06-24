import { SlashCommandBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, EmbedBuilder, } from 'discord.js';
import { randomUUID } from 'node:crypto';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { RECRUITMENT_COLORS, buildRecruitmentNoticeEmbed, buildRecruitmentErrorEmbed } from '../../utils/recruitment-ui.js';
// ── Sesión en RAM ─────────────────────────────────────────────────────────────
export const pendingRecruitRejections = new Map();
// ── Helpers ───────────────────────────────────────────────────────────────────
export function parseRejectionReasons(raw) {
    if (!Array.isArray(raw))
        return [];
    return raw.filter((r) => typeof r === 'object' && r !== null &&
        typeof r.id === 'string' &&
        typeof r.label === 'string' &&
        typeof r.body === 'string');
}
export function buildRejectionReasonSelect(reasons, ticketId, channelId, messageId, selectedId) {
    const options = [
        ...reasons.map(r => new StringSelectMenuOptionBuilder()
            .setValue(r.id)
            .setLabel(r.label.length > 100 ? r.label.slice(0, 97) + '...' : r.label)
            .setEmoji('📋')
            .setDefault(r.id === selectedId)),
        new StringSelectMenuOptionBuilder()
            .setValue('__custom__')
            .setLabel('Motivo personalizado')
            .setDescription('Escribir un motivo libre')
            .setEmoji('✏️')
            .setDefault(selectedId === '__custom__'),
    ];
    return new StringSelectMenuBuilder()
        .setCustomId(`recruit:reason_select:${ticketId}:${channelId}:${messageId}`)
        .setPlaceholder('Selecciona el motivo de rechazo...')
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions(options);
}
export function buildRejectionConfirmRow(ticketId, channelId, messageId, disabled = true) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`recruit:reason_confirm:${ticketId}:${channelId}:${messageId}`)
        .setLabel('Confirmar rechazo')
        .setStyle(ButtonStyle.Danger)
        .setEmoji('❌')
        .setDisabled(disabled), new ButtonBuilder()
        .setCustomId(`recruit:reason_cancel`)
        .setLabel('Cancelar')
        .setStyle(ButtonStyle.Secondary));
}
export function buildRejectionSelectorEmbed(reasons, selectedLabel) {
    return new EmbedBuilder()
        .setColor(RECRUITMENT_COLORS.danger)
        .setTitle('❌ Rechazar solicitud')
        .setDescription(selectedLabel
        ? `**Motivo seleccionado:** ${selectedLabel}\n\nPresiona **Confirmar rechazo** para proceder.`
        : 'Selecciona el motivo de rechazo de la lista.');
}
// ── Comando ───────────────────────────────────────────────────────────────────
export const reclutamientoCommand = {
    data: new SlashCommandBuilder()
        .setName('reclutamiento')
        .setDescription('Gestión del sistema de reclutamiento')
        .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
        .addSubcommandGroup(group => group
        .setName('motivo')
        .setDescription('Gestiona los motivos predeterminados de rechazo')
        .addSubcommand(sub => sub
        .setName('add')
        .setDescription('Agrega un motivo predeterminado de rechazo (abre formulario)'))
        .addSubcommand(sub => sub
        .setName('remove')
        .setDescription('Elimina un motivo predeterminado')
        .addStringOption(opt => opt.setName('id').setDescription('ID del motivo (visible en /reclutamiento motivo ver)').setRequired(true)))
        .addSubcommand(sub => sub.setName('ver').setDescription('Lista los motivos predeterminados configurados'))),
    async execute(interaction) {
        if (!interaction.inCachedGuild())
            return;
        const group = interaction.options.getSubcommandGroup(false);
        const sub = interaction.options.getSubcommand();
        // ── motivo add — abre modal ───────────────────────────────────────────────
        if (group === 'motivo' && sub === 'add') {
            const config = await getOrCreateGuildConfig(interaction.guildId);
            const reasons = parseRejectionReasons(config.rejectionReasons);
            if (reasons.length >= 24) {
                await interaction.reply({
                    embeds: [buildRecruitmentErrorEmbed('Límite alcanzado', 'Máximo 24 motivos predeterminados.')],
                    flags: 64,
                });
                return;
            }
            await interaction.showModal(new ModalBuilder()
                .setCustomId('recruit:add_reason_modal')
                .setTitle('Nuevo motivo de rechazo')
                .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('label')
                .setLabel('Nombre corto (aparece en el selector)')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setMaxLength(80)
                .setPlaceholder('Ej: No cumple los requisitos')), new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('body')
                .setLabel('Mensaje (se envía al solicitante por DM)')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true)
                .setMaxLength(2000)
                .setPlaceholder('Escribe el mensaje completo aquí...'))));
            return;
        }
        await interaction.deferReply({ ephemeral: true });
        const { guildId } = interaction;
        const config = await getOrCreateGuildConfig(guildId);
        const reasons = parseRejectionReasons(config.rejectionReasons);
        // ── motivo remove ─────────────────────────────────────────────────────────
        if (group === 'motivo' && sub === 'remove') {
            const id = interaction.options.getString('id', true).trim();
            const updated = reasons.filter(r => r.id !== id);
            if (updated.length === reasons.length) {
                await interaction.editReply({
                    embeds: [buildRecruitmentErrorEmbed('No encontrado', `No existe un motivo con ID \`${id}\`.`)],
                });
                return;
            }
            await prisma.guildConfig.update({ where: { guildId }, data: { rejectionReasons: updated } });
            await interaction.editReply({
                embeds: [buildRecruitmentNoticeEmbed({ title: '🗑️ Motivo eliminado', description: 'El motivo fue eliminado correctamente.', color: RECRUITMENT_COLORS.success })],
            });
            return;
        }
        // ── motivo ver ────────────────────────────────────────────────────────────
        if (group === 'motivo' && sub === 'ver') {
            await interaction.editReply({
                embeds: [
                    buildRecruitmentNoticeEmbed({
                        title: '📋 Motivos de rechazo predeterminados',
                        color: RECRUITMENT_COLORS.info,
                        description: reasons.length === 0
                            ? 'No hay motivos configurados.\nUsa `/reclutamiento motivo add` para agregar uno.'
                            : reasons.map((r, i) => {
                                const preview = r.body.length > 80 ? r.body.slice(0, 77).replace(/\n/g, ' ') + '...' : r.body.replace(/\n/g, ' ');
                                return `**${i + 1}.** **${r.label}**\n> ${preview}\n\`ID: ${r.id}\``;
                            }).join('\n\n'),
                    }),
                ],
            });
        }
    },
};
// ── Handler del modal de agregar motivo (llamado desde interactionCreate) ─────
export async function handleAddRejectionReasonModal(interaction) {
    await interaction.deferReply({ ephemeral: true });
    const guildId = interaction.guildId;
    if (!guildId)
        return;
    const label = interaction.fields.getTextInputValue('label').trim();
    const body = interaction.fields.getTextInputValue('body').trim();
    const config = await getOrCreateGuildConfig(guildId);
    const reasons = parseRejectionReasons(config.rejectionReasons);
    if (reasons.length >= 24) {
        await interaction.editReply({
            embeds: [buildRecruitmentErrorEmbed('Límite alcanzado', 'Máximo 24 motivos predeterminados.')],
        });
        return;
    }
    const newReason = { id: randomUUID().slice(0, 8), label, body };
    await prisma.guildConfig.update({
        where: { guildId },
        data: { rejectionReasons: [...reasons, newReason] },
    });
    await interaction.editReply({
        embeds: [
            buildRecruitmentNoticeEmbed({
                title: '✅ Motivo agregado',
                color: RECRUITMENT_COLORS.success,
                description: `**${label}**\n\`ID: ${newReason.id}\``,
            }),
        ],
    });
}
//# sourceMappingURL=reclutamiento.command.js.map