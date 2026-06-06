import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopProduct
 *
 */
export type ShopProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopProductPayload>;
export type AggregateShopProduct = {
    _count: ShopProductCountAggregateOutputType | null;
    _avg: ShopProductAvgAggregateOutputType | null;
    _sum: ShopProductSumAggregateOutputType | null;
    _min: ShopProductMinAggregateOutputType | null;
    _max: ShopProductMaxAggregateOutputType | null;
};
export type ShopProductAvgAggregateOutputType = {
    presentationQuantity: number | null;
    sortOrder: number | null;
};
export type ShopProductSumAggregateOutputType = {
    presentationQuantity: number | null;
    sortOrder: number | null;
};
export type ShopProductMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    productType: string | null;
    category: string | null;
    subcategory: string | null;
    description: string | null;
    baseMaterialId: string | null;
    presentationType: string | null;
    presentationQuantity: number | null;
    presentationLabel: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentId: string | null;
    variantLabel: string | null;
    sortOrder: number | null;
};
export type ShopProductMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    productType: string | null;
    category: string | null;
    subcategory: string | null;
    description: string | null;
    baseMaterialId: string | null;
    presentationType: string | null;
    presentationQuantity: number | null;
    presentationLabel: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentId: string | null;
    variantLabel: string | null;
    sortOrder: number | null;
};
export type ShopProductCountAggregateOutputType = {
    id: number;
    guildId: number;
    name: number;
    productType: number;
    category: number;
    subcategory: number;
    description: number;
    baseMaterialId: number;
    presentationType: number;
    presentationQuantity: number;
    presentationLabel: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    additionalCategories: number;
    additionalCategoryAssignments: number;
    parentId: number;
    variantLabel: number;
    variantAttributes: number;
    sortOrder: number;
    _all: number;
};
export type ShopProductAvgAggregateInputType = {
    presentationQuantity?: true;
    sortOrder?: true;
};
export type ShopProductSumAggregateInputType = {
    presentationQuantity?: true;
    sortOrder?: true;
};
export type ShopProductMinAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    productType?: true;
    category?: true;
    subcategory?: true;
    description?: true;
    baseMaterialId?: true;
    presentationType?: true;
    presentationQuantity?: true;
    presentationLabel?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    parentId?: true;
    variantLabel?: true;
    sortOrder?: true;
};
export type ShopProductMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    productType?: true;
    category?: true;
    subcategory?: true;
    description?: true;
    baseMaterialId?: true;
    presentationType?: true;
    presentationQuantity?: true;
    presentationLabel?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    parentId?: true;
    variantLabel?: true;
    sortOrder?: true;
};
export type ShopProductCountAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    productType?: true;
    category?: true;
    subcategory?: true;
    description?: true;
    baseMaterialId?: true;
    presentationType?: true;
    presentationQuantity?: true;
    presentationLabel?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    additionalCategories?: true;
    additionalCategoryAssignments?: true;
    parentId?: true;
    variantLabel?: true;
    variantAttributes?: true;
    sortOrder?: true;
    _all?: true;
};
export type ShopProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProduct to aggregate.
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopProducts
    **/
    _count?: true | ShopProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopProductMaxAggregateInputType;
};
export type GetShopProductAggregateType<T extends ShopProductAggregateArgs> = {
    [P in keyof T & keyof AggregateShopProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopProduct[P]> : Prisma.GetScalarType<T[P], AggregateShopProduct[P]>;
};
export type ShopProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductWhereInput;
    orderBy?: Prisma.ShopProductOrderByWithAggregationInput | Prisma.ShopProductOrderByWithAggregationInput[];
    by: Prisma.ShopProductScalarFieldEnum[] | Prisma.ShopProductScalarFieldEnum;
    having?: Prisma.ShopProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopProductCountAggregateInputType | true;
    _avg?: ShopProductAvgAggregateInputType;
    _sum?: ShopProductSumAggregateInputType;
    _min?: ShopProductMinAggregateInputType;
    _max?: ShopProductMaxAggregateInputType;
};
export type ShopProductGroupByOutputType = {
    id: string;
    guildId: string;
    name: string;
    productType: string;
    category: string;
    subcategory: string;
    description: string | null;
    baseMaterialId: string | null;
    presentationType: string;
    presentationQuantity: number;
    presentationLabel: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    additionalCategories: string[];
    additionalCategoryAssignments: runtime.JsonValue;
    parentId: string | null;
    variantLabel: string | null;
    variantAttributes: runtime.JsonValue | null;
    sortOrder: number;
    _count: ShopProductCountAggregateOutputType | null;
    _avg: ShopProductAvgAggregateOutputType | null;
    _sum: ShopProductSumAggregateOutputType | null;
    _min: ShopProductMinAggregateOutputType | null;
    _max: ShopProductMaxAggregateOutputType | null;
};
export type GetShopProductGroupByPayload<T extends ShopProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopProductGroupByOutputType[P]>;
}>>;
export type ShopProductWhereInput = {
    AND?: Prisma.ShopProductWhereInput | Prisma.ShopProductWhereInput[];
    OR?: Prisma.ShopProductWhereInput[];
    NOT?: Prisma.ShopProductWhereInput | Prisma.ShopProductWhereInput[];
    id?: Prisma.StringFilter<"ShopProduct"> | string;
    guildId?: Prisma.StringFilter<"ShopProduct"> | string;
    name?: Prisma.StringFilter<"ShopProduct"> | string;
    productType?: Prisma.StringFilter<"ShopProduct"> | string;
    category?: Prisma.StringFilter<"ShopProduct"> | string;
    subcategory?: Prisma.StringFilter<"ShopProduct"> | string;
    description?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    baseMaterialId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    presentationType?: Prisma.StringFilter<"ShopProduct"> | string;
    presentationQuantity?: Prisma.IntFilter<"ShopProduct"> | number;
    presentationLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopProduct"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    additionalCategories?: Prisma.StringNullableListFilter<"ShopProduct">;
    additionalCategoryAssignments?: Prisma.JsonFilter<"ShopProduct">;
    parentId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantAttributes?: Prisma.JsonNullableFilter<"ShopProduct">;
    sortOrder?: Prisma.IntFilter<"ShopProduct"> | number;
    discountPolicies?: Prisma.ShopDiscountPolicyListRelationFilter;
    orderItems?: Prisma.ShopOrderItemListRelationFilter;
    baseMaterial?: Prisma.XOR<Prisma.ShopMaterialNullableScalarRelationFilter, Prisma.ShopMaterialWhereInput> | null;
    components?: Prisma.ShopProductComponentListRelationFilter;
    prices?: Prisma.ShopProductPriceListRelationFilter;
    parent?: Prisma.XOR<Prisma.ShopProductNullableScalarRelationFilter, Prisma.ShopProductWhereInput> | null;
    variants?: Prisma.ShopProductListRelationFilter;
};
export type ShopProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    productType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseMaterialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    presentationType?: Prisma.SortOrder;
    presentationQuantity?: Prisma.SortOrder;
    presentationLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    additionalCategories?: Prisma.SortOrder;
    additionalCategoryAssignments?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    variantLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    variantAttributes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    discountPolicies?: Prisma.ShopDiscountPolicyOrderByRelationAggregateInput;
    orderItems?: Prisma.ShopOrderItemOrderByRelationAggregateInput;
    baseMaterial?: Prisma.ShopMaterialOrderByWithRelationInput;
    components?: Prisma.ShopProductComponentOrderByRelationAggregateInput;
    prices?: Prisma.ShopProductPriceOrderByRelationAggregateInput;
    parent?: Prisma.ShopProductOrderByWithRelationInput;
    variants?: Prisma.ShopProductOrderByRelationAggregateInput;
};
export type ShopProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopProductWhereInput | Prisma.ShopProductWhereInput[];
    OR?: Prisma.ShopProductWhereInput[];
    NOT?: Prisma.ShopProductWhereInput | Prisma.ShopProductWhereInput[];
    guildId?: Prisma.StringFilter<"ShopProduct"> | string;
    name?: Prisma.StringFilter<"ShopProduct"> | string;
    productType?: Prisma.StringFilter<"ShopProduct"> | string;
    category?: Prisma.StringFilter<"ShopProduct"> | string;
    subcategory?: Prisma.StringFilter<"ShopProduct"> | string;
    description?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    baseMaterialId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    presentationType?: Prisma.StringFilter<"ShopProduct"> | string;
    presentationQuantity?: Prisma.IntFilter<"ShopProduct"> | number;
    presentationLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopProduct"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    additionalCategories?: Prisma.StringNullableListFilter<"ShopProduct">;
    additionalCategoryAssignments?: Prisma.JsonFilter<"ShopProduct">;
    parentId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantAttributes?: Prisma.JsonNullableFilter<"ShopProduct">;
    sortOrder?: Prisma.IntFilter<"ShopProduct"> | number;
    discountPolicies?: Prisma.ShopDiscountPolicyListRelationFilter;
    orderItems?: Prisma.ShopOrderItemListRelationFilter;
    baseMaterial?: Prisma.XOR<Prisma.ShopMaterialNullableScalarRelationFilter, Prisma.ShopMaterialWhereInput> | null;
    components?: Prisma.ShopProductComponentListRelationFilter;
    prices?: Prisma.ShopProductPriceListRelationFilter;
    parent?: Prisma.XOR<Prisma.ShopProductNullableScalarRelationFilter, Prisma.ShopProductWhereInput> | null;
    variants?: Prisma.ShopProductListRelationFilter;
}, "id">;
export type ShopProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    productType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    baseMaterialId?: Prisma.SortOrderInput | Prisma.SortOrder;
    presentationType?: Prisma.SortOrder;
    presentationQuantity?: Prisma.SortOrder;
    presentationLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    additionalCategories?: Prisma.SortOrder;
    additionalCategoryAssignments?: Prisma.SortOrder;
    parentId?: Prisma.SortOrderInput | Prisma.SortOrder;
    variantLabel?: Prisma.SortOrderInput | Prisma.SortOrder;
    variantAttributes?: Prisma.SortOrderInput | Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    _count?: Prisma.ShopProductCountOrderByAggregateInput;
    _avg?: Prisma.ShopProductAvgOrderByAggregateInput;
    _max?: Prisma.ShopProductMaxOrderByAggregateInput;
    _min?: Prisma.ShopProductMinOrderByAggregateInput;
    _sum?: Prisma.ShopProductSumOrderByAggregateInput;
};
export type ShopProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopProductScalarWhereWithAggregatesInput | Prisma.ShopProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopProductScalarWhereWithAggregatesInput | Prisma.ShopProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    productType?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    category?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    subcategory?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ShopProduct"> | string | null;
    baseMaterialId?: Prisma.StringNullableWithAggregatesFilter<"ShopProduct"> | string | null;
    presentationType?: Prisma.StringWithAggregatesFilter<"ShopProduct"> | string;
    presentationQuantity?: Prisma.IntWithAggregatesFilter<"ShopProduct"> | number;
    presentationLabel?: Prisma.StringNullableWithAggregatesFilter<"ShopProduct"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShopProduct"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopProduct"> | Date | string;
    additionalCategories?: Prisma.StringNullableListFilter<"ShopProduct">;
    additionalCategoryAssignments?: Prisma.JsonWithAggregatesFilter<"ShopProduct">;
    parentId?: Prisma.StringNullableWithAggregatesFilter<"ShopProduct"> | string | null;
    variantLabel?: Prisma.StringNullableWithAggregatesFilter<"ShopProduct"> | string | null;
    variantAttributes?: Prisma.JsonNullableWithAggregatesFilter<"ShopProduct">;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ShopProduct"> | number;
};
export type ShopProductCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductCreateManyInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type ShopProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductListRelationFilter = {
    every?: Prisma.ShopProductWhereInput;
    some?: Prisma.ShopProductWhereInput;
    none?: Prisma.ShopProductWhereInput;
};
export type ShopProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type ShopProductNullableScalarRelationFilter = {
    is?: Prisma.ShopProductWhereInput | null;
    isNot?: Prisma.ShopProductWhereInput | null;
};
export type ShopProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    productType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseMaterialId?: Prisma.SortOrder;
    presentationType?: Prisma.SortOrder;
    presentationQuantity?: Prisma.SortOrder;
    presentationLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    additionalCategories?: Prisma.SortOrder;
    additionalCategoryAssignments?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    variantLabel?: Prisma.SortOrder;
    variantAttributes?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShopProductAvgOrderByAggregateInput = {
    presentationQuantity?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShopProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    productType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseMaterialId?: Prisma.SortOrder;
    presentationType?: Prisma.SortOrder;
    presentationQuantity?: Prisma.SortOrder;
    presentationLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    variantLabel?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShopProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    productType?: Prisma.SortOrder;
    category?: Prisma.SortOrder;
    subcategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    baseMaterialId?: Prisma.SortOrder;
    presentationType?: Prisma.SortOrder;
    presentationQuantity?: Prisma.SortOrder;
    presentationLabel?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    parentId?: Prisma.SortOrder;
    variantLabel?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShopProductSumOrderByAggregateInput = {
    presentationQuantity?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type ShopProductScalarRelationFilter = {
    is?: Prisma.ShopProductWhereInput;
    isNot?: Prisma.ShopProductWhereInput;
};
export type ShopProductCreateNestedManyWithoutBaseMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput> | Prisma.ShopProductCreateWithoutBaseMaterialInput[] | Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput | Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput[];
    createMany?: Prisma.ShopProductCreateManyBaseMaterialInputEnvelope;
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
};
export type ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput> | Prisma.ShopProductCreateWithoutBaseMaterialInput[] | Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput | Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput[];
    createMany?: Prisma.ShopProductCreateManyBaseMaterialInputEnvelope;
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
};
export type ShopProductUpdateManyWithoutBaseMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput> | Prisma.ShopProductCreateWithoutBaseMaterialInput[] | Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput | Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput[];
    upsert?: Prisma.ShopProductUpsertWithWhereUniqueWithoutBaseMaterialInput | Prisma.ShopProductUpsertWithWhereUniqueWithoutBaseMaterialInput[];
    createMany?: Prisma.ShopProductCreateManyBaseMaterialInputEnvelope;
    set?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    disconnect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    delete?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    update?: Prisma.ShopProductUpdateWithWhereUniqueWithoutBaseMaterialInput | Prisma.ShopProductUpdateWithWhereUniqueWithoutBaseMaterialInput[];
    updateMany?: Prisma.ShopProductUpdateManyWithWhereWithoutBaseMaterialInput | Prisma.ShopProductUpdateManyWithWhereWithoutBaseMaterialInput[];
    deleteMany?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
};
export type ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput> | Prisma.ShopProductCreateWithoutBaseMaterialInput[] | Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput | Prisma.ShopProductCreateOrConnectWithoutBaseMaterialInput[];
    upsert?: Prisma.ShopProductUpsertWithWhereUniqueWithoutBaseMaterialInput | Prisma.ShopProductUpsertWithWhereUniqueWithoutBaseMaterialInput[];
    createMany?: Prisma.ShopProductCreateManyBaseMaterialInputEnvelope;
    set?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    disconnect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    delete?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    update?: Prisma.ShopProductUpdateWithWhereUniqueWithoutBaseMaterialInput | Prisma.ShopProductUpdateWithWhereUniqueWithoutBaseMaterialInput[];
    updateMany?: Prisma.ShopProductUpdateManyWithWhereWithoutBaseMaterialInput | Prisma.ShopProductUpdateManyWithWhereWithoutBaseMaterialInput[];
    deleteMany?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
};
export type ShopProductCreateadditionalCategoriesInput = {
    set: string[];
};
export type ShopProductCreateNestedOneWithoutVariantsInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutVariantsInput, Prisma.ShopProductUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutVariantsInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
};
export type ShopProductCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput> | Prisma.ShopProductCreateWithoutParentInput[] | Prisma.ShopProductUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutParentInput | Prisma.ShopProductCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ShopProductCreateManyParentInputEnvelope;
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
};
export type ShopProductUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput> | Prisma.ShopProductCreateWithoutParentInput[] | Prisma.ShopProductUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutParentInput | Prisma.ShopProductCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ShopProductCreateManyParentInputEnvelope;
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
};
export type ShopProductUpdateadditionalCategoriesInput = {
    set?: string[];
    push?: string | string[];
};
export type ShopProductUpdateOneWithoutVariantsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutVariantsInput, Prisma.ShopProductUncheckedCreateWithoutVariantsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutVariantsInput;
    upsert?: Prisma.ShopProductUpsertWithoutVariantsInput;
    disconnect?: Prisma.ShopProductWhereInput | boolean;
    delete?: Prisma.ShopProductWhereInput | boolean;
    connect?: Prisma.ShopProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopProductUpdateToOneWithWhereWithoutVariantsInput, Prisma.ShopProductUpdateWithoutVariantsInput>, Prisma.ShopProductUncheckedUpdateWithoutVariantsInput>;
};
export type ShopProductUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput> | Prisma.ShopProductCreateWithoutParentInput[] | Prisma.ShopProductUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutParentInput | Prisma.ShopProductCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ShopProductUpsertWithWhereUniqueWithoutParentInput | Prisma.ShopProductUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ShopProductCreateManyParentInputEnvelope;
    set?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    disconnect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    delete?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    update?: Prisma.ShopProductUpdateWithWhereUniqueWithoutParentInput | Prisma.ShopProductUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ShopProductUpdateManyWithWhereWithoutParentInput | Prisma.ShopProductUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
};
export type ShopProductUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput> | Prisma.ShopProductCreateWithoutParentInput[] | Prisma.ShopProductUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutParentInput | Prisma.ShopProductCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ShopProductUpsertWithWhereUniqueWithoutParentInput | Prisma.ShopProductUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ShopProductCreateManyParentInputEnvelope;
    set?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    disconnect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    delete?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    connect?: Prisma.ShopProductWhereUniqueInput | Prisma.ShopProductWhereUniqueInput[];
    update?: Prisma.ShopProductUpdateWithWhereUniqueWithoutParentInput | Prisma.ShopProductUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ShopProductUpdateManyWithWhereWithoutParentInput | Prisma.ShopProductUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
};
export type ShopProductCreateNestedOneWithoutComponentsInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutComponentsInput, Prisma.ShopProductUncheckedCreateWithoutComponentsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutComponentsInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
};
export type ShopProductUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutComponentsInput, Prisma.ShopProductUncheckedCreateWithoutComponentsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutComponentsInput;
    upsert?: Prisma.ShopProductUpsertWithoutComponentsInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopProductUpdateToOneWithWhereWithoutComponentsInput, Prisma.ShopProductUpdateWithoutComponentsInput>, Prisma.ShopProductUncheckedUpdateWithoutComponentsInput>;
};
export type ShopProductCreateNestedOneWithoutPricesInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutPricesInput, Prisma.ShopProductUncheckedCreateWithoutPricesInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutPricesInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
};
export type ShopProductUpdateOneRequiredWithoutPricesNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutPricesInput, Prisma.ShopProductUncheckedCreateWithoutPricesInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutPricesInput;
    upsert?: Prisma.ShopProductUpsertWithoutPricesInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopProductUpdateToOneWithWhereWithoutPricesInput, Prisma.ShopProductUpdateWithoutPricesInput>, Prisma.ShopProductUncheckedUpdateWithoutPricesInput>;
};
export type ShopProductCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutOrderItemsInput, Prisma.ShopProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
};
export type ShopProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutOrderItemsInput, Prisma.ShopProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ShopProductUpsertWithoutOrderItemsInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopProductUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ShopProductUpdateWithoutOrderItemsInput>, Prisma.ShopProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ShopProductCreateNestedOneWithoutDiscountPoliciesInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedCreateWithoutDiscountPoliciesInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutDiscountPoliciesInput;
    connect?: Prisma.ShopProductWhereUniqueInput;
};
export type ShopProductUpdateOneWithoutDiscountPoliciesNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductCreateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedCreateWithoutDiscountPoliciesInput>;
    connectOrCreate?: Prisma.ShopProductCreateOrConnectWithoutDiscountPoliciesInput;
    upsert?: Prisma.ShopProductUpsertWithoutDiscountPoliciesInput;
    disconnect?: Prisma.ShopProductWhereInput | boolean;
    delete?: Prisma.ShopProductWhereInput | boolean;
    connect?: Prisma.ShopProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopProductUpdateToOneWithWhereWithoutDiscountPoliciesInput, Prisma.ShopProductUpdateWithoutDiscountPoliciesInput>, Prisma.ShopProductUncheckedUpdateWithoutDiscountPoliciesInput>;
};
export type ShopProductCreateWithoutBaseMaterialInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutBaseMaterialInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutBaseMaterialInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput>;
};
export type ShopProductCreateManyBaseMaterialInputEnvelope = {
    data: Prisma.ShopProductCreateManyBaseMaterialInput | Prisma.ShopProductCreateManyBaseMaterialInput[];
    skipDuplicates?: boolean;
};
export type ShopProductUpsertWithWhereUniqueWithoutBaseMaterialInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedUpdateWithoutBaseMaterialInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedCreateWithoutBaseMaterialInput>;
};
export type ShopProductUpdateWithWhereUniqueWithoutBaseMaterialInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutBaseMaterialInput, Prisma.ShopProductUncheckedUpdateWithoutBaseMaterialInput>;
};
export type ShopProductUpdateManyWithWhereWithoutBaseMaterialInput = {
    where: Prisma.ShopProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateManyMutationInput, Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialInput>;
};
export type ShopProductScalarWhereInput = {
    AND?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
    OR?: Prisma.ShopProductScalarWhereInput[];
    NOT?: Prisma.ShopProductScalarWhereInput | Prisma.ShopProductScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopProduct"> | string;
    guildId?: Prisma.StringFilter<"ShopProduct"> | string;
    name?: Prisma.StringFilter<"ShopProduct"> | string;
    productType?: Prisma.StringFilter<"ShopProduct"> | string;
    category?: Prisma.StringFilter<"ShopProduct"> | string;
    subcategory?: Prisma.StringFilter<"ShopProduct"> | string;
    description?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    baseMaterialId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    presentationType?: Prisma.StringFilter<"ShopProduct"> | string;
    presentationQuantity?: Prisma.IntFilter<"ShopProduct"> | number;
    presentationLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopProduct"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopProduct"> | Date | string;
    additionalCategories?: Prisma.StringNullableListFilter<"ShopProduct">;
    additionalCategoryAssignments?: Prisma.JsonFilter<"ShopProduct">;
    parentId?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantLabel?: Prisma.StringNullableFilter<"ShopProduct"> | string | null;
    variantAttributes?: Prisma.JsonNullableFilter<"ShopProduct">;
    sortOrder?: Prisma.IntFilter<"ShopProduct"> | number;
};
export type ShopProductCreateWithoutVariantsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
};
export type ShopProductUncheckedCreateWithoutVariantsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
};
export type ShopProductCreateOrConnectWithoutVariantsInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutVariantsInput, Prisma.ShopProductUncheckedCreateWithoutVariantsInput>;
};
export type ShopProductCreateWithoutParentInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutParentInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutParentInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput>;
};
export type ShopProductCreateManyParentInputEnvelope = {
    data: Prisma.ShopProductCreateManyParentInput | Prisma.ShopProductCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type ShopProductUpsertWithoutVariantsInput = {
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutVariantsInput, Prisma.ShopProductUncheckedUpdateWithoutVariantsInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutVariantsInput, Prisma.ShopProductUncheckedCreateWithoutVariantsInput>;
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: Prisma.ShopProductWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutVariantsInput, Prisma.ShopProductUncheckedUpdateWithoutVariantsInput>;
};
export type ShopProductUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
};
export type ShopProductUncheckedUpdateWithoutVariantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
};
export type ShopProductUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutParentInput, Prisma.ShopProductUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutParentInput, Prisma.ShopProductUncheckedCreateWithoutParentInput>;
};
export type ShopProductUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutParentInput, Prisma.ShopProductUncheckedUpdateWithoutParentInput>;
};
export type ShopProductUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ShopProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateManyMutationInput, Prisma.ShopProductUncheckedUpdateManyWithoutParentInput>;
};
export type ShopProductCreateWithoutComponentsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutComponentsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutComponentsInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutComponentsInput, Prisma.ShopProductUncheckedCreateWithoutComponentsInput>;
};
export type ShopProductUpsertWithoutComponentsInput = {
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutComponentsInput, Prisma.ShopProductUncheckedUpdateWithoutComponentsInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutComponentsInput, Prisma.ShopProductUncheckedCreateWithoutComponentsInput>;
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductUpdateToOneWithWhereWithoutComponentsInput = {
    where?: Prisma.ShopProductWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutComponentsInput, Prisma.ShopProductUncheckedUpdateWithoutComponentsInput>;
};
export type ShopProductUpdateWithoutComponentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutComponentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductCreateWithoutPricesInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutPricesInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutPricesInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutPricesInput, Prisma.ShopProductUncheckedCreateWithoutPricesInput>;
};
export type ShopProductUpsertWithoutPricesInput = {
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutPricesInput, Prisma.ShopProductUncheckedUpdateWithoutPricesInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutPricesInput, Prisma.ShopProductUncheckedCreateWithoutPricesInput>;
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductUpdateToOneWithWhereWithoutPricesInput = {
    where?: Prisma.ShopProductWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutPricesInput, Prisma.ShopProductUncheckedUpdateWithoutPricesInput>;
};
export type ShopProductUpdateWithoutPricesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutPricesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductCreateWithoutOrderItemsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutOrderItemsInput, Prisma.ShopProductUncheckedCreateWithoutOrderItemsInput>;
};
export type ShopProductUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutOrderItemsInput, Prisma.ShopProductUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutOrderItemsInput, Prisma.ShopProductUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ShopProductWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutOrderItemsInput, Prisma.ShopProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ShopProductUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductCreateWithoutDiscountPoliciesInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    orderItems?: Prisma.ShopOrderItemCreateNestedManyWithoutProductInput;
    baseMaterial?: Prisma.ShopMaterialCreateNestedOneWithoutDirectProductsInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceCreateNestedManyWithoutProductInput;
    parent?: Prisma.ShopProductCreateNestedOneWithoutVariantsInput;
    variants?: Prisma.ShopProductCreateNestedManyWithoutParentInput;
};
export type ShopProductUncheckedCreateWithoutDiscountPoliciesInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
    orderItems?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutProductInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutProductInput;
    prices?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutProductInput;
    variants?: Prisma.ShopProductUncheckedCreateNestedManyWithoutParentInput;
};
export type ShopProductCreateOrConnectWithoutDiscountPoliciesInput = {
    where: Prisma.ShopProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedCreateWithoutDiscountPoliciesInput>;
};
export type ShopProductUpsertWithoutDiscountPoliciesInput = {
    update: Prisma.XOR<Prisma.ShopProductUpdateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedUpdateWithoutDiscountPoliciesInput>;
    create: Prisma.XOR<Prisma.ShopProductCreateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedCreateWithoutDiscountPoliciesInput>;
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductUpdateToOneWithWhereWithoutDiscountPoliciesInput = {
    where?: Prisma.ShopProductWhereInput;
    data: Prisma.XOR<Prisma.ShopProductUpdateWithoutDiscountPoliciesInput, Prisma.ShopProductUncheckedUpdateWithoutDiscountPoliciesInput>;
};
export type ShopProductUpdateWithoutDiscountPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutDiscountPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductCreateManyBaseMaterialInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: string | null;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type ShopProductUpdateWithoutBaseMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    parent?: Prisma.ShopProductUpdateOneWithoutVariantsNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutBaseMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateManyWithoutBaseMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    parentId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductCreateManyParentInput = {
    id?: string;
    guildId: string;
    name: string;
    productType: string;
    category?: string;
    subcategory?: string;
    description?: string | null;
    baseMaterialId?: string | null;
    presentationType?: string;
    presentationQuantity?: number;
    presentationLabel?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    additionalCategories?: Prisma.ShopProductCreateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: number;
};
export type ShopProductUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUpdateManyWithoutProductNestedInput;
    baseMaterial?: Prisma.ShopMaterialUpdateOneWithoutDirectProductsNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutProductNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput;
    prices?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput;
    variants?: Prisma.ShopProductUncheckedUpdateManyWithoutParentNestedInput;
};
export type ShopProductUncheckedUpdateManyWithoutParentInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    productType?: Prisma.StringFieldUpdateOperationsInput | string;
    category?: Prisma.StringFieldUpdateOperationsInput | string;
    subcategory?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    baseMaterialId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    presentationType?: Prisma.StringFieldUpdateOperationsInput | string;
    presentationQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    presentationLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    additionalCategories?: Prisma.ShopProductUpdateadditionalCategoriesInput | string[];
    additionalCategoryAssignments?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    variantLabel?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    variantAttributes?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type ShopProductCountOutputType
 */
