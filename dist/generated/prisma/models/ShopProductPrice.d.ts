import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopProductPrice
 *
 */
export type ShopProductPriceModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopProductPricePayload>;
export type AggregateShopProductPrice = {
    _count: ShopProductPriceCountAggregateOutputType | null;
    _avg: ShopProductPriceAvgAggregateOutputType | null;
    _sum: ShopProductPriceSumAggregateOutputType | null;
    _min: ShopProductPriceMinAggregateOutputType | null;
    _max: ShopProductPriceMaxAggregateOutputType | null;
};
export type ShopProductPriceAvgAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type ShopProductPriceSumAggregateOutputType = {
    price: runtime.Decimal | null;
};
export type ShopProductPriceMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    currency: string | null;
    validFrom: Date | null;
    validTo: Date | null;
    changedByUserId: string | null;
};
export type ShopProductPriceMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    price: runtime.Decimal | null;
    currency: string | null;
    validFrom: Date | null;
    validTo: Date | null;
    changedByUserId: string | null;
};
export type ShopProductPriceCountAggregateOutputType = {
    id: number;
    productId: number;
    price: number;
    currency: number;
    validFrom: number;
    validTo: number;
    changedByUserId: number;
    _all: number;
};
export type ShopProductPriceAvgAggregateInputType = {
    price?: true;
};
export type ShopProductPriceSumAggregateInputType = {
    price?: true;
};
export type ShopProductPriceMinAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    currency?: true;
    validFrom?: true;
    validTo?: true;
    changedByUserId?: true;
};
export type ShopProductPriceMaxAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    currency?: true;
    validFrom?: true;
    validTo?: true;
    changedByUserId?: true;
};
export type ShopProductPriceCountAggregateInputType = {
    id?: true;
    productId?: true;
    price?: true;
    currency?: true;
    validFrom?: true;
    validTo?: true;
    changedByUserId?: true;
    _all?: true;
};
export type ShopProductPriceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProductPrice to aggregate.
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductPrices to fetch.
     */
    orderBy?: Prisma.ShopProductPriceOrderByWithRelationInput | Prisma.ShopProductPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopProductPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopProductPrices
    **/
    _count?: true | ShopProductPriceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopProductPriceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopProductPriceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopProductPriceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopProductPriceMaxAggregateInputType;
};
export type GetShopProductPriceAggregateType<T extends ShopProductPriceAggregateArgs> = {
    [P in keyof T & keyof AggregateShopProductPrice]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopProductPrice[P]> : Prisma.GetScalarType<T[P], AggregateShopProductPrice[P]>;
};
export type ShopProductPriceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductPriceWhereInput;
    orderBy?: Prisma.ShopProductPriceOrderByWithAggregationInput | Prisma.ShopProductPriceOrderByWithAggregationInput[];
    by: Prisma.ShopProductPriceScalarFieldEnum[] | Prisma.ShopProductPriceScalarFieldEnum;
    having?: Prisma.ShopProductPriceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopProductPriceCountAggregateInputType | true;
    _avg?: ShopProductPriceAvgAggregateInputType;
    _sum?: ShopProductPriceSumAggregateInputType;
    _min?: ShopProductPriceMinAggregateInputType;
    _max?: ShopProductPriceMaxAggregateInputType;
};
export type ShopProductPriceGroupByOutputType = {
    id: string;
    productId: string;
    price: runtime.Decimal;
    currency: string;
    validFrom: Date;
    validTo: Date | null;
    changedByUserId: string | null;
    _count: ShopProductPriceCountAggregateOutputType | null;
    _avg: ShopProductPriceAvgAggregateOutputType | null;
    _sum: ShopProductPriceSumAggregateOutputType | null;
    _min: ShopProductPriceMinAggregateOutputType | null;
    _max: ShopProductPriceMaxAggregateOutputType | null;
};
export type GetShopProductPriceGroupByPayload<T extends ShopProductPriceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopProductPriceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopProductPriceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopProductPriceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopProductPriceGroupByOutputType[P]>;
}>>;
export type ShopProductPriceWhereInput = {
    AND?: Prisma.ShopProductPriceWhereInput | Prisma.ShopProductPriceWhereInput[];
    OR?: Prisma.ShopProductPriceWhereInput[];
    NOT?: Prisma.ShopProductPriceWhereInput | Prisma.ShopProductPriceWhereInput[];
    id?: Prisma.StringFilter<"ShopProductPrice"> | string;
    productId?: Prisma.StringFilter<"ShopProductPrice"> | string;
    price?: Prisma.DecimalFilter<"ShopProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"ShopProductPrice"> | string;
    validFrom?: Prisma.DateTimeFilter<"ShopProductPrice"> | Date | string;
    validTo?: Prisma.DateTimeNullableFilter<"ShopProductPrice"> | Date | string | null;
    changedByUserId?: Prisma.StringNullableFilter<"ShopProductPrice"> | string | null;
    product?: Prisma.XOR<Prisma.ShopProductScalarRelationFilter, Prisma.ShopProductWhereInput>;
    changedByUser?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
};
export type ShopProductPriceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    product?: Prisma.ShopProductOrderByWithRelationInput;
    changedByUser?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopProductPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopProductPriceWhereInput | Prisma.ShopProductPriceWhereInput[];
    OR?: Prisma.ShopProductPriceWhereInput[];
    NOT?: Prisma.ShopProductPriceWhereInput | Prisma.ShopProductPriceWhereInput[];
    productId?: Prisma.StringFilter<"ShopProductPrice"> | string;
    price?: Prisma.DecimalFilter<"ShopProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"ShopProductPrice"> | string;
    validFrom?: Prisma.DateTimeFilter<"ShopProductPrice"> | Date | string;
    validTo?: Prisma.DateTimeNullableFilter<"ShopProductPrice"> | Date | string | null;
    changedByUserId?: Prisma.StringNullableFilter<"ShopProductPrice"> | string | null;
    product?: Prisma.XOR<Prisma.ShopProductScalarRelationFilter, Prisma.ShopProductWhereInput>;
    changedByUser?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
}, "id">;
export type ShopProductPriceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    changedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ShopProductPriceCountOrderByAggregateInput;
    _avg?: Prisma.ShopProductPriceAvgOrderByAggregateInput;
    _max?: Prisma.ShopProductPriceMaxOrderByAggregateInput;
    _min?: Prisma.ShopProductPriceMinOrderByAggregateInput;
    _sum?: Prisma.ShopProductPriceSumOrderByAggregateInput;
};
export type ShopProductPriceScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopProductPriceScalarWhereWithAggregatesInput | Prisma.ShopProductPriceScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopProductPriceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopProductPriceScalarWhereWithAggregatesInput | Prisma.ShopProductPriceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopProductPrice"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ShopProductPrice"> | string;
    price?: Prisma.DecimalWithAggregatesFilter<"ShopProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"ShopProductPrice"> | string;
    validFrom?: Prisma.DateTimeWithAggregatesFilter<"ShopProductPrice"> | Date | string;
    validTo?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopProductPrice"> | Date | string | null;
    changedByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopProductPrice"> | string | null;
};
export type ShopProductPriceCreateInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    product: Prisma.ShopProductCreateNestedOneWithoutPricesInput;
    changedByUser?: Prisma.ShopUserCreateNestedOneWithoutPriceChangesInput;
};
export type ShopProductPriceUncheckedCreateInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    changedByUserId?: string | null;
};
export type ShopProductPriceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product?: Prisma.ShopProductUpdateOneRequiredWithoutPricesNestedInput;
    changedByUser?: Prisma.ShopUserUpdateOneWithoutPriceChangesNestedInput;
};
export type ShopProductPriceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShopProductPriceCreateManyInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    changedByUserId?: string | null;
};
export type ShopProductPriceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopProductPriceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShopProductPriceListRelationFilter = {
    every?: Prisma.ShopProductPriceWhereInput;
    some?: Prisma.ShopProductPriceWhereInput;
    none?: Prisma.ShopProductPriceWhereInput;
};
export type ShopProductPriceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopProductPriceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    changedByUserId?: Prisma.SortOrder;
};
export type ShopProductPriceAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type ShopProductPriceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    changedByUserId?: Prisma.SortOrder;
};
export type ShopProductPriceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    validFrom?: Prisma.SortOrder;
    validTo?: Prisma.SortOrder;
    changedByUserId?: Prisma.SortOrder;
};
export type ShopProductPriceSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type ShopProductPriceCreateNestedManyWithoutChangedByUserInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput> | Prisma.ShopProductPriceCreateWithoutChangedByUserInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput | Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput[];
    createMany?: Prisma.ShopProductPriceCreateManyChangedByUserInputEnvelope;
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
};
export type ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput> | Prisma.ShopProductPriceCreateWithoutChangedByUserInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput | Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput[];
    createMany?: Prisma.ShopProductPriceCreateManyChangedByUserInputEnvelope;
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
};
export type ShopProductPriceUpdateManyWithoutChangedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput> | Prisma.ShopProductPriceCreateWithoutChangedByUserInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput | Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput[];
    upsert?: Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutChangedByUserInput | Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutChangedByUserInput[];
    createMany?: Prisma.ShopProductPriceCreateManyChangedByUserInputEnvelope;
    set?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    disconnect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    delete?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    update?: Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutChangedByUserInput | Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutChangedByUserInput[];
    updateMany?: Prisma.ShopProductPriceUpdateManyWithWhereWithoutChangedByUserInput | Prisma.ShopProductPriceUpdateManyWithWhereWithoutChangedByUserInput[];
    deleteMany?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
};
export type ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput> | Prisma.ShopProductPriceCreateWithoutChangedByUserInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput | Prisma.ShopProductPriceCreateOrConnectWithoutChangedByUserInput[];
    upsert?: Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutChangedByUserInput | Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutChangedByUserInput[];
    createMany?: Prisma.ShopProductPriceCreateManyChangedByUserInputEnvelope;
    set?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    disconnect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    delete?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    update?: Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutChangedByUserInput | Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutChangedByUserInput[];
    updateMany?: Prisma.ShopProductPriceUpdateManyWithWhereWithoutChangedByUserInput | Prisma.ShopProductPriceUpdateManyWithWhereWithoutChangedByUserInput[];
    deleteMany?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
};
export type ShopProductPriceCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput> | Prisma.ShopProductPriceCreateWithoutProductInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutProductInput | Prisma.ShopProductPriceCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopProductPriceCreateManyProductInputEnvelope;
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
};
export type ShopProductPriceUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput> | Prisma.ShopProductPriceCreateWithoutProductInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutProductInput | Prisma.ShopProductPriceCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopProductPriceCreateManyProductInputEnvelope;
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
};
export type ShopProductPriceUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput> | Prisma.ShopProductPriceCreateWithoutProductInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutProductInput | Prisma.ShopProductPriceCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopProductPriceCreateManyProductInputEnvelope;
    set?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    disconnect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    delete?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    update?: Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopProductPriceUpdateManyWithWhereWithoutProductInput | Prisma.ShopProductPriceUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
};
export type ShopProductPriceUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput> | Prisma.ShopProductPriceCreateWithoutProductInput[] | Prisma.ShopProductPriceUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductPriceCreateOrConnectWithoutProductInput | Prisma.ShopProductPriceCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopProductPriceUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopProductPriceCreateManyProductInputEnvelope;
    set?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    disconnect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    delete?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    connect?: Prisma.ShopProductPriceWhereUniqueInput | Prisma.ShopProductPriceWhereUniqueInput[];
    update?: Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopProductPriceUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopProductPriceUpdateManyWithWhereWithoutProductInput | Prisma.ShopProductPriceUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ShopProductPriceCreateWithoutChangedByUserInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    product: Prisma.ShopProductCreateNestedOneWithoutPricesInput;
};
export type ShopProductPriceUncheckedCreateWithoutChangedByUserInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
};
export type ShopProductPriceCreateOrConnectWithoutChangedByUserInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput>;
};
export type ShopProductPriceCreateManyChangedByUserInputEnvelope = {
    data: Prisma.ShopProductPriceCreateManyChangedByUserInput | Prisma.ShopProductPriceCreateManyChangedByUserInput[];
    skipDuplicates?: boolean;
};
export type ShopProductPriceUpsertWithWhereUniqueWithoutChangedByUserInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductPriceUpdateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedUpdateWithoutChangedByUserInput>;
    create: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedCreateWithoutChangedByUserInput>;
};
export type ShopProductPriceUpdateWithWhereUniqueWithoutChangedByUserInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateWithoutChangedByUserInput, Prisma.ShopProductPriceUncheckedUpdateWithoutChangedByUserInput>;
};
export type ShopProductPriceUpdateManyWithWhereWithoutChangedByUserInput = {
    where: Prisma.ShopProductPriceScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateManyMutationInput, Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserInput>;
};
export type ShopProductPriceScalarWhereInput = {
    AND?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
    OR?: Prisma.ShopProductPriceScalarWhereInput[];
    NOT?: Prisma.ShopProductPriceScalarWhereInput | Prisma.ShopProductPriceScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopProductPrice"> | string;
    productId?: Prisma.StringFilter<"ShopProductPrice"> | string;
    price?: Prisma.DecimalFilter<"ShopProductPrice"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"ShopProductPrice"> | string;
    validFrom?: Prisma.DateTimeFilter<"ShopProductPrice"> | Date | string;
    validTo?: Prisma.DateTimeNullableFilter<"ShopProductPrice"> | Date | string | null;
    changedByUserId?: Prisma.StringNullableFilter<"ShopProductPrice"> | string | null;
};
export type ShopProductPriceCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    changedByUser?: Prisma.ShopUserCreateNestedOneWithoutPriceChangesInput;
};
export type ShopProductPriceUncheckedCreateWithoutProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    changedByUserId?: string | null;
};
export type ShopProductPriceCreateOrConnectWithoutProductInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput>;
};
export type ShopProductPriceCreateManyProductInputEnvelope = {
    data: Prisma.ShopProductPriceCreateManyProductInput | Prisma.ShopProductPriceCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ShopProductPriceUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductPriceUpdateWithoutProductInput, Prisma.ShopProductPriceUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ShopProductPriceCreateWithoutProductInput, Prisma.ShopProductPriceUncheckedCreateWithoutProductInput>;
};
export type ShopProductPriceUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopProductPriceWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateWithoutProductInput, Prisma.ShopProductPriceUncheckedUpdateWithoutProductInput>;
};
export type ShopProductPriceUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ShopProductPriceScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateManyMutationInput, Prisma.ShopProductPriceUncheckedUpdateManyWithoutProductInput>;
};
export type ShopProductPriceCreateManyChangedByUserInput = {
    id?: string;
    productId: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
};
export type ShopProductPriceUpdateWithoutChangedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    product?: Prisma.ShopProductUpdateOneRequiredWithoutPricesNestedInput;
};
export type ShopProductPriceUncheckedUpdateWithoutChangedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopProductPriceUncheckedUpdateManyWithoutChangedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopProductPriceCreateManyProductInput = {
    id?: string;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    validFrom?: Date | string;
    validTo?: Date | string | null;
    changedByUserId?: string | null;
};
export type ShopProductPriceUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changedByUser?: Prisma.ShopUserUpdateOneWithoutPriceChangesNestedInput;
};
export type ShopProductPriceUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShopProductPriceUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    validFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    changedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ShopProductPriceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    currency?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    changedByUserId?: boolean;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductPrice"]>;
export type ShopProductPriceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    currency?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    changedByUserId?: boolean;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductPrice"]>;
export type ShopProductPriceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    currency?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    changedByUserId?: boolean;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductPrice"]>;
export type ShopProductPriceSelectScalar = {
    id?: boolean;
    productId?: boolean;
    price?: boolean;
    currency?: boolean;
    validFrom?: boolean;
    validTo?: boolean;
    changedByUserId?: boolean;
};
export type ShopProductPriceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "price" | "currency" | "validFrom" | "validTo" | "changedByUserId", ExtArgs["result"]["shopProductPrice"]>;
export type ShopProductPriceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
};
export type ShopProductPriceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
};
export type ShopProductPriceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
    changedByUser?: boolean | Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>;
};
export type $ShopProductPricePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopProductPrice";
    objects: {
        product: Prisma.$ShopProductPayload<ExtArgs>;
        changedByUser: Prisma.$ShopUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        price: runtime.Decimal;
        currency: string;
        validFrom: Date;
        validTo: Date | null;
        changedByUserId: string | null;
    }, ExtArgs["result"]["shopProductPrice"]>;
    composites: {};
};
export type ShopProductPriceGetPayload<S extends boolean | null | undefined | ShopProductPriceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload, S>;
export type ShopProductPriceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopProductPriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopProductPriceCountAggregateInputType | true;
};
export interface ShopProductPriceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopProductPrice'];
        meta: {
            name: 'ShopProductPrice';
        };
    };
    /**
     * Find zero or one ShopProductPrice that matches the filter.
     * @param {ShopProductPriceFindUniqueArgs} args - Arguments to find a ShopProductPrice
     * @example
     * // Get one ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopProductPriceFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopProductPriceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopProductPrice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopProductPriceFindUniqueOrThrowArgs} args - Arguments to find a ShopProductPrice
     * @example
     * // Get one ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopProductPriceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopProductPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProductPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceFindFirstArgs} args - Arguments to find a ShopProductPrice
     * @example
     * // Get one ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopProductPriceFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProductPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceFindFirstOrThrowArgs} args - Arguments to find a ShopProductPrice
     * @example
     * // Get one ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopProductPriceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopProductPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopProductPrices
     * const shopProductPrices = await prisma.shopProductPrice.findMany()
     *
     * // Get first 10 ShopProductPrices
     * const shopProductPrices = await prisma.shopProductPrice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopProductPriceWithIdOnly = await prisma.shopProductPrice.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopProductPriceFindManyArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopProductPrice.
     * @param {ShopProductPriceCreateArgs} args - Arguments to create a ShopProductPrice.
     * @example
     * // Create one ShopProductPrice
     * const ShopProductPrice = await prisma.shopProductPrice.create({
     *   data: {
     *     // ... data to create a ShopProductPrice
     *   }
     * })
     *
     */
    create<T extends ShopProductPriceCreateArgs>(args: Prisma.SelectSubset<T, ShopProductPriceCreateArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopProductPrices.
     * @param {ShopProductPriceCreateManyArgs} args - Arguments to create many ShopProductPrices.
     * @example
     * // Create many ShopProductPrices
     * const shopProductPrice = await prisma.shopProductPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopProductPriceCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopProductPrices and returns the data saved in the database.
     * @param {ShopProductPriceCreateManyAndReturnArgs} args - Arguments to create many ShopProductPrices.
     * @example
     * // Create many ShopProductPrices
     * const shopProductPrice = await prisma.shopProductPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopProductPrices and only return the `id`
     * const shopProductPriceWithIdOnly = await prisma.shopProductPrice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopProductPriceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopProductPrice.
     * @param {ShopProductPriceDeleteArgs} args - Arguments to delete one ShopProductPrice.
     * @example
     * // Delete one ShopProductPrice
     * const ShopProductPrice = await prisma.shopProductPrice.delete({
     *   where: {
     *     // ... filter to delete one ShopProductPrice
     *   }
     * })
     *
     */
    delete<T extends ShopProductPriceDeleteArgs>(args: Prisma.SelectSubset<T, ShopProductPriceDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopProductPrice.
     * @param {ShopProductPriceUpdateArgs} args - Arguments to update one ShopProductPrice.
     * @example
     * // Update one ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopProductPriceUpdateArgs>(args: Prisma.SelectSubset<T, ShopProductPriceUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopProductPrices.
     * @param {ShopProductPriceDeleteManyArgs} args - Arguments to filter ShopProductPrices to delete.
     * @example
     * // Delete a few ShopProductPrices
     * const { count } = await prisma.shopProductPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopProductPriceDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopProductPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopProductPrices
     * const shopProductPrice = await prisma.shopProductPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopProductPriceUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopProductPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProductPrices and returns the data updated in the database.
     * @param {ShopProductPriceUpdateManyAndReturnArgs} args - Arguments to update many ShopProductPrices.
     * @example
     * // Update many ShopProductPrices
     * const shopProductPrice = await prisma.shopProductPrice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopProductPrices and only return the `id`
     * const shopProductPriceWithIdOnly = await prisma.shopProductPrice.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopProductPriceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopProductPriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopProductPrice.
     * @param {ShopProductPriceUpsertArgs} args - Arguments to update or create a ShopProductPrice.
     * @example
     * // Update or create a ShopProductPrice
     * const shopProductPrice = await prisma.shopProductPrice.upsert({
     *   create: {
     *     // ... data to create a ShopProductPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopProductPrice we want to update
     *   }
     * })
     */
    upsert<T extends ShopProductPriceUpsertArgs>(args: Prisma.SelectSubset<T, ShopProductPriceUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopProductPriceClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopProductPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceCountArgs} args - Arguments to filter ShopProductPrices to count.
     * @example
     * // Count the number of ShopProductPrices
     * const count = await prisma.shopProductPrice.count({
     *   where: {
     *     // ... the filter for the ShopProductPrices we want to count
     *   }
     * })
    **/
    count<T extends ShopProductPriceCountArgs>(args?: Prisma.Subset<T, ShopProductPriceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopProductPriceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopProductPriceAggregateArgs>(args: Prisma.Subset<T, ShopProductPriceAggregateArgs>): Prisma.PrismaPromise<GetShopProductPriceAggregateType<T>>;
    /**
     * Group by ShopProductPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductPriceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopProductPriceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopProductPriceGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopProductPriceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopProductPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopProductPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopProductPrice model
     */
    readonly fields: ShopProductPriceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopProductPrice.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopProductPriceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ShopProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    changedByUser<T extends Prisma.ShopProductPrice$changedByUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProductPrice$changedByUserArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopProductPrice model
 */
export interface ShopProductPriceFieldRefs {
    readonly id: Prisma.FieldRef<"ShopProductPrice", 'String'>;
    readonly productId: Prisma.FieldRef<"ShopProductPrice", 'String'>;
    readonly price: Prisma.FieldRef<"ShopProductPrice", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"ShopProductPrice", 'String'>;
    readonly validFrom: Prisma.FieldRef<"ShopProductPrice", 'DateTime'>;
    readonly validTo: Prisma.FieldRef<"ShopProductPrice", 'DateTime'>;
    readonly changedByUserId: Prisma.FieldRef<"ShopProductPrice", 'String'>;
}
/**
 * ShopProductPrice findUnique
 */
export type ShopProductPriceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopProductPrice to fetch.
     */
    where: Prisma.ShopProductPriceWhereUniqueInput;
};
/**
 * ShopProductPrice findUniqueOrThrow
 */
export type ShopProductPriceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopProductPrice to fetch.
     */
    where: Prisma.ShopProductPriceWhereUniqueInput;
};
/**
 * ShopProductPrice findFirst
 */
export type ShopProductPriceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopProductPrice to fetch.
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductPrices to fetch.
     */
    orderBy?: Prisma.ShopProductPriceOrderByWithRelationInput | Prisma.ShopProductPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProductPrices.
     */
    cursor?: Prisma.ShopProductPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductPrices.
     */
    distinct?: Prisma.ShopProductPriceScalarFieldEnum | Prisma.ShopProductPriceScalarFieldEnum[];
};
/**
 * ShopProductPrice findFirstOrThrow
 */
