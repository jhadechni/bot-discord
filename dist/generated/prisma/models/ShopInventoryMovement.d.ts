import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopInventoryMovement
 *
 */
export type ShopInventoryMovementModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopInventoryMovementPayload>;
export type AggregateShopInventoryMovement = {
    _count: ShopInventoryMovementCountAggregateOutputType | null;
    _avg: ShopInventoryMovementAvgAggregateOutputType | null;
    _sum: ShopInventoryMovementSumAggregateOutputType | null;
    _min: ShopInventoryMovementMinAggregateOutputType | null;
    _max: ShopInventoryMovementMaxAggregateOutputType | null;
};
export type ShopInventoryMovementAvgAggregateOutputType = {
    quantity: number | null;
};
export type ShopInventoryMovementSumAggregateOutputType = {
    quantity: number | null;
};
export type ShopInventoryMovementMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    movementType: string | null;
    quantity: number | null;
    reason: string | null;
    relatedOrderId: string | null;
    performedById: string | null;
    createdAt: Date | null;
};
export type ShopInventoryMovementMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    movementType: string | null;
    quantity: number | null;
    reason: string | null;
    relatedOrderId: string | null;
    performedById: string | null;
    createdAt: Date | null;
};
export type ShopInventoryMovementCountAggregateOutputType = {
    id: number;
    guildId: number;
    materialId: number;
    movementType: number;
    quantity: number;
    reason: number;
    relatedOrderId: number;
    performedById: number;
    createdAt: number;
    _all: number;
};
export type ShopInventoryMovementAvgAggregateInputType = {
    quantity?: true;
};
export type ShopInventoryMovementSumAggregateInputType = {
    quantity?: true;
};
export type ShopInventoryMovementMinAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    movementType?: true;
    quantity?: true;
    reason?: true;
    relatedOrderId?: true;
    performedById?: true;
    createdAt?: true;
};
export type ShopInventoryMovementMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    movementType?: true;
    quantity?: true;
    reason?: true;
    relatedOrderId?: true;
    performedById?: true;
    createdAt?: true;
};
export type ShopInventoryMovementCountAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    movementType?: true;
    quantity?: true;
    reason?: true;
    relatedOrderId?: true;
    performedById?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopInventoryMovementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopInventoryMovement to aggregate.
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventoryMovements to fetch.
     */
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventoryMovements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventoryMovements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopInventoryMovements
    **/
    _count?: true | ShopInventoryMovementCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopInventoryMovementAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopInventoryMovementSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopInventoryMovementMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopInventoryMovementMaxAggregateInputType;
};
export type GetShopInventoryMovementAggregateType<T extends ShopInventoryMovementAggregateArgs> = {
    [P in keyof T & keyof AggregateShopInventoryMovement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopInventoryMovement[P]> : Prisma.GetScalarType<T[P], AggregateShopInventoryMovement[P]>;
};
export type ShopInventoryMovementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopInventoryMovementWhereInput;
    orderBy?: Prisma.ShopInventoryMovementOrderByWithAggregationInput | Prisma.ShopInventoryMovementOrderByWithAggregationInput[];
    by: Prisma.ShopInventoryMovementScalarFieldEnum[] | Prisma.ShopInventoryMovementScalarFieldEnum;
    having?: Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopInventoryMovementCountAggregateInputType | true;
    _avg?: ShopInventoryMovementAvgAggregateInputType;
    _sum?: ShopInventoryMovementSumAggregateInputType;
    _min?: ShopInventoryMovementMinAggregateInputType;
    _max?: ShopInventoryMovementMaxAggregateInputType;
};
export type ShopInventoryMovementGroupByOutputType = {
    id: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason: string | null;
    relatedOrderId: string | null;
    performedById: string | null;
    createdAt: Date;
    _count: ShopInventoryMovementCountAggregateOutputType | null;
    _avg: ShopInventoryMovementAvgAggregateOutputType | null;
    _sum: ShopInventoryMovementSumAggregateOutputType | null;
    _min: ShopInventoryMovementMinAggregateOutputType | null;
    _max: ShopInventoryMovementMaxAggregateOutputType | null;
};
export type GetShopInventoryMovementGroupByPayload<T extends ShopInventoryMovementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopInventoryMovementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopInventoryMovementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopInventoryMovementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopInventoryMovementGroupByOutputType[P]>;
}>>;
export type ShopInventoryMovementWhereInput = {
    AND?: Prisma.ShopInventoryMovementWhereInput | Prisma.ShopInventoryMovementWhereInput[];
    OR?: Prisma.ShopInventoryMovementWhereInput[];
    NOT?: Prisma.ShopInventoryMovementWhereInput | Prisma.ShopInventoryMovementWhereInput[];
    id?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    guildId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    materialId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    movementType?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"ShopInventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    relatedOrderId?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopInventoryMovement"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    relatedOrder?: Prisma.XOR<Prisma.ShopOrderNullableScalarRelationFilter, Prisma.ShopOrderWhereInput> | null;
    performedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
};
export type ShopInventoryMovementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    movementType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    relatedOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    material?: Prisma.ShopMaterialOrderByWithRelationInput;
    relatedOrder?: Prisma.ShopOrderOrderByWithRelationInput;
    performedBy?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopInventoryMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopInventoryMovementWhereInput | Prisma.ShopInventoryMovementWhereInput[];
    OR?: Prisma.ShopInventoryMovementWhereInput[];
    NOT?: Prisma.ShopInventoryMovementWhereInput | Prisma.ShopInventoryMovementWhereInput[];
    guildId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    materialId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    movementType?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"ShopInventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    relatedOrderId?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopInventoryMovement"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    relatedOrder?: Prisma.XOR<Prisma.ShopOrderNullableScalarRelationFilter, Prisma.ShopOrderWhereInput> | null;
    performedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
}, "id">;
export type ShopInventoryMovementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    movementType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    relatedOrderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedById?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopInventoryMovementCountOrderByAggregateInput;
    _avg?: Prisma.ShopInventoryMovementAvgOrderByAggregateInput;
    _max?: Prisma.ShopInventoryMovementMaxOrderByAggregateInput;
    _min?: Prisma.ShopInventoryMovementMinOrderByAggregateInput;
    _sum?: Prisma.ShopInventoryMovementSumOrderByAggregateInput;
};
export type ShopInventoryMovementScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput | Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput | Prisma.ShopInventoryMovementScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopInventoryMovement"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopInventoryMovement"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"ShopInventoryMovement"> | string;
    movementType?: Prisma.StringWithAggregatesFilter<"ShopInventoryMovement"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"ShopInventoryMovement"> | number;
    reason?: Prisma.StringNullableWithAggregatesFilter<"ShopInventoryMovement"> | string | null;
    relatedOrderId?: Prisma.StringNullableWithAggregatesFilter<"ShopInventoryMovement"> | string | null;
    performedById?: Prisma.StringNullableWithAggregatesFilter<"ShopInventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopInventoryMovement"> | Date | string;
};
export type ShopInventoryMovementCreateInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutMovementsInput;
    relatedOrder?: Prisma.ShopOrderCreateNestedOneWithoutMovementsInput;
    performedBy?: Prisma.ShopUserCreateNestedOneWithoutMovementsInput;
};
export type ShopInventoryMovementUncheckedCreateInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutMovementsNestedInput;
    relatedOrder?: Prisma.ShopOrderUpdateOneWithoutMovementsNestedInput;
    performedBy?: Prisma.ShopUserUpdateOneWithoutMovementsNestedInput;
};
export type ShopInventoryMovementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementCreateManyInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementListRelationFilter = {
    every?: Prisma.ShopInventoryMovementWhereInput;
    some?: Prisma.ShopInventoryMovementWhereInput;
    none?: Prisma.ShopInventoryMovementWhereInput;
};
export type ShopInventoryMovementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopInventoryMovementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    movementType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    relatedOrderId?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopInventoryMovementAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShopInventoryMovementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    movementType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    relatedOrderId?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopInventoryMovementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    movementType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    relatedOrderId?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopInventoryMovementSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShopInventoryMovementCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput> | Prisma.ShopInventoryMovementCreateWithoutPerformedByInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput> | Prisma.ShopInventoryMovementCreateWithoutPerformedByInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput> | Prisma.ShopInventoryMovementCreateWithoutPerformedByInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput> | Prisma.ShopInventoryMovementCreateWithoutPerformedByInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput> | Prisma.ShopInventoryMovementCreateWithoutMaterialInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput> | Prisma.ShopInventoryMovementCreateWithoutMaterialInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput> | Prisma.ShopInventoryMovementCreateWithoutMaterialInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput> | Prisma.ShopInventoryMovementCreateWithoutMaterialInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput> | Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyRelatedOrderInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput> | Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyRelatedOrderInputEnvelope;
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
};
export type ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput> | Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutRelatedOrderInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyRelatedOrderInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutRelatedOrderInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutRelatedOrderInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput> | Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput[] | Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput[];
    connectOrCreate?: Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput | Prisma.ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput[];
    upsert?: Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpsertWithWhereUniqueWithoutRelatedOrderInput[];
    createMany?: Prisma.ShopInventoryMovementCreateManyRelatedOrderInputEnvelope;
    set?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    disconnect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    delete?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    connect?: Prisma.ShopInventoryMovementWhereUniqueInput | Prisma.ShopInventoryMovementWhereUniqueInput[];
    update?: Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpdateWithWhereUniqueWithoutRelatedOrderInput[];
    updateMany?: Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutRelatedOrderInput | Prisma.ShopInventoryMovementUpdateManyWithWhereWithoutRelatedOrderInput[];
    deleteMany?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
};
export type ShopInventoryMovementCreateWithoutPerformedByInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutMovementsInput;
    relatedOrder?: Prisma.ShopOrderCreateNestedOneWithoutMovementsInput;
};
export type ShopInventoryMovementUncheckedCreateWithoutPerformedByInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementCreateOrConnectWithoutPerformedByInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput>;
};
export type ShopInventoryMovementCreateManyPerformedByInputEnvelope = {
    data: Prisma.ShopInventoryMovementCreateManyPerformedByInput | Prisma.ShopInventoryMovementCreateManyPerformedByInput[];
    skipDuplicates?: boolean;
};
export type ShopInventoryMovementUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutPerformedByInput>;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutPerformedByInput>;
};
export type ShopInventoryMovementUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutPerformedByInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutPerformedByInput>;
};
export type ShopInventoryMovementUpdateManyWithWhereWithoutPerformedByInput = {
    where: Prisma.ShopInventoryMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateManyMutationInput, Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByInput>;
};
export type ShopInventoryMovementScalarWhereInput = {
    AND?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
    OR?: Prisma.ShopInventoryMovementScalarWhereInput[];
    NOT?: Prisma.ShopInventoryMovementScalarWhereInput | Prisma.ShopInventoryMovementScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    guildId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    materialId?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    movementType?: Prisma.StringFilter<"ShopInventoryMovement"> | string;
    quantity?: Prisma.IntFilter<"ShopInventoryMovement"> | number;
    reason?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    relatedOrderId?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    performedById?: Prisma.StringNullableFilter<"ShopInventoryMovement"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopInventoryMovement"> | Date | string;
};
export type ShopInventoryMovementCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    relatedOrder?: Prisma.ShopOrderCreateNestedOneWithoutMovementsInput;
    performedBy?: Prisma.ShopUserCreateNestedOneWithoutMovementsInput;
};
export type ShopInventoryMovementUncheckedCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementCreateOrConnectWithoutMaterialInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput>;
};
export type ShopInventoryMovementCreateManyMaterialInputEnvelope = {
    data: Prisma.ShopInventoryMovementCreateManyMaterialInput | Prisma.ShopInventoryMovementCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type ShopInventoryMovementUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutMaterialInput>;
};
export type ShopInventoryMovementUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutMaterialInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutMaterialInput>;
};
export type ShopInventoryMovementUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.ShopInventoryMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateManyMutationInput, Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialInput>;
};
export type ShopInventoryMovementCreateWithoutRelatedOrderInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    createdAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutMovementsInput;
    performedBy?: Prisma.ShopUserCreateNestedOneWithoutMovementsInput;
};
export type ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementCreateOrConnectWithoutRelatedOrderInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput>;
};
export type ShopInventoryMovementCreateManyRelatedOrderInputEnvelope = {
    data: Prisma.ShopInventoryMovementCreateManyRelatedOrderInput | Prisma.ShopInventoryMovementCreateManyRelatedOrderInput[];
    skipDuplicates?: boolean;
};
export type ShopInventoryMovementUpsertWithWhereUniqueWithoutRelatedOrderInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutRelatedOrderInput>;
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedCreateWithoutRelatedOrderInput>;
};
export type ShopInventoryMovementUpdateWithWhereUniqueWithoutRelatedOrderInput = {
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateWithoutRelatedOrderInput, Prisma.ShopInventoryMovementUncheckedUpdateWithoutRelatedOrderInput>;
};
export type ShopInventoryMovementUpdateManyWithWhereWithoutRelatedOrderInput = {
    where: Prisma.ShopInventoryMovementScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateManyMutationInput, Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderInput>;
};
export type ShopInventoryMovementCreateManyPerformedByInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutMovementsNestedInput;
    relatedOrder?: Prisma.ShopOrderUpdateOneWithoutMovementsNestedInput;
};
export type ShopInventoryMovementUncheckedUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementCreateManyMaterialInput = {
    id?: string;
    guildId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    relatedOrderId?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    relatedOrder?: Prisma.ShopOrderUpdateOneWithoutMovementsNestedInput;
    performedBy?: Prisma.ShopUserUpdateOneWithoutMovementsNestedInput;
};
export type ShopInventoryMovementUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    relatedOrderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementCreateManyRelatedOrderInput = {
    id?: string;
    guildId: string;
    materialId: string;
    movementType: string;
    quantity: number;
    reason?: string | null;
    performedById?: string | null;
    createdAt?: Date | string;
};
export type ShopInventoryMovementUpdateWithoutRelatedOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutMovementsNestedInput;
    performedBy?: Prisma.ShopUserUpdateOneWithoutMovementsNestedInput;
};
export type ShopInventoryMovementUncheckedUpdateWithoutRelatedOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    movementType?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedById?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryMovementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    movementType?: boolean;
    quantity?: boolean;
    reason?: boolean;
    relatedOrderId?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventoryMovement"]>;
