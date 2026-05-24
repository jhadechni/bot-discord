import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopAppliedDiscount
 *
 */
export type ShopAppliedDiscountModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopAppliedDiscountPayload>;
export type AggregateShopAppliedDiscount = {
    _count: ShopAppliedDiscountCountAggregateOutputType | null;
    _avg: ShopAppliedDiscountAvgAggregateOutputType | null;
    _sum: ShopAppliedDiscountSumAggregateOutputType | null;
    _min: ShopAppliedDiscountMinAggregateOutputType | null;
    _max: ShopAppliedDiscountMaxAggregateOutputType | null;
};
export type ShopAppliedDiscountAvgAggregateOutputType = {
    discountValue: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
};
export type ShopAppliedDiscountSumAggregateOutputType = {
    discountValue: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
};
export type ShopAppliedDiscountMinAggregateOutputType = {
    id: string | null;
    discountPolicyId: string | null;
    orderId: string | null;
    orderItemId: string | null;
    scope: string | null;
    discountType: string | null;
    discountValue: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    reason: string | null;
    appliedByUserId: string | null;
    appliedAt: Date | null;
};
export type ShopAppliedDiscountMaxAggregateOutputType = {
    id: string | null;
    discountPolicyId: string | null;
    orderId: string | null;
    orderItemId: string | null;
    scope: string | null;
    discountType: string | null;
    discountValue: runtime.Decimal | null;
    discountAmount: runtime.Decimal | null;
    reason: string | null;
    appliedByUserId: string | null;
    appliedAt: Date | null;
};
export type ShopAppliedDiscountCountAggregateOutputType = {
    id: number;
    discountPolicyId: number;
    orderId: number;
    orderItemId: number;
    scope: number;
    discountType: number;
    discountValue: number;
    discountAmount: number;
    reason: number;
    appliedByUserId: number;
    appliedAt: number;
    _all: number;
};
export type ShopAppliedDiscountAvgAggregateInputType = {
    discountValue?: true;
    discountAmount?: true;
};
export type ShopAppliedDiscountSumAggregateInputType = {
    discountValue?: true;
    discountAmount?: true;
};
export type ShopAppliedDiscountMinAggregateInputType = {
    id?: true;
    discountPolicyId?: true;
    orderId?: true;
    orderItemId?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    discountAmount?: true;
    reason?: true;
    appliedByUserId?: true;
    appliedAt?: true;
};
export type ShopAppliedDiscountMaxAggregateInputType = {
    id?: true;
    discountPolicyId?: true;
    orderId?: true;
    orderItemId?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    discountAmount?: true;
    reason?: true;
    appliedByUserId?: true;
    appliedAt?: true;
};
export type ShopAppliedDiscountCountAggregateInputType = {
    id?: true;
    discountPolicyId?: true;
    orderId?: true;
    orderItemId?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    discountAmount?: true;
    reason?: true;
    appliedByUserId?: true;
    appliedAt?: true;
    _all?: true;
};
export type ShopAppliedDiscountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopAppliedDiscount to aggregate.
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopAppliedDiscounts to fetch.
     */
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithRelationInput | Prisma.ShopAppliedDiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopAppliedDiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopAppliedDiscounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopAppliedDiscounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopAppliedDiscounts
    **/
    _count?: true | ShopAppliedDiscountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopAppliedDiscountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopAppliedDiscountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopAppliedDiscountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopAppliedDiscountMaxAggregateInputType;
};
export type GetShopAppliedDiscountAggregateType<T extends ShopAppliedDiscountAggregateArgs> = {
    [P in keyof T & keyof AggregateShopAppliedDiscount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopAppliedDiscount[P]> : Prisma.GetScalarType<T[P], AggregateShopAppliedDiscount[P]>;
};
export type ShopAppliedDiscountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopAppliedDiscountWhereInput;
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithAggregationInput | Prisma.ShopAppliedDiscountOrderByWithAggregationInput[];
    by: Prisma.ShopAppliedDiscountScalarFieldEnum[] | Prisma.ShopAppliedDiscountScalarFieldEnum;
    having?: Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopAppliedDiscountCountAggregateInputType | true;
    _avg?: ShopAppliedDiscountAvgAggregateInputType;
    _sum?: ShopAppliedDiscountSumAggregateInputType;
    _min?: ShopAppliedDiscountMinAggregateInputType;
    _max?: ShopAppliedDiscountMaxAggregateInputType;
};
export type ShopAppliedDiscountGroupByOutputType = {
    id: string;
    discountPolicyId: string | null;
    orderId: string | null;
    orderItemId: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal;
    discountAmount: runtime.Decimal;
    reason: string | null;
    appliedByUserId: string | null;
    appliedAt: Date;
    _count: ShopAppliedDiscountCountAggregateOutputType | null;
    _avg: ShopAppliedDiscountAvgAggregateOutputType | null;
    _sum: ShopAppliedDiscountSumAggregateOutputType | null;
    _min: ShopAppliedDiscountMinAggregateOutputType | null;
    _max: ShopAppliedDiscountMaxAggregateOutputType | null;
};
export type GetShopAppliedDiscountGroupByPayload<T extends ShopAppliedDiscountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopAppliedDiscountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopAppliedDiscountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopAppliedDiscountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopAppliedDiscountGroupByOutputType[P]>;
}>>;
export type ShopAppliedDiscountWhereInput = {
    AND?: Prisma.ShopAppliedDiscountWhereInput | Prisma.ShopAppliedDiscountWhereInput[];
    OR?: Prisma.ShopAppliedDiscountWhereInput[];
    NOT?: Prisma.ShopAppliedDiscountWhereInput | Prisma.ShopAppliedDiscountWhereInput[];
    id?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountPolicyId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderItemId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    scope?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountType?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedByUserId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"ShopAppliedDiscount"> | Date | string;
    appliedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    discountPolicy?: Prisma.XOR<Prisma.ShopDiscountPolicyNullableScalarRelationFilter, Prisma.ShopDiscountPolicyWhereInput> | null;
    order?: Prisma.XOR<Prisma.ShopOrderNullableScalarRelationFilter, Prisma.ShopOrderWhereInput> | null;
    orderItem?: Prisma.XOR<Prisma.ShopOrderItemNullableScalarRelationFilter, Prisma.ShopOrderItemWhereInput> | null;
};
export type ShopAppliedDiscountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    discountPolicyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    appliedBy?: Prisma.ShopUserOrderByWithRelationInput;
    discountPolicy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput;
    order?: Prisma.ShopOrderOrderByWithRelationInput;
    orderItem?: Prisma.ShopOrderItemOrderByWithRelationInput;
};
export type ShopAppliedDiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopAppliedDiscountWhereInput | Prisma.ShopAppliedDiscountWhereInput[];
    OR?: Prisma.ShopAppliedDiscountWhereInput[];
    NOT?: Prisma.ShopAppliedDiscountWhereInput | Prisma.ShopAppliedDiscountWhereInput[];
    discountPolicyId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderItemId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    scope?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountType?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedByUserId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"ShopAppliedDiscount"> | Date | string;
    appliedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    discountPolicy?: Prisma.XOR<Prisma.ShopDiscountPolicyNullableScalarRelationFilter, Prisma.ShopDiscountPolicyWhereInput> | null;
    order?: Prisma.XOR<Prisma.ShopOrderNullableScalarRelationFilter, Prisma.ShopOrderWhereInput> | null;
    orderItem?: Prisma.XOR<Prisma.ShopOrderItemNullableScalarRelationFilter, Prisma.ShopOrderItemWhereInput> | null;
}, "id">;
export type ShopAppliedDiscountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    discountPolicyId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    orderItemId?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopAppliedDiscountCountOrderByAggregateInput;
    _avg?: Prisma.ShopAppliedDiscountAvgOrderByAggregateInput;
    _max?: Prisma.ShopAppliedDiscountMaxOrderByAggregateInput;
    _min?: Prisma.ShopAppliedDiscountMinOrderByAggregateInput;
    _sum?: Prisma.ShopAppliedDiscountSumOrderByAggregateInput;
};
export type ShopAppliedDiscountScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput | Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput | Prisma.ShopAppliedDiscountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopAppliedDiscount"> | string;
    discountPolicyId?: Prisma.StringNullableWithAggregatesFilter<"ShopAppliedDiscount"> | string | null;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"ShopAppliedDiscount"> | string | null;
    orderItemId?: Prisma.StringNullableWithAggregatesFilter<"ShopAppliedDiscount"> | string | null;
    scope?: Prisma.StringWithAggregatesFilter<"ShopAppliedDiscount"> | string;
    discountType?: Prisma.StringWithAggregatesFilter<"ShopAppliedDiscount"> | string;
    discountValue?: Prisma.DecimalWithAggregatesFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalWithAggregatesFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"ShopAppliedDiscount"> | string | null;
    appliedByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopAppliedDiscount"> | string | null;
    appliedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopAppliedDiscount"> | Date | string;
};
export type ShopAppliedDiscountCreateInput = {
    id?: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
    appliedBy?: Prisma.ShopUserCreateNestedOneWithoutAppliedDiscountsInput;
    discountPolicy?: Prisma.ShopDiscountPolicyCreateNestedOneWithoutAppliedDiscountsInput;
    order?: Prisma.ShopOrderCreateNestedOneWithoutAppliedDiscountsInput;
    orderItem?: Prisma.ShopOrderItemCreateNestedOneWithoutAppliedDiscountsInput;
};
export type ShopAppliedDiscountUncheckedCreateInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedBy?: Prisma.ShopUserUpdateOneWithoutAppliedDiscountsNestedInput;
    discountPolicy?: Prisma.ShopDiscountPolicyUpdateOneWithoutAppliedDiscountsNestedInput;
    order?: Prisma.ShopOrderUpdateOneWithoutAppliedDiscountsNestedInput;
    orderItem?: Prisma.ShopOrderItemUpdateOneWithoutAppliedDiscountsNestedInput;
};
export type ShopAppliedDiscountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountCreateManyInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountListRelationFilter = {
    every?: Prisma.ShopAppliedDiscountWhereInput;
    some?: Prisma.ShopAppliedDiscountWhereInput;
    none?: Prisma.ShopAppliedDiscountWhereInput;
};
export type ShopAppliedDiscountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopAppliedDiscountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discountPolicyId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    appliedByUserId?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ShopAppliedDiscountAvgOrderByAggregateInput = {
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
};
export type ShopAppliedDiscountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discountPolicyId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    appliedByUserId?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ShopAppliedDiscountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discountPolicyId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    orderItemId?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    appliedByUserId?: Prisma.SortOrder;
    appliedAt?: Prisma.SortOrder;
};
export type ShopAppliedDiscountSumOrderByAggregateInput = {
    discountValue?: Prisma.SortOrder;
    discountAmount?: Prisma.SortOrder;
};
export type ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput> | Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyAppliedByInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput> | Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyAppliedByInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput> | Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutAppliedByInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyAppliedByInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutAppliedByInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutAppliedByInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput> | Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutAppliedByInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyAppliedByInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutAppliedByInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutAppliedByInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutAppliedByInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderItemInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderItemInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderItemInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput> | Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderItemInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyOrderItemInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderItemInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderItemInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutOrderItemInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountCreateNestedManyWithoutDiscountPolicyInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput> | Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUncheckedCreateNestedManyWithoutDiscountPolicyInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput> | Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInputEnvelope;
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
};
export type ShopAppliedDiscountUpdateManyWithoutDiscountPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput> | Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutDiscountPolicyInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutDiscountPolicyInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutDiscountPolicyInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyNestedInput = {
    create?: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput> | Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput[] | Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput[];
    connectOrCreate?: Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput[];
    upsert?: Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpsertWithWhereUniqueWithoutDiscountPolicyInput[];
    createMany?: Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInputEnvelope;
    set?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    disconnect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    delete?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    connect?: Prisma.ShopAppliedDiscountWhereUniqueInput | Prisma.ShopAppliedDiscountWhereUniqueInput[];
    update?: Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpdateWithWhereUniqueWithoutDiscountPolicyInput[];
    updateMany?: Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutDiscountPolicyInput | Prisma.ShopAppliedDiscountUpdateManyWithWhereWithoutDiscountPolicyInput[];
    deleteMany?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
};
export type ShopAppliedDiscountCreateWithoutAppliedByInput = {
    id?: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
    discountPolicy?: Prisma.ShopDiscountPolicyCreateNestedOneWithoutAppliedDiscountsInput;
    order?: Prisma.ShopOrderCreateNestedOneWithoutAppliedDiscountsInput;
    orderItem?: Prisma.ShopOrderItemCreateNestedOneWithoutAppliedDiscountsInput;
};
export type ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountCreateOrConnectWithoutAppliedByInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput>;
};
export type ShopAppliedDiscountCreateManyAppliedByInputEnvelope = {
    data: Prisma.ShopAppliedDiscountCreateManyAppliedByInput | Prisma.ShopAppliedDiscountCreateManyAppliedByInput[];
    skipDuplicates?: boolean;
};
export type ShopAppliedDiscountUpsertWithWhereUniqueWithoutAppliedByInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutAppliedByInput>;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutAppliedByInput>;
};
export type ShopAppliedDiscountUpdateWithWhereUniqueWithoutAppliedByInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutAppliedByInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutAppliedByInput>;
};
export type ShopAppliedDiscountUpdateManyWithWhereWithoutAppliedByInput = {
    where: Prisma.ShopAppliedDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByInput>;
};
export type ShopAppliedDiscountScalarWhereInput = {
    AND?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
    OR?: Prisma.ShopAppliedDiscountScalarWhereInput[];
    NOT?: Prisma.ShopAppliedDiscountScalarWhereInput | Prisma.ShopAppliedDiscountScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountPolicyId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    orderItemId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    scope?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountType?: Prisma.StringFilter<"ShopAppliedDiscount"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFilter<"ShopAppliedDiscount"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedByUserId?: Prisma.StringNullableFilter<"ShopAppliedDiscount"> | string | null;
    appliedAt?: Prisma.DateTimeFilter<"ShopAppliedDiscount"> | Date | string;
};
export type ShopAppliedDiscountCreateWithoutOrderInput = {
    id?: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
    appliedBy?: Prisma.ShopUserCreateNestedOneWithoutAppliedDiscountsInput;
    discountPolicy?: Prisma.ShopDiscountPolicyCreateNestedOneWithoutAppliedDiscountsInput;
    orderItem?: Prisma.ShopOrderItemCreateNestedOneWithoutAppliedDiscountsInput;
};
export type ShopAppliedDiscountUncheckedCreateWithoutOrderInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountCreateOrConnectWithoutOrderInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput>;
};
export type ShopAppliedDiscountCreateManyOrderInputEnvelope = {
    data: Prisma.ShopAppliedDiscountCreateManyOrderInput | Prisma.ShopAppliedDiscountCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderInput>;
};
export type ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutOrderInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutOrderInput>;
};
export type ShopAppliedDiscountUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ShopAppliedDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderInput>;
};
export type ShopAppliedDiscountCreateWithoutOrderItemInput = {
    id?: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
    appliedBy?: Prisma.ShopUserCreateNestedOneWithoutAppliedDiscountsInput;
    discountPolicy?: Prisma.ShopDiscountPolicyCreateNestedOneWithoutAppliedDiscountsInput;
    order?: Prisma.ShopOrderCreateNestedOneWithoutAppliedDiscountsInput;
};
export type ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountCreateOrConnectWithoutOrderItemInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput>;
};
export type ShopAppliedDiscountCreateManyOrderItemInputEnvelope = {
    data: Prisma.ShopAppliedDiscountCreateManyOrderItemInput | Prisma.ShopAppliedDiscountCreateManyOrderItemInput[];
    skipDuplicates?: boolean;
};
export type ShopAppliedDiscountUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutOrderItemInput>;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutOrderItemInput>;
};
export type ShopAppliedDiscountUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutOrderItemInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutOrderItemInput>;
};
export type ShopAppliedDiscountUpdateManyWithWhereWithoutOrderItemInput = {
    where: Prisma.ShopAppliedDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderItemInput>;
};
export type ShopAppliedDiscountCreateWithoutDiscountPolicyInput = {
    id?: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
    appliedBy?: Prisma.ShopUserCreateNestedOneWithoutAppliedDiscountsInput;
    order?: Prisma.ShopOrderCreateNestedOneWithoutAppliedDiscountsInput;
    orderItem?: Prisma.ShopOrderItemCreateNestedOneWithoutAppliedDiscountsInput;
};
export type ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput = {
    id?: string;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountCreateOrConnectWithoutDiscountPolicyInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput>;
};
export type ShopAppliedDiscountCreateManyDiscountPolicyInputEnvelope = {
    data: Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInput | Prisma.ShopAppliedDiscountCreateManyDiscountPolicyInput[];
    skipDuplicates?: boolean;
};
export type ShopAppliedDiscountUpsertWithWhereUniqueWithoutDiscountPolicyInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutDiscountPolicyInput>;
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedCreateWithoutDiscountPolicyInput>;
};
export type ShopAppliedDiscountUpdateWithWhereUniqueWithoutDiscountPolicyInput = {
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateWithoutDiscountPolicyInput, Prisma.ShopAppliedDiscountUncheckedUpdateWithoutDiscountPolicyInput>;
};
export type ShopAppliedDiscountUpdateManyWithWhereWithoutDiscountPolicyInput = {
    where: Prisma.ShopAppliedDiscountScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyInput>;
};
export type ShopAppliedDiscountCreateManyAppliedByInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateWithoutAppliedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discountPolicy?: Prisma.ShopDiscountPolicyUpdateOneWithoutAppliedDiscountsNestedInput;
    order?: Prisma.ShopOrderUpdateOneWithoutAppliedDiscountsNestedInput;
    orderItem?: Prisma.ShopOrderItemUpdateOneWithoutAppliedDiscountsNestedInput;
};
export type ShopAppliedDiscountUncheckedUpdateWithoutAppliedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountCreateManyOrderInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedBy?: Prisma.ShopUserUpdateOneWithoutAppliedDiscountsNestedInput;
    discountPolicy?: Prisma.ShopDiscountPolicyUpdateOneWithoutAppliedDiscountsNestedInput;
    orderItem?: Prisma.ShopOrderItemUpdateOneWithoutAppliedDiscountsNestedInput;
};
export type ShopAppliedDiscountUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountCreateManyOrderItemInput = {
    id?: string;
    discountPolicyId?: string | null;
    orderId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedBy?: Prisma.ShopUserUpdateOneWithoutAppliedDiscountsNestedInput;
    discountPolicy?: Prisma.ShopDiscountPolicyUpdateOneWithoutAppliedDiscountsNestedInput;
    order?: Prisma.ShopOrderUpdateOneWithoutAppliedDiscountsNestedInput;
};
export type ShopAppliedDiscountUncheckedUpdateWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutOrderItemInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discountPolicyId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountCreateManyDiscountPolicyInput = {
    id?: string;
    orderId?: string | null;
    orderItemId?: string | null;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: string | null;
    appliedByUserId?: string | null;
    appliedAt?: Date | string;
};
export type ShopAppliedDiscountUpdateWithoutDiscountPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedBy?: Prisma.ShopUserUpdateOneWithoutAppliedDiscountsNestedInput;
    order?: Prisma.ShopOrderUpdateOneWithoutAppliedDiscountsNestedInput;
    orderItem?: Prisma.ShopOrderItemUpdateOneWithoutAppliedDiscountsNestedInput;
};
export type ShopAppliedDiscountUncheckedUpdateWithoutDiscountPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderItemId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appliedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopAppliedDiscountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discountPolicyId?: boolean;
    orderId?: boolean;
    orderItemId?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    discountAmount?: boolean;
    reason?: boolean;
    appliedByUserId?: boolean;
    appliedAt?: boolean;
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
}, ExtArgs["result"]["shopAppliedDiscount"]>;
export type ShopAppliedDiscountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discountPolicyId?: boolean;
    orderId?: boolean;
    orderItemId?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    discountAmount?: boolean;
    reason?: boolean;
    appliedByUserId?: boolean;
    appliedAt?: boolean;
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
}, ExtArgs["result"]["shopAppliedDiscount"]>;
export type ShopAppliedDiscountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discountPolicyId?: boolean;
    orderId?: boolean;
    orderItemId?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    discountAmount?: boolean;
    reason?: boolean;
    appliedByUserId?: boolean;
    appliedAt?: boolean;
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
}, ExtArgs["result"]["shopAppliedDiscount"]>;
export type ShopAppliedDiscountSelectScalar = {
    id?: boolean;
    discountPolicyId?: boolean;
    orderId?: boolean;
    orderItemId?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    discountAmount?: boolean;
    reason?: boolean;
    appliedByUserId?: boolean;
    appliedAt?: boolean;
};
export type ShopAppliedDiscountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "discountPolicyId" | "orderId" | "orderItemId" | "scope" | "discountType" | "discountValue" | "discountAmount" | "reason" | "appliedByUserId" | "appliedAt", ExtArgs["result"]["shopAppliedDiscount"]>;
export type ShopAppliedDiscountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
};
export type ShopAppliedDiscountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
};
export type ShopAppliedDiscountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedBy?: boolean | Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>;
    discountPolicy?: boolean | Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>;
    order?: boolean | Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>;
    orderItem?: boolean | Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>;
};
export type $ShopAppliedDiscountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopAppliedDiscount";
    objects: {
        appliedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
        discountPolicy: Prisma.$ShopDiscountPolicyPayload<ExtArgs> | null;
        order: Prisma.$ShopOrderPayload<ExtArgs> | null;
        orderItem: Prisma.$ShopOrderItemPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        discountPolicyId: string | null;
        orderId: string | null;
        orderItemId: string | null;
        scope: string;
        discountType: string;
        discountValue: runtime.Decimal;
        discountAmount: runtime.Decimal;
        reason: string | null;
        appliedByUserId: string | null;
        appliedAt: Date;
    }, ExtArgs["result"]["shopAppliedDiscount"]>;
    composites: {};
};
export type ShopAppliedDiscountGetPayload<S extends boolean | null | undefined | ShopAppliedDiscountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload, S>;
export type ShopAppliedDiscountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopAppliedDiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopAppliedDiscountCountAggregateInputType | true;
};
export interface ShopAppliedDiscountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopAppliedDiscount'];
        meta: {
            name: 'ShopAppliedDiscount';
        };
    };
    /**
     * Find zero or one ShopAppliedDiscount that matches the filter.
     * @param {ShopAppliedDiscountFindUniqueArgs} args - Arguments to find a ShopAppliedDiscount
     * @example
     * // Get one ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopAppliedDiscountFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopAppliedDiscount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopAppliedDiscountFindUniqueOrThrowArgs} args - Arguments to find a ShopAppliedDiscount
     * @example
     * // Get one ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopAppliedDiscountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopAppliedDiscount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountFindFirstArgs} args - Arguments to find a ShopAppliedDiscount
     * @example
     * // Get one ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopAppliedDiscountFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopAppliedDiscount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountFindFirstOrThrowArgs} args - Arguments to find a ShopAppliedDiscount
     * @example
     * // Get one ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopAppliedDiscountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopAppliedDiscounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopAppliedDiscounts
     * const shopAppliedDiscounts = await prisma.shopAppliedDiscount.findMany()
     *
     * // Get first 10 ShopAppliedDiscounts
     * const shopAppliedDiscounts = await prisma.shopAppliedDiscount.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopAppliedDiscountWithIdOnly = await prisma.shopAppliedDiscount.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopAppliedDiscountFindManyArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopAppliedDiscount.
     * @param {ShopAppliedDiscountCreateArgs} args - Arguments to create a ShopAppliedDiscount.
     * @example
     * // Create one ShopAppliedDiscount
     * const ShopAppliedDiscount = await prisma.shopAppliedDiscount.create({
     *   data: {
     *     // ... data to create a ShopAppliedDiscount
     *   }
     * })
     *
     */
    create<T extends ShopAppliedDiscountCreateArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountCreateArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopAppliedDiscounts.
     * @param {ShopAppliedDiscountCreateManyArgs} args - Arguments to create many ShopAppliedDiscounts.
     * @example
     * // Create many ShopAppliedDiscounts
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopAppliedDiscountCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopAppliedDiscounts and returns the data saved in the database.
     * @param {ShopAppliedDiscountCreateManyAndReturnArgs} args - Arguments to create many ShopAppliedDiscounts.
     * @example
     * // Create many ShopAppliedDiscounts
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopAppliedDiscounts and only return the `id`
     * const shopAppliedDiscountWithIdOnly = await prisma.shopAppliedDiscount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopAppliedDiscountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopAppliedDiscount.
     * @param {ShopAppliedDiscountDeleteArgs} args - Arguments to delete one ShopAppliedDiscount.
     * @example
     * // Delete one ShopAppliedDiscount
     * const ShopAppliedDiscount = await prisma.shopAppliedDiscount.delete({
     *   where: {
     *     // ... filter to delete one ShopAppliedDiscount
     *   }
     * })
     *
     */
    delete<T extends ShopAppliedDiscountDeleteArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopAppliedDiscount.
     * @param {ShopAppliedDiscountUpdateArgs} args - Arguments to update one ShopAppliedDiscount.
     * @example
     * // Update one ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopAppliedDiscountUpdateArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopAppliedDiscounts.
     * @param {ShopAppliedDiscountDeleteManyArgs} args - Arguments to filter ShopAppliedDiscounts to delete.
     * @example
     * // Delete a few ShopAppliedDiscounts
     * const { count } = await prisma.shopAppliedDiscount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopAppliedDiscountDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopAppliedDiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopAppliedDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopAppliedDiscounts
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopAppliedDiscountUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopAppliedDiscounts and returns the data updated in the database.
     * @param {ShopAppliedDiscountUpdateManyAndReturnArgs} args - Arguments to update many ShopAppliedDiscounts.
     * @example
     * // Update many ShopAppliedDiscounts
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopAppliedDiscounts and only return the `id`
     * const shopAppliedDiscountWithIdOnly = await prisma.shopAppliedDiscount.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopAppliedDiscountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopAppliedDiscount.
     * @param {ShopAppliedDiscountUpsertArgs} args - Arguments to update or create a ShopAppliedDiscount.
     * @example
     * // Update or create a ShopAppliedDiscount
     * const shopAppliedDiscount = await prisma.shopAppliedDiscount.upsert({
     *   create: {
     *     // ... data to create a ShopAppliedDiscount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopAppliedDiscount we want to update
     *   }
     * })
     */
    upsert<T extends ShopAppliedDiscountUpsertArgs>(args: Prisma.SelectSubset<T, ShopAppliedDiscountUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopAppliedDiscountClient<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopAppliedDiscounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountCountArgs} args - Arguments to filter ShopAppliedDiscounts to count.
     * @example
     * // Count the number of ShopAppliedDiscounts
     * const count = await prisma.shopAppliedDiscount.count({
     *   where: {
     *     // ... the filter for the ShopAppliedDiscounts we want to count
     *   }
     * })
    **/
    count<T extends ShopAppliedDiscountCountArgs>(args?: Prisma.Subset<T, ShopAppliedDiscountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopAppliedDiscountCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopAppliedDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAppliedDiscountAggregateArgs>(args: Prisma.Subset<T, ShopAppliedDiscountAggregateArgs>): Prisma.PrismaPromise<GetShopAppliedDiscountAggregateType<T>>;
    /**
     * Group by ShopAppliedDiscount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAppliedDiscountGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopAppliedDiscountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopAppliedDiscountGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopAppliedDiscountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopAppliedDiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopAppliedDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopAppliedDiscount model
     */
    readonly fields: ShopAppliedDiscountFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopAppliedDiscount.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopAppliedDiscountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appliedBy<T extends Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopAppliedDiscount$appliedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    discountPolicy<T extends Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopAppliedDiscount$discountPolicyArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.ShopAppliedDiscount$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopAppliedDiscount$orderArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orderItem<T extends Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopAppliedDiscount$orderItemArgs<ExtArgs>>): Prisma.Prisma__ShopOrderItemClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopAppliedDiscount model
 */