export type ShopProductPriceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopProductPrice to fetch.
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductPrices to fetch.
     */
    orderBy?: Prisma.ShopProductPriceOrderByWithRelationInput | Prisma.ShopProductPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProductPrices.
     */
    cursor?: Prisma.ShopProductPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductPrices.
     */
    distinct?: Prisma.ShopProductPriceScalarFieldEnum | Prisma.ShopProductPriceScalarFieldEnum[];
};
/**
 * ShopProductPrice findMany
 */
export type ShopProductPriceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopProductPrices to fetch.
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductPrices to fetch.
     */
    orderBy?: Prisma.ShopProductPriceOrderByWithRelationInput | Prisma.ShopProductPriceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopProductPrices.
     */
    cursor?: Prisma.ShopProductPriceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductPrices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductPrices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductPrices.
     */
    distinct?: Prisma.ShopProductPriceScalarFieldEnum | Prisma.ShopProductPriceScalarFieldEnum[];
};
/**
 * ShopProductPrice create
 */
export type ShopProductPriceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShopProductPrice.
     */
    data: Prisma.XOR<Prisma.ShopProductPriceCreateInput, Prisma.ShopProductPriceUncheckedCreateInput>;
};
/**
 * ShopProductPrice createMany
 */
export type ShopProductPriceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopProductPrices.
     */
    data: Prisma.ShopProductPriceCreateManyInput | Prisma.ShopProductPriceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopProductPrice createManyAndReturn
 */
