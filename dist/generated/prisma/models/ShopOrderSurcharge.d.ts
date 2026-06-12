import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopOrderSurcharge
 *
 */
export type ShopOrderSurchargeModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopOrderSurchargePayload>;
export type AggregateShopOrderSurcharge = {
    _count: ShopOrderSurchargeCountAggregateOutputType | null;
    _avg: ShopOrderSurchargeAvgAggregateOutputType | null;
    _sum: ShopOrderSurchargeSumAggregateOutputType | null;
    _min: ShopOrderSurchargeMinAggregateOutputType | null;
    _max: ShopOrderSurchargeMaxAggregateOutputType | null;
};
export type ShopOrderSurchargeAvgAggregateOutputType = {
    rate: runtime.Decimal | null;
    amount: runtime.Decimal | null;
};
export type ShopOrderSurchargeSumAggregateOutputType = {
    rate: runtime.Decimal | null;
    amount: runtime.Decimal | null;
};
export type ShopOrderSurchargeMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    label: string | null;
    isPercent: boolean | null;
    rate: runtime.Decimal | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ShopOrderSurchargeMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    label: string | null;
    isPercent: boolean | null;
    rate: runtime.Decimal | null;
    amount: runtime.Decimal | null;
    createdAt: Date | null;
};
export type ShopOrderSurchargeCountAggregateOutputType = {
    id: number;
    orderId: number;
    label: number;
    isPercent: number;
    rate: number;
    amount: number;
    createdAt: number;
    _all: number;
};
export type ShopOrderSurchargeAvgAggregateInputType = {
    rate?: true;
    amount?: true;
};
export type ShopOrderSurchargeSumAggregateInputType = {
    rate?: true;
    amount?: true;
};
export type ShopOrderSurchargeMinAggregateInputType = {
    id?: true;
    orderId?: true;
    label?: true;
    isPercent?: true;
    rate?: true;
    amount?: true;
    createdAt?: true;
};
export type ShopOrderSurchargeMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    label?: true;
    isPercent?: true;
    rate?: true;
    amount?: true;
    createdAt?: true;
};
export type ShopOrderSurchargeCountAggregateInputType = {
    id?: true;
    orderId?: true;
    label?: true;
    isPercent?: true;
    rate?: true;
    amount?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopOrderSurchargeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrderSurcharge to aggregate.
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderSurcharges to fetch.
     */
    orderBy?: Prisma.ShopOrderSurchargeOrderByWithRelationInput | Prisma.ShopOrderSurchargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopOrderSurchargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderSurcharges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderSurcharges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopOrderSurcharges
    **/
    _count?: true | ShopOrderSurchargeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopOrderSurchargeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopOrderSurchargeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopOrderSurchargeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopOrderSurchargeMaxAggregateInputType;
};
export type GetShopOrderSurchargeAggregateType<T extends ShopOrderSurchargeAggregateArgs> = {
    [P in keyof T & keyof AggregateShopOrderSurcharge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopOrderSurcharge[P]> : Prisma.GetScalarType<T[P], AggregateShopOrderSurcharge[P]>;
};
export type ShopOrderSurchargeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderSurchargeWhereInput;
    orderBy?: Prisma.ShopOrderSurchargeOrderByWithAggregationInput | Prisma.ShopOrderSurchargeOrderByWithAggregationInput[];
    by: Prisma.ShopOrderSurchargeScalarFieldEnum[] | Prisma.ShopOrderSurchargeScalarFieldEnum;
    having?: Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopOrderSurchargeCountAggregateInputType | true;
    _avg?: ShopOrderSurchargeAvgAggregateInputType;
    _sum?: ShopOrderSurchargeSumAggregateInputType;
    _min?: ShopOrderSurchargeMinAggregateInputType;
    _max?: ShopOrderSurchargeMaxAggregateInputType;
};
export type ShopOrderSurchargeGroupByOutputType = {
    id: string;
    orderId: string;
    label: string;
    isPercent: boolean;
    rate: runtime.Decimal | null;
    amount: runtime.Decimal;
    createdAt: Date;
    _count: ShopOrderSurchargeCountAggregateOutputType | null;
    _avg: ShopOrderSurchargeAvgAggregateOutputType | null;
    _sum: ShopOrderSurchargeSumAggregateOutputType | null;
    _min: ShopOrderSurchargeMinAggregateOutputType | null;
    _max: ShopOrderSurchargeMaxAggregateOutputType | null;
};
export type GetShopOrderSurchargeGroupByPayload<T extends ShopOrderSurchargeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopOrderSurchargeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopOrderSurchargeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopOrderSurchargeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopOrderSurchargeGroupByOutputType[P]>;
}>>;
export type ShopOrderSurchargeWhereInput = {
    AND?: Prisma.ShopOrderSurchargeWhereInput | Prisma.ShopOrderSurchargeWhereInput[];
    OR?: Prisma.ShopOrderSurchargeWhereInput[];
    NOT?: Prisma.ShopOrderSurchargeWhereInput | Prisma.ShopOrderSurchargeWhereInput[];
    id?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    orderId?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    label?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    isPercent?: Prisma.BoolFilter<"ShopOrderSurcharge"> | boolean;
    rate?: Prisma.DecimalNullableFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderSurcharge"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
};
export type ShopOrderSurchargeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    isPercent?: Prisma.SortOrder;
    rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.ShopOrderOrderByWithRelationInput;
};
export type ShopOrderSurchargeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopOrderSurchargeWhereInput | Prisma.ShopOrderSurchargeWhereInput[];
    OR?: Prisma.ShopOrderSurchargeWhereInput[];
    NOT?: Prisma.ShopOrderSurchargeWhereInput | Prisma.ShopOrderSurchargeWhereInput[];
    orderId?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    label?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    isPercent?: Prisma.BoolFilter<"ShopOrderSurcharge"> | boolean;
    rate?: Prisma.DecimalNullableFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderSurcharge"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
}, "id">;
export type ShopOrderSurchargeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    isPercent?: Prisma.SortOrder;
    rate?: Prisma.SortOrderInput | Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopOrderSurchargeCountOrderByAggregateInput;
    _avg?: Prisma.ShopOrderSurchargeAvgOrderByAggregateInput;
    _max?: Prisma.ShopOrderSurchargeMaxOrderByAggregateInput;
    _min?: Prisma.ShopOrderSurchargeMinOrderByAggregateInput;
    _sum?: Prisma.ShopOrderSurchargeSumOrderByAggregateInput;
};
export type ShopOrderSurchargeScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput | Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput | Prisma.ShopOrderSurchargeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopOrderSurcharge"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"ShopOrderSurcharge"> | string;
    label?: Prisma.StringWithAggregatesFilter<"ShopOrderSurcharge"> | string;
    isPercent?: Prisma.BoolWithAggregatesFilter<"ShopOrderSurcharge"> | boolean;
    rate?: Prisma.DecimalNullableWithAggregatesFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalWithAggregatesFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopOrderSurcharge"> | Date | string;
};
export type ShopOrderSurchargeCreateInput = {
    id?: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutSurchargesInput;
};
export type ShopOrderSurchargeUncheckedCreateInput = {
    id?: string;
    orderId: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ShopOrderSurchargeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutSurchargesNestedInput;
};
export type ShopOrderSurchargeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeCreateManyInput = {
    id?: string;
    orderId: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ShopOrderSurchargeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeListRelationFilter = {
    every?: Prisma.ShopOrderSurchargeWhereInput;
    some?: Prisma.ShopOrderSurchargeWhereInput;
    none?: Prisma.ShopOrderSurchargeWhereInput;
};
export type ShopOrderSurchargeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopOrderSurchargeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    isPercent?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderSurchargeAvgOrderByAggregateInput = {
    rate?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ShopOrderSurchargeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    isPercent?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderSurchargeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    isPercent?: Prisma.SortOrder;
    rate?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderSurchargeSumOrderByAggregateInput = {
    rate?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
};
export type ShopOrderSurchargeCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderSurchargeCreateWithoutOrderInput[] | Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput | Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopOrderSurchargeCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
};
export type ShopOrderSurchargeUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderSurchargeCreateWithoutOrderInput[] | Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput | Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopOrderSurchargeCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
};
export type ShopOrderSurchargeUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderSurchargeCreateWithoutOrderInput[] | Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput | Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopOrderSurchargeUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderSurchargeUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopOrderSurchargeCreateManyOrderInputEnvelope;
    set?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    delete?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    connect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    update?: Prisma.ShopOrderSurchargeUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderSurchargeUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopOrderSurchargeUpdateManyWithWhereWithoutOrderInput | Prisma.ShopOrderSurchargeUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopOrderSurchargeScalarWhereInput | Prisma.ShopOrderSurchargeScalarWhereInput[];
};
export type ShopOrderSurchargeUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderSurchargeCreateWithoutOrderInput[] | Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput | Prisma.ShopOrderSurchargeCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopOrderSurchargeUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderSurchargeUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopOrderSurchargeCreateManyOrderInputEnvelope;
    set?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    delete?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    connect?: Prisma.ShopOrderSurchargeWhereUniqueInput | Prisma.ShopOrderSurchargeWhereUniqueInput[];
    update?: Prisma.ShopOrderSurchargeUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderSurchargeUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopOrderSurchargeUpdateManyWithWhereWithoutOrderInput | Prisma.ShopOrderSurchargeUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopOrderSurchargeScalarWhereInput | Prisma.ShopOrderSurchargeScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ShopOrderSurchargeCreateWithoutOrderInput = {
    id?: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ShopOrderSurchargeUncheckedCreateWithoutOrderInput = {
    id?: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ShopOrderSurchargeCreateOrConnectWithoutOrderInput = {
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput>;
};
export type ShopOrderSurchargeCreateManyOrderInputEnvelope = {
    data: Prisma.ShopOrderSurchargeCreateManyOrderInput | Prisma.ShopOrderSurchargeCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderSurchargeUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ShopOrderSurchargeCreateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedCreateWithoutOrderInput>;
};
export type ShopOrderSurchargeUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateWithoutOrderInput, Prisma.ShopOrderSurchargeUncheckedUpdateWithoutOrderInput>;
};
export type ShopOrderSurchargeUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ShopOrderSurchargeScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateManyMutationInput, Prisma.ShopOrderSurchargeUncheckedUpdateManyWithoutOrderInput>;
};
export type ShopOrderSurchargeScalarWhereInput = {
    AND?: Prisma.ShopOrderSurchargeScalarWhereInput | Prisma.ShopOrderSurchargeScalarWhereInput[];
    OR?: Prisma.ShopOrderSurchargeScalarWhereInput[];
    NOT?: Prisma.ShopOrderSurchargeScalarWhereInput | Prisma.ShopOrderSurchargeScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    orderId?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    label?: Prisma.StringFilter<"ShopOrderSurcharge"> | string;
    isPercent?: Prisma.BoolFilter<"ShopOrderSurcharge"> | boolean;
    rate?: Prisma.DecimalNullableFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFilter<"ShopOrderSurcharge"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderSurcharge"> | Date | string;
};
export type ShopOrderSurchargeCreateManyOrderInput = {
    id?: string;
    label: string;
    isPercent?: boolean;
    rate?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type ShopOrderSurchargeUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    isPercent?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rate?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderSurchargeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    label?: boolean;
    isPercent?: boolean;
    rate?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderSurcharge"]>;
export type ShopOrderSurchargeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    label?: boolean;
    isPercent?: boolean;
    rate?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderSurcharge"]>;
export type ShopOrderSurchargeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    label?: boolean;
    isPercent?: boolean;
    rate?: boolean;
    amount?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderSurcharge"]>;
export type ShopOrderSurchargeSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    label?: boolean;
    isPercent?: boolean;
    rate?: boolean;
    amount?: boolean;
    createdAt?: boolean;
};
export type ShopOrderSurchargeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "label" | "isPercent" | "rate" | "amount" | "createdAt", ExtArgs["result"]["shopOrderSurcharge"]>;
export type ShopOrderSurchargeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
};
export type ShopOrderSurchargeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
};
export type ShopOrderSurchargeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
};
export type $ShopOrderSurchargePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopOrderSurcharge";
    objects: {
        order: Prisma.$ShopOrderPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        label: string;
        isPercent: boolean;
        rate: runtime.Decimal | null;
        amount: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["shopOrderSurcharge"]>;
    composites: {};
};
export type ShopOrderSurchargeGetPayload<S extends boolean | null | undefined | ShopOrderSurchargeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload, S>;
export type ShopOrderSurchargeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopOrderSurchargeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopOrderSurchargeCountAggregateInputType | true;
};
export interface ShopOrderSurchargeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopOrderSurcharge'];
        meta: {
            name: 'ShopOrderSurcharge';
        };
    };
    /**
     * Find zero or one ShopOrderSurcharge that matches the filter.
     * @param {ShopOrderSurchargeFindUniqueArgs} args - Arguments to find a ShopOrderSurcharge
     * @example
     * // Get one ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopOrderSurchargeFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopOrderSurcharge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopOrderSurchargeFindUniqueOrThrowArgs} args - Arguments to find a ShopOrderSurcharge
     * @example
     * // Get one ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopOrderSurchargeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrderSurcharge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeFindFirstArgs} args - Arguments to find a ShopOrderSurcharge
     * @example
     * // Get one ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopOrderSurchargeFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrderSurcharge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeFindFirstOrThrowArgs} args - Arguments to find a ShopOrderSurcharge
     * @example
     * // Get one ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopOrderSurchargeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopOrderSurcharges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOrderSurcharges
     * const shopOrderSurcharges = await prisma.shopOrderSurcharge.findMany()
     *
     * // Get first 10 ShopOrderSurcharges
     * const shopOrderSurcharges = await prisma.shopOrderSurcharge.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopOrderSurchargeWithIdOnly = await prisma.shopOrderSurcharge.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopOrderSurchargeFindManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopOrderSurcharge.
     * @param {ShopOrderSurchargeCreateArgs} args - Arguments to create a ShopOrderSurcharge.
     * @example
     * // Create one ShopOrderSurcharge
     * const ShopOrderSurcharge = await prisma.shopOrderSurcharge.create({
     *   data: {
     *     // ... data to create a ShopOrderSurcharge
     *   }
     * })
     *
     */
    create<T extends ShopOrderSurchargeCreateArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeCreateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopOrderSurcharges.
     * @param {ShopOrderSurchargeCreateManyArgs} args - Arguments to create many ShopOrderSurcharges.
     * @example
     * // Create many ShopOrderSurcharges
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopOrderSurchargeCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopOrderSurcharges and returns the data saved in the database.
     * @param {ShopOrderSurchargeCreateManyAndReturnArgs} args - Arguments to create many ShopOrderSurcharges.
     * @example
     * // Create many ShopOrderSurcharges
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopOrderSurcharges and only return the `id`
     * const shopOrderSurchargeWithIdOnly = await prisma.shopOrderSurcharge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopOrderSurchargeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopOrderSurcharge.
     * @param {ShopOrderSurchargeDeleteArgs} args - Arguments to delete one ShopOrderSurcharge.
     * @example
     * // Delete one ShopOrderSurcharge
     * const ShopOrderSurcharge = await prisma.shopOrderSurcharge.delete({
     *   where: {
     *     // ... filter to delete one ShopOrderSurcharge
     *   }
     * })
     *
     */
    delete<T extends ShopOrderSurchargeDeleteArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopOrderSurcharge.
     * @param {ShopOrderSurchargeUpdateArgs} args - Arguments to update one ShopOrderSurcharge.
     * @example
     * // Update one ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopOrderSurchargeUpdateArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopOrderSurcharges.
     * @param {ShopOrderSurchargeDeleteManyArgs} args - Arguments to filter ShopOrderSurcharges to delete.
     * @example
     * // Delete a few ShopOrderSurcharges
     * const { count } = await prisma.shopOrderSurcharge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopOrderSurchargeDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderSurchargeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrderSurcharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOrderSurcharges
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopOrderSurchargeUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrderSurcharges and returns the data updated in the database.
     * @param {ShopOrderSurchargeUpdateManyAndReturnArgs} args - Arguments to update many ShopOrderSurcharges.
     * @example
     * // Update many ShopOrderSurcharges
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopOrderSurcharges and only return the `id`
     * const shopOrderSurchargeWithIdOnly = await prisma.shopOrderSurcharge.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopOrderSurchargeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopOrderSurcharge.
     * @param {ShopOrderSurchargeUpsertArgs} args - Arguments to update or create a ShopOrderSurcharge.
     * @example
     * // Update or create a ShopOrderSurcharge
     * const shopOrderSurcharge = await prisma.shopOrderSurcharge.upsert({
     *   create: {
     *     // ... data to create a ShopOrderSurcharge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOrderSurcharge we want to update
     *   }
     * })
     */
    upsert<T extends ShopOrderSurchargeUpsertArgs>(args: Prisma.SelectSubset<T, ShopOrderSurchargeUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopOrderSurchargeClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderSurchargePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopOrderSurcharges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeCountArgs} args - Arguments to filter ShopOrderSurcharges to count.
     * @example
     * // Count the number of ShopOrderSurcharges
     * const count = await prisma.shopOrderSurcharge.count({
     *   where: {
     *     // ... the filter for the ShopOrderSurcharges we want to count
     *   }
     * })
    **/
    count<T extends ShopOrderSurchargeCountArgs>(args?: Prisma.Subset<T, ShopOrderSurchargeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopOrderSurchargeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopOrderSurcharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopOrderSurchargeAggregateArgs>(args: Prisma.Subset<T, ShopOrderSurchargeAggregateArgs>): Prisma.PrismaPromise<GetShopOrderSurchargeAggregateType<T>>;
    /**
     * Group by ShopOrderSurcharge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderSurchargeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopOrderSurchargeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopOrderSurchargeGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopOrderSurchargeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopOrderSurchargeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOrderSurchargeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopOrderSurcharge model
     */
    readonly fields: ShopOrderSurchargeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopOrderSurcharge.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopOrderSurchargeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.ShopOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopOrderSurcharge model
 */
export interface ShopOrderSurchargeFieldRefs {
    readonly id: Prisma.FieldRef<"ShopOrderSurcharge", 'String'>;
    readonly orderId: Prisma.FieldRef<"ShopOrderSurcharge", 'String'>;
    readonly label: Prisma.FieldRef<"ShopOrderSurcharge", 'String'>;
    readonly isPercent: Prisma.FieldRef<"ShopOrderSurcharge", 'Boolean'>;
    readonly rate: Prisma.FieldRef<"ShopOrderSurcharge", 'Decimal'>;
    readonly amount: Prisma.FieldRef<"ShopOrderSurcharge", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"ShopOrderSurcharge", 'DateTime'>;
}
/**
 * ShopOrderSurcharge findUnique
 */
export type ShopOrderSurchargeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderSurcharge to fetch.
     */
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
};
/**
 * ShopOrderSurcharge findUniqueOrThrow
 */
