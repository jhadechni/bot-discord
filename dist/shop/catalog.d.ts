import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, StringSelectMenuBuilder } from 'discord.js';
import type { Prisma } from '../generated/prisma/client.js';
export type CatalogMode = 'products' | 'services';
export declare const PRODUCT_TYPE_LABELS: Record<string, string>;
export declare const PRODUCT_TYPE_ICONS: Record<string, string>;
type CatalogProductRecord = Prisma.ShopProductGetPayload<{
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
export type CatalogProduct = CatalogProductRecord;
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
export declare function queryCatalogProducts(guildId: string): Promise<({
    components: ({
        material: {
            createdAt: Date;
            id: string;
            guildId: string;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            baseUnit: string;
            stackSize: number;
        };
    } & {
        id: string;
        quantityRequired: number;
        productId: string;
        materialId: string;
    })[];
    baseMaterial: {
        createdAt: Date;
        id: string;
        guildId: string;
        name: string;
        updatedAt: Date;
        isActive: boolean;
        baseUnit: string;
        stackSize: number;
    } | null;
    prices: {
        id: string;
        productId: string;
        price: import("@prisma/client-runtime-utils").Decimal;
        currency: string;
        validFrom: Date;
        validTo: Date | null;
        changedByUserId: string | null;
    }[];
} & {
    createdAt: Date;
    id: string;
    guildId: string;
    name: string;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
    category: string;
    productType: string;
    additionalCategories: string[];
    additionalCategoryAssignments: import("@prisma/client/runtime/client").JsonValue;
    subcategory: string;
    baseMaterialId: string | null;
    presentationType: string;
    presentationQuantity: number;
    presentationLabel: string | null;
})[]>;
export declare function resolveCatalogViewState(products: CatalogProduct[], mode: CatalogMode, categoryKey?: string | null, subcategoryKey?: string | null, requestedPage?: number, pageSize?: number): CatalogViewState;
export declare function buildProductGridEmbed(state: CatalogViewState, options?: ProductGridEmbedOptions): EmbedBuilder;
export declare function buildProductDetailEmbed(product: CatalogProduct, categoryKey: string, subcategoryKey: string): EmbedBuilder;
export declare function buildCatalogEntryView(products: CatalogProduct[]): {
    components: Array<ActionRowBuilder<ButtonBuilder>>;
    embed: EmbedBuilder;
};
export declare function buildCategorySelectRow(prefix: string, mode: CatalogMode, categoryKeys: string[], currentCategory: string): ActionRowBuilder<StringSelectMenuBuilder>;
export declare function buildSubcategorySelectRow(prefix: string, mode: CatalogMode, currentCategory: string, subcategoryKeys: string[], currentSubcategory: string): ActionRowBuilder<StringSelectMenuBuilder>;
export declare function buildCatalogView(products: CatalogProduct[], mode: CatalogMode, categoryKey?: string | null, subcategoryKey?: string | null, requestedPage?: number, selectedProductId?: string | null): {
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