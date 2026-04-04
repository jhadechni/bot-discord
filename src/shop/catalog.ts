import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} from 'discord.js';
import { prisma } from '../database/prisma.js';
import {
  coerceShopTaxonomy,
  compareCategoryKeys,
  compareSubcategoryKeys,
  getCategoryDefinition,
  getSubcategoryDefinition,
} from './taxonomy.js';
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';

const CATALOG_PAGE_SIZE = 5;

const PRODUCT_TYPE_LABELS: Record<string, string> = {
  single:  'Unidad',
  bulk:    'Granel',
  kit:     'Kit',
  service: 'Servicio',
};

export type CatalogProduct = Awaited<ReturnType<typeof queryCatalogProducts>>[number];

type CatalogGrouping = Map<string, Map<string, CatalogProduct[]>>;

type CatalogViewState = {
  categoryKeys: string[];
  currentCategory: string;
  currentPage: number;
  currentSubcategory: string;
  pageProducts: CatalogProduct[];
  subcategoryKeys: string[];
  totalPages: number;
  totalSubcategoryProducts: number;
};

export async function queryCatalogProducts(guildId: string) {
  return prisma.shopProduct.findMany({
    where:   { guildId, isActive: true },
    include: {
      prices:     { where: { validTo: null }, take: 1 },
      components: { include: { material: true }, orderBy: { quantityRequired: 'desc' } },
    },
    orderBy: [
      { category: 'asc' },
      { subcategory: 'asc' },
      { name: 'asc' },
    ],
  });
}

function labelize(value: string): string {
  return value
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function buildProductLine(product: CatalogProduct): string {
  const price    = product.prices[0];
  const priceStr = price
    ? `💰 **${formatPrice(price.price, price.currency)}**`
    : '💰 _Sin precio_';
  const typeStr  = `🏷️ ${PRODUCT_TYPE_LABELS[product.productType] ?? labelize(product.productType)}`;
  const compsStr = product.components.length > 0
    ? '\n> 🔩 ' + product.components.map(c => `${c.material.name} ×${c.quantityRequired}`).join('  ·  ')
    : '';
  const descStr  = product.description ? `\n${product.description}` : '';

  return `### ${product.name}\n${typeStr}  ·  ${priceStr}${descStr}${compsStr}`;
}

function groupCatalogProducts(products: CatalogProduct[]): CatalogGrouping {
  const grouped = new Map<string, Map<string, CatalogProduct[]>>();

  for (const product of products) {
    const taxonomy = coerceShopTaxonomy(product.category, product.subcategory);

    if (!grouped.has(taxonomy.category)) {
      grouped.set(taxonomy.category, new Map());
    }

    const subcategories = grouped.get(taxonomy.category)!;
    if (!subcategories.has(taxonomy.subcategory)) {
      subcategories.set(taxonomy.subcategory, []);
    }

    subcategories.get(taxonomy.subcategory)!.push(product);
  }

  const orderedCategories = [...grouped.keys()].sort(compareCategoryKeys);

  return new Map(
    orderedCategories.map(categoryKey => {
      const subcategoryMap = grouped.get(categoryKey)!;
      const orderedSubcategories = [...subcategoryMap.keys()].sort((left, right) =>
        compareSubcategoryKeys(categoryKey, left, right),
      );

      return [
        categoryKey,
        new Map(
          orderedSubcategories.map(subcategoryKey => [
            subcategoryKey,
            subcategoryMap.get(subcategoryKey)!,
          ]),
        ),
      ];
    }),
  );
}

function paginateCatalogProducts(products: CatalogProduct[]): CatalogProduct[][] {
  const pages: CatalogProduct[][] = [];

  for (let index = 0; index < products.length; index += CATALOG_PAGE_SIZE) {
    pages.push(products.slice(index, index + CATALOG_PAGE_SIZE));
  }

  return pages.length > 0 ? pages : [[]];
}

function resolveCatalogViewState(
  products: CatalogProduct[],
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
): CatalogViewState {
  const grouped = groupCatalogProducts(products);
  const categoryKeys = [...grouped.keys()];
  const fallbackCategory = categoryKeys[0] ?? 'general';
  const normalizedCategory = coerceShopTaxonomy(categoryKey, null).category;
  const currentCategory = grouped.has(normalizedCategory) ? normalizedCategory : fallbackCategory;
  const subcategoryMap = grouped.get(currentCategory) ?? new Map([['otros', []]]);
  const subcategoryKeys = [...subcategoryMap.keys()];
  const fallbackSubcategory = subcategoryKeys[0] ?? 'otros';
  const normalizedSubcategory = coerceShopTaxonomy(currentCategory, subcategoryKey).subcategory;
  const currentSubcategory = subcategoryMap.has(normalizedSubcategory)
    ? normalizedSubcategory
    : fallbackSubcategory;
  const subcategoryProducts = subcategoryMap.get(currentSubcategory) ?? [];
  const pages = paginateCatalogProducts(subcategoryProducts);
  const currentPage = Math.min(Math.max(requestedPage, 1), pages.length);

  return {
    categoryKeys,
    currentCategory,
    currentPage,
    currentSubcategory,
    pageProducts: pages[currentPage - 1] ?? [],
    subcategoryKeys,
    totalPages: pages.length,
    totalSubcategoryProducts: subcategoryProducts.length,
  };
}

function buildCatalogEmbed(state: CatalogViewState): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const categoryIndex = state.categoryKeys.indexOf(state.currentCategory) + 1;
  const subcategoryIndex = state.subcategoryKeys.indexOf(state.currentSubcategory) + 1;
  const lines = state.pageProducts.map(buildProductLine);

  const noProducts = lines.length === 0;

  return new EmbedBuilder()
    .setTitle(`🏪 Tienda Aquaris  ·  ${category.emoji} ${category.label}`)
    .setDescription(
      [
        `**${subcategory.label}**`,
        noProducts
          ? '_No hay productos en esta subcategoría._'
          : lines.join('\n\n'),
      ].join('\n\n'),
    )
    .setColor(0x5865f2)
    .setFooter({
      text: [
        `${state.pageProducts.length}/${state.totalSubcategoryProducts} producto${state.totalSubcategoryProducts !== 1 ? 's' : ''}`,
        `Pág. ${state.currentPage}/${state.totalPages}`,
        `Cat. ${categoryIndex}/${state.categoryKeys.length}`,
        `Sub. ${subcategoryIndex}/${state.subcategoryKeys.length}`,
        '/pedido crear para comprar',
      ].join('  ·  '),
    })
    .setTimestamp();
}

