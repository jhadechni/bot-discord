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
import { COLORS, formatPrice, SHOP_FOOTER } from '../utils/ui.js';

const CATALOG_PAGE_SIZE = 6;

export const PRODUCT_TYPE_LABELS: Record<string, string> = {
  single:  'Unidad',
  bulk:    'Granel',
  kit:     'Kit',
  service: 'Servicio',
};

export const PRODUCT_TYPE_ICONS: Record<string, string> = {
  single:  '📦',
  bulk:    '🗃️',
  kit:     '🎒',
  service: '🔧',
};

export type CatalogProduct = Awaited<ReturnType<typeof queryCatalogProducts>>[number];

type CatalogGrouping = Map<string, Map<string, CatalogProduct[]>>;

export type CatalogViewState = {
  categoryKeys: string[];
  currentCategory: string;
  currentPage: number;
  currentSubcategory: string;
  pageProducts: CatalogProduct[];
  subcategoryKeys: string[];
  totalPages: number;
  totalSubcategoryProducts: number;
};

type ProductGridEmbedOptions = {
  color?: number;
  emptyMessage?: string;
  footerHint?: string;
  numberItems?: boolean;
  pageSize?: number;
  titlePrefix?: string;
};

export async function queryCatalogProducts(guildId: string) {
  return prisma.shopProduct.findMany({
    where:   {
      guildId,
      isActive: true,
      OR: [
        { productType: 'service' },
        { components: { some: {} } },
      ],
    },
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

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildProductCardValue(product: CatalogProduct): string {
  const price = product.prices[0];
  const priceStr = price
    ? `💰 **${formatPrice(price.price, price.currency)}**`
    : '💰 _Sin precio_';
  const typeStr = `🏷️ ${PRODUCT_TYPE_LABELS[product.productType] ?? labelize(product.productType)}`;
  const description = product.description
    ? truncateText(product.description, 120)
    : '_Sin descripción_';

  return [priceStr, typeStr, description].join('\n');
}

function applyTaxonomyImages(
  embed: EmbedBuilder,
  state: CatalogViewState,
): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const thumbnailImage = category.imageUrl ?? subcategory.imageUrl;

  if (thumbnailImage) {
    embed.setThumbnail(thumbnailImage);
  }

  return embed;
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

function paginateCatalogProducts(products: CatalogProduct[], pageSize: number): CatalogProduct[][] {
  const pages: CatalogProduct[][] = [];

  for (let index = 0; index < products.length; index += pageSize) {
    pages.push(products.slice(index, index + pageSize));
  }

  return pages.length > 0 ? pages : [[]];
}

export function resolveCatalogViewState(
  products: CatalogProduct[],
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
  pageSize = CATALOG_PAGE_SIZE,
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
  const pages = paginateCatalogProducts(subcategoryProducts, pageSize);
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

export function buildProductGridEmbed(
  state: CatalogViewState,
  options: ProductGridEmbedOptions = {},
): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const categoryIndex = state.categoryKeys.indexOf(state.currentCategory) + 1;
  const subcategoryIndex = state.subcategoryKeys.indexOf(state.currentSubcategory) + 1;
  const titlePrefix = options.titlePrefix ?? '🏪 Tienda Aquaris';
  const footerHint = options.footerHint ?? '/pedido crear o carrito para comprar';
  const pageSize = options.pageSize ?? state.pageProducts.length;
  const embed = new EmbedBuilder()
    .setTitle(`${titlePrefix}  ·  ${category.emoji} ${category.label}`)
    .setColor(options.color ?? COLORS.blurple)
    .setTimestamp();

  if (state.pageProducts.length === 0) {
    return applyTaxonomyImages(embed
      .setDescription(
        `**${subcategory.label}**\n\n${options.emptyMessage ?? '_No hay productos en esta subcategoría._'}`,
      )
      .setFooter({
        text: [
          SHOP_FOOTER.text,
          `Cat. ${categoryIndex}/${state.categoryKeys.length}`,
          `Sub. ${subcategoryIndex}/${state.subcategoryKeys.length}`,
          footerHint,
        ].join('  ·  '),
      }), state);
  }

  embed.setDescription(`**${subcategory.label}**`);

  const fields = state.pageProducts.map((product, index) => {
    const icon = PRODUCT_TYPE_ICONS[product.productType] ?? '🛍️';
    const prefix = options.numberItems ? `${index + 1}. ` : '';

    return {
      name: `${prefix}${icon} ${truncateText(product.name, 80)}`.slice(0, 256),
      value: buildProductCardValue(product).slice(0, 1024),
      inline: true,
    };
  });

  const missingFields = fields.length % 3 === 0 ? 0 : 3 - (fields.length % 3);
  for (let index = 0; index < missingFields; index += 1) {
    fields.push({ name: '\u200b', value: '\u200b', inline: true });
  }

  embed.addFields(fields);
  embed.setFooter({
    text: [
      SHOP_FOOTER.text,
      `${state.totalSubcategoryProducts} producto${state.totalSubcategoryProducts !== 1 ? 's' : ''}`,
      `Pág. ${state.currentPage}/${state.totalPages}`,
      `Cat. ${categoryIndex}/${state.categoryKeys.length}`,
      `Sub. ${subcategoryIndex}/${state.subcategoryKeys.length}`,
      footerHint,
      pageSize > 0 ? `${state.pageProducts.length}/${pageSize} visibles` : null,
    ].filter(Boolean).join('  ·  '),
  });

  return applyTaxonomyImages(embed, state);
}

export function buildCategorySelectRow(
  prefix: string,
  categoryKeys: string[],
  currentCategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`${prefix}:category`)
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

export function buildSubcategorySelectRow(
  prefix: string,
  currentCategory: string,
  subcategoryKeys: string[],
  currentSubcategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`${prefix}:subcategory:${currentCategory}`)
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
      .setLabel(`Página ${currentPage}/${totalPages}`)
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true),
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page:${currentCategory}:${currentSubcategory}:${currentPage + 1}`)
      .setLabel('Siguiente')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(currentPage >= totalPages),
  );
}

function buildOpenCartRow(state: CatalogViewState): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(
        `tienda:catalog:open_cart:${state.currentCategory}:${state.currentSubcategory}:${state.currentPage}`,
      )
      .setLabel('🛒 Abrir carrito')
      .setStyle(ButtonStyle.Success),
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
  state: CatalogViewState;
} {
  const state = resolveCatalogViewState(products, categoryKey, subcategoryKey, requestedPage);
  const components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>> = [];

  if (state.categoryKeys.length > 1) {
    components.push(buildCategorySelectRow('tienda:catalog', state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    components.push(buildSubcategorySelectRow(
      'tienda:catalog',
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

  components.push(buildOpenCartRow(state));

  return {
    components,
    embed: buildProductGridEmbed(state, {
      color: COLORS.blurple,
      pageSize: CATALOG_PAGE_SIZE,
      titlePrefix: '🏪 Tienda Aquaris',
    }),
    state,
  };
}
