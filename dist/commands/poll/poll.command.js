import { SlashCommandBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } from 'discord.js';
export const POLL_DURATIONS = {
    '30m': 30 * 60 * 1000,
    '1h': 60 * 60 * 1000,
    '6h': 6 * 60 * 60 * 1000,
    '12h': 12 * 60 * 60 * 1000,
    '24h': 24 * 60 * 60 * 1000,
    '48h': 48 * 60 * 60 * 1000,
    '7d': 7 * 24 * 60 * 60 * 1000,
};
export const pollCommand = {
    data: new SlashCommandBuilder()
        .setName('encuesta')
        .setDescription('Crea una encuesta para el servidor')
        .addStringOption(opt => opt.setName('duracion').setDescription('Duración de la encuesta').setRequired(true)
        .addChoices({ name: '30 minutos', value: '30m' }, { name: '1 hora', value: '1h' }, { name: '6 horas', value: '6h' }, { name: '12 horas', value: '12h' }, { name: '24 horas', value: '24h' }, { name: '48 horas', value: '48h' }, { name: '7 días', value: '7d' }))
        .addBooleanOption(opt => opt.setName('anonima').setDescription('Ocultar quién votó cada opción (por defecto: no)').setRequired(false)),
    async execute(interaction) {
        if (!interaction.inCachedGuild())
            return;
        const duracionKey = interaction.options.getString('duracion', true);
        const anonymous = interaction.options.getBoolean('anonima') ?? false;
        const modal = new ModalBuilder()
            .setCustomId(`poll:create:${duracionKey}:${anonymous ? '1' : '0'}`)
            .setTitle('Nueva encuesta');
        const preguntaInput = new TextInputBuilder()
            .setCustomId('pregunta')
            .setLabel('Pregunta')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMaxLength(200)
            .setPlaceholder('¿Qué quieres preguntar a la comunidad?');
        const opcion1Input = new TextInputBuilder()
            .setCustomId('opcion1')
            .setLabel('Opción 1')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(80);
        const opcion2Input = new TextInputBuilder()
            .setCustomId('opcion2')
            .setLabel('Opción 2')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(80);
        const opcion3Input = new TextInputBuilder()
            .setCustomId('opcion3')
            .setLabel('Opción 3 (opcional)')
            .setStyle(TextInputStyle.Short)
            .setRequired(false)
            .setMaxLength(80);
        const opcion4Input = new TextInputBuilder()
            .setCustomId('opcion4')
            .setLabel('Opción 4 (opcional)')
            .setStyle(TextInputStyle.Short)
            .setRequired(false)
            .setMaxLength(80);
        modal.addComponents(new ActionRowBuilder().addComponents(preguntaInput), new ActionRowBuilder().addComponents(opcion1Input), new ActionRowBuilder().addComponents(opcion2Input), new ActionRowBuilder().addComponents(opcion3Input), new ActionRowBuilder().addComponents(opcion4Input));
        await interaction.showModal(modal);
    },
};
//# sourceMappingURL=poll.command.js.map