export type ShopInventoryMovementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    movementType?: boolean;
    quantity?: boolean;
    reason?: boolean;
    relatedOrderId?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventoryMovement"]>;
export type ShopInventoryMovementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    movementType?: boolean;
    quantity?: boolean;
    reason?: boolean;
    relatedOrderId?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventoryMovement"]>;
export type ShopInventoryMovementSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    movementType?: boolean;
    quantity?: boolean;
    reason?: boolean;
    relatedOrderId?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
};
export type ShopInventoryMovementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "materialId" | "movementType" | "quantity" | "reason" | "relatedOrderId" | "performedById" | "createdAt", ExtArgs["result"]["shopInventoryMovement"]>;
export type ShopInventoryMovementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
};
export type ShopInventoryMovementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
};
export type ShopInventoryMovementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    relatedOrder?: boolean | Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>;
};
export type $ShopInventoryMovementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopInventoryMovement";
    objects: {
        material: Prisma.$ShopMaterialPayload<ExtArgs>;
        relatedOrder: Prisma.$ShopOrderPayload<ExtArgs> | null;
        performedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        materialId: string;
        movementType: string;
        quantity: number;
        reason: string | null;
        relatedOrderId: string | null;
        performedById: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shopInventoryMovement"]>;
    composites: {};
};
export type ShopInventoryMovementGetPayload<S extends boolean | null | undefined | ShopInventoryMovementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload, S>;
export type ShopInventoryMovementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopInventoryMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopInventoryMovementCountAggregateInputType | true;
};
export interface ShopInventoryMovementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopInventoryMovement'];
        meta: {
            name: 'ShopInventoryMovement';
        };
    };
    /**
     * Find zero or one ShopInventoryMovement that matches the filter.
     * @param {ShopInventoryMovementFindUniqueArgs} args - Arguments to find a ShopInventoryMovement
     * @example
     * // Get one ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopInventoryMovementFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopInventoryMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopInventoryMovementFindUniqueOrThrowArgs} args - Arguments to find a ShopInventoryMovement
     * @example
     * // Get one ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopInventoryMovementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopInventoryMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementFindFirstArgs} args - Arguments to find a ShopInventoryMovement
     * @example
     * // Get one ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopInventoryMovementFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopInventoryMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementFindFirstOrThrowArgs} args - Arguments to find a ShopInventoryMovement
     * @example
     * // Get one ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopInventoryMovementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopInventoryMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopInventoryMovements
     * const shopInventoryMovements = await prisma.shopInventoryMovement.findMany()
     *
     * // Get first 10 ShopInventoryMovements
     * const shopInventoryMovements = await prisma.shopInventoryMovement.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopInventoryMovementWithIdOnly = await prisma.shopInventoryMovement.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopInventoryMovementFindManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopInventoryMovement.
     * @param {ShopInventoryMovementCreateArgs} args - Arguments to create a ShopInventoryMovement.
     * @example
     * // Create one ShopInventoryMovement
     * const ShopInventoryMovement = await prisma.shopInventoryMovement.create({
     *   data: {
     *     // ... data to create a ShopInventoryMovement
     *   }
     * })
     *
     */
    create<T extends ShopInventoryMovementCreateArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementCreateArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopInventoryMovements.
     * @param {ShopInventoryMovementCreateManyArgs} args - Arguments to create many ShopInventoryMovements.
     * @example
     * // Create many ShopInventoryMovements
     * const shopInventoryMovement = await prisma.shopInventoryMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopInventoryMovementCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopInventoryMovements and returns the data saved in the database.
     * @param {ShopInventoryMovementCreateManyAndReturnArgs} args - Arguments to create many ShopInventoryMovements.
     * @example
     * // Create many ShopInventoryMovements
     * const shopInventoryMovement = await prisma.shopInventoryMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopInventoryMovements and only return the `id`
     * const shopInventoryMovementWithIdOnly = await prisma.shopInventoryMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopInventoryMovementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopInventoryMovement.
     * @param {ShopInventoryMovementDeleteArgs} args - Arguments to delete one ShopInventoryMovement.
     * @example
     * // Delete one ShopInventoryMovement
     * const ShopInventoryMovement = await prisma.shopInventoryMovement.delete({
     *   where: {
     *     // ... filter to delete one ShopInventoryMovement
     *   }
     * })
     *
     */
    delete<T extends ShopInventoryMovementDeleteArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopInventoryMovement.
     * @param {ShopInventoryMovementUpdateArgs} args - Arguments to update one ShopInventoryMovement.
     * @example
     * // Update one ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopInventoryMovementUpdateArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopInventoryMovements.
     * @param {ShopInventoryMovementDeleteManyArgs} args - Arguments to filter ShopInventoryMovements to delete.
     * @example
     * // Delete a few ShopInventoryMovements
     * const { count } = await prisma.shopInventoryMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopInventoryMovementDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopInventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopInventoryMovements
     * const shopInventoryMovement = await prisma.shopInventoryMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopInventoryMovementUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopInventoryMovements and returns the data updated in the database.
     * @param {ShopInventoryMovementUpdateManyAndReturnArgs} args - Arguments to update many ShopInventoryMovements.
     * @example
     * // Update many ShopInventoryMovements
     * const shopInventoryMovement = await prisma.shopInventoryMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopInventoryMovements and only return the `id`
     * const shopInventoryMovementWithIdOnly = await prisma.shopInventoryMovement.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopInventoryMovementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopInventoryMovement.
     * @param {ShopInventoryMovementUpsertArgs} args - Arguments to update or create a ShopInventoryMovement.
     * @example
     * // Update or create a ShopInventoryMovement
     * const shopInventoryMovement = await prisma.shopInventoryMovement.upsert({
     *   create: {
     *     // ... data to create a ShopInventoryMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopInventoryMovement we want to update
     *   }
     * })
     */
    upsert<T extends ShopInventoryMovementUpsertArgs>(args: Prisma.SelectSubset<T, ShopInventoryMovementUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryMovementClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopInventoryMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementCountArgs} args - Arguments to filter ShopInventoryMovements to count.
     * @example
     * // Count the number of ShopInventoryMovements
     * const count = await prisma.shopInventoryMovement.count({
     *   where: {
     *     // ... the filter for the ShopInventoryMovements we want to count
     *   }
     * })
    **/
    count<T extends ShopInventoryMovementCountArgs>(args?: Prisma.Subset<T, ShopInventoryMovementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopInventoryMovementCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopInventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopInventoryMovementAggregateArgs>(args: Prisma.Subset<T, ShopInventoryMovementAggregateArgs>): Prisma.PrismaPromise<GetShopInventoryMovementAggregateType<T>>;
    /**
     * Group by ShopInventoryMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryMovementGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopInventoryMovementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopInventoryMovementGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopInventoryMovementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopInventoryMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopInventoryMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopInventoryMovement model
     */
    readonly fields: ShopInventoryMovementFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopInventoryMovement.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopInventoryMovementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.ShopMaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    relatedOrder<T extends Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopInventoryMovement$relatedOrderArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    performedBy<T extends Prisma.ShopInventoryMovement$performedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopInventoryMovement$performedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopInventoryMovement model
 */
export interface ShopInventoryMovementFieldRefs {
    readonly id: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly materialId: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly movementType: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly quantity: Prisma.FieldRef<"ShopInventoryMovement", 'Int'>;
    readonly reason: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly relatedOrderId: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly performedById: Prisma.FieldRef<"ShopInventoryMovement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShopInventoryMovement", 'DateTime'>;
}
/**
 * ShopInventoryMovement findUnique
 */
export type ShopInventoryMovementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventoryMovement to fetch.
     */
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
};
/**
 * ShopInventoryMovement findUniqueOrThrow
 */
