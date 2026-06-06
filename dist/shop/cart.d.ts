import { EmbedBuilder, ActionRowBuilder, ModalBuilder, type MessageActionRowComponentBuilder } from 'discord.js';
import type { Decimal } from '@prisma/client/runtime/client';
import type { CatalogMode, CatalogViewState } from './catalog.js';
export interface CartItem {
    contentsSummary?: string | null;
    productId: string;
    productName: string;
    variantLabel?: string | null;
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
export declare function queryCartProducts(guildId: string): Promise<import("./catalog.js").CatalogProduct[]>;
export type CartProductOption = Awaited<ReturnType<typeof queryCartProducts>>[number];
export declare function buildCartEmbed(session: CartSession): EmbedBuilder;
export declare function buildCartSearchView(session: CartSession, results: CartProductOption[], query: string): {
    components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
    embeds: EmbedBuilder[];
};
export declare function buildCartView(session: CartSession, products: CartProductOption[], selectedProductId?: string | null): {
    components: Array<ActionRowBuilder<MessageActionRowComponentBuilder>>;
    embeds: EmbedBuilder[];
    state: CatalogViewState;
};
export declare function buildQtyModal(productName: string, presentationTypeName?: string): ModalBuilder;
//# sourceMappingURL=cart.d.ts.map