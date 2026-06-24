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
  compareCategoryKeys,
  compareSubcategoryKeys,
  getCategoryDefinition,
  getSubcategoryDefinition,
  isValidCategory,
  normalizeShopTaxonomyKey,
} from './taxonomy.js';
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import { SHOP_COLORS } from '../utils/shop-ui.js';
import { resolvePresentationLabel, resolvePresentationTypeName } from './quantities.js';
import { buildProductContentsSummary } from './product-contents.js';

const CATALOG_PAGE_SIZE = 10;
const PRODUCT_SELECT_THRESHOLD = 25;

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
  kit:     '🧰',
  service: '⚙️',
};

// Prisma self-referential types can't be resolved inline — define base types separately
type CatalogProductBase = Prisma.ShopProductGetPayload<{
  include: {
    baseMaterial: true;
    prices: { where: { validTo: null }; take: 1 };
    components: { include: { material: true }; orderBy: { quantityRequired: 'desc' } };
  };
}>;

export type CatalogVariant = Prisma.ShopProductGetPayload<{
  include: {
    prices: { where: { validTo: null }; take: 1 };
    baseMaterial: true;
  };
}>;

export type CatalogProduct = CatalogProductBase & { variants: CatalogVariant[] };

type CatalogGrouping = Map<string, Map<string, CatalogProduct[]>>;

type ProductCategoryAssignment = {
  category: string;
  subcategory: string;
};

