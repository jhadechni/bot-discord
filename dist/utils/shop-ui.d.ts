import type { APIEmbedField } from 'discord.js';
import { type AquarisColor } from './message-ui.js';
export declare const SHOP_COLORS: {
    readonly info: 3447003;
    readonly success: 5763719;
    readonly warning: 16705372;
    readonly danger: 15548997;
    readonly neutral: 10070709;
    readonly stock: 5793266;
};
type ShopNoticeOptions = {
    title: string;
    description: string;
    color?: AquarisColor;
    fields?: APIEmbedField[];
};
type OrderReceivedOptions = {
    orderCode: string;
    productLabel: string;
    totalAmount: {
        toString(): string;
    } | number;
    isFullyAvailable: boolean;
    discountAmount?: {
        toString(): string;
    } | number;
    notes?: string | null;
};
type ActiveOrder = {
    createdAt: Date;
    customer: {
        discordUserId: string;
    };
    items: Array<{
        product: {
            name: string;
        };
        quantity: number;
    }>;
    orderCode: string;
    status: string;
    totalAmount: {
        toString(): string;
    } | number;
};
type InventoryRecord = {
    currentStock: number;
    minStockAlert: number;
    reservedStock: number;
    material: {
        baseUnit: string;
        name: string;
        stackSize: number;
    };
};
type ShopStatsOptions = {
    acceptedCount: number;
    averageOrder: number;
    pendingCount: number;
    periodLabel: string;
    salesCount: number;
    topBuyers: Array<{
        name: string;
        total: number;
    }>;
    topProducts: Array<{
        name: string;
        quantity: number;
    }>;
    totalRevenue: number;
};
export declare function buildShopNoticeEmbed(options: ShopNoticeOptions): import("discord.js").EmbedBuilder;
export declare function buildShopErrorEmbed(title: string, description: string): import("discord.js").EmbedBuilder;
export declare function buildOrderReceivedEmbed(options: OrderReceivedOptions): import("discord.js").EmbedBuilder;
export declare function buildActiveOrdersEmbed(orders: ActiveOrder[]): import("discord.js").EmbedBuilder;
export declare function buildInventoryEmbed(inventories: InventoryRecord[]): import("discord.js").EmbedBuilder;
export declare function buildLowStockEmbed(inventories: InventoryRecord[]): import("discord.js").EmbedBuilder;
export declare function buildShopStatsEmbed(options: ShopStatsOptions): import("discord.js").EmbedBuilder;
export {};
//# sourceMappingURL=shop-ui.d.ts.map