export type ShopProductCountOutputType = {
    discountPolicies: number;
    orderItems: number;
    components: number;
    prices: number;
    variants: number;
};
export type ShopProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    discountPolicies?: boolean | ShopProductCountOutputTypeCountDiscountPoliciesArgs;
    orderItems?: boolean | ShopProductCountOutputTypeCountOrderItemsArgs;
    components?: boolean | ShopProductCountOutputTypeCountComponentsArgs;
    prices?: boolean | ShopProductCountOutputTypeCountPricesArgs;
    variants?: boolean | ShopProductCountOutputTypeCountVariantsArgs;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductCountOutputType
     */
    select?: Prisma.ShopProductCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeCountDiscountPoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopDiscountPolicyWhereInput;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderItemWhereInput;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeCountComponentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductComponentWhereInput;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeCountPricesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductPriceWhereInput;
};
/**
 * ShopProductCountOutputType without action
 */
export type ShopProductCountOutputTypeCountVariantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductWhereInput;
};
export type ShopProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    productType?: boolean;
    category?: boolean;
    subcategory?: boolean;
    description?: boolean;
    baseMaterialId?: boolean;
    presentationType?: boolean;
    presentationQuantity?: boolean;
    presentationLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    additionalCategories?: boolean;
    additionalCategoryAssignments?: boolean;
    parentId?: boolean;
    variantLabel?: boolean;
    variantAttributes?: boolean;
    sortOrder?: boolean;
    discountPolicies?: boolean | Prisma.ShopProduct$discountPoliciesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.ShopProduct$orderItemsArgs<ExtArgs>;
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    components?: boolean | Prisma.ShopProduct$componentsArgs<ExtArgs>;
    prices?: boolean | Prisma.ShopProduct$pricesArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
    variants?: boolean | Prisma.ShopProduct$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopProduct"]>;
