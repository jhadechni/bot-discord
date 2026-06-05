import { EmbedBuilder, ActionRowBuilder, ModalBuilder, type MessageActionRowComponentBuilder } from 'discord.js';
import type { Decimal } from '@prisma/client/runtime/client';
import type { CatalogMode, CatalogViewState } from './catalog.js';
export interface CartItem {
    contentsSummary?: string | null;
    productId: string;
    productName: string;
    productType: string;
    productCategory: string;
    quantity: number;
    unitPrice: Decimal;
    lineTotal: Decimal;
    notes: string | null;
}
export type CartViewMode = 'browse' | 'cart' | 'search';
export interface CartSession {
    guildId: string;
    userId: string;
    channelId: string;
    messageId: string;
    currentCategory: string | null;
    currentCatalogMode: CatalogMode;
    currentPage: number;
    currentSubcategory: string | null;
    items: CartItem[];
    pendingProductId: string | null;
    viewMode: CartViewMode;
    searchQuery?: string | null;
}
export declare function getCart(guildId: string, userId: string): CartSession | undefined;
export declare function setCart(session: CartSession): void;
export declare function deleteCart(guildId: string, userId: string): void;
export declare function cartTotal(items: CartItem[]): number;
export declare function queryCartProducts(guildId: string): Promise<({
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
        price: Decimal;
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
    subcategory: string;
    baseMaterialId: string | null;
    presentationType: string;
    presentationQuantity: number;
    presentationLabel: string | null;
    additionalCategories: string[];
    additionalCategoryAssignments: import("@prisma/client/runtime/client").JsonValue;
})[]>;
export type CartProductOption = Awaited<ReturnType<typeof queryCartProducts>>[number];
export declare function buildCartEmbed(session: CartSession): EmbedBuilder;
export declare function buildCartSearchView(session: CartSession, results: CartProductOption[], query: string): {
    components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
    embeds: EmbedBuilder[];
};
export declare function buildCartView(session: CartSession, products: CartProductOption[]): {
    components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
    embeds: EmbedBuilder[];
    state: CatalogViewState;
};
export declare function buildQtyModal(productName: string, presentationTypeName?: string): ModalBuilder;
//# sourceMappingURL=cart.d.ts.map