export type ShopProductPriceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductPrice
     */
    select?: Prisma.ShopProductPriceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductPrice
     */
    omit?: Prisma.ShopProductPriceOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopProductPrices.
     */
    data: Prisma.ShopProductPriceCreateManyInput | Prisma.ShopProductPriceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductPriceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProductPrice update
 */
export type ShopProductPriceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShopProductPrice.
     */
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateInput, Prisma.ShopProductPriceUncheckedUpdateInput>;
    /**
     * Choose, which ShopProductPrice to update.
     */
    where: Prisma.ShopProductPriceWhereUniqueInput;
};
/**
 * ShopProductPrice updateMany
 */
export type ShopProductPriceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopProductPrices.
     */
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateManyMutationInput, Prisma.ShopProductPriceUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProductPrices to update
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * Limit how many ShopProductPrices to update.
     */
    limit?: number;
};
/**
 * ShopProductPrice updateManyAndReturn
 */
export type ShopProductPriceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductPrice
     */
    select?: Prisma.ShopProductPriceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductPrice
     */
    omit?: Prisma.ShopProductPriceOmit<ExtArgs> | null;
    /**
     * The data used to update ShopProductPrices.
     */
    data: Prisma.XOR<Prisma.ShopProductPriceUpdateManyMutationInput, Prisma.ShopProductPriceUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProductPrices to update
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * Limit how many ShopProductPrices to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductPriceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProductPrice upsert
 */
