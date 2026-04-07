import { prisma } from '../database/prisma.js';

export interface ShopSubcategoryDefinition {
  key: string;
  label: string;
  imageUrl: string | null;
}

export interface ShopCategoryDefinition {
  key: string;
  label: string;
  emoji: string;
  imageUrl: string | null;
  subcategories: ShopSubcategoryDefinition[];
}

export interface ShopTaxonomySelection {
  category: string;
  subcategory: string;
}

const FALLBACK_TAXONOMY: ShopCategoryDefinition[] = [
  {
    key: 'general',
    label: 'General',
    emoji: '🧭',
    imageUrl: null,
    subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
  },
];

let _taxonomy: ShopCategoryDefinition[] = [...FALLBACK_TAXONOMY];
let _categoryMap = new Map(_taxonomy.map(category => [category.key, category]));
let _categoryOrder = new Map(_taxonomy.map((category, index) => [category.key, index]));
let _subcategoryOrder = buildSubcategoryOrder(_taxonomy);

function buildSubcategoryOrder(taxonomy: ShopCategoryDefinition[]): Map<string, number> {
  return new Map(
    taxonomy.flatMap(category =>
      category.subcategories.map((subcategory, index) => [`${category.key}:${subcategory.key}`, index] as const),
    ),
  );
}

function labelize(value: string): string {
  return value
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function categoryEmoji(categoryKey: string): string {
  const emojiMap: Record<string, string> = {
    bloques: '🧱',
    encantamientos: '✨',
    kits: '🎒',
    redstone: '⚙️',
    servicios: '🔧',
  };

  return emojiMap[categoryKey] ?? '🧭';
}

function buildTaxonomyFromRecords(
  rows: Array<{ category: string; subcategory: string }>,
): ShopCategoryDefinition[] {
  if (rows.length === 0) {
    return [...FALLBACK_TAXONOMY];
  }

  const categories = new Map<string, {
    imageUrl: string | null;
    label: string;
    emoji: string;
    subcategories: Map<string, ShopSubcategoryDefinition>;
  }>();

  for (const row of rows) {
    const categoryKey = normalizeShopTaxonomyKey(row.category);
    const subcategoryKey = normalizeShopTaxonomyKey(row.subcategory);

    if (!categoryKey) {
      continue;
    }

    if (!categories.has(categoryKey)) {
      categories.set(categoryKey, {
        imageUrl: null,
        label: labelize(categoryKey),
        emoji: categoryEmoji(categoryKey),
        subcategories: new Map(),
      });
    }

    const category = categories.get(categoryKey)!;
    const safeSubcategoryKey = subcategoryKey || 'otros';

    if (!category.subcategories.has(safeSubcategoryKey)) {
      category.subcategories.set(safeSubcategoryKey, {
        key: safeSubcategoryKey,
        label: labelize(safeSubcategoryKey),
        imageUrl: null,
      });
    }
  }

  return [...categories.entries()].map(([key, category]) => ({
    key,
    label: category.label,
    emoji: category.emoji,
    imageUrl: category.imageUrl,
    subcategories: [...category.subcategories.values()],
  }));
}

export function loadTaxonomy(categories: ShopCategoryDefinition[]): void {
  if (categories.length === 0) return;

  _taxonomy = categories;
  _categoryMap = new Map(categories.map(category => [category.key, category]));
  _categoryOrder = new Map(categories.map((category, index) => [category.key, index]));
  _subcategoryOrder = buildSubcategoryOrder(categories);
}

export function getTaxonomy(): ShopCategoryDefinition[] {
  return _taxonomy;
}

export async function reloadTaxonomyFromDatabase(): Promise<ShopCategoryDefinition[]> {
  const rows = await prisma.shopProduct.findMany({
    select: {
      category: true,
      subcategory: true,
    },
    distinct: ['category', 'subcategory'],
    orderBy: [
      { category: 'asc' },
      { subcategory: 'asc' },
    ],
  });

  const categories = buildTaxonomyFromRecords(rows);
  loadTaxonomy(categories);
  return categories;
}

export function normalizeShopTaxonomyKey(value: string | null | undefined): string {
  return (value ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

export function listCategoryDefinitions(): ShopCategoryDefinition[] {
  return [..._taxonomy];
}

export function listSubcategoryDefinitions(categoryKey?: string | null): ShopSubcategoryDefinition[] {
  const normalized = normalizeShopTaxonomyKey(categoryKey);
  const category = _categoryMap.get(normalized);
  if (category) return [...category.subcategories];
  return _taxonomy.flatMap(item => item.subcategories);
}

export function isValidCategory(categoryKey: string | null | undefined): boolean {
  return _categoryMap.has(normalizeShopTaxonomyKey(categoryKey));
}

export function isValidSubcategory(
  categoryKey: string | null | undefined,
  subcategoryKey: string | null | undefined,
): boolean {
  const category = _categoryMap.get(normalizeShopTaxonomyKey(categoryKey));
  return !!category?.subcategories.some(item => item.key === normalizeShopTaxonomyKey(subcategoryKey));
}

export function getCategoryDefinition(categoryKey: string | null | undefined): ShopCategoryDefinition {
  const normalized = normalizeShopTaxonomyKey(categoryKey);
  return _categoryMap.get(normalized) ?? {
    key: normalized || 'general',
    label: labelize(normalized || 'general'),
    emoji: categoryEmoji(normalized || 'general'),
    imageUrl: null,
    subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
  };
}

export function getSubcategoryDefinition(
  categoryKey: string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopSubcategoryDefinition {
  const category = getCategoryDefinition(categoryKey);
  const normalized = normalizeShopTaxonomyKey(subcategoryKey);
  return category.subcategories.find(item => item.key === normalized)
    ?? { key: normalized || 'otros', label: labelize(normalized || 'otros'), imageUrl: null };
}

export function getFirstSubcategoryKey(categoryKey: string | null | undefined): string {
  return getCategoryDefinition(categoryKey).subcategories[0]?.key ?? 'otros';
}

export function coerceShopTaxonomy(
  categoryKey: string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopTaxonomySelection {
  const category = normalizeShopTaxonomyKey(categoryKey);
  if (!isValidCategory(category)) return { category: 'general', subcategory: 'otros' };

  const subcategory = normalizeShopTaxonomyKey(subcategoryKey);
  if (!isValidSubcategory(category, subcategory)) {
    return { category, subcategory: getFirstSubcategoryKey(category) };
  }

  return { category, subcategory };
}

export function assertShopTaxonomy(
  categoryKey: string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopTaxonomySelection {
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

export function compareCategoryKeys(left: string, right: string): number {
  const leftOrder = _categoryOrder.get(left) ?? Number.MAX_SAFE_INTEGER;
  const rightOrder = _categoryOrder.get(right) ?? Number.MAX_SAFE_INTEGER;
  return leftOrder !== rightOrder ? leftOrder - rightOrder : left.localeCompare(right, 'es');
}

export function compareSubcategoryKeys(categoryKey: string, left: string, right: string): number {
  const leftOrder = _subcategoryOrder.get(`${categoryKey}:${left}`) ?? Number.MAX_SAFE_INTEGER;
  const rightOrder = _subcategoryOrder.get(`${categoryKey}:${right}`) ?? Number.MAX_SAFE_INTEGER;
  return leftOrder !== rightOrder ? leftOrder - rightOrder : left.localeCompare(right, 'es');
}