export type CatalogViewState = {
  allSubcategoryProducts: CatalogProduct[];
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

export async function queryCatalogProducts(guildId: string): Promise<CatalogProduct[]> {

  const productsByName = new Map<string, CatalogProduct>();

  for (const scope of resolveShopGuildScopes(guildId)) {
    const scopedProducts = await prisma.shopProduct.findMany({
      where: {
        guildId: scope,
        isActive: true,
        parentId: null,
        OR: [
          { productType: 'service' },
          { baseMaterialId: { not: null } },
          { components: { some: {} } },
          { variants: { some: { isActive: true } } },
        ],
      },
      include: {
        baseMaterial: true,
        prices:     { where: { validTo: null }, take: 1 },
        components: { include: { material: true }, orderBy: { quantityRequired: 'desc' } },
        variants: {
          where:   { isActive: true },
          orderBy: { sortOrder: 'asc' },
          include: {
            prices:      { where: { validTo: null }, take: 1 },
            baseMaterial: true,
          },
        },
      },
      orderBy: [
        { category: 'asc' },
        { subcategory: 'asc' },
        { name: 'asc' },
      ],
    }) as unknown as CatalogProduct[];

    for (const product of scopedProducts) {
      if (!productsByName.has(product.name)) {
        productsByName.set(product.name, product);
      }
    }
  }

  return [...productsByName.values()]
    .filter(p => isValidCategory(p.category))
    .sort((left, right) =>
      left.category.localeCompare(right.category, 'es')
      || left.subcategory.localeCompare(right.subcategory, 'es')
      || left.name.localeCompare(right.name, 'es'),
    );
}

function truncateText(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}

function getProductEmoji(product: CatalogProduct): string {
  return getCategoryDefinition(product.category).emoji;
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
  const contentsSummary = buildProductContentsSummary(product);
  const contentsStr = contentsSummary ? `🎁 ${truncateText(contentsSummary, 120)}` : null;

  return [presentationStr, priceStr, contentsStr].filter(Boolean).join('\n');
}

function applyTaxonomyImages(
  embed: EmbedBuilder,
  categoryKey: string,
  subcategoryKey: string,
): EmbedBuilder {
  const category = getCategoryDefinition(categoryKey);
  const subcategory = getSubcategoryDefinition(categoryKey, subcategoryKey);
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
    const categoryKey = normalizeShopTaxonomyKey(categoryValue);
    if (!categoryKey) return;
    const subcategoryKey = normalizeShopTaxonomyKey(subcategoryValue) || 'otros';
    const key = `${categoryKey}:${subcategoryKey}`;
    if (seen.has(key)) return;
    seen.add(key);
    assignments.push({ category: categoryKey, subcategory: subcategoryKey });
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
  const normalizedCategory = normalizeShopTaxonomyKey(categoryKey);
  const currentCategory = grouped.has(normalizedCategory) ? normalizedCategory : fallbackCategory;
  const subcategoryMap = grouped.get(currentCategory) ?? new Map<string, CatalogProduct[]>();
  const subcategoryKeys = [...subcategoryMap.keys()].sort((left, right) =>
    compareSubcategoryKeys(currentCategory, left, right),
  );
  const fallbackSubcategory = subcategoryKeys[0] ?? 'otros';
  const normalizedSubcategory = normalizeShopTaxonomyKey(subcategoryKey);
  const currentSubcategory = subcategoryMap.has(normalizedSubcategory)
    ? normalizedSubcategory
    : fallbackSubcategory;
  const subcategoryProducts = subcategoryMap.get(currentSubcategory) ?? [];
  const pages = paginateCatalogProducts(subcategoryProducts, pageSize);
  const currentPage = Math.min(Math.max(requestedPage, 1), pages.length);

  return {
    allSubcategoryProducts: subcategoryProducts,
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
      }), state.currentCategory, state.currentSubcategory);
  }

  // Horizontal borders fit within Discord embed code block (~36 chars)
  // Content lines: left │ only — no right border (avoids overflow wrapping)
  const HLINE = '─'.repeat(32);
  const TOP   = `┌${HLINE}┐`;
  const SEP   = `├${HLINE}┤`;
  const BOT   = `└${HLINE}┘`;
  const NAME_MAX   = 26; // │ + sp + emoji(2) + sp + name = 31 chars max
  const DETAIL_MAX = 29; // │ + 3sp + detail  = 33 chars max

  const productLines = state.pageProducts.map((product, index) => {
    const icon   = getProductEmoji(product);
    const prefix = options.numberItems ? `${index + 1}. ` : '';
    const price  = product.prices[0];
    const priceStr = price ? formatPrice(price.price, price.currency) : 'S/P';
    const presentation = product.productType !== 'service'
      ? (product.presentationLabel ?? resolvePresentationLabel({
          presentationQuantity: product.presentationQuantity,
          presentationType: product.presentationType as Parameters<typeof resolvePresentationLabel>[0]['presentationType'],
          stackSize: product.baseMaterial?.stackSize ?? 64,
        }))
      : null;
    const detailContent = presentation ? `${presentation}  ·  ${priceStr}` : priceStr;
    return [
      `│ ${icon} ${truncateText(`${prefix}${product.name}`, NAME_MAX)}`,
      `│   ${truncateText(detailContent, DETAIL_MAX)}`,
    ].join('\n');
  });

  const table = ['```', TOP, productLines.join(`\n${SEP}\n`), BOT, '```'].join('\n');

  embed.setDescription(
    [
      `**${category.label} / ${subcategory.label}**`,
      `${state.totalSubcategoryProducts} ${itemLabel}${state.totalSubcategoryProducts !== 1 ? 's' : ''} en esta sección.`,
      table,
    ].join('\n'),
  );

  embed.setFooter({
    text: [
      SHOP_FOOTER.text,
      `Pág. ${state.currentPage}/${state.totalPages}`,
      footerHint,
    ].filter(Boolean).join('  ·  '),
  });

  return applyTaxonomyImages(embed, state.currentCategory, state.currentSubcategory);
}

export function buildProductDetailEmbed(
  product: CatalogProduct,
  categoryKey: string,
  subcategoryKey: string,
): EmbedBuilder {
  const price = product.prices[0];
  const priceStr = price
    ? `💰 **${formatPrice(price.price, price.currency)}**`
    : '💰 _Sin precio_';
  const icon = getProductEmoji(product);
  const typeLabel = PRODUCT_TYPE_LABELS[product.productType] ?? product.productType;

  const lines: string[] = [];

  if (product.productType !== 'service') {
    const presentationLabel = product.presentationLabel ?? resolvePresentationLabel({
      presentationQuantity: product.presentationQuantity,
      presentationType: product.presentationType as Parameters<typeof resolvePresentationLabel>[0]['presentationType'],
      stackSize: product.baseMaterial?.stackSize ?? 64,
    });
    lines.push(`📐 **Presentación:** ${presentationLabel}`);
  }

  lines.push(priceStr);
  lines.push(`🏷️ **Tipo:** ${typeLabel}`);

  const contentsSummary = buildProductContentsSummary(product);
  if (contentsSummary) {
    lines.push('', `🎁 **Contenido:** ${contentsSummary}`);
  }

  const embed = new EmbedBuilder()
    .setTitle(`${icon} ${product.name}`)
    .setDescription(lines.join('\n'))
    .setColor(SHOP_COLORS.info)
    .setFooter({ text: `${SHOP_FOOTER.text}  ·  /pedido crear o carrito para comprar` })
    .setTimestamp();

  return applyTaxonomyImages(embed, categoryKey, subcategoryKey);
}