export type ShopProductPriceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShopProductPrice to update in case it exists.
     */
    where: Prisma.ShopProductPriceWhereUniqueInput;
    /**
     * In case the ShopProductPrice found by the `where` argument doesn't exist, create a new ShopProductPrice with this data.
     */
    create: Prisma.XOR<Prisma.ShopProductPriceCreateInput, Prisma.ShopProductPriceUncheckedCreateInput>;
    /**
     * In case the ShopProductPrice was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopProductPriceUpdateInput, Prisma.ShopProductPriceUncheckedUpdateInput>;
};
/**
 * ShopProductPrice delete
 */
export type ShopProductPriceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShopProductPrice to delete.
     */
    where: Prisma.ShopProductPriceWhereUniqueInput;
};
/**
 * ShopProductPrice deleteMany
 */
export type ShopProductPriceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProductPrices to delete
     */
    where?: Prisma.ShopProductPriceWhereInput;
    /**
     * Limit how many ShopProductPrices to delete.
     */
    limit?: number;
};
/**
 * ShopProductPrice.changedByUser
 */
export type ShopProductPrice$changedByUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: Prisma.ShopUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopUserInclude<ExtArgs> | null;
    where?: Prisma.ShopUserWhereInput;
};
/**
 * ShopProductPrice without action
 */
export type ShopProductPriceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ShopProductPrice.d.ts.map