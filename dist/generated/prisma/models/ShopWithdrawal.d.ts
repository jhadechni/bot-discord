import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopWithdrawal
 *
 */
export type ShopWithdrawalModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopWithdrawalPayload>;
export type AggregateShopWithdrawal = {
    _count: ShopWithdrawalCountAggregateOutputType | null;
    _avg: ShopWithdrawalAvgAggregateOutputType | null;
    _sum: ShopWithdrawalSumAggregateOutputType | null;
    _min: ShopWithdrawalMinAggregateOutputType | null;
    _max: ShopWithdrawalMaxAggregateOutputType | null;
};
export type ShopWithdrawalAvgAggregateOutputType = {
    quantity: number | null;
};
export type ShopWithdrawalSumAggregateOutputType = {
    quantity: number | null;
};
export type ShopWithdrawalMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    quantity: number | null;
    reason: string | null;
    performedById: string | null;
    createdAt: Date | null;
};
export type ShopWithdrawalMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    quantity: number | null;
    reason: string | null;
    performedById: string | null;
    createdAt: Date | null;
};
export type ShopWithdrawalCountAggregateOutputType = {
    id: number;
    guildId: number;
    materialId: number;
    quantity: number;
    reason: number;
    performedById: number;
    createdAt: number;
    _all: number;
};
export type ShopWithdrawalAvgAggregateInputType = {
    quantity?: true;
};
export type ShopWithdrawalSumAggregateInputType = {
    quantity?: true;
};
export type ShopWithdrawalMinAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    quantity?: true;
    reason?: true;
    performedById?: true;
    createdAt?: true;
};
export type ShopWithdrawalMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    quantity?: true;
    reason?: true;
    performedById?: true;
    createdAt?: true;
};
export type ShopWithdrawalCountAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    quantity?: true;
    reason?: true;
    performedById?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopWithdrawalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopWithdrawal to aggregate.
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopWithdrawals to fetch.
     */
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopWithdrawals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopWithdrawals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopWithdrawals
    **/
    _count?: true | ShopWithdrawalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopWithdrawalAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopWithdrawalSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopWithdrawalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopWithdrawalMaxAggregateInputType;
};
export type GetShopWithdrawalAggregateType<T extends ShopWithdrawalAggregateArgs> = {
    [P in keyof T & keyof AggregateShopWithdrawal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopWithdrawal[P]> : Prisma.GetScalarType<T[P], AggregateShopWithdrawal[P]>;
};
export type ShopWithdrawalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopWithdrawalWhereInput;
    orderBy?: Prisma.ShopWithdrawalOrderByWithAggregationInput | Prisma.ShopWithdrawalOrderByWithAggregationInput[];
    by: Prisma.ShopWithdrawalScalarFieldEnum[] | Prisma.ShopWithdrawalScalarFieldEnum;
    having?: Prisma.ShopWithdrawalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopWithdrawalCountAggregateInputType | true;
    _avg?: ShopWithdrawalAvgAggregateInputType;
    _sum?: ShopWithdrawalSumAggregateInputType;
    _min?: ShopWithdrawalMinAggregateInputType;
    _max?: ShopWithdrawalMaxAggregateInputType;
};
export type ShopWithdrawalGroupByOutputType = {
    id: string;
    guildId: string;
    materialId: string;
    quantity: number;
    reason: string;
    performedById: string;
    createdAt: Date;
    _count: ShopWithdrawalCountAggregateOutputType | null;
    _avg: ShopWithdrawalAvgAggregateOutputType | null;
    _sum: ShopWithdrawalSumAggregateOutputType | null;
    _min: ShopWithdrawalMinAggregateOutputType | null;
    _max: ShopWithdrawalMaxAggregateOutputType | null;
};
export type GetShopWithdrawalGroupByPayload<T extends ShopWithdrawalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopWithdrawalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopWithdrawalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopWithdrawalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopWithdrawalGroupByOutputType[P]>;
}>>;
export type ShopWithdrawalWhereInput = {
    AND?: Prisma.ShopWithdrawalWhereInput | Prisma.ShopWithdrawalWhereInput[];
    OR?: Prisma.ShopWithdrawalWhereInput[];
    NOT?: Prisma.ShopWithdrawalWhereInput | Prisma.ShopWithdrawalWhereInput[];
    id?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    guildId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    materialId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    quantity?: Prisma.IntFilter<"ShopWithdrawal"> | number;
    reason?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    performedById?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopWithdrawal"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    performedBy?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
};
export type ShopWithdrawalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    material?: Prisma.ShopMaterialOrderByWithRelationInput;
    performedBy?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopWithdrawalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopWithdrawalWhereInput | Prisma.ShopWithdrawalWhereInput[];
    OR?: Prisma.ShopWithdrawalWhereInput[];
    NOT?: Prisma.ShopWithdrawalWhereInput | Prisma.ShopWithdrawalWhereInput[];
    guildId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    materialId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    quantity?: Prisma.IntFilter<"ShopWithdrawal"> | number;
    reason?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    performedById?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopWithdrawal"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    performedBy?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
}, "id">;
export type ShopWithdrawalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopWithdrawalCountOrderByAggregateInput;
    _avg?: Prisma.ShopWithdrawalAvgOrderByAggregateInput;
    _max?: Prisma.ShopWithdrawalMaxOrderByAggregateInput;
    _min?: Prisma.ShopWithdrawalMinOrderByAggregateInput;
    _sum?: Prisma.ShopWithdrawalSumOrderByAggregateInput;
};
export type ShopWithdrawalScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopWithdrawalScalarWhereWithAggregatesInput | Prisma.ShopWithdrawalScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopWithdrawalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopWithdrawalScalarWhereWithAggregatesInput | Prisma.ShopWithdrawalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopWithdrawal"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopWithdrawal"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"ShopWithdrawal"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"ShopWithdrawal"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"ShopWithdrawal"> | string;
    performedById?: Prisma.StringWithAggregatesFilter<"ShopWithdrawal"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopWithdrawal"> | Date | string;
};
export type ShopWithdrawalCreateInput = {
    id?: string;
    guildId: string;
    quantity: number;
    reason: string;
    createdAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutWithdrawalsInput;
    performedBy: Prisma.ShopUserCreateNestedOneWithoutWithdrawalsInput;
};
export type ShopWithdrawalUncheckedCreateInput = {
    id?: string;
    guildId: string;
    materialId: string;
    quantity: number;
    reason: string;
    performedById: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutWithdrawalsNestedInput;
    performedBy?: Prisma.ShopUserUpdateOneRequiredWithoutWithdrawalsNestedInput;
};
export type ShopWithdrawalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    performedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalCreateManyInput = {
    id?: string;
    guildId: string;
    materialId: string;
    quantity: number;
    reason: string;
    performedById: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    performedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalListRelationFilter = {
    every?: Prisma.ShopWithdrawalWhereInput;
    some?: Prisma.ShopWithdrawalWhereInput;
    none?: Prisma.ShopWithdrawalWhereInput;
};
export type ShopWithdrawalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopWithdrawalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopWithdrawalAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShopWithdrawalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopWithdrawalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    performedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopWithdrawalSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type ShopWithdrawalCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput> | Prisma.ShopWithdrawalCreateWithoutPerformedByInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput | Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
};
export type ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput> | Prisma.ShopWithdrawalCreateWithoutPerformedByInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput | Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyPerformedByInputEnvelope;
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
};
export type ShopWithdrawalUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput> | Prisma.ShopWithdrawalCreateWithoutPerformedByInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput | Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    disconnect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    delete?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    update?: Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopWithdrawalUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopWithdrawalUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
};
export type ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput> | Prisma.ShopWithdrawalCreateWithoutPerformedByInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput | Prisma.ShopWithdrawalCreateOrConnectWithoutPerformedByInput[];
    upsert?: Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutPerformedByInput | Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutPerformedByInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyPerformedByInputEnvelope;
    set?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    disconnect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    delete?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    update?: Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutPerformedByInput | Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutPerformedByInput[];
    updateMany?: Prisma.ShopWithdrawalUpdateManyWithWhereWithoutPerformedByInput | Prisma.ShopWithdrawalUpdateManyWithWhereWithoutPerformedByInput[];
    deleteMany?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
};
export type ShopWithdrawalCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput> | Prisma.ShopWithdrawalCreateWithoutMaterialInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput | Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
};
export type ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput> | Prisma.ShopWithdrawalCreateWithoutMaterialInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput | Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
};
export type ShopWithdrawalUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput> | Prisma.ShopWithdrawalCreateWithoutMaterialInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput | Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    disconnect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    delete?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    update?: Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopWithdrawalUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopWithdrawalUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
};
export type ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput> | Prisma.ShopWithdrawalCreateWithoutMaterialInput[] | Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput | Prisma.ShopWithdrawalCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopWithdrawalUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopWithdrawalCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    disconnect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    delete?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    connect?: Prisma.ShopWithdrawalWhereUniqueInput | Prisma.ShopWithdrawalWhereUniqueInput[];
    update?: Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopWithdrawalUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopWithdrawalUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopWithdrawalUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
};
export type ShopWithdrawalCreateWithoutPerformedByInput = {
    id?: string;
    guildId: string;
    quantity: number;
    reason: string;
    createdAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutWithdrawalsInput;
};
export type ShopWithdrawalUncheckedCreateWithoutPerformedByInput = {
    id?: string;
    guildId: string;
    materialId: string;
    quantity: number;
    reason: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalCreateOrConnectWithoutPerformedByInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput>;
};
export type ShopWithdrawalCreateManyPerformedByInputEnvelope = {
    data: Prisma.ShopWithdrawalCreateManyPerformedByInput | Prisma.ShopWithdrawalCreateManyPerformedByInput[];
    skipDuplicates?: boolean;
};
export type ShopWithdrawalUpsertWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopWithdrawalUpdateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedUpdateWithoutPerformedByInput>;
    create: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedCreateWithoutPerformedByInput>;
};
export type ShopWithdrawalUpdateWithWhereUniqueWithoutPerformedByInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateWithoutPerformedByInput, Prisma.ShopWithdrawalUncheckedUpdateWithoutPerformedByInput>;
};
export type ShopWithdrawalUpdateManyWithWhereWithoutPerformedByInput = {
    where: Prisma.ShopWithdrawalScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateManyMutationInput, Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByInput>;
};
export type ShopWithdrawalScalarWhereInput = {
    AND?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
    OR?: Prisma.ShopWithdrawalScalarWhereInput[];
    NOT?: Prisma.ShopWithdrawalScalarWhereInput | Prisma.ShopWithdrawalScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    guildId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    materialId?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    quantity?: Prisma.IntFilter<"ShopWithdrawal"> | number;
    reason?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    performedById?: Prisma.StringFilter<"ShopWithdrawal"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopWithdrawal"> | Date | string;
};
export type ShopWithdrawalCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    quantity: number;
    reason: string;
    createdAt?: Date | string;
    performedBy: Prisma.ShopUserCreateNestedOneWithoutWithdrawalsInput;
};
export type ShopWithdrawalUncheckedCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    quantity: number;
    reason: string;
    performedById: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalCreateOrConnectWithoutMaterialInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput>;
};
export type ShopWithdrawalCreateManyMaterialInputEnvelope = {
    data: Prisma.ShopWithdrawalCreateManyMaterialInput | Prisma.ShopWithdrawalCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type ShopWithdrawalUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopWithdrawalUpdateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.ShopWithdrawalCreateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedCreateWithoutMaterialInput>;
};
export type ShopWithdrawalUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateWithoutMaterialInput, Prisma.ShopWithdrawalUncheckedUpdateWithoutMaterialInput>;
};
export type ShopWithdrawalUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.ShopWithdrawalScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateManyMutationInput, Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialInput>;
};
export type ShopWithdrawalCreateManyPerformedByInput = {
    id?: string;
    guildId: string;
    materialId: string;
    quantity: number;
    reason: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutWithdrawalsNestedInput;
};
export type ShopWithdrawalUncheckedUpdateWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalUncheckedUpdateManyWithoutPerformedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalCreateManyMaterialInput = {
    id?: string;
    guildId: string;
    quantity: number;
    reason: string;
    performedById: string;
    createdAt?: Date | string;
};
export type ShopWithdrawalUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    performedBy?: Prisma.ShopUserUpdateOneRequiredWithoutWithdrawalsNestedInput;
};
export type ShopWithdrawalUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    performedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    performedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopWithdrawalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopWithdrawal"]>;
export type ShopWithdrawalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopWithdrawal"]>;
export type ShopWithdrawalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopWithdrawal"]>;
export type ShopWithdrawalSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    reason?: boolean;
    performedById?: boolean;
    createdAt?: boolean;
};
export type ShopWithdrawalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "materialId" | "quantity" | "reason" | "performedById" | "createdAt", ExtArgs["result"]["shopWithdrawal"]>;
export type ShopWithdrawalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopWithdrawalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopWithdrawalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    performedBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type $ShopWithdrawalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopWithdrawal";
    objects: {
        material: Prisma.$ShopMaterialPayload<ExtArgs>;
        performedBy: Prisma.$ShopUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        materialId: string;
        quantity: number;
        reason: string;
        performedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["shopWithdrawal"]>;
    composites: {};
};
export type ShopWithdrawalGetPayload<S extends boolean | null | undefined | ShopWithdrawalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload, S>;
export type ShopWithdrawalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopWithdrawalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopWithdrawalCountAggregateInputType | true;
};
export interface ShopWithdrawalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopWithdrawal'];
        meta: {
            name: 'ShopWithdrawal';
        };
    };
    /**
     * Find zero or one ShopWithdrawal that matches the filter.
     * @param {ShopWithdrawalFindUniqueArgs} args - Arguments to find a ShopWithdrawal
     * @example
     * // Get one ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopWithdrawalFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopWithdrawal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopWithdrawalFindUniqueOrThrowArgs} args - Arguments to find a ShopWithdrawal
     * @example
     * // Get one ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopWithdrawalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopWithdrawal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalFindFirstArgs} args - Arguments to find a ShopWithdrawal
     * @example
     * // Get one ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopWithdrawalFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopWithdrawal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalFindFirstOrThrowArgs} args - Arguments to find a ShopWithdrawal
     * @example
     * // Get one ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopWithdrawalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopWithdrawals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopWithdrawals
     * const shopWithdrawals = await prisma.shopWithdrawal.findMany()
     *
     * // Get first 10 ShopWithdrawals
     * const shopWithdrawals = await prisma.shopWithdrawal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopWithdrawalWithIdOnly = await prisma.shopWithdrawal.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopWithdrawalFindManyArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopWithdrawal.
     * @param {ShopWithdrawalCreateArgs} args - Arguments to create a ShopWithdrawal.
     * @example
     * // Create one ShopWithdrawal
     * const ShopWithdrawal = await prisma.shopWithdrawal.create({
     *   data: {
     *     // ... data to create a ShopWithdrawal
     *   }
     * })
     *
     */
    create<T extends ShopWithdrawalCreateArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalCreateArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopWithdrawals.
     * @param {ShopWithdrawalCreateManyArgs} args - Arguments to create many ShopWithdrawals.
     * @example
     * // Create many ShopWithdrawals
     * const shopWithdrawal = await prisma.shopWithdrawal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopWithdrawalCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopWithdrawals and returns the data saved in the database.
     * @param {ShopWithdrawalCreateManyAndReturnArgs} args - Arguments to create many ShopWithdrawals.
     * @example
     * // Create many ShopWithdrawals
     * const shopWithdrawal = await prisma.shopWithdrawal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopWithdrawals and only return the `id`
     * const shopWithdrawalWithIdOnly = await prisma.shopWithdrawal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopWithdrawalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopWithdrawal.
     * @param {ShopWithdrawalDeleteArgs} args - Arguments to delete one ShopWithdrawal.
     * @example
     * // Delete one ShopWithdrawal
     * const ShopWithdrawal = await prisma.shopWithdrawal.delete({
     *   where: {
     *     // ... filter to delete one ShopWithdrawal
     *   }
     * })
     *
     */
    delete<T extends ShopWithdrawalDeleteArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopWithdrawal.
     * @param {ShopWithdrawalUpdateArgs} args - Arguments to update one ShopWithdrawal.
     * @example
     * // Update one ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopWithdrawalUpdateArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopWithdrawals.
     * @param {ShopWithdrawalDeleteManyArgs} args - Arguments to filter ShopWithdrawals to delete.
     * @example
     * // Delete a few ShopWithdrawals
     * const { count } = await prisma.shopWithdrawal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopWithdrawalDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopWithdrawalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopWithdrawals
     * const shopWithdrawal = await prisma.shopWithdrawal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopWithdrawalUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopWithdrawals and returns the data updated in the database.
     * @param {ShopWithdrawalUpdateManyAndReturnArgs} args - Arguments to update many ShopWithdrawals.
     * @example
     * // Update many ShopWithdrawals
     * const shopWithdrawal = await prisma.shopWithdrawal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopWithdrawals and only return the `id`
     * const shopWithdrawalWithIdOnly = await prisma.shopWithdrawal.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopWithdrawalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopWithdrawal.
     * @param {ShopWithdrawalUpsertArgs} args - Arguments to update or create a ShopWithdrawal.
     * @example
     * // Update or create a ShopWithdrawal
     * const shopWithdrawal = await prisma.shopWithdrawal.upsert({
     *   create: {
     *     // ... data to create a ShopWithdrawal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopWithdrawal we want to update
     *   }
     * })
     */
    upsert<T extends ShopWithdrawalUpsertArgs>(args: Prisma.SelectSubset<T, ShopWithdrawalUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopWithdrawalClient<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopWithdrawals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalCountArgs} args - Arguments to filter ShopWithdrawals to count.
     * @example
     * // Count the number of ShopWithdrawals
     * const count = await prisma.shopWithdrawal.count({
     *   where: {
     *     // ... the filter for the ShopWithdrawals we want to count
     *   }
     * })
    **/
    count<T extends ShopWithdrawalCountArgs>(args?: Prisma.Subset<T, ShopWithdrawalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopWithdrawalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopWithdrawalAggregateArgs>(args: Prisma.Subset<T, ShopWithdrawalAggregateArgs>): Prisma.PrismaPromise<GetShopWithdrawalAggregateType<T>>;
    /**
     * Group by ShopWithdrawal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopWithdrawalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopWithdrawalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopWithdrawalGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopWithdrawalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopWithdrawalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopWithdrawalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopWithdrawal model
     */
    readonly fields: ShopWithdrawalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopWithdrawal.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopWithdrawalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.ShopMaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    performedBy<T extends Prisma.ShopUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUserDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopWithdrawal model
 */
export interface ShopWithdrawalFieldRefs {
    readonly id: Prisma.FieldRef<"ShopWithdrawal", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopWithdrawal", 'String'>;
    readonly materialId: Prisma.FieldRef<"ShopWithdrawal", 'String'>;
    readonly quantity: Prisma.FieldRef<"ShopWithdrawal", 'Int'>;
    readonly reason: Prisma.FieldRef<"ShopWithdrawal", 'String'>;
    readonly performedById: Prisma.FieldRef<"ShopWithdrawal", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShopWithdrawal", 'DateTime'>;
}
/**
 * ShopWithdrawal findUnique
 */
export type ShopWithdrawalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter, which ShopWithdrawal to fetch.
     */
    where: Prisma.ShopWithdrawalWhereUniqueInput;
};
/**
 * ShopWithdrawal findUniqueOrThrow
 */