export type ShopProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    productType?: boolean;
    category?: boolean;
    subcategory?: boolean;
    description?: boolean;
    baseMaterialId?: boolean;
    presentationType?: boolean;
    presentationQuantity?: boolean;
    presentationLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    additionalCategories?: boolean;
    additionalCategoryAssignments?: boolean;
    parentId?: boolean;
    variantLabel?: boolean;
    variantAttributes?: boolean;
    sortOrder?: boolean;
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
}, ExtArgs["result"]["shopProduct"]>;
export type ShopProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    productType?: boolean;
    category?: boolean;
    subcategory?: boolean;
    description?: boolean;
    baseMaterialId?: boolean;
    presentationType?: boolean;
    presentationQuantity?: boolean;
    presentationLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    additionalCategories?: boolean;
    additionalCategoryAssignments?: boolean;
    parentId?: boolean;
    variantLabel?: boolean;
    variantAttributes?: boolean;
    sortOrder?: boolean;
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
}, ExtArgs["result"]["shopProduct"]>;
export type ShopProductSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    productType?: boolean;
    category?: boolean;
    subcategory?: boolean;
    description?: boolean;
    baseMaterialId?: boolean;
    presentationType?: boolean;
    presentationQuantity?: boolean;
    presentationLabel?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    additionalCategories?: boolean;
    additionalCategoryAssignments?: boolean;
    parentId?: boolean;
    variantLabel?: boolean;
    variantAttributes?: boolean;
    sortOrder?: boolean;
};
export type ShopProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "name" | "productType" | "category" | "subcategory" | "description" | "baseMaterialId" | "presentationType" | "presentationQuantity" | "presentationLabel" | "isActive" | "createdAt" | "updatedAt" | "additionalCategories" | "additionalCategoryAssignments" | "parentId" | "variantLabel" | "variantAttributes" | "sortOrder", ExtArgs["result"]["shopProduct"]>;
export type ShopProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    discountPolicies?: boolean | Prisma.ShopProduct$discountPoliciesArgs<ExtArgs>;
    orderItems?: boolean | Prisma.ShopProduct$orderItemsArgs<ExtArgs>;
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    components?: boolean | Prisma.ShopProduct$componentsArgs<ExtArgs>;
    prices?: boolean | Prisma.ShopProduct$pricesArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
    variants?: boolean | Prisma.ShopProduct$variantsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShopProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
};
export type ShopProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    baseMaterial?: boolean | Prisma.ShopProduct$baseMaterialArgs<ExtArgs>;
    parent?: boolean | Prisma.ShopProduct$parentArgs<ExtArgs>;
};
export type $ShopProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopProduct";
    objects: {
        discountPolicies: Prisma.$ShopDiscountPolicyPayload<ExtArgs>[];
        orderItems: Prisma.$ShopOrderItemPayload<ExtArgs>[];
        baseMaterial: Prisma.$ShopMaterialPayload<ExtArgs> | null;
        components: Prisma.$ShopProductComponentPayload<ExtArgs>[];
        prices: Prisma.$ShopProductPricePayload<ExtArgs>[];
        parent: Prisma.$ShopProductPayload<ExtArgs> | null;
        variants: Prisma.$ShopProductPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        name: string;
        productType: string;
        category: string;
        subcategory: string;
        description: string | null;
        baseMaterialId: string | null;
        presentationType: string;
        presentationQuantity: number;
        presentationLabel: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        additionalCategories: string[];
        additionalCategoryAssignments: runtime.JsonValue;
        parentId: string | null;
        variantLabel: string | null;
        variantAttributes: runtime.JsonValue | null;
        sortOrder: number;
    }, ExtArgs["result"]["shopProduct"]>;
    composites: {};
};
export type ShopProductGetPayload<S extends boolean | null | undefined | ShopProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopProductPayload, S>;
export type ShopProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopProductCountAggregateInputType | true;
};
export interface ShopProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopProduct'];
        meta: {
            name: 'ShopProduct';
        };
    };
    /**
     * Find zero or one ShopProduct that matches the filter.
     * @param {ShopProductFindUniqueArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopProductFindUniqueOrThrowArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindFirstArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindFirstOrThrowArgs} args - Arguments to find a ShopProduct
     * @example
     * // Get one ShopProduct
     * const shopProduct = await prisma.shopProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopProducts
     * const shopProducts = await prisma.shopProduct.findMany()
     *
     * // Get first 10 ShopProducts
     * const shopProducts = await prisma.shopProduct.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopProductWithIdOnly = await prisma.shopProduct.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopProductFindManyArgs>(args?: Prisma.SelectSubset<T, ShopProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopProduct.
     * @param {ShopProductCreateArgs} args - Arguments to create a ShopProduct.
     * @example
     * // Create one ShopProduct
     * const ShopProduct = await prisma.shopProduct.create({
     *   data: {
     *     // ... data to create a ShopProduct
     *   }
     * })
     *
     */
    create<T extends ShopProductCreateArgs>(args: Prisma.SelectSubset<T, ShopProductCreateArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopProducts.
     * @param {ShopProductCreateManyArgs} args - Arguments to create many ShopProducts.
     * @example
     * // Create many ShopProducts
     * const shopProduct = await prisma.shopProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopProducts and returns the data saved in the database.
     * @param {ShopProductCreateManyAndReturnArgs} args - Arguments to create many ShopProducts.
     * @example
     * // Create many ShopProducts
     * const shopProduct = await prisma.shopProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopProducts and only return the `id`
     * const shopProductWithIdOnly = await prisma.shopProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopProduct.
     * @param {ShopProductDeleteArgs} args - Arguments to delete one ShopProduct.
     * @example
     * // Delete one ShopProduct
     * const ShopProduct = await prisma.shopProduct.delete({
     *   where: {
     *     // ... filter to delete one ShopProduct
     *   }
     * })
     *
     */
    delete<T extends ShopProductDeleteArgs>(args: Prisma.SelectSubset<T, ShopProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopProduct.
     * @param {ShopProductUpdateArgs} args - Arguments to update one ShopProduct.
     * @example
     * // Update one ShopProduct
     * const shopProduct = await prisma.shopProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopProductUpdateArgs>(args: Prisma.SelectSubset<T, ShopProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopProducts.
     * @param {ShopProductDeleteManyArgs} args - Arguments to filter ShopProducts to delete.
     * @example
     * // Delete a few ShopProducts
     * const { count } = await prisma.shopProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopProducts
     * const shopProduct = await prisma.shopProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProducts and returns the data updated in the database.
     * @param {ShopProductUpdateManyAndReturnArgs} args - Arguments to update many ShopProducts.
     * @example
     * // Update many ShopProducts
     * const shopProduct = await prisma.shopProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopProducts and only return the `id`
     * const shopProductWithIdOnly = await prisma.shopProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ShopProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopProduct.
     * @param {ShopProductUpsertArgs} args - Arguments to update or create a ShopProduct.
     * @example
     * // Update or create a ShopProduct
     * const shopProduct = await prisma.shopProduct.upsert({
     *   create: {
     *     // ... data to create a ShopProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopProduct we want to update
     *   }
     * })
     */
    upsert<T extends ShopProductUpsertArgs>(args: Prisma.SelectSubset<T, ShopProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductCountArgs} args - Arguments to filter ShopProducts to count.
     * @example
     * // Count the number of ShopProducts
     * const count = await prisma.shopProduct.count({
     *   where: {
     *     // ... the filter for the ShopProducts we want to count
     *   }
     * })
    **/
    count<T extends ShopProductCountArgs>(args?: Prisma.Subset<T, ShopProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShopProductAggregateArgs>(args: Prisma.Subset<T, ShopProductAggregateArgs>): Prisma.PrismaPromise<GetShopProductAggregateType<T>>;
    /**
     * Group by ShopProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends ShopProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopProduct model
     */
    readonly fields: ShopProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopProduct.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    discountPolicies<T extends Prisma.ShopProduct$discountPoliciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$discountPoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.ShopProduct$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    baseMaterial<T extends Prisma.ShopProduct$baseMaterialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$baseMaterialArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    components<T extends Prisma.ShopProduct$componentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    prices<T extends Prisma.ShopProduct$pricesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$pricesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    parent<T extends Prisma.ShopProduct$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$parentArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    variants<T extends Prisma.ShopProduct$variantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProduct$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the ShopProduct model
 */
export interface ShopProductFieldRefs {
    readonly id: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly name: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly productType: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly category: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly subcategory: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly description: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly baseMaterialId: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly presentationType: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly presentationQuantity: Prisma.FieldRef<"ShopProduct", 'Int'>;
    readonly presentationLabel: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly isActive: Prisma.FieldRef<"ShopProduct", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ShopProduct", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShopProduct", 'DateTime'>;
    readonly additionalCategories: Prisma.FieldRef<"ShopProduct", 'String[]'>;
    readonly additionalCategoryAssignments: Prisma.FieldRef<"ShopProduct", 'Json'>;
    readonly parentId: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly variantLabel: Prisma.FieldRef<"ShopProduct", 'String'>;
    readonly variantAttributes: Prisma.FieldRef<"ShopProduct", 'Json'>;
    readonly sortOrder: Prisma.FieldRef<"ShopProduct", 'Int'>;
}
/**
 * ShopProduct findUnique
 */
export type ShopProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProduct to fetch.
     */
    where: Prisma.ShopProductWhereUniqueInput;
};
/**
 * ShopProduct findUniqueOrThrow
 */
export type ShopProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProduct to fetch.
     */
    where: Prisma.ShopProductWhereUniqueInput;
};
/**
 * ShopProduct findFirst
 */
export type ShopProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProduct to fetch.
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProducts.
     */
    cursor?: Prisma.ShopProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProducts.
     */
    distinct?: Prisma.ShopProductScalarFieldEnum | Prisma.ShopProductScalarFieldEnum[];
};
/**
 * ShopProduct findFirstOrThrow
 */
export type ShopProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProduct to fetch.
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProducts.
     */
    cursor?: Prisma.ShopProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProducts.
     */
    distinct?: Prisma.ShopProductScalarFieldEnum | Prisma.ShopProductScalarFieldEnum[];
};
/**
 * ShopProduct findMany
 */
