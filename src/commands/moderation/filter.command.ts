import { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { invalidateFilterCache } from '../../utils/filter.js';

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
        await interaction.editReply(`✅ Palabra **\`${word}\`** añadida al filtro.`);
      } catch {
        await interaction.editReply(`⚠️ Esa palabra ya está en el filtro.`);
      }
      return;
    }

    if (sub === 'eliminar') {
      const word = interaction.options.getString('palabra', true).toLowerCase().trim();

      const deleted = await prisma.filterWord.deleteMany({
        where: { guildId, word },
      });

      if (deleted.count === 0) {
        await interaction.editReply(`❌ La palabra **\`${word}\`** no estaba en el filtro.`);
      } else {
        invalidateFilterCache(guildId);
        await interaction.editReply(`✅ Palabra **\`${word}\`** eliminada del filtro.`);
      }
      return;
    }

    // lista
    const words = await prisma.filterWord.findMany({
      where: { guildId },
      orderBy: { createdAt: 'asc' },
    });

    if (words.length === 0) {
      await interaction.editReply('📋 El filtro está vacío.');
      return;
    }

    const embed = new EmbedBuilder()
      .setColor(0xed4245)
      .setTitle('🚫 Palabras filtradas')
      .setDescription(words.map(w => `\`${w.word}\``).join(', '))
      .setFooter({ text: `${words.length} palabras en total` })
      .setTimestamp();

    await interaction.editReply({ embeds: [embed] });
  },
};
