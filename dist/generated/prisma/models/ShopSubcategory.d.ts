import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopSubcategory
 *
 */
export type ShopSubcategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopSubcategoryPayload>;
export type AggregateShopSubcategory = {
    _count: ShopSubcategoryCountAggregateOutputType | null;
    _avg: ShopSubcategoryAvgAggregateOutputType | null;
    _sum: ShopSubcategorySumAggregateOutputType | null;
    _min: ShopSubcategoryMinAggregateOutputType | null;
    _max: ShopSubcategoryMaxAggregateOutputType | null;
};
export type ShopSubcategoryAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type ShopSubcategorySumAggregateOutputType = {
    sortOrder: number | null;
};
export type ShopSubcategoryMinAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    imageUrl: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopSubcategoryMaxAggregateOutputType = {
    id: string | null;
    categoryId: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    imageUrl: string | null;
    isActive: boolean | null;
    sortOrder: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopSubcategoryCountAggregateOutputType = {
    id: number;
    categoryId: number;
    name: number;
    slug: number;
    description: number;
    imageUrl: number;
    isActive: number;
    sortOrder: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShopSubcategoryAvgAggregateInputType = {
    sortOrder?: true;
};
export type ShopSubcategorySumAggregateInputType = {
    sortOrder?: true;
};
export type ShopSubcategoryMinAggregateInputType = {
    id?: true;
    categoryId?: true;
    name?: true;
    slug?: true;
    description?: true;
    imageUrl?: true;
    isActive?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopSubcategoryMaxAggregateInputType = {
    id?: true;
    categoryId?: true;
    name?: true;
    slug?: true;
    description?: true;
    imageUrl?: true;
    isActive?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopSubcategoryCountAggregateInputType = {
    id?: true;
    categoryId?: true;
    name?: true;
    slug?: true;
    description?: true;
    imageUrl?: true;
    isActive?: true;
    sortOrder?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShopSubcategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSubcategory to aggregate.
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSubcategories to fetch.
     */
    orderBy?: Prisma.ShopSubcategoryOrderByWithRelationInput | Prisma.ShopSubcategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopSubcategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSubcategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSubcategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopSubcategories
    **/
    _count?: true | ShopSubcategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopSubcategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopSubcategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopSubcategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopSubcategoryMaxAggregateInputType;
};
export type GetShopSubcategoryAggregateType<T extends ShopSubcategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateShopSubcategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopSubcategory[P]> : Prisma.GetScalarType<T[P], AggregateShopSubcategory[P]>;
};
export type ShopSubcategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSubcategoryWhereInput;
    orderBy?: Prisma.ShopSubcategoryOrderByWithAggregationInput | Prisma.ShopSubcategoryOrderByWithAggregationInput[];
    by: Prisma.ShopSubcategoryScalarFieldEnum[] | Prisma.ShopSubcategoryScalarFieldEnum;
    having?: Prisma.ShopSubcategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopSubcategoryCountAggregateInputType | true;
    _avg?: ShopSubcategoryAvgAggregateInputType;
    _sum?: ShopSubcategorySumAggregateInputType;
    _min?: ShopSubcategoryMinAggregateInputType;
    _max?: ShopSubcategoryMaxAggregateInputType;
};
export type ShopSubcategoryGroupByOutputType = {
    id: string;
    categoryId: string;
    name: string;
    slug: string;
    description: string | null;
    imageUrl: string | null;
    isActive: boolean;
    sortOrder: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ShopSubcategoryCountAggregateOutputType | null;
    _avg: ShopSubcategoryAvgAggregateOutputType | null;
    _sum: ShopSubcategorySumAggregateOutputType | null;
    _min: ShopSubcategoryMinAggregateOutputType | null;
    _max: ShopSubcategoryMaxAggregateOutputType | null;
};
export type GetShopSubcategoryGroupByPayload<T extends ShopSubcategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopSubcategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopSubcategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopSubcategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopSubcategoryGroupByOutputType[P]>;
}>>;
export type ShopSubcategoryWhereInput = {
    AND?: Prisma.ShopSubcategoryWhereInput | Prisma.ShopSubcategoryWhereInput[];
    OR?: Prisma.ShopSubcategoryWhereInput[];
    NOT?: Prisma.ShopSubcategoryWhereInput | Prisma.ShopSubcategoryWhereInput[];
    id?: Prisma.StringFilter<"ShopSubcategory"> | string;
    categoryId?: Prisma.StringFilter<"ShopSubcategory"> | string;
    name?: Prisma.StringFilter<"ShopSubcategory"> | string;
    slug?: Prisma.StringFilter<"ShopSubcategory"> | string;
    description?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopSubcategory"> | boolean;
    sortOrder?: Prisma.IntFilter<"ShopSubcategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
    category?: Prisma.XOR<Prisma.ShopCategoryScalarRelationFilter, Prisma.ShopCategoryWhereInput>;
};
export type ShopSubcategoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.ShopCategoryOrderByWithRelationInput;
};
export type ShopSubcategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    categoryId_slug?: Prisma.ShopSubcategoryCategoryIdSlugCompoundUniqueInput;
    AND?: Prisma.ShopSubcategoryWhereInput | Prisma.ShopSubcategoryWhereInput[];
    OR?: Prisma.ShopSubcategoryWhereInput[];
    NOT?: Prisma.ShopSubcategoryWhereInput | Prisma.ShopSubcategoryWhereInput[];
    categoryId?: Prisma.StringFilter<"ShopSubcategory"> | string;
    name?: Prisma.StringFilter<"ShopSubcategory"> | string;
    slug?: Prisma.StringFilter<"ShopSubcategory"> | string;
    description?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopSubcategory"> | boolean;
    sortOrder?: Prisma.IntFilter<"ShopSubcategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
    category?: Prisma.XOR<Prisma.ShopCategoryScalarRelationFilter, Prisma.ShopCategoryWhereInput>;
}, "id" | "categoryId_slug">;
export type ShopSubcategoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopSubcategoryCountOrderByAggregateInput;
    _avg?: Prisma.ShopSubcategoryAvgOrderByAggregateInput;
    _max?: Prisma.ShopSubcategoryMaxOrderByAggregateInput;
    _min?: Prisma.ShopSubcategoryMinOrderByAggregateInput;
    _sum?: Prisma.ShopSubcategorySumOrderByAggregateInput;
};
export type ShopSubcategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopSubcategoryScalarWhereWithAggregatesInput | Prisma.ShopSubcategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopSubcategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopSubcategoryScalarWhereWithAggregatesInput | Prisma.ShopSubcategoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopSubcategory"> | string;
    categoryId?: Prisma.StringWithAggregatesFilter<"ShopSubcategory"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShopSubcategory"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"ShopSubcategory"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ShopSubcategory"> | string | null;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"ShopSubcategory"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShopSubcategory"> | boolean;
    sortOrder?: Prisma.IntWithAggregatesFilter<"ShopSubcategory"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopSubcategory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopSubcategory"> | Date | string;
};
export type ShopSubcategoryCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.ShopCategoryCreateNestedOneWithoutSubcategoriesInput;
};
export type ShopSubcategoryUncheckedCreateInput = {
    id?: string;
    categoryId: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopSubcategoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.ShopCategoryUpdateOneRequiredWithoutSubcategoriesNestedInput;
};
export type ShopSubcategoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategoryCreateManyInput = {
    id?: string;
    categoryId: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopSubcategoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategoryListRelationFilter = {
    every?: Prisma.ShopSubcategoryWhereInput;
    some?: Prisma.ShopSubcategoryWhereInput;
    none?: Prisma.ShopSubcategoryWhereInput;
};
export type ShopSubcategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopSubcategoryCategoryIdSlugCompoundUniqueInput = {
    categoryId: string;
    slug: string;
};
export type ShopSubcategoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSubcategoryAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ShopSubcategoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSubcategoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopSubcategorySumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type ShopSubcategoryCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput> | Prisma.ShopSubcategoryCreateWithoutCategoryInput[] | Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput | Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ShopSubcategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
};
export type ShopSubcategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput> | Prisma.ShopSubcategoryCreateWithoutCategoryInput[] | Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput | Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ShopSubcategoryCreateManyCategoryInputEnvelope;
    connect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
};
export type ShopSubcategoryUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput> | Prisma.ShopSubcategoryCreateWithoutCategoryInput[] | Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput | Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ShopSubcategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ShopSubcategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ShopSubcategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    disconnect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    delete?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    connect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    update?: Prisma.ShopSubcategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ShopSubcategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ShopSubcategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.ShopSubcategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ShopSubcategoryScalarWhereInput | Prisma.ShopSubcategoryScalarWhereInput[];
};
export type ShopSubcategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput> | Prisma.ShopSubcategoryCreateWithoutCategoryInput[] | Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput | Prisma.ShopSubcategoryCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ShopSubcategoryUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ShopSubcategoryUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ShopSubcategoryCreateManyCategoryInputEnvelope;
    set?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    disconnect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    delete?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    connect?: Prisma.ShopSubcategoryWhereUniqueInput | Prisma.ShopSubcategoryWhereUniqueInput[];
    update?: Prisma.ShopSubcategoryUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ShopSubcategoryUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ShopSubcategoryUpdateManyWithWhereWithoutCategoryInput | Prisma.ShopSubcategoryUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ShopSubcategoryScalarWhereInput | Prisma.ShopSubcategoryScalarWhereInput[];
};
export type ShopSubcategoryCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopSubcategoryUncheckedCreateWithoutCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopSubcategoryCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ShopSubcategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput>;
};
export type ShopSubcategoryCreateManyCategoryInputEnvelope = {
    data: Prisma.ShopSubcategoryCreateManyCategoryInput | Prisma.ShopSubcategoryCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ShopSubcategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ShopSubcategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopSubcategoryUpdateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ShopSubcategoryCreateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedCreateWithoutCategoryInput>;
};
export type ShopSubcategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ShopSubcategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopSubcategoryUpdateWithoutCategoryInput, Prisma.ShopSubcategoryUncheckedUpdateWithoutCategoryInput>;
};
export type ShopSubcategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ShopSubcategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopSubcategoryUpdateManyMutationInput, Prisma.ShopSubcategoryUncheckedUpdateManyWithoutCategoryInput>;
};
export type ShopSubcategoryScalarWhereInput = {
    AND?: Prisma.ShopSubcategoryScalarWhereInput | Prisma.ShopSubcategoryScalarWhereInput[];
    OR?: Prisma.ShopSubcategoryScalarWhereInput[];
    NOT?: Prisma.ShopSubcategoryScalarWhereInput | Prisma.ShopSubcategoryScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopSubcategory"> | string;
    categoryId?: Prisma.StringFilter<"ShopSubcategory"> | string;
    name?: Prisma.StringFilter<"ShopSubcategory"> | string;
    slug?: Prisma.StringFilter<"ShopSubcategory"> | string;
    description?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    imageUrl?: Prisma.StringNullableFilter<"ShopSubcategory"> | string | null;
    isActive?: Prisma.BoolFilter<"ShopSubcategory"> | boolean;
    sortOrder?: Prisma.IntFilter<"ShopSubcategory"> | number;
    createdAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopSubcategory"> | Date | string;
};
export type ShopSubcategoryCreateManyCategoryInput = {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    imageUrl?: string | null;
    isActive?: boolean;
    sortOrder?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopSubcategoryUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategoryUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSubcategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSubcategory"]>;
export type ShopSubcategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSubcategory"]>;
export type ShopSubcategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    categoryId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSubcategory"]>;
export type ShopSubcategorySelectScalar = {
    id?: boolean;
    categoryId?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    isActive?: boolean;
    sortOrder?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShopSubcategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "categoryId" | "name" | "slug" | "description" | "imageUrl" | "isActive" | "sortOrder" | "createdAt" | "updatedAt", ExtArgs["result"]["shopSubcategory"]>;
export type ShopSubcategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
};
export type ShopSubcategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
};
export type ShopSubcategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ShopCategoryDefaultArgs<ExtArgs>;
};
export type $ShopSubcategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopSubcategory";
    objects: {
        category: Prisma.$ShopCategoryPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        categoryId: string;
        name: string;
        slug: string;
        description: string | null;
        imageUrl: string | null;
        isActive: boolean;
        sortOrder: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shopSubcategory"]>;
    composites: {};
};
export type ShopSubcategoryGetPayload<S extends boolean | null | undefined | ShopSubcategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload, S>;
export type ShopSubcategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopSubcategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopSubcategoryCountAggregateInputType | true;
};
export interface ShopSubcategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopSubcategory'];
        meta: {
            name: 'ShopSubcategory';
        };
    };
    /**
     * Find zero or one ShopSubcategory that matches the filter.
     * @param {ShopSubcategoryFindUniqueArgs} args - Arguments to find a ShopSubcategory
     * @example
     * // Get one ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopSubcategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopSubcategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopSubcategoryFindUniqueOrThrowArgs} args - Arguments to find a ShopSubcategory
     * @example
     * // Get one ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopSubcategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopSubcategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryFindFirstArgs} args - Arguments to find a ShopSubcategory
     * @example
     * // Get one ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopSubcategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopSubcategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryFindFirstOrThrowArgs} args - Arguments to find a ShopSubcategory
     * @example
     * // Get one ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopSubcategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopSubcategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopSubcategories
     * const shopSubcategories = await prisma.shopSubcategory.findMany()
     *
     * // Get first 10 ShopSubcategories
     * const shopSubcategories = await prisma.shopSubcategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopSubcategoryWithIdOnly = await prisma.shopSubcategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopSubcategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopSubcategory.
     * @param {ShopSubcategoryCreateArgs} args - Arguments to create a ShopSubcategory.
     * @example
     * // Create one ShopSubcategory
     * const ShopSubcategory = await prisma.shopSubcategory.create({
     *   data: {
     *     // ... data to create a ShopSubcategory
     *   }
     * })
     *
     */
    create<T extends ShopSubcategoryCreateArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopSubcategories.
     * @param {ShopSubcategoryCreateManyArgs} args - Arguments to create many ShopSubcategories.
     * @example
     * // Create many ShopSubcategories
     * const shopSubcategory = await prisma.shopSubcategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopSubcategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopSubcategories and returns the data saved in the database.
     * @param {ShopSubcategoryCreateManyAndReturnArgs} args - Arguments to create many ShopSubcategories.
     * @example
     * // Create many ShopSubcategories
     * const shopSubcategory = await prisma.shopSubcategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopSubcategories and only return the `id`
     * const shopSubcategoryWithIdOnly = await prisma.shopSubcategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopSubcategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopSubcategory.
     * @param {ShopSubcategoryDeleteArgs} args - Arguments to delete one ShopSubcategory.
     * @example
     * // Delete one ShopSubcategory
     * const ShopSubcategory = await prisma.shopSubcategory.delete({
     *   where: {
     *     // ... filter to delete one ShopSubcategory
     *   }
     * })
     *
     */
    delete<T extends ShopSubcategoryDeleteArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopSubcategory.
     * @param {ShopSubcategoryUpdateArgs} args - Arguments to update one ShopSubcategory.
     * @example
     * // Update one ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopSubcategoryUpdateArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopSubcategories.
     * @param {ShopSubcategoryDeleteManyArgs} args - Arguments to filter ShopSubcategories to delete.
     * @example
     * // Delete a few ShopSubcategories
     * const { count } = await prisma.shopSubcategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopSubcategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopSubcategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopSubcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopSubcategories
     * const shopSubcategory = await prisma.shopSubcategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopSubcategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopSubcategories and returns the data updated in the database.
     * @param {ShopSubcategoryUpdateManyAndReturnArgs} args - Arguments to update many ShopSubcategories.
     * @example
     * // Update many ShopSubcategories
     * const shopSubcategory = await prisma.shopSubcategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopSubcategories and only return the `id`
     * const shopSubcategoryWithIdOnly = await prisma.shopSubcategory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopSubcategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopSubcategory.
     * @param {ShopSubcategoryUpsertArgs} args - Arguments to update or create a ShopSubcategory.
     * @example
     * // Update or create a ShopSubcategory
     * const shopSubcategory = await prisma.shopSubcategory.upsert({
     *   create: {
     *     // ... data to create a ShopSubcategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopSubcategory we want to update
     *   }
     * })
     */
    upsert<T extends ShopSubcategoryUpsertArgs>(args: Prisma.SelectSubset<T, ShopSubcategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopSubcategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopSubcategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopSubcategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryCountArgs} args - Arguments to filter ShopSubcategories to count.
     * @example
     * // Count the number of ShopSubcategories
     * const count = await prisma.shopSubcategory.count({
     *   where: {
     *     // ... the filter for the ShopSubcategories we want to count
     *   }
     * })
    **/
    count<T extends ShopSubcategoryCountArgs>(args?: Prisma.Subset<T, ShopSubcategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopSubcategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopSubcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopSubcategoryAggregateArgs>(args: Prisma.Subset<T, ShopSubcategoryAggregateArgs>): Prisma.PrismaPromise<GetShopSubcategoryAggregateType<T>>;
    /**
     * Group by ShopSubcategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSubcategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopSubcategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopSubcategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopSubcategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopSubcategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopSubcategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopSubcategory model
     */
    readonly fields: ShopSubcategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopSubcategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopSubcategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.ShopCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopCategoryClient<runtime.Types.Result.GetResult<Prisma.$ShopCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopSubcategory model
 */
export interface ShopSubcategoryFieldRefs {
    readonly id: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly categoryId: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly name: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly slug: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly description: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"ShopSubcategory", 'String'>;
    readonly isActive: Prisma.FieldRef<"ShopSubcategory", 'Boolean'>;
    readonly sortOrder: Prisma.FieldRef<"ShopSubcategory", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ShopSubcategory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShopSubcategory", 'DateTime'>;
}
/**
 * ShopSubcategory findUnique
 */
export type ShopSubcategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSubcategory to fetch.
     */
    where: Prisma.ShopSubcategoryWhereUniqueInput;
};
/**
 * ShopSubcategory findUniqueOrThrow
 */
