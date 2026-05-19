type ComponentLike = {
    materialId: string;
    quantityRequired: number;
    material: {
        name: string;
    };
};
type ProductLike = {
    baseMaterialId?: string | null;
    components: ComponentLike[];
    productType: string;
};
export declare function getVisibleProductComponents(product: ProductLike): ComponentLike[];
export declare function buildProductContentsSummary(product: ProductLike, maxItems?: number): string | null;
export declare function buildProductContentsLines(product: ProductLike, maxItems?: number): string[];
export {};
//# sourceMappingURL=product-contents.d.ts.map