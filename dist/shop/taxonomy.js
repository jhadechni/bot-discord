import { prisma } from '../database/prisma.js';
import { resolveShopGuildScopes } from './scope.js';
const taxonomyPrisma = prisma;
const FALLBACK_TAXONOMY = [
    {
        key: 'general',
        label: 'General',
        emoji: '🧭',
        imageUrl: null,
        subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
    },
];
let _taxonomy = [...FALLBACK_TAXONOMY];
let _categoryMap = new Map(_taxonomy.map(category => [category.key, category]));
let _categoryOrder = new Map(_taxonomy.map((category, index) => [category.key, index]));
let _subcategoryOrder = buildSubcategoryOrder(_taxonomy);
function buildSubcategoryOrder(taxonomy) {
    return new Map(taxonomy.flatMap(category => category.subcategories.map((subcategory, index) => [`${category.key}:${subcategory.key}`, index])));
}
function labelize(value) {
    return value
        .split(/[-_]/g)
        .filter(Boolean)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}
function categoryEmoji(categoryKey) {
    const emojiMap = {
        bloques: '🧱',
        encantamientos: '✨',
        kits: '🎒',
        redstone: '⚙️',
        servicios: '🔧',
    };
    return emojiMap[categoryKey] ?? '🧭';
}
function buildTaxonomyFromCategories(rows) {
    if (rows.length === 0) {
        return [...FALLBACK_TAXONOMY];
    }
    return rows
        .map(row => {
        const categoryKey = normalizeShopTaxonomyKey(row.slug || row.name);
        if (!categoryKey)
            return null;
        const subcategories = row.subcategories
            .map(subcategory => {
            const subcategoryKey = normalizeShopTaxonomyKey(subcategory.slug || subcategory.name);
            if (!subcategoryKey)
                return null;
            return {
                key: subcategoryKey,
                label: subcategory.name || labelize(subcategoryKey),
                imageUrl: subcategory.imageUrl ?? null,
            };
        })
            .filter((subcategory) => !!subcategory);
        return {
            key: categoryKey,
            label: row.name || labelize(categoryKey),
            emoji: categoryEmoji(categoryKey),
            imageUrl: row.imageUrl ?? null,
            subcategories: subcategories.length > 0
                ? subcategories
                : [{ key: 'otros', label: 'Otros', imageUrl: null }],
        };
    })
        .filter((category) => !!category);
}
async function fetchTaxonomyRows(guildId) {
    const categoryMap = new Map();
    for (const scope of resolveShopGuildScopes(guildId)) {
        const rows = await taxonomyPrisma.shopCategory.findMany({
            where: {
                guildId: scope,
                isActive: true,
            },
            select: {
                name: true,
                slug: true,
                imageUrl: true,
                subcategories: {
                    where: { isActive: true },
                    select: {
                        name: true,
                        slug: true,
                        imageUrl: true,
                    },
                    orderBy: [
                        { sortOrder: 'asc' },
                        { name: 'asc' },
                    ],
                },
            },
            orderBy: [
                { sortOrder: 'asc' },
                { name: 'asc' },
            ],
        });
        for (const row of rows) {
            const categoryKey = normalizeShopTaxonomyKey(row.slug || row.name);
            if (!categoryKey)
                continue;
            const existing = categoryMap.get(categoryKey);
            if (!existing) {
                categoryMap.set(categoryKey, {
                    ...row,
                    subcategories: [...row.subcategories],
                });
                continue;
            }
            const subcategoryMap = new Map(existing.subcategories.map(subcategory => [normalizeShopTaxonomyKey(subcategory.slug || subcategory.name), subcategory]));
            for (const subcategory of row.subcategories) {
                const subcategoryKey = normalizeShopTaxonomyKey(subcategory.slug || subcategory.name);
                if (!subcategoryKey || subcategoryMap.has(subcategoryKey))
                    continue;
                subcategoryMap.set(subcategoryKey, subcategory);
            }
            categoryMap.set(categoryKey, {
                ...existing,
                subcategories: [...subcategoryMap.values()],
            });
        }
    }
    return [...categoryMap.values()];
}
export function loadTaxonomy(categories) {
    if (categories.length === 0)
        return;
    _taxonomy = categories;
    _categoryMap = new Map(categories.map(category => [category.key, category]));
    _categoryOrder = new Map(categories.map((category, index) => [category.key, index]));
    _subcategoryOrder = buildSubcategoryOrder(categories);
}
export function getTaxonomy() {
    return _taxonomy;
}
export async function reloadTaxonomyFromDatabase(guildId) {
    const rows = await fetchTaxonomyRows(guildId);
    const categories = buildTaxonomyFromCategories(rows);
    loadTaxonomy(categories);
    return categories;
}
export function normalizeShopTaxonomyKey(value) {
    return (value ?? '')
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
export function listCategoryDefinitions() {
    return [..._taxonomy];
}
export function listSubcategoryDefinitions(categoryKey) {
    const normalized = normalizeShopTaxonomyKey(categoryKey);
    const category = _categoryMap.get(normalized);
    if (category)
        return [...category.subcategories];
    return _taxonomy.flatMap(item => item.subcategories);
}
export function isValidCategory(categoryKey) {
    return _categoryMap.has(normalizeShopTaxonomyKey(categoryKey));
}
export function isValidSubcategory(categoryKey, subcategoryKey) {
    const category = _categoryMap.get(normalizeShopTaxonomyKey(categoryKey));
    return !!category?.subcategories.some(item => item.key === normalizeShopTaxonomyKey(subcategoryKey));
}
export function getCategoryDefinition(categoryKey) {
    const normalized = normalizeShopTaxonomyKey(categoryKey);
    return _categoryMap.get(normalized) ?? {
        key: normalized || 'general',
        label: labelize(normalized || 'general'),
        emoji: categoryEmoji(normalized || 'general'),
        imageUrl: null,
        subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
    };
}
export function getSubcategoryDefinition(categoryKey, subcategoryKey) {
    const category = getCategoryDefinition(categoryKey);
    const normalized = normalizeShopTaxonomyKey(subcategoryKey);
    return category.subcategories.find(item => item.key === normalized)
        ?? { key: normalized || 'otros', label: labelize(normalized || 'otros'), imageUrl: null };
}
export function getFirstSubcategoryKey(categoryKey) {
    return getCategoryDefinition(categoryKey).subcategories[0]?.key ?? 'otros';
}
export function coerceShopTaxonomy(categoryKey, subcategoryKey) {
    const category = normalizeShopTaxonomyKey(categoryKey);
    if (!isValidCategory(category))
        return { category: 'general', subcategory: 'otros' };
    const subcategory = normalizeShopTaxonomyKey(subcategoryKey);
    if (!isValidSubcategory(category, subcategory)) {
        return { category, subcategory: getFirstSubcategoryKey(category) };
    }
    return { category, subcategory };
}
export function assertShopTaxonomy(categoryKey, subcategoryKey) {
    const category = normalizeShopTaxonomyKey(categoryKey);
    const subcategory = normalizeShopTaxonomyKey(subcategoryKey);
    if (!isValidCategory(category)) {
        throw new Error('Categoría inválida. Verifica la taxonomía cargada desde la base de datos.');
    }
    if (!isValidSubcategory(category, subcategory)) {
        throw new Error('Subcategoría inválida para la categoría seleccionada.');
    }
    return { category, subcategory };
}
export function compareCategoryKeys(left, right) {
    const leftOrder = _categoryOrder.get(left) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = _categoryOrder.get(right) ?? Number.MAX_SAFE_INTEGER;
    return leftOrder !== rightOrder ? leftOrder - rightOrder : left.localeCompare(right, 'es');
}
export function compareSubcategoryKeys(categoryKey, left, right) {
    const leftOrder = _subcategoryOrder.get(`${categoryKey}:${left}`) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = _subcategoryOrder.get(`${categoryKey}:${right}`) ?? Number.MAX_SAFE_INTEGER;
    return leftOrder !== rightOrder ? leftOrder - rightOrder : left.localeCompare(right, 'es');
}
//# sourceMappingURL=taxonomy.js.map