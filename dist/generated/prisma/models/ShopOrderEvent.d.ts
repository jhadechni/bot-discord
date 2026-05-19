import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopOrderEvent
 *
 */
export type ShopOrderEventModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopOrderEventPayload>;
export type AggregateShopOrderEvent = {
    _count: ShopOrderEventCountAggregateOutputType | null;
    _min: ShopOrderEventMinAggregateOutputType | null;
    _max: ShopOrderEventMaxAggregateOutputType | null;
};
export type ShopOrderEventMinAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    eventType: string | null;
    oldStatus: string | null;
    newStatus: string | null;
    performedById: string | null;
    notes: string | null;
    createdAt: Date | null;
};
export type ShopOrderEventMaxAggregateOutputType = {
    id: string | null;
    orderId: string | null;
    eventType: string | null;
    oldStatus: string | null;
    newStatus: string | null;
    performedById: string | null;
    notes: string | null;
    createdAt: Date | null;
};
export type ShopOrderEventCountAggregateOutputType = {
    id: number;
    orderId: number;
    eventType: number;
    oldStatus: number;
    newStatus: number;
    performedById: number;
    notes: number;
    createdAt: number;
    _all: number;
};
export type ShopOrderEventMinAggregateInputType = {
    id?: true;
    orderId?: true;
    eventType?: true;
    oldStatus?: true;
    newStatus?: true;
    performedById?: true;
    notes?: true;
    createdAt?: true;
};
export type ShopOrderEventMaxAggregateInputType = {
    id?: true;
    orderId?: true;
    eventType?: true;
    oldStatus?: true;
    newStatus?: true;
    performedById?: true;
    notes?: true;
    createdAt?: true;
};
export type ShopOrderEventCountAggregateInputType = {
    id?: true;
    orderId?: true;
    eventType?: true;
    oldStatus?: true;
    newStatus?: true;
    performedById?: true;
    notes?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopOrderEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrderEvent to aggregate.
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderEvents to fetch.
     */
    orderBy?: Prisma.ShopOrderEventOrderByWithRelationInput | Prisma.ShopOrderEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopOrderEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopOrderEvents
    **/
    _count?: true | ShopOrderEventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopOrderEventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopOrderEventMaxAggregateInputType;
};
export type GetShopOrderEventAggregateType<T extends ShopOrderEventAggregateArgs> = {
    [P in keyof T & keyof AggregateShopOrderEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopOrderEvent[P]> : Prisma.GetScalarType<T[P], AggregateShopOrderEvent[P]>;
};
export type ShopOrderEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderEventWhereInput;
    orderBy?: Prisma.ShopOrderEventOrderByWithAggregationInput | Prisma.ShopOrderEventOrderByWithAggregationInput[];
    by: Prisma.ShopOrderEventScalarFieldEnum[] | Prisma.ShopOrderEventScalarFieldEnum;
    having?: Prisma.ShopOrderEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopOrderEventCountAggregateInputType | true;
    _min?: ShopOrderEventMinAggregateInputType;
    _max?: ShopOrderEventMaxAggregateInputType;
};
export type ShopOrderEventGroupByOutputType = {
    id: string;
    orderId: string;
    eventType: string;
    oldStatus: string | null;
    newStatus: string | null;
    performedById: string | null;
    notes: string | null;
    createdAt: Date;
    _count: ShopOrderEventCountAggregateOutputType | null;
    _min: ShopOrderEventMinAggregateOutputType | null;
    _max: ShopOrderEventMaxAggregateOutputType | null;
};
export type GetShopOrderEventGroupByPayload<T extends ShopOrderEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopOrderEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopOrderEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopOrderEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopOrderEventGroupByOutputType[P]>;
}>>;
export type ShopOrderEventWhereInput = {
    AND?: Prisma.ShopOrderEventWhereInput | Prisma.ShopOrderEventWhereInput[];
    OR?: Prisma.ShopOrderEventWhereInput[];
    NOT?: Prisma.ShopOrderEventWhereInput | Prisma.ShopOrderEventWhereInput[];
    id?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    orderId?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    eventType?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    oldStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    newStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    notes?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderEvent"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
    performedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
};
export type ShopOrderEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    newStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    order?: Prisma.ShopOrderOrderByWithRelationInput;
    performedBy?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopOrderEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopOrderEventWhereInput | Prisma.ShopOrderEventWhereInput[];
    OR?: Prisma.ShopOrderEventWhereInput[];
    NOT?: Prisma.ShopOrderEventWhereInput | Prisma.ShopOrderEventWhereInput[];
    orderId?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    eventType?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    oldStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    newStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    notes?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderEvent"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
    performedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
}, "id">;
export type ShopOrderEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    newStatus?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopOrderEventCountOrderByAggregateInput;
    _max?: Prisma.ShopOrderEventMaxOrderByAggregateInput;
    _min?: Prisma.ShopOrderEventMinOrderByAggregateInput;
};
export type ShopOrderEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopOrderEventScalarWhereWithAggregatesInput | Prisma.ShopOrderEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopOrderEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopOrderEventScalarWhereWithAggregatesInput | Prisma.ShopOrderEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopOrderEvent"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"ShopOrderEvent"> | string;
    eventType?: Prisma.StringWithAggregatesFilter<"ShopOrderEvent"> | string;
    oldStatus?: Prisma.StringNullableWithAggregatesFilter<"ShopOrderEvent"> | string | null;
    newStatus?: Prisma.StringNullableWithAggregatesFilter<"ShopOrderEvent"> | string | null;
    performedById?: Prisma.StringNullableWithAggregatesFilter<"ShopOrderEvent"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ShopOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopOrderEvent"> | Date | string;
};
export type ShopOrderEventCreateInput = {
    id?: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutEventsInput;
    performedBy?: Prisma.ShopUserCreateNestedOneWithoutOrderEventsInput;
};
export type ShopOrderEventUncheckedCreateInput = {
    id?: string;
    orderId: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    performedById?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutEventsNestedInput;
    performedBy?: Prisma.ShopUserUpdateOneWithoutOrderEventsNestedInput;
};
export type ShopOrderEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventCreateManyInput = {
    id?: string;
    orderId: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    performedById?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventListRelationFilter = {
    every?: Prisma.ShopOrderEventWhereInput;
    some?: Prisma.ShopOrderEventWhereInput;
    none?: Prisma.ShopOrderEventWhereInput;
};
export type ShopOrderEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopOrderEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    oldStatus?: Prisma.SortOrder;
    newStatus?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopOrderEventCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput> | Prisma.ShopOrderEventCreateWithoutPerformedByInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput | Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopOrderEventCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
};
export type ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput> | Prisma.ShopOrderEventCreateWithoutPerformedByInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput | Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopOrderEventCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
};
export type ShopOrderEventUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput> | Prisma.ShopOrderEventCreateWithoutPerformedByInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput | Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopOrderEventCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    delete?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    update?: Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopOrderEventUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopOrderEventUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
};
export type ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput> | Prisma.ShopOrderEventCreateWithoutPerformedByInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput | Prisma.ShopOrderEventCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopOrderEventCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    delete?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    update?: Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopOrderEventUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopOrderEventUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
};
export type ShopOrderEventCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderEventCreateWithoutOrderInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput | Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopOrderEventCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
};
export type ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderEventCreateWithoutOrderInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput | Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.ShopOrderEventCreateManyOrderInputEnvelope;
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
};
export type ShopOrderEventUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderEventCreateWithoutOrderInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput | Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopOrderEventCreateManyOrderInputEnvelope;
    set?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    delete?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    update?: Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopOrderEventUpdateManyWithWhereWithoutOrderInput | Prisma.ShopOrderEventUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
};
export type ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput> | Prisma.ShopOrderEventCreateWithoutOrderInput[] | Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput | Prisma.ShopOrderEventCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderEventUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.ShopOrderEventCreateManyOrderInputEnvelope;
    set?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    delete?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    connect?: Prisma.ShopOrderEventWhereUniqueInput | Prisma.ShopOrderEventWhereUniqueInput[];
    update?: Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutOrderInput | Prisma.ShopOrderEventUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.ShopOrderEventUpdateManyWithWhereWithoutOrderInput | Prisma.ShopOrderEventUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
};
export type ShopOrderEventCreateWithoutPerformedByInput = {
    id?: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutEventsInput;
};
export type ShopOrderEventUncheckedCreateWithoutPerformedByInput = {
    id?: string;
    orderId: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventCreateOrConnectWithoutPerformedByInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput>;
};
export type ShopOrderEventCreateManyPerformedByInputEnvelope = {
    data: Prisma.ShopOrderEventCreateManyPerformedByInput | Prisma.ShopOrderEventCreateManyPerformedByInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderEventUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderEventUpdateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedUpdateWithoutPerformedByInput>;
    create: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedCreateWithoutPerformedByInput>;
};
export type ShopOrderEventUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateWithoutPerformedByInput, Prisma.ShopOrderEventUncheckedUpdateWithoutPerformedByInput>;
};
export type ShopOrderEventUpdateManyWithWhereWithoutPerformedByInput = {
    where: Prisma.ShopOrderEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateManyMutationInput, Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByInput>;
};
export type ShopOrderEventScalarWhereInput = {
    AND?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
    OR?: Prisma.ShopOrderEventScalarWhereInput[];
    NOT?: Prisma.ShopOrderEventScalarWhereInput | Prisma.ShopOrderEventScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    orderId?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    eventType?: Prisma.StringFilter<"ShopOrderEvent"> | string;
    oldStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    newStatus?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    notes?: Prisma.StringNullableFilter<"ShopOrderEvent"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopOrderEvent"> | Date | string;
};
export type ShopOrderEventCreateWithoutOrderInput = {
    id?: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    performedBy?: Prisma.ShopUserCreateNestedOneWithoutOrderEventsInput;
};
export type ShopOrderEventUncheckedCreateWithoutOrderInput = {
    id?: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    performedById?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventCreateOrConnectWithoutOrderInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput>;
};
export type ShopOrderEventCreateManyOrderInputEnvelope = {
    data: Prisma.ShopOrderEventCreateManyOrderInput | Prisma.ShopOrderEventCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderEventUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderEventUpdateWithoutOrderInput, Prisma.ShopOrderEventUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ShopOrderEventCreateWithoutOrderInput, Prisma.ShopOrderEventUncheckedCreateWithoutOrderInput>;
};
export type ShopOrderEventUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.ShopOrderEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateWithoutOrderInput, Prisma.ShopOrderEventUncheckedUpdateWithoutOrderInput>;
};
export type ShopOrderEventUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.ShopOrderEventScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateManyMutationInput, Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderInput>;
};
export type ShopOrderEventCreateManyPerformedByInput = {
    id?: string;
    orderId: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutEventsNestedInput;
};
export type ShopOrderEventUncheckedUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventUncheckedUpdateManyWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventCreateManyOrderInput = {
    id?: string;
    eventType: string;
    oldStatus?: string | null;
    newStatus?: string | null;
    performedById?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type ShopOrderEventUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.ShopUserUpdateOneWithoutOrderEventsNestedInput;
};
export type ShopOrderEventUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    oldStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    newStatus?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopOrderEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    performedById?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderEvent"]>;
export type ShopOrderEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    performedById?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderEvent"]>;
export type ShopOrderEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    performedById?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrderEvent"]>;
export type ShopOrderEventSelectScalar = {
    id?: boolean;
    orderId?: boolean;
    eventType?: boolean;
    oldStatus?: boolean;
    newStatus?: boolean;
    performedById?: boolean;
    notes?: boolean;
    createdAt?: boolean;
};
export type ShopOrderEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orderId" | "eventType" | "oldStatus" | "newStatus" | "performedById" | "notes" | "createdAt", ExtArgs["result"]["shopOrderEvent"]>;
export type ShopOrderEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
};
export type ShopOrderEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
};
export type ShopOrderEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopOrderEvent$performedByArgs<ExtArgs>;
};
export type $ShopOrderEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopOrderEvent";
    objects: {
        order: Prisma.$ShopOrderPayload<ExtArgs>;
        performedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orderId: string;
        eventType: string;
        oldStatus: string | null;
        newStatus: string | null;
        performedById: string | null;
        notes: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shopOrderEvent"]>;
    composites: {};
};
export type ShopOrderEventGetPayload<S extends boolean | null | undefined | ShopOrderEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload, S>;
export type ShopOrderEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopOrderEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopOrderEventCountAggregateInputType | true;
};
export interface ShopOrderEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopOrderEvent'];
        meta: {
            name: 'ShopOrderEvent';
        };
    };
    /**
     * Find zero or one ShopOrderEvent that matches the filter.
     * @param {ShopOrderEventFindUniqueArgs} args - Arguments to find a ShopOrderEvent
     * @example
     * // Get one ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopOrderEventFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopOrderEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopOrderEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopOrderEventFindUniqueOrThrowArgs} args - Arguments to find a ShopOrderEvent
     * @example
     * // Get one ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopOrderEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopOrderEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrderEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventFindFirstArgs} args - Arguments to find a ShopOrderEvent
     * @example
     * // Get one ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopOrderEventFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrderEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventFindFirstOrThrowArgs} args - Arguments to find a ShopOrderEvent
     * @example
     * // Get one ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopOrderEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopOrderEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOrderEvents
     * const shopOrderEvents = await prisma.shopOrderEvent.findMany()
     *
     * // Get first 10 ShopOrderEvents
     * const shopOrderEvents = await prisma.shopOrderEvent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopOrderEventWithIdOnly = await prisma.shopOrderEvent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopOrderEventFindManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopOrderEvent.
     * @param {ShopOrderEventCreateArgs} args - Arguments to create a ShopOrderEvent.
     * @example
     * // Create one ShopOrderEvent
     * const ShopOrderEvent = await prisma.shopOrderEvent.create({
     *   data: {
     *     // ... data to create a ShopOrderEvent
     *   }
     * })
     *
     */
    create<T extends ShopOrderEventCreateArgs>(args: Prisma.SelectSubset<T, ShopOrderEventCreateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopOrderEvents.
     * @param {ShopOrderEventCreateManyArgs} args - Arguments to create many ShopOrderEvents.
     * @example
     * // Create many ShopOrderEvents
     * const shopOrderEvent = await prisma.shopOrderEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopOrderEventCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopOrderEvents and returns the data saved in the database.
     * @param {ShopOrderEventCreateManyAndReturnArgs} args - Arguments to create many ShopOrderEvents.
     * @example
     * // Create many ShopOrderEvents
     * const shopOrderEvent = await prisma.shopOrderEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopOrderEvents and only return the `id`
     * const shopOrderEventWithIdOnly = await prisma.shopOrderEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopOrderEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopOrderEvent.
     * @param {ShopOrderEventDeleteArgs} args - Arguments to delete one ShopOrderEvent.
     * @example
     * // Delete one ShopOrderEvent
     * const ShopOrderEvent = await prisma.shopOrderEvent.delete({
     *   where: {
     *     // ... filter to delete one ShopOrderEvent
     *   }
     * })
     *
     */
    delete<T extends ShopOrderEventDeleteArgs>(args: Prisma.SelectSubset<T, ShopOrderEventDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopOrderEvent.
     * @param {ShopOrderEventUpdateArgs} args - Arguments to update one ShopOrderEvent.
     * @example
     * // Update one ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopOrderEventUpdateArgs>(args: Prisma.SelectSubset<T, ShopOrderEventUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopOrderEvents.
     * @param {ShopOrderEventDeleteManyArgs} args - Arguments to filter ShopOrderEvents to delete.
     * @example
     * // Delete a few ShopOrderEvents
     * const { count } = await prisma.shopOrderEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopOrderEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOrderEvents
     * const shopOrderEvent = await prisma.shopOrderEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopOrderEventUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopOrderEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrderEvents and returns the data updated in the database.
     * @param {ShopOrderEventUpdateManyAndReturnArgs} args - Arguments to update many ShopOrderEvents.
     * @example
     * // Update many ShopOrderEvents
     * const shopOrderEvent = await prisma.shopOrderEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopOrderEvents and only return the `id`
     * const shopOrderEventWithIdOnly = await prisma.shopOrderEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopOrderEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopOrderEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopOrderEvent.
     * @param {ShopOrderEventUpsertArgs} args - Arguments to update or create a ShopOrderEvent.
     * @example
     * // Update or create a ShopOrderEvent
     * const shopOrderEvent = await prisma.shopOrderEvent.upsert({
     *   create: {
     *     // ... data to create a ShopOrderEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOrderEvent we want to update
     *   }
     * })
     */
    upsert<T extends ShopOrderEventUpsertArgs>(args: Prisma.SelectSubset<T, ShopOrderEventUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopOrderEventClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopOrderEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventCountArgs} args - Arguments to filter ShopOrderEvents to count.
     * @example
     * // Count the number of ShopOrderEvents
     * const count = await prisma.shopOrderEvent.count({
     *   where: {
     *     // ... the filter for the ShopOrderEvents we want to count
     *   }
     * })
    **/
    count<T extends ShopOrderEventCountArgs>(args?: Prisma.Subset<T, ShopOrderEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopOrderEventCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopOrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopOrderEventAggregateArgs>(args: Prisma.Subset<T, ShopOrderEventAggregateArgs>): Prisma.PrismaPromise<GetShopOrderEventAggregateType<T>>;
    /**
     * Group by ShopOrderEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderEventGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopOrderEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopOrderEventGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopOrderEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopOrderEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOrderEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopOrderEvent model
     */
    readonly fields: ShopOrderEventFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopOrderEvent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopOrderEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.ShopOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    performedBy<T extends Prisma.ShopOrderEvent$performedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrderEvent$performedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopOrderEvent model
 */
export interface ShopOrderEventFieldRefs {
    readonly id: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly orderId: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly eventType: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly oldStatus: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly newStatus: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly performedById: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly notes: Prisma.FieldRef<"ShopOrderEvent", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShopOrderEvent", 'DateTime'>;
}
/**
 * ShopOrderEvent findUnique
 */
export type ShopOrderEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderEvent to fetch.
     */
    where: Prisma.ShopOrderEventWhereUniqueInput;
};
/**
 * ShopOrderEvent findUniqueOrThrow
 */
export type ShopOrderEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderEvent to fetch.
     */
    where: Prisma.ShopOrderEventWhereUniqueInput;
};
/**
 * ShopOrderEvent findFirst
 */
export type ShopOrderEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderEvent to fetch.
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderEvents to fetch.
     */
    orderBy?: Prisma.ShopOrderEventOrderByWithRelationInput | Prisma.ShopOrderEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrderEvents.
     */
    cursor?: Prisma.ShopOrderEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderEvents.
     */
    distinct?: Prisma.ShopOrderEventScalarFieldEnum | Prisma.ShopOrderEventScalarFieldEnum[];
};
/**
 * ShopOrderEvent findFirstOrThrow
 */