export interface ShopAppliedDiscountFieldRefs {
    readonly id: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly discountPolicyId: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly orderId: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly orderItemId: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly scope: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly discountType: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly discountValue: Prisma.FieldRef<"ShopAppliedDiscount", 'Decimal'>;
    readonly discountAmount: Prisma.FieldRef<"ShopAppliedDiscount", 'Decimal'>;
    readonly reason: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly appliedByUserId: Prisma.FieldRef<"ShopAppliedDiscount", 'String'>;
    readonly appliedAt: Prisma.FieldRef<"ShopAppliedDiscount", 'DateTime'>;
}
/**
 * ShopAppliedDiscount findUnique
 */
export type ShopAppliedDiscountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter, which ShopAppliedDiscount to fetch.
     */
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
};
/**
 * ShopAppliedDiscount findUniqueOrThrow
 */
export type ShopAppliedDiscountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter, which ShopAppliedDiscount to fetch.
     */
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
};
/**
 * ShopAppliedDiscount findFirst
 */
export type ShopAppliedDiscountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter, which ShopAppliedDiscount to fetch.
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopAppliedDiscounts to fetch.
     */
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithRelationInput | Prisma.ShopAppliedDiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopAppliedDiscounts.
     */
    cursor?: Prisma.ShopAppliedDiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopAppliedDiscounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopAppliedDiscounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopAppliedDiscounts.
     */
    distinct?: Prisma.ShopAppliedDiscountScalarFieldEnum | Prisma.ShopAppliedDiscountScalarFieldEnum[];
};
/**
 * ShopAppliedDiscount findFirstOrThrow
 */