export type ShopProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProducts to fetch.
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProducts to fetch.
     */
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopProducts.
     */
    cursor?: Prisma.ShopProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProducts.
     */
    distinct?: Prisma.ShopProductScalarFieldEnum | Prisma.ShopProductScalarFieldEnum[];
};
/**
 * ShopProduct create
 */
export type ShopProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopProduct.
     */
    data: Prisma.XOR<Prisma.ShopProductCreateInput, Prisma.ShopProductUncheckedCreateInput>;
};
/**
 * ShopProduct createMany
 */
export type ShopProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopProducts.
     */
    data: Prisma.ShopProductCreateManyInput | Prisma.ShopProductCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopProduct createManyAndReturn
 */
export type ShopProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopProducts.
     */
    data: Prisma.ShopProductCreateManyInput | Prisma.ShopProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProduct update
 */
export type ShopProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopProduct.
     */
    data: Prisma.XOR<Prisma.ShopProductUpdateInput, Prisma.ShopProductUncheckedUpdateInput>;
    /**
     * Choose, which ShopProduct to update.
     */
    where: Prisma.ShopProductWhereUniqueInput;
};
/**
 * ShopProduct updateMany
 */
export type ShopProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopProducts.
     */
    data: Prisma.XOR<Prisma.ShopProductUpdateManyMutationInput, Prisma.ShopProductUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProducts to update
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * Limit how many ShopProducts to update.
     */
    limit?: number;
};
/**
 * ShopProduct updateManyAndReturn
 */
