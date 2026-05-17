import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
} from 'discord.js';
import type { Prisma } from '../generated/prisma/client.js';
import { prisma } from '../database/prisma.js';
import { resolveShopGuildScopes } from './scope.js';
import {
  coerceShopTaxonomy,
  compareCategoryKeys,
  compareSubcategoryKeys,
  getCategoryDefinition,
  getSubcategoryDefinition,
  reloadTaxonomyFromDatabase,
} from './taxonomy.js';
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import { SHOP_COLORS } from '../utils/shop-ui.js';
import { resolvePresentationLabel } from './quantities.js';
import { buildProductContentsSummary } from './product-contents.js';

const CATALOG_PAGE_SIZE = 6;

export type CatalogMode = 'products' | 'services';

const CATALOG_MODE_META: Record<CatalogMode, {
  description: string;
  emoji: string;
  emptyMessage: string;
  label: string;
}> = {
  products: {
    description: 'Materiales, kits y ofertas físicas del catálogo.',
    emoji: '📦',
    emptyMessage: '_No hay productos disponibles en esta sección._',
    label: 'Productos',
  },
  services: {
    description: 'Servicios y encargos configurados por el staff.',
    emoji: '🔧',
    emptyMessage: '_No hay servicios disponibles en esta sección._',
    label: 'Servicios',
  },
};

export const PRODUCT_TYPE_LABELS: Record<string, string> = {
  single:  'Unidad',
  bulk:    'Granel',
  kit:     'Kit',
  service: 'Servicio',
};

//TODO: change for new categories and sizes, and add icons
export const PRODUCT_TYPE_ICONS: Record<string, string> = {
  single:  '📦',
  bulk:    '🗃️',
  kit:     '🎒',
  service: '🔧',
};

type CatalogProductRecord = Prisma.ShopProductGetPayload<{
  include: {
    baseMaterial: true;
    prices: { where: { validTo: null }; take: 1 };
    components: { include: { material: true }; orderBy: { quantityRequired: 'desc' } };
  };
}>;

export type CatalogProduct = CatalogProductRecord;

type CatalogGrouping = Map<string, Map<string, CatalogProduct[]>>;

type ProductCategoryAssignment = {
  category: string;
  subcategory: string;
};

export type CatalogViewState = {
  categoryKeys: string[];
  currentCategory: string;
  currentMode: CatalogMode;
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
  await reloadTaxonomyFromDatabase(guildId);

  const productsByName = new Map<string, CatalogProduct>();

  for (const scope of resolveShopGuildScopes(guildId)) {
    const scopedProducts = await prisma.shopProduct.findMany({
      where:   {
        guildId: scope,
        isActive: true,
        OR: [
          { productType: 'service' },
          { baseMaterialId: { not: null } },
          { components: { some: {} } },
        ],
      },
      include: {
        baseMaterial: true,
        prices:     { where: { validTo: null }, take: 1 },
        components: { include: { material: true }, orderBy: { quantityRequired: 'desc' } },
      },
      orderBy: [
        { category: 'asc' },
        { subcategory: 'asc' },
        { name: 'asc' },
      ],
    });

    for (const product of scopedProducts) {
      if (!productsByName.has(product.name)) {
        productsByName.set(product.name, product);
      }
    }
  }

  return [...productsByName.values()].sort((left, right) =>
    left.category.localeCompare(right.category, 'es')
    || left.subcategory.localeCompare(right.subcategory, 'es')
    || left.name.localeCompare(right.name, 'es'),
  );
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
  const presentationStr = product.productType === 'service'
    ? null
    : `📐 ${product.presentationLabel ?? resolvePresentationLabel({
      presentationQuantity: product.presentationQuantity,
      presentationType: product.presentationType as Parameters<typeof resolvePresentationLabel>[0]['presentationType'],
      stackSize: product.baseMaterial?.stackSize ?? 64,
    })}`;
  const description = product.description
    ? truncateText(product.description, 120)
    : '_Sin descripción_';
  const contentsSummary = buildProductContentsSummary(product);
  const contentsStr = contentsSummary
    ? `🎁 ${truncateText(contentsSummary, 120)}`
    : null;

  return [priceStr, presentationStr, contentsStr, description].filter(Boolean).join('\n');
}

function applyTaxonomyImages(
  embed: EmbedBuilder,
  state: CatalogViewState,
): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const thumbnailImage = subcategory.imageUrl ?? category.imageUrl;

  if (thumbnailImage) {
    embed.setThumbnail(thumbnailImage);
  }

  return embed;
}

function filterCatalogProductsByMode(
  products: CatalogProduct[],
  mode: CatalogMode,
): CatalogProduct[] {
  return products.filter(product =>
    mode === 'services'
      ? product.productType === 'service'
      : product.productType !== 'service',
  );
}