export type ShopWithdrawalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter, which ShopWithdrawal to fetch.
     */
    where: Prisma.ShopWithdrawalWhereUniqueInput;
};
/**
 * ShopWithdrawal findFirst
 */
export type ShopWithdrawalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter, which ShopWithdrawal to fetch.
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopWithdrawals to fetch.
     */
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopWithdrawals.
     */
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopWithdrawals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopWithdrawals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopWithdrawals.
     */
    distinct?: Prisma.ShopWithdrawalScalarFieldEnum | Prisma.ShopWithdrawalScalarFieldEnum[];
};
/**
 * ShopWithdrawal findFirstOrThrow
 */
export type ShopWithdrawalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter, which ShopWithdrawal to fetch.
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopWithdrawals to fetch.
     */
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopWithdrawals.
     */
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopWithdrawals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopWithdrawals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopWithdrawals.
     */
    distinct?: Prisma.ShopWithdrawalScalarFieldEnum | Prisma.ShopWithdrawalScalarFieldEnum[];
};
/**
 * ShopWithdrawal findMany
 */
export type ShopWithdrawalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter, which ShopWithdrawals to fetch.
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopWithdrawals to fetch.
     */
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopWithdrawals.
     */
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopWithdrawals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopWithdrawals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopWithdrawals.
     */
    distinct?: Prisma.ShopWithdrawalScalarFieldEnum | Prisma.ShopWithdrawalScalarFieldEnum[];
};
/**
 * ShopWithdrawal create
 */
