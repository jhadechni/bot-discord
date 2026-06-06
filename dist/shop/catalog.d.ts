import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js';
import type { Prisma } from '../generated/prisma/client.js';
export type CatalogMode = 'products' | 'services';
export declare const PRODUCT_TYPE_LABELS: Record<string, string>;
export declare const PRODUCT_TYPE_ICONS: Record<string, string>;
type CatalogProductBase = Prisma.ShopProductGetPayload<{
    include: {
        baseMaterial: true;
        prices: {
            where: {
                validTo: null;
            };
            take: 1;
        };
        components: {
            include: {
                material: true;
            };
            orderBy: {
                quantityRequired: 'desc';
            };
        };
    };
}>;
export type CatalogVariant = Prisma.ShopProductGetPayload<{
    include: {
        prices: {
            where: {
                validTo: null;
            };
            take: 1;
        };
        baseMaterial: true;
    };
}>;
export type CatalogProduct = CatalogProductBase & {
    variants: CatalogVariant[];
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
export declare function queryCatalogProducts(guildId: string): Promise<CatalogProduct[]>;
export declare function resolveCatalogViewState(products: CatalogProduct[], mode: CatalogMode, categoryKey?: string | null, subcategoryKey?: string | null, requestedPage?: number, pageSize?: number): CatalogViewState;
export declare function buildProductGridEmbed(state: CatalogViewState, options?: ProductGridEmbedOptions): EmbedBuilder;
export declare function buildProductDetailEmbed(product: CatalogProduct, categoryKey: string, subcategoryKey: string): EmbedBuilder;
export declare function buildCatalogEntryView(products: CatalogProduct[]): {
    components: Array<ActionRowBuilder<ButtonBuilder>>;
    embed: EmbedBuilder;
};
export declare function buildCategorySelectRow(prefix: string, mode: CatalogMode, categoryKeys: string[], currentCategory: string): ActionRowBuilder<StringSelectMenuBuilder>;
export declare function buildSubcategorySelectRow(prefix: string, mode: CatalogMode, currentCategory: string, subcategoryKeys: string[], currentSubcategory: string): ActionRowBuilder<StringSelectMenuBuilder>;
export declare function isParentProduct(product: CatalogProduct): boolean;
export declare function buildVariantSelectRow(variants: CatalogVariant[], parentProductId: string, context: 'tienda' | 'cart', selectedVariantId?: string | null): ActionRowBuilder<StringSelectMenuBuilder>;
export declare function buildVariantDetailEmbed(variant: CatalogVariant, parent: CatalogProduct, categoryKey: string, subcategoryKey: string): EmbedBuilder;
export declare function buildCatalogView(products: CatalogProduct[], mode: CatalogMode, categoryKey?: string | null, subcategoryKey?: string | null, requestedPage?: number, selectedProductId?: string | null, selectedVariantId?: string | null): {
    components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>>;
    embed: EmbedBuilder;
    state: CatalogViewState;
};
export declare function searchCatalogProducts(products: CatalogProduct[], query: string): CatalogProduct[];
export declare function buildSearchView(allProducts: CatalogProduct[], results: CatalogProduct[], query: string, selectedProductId?: string | null): {
    components: Array<ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>>;
    embed: EmbedBuilder;
};
export {};
//# sourceMappingURL=catalog.d.ts.map