function countCatalogProductsByMode(
  products: CatalogProduct[],
): Record<CatalogMode, number> {
  return {
    products: filterCatalogProductsByMode(products, 'products').length,
    services: filterCatalogProductsByMode(products, 'services').length,
  };
}

function parseProductCategoryAssignments(
  product: CatalogProduct,
): ProductCategoryAssignment[] {
  const assignments: ProductCategoryAssignment[] = [];
  const seen = new Set<string>();

  const pushAssignment = (categoryValue: string | null | undefined, subcategoryValue: string | null | undefined) => {
    const taxonomy = coerceShopTaxonomy(categoryValue, subcategoryValue);
    const key = `${taxonomy.category}:${taxonomy.subcategory}`;

    if (seen.has(key)) return;
    seen.add(key);
    assignments.push({
      category: taxonomy.category,
      subcategory: taxonomy.subcategory,
    });
  };

  pushAssignment(product.category, product.subcategory);

  const rawAssignments = 'additionalCategoryAssignments' in product
    ? product.additionalCategoryAssignments
    : null;

  if (Array.isArray(rawAssignments)) {
    for (const rawAssignment of rawAssignments) {
      if (!rawAssignment || typeof rawAssignment !== 'object') continue;

      const assignment = rawAssignment as {
        category?: unknown;
        subcategory?: unknown;
      };

      pushAssignment(
        typeof assignment.category === 'string' ? assignment.category : null,
        typeof assignment.subcategory === 'string' ? assignment.subcategory : null,
      );
    }
  }

  if (assignments.length === 1 && 'additionalCategories' in product && Array.isArray(product.additionalCategories)) {
    for (const additionalCategory of product.additionalCategories) {
      if (typeof additionalCategory !== 'string') continue;
      pushAssignment(additionalCategory, null);
    }
  }

  return assignments;
}

function groupCatalogProducts(products: CatalogProduct[]): CatalogGrouping {
  const grouped = new Map<string, Map<string, CatalogProduct[]>>();

  for (const product of products) {
    const assignments = parseProductCategoryAssignments(product);

    for (const assignment of assignments) {
      if (!grouped.has(assignment.category)) {
        grouped.set(assignment.category, new Map());
      }

      const subcategories = grouped.get(assignment.category)!;
      if (!subcategories.has(assignment.subcategory)) {
        subcategories.set(assignment.subcategory, []);
      }

      subcategories.get(assignment.subcategory)!.push(product);
    }
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
  mode: CatalogMode,
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
  pageSize = CATALOG_PAGE_SIZE,
): CatalogViewState {
  const grouped = groupCatalogProducts(filterCatalogProductsByMode(products, mode));
  const categoryKeys = [...grouped.keys()].sort(compareCategoryKeys);
  const fallbackCategory = categoryKeys[0] ?? 'general';
  const normalizedCategory = coerceShopTaxonomy(categoryKey, null).category;
  const currentCategory = grouped.has(normalizedCategory) ? normalizedCategory : fallbackCategory;
  const subcategoryMap = grouped.get(currentCategory) ?? new Map<string, CatalogProduct[]>();
  const subcategoryKeys = [...subcategoryMap.keys()].sort((left, right) =>
    compareSubcategoryKeys(currentCategory, left, right),
  );
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
    currentMode: mode,
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
  const modeMeta = CATALOG_MODE_META[state.currentMode];
  const itemLabel = state.currentMode === 'services' ? 'servicio' : 'producto';
  const titlePrefix = options.titlePrefix ?? 'Tienda Aquaris';
  const footerHint = options.footerHint ?? '/pedido crear o carrito para comprar';
  const pageSize = options.pageSize ?? state.pageProducts.length;
  const embed = new EmbedBuilder()
    .setTitle(`${titlePrefix} · ${modeMeta.label}`)
    .setColor(options.color ?? SHOP_COLORS.info)
    .setTimestamp();

  if (state.pageProducts.length === 0) {
    return applyTaxonomyImages(embed
      .setDescription(
        `**${category.label} / ${subcategory.label}**\n\n${options.emptyMessage ?? '_No hay productos en esta subcategoría._'}`,
      )
      .setFooter({
        text: [
          SHOP_FOOTER.text,
          `${modeMeta.label} · Página ${state.currentPage}/${state.totalPages}`,
          footerHint,
        ].join('  ·  '),
      }), state);
  }

  embed.setDescription(
    [
      `**${category.label} / ${subcategory.label}**`,
      modeMeta.description,
      `${state.totalSubcategoryProducts} ${itemLabel}${state.totalSubcategoryProducts !== 1 ? 's' : ''} en esta sección.`,
    ].join('\n'),
  );

  const fields = state.pageProducts.map((product, index) => {
    const icon = PRODUCT_TYPE_ICONS[product.productType] ?? '🛍️';
    const prefix = options.numberItems ? `${index + 1}. ` : '';

    return {
      name: `${prefix}${icon} ${truncateText(product.name, 80)}`.slice(0, 256),
      value: buildProductCardValue(product).slice(0, 1024),
      inline: false,
    };
  });

  embed.addFields(fields);
  embed.setFooter({
    text: [
      SHOP_FOOTER.text,
      `${modeMeta.label} · Página ${state.currentPage}/${state.totalPages}`,
      footerHint,
      pageSize > 0 ? `${state.pageProducts.length}/${pageSize} visibles` : null,
    ].filter(Boolean).join('  ·  '),
  });

  return applyTaxonomyImages(embed, state);
}

function buildCatalogModeRow(
  currentMode: CatalogMode | null,
  counts: Record<CatalogMode, number>,
): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('tienda:catalog:mode:products')
      .setLabel(`📦 Productos (${counts.products})`)
      .setStyle(currentMode === 'products' ? ButtonStyle.Primary : ButtonStyle.Secondary)
      .setDisabled(counts.products === 0),
    new ButtonBuilder()
      .setCustomId('tienda:catalog:mode:services')
      .setLabel(`🔧 Servicios (${counts.services})`)
      .setStyle(currentMode === 'services' ? ButtonStyle.Primary : ButtonStyle.Secondary)
      .setDisabled(counts.services === 0),
    new ButtonBuilder()
      .setCustomId('tienda:catalog:request')
      .setLabel('📝 Solicitud libre')
      .setStyle(ButtonStyle.Success),
  );
}