export type ShopWithdrawalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopWithdrawal.
     */
    data: Prisma.XOR<Prisma.ShopWithdrawalCreateInput, Prisma.ShopWithdrawalUncheckedCreateInput>;
};
/**
 * ShopWithdrawal createMany
 */
export type ShopWithdrawalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopWithdrawals.
     */
    data: Prisma.ShopWithdrawalCreateManyInput | Prisma.ShopWithdrawalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopWithdrawal createManyAndReturn
 */
export type ShopWithdrawalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopWithdrawals.
     */
    data: Prisma.ShopWithdrawalCreateManyInput | Prisma.ShopWithdrawalCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopWithdrawal update
 */
export type ShopWithdrawalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopWithdrawal.
     */
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateInput, Prisma.ShopWithdrawalUncheckedUpdateInput>;
    /**
     * Choose, which ShopWithdrawal to update.
     */
    where: Prisma.ShopWithdrawalWhereUniqueInput;
};
/**
 * ShopWithdrawal updateMany
 */
export type ShopWithdrawalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopWithdrawals.
     */
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateManyMutationInput, Prisma.ShopWithdrawalUncheckedUpdateManyInput>;
    /**
     * Filter which ShopWithdrawals to update
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * Limit how many ShopWithdrawals to update.
     */
    limit?: number;
};
/**
 * ShopWithdrawal updateManyAndReturn
 */