export type ShopSubcategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSubcategory to fetch.
     */
    where: Prisma.ShopSubcategoryWhereUniqueInput;
};
/**
 * ShopSubcategory findFirst
 */
export type ShopSubcategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSubcategory to fetch.
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSubcategories to fetch.
     */
    orderBy?: Prisma.ShopSubcategoryOrderByWithRelationInput | Prisma.ShopSubcategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopSubcategories.
     */
    cursor?: Prisma.ShopSubcategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSubcategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSubcategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSubcategories.
     */
    distinct?: Prisma.ShopSubcategoryScalarFieldEnum | Prisma.ShopSubcategoryScalarFieldEnum[];
};
/**
 * ShopSubcategory findFirstOrThrow
 */
export type ShopSubcategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSubcategory to fetch.
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSubcategories to fetch.
     */
    orderBy?: Prisma.ShopSubcategoryOrderByWithRelationInput | Prisma.ShopSubcategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopSubcategories.
     */
    cursor?: Prisma.ShopSubcategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSubcategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSubcategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSubcategories.
     */
    distinct?: Prisma.ShopSubcategoryScalarFieldEnum | Prisma.ShopSubcategoryScalarFieldEnum[];
};
/**
 * ShopSubcategory findMany
 */