export function buildCatalogEntryView(
  products: CatalogProduct[],
): {
  components: Array<ActionRowBuilder<ButtonBuilder>>;
  embed: EmbedBuilder;
} {
  const counts = countCatalogProductsByMode(products);
  const embed = new EmbedBuilder()
    .setTitle('Tienda Aquaris')
    .setColor(SHOP_COLORS.info)
    .setDescription(
      [
        'Elige cómo quieres navegar la tienda.',
        '',
        `**Productos**: ${counts.products} disponible${counts.products === 1 ? '' : 's'}`,
        `**Servicios**: ${counts.services} disponible${counts.services === 1 ? '' : 's'}`,
        '**Solicitud libre**: envía al staff algo que no esté listado en el catálogo.',
      ].join('\n'),
    )
    .setFooter({
      text: `${SHOP_FOOTER.text}  ·  Selecciona una sección para continuar`,
    })
    .setTimestamp();

  return {
    components: [buildCatalogModeRow(null, counts)],
    embed,
  };
}

export function buildCategorySelectRow(
  prefix: string,
  mode: CatalogMode,
  categoryKeys: string[],
  currentCategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`${prefix}:category:${mode}`)
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
  mode: CatalogMode,
  currentCategory: string,
  subcategoryKeys: string[],
  currentSubcategory: string,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`${prefix}:subcategory:${mode}:${currentCategory}`)
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
  mode: CatalogMode,
  currentCategory: string,
  currentSubcategory: string,
  currentPage: number,
  totalPages: number,
): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page:${mode}:${currentCategory}:${currentSubcategory}:${currentPage - 1}`)
      .setLabel('Anterior')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(currentPage <= 1),
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page-label:${mode}:${currentCategory}:${currentSubcategory}:${currentPage}`)
      .setLabel(`Página ${currentPage}/${totalPages}`)
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true),
    new ButtonBuilder()
      .setCustomId(`tienda:catalog:page:${mode}:${currentCategory}:${currentSubcategory}:${currentPage + 1}`)
      .setLabel('Siguiente')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(currentPage >= totalPages),
  );
}

function buildOpenCartRow(state: CatalogViewState): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(
        `tienda:catalog:open_cart:${state.currentMode}:${state.currentCategory}:${state.currentSubcategory}:${state.currentPage}`,
      )
      .setLabel('🛒 Abrir carrito')
      .setStyle(ButtonStyle.Success),
  );
}

export function buildCatalogView(
  products: CatalogProduct[],
  mode: CatalogMode,
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
): {
  components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>>;
  embed: EmbedBuilder;
  state: CatalogViewState;
} {
  const state = resolveCatalogViewState(products, mode, categoryKey, subcategoryKey, requestedPage);
  const components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>> = [];
  const counts = countCatalogProductsByMode(products);

  components.push(buildCatalogModeRow(state.currentMode, counts));

  if (state.categoryKeys.length > 1) {
    components.push(buildCategorySelectRow('tienda:catalog', state.currentMode, state.categoryKeys, state.currentCategory));
  }

  if (state.subcategoryKeys.length > 1) {
    components.push(buildSubcategorySelectRow(
      'tienda:catalog',
      state.currentMode,
      state.currentCategory,
      state.subcategoryKeys,
      state.currentSubcategory,
    ));
  }

  if (state.totalPages > 1) {
    components.push(buildPaginationRow(
      state.currentMode,
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
      color: SHOP_COLORS.info,
      pageSize: CATALOG_PAGE_SIZE,
      titlePrefix: 'Tienda Aquaris',
    }),
    state,
  };
}
