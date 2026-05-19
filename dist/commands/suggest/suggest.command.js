import { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, } from 'discord.js';
export const suggestCommand = {
    data: new SlashCommandBuilder()
        .setName('suggest')
        .setDescription('Envía una sugerencia al servidor'),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId('suggest_modal')
            .setTitle('Nueva sugerencia');
        modal.addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
            .setCustomId('suggest_content')
            .setLabel('¿Cuál es tu sugerencia?')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMinLength(10)
            .setMaxLength(500)
            .setPlaceholder('Describe tu sugerencia con el mayor detalle posible...')));
        await interaction.showModal(modal);
    },
};
//# sourceMappingURL=suggest.command.js.map