export type ShopAppliedDiscountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter, which ShopAppliedDiscount to fetch.
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopAppliedDiscounts to fetch.
     */
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithRelationInput | Prisma.ShopAppliedDiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopAppliedDiscounts.
     */
    cursor?: Prisma.ShopAppliedDiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopAppliedDiscounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopAppliedDiscounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopAppliedDiscounts.
     */
    distinct?: Prisma.ShopAppliedDiscountScalarFieldEnum | Prisma.ShopAppliedDiscountScalarFieldEnum[];
};
/**
 * ShopAppliedDiscount findMany
 */
export type ShopAppliedDiscountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter, which ShopAppliedDiscounts to fetch.
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopAppliedDiscounts to fetch.
     */
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithRelationInput | Prisma.ShopAppliedDiscountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopAppliedDiscounts.
     */
    cursor?: Prisma.ShopAppliedDiscountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopAppliedDiscounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopAppliedDiscounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopAppliedDiscounts.
     */
    distinct?: Prisma.ShopAppliedDiscountScalarFieldEnum | Prisma.ShopAppliedDiscountScalarFieldEnum[];
};
/**
 * ShopAppliedDiscount create
 */
export type ShopAppliedDiscountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopAppliedDiscount.
     */
    data: Prisma.XOR<Prisma.ShopAppliedDiscountCreateInput, Prisma.ShopAppliedDiscountUncheckedCreateInput>;
};
/**
 * ShopAppliedDiscount createMany
 */
