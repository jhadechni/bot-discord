import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, } from 'discord.js';
import { prisma } from '../database/prisma.js';
import { resolveShopGuildScopes } from './scope.js';
import { coerceShopTaxonomy, compareCategoryKeys, compareSubcategoryKeys, getCategoryDefinition, getSubcategoryDefinition, isValidCategory, normalizeShopTaxonomyKey, } from './taxonomy.js';
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import { SHOP_COLORS } from '../utils/shop-ui.js';
import { resolvePresentationLabel } from './quantities.js';
import { buildProductContentsSummary } from './product-contents.js';
const CATALOG_PAGE_SIZE = 10;
const PRODUCT_SELECT_THRESHOLD = 25;
const CATALOG_MODE_META = {
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
export const PRODUCT_TYPE_LABELS = {
    single: 'Unidad',
    bulk: 'Granel',
    kit: 'Kit',
    service: 'Servicio',
};
//TODO: change for new categories and sizes, and add icons
export const PRODUCT_TYPE_ICONS = {
    single: '📦',
    bulk: '🗃️',
    kit: '🧰',
    service: '⚙️',
};
export async function queryCatalogProducts(guildId) {
    const productsByName = new Map();
    for (const scope of resolveShopGuildScopes(guildId)) {
        const scopedProducts = await prisma.shopProduct.findMany({
            where: {
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
                prices: { where: { validTo: null }, take: 1 },
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
    return [...productsByName.values()].sort((left, right) => left.category.localeCompare(right.category, 'es')
        || left.subcategory.localeCompare(right.subcategory, 'es')
        || left.name.localeCompare(right.name, 'es'));
}
function truncateText(value, maxLength) {
    if (value.length <= maxLength)
        return value;
    return `${value.slice(0, maxLength - 1).trimEnd()}…`;
}
function getProductEmoji(product) {
    return getCategoryDefinition(product.category).emoji;
}
function buildProductCardValue(product) {
    const price = product.prices[0];
    const priceStr = price
        ? `💰 **${formatPrice(price.price, price.currency)}**`
        : '💰 _Sin precio_';
    const presentationStr = product.productType === 'service'
        ? null
        : `📐 ${product.presentationLabel ?? resolvePresentationLabel({
            presentationQuantity: product.presentationQuantity,
            presentationType: product.presentationType,
            stackSize: product.baseMaterial?.stackSize ?? 64,
        })}`;
    const description = product.description ? truncateText(product.description, 120) : null;
    const contentsSummary = buildProductContentsSummary(product);
    const contentsStr = contentsSummary ? `🎁 ${truncateText(contentsSummary, 120)}` : null;
    return [presentationStr, priceStr, contentsStr, description].filter(Boolean).join('\n');
}
function applyTaxonomyImages(embed, categoryKey, subcategoryKey) {
    const category = getCategoryDefinition(categoryKey);
    const subcategory = getSubcategoryDefinition(categoryKey, subcategoryKey);
    const thumbnailImage = subcategory.imageUrl ?? category.imageUrl;
    if (thumbnailImage) {
        embed.setThumbnail(thumbnailImage);
    }
    return embed;
}
function filterCatalogProductsByMode(products, mode) {
    return products.filter(product => mode === 'services'
        ? product.productType === 'service'
        : product.productType !== 'service');
}
function countCatalogProductsByMode(products) {
    return {
        products: filterCatalogProductsByMode(products, 'products').length,
        services: filterCatalogProductsByMode(products, 'services').length,
    };
}
function parseProductCategoryAssignments(product) {
    const assignments = [];
    const seen = new Set();
    const pushAssignment = (categoryValue, subcategoryValue) => {
        if (!isValidCategory(normalizeShopTaxonomyKey(categoryValue)))
            return;
        const taxonomy = coerceShopTaxonomy(categoryValue, subcategoryValue);
        const key = `${taxonomy.category}:${taxonomy.subcategory}`;
        if (seen.has(key))
            return;
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
            if (!rawAssignment || typeof rawAssignment !== 'object')
                continue;
            const assignment = rawAssignment;
            pushAssignment(typeof assignment.category === 'string' ? assignment.category : null, typeof assignment.subcategory === 'string' ? assignment.subcategory : null);
        }
    }
    if (assignments.length === 1 && 'additionalCategories' in product && Array.isArray(product.additionalCategories)) {
        for (const additionalCategory of product.additionalCategories) {
            if (typeof additionalCategory !== 'string')
                continue;
            pushAssignment(additionalCategory, null);
        }
    }
    return assignments;
}
function groupCatalogProducts(products) {
    const grouped = new Map();
    for (const product of products) {
        const assignments = parseProductCategoryAssignments(product);
        for (const assignment of assignments) {
            if (!grouped.has(assignment.category)) {
                grouped.set(assignment.category, new Map());
            }
            const subcategories = grouped.get(assignment.category);
            if (!subcategories.has(assignment.subcategory)) {
                subcategories.set(assignment.subcategory, []);
            }
            subcategories.get(assignment.subcategory).push(product);
        }
    }
    const orderedCategories = [...grouped.keys()].sort(compareCategoryKeys);
    return new Map(orderedCategories.map(categoryKey => {
        const subcategoryMap = grouped.get(categoryKey);
        const orderedSubcategories = [...subcategoryMap.keys()].sort((left, right) => compareSubcategoryKeys(categoryKey, left, right));
        return [
            categoryKey,
            new Map(orderedSubcategories.map(subcategoryKey => [
                subcategoryKey,
                subcategoryMap.get(subcategoryKey),
            ])),
        ];
    }));
}
function paginateCatalogProducts(products, pageSize) {
    const pages = [];
    for (let index = 0; index < products.length; index += pageSize) {
        pages.push(products.slice(index, index + pageSize));
    }
    return pages.length > 0 ? pages : [[]];
}
export function resolveCatalogViewState(products, mode, categoryKey, subcategoryKey, requestedPage = 1, pageSize = CATALOG_PAGE_SIZE) {
    const grouped = groupCatalogProducts(filterCatalogProductsByMode(products, mode));
    const categoryKeys = [...grouped.keys()].sort(compareCategoryKeys);
    const fallbackCategory = categoryKeys[0] ?? 'general';
    const normalizedCategory = coerceShopTaxonomy(categoryKey, null).category;
    const currentCategory = grouped.has(normalizedCategory) ? normalizedCategory : fallbackCategory;
    const subcategoryMap = grouped.get(currentCategory) ?? new Map();
    const subcategoryKeys = [...subcategoryMap.keys()].sort((left, right) => compareSubcategoryKeys(currentCategory, left, right));
    const fallbackSubcategory = subcategoryKeys[0] ?? 'otros';
    const normalizedSubcategory = coerceShopTaxonomy(currentCategory, subcategoryKey).subcategory;
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
export function buildProductGridEmbed(state, options = {}) {
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
            .setDescription(`**${category.label} / ${subcategory.label}**\n\n${options.emptyMessage ?? '_No hay productos en esta subcategoría._'}`)
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
    const TOP = `┌${HLINE}┐`;
    const SEP = `├${HLINE}┤`;
    const BOT = `└${HLINE}┘`;
    const NAME_MAX = 26; // │ + sp + emoji(2) + sp + name = 31 chars max
    const DETAIL_MAX = 29; // │ + 3sp + detail  = 33 chars max
    const productLines = state.pageProducts.map((product, index) => {
        const icon = getProductEmoji(product);
        const prefix = options.numberItems ? `${index + 1}. ` : '';
        const price = product.prices[0];
        const priceStr = price ? formatPrice(price.price, price.currency) : 'S/P';
        const presentation = product.productType !== 'service'
            ? (product.presentationLabel ?? resolvePresentationLabel({
                presentationQuantity: product.presentationQuantity,
                presentationType: product.presentationType,
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
    embed.setDescription([
        `**${category.label} / ${subcategory.label}**`,
        `${state.totalSubcategoryProducts} ${itemLabel}${state.totalSubcategoryProducts !== 1 ? 's' : ''} en esta sección.`,
        table,
    ].join('\n'));
    embed.setFooter({
        text: [
            SHOP_FOOTER.text,
            `Pág. ${state.currentPage}/${state.totalPages}`,
            footerHint,
        ].filter(Boolean).join('  ·  '),
    });
    return applyTaxonomyImages(embed, state.currentCategory, state.currentSubcategory);
}
export function buildProductDetailEmbed(product, categoryKey, subcategoryKey) {
    const price = product.prices[0];
    const priceStr = price
        ? `💰 **${formatPrice(price.price, price.currency)}**`
        : '💰 _Sin precio_';
    const icon = getProductEmoji(product);
    const typeLabel = PRODUCT_TYPE_LABELS[product.productType] ?? product.productType;
    const lines = [];
    if (product.productType !== 'service') {
        const presentationLabel = product.presentationLabel ?? resolvePresentationLabel({
            presentationQuantity: product.presentationQuantity,
            presentationType: product.presentationType,
            stackSize: product.baseMaterial?.stackSize ?? 64,
        });
        lines.push(`📐 **Presentación:** ${presentationLabel}`);
    }
    lines.push(priceStr);
    lines.push(`🏷️ **Tipo:** ${typeLabel}`);
    if (product.description) {
        lines.push('', product.description);
    }
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
function buildCatalogModeRow(currentMode, counts) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('tienda:catalog:mode:products')
        .setLabel('📦 Productos')
        .setStyle(currentMode === 'products' ? ButtonStyle.Primary : ButtonStyle.Secondary)
        .setDisabled(counts.products === 0), new ButtonBuilder()
        .setCustomId('tienda:catalog:mode:services')
        .setLabel('⚙️ Servicios')
        .setStyle(currentMode === 'services' ? ButtonStyle.Primary : ButtonStyle.Secondary)
        .setDisabled(counts.services === 0), new ButtonBuilder()
        .setCustomId('tienda:catalog:search')
        .setLabel('🔍 Buscar')
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId('tienda:catalog:request')
        .setLabel('📝 Solicitud libre')
        .setStyle(ButtonStyle.Success));
}
export function buildCatalogEntryView(products) {
    const counts = countCatalogProductsByMode(products);
    const embed = new EmbedBuilder()
        .setTitle('Tienda Aquaris')
        .setColor(SHOP_COLORS.info)
        .setDescription([
        'Elige cómo quieres navegar la tienda.',
        '',
        `**Productos**: ${counts.products} disponible${counts.products === 1 ? '' : 's'}`,
        `**Servicios**: ${counts.services} disponible${counts.services === 1 ? '' : 's'}`,
        '**Buscar**: encuentra un ítem escribiendo su nombre.',
        '**Solicitud libre**: envía al staff algo que no esté listado en el catálogo.',
    ].join('\n'))
        .setFooter({
        text: `${SHOP_FOOTER.text}  ·  Selecciona una sección para continuar`,
    })
        .setTimestamp();
    return {
        components: [buildCatalogModeRow(null, counts)],
        embed,
    };
}
export function buildCategorySelectRow(prefix, mode, categoryKeys, currentCategory) {
    const select = new StringSelectMenuBuilder()
        .setCustomId(`${prefix}:category:${mode}`)
        .setPlaceholder('Selecciona una categoría')
        .addOptions(categoryKeys.map(categoryKey => {
        const category = getCategoryDefinition(categoryKey);
        return new StringSelectMenuOptionBuilder()
            .setLabel(`${category.emoji} ${category.label}`.slice(0, 100))
            .setValue(categoryKey)
            .setDefault(categoryKey === currentCategory);
    }));
    return new ActionRowBuilder().addComponents(select);
}
export function buildSubcategorySelectRow(prefix, mode, currentCategory, subcategoryKeys, currentSubcategory) {
    const select = new StringSelectMenuBuilder()
        .setCustomId(`${prefix}:subcategory:${mode}:${currentCategory}`)
        .setPlaceholder('Selecciona una subcategoría')
        .addOptions(subcategoryKeys.map(subcategoryKey => {
        const subcategory = getSubcategoryDefinition(currentCategory, subcategoryKey);
        return new StringSelectMenuOptionBuilder()
            .setLabel(subcategory.label.slice(0, 100))
            .setValue(subcategoryKey)
            .setDefault(subcategoryKey === currentSubcategory);
    }));
    return new ActionRowBuilder().addComponents(select);
}
function buildPaginationRow(mode, currentCategory, currentSubcategory, currentPage, totalPages) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`tienda:catalog:page:${mode}:${currentCategory}:${currentSubcategory}:${currentPage - 1}`)
        .setLabel('Anterior')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(currentPage <= 1), new ButtonBuilder()
        .setCustomId(`tienda:catalog:page-label:${mode}:${currentCategory}:${currentSubcategory}:${currentPage}`)
        .setLabel(`Página ${currentPage}/${totalPages}`)
        .setStyle(ButtonStyle.Primary)
        .setDisabled(true), new ButtonBuilder()
        .setCustomId(`tienda:catalog:page:${mode}:${currentCategory}:${currentSubcategory}:${currentPage + 1}`)
        .setLabel('Siguiente')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(currentPage >= totalPages));
}
function buildProductSelectRow(products, mode, category, subcategory, selectedProductId) {
    const select = new StringSelectMenuBuilder()
        .setCustomId(`tienda:catalog:product:${mode}:${category}:${subcategory}`)
        .setPlaceholder('🔍 Busca o selecciona un producto…')
        .addOptions(products.slice(0, PRODUCT_SELECT_THRESHOLD).map(product => {
        const price = product.prices[0];
        const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
        const icon = getProductEmoji(product);
        return new StringSelectMenuOptionBuilder()
            .setLabel(`${icon} ${truncateText(product.name, 95)}`)
            .setValue(product.id)
            .setDescription(`💰 ${priceStr}`)
            .setDefault(product.id === selectedProductId);
    }));
    return new ActionRowBuilder().addComponents(select);
}
function buildOpenCartRow(state) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId(`tienda:catalog:open_cart:${state.currentMode}:${state.currentCategory}:${state.currentSubcategory}:${state.currentPage}`)
        .setLabel('🛒 Abrir carrito')
        .setStyle(ButtonStyle.Success));
}
function buildBrowseHintEmbed(state) {
    const category = getCategoryDefinition(state.currentCategory);
    const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
    const count = state.totalSubcategoryProducts;
    const itemLabel = state.currentMode === 'services' ? 'servicio' : 'producto';
    return applyTaxonomyImages(new EmbedBuilder()
        .setTitle(`${category.emoji} ${category.label} / ${subcategory.label}`)
        .setDescription(`${count} ${itemLabel}${count !== 1 ? 's' : ''} disponibles. Selecciona uno del menú para ver el detalle.`)
        .setColor(SHOP_COLORS.info)
        .setFooter({ text: SHOP_FOOTER.text })
        .setTimestamp(), state.currentCategory, state.currentSubcategory);
}
export function buildCatalogView(products, mode, categoryKey, subcategoryKey, requestedPage = 1, selectedProductId) {
    const state = resolveCatalogViewState(products, mode, categoryKey, subcategoryKey, requestedPage);
    const components = [];
    const counts = countCatalogProductsByMode(products);
    components.push(buildCatalogModeRow(state.currentMode, counts));
    if (state.categoryKeys.length > 1) {
        components.push(buildCategorySelectRow('tienda:catalog', state.currentMode, state.categoryKeys, state.currentCategory));
    }
    if (state.subcategoryKeys.length > 1) {
        components.push(buildSubcategorySelectRow('tienda:catalog', state.currentMode, state.currentCategory, state.subcategoryKeys, state.currentSubcategory));
    }
    const useProductSelect = state.allSubcategoryProducts.length > 0
        && state.allSubcategoryProducts.length <= PRODUCT_SELECT_THRESHOLD;
    if (useProductSelect) {
        const resolvedId = selectedProductId ?? state.allSubcategoryProducts[0]?.id ?? null;
        components.push(buildProductSelectRow(state.allSubcategoryProducts, state.currentMode, state.currentCategory, state.currentSubcategory, resolvedId));
    }
    else if (state.totalPages > 1) {
        components.push(buildPaginationRow(state.currentMode, state.currentCategory, state.currentSubcategory, state.currentPage, state.totalPages));
    }
    components.push(buildOpenCartRow(state));
    let embed;
    if (useProductSelect && state.allSubcategoryProducts.length > 0) {
        const product = (selectedProductId
            ? state.allSubcategoryProducts.find(p => p.id === selectedProductId)
            : null) ?? state.allSubcategoryProducts[0];
        embed = product
            ? buildProductDetailEmbed(product, state.currentCategory, state.currentSubcategory)
            : buildBrowseHintEmbed(state);
    }
    else {
        embed = buildBrowseHintEmbed(state);
    }
    return { components, embed, state };
}
// ─── Search ──────────────────────────────────────────────────────────────────
export function searchCatalogProducts(products, query) {
    const q = query.toLowerCase().trim();
    if (!q)
        return [];
    return products.filter(p => p.name.toLowerCase().includes(q) ||
        (p.description?.toLowerCase().includes(q) ?? false));
}
function buildSearchProductSelectRow(products, selectedProductId) {
    const select = new StringSelectMenuBuilder()
        .setCustomId('tienda:catalog:search_product')
        .setPlaceholder('Selecciona un resultado…')
        .addOptions(products.slice(0, PRODUCT_SELECT_THRESHOLD).map(product => {
        const price = product.prices[0];
        const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
        const icon = getProductEmoji(product);
        return new StringSelectMenuOptionBuilder()
            .setLabel(`${icon} ${truncateText(product.name, 95)}`)
            .setValue(product.id)
            .setDescription(`💰 ${priceStr}`)
            .setDefault(product.id === selectedProductId);
    }));
    return new ActionRowBuilder().addComponents(select);
}
export function buildSearchView(allProducts, results, query, selectedProductId) {
    const components = [];
    // Row 1: back button
    components.push(new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('tienda:catalog:search_back')
        .setLabel('← Volver al catálogo')
        .setStyle(ButtonStyle.Secondary)));
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
        components.push(new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setCustomId('tienda:catalog:open_cart:products:general:otros:1')
            .setLabel('🛒 Abrir carrito')
            .setStyle(ButtonStyle.Success)));
    }
    const extraNote = results.length > PRODUCT_SELECT_THRESHOLD
        ? `\n_Se muestran los primeros ${PRODUCT_SELECT_THRESHOLD} de ${results.length} resultados._`
        : '';
    const price = selectedProduct.prices[0];
    const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
    const descLines = [`💰 **${priceStr}**`];
    if (selectedProduct.description)
        descLines.push('', selectedProduct.description);
    const description = descLines.join('\n') + extraNote;
    const embed = buildProductDetailEmbed(selectedProduct, selectedProduct.category, selectedProduct.subcategory).setTitle(`🔍 "${truncateText(query, 50)}" — ${selectedProduct.name}`)
        .setDescription(description);
    return { components, embed };
}
//# sourceMappingURL=catalog.js.map