export type ShopInventoryMovementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventoryMovement to fetch.
     */
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
};
/**
 * ShopInventoryMovement findFirst
 */
export type ShopInventoryMovementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventoryMovement to fetch.
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventoryMovements to fetch.
     */
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopInventoryMovements.
     */
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventoryMovements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventoryMovements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventoryMovements.
     */
    distinct?: Prisma.ShopInventoryMovementScalarFieldEnum | Prisma.ShopInventoryMovementScalarFieldEnum[];
};
/**
 * ShopInventoryMovement findFirstOrThrow
 */
export type ShopInventoryMovementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventoryMovement to fetch.
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventoryMovements to fetch.
     */
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopInventoryMovements.
     */
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventoryMovements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventoryMovements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventoryMovements.
     */
    distinct?: Prisma.ShopInventoryMovementScalarFieldEnum | Prisma.ShopInventoryMovementScalarFieldEnum[];
};
/**
 * ShopInventoryMovement findMany
 */
export type ShopInventoryMovementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventoryMovements to fetch.
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventoryMovements to fetch.
     */
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopInventoryMovements.
     */
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventoryMovements from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventoryMovements.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventoryMovements.
     */
    distinct?: Prisma.ShopInventoryMovementScalarFieldEnum | Prisma.ShopInventoryMovementScalarFieldEnum[];
};
/**
 * ShopInventoryMovement create
 */
