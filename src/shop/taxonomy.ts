// ── Tipos públicos ─────────────────────────────────────────────────────────────

export interface ShopSubcategoryDefinition {
  key:      string;
  label:    string;
  imageUrl: string | null;
}

export interface ShopCategoryDefinition {
  key:           string;
  label:         string;
  emoji:         string;
  imageUrl:      string | null;
  subcategories: ShopSubcategoryDefinition[];
}

export interface ShopTaxonomySelection {
  category:    string;
  subcategory: string;
}

// ── Cache en memoria ───────────────────────────────────────────────────────────

// Taxonomía mínima de arranque. Se reemplaza al importar desde el tab Categorías.
const FALLBACK_TAXONOMY: ShopCategoryDefinition[] = [
  {
    key: 'general',
    label: 'General',
    emoji: '🧭',
    imageUrl: null,
    subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
  },
];

let _taxonomy:         ShopCategoryDefinition[]    = [...FALLBACK_TAXONOMY];
let _categoryMap:      Map<string, ShopCategoryDefinition> = new Map(_taxonomy.map(c => [c.key, c]));
let _categoryOrder:    Map<string, number>          = new Map(_taxonomy.map((c, i) => [c.key, i]));
let _subcategoryOrder: Map<string, number>          = buildSubcategoryOrder(_taxonomy);

function buildSubcategoryOrder(taxonomy: ShopCategoryDefinition[]): Map<string, number> {
  return new Map(
    taxonomy.flatMap(c => c.subcategories.map((s, i) => [`${c.key}:${s.key}`, i] as const)),
  );
}

/** Reemplaza el cache con una nueva lista de categorías. Sin efecto si está vacía. */
export function loadTaxonomy(categories: ShopCategoryDefinition[]): void {
  if (categories.length === 0) return;
  _taxonomy         = categories;
  _categoryMap      = new Map(categories.map(c => [c.key, c]));
  _categoryOrder    = new Map(categories.map((c, i) => [c.key, i]));
  _subcategoryOrder = buildSubcategoryOrder(categories);
}

/** Devuelve la taxonomía cargada actualmente. */
export function getTaxonomy(): ShopCategoryDefinition[] {
  return _taxonomy;
}

// ── Parseo desde filas de Sheets ───────────────────────────────────────────────