export type ShopProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * The data used to update ShopProducts.
     */
    data: Prisma.XOR<Prisma.ShopProductUpdateManyMutationInput, Prisma.ShopProductUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProducts to update
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * Limit how many ShopProducts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProduct upsert
 */
export type ShopProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopProduct to update in case it exists.
     */
    where: Prisma.ShopProductWhereUniqueInput;
    /**
     * In case the ShopProduct found by the `where` argument doesn't exist, create a new ShopProduct with this data.
     */
    create: Prisma.XOR<Prisma.ShopProductCreateInput, Prisma.ShopProductUncheckedCreateInput>;
    /**
     * In case the ShopProduct was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopProductUpdateInput, Prisma.ShopProductUncheckedUpdateInput>;
};
/**
 * ShopProduct delete
 */
export type ShopProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    /**
     * Filter which ShopProduct to delete.
     */
    where: Prisma.ShopProductWhereUniqueInput;
};
/**
 * ShopProduct deleteMany
 */
export type ShopProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProducts to delete
     */
    where?: Prisma.ShopProductWhereInput;
    /**
     * Limit how many ShopProducts to delete.
     */
    limit?: number;
};
/**
 * ShopProduct.discountPolicies
 */
export type ShopProduct$discountPoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDiscountPolicy
     */
    select?: Prisma.ShopDiscountPolicySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopDiscountPolicy
     */
    omit?: Prisma.ShopDiscountPolicyOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopDiscountPolicyInclude<ExtArgs> | null;
    where?: Prisma.ShopDiscountPolicyWhereInput;
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput | Prisma.ShopDiscountPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopDiscountPolicyScalarFieldEnum | Prisma.ShopDiscountPolicyScalarFieldEnum[];
};
/**
 * ShopProduct.orderItems
 */