export type ShopSubcategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSubcategories to fetch.
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSubcategories to fetch.
     */
    orderBy?: Prisma.ShopSubcategoryOrderByWithRelationInput | Prisma.ShopSubcategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopSubcategories.
     */
    cursor?: Prisma.ShopSubcategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSubcategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSubcategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSubcategories.
     */
    distinct?: Prisma.ShopSubcategoryScalarFieldEnum | Prisma.ShopSubcategoryScalarFieldEnum[];
};
/**
 * ShopSubcategory create
 */
export type ShopSubcategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopSubcategory.
     */
    data: Prisma.XOR<Prisma.ShopSubcategoryCreateInput, Prisma.ShopSubcategoryUncheckedCreateInput>;
};
/**
 * ShopSubcategory createMany
 */
export type ShopSubcategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopSubcategories.
     */
    data: Prisma.ShopSubcategoryCreateManyInput | Prisma.ShopSubcategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopSubcategory createManyAndReturn
 */
export type ShopSubcategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopSubcategories.
     */
    data: Prisma.ShopSubcategoryCreateManyInput | Prisma.ShopSubcategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopSubcategory update
 */
export type ShopSubcategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopSubcategory.
     */
    data: Prisma.XOR<Prisma.ShopSubcategoryUpdateInput, Prisma.ShopSubcategoryUncheckedUpdateInput>;
    /**
     * Choose, which ShopSubcategory to update.
     */
    where: Prisma.ShopSubcategoryWhereUniqueInput;
};
/**
 * ShopSubcategory updateMany
 */