export type ShopWithdrawalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * The data used to update ShopWithdrawals.
     */
    data: Prisma.XOR<Prisma.ShopWithdrawalUpdateManyMutationInput, Prisma.ShopWithdrawalUncheckedUpdateManyInput>;
    /**
     * Filter which ShopWithdrawals to update
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * Limit how many ShopWithdrawals to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopWithdrawal upsert
 */
export type ShopWithdrawalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopWithdrawal to update in case it exists.
     */
    where: Prisma.ShopWithdrawalWhereUniqueInput;
    /**
     * In case the ShopWithdrawal found by the `where` argument doesn't exist, create a new ShopWithdrawal with this data.
     */
    create: Prisma.XOR<Prisma.ShopWithdrawalCreateInput, Prisma.ShopWithdrawalUncheckedCreateInput>;
    /**
     * In case the ShopWithdrawal was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopWithdrawalUpdateInput, Prisma.ShopWithdrawalUncheckedUpdateInput>;
};
/**
 * ShopWithdrawal delete
 */
export type ShopWithdrawalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    /**
     * Filter which ShopWithdrawal to delete.
     */
    where: Prisma.ShopWithdrawalWhereUniqueInput;
};
/**
 * ShopWithdrawal deleteMany
 */
export type ShopWithdrawalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopWithdrawals to delete
     */
    where?: Prisma.ShopWithdrawalWhereInput;
    /**
     * Limit how many ShopWithdrawals to delete.
     */
    limit?: number;
};
/**
 * ShopWithdrawal without action
 */
export type ShopWithdrawalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopWithdrawal.d.ts.map