function buildCategoryRow(
  categoryKeys: string[],
  currentCategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId('tienda:catalog:category')
    .setPlaceholder('Selecciona una categoría')
    .addOptions(
      categoryKeys.map(categoryKey => {
        const category = getCategoryDefinition(categoryKey);
        return new StringSelectMenuOptionBuilder()
          .setLabel(`${category.emoji} ${category.label}`.slice(0, 100))
          .setValue(categoryKey)
          .setDefault(categoryKey === currentCategory);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildSubcategoryRow(
  currentCategory: string,
  subcategoryKeys: string[],
  currentSubcategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`tienda:catalog:subcategory:${currentCategory}`)
    .setPlaceholder('Selecciona una subcategoría')
    .addOptions(
      subcategoryKeys.map(subcategoryKey => {
        const subcategory = getSubcategoryDefinition(currentCategory, subcategoryKey);
        return new StringSelectMenuOptionBuilder()
          .setLabel(subcategory.label.slice(0, 100))
          .setValue(subcategoryKey)
          .setDefault(subcategoryKey === currentSubcategory);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildPaginationRow(
  currentCategory: string,
  currentSubcategory: string,
  currentPage: number,
  totalPages: number,
): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page:${currentCategory}:${currentSubcategory}:${currentPage - 1}`)
      .setLabel('Anterior')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(currentPage <= 1),
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page-label:${currentCategory}:${currentSubcategory}:${currentPage}`)
      .setLabel(`Pagina ${currentPage}/${totalPages}`)
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true),
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page:${currentCategory}:${currentSubcategory}:${currentPage + 1}`)
      .setLabel('Siguiente')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(currentPage >= totalPages),
  );
}

export function buildCatalogView(
  products: CatalogProduct[],
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
): {
  components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>>;
  embed: EmbedBuilder;
} {
  const state = resolveCatalogViewState(products, categoryKey, subcategoryKey, requestedPage);
  const components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>> = [];

  if (state.categoryKeys.length > 1) {
    components.push(buildCategoryRow(state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    components.push(buildSubcategoryRow(
      state.currentCategory,
      state.subcategoryKeys,
      state.currentSubcategory,
    ));
  }

  if (state.totalPages > 1) {
    components.push(buildPaginationRow(
      state.currentCategory,
      state.currentSubcategory,
      state.currentPage,
      state.totalPages,
    ));
  }

  return {
    components,
    embed: buildCatalogEmbed(state),
  };
}