export type ShopInventoryMovementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopInventoryMovement.
     */
    data: Prisma.XOR<Prisma.ShopInventoryMovementCreateInput, Prisma.ShopInventoryMovementUncheckedCreateInput>;
};
/**
 * ShopInventoryMovement createMany
 */
export type ShopInventoryMovementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopInventoryMovements.
     */
    data: Prisma.ShopInventoryMovementCreateManyInput | Prisma.ShopInventoryMovementCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopInventoryMovement createManyAndReturn
 */
export type ShopInventoryMovementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopInventoryMovements.
     */
    data: Prisma.ShopInventoryMovementCreateManyInput | Prisma.ShopInventoryMovementCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopInventoryMovement update
 */
export type ShopInventoryMovementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopInventoryMovement.
     */
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateInput, Prisma.ShopInventoryMovementUncheckedUpdateInput>;
    /**
     * Choose, which ShopInventoryMovement to update.
     */
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
};
/**
 * ShopInventoryMovement updateMany
 */
export type ShopInventoryMovementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopInventoryMovements.
     */
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateManyMutationInput, Prisma.ShopInventoryMovementUncheckedUpdateManyInput>;
    /**
     * Filter which ShopInventoryMovements to update
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * Limit how many ShopInventoryMovements to update.
     */
    limit?: number;
};
/**
 * ShopInventoryMovement updateManyAndReturn
 */