export type ShopOrderSurchargeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderSurcharge to fetch.
     */
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
};
/**
 * ShopOrderSurcharge findFirst
 */
export type ShopOrderSurchargeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderSurcharge to fetch.
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderSurcharges to fetch.
     */
    orderBy?: Prisma.ShopOrderSurchargeOrderByWithRelationInput | Prisma.ShopOrderSurchargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrderSurcharges.
     */
    cursor?: Prisma.ShopOrderSurchargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderSurcharges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderSurcharges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderSurcharges.
     */
    distinct?: Prisma.ShopOrderSurchargeScalarFieldEnum | Prisma.ShopOrderSurchargeScalarFieldEnum[];
};
/**
 * ShopOrderSurcharge findFirstOrThrow
 */
export type ShopOrderSurchargeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderSurcharge to fetch.
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderSurcharges to fetch.
     */
    orderBy?: Prisma.ShopOrderSurchargeOrderByWithRelationInput | Prisma.ShopOrderSurchargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrderSurcharges.
     */
    cursor?: Prisma.ShopOrderSurchargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderSurcharges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderSurcharges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderSurcharges.
     */
    distinct?: Prisma.ShopOrderSurchargeScalarFieldEnum | Prisma.ShopOrderSurchargeScalarFieldEnum[];
};
/**
 * ShopOrderSurcharge findMany
 */