function labelize(value: string): string {
  return value.split('_').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

function extractEmoji(raw: string): { emoji: string; label: string } {
  const match = raw.trim().match(/^(\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*/u);
  if (match) return { emoji: match[0].trim(), label: raw.slice(match[0].length).trim() };
  return { emoji: '🧭', label: raw.trim() };
}

function parseImageUrl(raw: string | undefined): string | null {
  const normalized = raw?.trim();
  if (!normalized) return null;
  if (!/^https?:\/\//i.test(normalized)) return null;
  return normalized;
}

/**
 * Convierte filas del tab Categorías en un array de ShopCategoryDefinition.
 * Formato nuevo:
 * [claveCategoria, nombreCategoria, imagenCategoria, claveSubcategoría, nombreSubcategoría, imagenSubcategoría]
 * Formato legado:
 * [claveCategoria, nombreCategoria, claveSubcategoría, nombreSubcategoría]
 * Las filas con la misma claveCategoria se agrupan bajo la misma categoría,
 * manteniendo el orden de primera aparición.
 */
export function parseTaxonomyRows(rows: string[][]): ShopCategoryDefinition[] {
  const order = new Map<string, {
    imageUrl: string | null;
    label: string;
    emoji: string;
    subs: Map<string, ShopSubcategoryDefinition>;
  }>();

  for (const row of rows) {
    const hasCategoryImageColumn = parseImageUrl(row[2]) !== null;
    const isExtendedRow = row.length >= 5 || hasCategoryImageColumn;
    const catKey = normalizeShopTaxonomyKey(row[0]);
    const catRaw = row[1]?.trim() ?? '';
    const catImageUrl = parseImageUrl(isExtendedRow ? row[2] : undefined);
    const subKey = normalizeShopTaxonomyKey(isExtendedRow ? row[3] : row[2]);
    const subLabel = (isExtendedRow ? row[4] : row[3])?.trim() ?? '';
    const subImageUrl = parseImageUrl(isExtendedRow ? row[5] : undefined);

    if (!catKey) continue;

    if (!order.has(catKey)) {
      const { emoji, label } = extractEmoji(catRaw);
      order.set(catKey, {
        label: label || labelize(catKey),
        emoji,
        imageUrl: catImageUrl,
        subs: new Map(),
      });
    } else if (catImageUrl && !order.get(catKey)!.imageUrl) {
      order.get(catKey)!.imageUrl = catImageUrl;
    }

    if (subKey && subLabel) {
      order.get(catKey)!.subs.set(subKey, { key: subKey, label: subLabel, imageUrl: subImageUrl });
    }
  }

  return [...order.entries()].map(([key, { label, emoji, imageUrl, subs }]) => {
    const subcategories: ShopSubcategoryDefinition[] =
      subs.size > 0
        ? [...subs.values()]
        : [{ key: 'otros', label: 'Otros', imageUrl: null }];
    return { key, label, emoji, imageUrl, subcategories };
  });
}

// ── Funciones de utilidad (leen del cache) ─────────────────────────────────────

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
  const category   = _categoryMap.get(normalized);
  if (category) return [...category.subcategories];
  return _taxonomy.flatMap(c => c.subcategories);
}

export function isValidCategory(categoryKey: string | null | undefined): boolean {
  return _categoryMap.has(normalizeShopTaxonomyKey(categoryKey));
}

export function isValidSubcategory(
  categoryKey:    string | null | undefined,
  subcategoryKey: string | null | undefined,
): boolean {
  const cat = _categoryMap.get(normalizeShopTaxonomyKey(categoryKey));
  return !!cat?.subcategories.some(s => s.key === normalizeShopTaxonomyKey(subcategoryKey));
}

export function getCategoryDefinition(categoryKey: string | null | undefined): ShopCategoryDefinition {
  const normalized = normalizeShopTaxonomyKey(categoryKey);
  return _categoryMap.get(normalized) ?? {
    key:           normalized || 'general',
    label:         labelize(normalized || 'general'),
    emoji:         '🧭',
    imageUrl:      null,
    subcategories: [{ key: 'otros', label: 'Otros', imageUrl: null }],
  };
}

export function getSubcategoryDefinition(
  categoryKey:    string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopSubcategoryDefinition {
  const category   = getCategoryDefinition(categoryKey);
  const normalized = normalizeShopTaxonomyKey(subcategoryKey);
  return category.subcategories.find(s => s.key === normalized)
    ?? { key: normalized || 'otros', label: labelize(normalized || 'otros'), imageUrl: null };
}

export function getFirstSubcategoryKey(categoryKey: string | null | undefined): string {
  return getCategoryDefinition(categoryKey).subcategories[0]?.key ?? 'otros';
}

export function coerceShopTaxonomy(
  categoryKey:    string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopTaxonomySelection {
  const cat = normalizeShopTaxonomyKey(categoryKey);
  if (!isValidCategory(cat)) return { category: 'general', subcategory: 'otros' };
  const sub = normalizeShopTaxonomyKey(subcategoryKey);
  if (!isValidSubcategory(cat, sub)) return { category: cat, subcategory: getFirstSubcategoryKey(cat) };
  return { category: cat, subcategory: sub };
}

export function assertShopTaxonomy(
  categoryKey:    string | null | undefined,
  subcategoryKey: string | null | undefined,
): ShopTaxonomySelection {
  const cat = normalizeShopTaxonomyKey(categoryKey);
  const sub = normalizeShopTaxonomyKey(subcategoryKey);
  if (!isValidCategory(cat))       throw new Error('Categoría inválida. Importa las categorías con `/sync importar categorias`.');
  if (!isValidSubcategory(cat, sub)) throw new Error('Subcategoría inválida para la categoría seleccionada.');
  return { category: cat, subcategory: sub };
}

export function compareCategoryKeys(left: string, right: string): number {
  const lo = _categoryOrder.get(left)  ?? Number.MAX_SAFE_INTEGER;
  const ro = _categoryOrder.get(right) ?? Number.MAX_SAFE_INTEGER;
  return lo !== ro ? lo - ro : left.localeCompare(right, 'es');
}

export function compareSubcategoryKeys(categoryKey: string, left: string, right: string): number {
  const lo = _subcategoryOrder.get(`${categoryKey}:${left}`)  ?? Number.MAX_SAFE_INTEGER;
  const ro = _subcategoryOrder.get(`${categoryKey}:${right}`) ?? Number.MAX_SAFE_INTEGER;
  return lo !== ro ? lo - ro : left.localeCompare(right, 'es');
}