export type ShopAppliedDiscountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopAppliedDiscounts.
     */
    data: Prisma.ShopAppliedDiscountCreateManyInput | Prisma.ShopAppliedDiscountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopAppliedDiscount createManyAndReturn
 */
export type ShopAppliedDiscountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopAppliedDiscounts.
     */
    data: Prisma.ShopAppliedDiscountCreateManyInput | Prisma.ShopAppliedDiscountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopAppliedDiscount update
 */
export type ShopAppliedDiscountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopAppliedDiscount.
     */
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateInput, Prisma.ShopAppliedDiscountUncheckedUpdateInput>;
    /**
     * Choose, which ShopAppliedDiscount to update.
     */
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
};
/**
 * ShopAppliedDiscount updateMany
 */
export type ShopAppliedDiscountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopAppliedDiscounts.
     */
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyInput>;
    /**
     * Filter which ShopAppliedDiscounts to update
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * Limit how many ShopAppliedDiscounts to update.
     */
    limit?: number;
};
/**
 * ShopAppliedDiscount updateManyAndReturn
 */
export type ShopAppliedDiscountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * The data used to update ShopAppliedDiscounts.
     */
    data: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateManyMutationInput, Prisma.ShopAppliedDiscountUncheckedUpdateManyInput>;
    /**
     * Filter which ShopAppliedDiscounts to update
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * Limit how many ShopAppliedDiscounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopAppliedDiscount upsert
 */