export type ShopOrderSurchargeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderSurcharges to fetch.
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderSurcharges to fetch.
     */
    orderBy?: Prisma.ShopOrderSurchargeOrderByWithRelationInput | Prisma.ShopOrderSurchargeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopOrderSurcharges.
     */
    cursor?: Prisma.ShopOrderSurchargeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderSurcharges from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderSurcharges.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderSurcharges.
     */
    distinct?: Prisma.ShopOrderSurchargeScalarFieldEnum | Prisma.ShopOrderSurchargeScalarFieldEnum[];
};
/**
 * ShopOrderSurcharge create
 */
export type ShopOrderSurchargeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopOrderSurcharge.
     */
    data: Prisma.XOR<Prisma.ShopOrderSurchargeCreateInput, Prisma.ShopOrderSurchargeUncheckedCreateInput>;
};
/**
 * ShopOrderSurcharge createMany
 */
export type ShopOrderSurchargeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopOrderSurcharges.
     */
    data: Prisma.ShopOrderSurchargeCreateManyInput | Prisma.ShopOrderSurchargeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopOrderSurcharge createManyAndReturn
 */
export type ShopOrderSurchargeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopOrderSurcharges.
     */
    data: Prisma.ShopOrderSurchargeCreateManyInput | Prisma.ShopOrderSurchargeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrderSurcharge update
 */