export type ShopOrderEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderEvent to fetch.
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderEvents to fetch.
     */
    orderBy?: Prisma.ShopOrderEventOrderByWithRelationInput | Prisma.ShopOrderEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrderEvents.
     */
    cursor?: Prisma.ShopOrderEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderEvents.
     */
    distinct?: Prisma.ShopOrderEventScalarFieldEnum | Prisma.ShopOrderEventScalarFieldEnum[];
};
/**
 * ShopOrderEvent findMany
 */
export type ShopOrderEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter, which ShopOrderEvents to fetch.
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrderEvents to fetch.
     */
    orderBy?: Prisma.ShopOrderEventOrderByWithRelationInput | Prisma.ShopOrderEventOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopOrderEvents.
     */
    cursor?: Prisma.ShopOrderEventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrderEvents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrderEvents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrderEvents.
     */
    distinct?: Prisma.ShopOrderEventScalarFieldEnum | Prisma.ShopOrderEventScalarFieldEnum[];
};
/**
 * ShopOrderEvent create
 */
export type ShopOrderEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopOrderEvent.
     */
    data: Prisma.XOR<Prisma.ShopOrderEventCreateInput, Prisma.ShopOrderEventUncheckedCreateInput>;
};
/**
 * ShopOrderEvent createMany
 */