export type ShopInventoryMovementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * The data used to update ShopInventoryMovements.
     */
    data: Prisma.XOR<Prisma.ShopInventoryMovementUpdateManyMutationInput, Prisma.ShopInventoryMovementUncheckedUpdateManyInput>;
    /**
     * Filter which ShopInventoryMovements to update
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * Limit how many ShopInventoryMovements to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopInventoryMovement upsert
 */
export type ShopInventoryMovementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopInventoryMovement to update in case it exists.
     */
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
    /**
     * In case the ShopInventoryMovement found by the `where` argument doesn't exist, create a new ShopInventoryMovement with this data.
     */
    create: Prisma.XOR<Prisma.ShopInventoryMovementCreateInput, Prisma.ShopInventoryMovementUncheckedCreateInput>;
    /**
     * In case the ShopInventoryMovement was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopInventoryMovementUpdateInput, Prisma.ShopInventoryMovementUncheckedUpdateInput>;
};
/**
 * ShopInventoryMovement delete
 */
export type ShopInventoryMovementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    /**
     * Filter which ShopInventoryMovement to delete.
     */
    where: Prisma.ShopInventoryMovementWhereUniqueInput;
};
/**
 * ShopInventoryMovement deleteMany
 */
export type ShopInventoryMovementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopInventoryMovements to delete
     */
    where?: Prisma.ShopInventoryMovementWhereInput;
    /**
     * Limit how many ShopInventoryMovements to delete.
     */
    limit?: number;
};
/**
 * ShopInventoryMovement.relatedOrder
 */
export type ShopInventoryMovement$relatedOrderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopInventoryMovement.performedBy
 */
export type ShopInventoryMovement$performedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopInventoryMovement without action
 */
export type ShopInventoryMovementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopInventoryMovement.d.ts.map