export type ShopOrderSurchargeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopOrderSurcharge.
     */
    data: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateInput, Prisma.ShopOrderSurchargeUncheckedUpdateInput>;
    /**
     * Choose, which ShopOrderSurcharge to update.
     */
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
};
/**
 * ShopOrderSurcharge updateMany
 */
export type ShopOrderSurchargeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOrderSurcharges.
     */
    data: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateManyMutationInput, Prisma.ShopOrderSurchargeUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrderSurcharges to update
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * Limit how many ShopOrderSurcharges to update.
     */
    limit?: number;
};
/**
 * ShopOrderSurcharge updateManyAndReturn
 */
export type ShopOrderSurchargeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * The data used to update ShopOrderSurcharges.
     */
    data: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateManyMutationInput, Prisma.ShopOrderSurchargeUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrderSurcharges to update
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * Limit how many ShopOrderSurcharges to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrderSurcharge upsert
 */
export type ShopOrderSurchargeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopOrderSurcharge to update in case it exists.
     */
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
    /**
     * In case the ShopOrderSurcharge found by the `where` argument doesn't exist, create a new ShopOrderSurcharge with this data.
     */
    create: Prisma.XOR<Prisma.ShopOrderSurchargeCreateInput, Prisma.ShopOrderSurchargeUncheckedCreateInput>;
    /**
     * In case the ShopOrderSurcharge was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopOrderSurchargeUpdateInput, Prisma.ShopOrderSurchargeUncheckedUpdateInput>;
};
/**
 * ShopOrderSurcharge delete
 */
export type ShopOrderSurchargeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
    /**
     * Filter which ShopOrderSurcharge to delete.
     */
    where: Prisma.ShopOrderSurchargeWhereUniqueInput;
};
/**
 * ShopOrderSurcharge deleteMany
 */
export type ShopOrderSurchargeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrderSurcharges to delete
     */
    where?: Prisma.ShopOrderSurchargeWhereInput;
    /**
     * Limit how many ShopOrderSurcharges to delete.
     */
    limit?: number;
};
/**
 * ShopOrderSurcharge without action
 */
export type ShopOrderSurchargeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderSurcharge
     */
    select?: Prisma.ShopOrderSurchargeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderSurcharge
     */
    omit?: Prisma.ShopOrderSurchargeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderSurchargeInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopOrderSurcharge.d.ts.map