export type ShopOrderEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopOrderEvents.
     */
    data: Prisma.ShopOrderEventCreateManyInput | Prisma.ShopOrderEventCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopOrderEvent createManyAndReturn
 */
export type ShopOrderEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopOrderEvents.
     */
    data: Prisma.ShopOrderEventCreateManyInput | Prisma.ShopOrderEventCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrderEvent update
 */
export type ShopOrderEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopOrderEvent.
     */
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateInput, Prisma.ShopOrderEventUncheckedUpdateInput>;
    /**
     * Choose, which ShopOrderEvent to update.
     */
    where: Prisma.ShopOrderEventWhereUniqueInput;
};
/**
 * ShopOrderEvent updateMany
 */
export type ShopOrderEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOrderEvents.
     */
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateManyMutationInput, Prisma.ShopOrderEventUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrderEvents to update
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * Limit how many ShopOrderEvents to update.
     */
    limit?: number;
};
/**
 * ShopOrderEvent updateManyAndReturn
 */
export type ShopOrderEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * The data used to update ShopOrderEvents.
     */
    data: Prisma.XOR<Prisma.ShopOrderEventUpdateManyMutationInput, Prisma.ShopOrderEventUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrderEvents to update
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * Limit how many ShopOrderEvents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrderEvent upsert
 */