export type ShopProduct$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderItem
     */
    select?: Prisma.ShopOrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderItem
     */
    omit?: Prisma.ShopOrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderItemInclude<ExtArgs> | null;
    where?: Prisma.ShopOrderItemWhereInput;
    orderBy?: Prisma.ShopOrderItemOrderByWithRelationInput | Prisma.ShopOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderItemScalarFieldEnum | Prisma.ShopOrderItemScalarFieldEnum[];
};
/**
 * ShopProduct.baseMaterial
 */
export type ShopProduct$baseMaterialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    where?: Prisma.ShopMaterialWhereInput;
};
/**
 * ShopProduct.components
 */
export type ShopProduct$componentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    where?: Prisma.ShopProductComponentWhereInput;
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopProductComponentScalarFieldEnum | Prisma.ShopProductComponentScalarFieldEnum[];
};
/**
 * ShopProduct.prices
 */
export type ShopProduct$pricesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductPrice
     */
    select?: Prisma.ShopProductPriceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductPrice
     */
    omit?: Prisma.ShopProductPriceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductPriceInclude<ExtArgs> | null;
    where?: Prisma.ShopProductPriceWhereInput;
    orderBy?: Prisma.ShopProductPriceOrderByWithRelationInput | Prisma.ShopProductPriceOrderByWithRelationInput[];
    cursor?: Prisma.ShopProductPriceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopProductPriceScalarFieldEnum | Prisma.ShopProductPriceScalarFieldEnum[];
};
/**
 * ShopProduct.parent
 */
export type ShopProduct$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    where?: Prisma.ShopProductWhereInput;
};
/**
 * ShopProduct.variants
 */
export type ShopProduct$variantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    where?: Prisma.ShopProductWhereInput;
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    cursor?: Prisma.ShopProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopProductScalarFieldEnum | Prisma.ShopProductScalarFieldEnum[];
};
/**
 * ShopProduct without action
 */
export type ShopProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopProduct.d.ts.map