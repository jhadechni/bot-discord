import { SlashCommandBuilder, } from 'discord.js';
import { buildCatalogEntryView, queryCatalogProducts, } from '../../shop/catalog.js';
import { reloadTaxonomyFromDatabase } from '../../shop/taxonomy.js';
import { SHOP_COLORS, buildShopNoticeEmbed, } from '../../utils/shop-ui.js';
export const tiendaCommand = {
    data: new SlashCommandBuilder()
        .setName('tienda')
        .setDescription('Tienda del clan Aquaris')
        .addSubcommand(sub => sub.setName('ver').setDescription('Muestra el catálogo de productos disponibles')),
    async execute(interaction) {
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const sub = interaction.options.getSubcommand();
        if (sub !== 'ver')
            return;
        await interaction.deferReply({ ephemeral: true });
        await reloadTaxonomyFromDatabase(guildId);
        const products = await queryCatalogProducts(guildId);
        if (products.length === 0) {
            await interaction.editReply({
                embeds: [
                    buildShopNoticeEmbed({
                        title: 'Tienda vacía',
                        description: 'La tienda está vacía por el momento.',
                        color: SHOP_COLORS.neutral,
                    }),
                ],
            });
            return;
        }
        const { embed, components } = buildCatalogEntryView(products);
        await interaction.editReply({ embeds: [embed], components });
    },
};
//# sourceMappingURL=tienda.command.js.map