export type ShopOrderEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopOrderEvent to update in case it exists.
     */
    where: Prisma.ShopOrderEventWhereUniqueInput;
    /**
     * In case the ShopOrderEvent found by the `where` argument doesn't exist, create a new ShopOrderEvent with this data.
     */
    create: Prisma.XOR<Prisma.ShopOrderEventCreateInput, Prisma.ShopOrderEventUncheckedCreateInput>;
    /**
     * In case the ShopOrderEvent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopOrderEventUpdateInput, Prisma.ShopOrderEventUncheckedUpdateInput>;
};
/**
 * ShopOrderEvent delete
 */
export type ShopOrderEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
    /**
     * Filter which ShopOrderEvent to delete.
     */
    where: Prisma.ShopOrderEventWhereUniqueInput;
};
/**
 * ShopOrderEvent deleteMany
 */
export type ShopOrderEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrderEvents to delete
     */
    where?: Prisma.ShopOrderEventWhereInput;
    /**
     * Limit how many ShopOrderEvents to delete.
     */
    limit?: number;
};
/**
 * ShopOrderEvent.performedBy
 */
export type ShopOrderEvent$performedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrderEvent without action
 */
export type ShopOrderEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderEvent
     */
    select?: Prisma.ShopOrderEventSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrderEvent
     */
    omit?: Prisma.ShopOrderEventOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderEventInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopOrderEvent.d.ts.map