export type ShopAppliedDiscountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopAppliedDiscount to update in case it exists.
     */
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
    /**
     * In case the ShopAppliedDiscount found by the `where` argument doesn't exist, create a new ShopAppliedDiscount with this data.
     */
    create: Prisma.XOR<Prisma.ShopAppliedDiscountCreateInput, Prisma.ShopAppliedDiscountUncheckedCreateInput>;
    /**
     * In case the ShopAppliedDiscount was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopAppliedDiscountUpdateInput, Prisma.ShopAppliedDiscountUncheckedUpdateInput>;
};
/**
 * ShopAppliedDiscount delete
 */
export type ShopAppliedDiscountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
    /**
     * Filter which ShopAppliedDiscount to delete.
     */
    where: Prisma.ShopAppliedDiscountWhereUniqueInput;
};
/**
 * ShopAppliedDiscount deleteMany
 */
export type ShopAppliedDiscountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopAppliedDiscounts to delete
     */
    where?: Prisma.ShopAppliedDiscountWhereInput;
    /**
     * Limit how many ShopAppliedDiscounts to delete.
     */
    limit?: number;
};
/**
 * ShopAppliedDiscount.appliedBy
 */
export type ShopAppliedDiscount$appliedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopAppliedDiscount.discountPolicy
 */
export type ShopAppliedDiscount$discountPolicyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * ShopAppliedDiscount.order
 */
export type ShopAppliedDiscount$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: Prisma.ShopOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: Prisma.ShopOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderInclude<ExtArgs> | null;
    where?: Prisma.ShopOrderWhereInput;
};
/**
 * ShopAppliedDiscount.orderItem
 */
export type ShopAppliedDiscount$orderItemArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * ShopAppliedDiscount without action
 */
export type ShopAppliedDiscountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopAppliedDiscount
     */
    select?: Prisma.ShopAppliedDiscountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopAppliedDiscount
     */
    omit?: Prisma.ShopAppliedDiscountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopAppliedDiscountInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopAppliedDiscount.d.ts.map