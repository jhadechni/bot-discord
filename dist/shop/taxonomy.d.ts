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
export declare function loadTaxonomy(categories: ShopCategoryDefinition[]): void;
export declare function getTaxonomy(): ShopCategoryDefinition[];
export declare function reloadTaxonomyFromDatabase(guildId?: string | null): Promise<ShopCategoryDefinition[]>;
export declare function normalizeShopTaxonomyKey(value: string | null | undefined): string;
export declare function listCategoryDefinitions(): ShopCategoryDefinition[];
export declare function listSubcategoryDefinitions(categoryKey?: string | null): ShopSubcategoryDefinition[];
export declare function isValidCategory(categoryKey: string | null | undefined): boolean;
export declare function isValidSubcategory(categoryKey: string | null | undefined, subcategoryKey: string | null | undefined): boolean;
export declare function getCategoryDefinition(categoryKey: string | null | undefined): ShopCategoryDefinition;
export declare function getSubcategoryDefinition(categoryKey: string | null | undefined, subcategoryKey: string | null | undefined): ShopSubcategoryDefinition;
export declare function getFirstSubcategoryKey(categoryKey: string | null | undefined): string;
export declare function coerceShopTaxonomy(categoryKey: string | null | undefined, subcategoryKey: string | null | undefined): ShopTaxonomySelection;
export declare function assertShopTaxonomy(categoryKey: string | null | undefined, subcategoryKey: string | null | undefined): ShopTaxonomySelection;
export declare function compareCategoryKeys(left: string, right: string): number;
export declare function compareSubcategoryKeys(categoryKey: string, left: string, right: string): number;
//# sourceMappingURL=taxonomy.d.ts.map