export type ShopSubcategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopSubcategories.
     */
    data: Prisma.XOR<Prisma.ShopSubcategoryUpdateManyMutationInput, Prisma.ShopSubcategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ShopSubcategories to update
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * Limit how many ShopSubcategories to update.
     */
    limit?: number;
};
/**
 * ShopSubcategory updateManyAndReturn
 */
export type ShopSubcategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * The data used to update ShopSubcategories.
     */
    data: Prisma.XOR<Prisma.ShopSubcategoryUpdateManyMutationInput, Prisma.ShopSubcategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ShopSubcategories to update
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * Limit how many ShopSubcategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopSubcategory upsert
 */
export type ShopSubcategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopSubcategory to update in case it exists.
     */
    where: Prisma.ShopSubcategoryWhereUniqueInput;
    /**
     * In case the ShopSubcategory found by the `where` argument doesn't exist, create a new ShopSubcategory with this data.
     */
    create: Prisma.XOR<Prisma.ShopSubcategoryCreateInput, Prisma.ShopSubcategoryUncheckedCreateInput>;
    /**
     * In case the ShopSubcategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopSubcategoryUpdateInput, Prisma.ShopSubcategoryUncheckedUpdateInput>;
};
/**
 * ShopSubcategory delete
 */
export type ShopSubcategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
    /**
     * Filter which ShopSubcategory to delete.
     */
    where: Prisma.ShopSubcategoryWhereUniqueInput;
};
/**
 * ShopSubcategory deleteMany
 */
export type ShopSubcategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSubcategories to delete
     */
    where?: Prisma.ShopSubcategoryWhereInput;
    /**
     * Limit how many ShopSubcategories to delete.
     */
    limit?: number;
};
/**
 * ShopSubcategory without action
 */
export type ShopSubcategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSubcategory
     */
    select?: Prisma.ShopSubcategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSubcategory
     */
    omit?: Prisma.ShopSubcategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSubcategoryInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopSubcategory.d.ts.map