function buildCatalogModeRow(
  currentMode: CatalogMode | null,
  counts: Record<CatalogMode, number>,
): ActionRowBuilder<ButtonBuilder> {
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId('tienda:catalog:mode:products')
      .setLabel('📦 Productos')
      .setStyle(currentMode === 'products' ? ButtonStyle.Primary : ButtonStyle.Secondary)
      .setDisabled(counts.products === 0),
    new ButtonBuilder()
      .setCustomId('tienda:catalog:mode:services')
      .setLabel('⚙️ Servicios')
      .setStyle(currentMode === 'services' ? ButtonStyle.Primary : ButtonStyle.Secondary)
      .setDisabled(counts.services === 0),
    new ButtonBuilder()
      .setCustomId('tienda:catalog:search')
      .setLabel('🔍 Buscar')
      .setStyle(ButtonStyle.Secondary),
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
        '**Buscar**: encuentra un ítem escribiendo su nombre.',
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
          .setLabel(category.label.slice(0, 100))
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

export function isParentProduct(product: CatalogProduct): boolean {
  return product.variants.length > 0;
}

function buildProductOptionDescription(product: CatalogProduct): string {
  if (isParentProduct(product)) {
    const count = product.variants.length;
    const prices = product.variants.map(v => v.prices[0]?.price).filter(p => p != null);
    const minPrice = prices.length > 0
      ? prices.reduce((min, p) => (p.lt(min) ? p : min))
      : null;
    const currency = product.variants[0]?.prices[0]?.currency ?? '$';
    const priceStr = minPrice ? `desde ${formatPrice(minPrice, currency)}` : 'S/P';
    return `${count} variante${count !== 1 ? 's' : ''}  ·  ${priceStr}`.slice(0, 100);
  }
  const price = product.prices[0];
  const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
  if (product.productType === 'service') {
    return priceStr;
  }
  const typeName = resolvePresentationTypeName(
    product.presentationType as Parameters<typeof resolvePresentationTypeName>[0],
  );
  return `${typeName}  ·  ${priceStr}`.slice(0, 100);
}

export function buildVariantSelectRow(
  variants: CatalogVariant[],
  parentProductId: string,
  context: 'tienda' | 'cart',
  selectedVariantId?: string | null,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const customId = context === 'tienda'
    ? `tienda:catalog:variant:${parentProductId}`
    : `pedido:cart:variant:select:${parentProductId}`;

  const select = new StringSelectMenuBuilder()
    .setCustomId(customId)
    .setPlaceholder('Selecciona una variante…')
    .addOptions(
      variants.slice(0, 25).map(variant => {
        const price = variant.prices[0];
        const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
        const label = (variant.variantLabel ?? variant.name).slice(0, 100);
        const typeName = variant.productType !== 'service'
          ? resolvePresentationTypeName(variant.presentationType as Parameters<typeof resolvePresentationTypeName>[0])
          : null;
        const desc = typeName
          ? `${typeName}  ·  ${priceStr}`.slice(0, 100)
          : priceStr;
        return new StringSelectMenuOptionBuilder()
          .setLabel(label)
          .setValue(variant.id)
          .setDescription(desc)
          .setDefault(variant.id === selectedVariantId);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

function buildVariantPickerEmbed(
  product: CatalogProduct,
  categoryKey: string,
  subcategoryKey: string,
): EmbedBuilder {
  const icon = getProductEmoji(product);
  const count = product.variants.length;
  return applyTaxonomyImages(
    new EmbedBuilder()
      .setTitle(`${icon} ${product.name}`)
      .setDescription(
        `**${count} variante${count !== 1 ? 's' : ''} disponibles** — selecciona una del menú para ver el detalle y añadirla al carrito.`,
      )
      .setColor(SHOP_COLORS.info)
      .setFooter({ text: SHOP_FOOTER.text })
      .setTimestamp(),
    categoryKey,
    subcategoryKey,
  );
}

export function buildVariantDetailEmbed(
  variant: CatalogVariant,
  parent: CatalogProduct,
  categoryKey: string,
  subcategoryKey: string,
): EmbedBuilder {
  const price = variant.prices[0];
  const priceStr = price
    ? `💰 **${formatPrice(price.price, price.currency)}**`
    : '💰 _Sin precio_';
  const icon = getProductEmoji(parent);
  const label = variant.variantLabel ?? variant.name;

  const presentationStr = variant.productType !== 'service'
    ? `📐 ${resolvePresentationLabel({
        presentationQuantity: variant.presentationQuantity,
        presentationType: variant.presentationType as Parameters<typeof resolvePresentationLabel>[0]['presentationType'],
        stackSize: variant.baseMaterial?.stackSize ?? 64,
      })}`
    : null;

  const embed = new EmbedBuilder()
    .setTitle(`${icon} ${parent.name}`)
    .setColor(SHOP_COLORS.info)
    .setTimestamp()
    .setFooter({ text: SHOP_FOOTER.text });

  embed.addFields(
    { name: 'Variante', value: `**${label}**`, inline: true },
    { name: 'Precio', value: priceStr, inline: true },
  );
  if (presentationStr) {
    embed.addFields({ name: 'Presentación', value: presentationStr, inline: true });
  }
  return applyTaxonomyImages(embed, categoryKey, subcategoryKey);
}

function buildProductSelectRow(
  products: CatalogProduct[],
  mode: CatalogMode,
  category: string,
  subcategory: string,
  selectedProductId?: string | null,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId(`tienda:catalog:product:${mode}:${category}:${subcategory}`)
    .setPlaceholder('Busca o selecciona un producto…')
    .addOptions(
      products.slice(0, PRODUCT_SELECT_THRESHOLD).map(product => {
        const icon = getProductEmoji(product);
        return new StringSelectMenuOptionBuilder()
          .setLabel(`${icon} ${truncateText(product.name, 95)}`)
          .setValue(product.id)
          .setDescription(buildProductOptionDescription(product))
          .setDefault(product.id === selectedProductId);
      }),
    );

  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
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

function buildBrowseHintEmbed(state: CatalogViewState): EmbedBuilder {
  const category = getCategoryDefinition(state.currentCategory);
  const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
  const count = state.totalSubcategoryProducts;
  const itemLabel = state.currentMode === 'services' ? 'servicio' : 'producto';

  return applyTaxonomyImages(
    new EmbedBuilder()
      .setTitle(`${category.label} / ${subcategory.label}`)
      .setDescription(`${count} ${itemLabel}${count !== 1 ? 's' : ''} disponibles. Selecciona uno del menú para ver el detalle.`)
      .setColor(SHOP_COLORS.info)
      .setFooter({ text: SHOP_FOOTER.text })
      .setTimestamp(),
    state.currentCategory,
    state.currentSubcategory,
  );
}

export function buildCatalogView(
  products: CatalogProduct[],
  mode: CatalogMode,
  categoryKey?: string | null,
  subcategoryKey?: string | null,
  requestedPage = 1,
  selectedProductId?: string | null,
  selectedVariantId?: string | null,
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

  const useProductSelect = state.allSubcategoryProducts.length > 0
    && state.allSubcategoryProducts.length <= PRODUCT_SELECT_THRESHOLD;

  if (useProductSelect) {
    const resolvedId = selectedProductId ?? state.allSubcategoryProducts[0]?.id ?? null;
    components.push(buildProductSelectRow(
      state.allSubcategoryProducts,
      state.currentMode,
      state.currentCategory,
      state.currentSubcategory,
      resolvedId,
    ));
  } else if (state.totalPages > 1) {
    components.push(buildPaginationRow(
      state.currentMode,
      state.currentCategory,
      state.currentSubcategory,
      state.currentPage,
      state.totalPages,
    ));
  }

  // Resolve selected product and check if it's a parent (has variants)
  let embed: EmbedBuilder;
  if (useProductSelect && state.allSubcategoryProducts.length > 0) {
    const resolvedId = selectedProductId ?? state.allSubcategoryProducts[0]?.id ?? null;
    const product = (resolvedId
      ? state.allSubcategoryProducts.find(p => p.id === resolvedId)
      : null) ?? state.allSubcategoryProducts[0];

    if (product && isParentProduct(product)) {
      // Parent: show variant picker embed + variant select row (within 5-row Discord limit)
      embed = buildVariantPickerEmbed(product, state.currentCategory, state.currentSubcategory);
      components.push(buildVariantSelectRow(product.variants, product.id, 'tienda', selectedVariantId));
    } else {
      embed = product
        ? buildProductDetailEmbed(product, state.currentCategory, state.currentSubcategory)
        : buildBrowseHintEmbed(state);
      components.push(buildOpenCartRow(state));
    }
  } else {
    embed = buildBrowseHintEmbed(state);
    components.push(buildOpenCartRow(state));
  }

  return { components, embed, state };
}

// ─── Search ──────────────────────────────────────────────────────────────────

export function searchCatalogProducts(
  products: CatalogProduct[],
  query: string,
): CatalogProduct[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return products.filter(p =>
    p.name.toLowerCase().includes(q) ||
    (p.description?.toLowerCase().includes(q) ?? false),
  );
}

function buildSearchProductSelectRow(
  products: CatalogProduct[],
  selectedProductId?: string | null,
): ActionRowBuilder<StringSelectMenuBuilder> {
  const select = new StringSelectMenuBuilder()
    .setCustomId('tienda:catalog:search_product')
    .setPlaceholder('Selecciona un resultado…')
    .addOptions(
      products.slice(0, PRODUCT_SELECT_THRESHOLD).map(product => {
        const icon = getProductEmoji(product);
        return new StringSelectMenuOptionBuilder()
          .setLabel(`${icon} ${truncateText(product.name, 95)}`)
          .setValue(product.id)
          .setDescription(buildProductOptionDescription(product))
          .setDefault(product.id === selectedProductId);
      }),
    );
  return new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select);
}

export function buildSearchView(
  allProducts: CatalogProduct[],
  results: CatalogProduct[],
  query: string,
  selectedProductId?: string | null,
): {
  components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>>;
  embed: EmbedBuilder;
} {
  const components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>> = [];

  // Row 1: back button
  components.push(
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId('tienda:catalog:search_back')
        .setLabel('← Volver al catálogo')
        .setStyle(ButtonStyle.Secondary),
    ),
  );

  if (results.length === 0) {
    return {
      components,
      embed: new EmbedBuilder()
        .setTitle('🔍 Sin resultados')
        .setDescription(`No se encontraron productos para **"${truncateText(query, 100)}"**.\nIntenta con otro término.`)
        .setColor(SHOP_COLORS.warning)
        .setFooter({ text: SHOP_FOOTER.text })
        .setTimestamp(),
    };
  }

  const shown = results.slice(0, PRODUCT_SELECT_THRESHOLD);
  const resolvedId = selectedProductId ?? shown[0]?.id ?? null;
  const selectedProduct = (resolvedId ? shown.find(p => p.id === resolvedId) : null) ?? shown[0];

  if (!selectedProduct) {
    return { components, embed: new EmbedBuilder().setTitle('🔍 Sin resultados').setColor(SHOP_COLORS.warning) };
  }

  // Row 2: product select
  components.push(buildSearchProductSelectRow(shown, resolvedId));

  // Row 3: cart
  const counts = countCatalogProductsByMode(allProducts);
  if (counts.products > 0 || counts.services > 0) {
    components.push(
      new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId('tienda:catalog:open_cart:products:general:otros:1')
          .setLabel('🛒 Abrir carrito')
          .setStyle(ButtonStyle.Success),
      ),
    );
  }

  const extraNote = results.length > PRODUCT_SELECT_THRESHOLD
    ? `\n_Se muestran los primeros ${PRODUCT_SELECT_THRESHOLD} de ${results.length} resultados._`
    : '';

  const price = selectedProduct.prices[0];
  const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
  const description = `💰 **${priceStr}**` + extraNote;

  const embed = buildProductDetailEmbed(
    selectedProduct,
    selectedProduct.category,
    selectedProduct.subcategory,
  ).setTitle(`🔍 "${truncateText(query, 50)}" — ${selectedProduct.name}`)
   .setDescription(description);

  return { components, embed };
}
