import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopSale
 *
 */
export type ShopSaleModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopSalePayload>;
export type AggregateShopSale = {
    _count: ShopSaleCountAggregateOutputType | null;
    _avg: ShopSaleAvgAggregateOutputType | null;
    _sum: ShopSaleSumAggregateOutputType | null;
    _min: ShopSaleMinAggregateOutputType | null;
    _max: ShopSaleMaxAggregateOutputType | null;
};
export type ShopSaleAvgAggregateOutputType = {
    totalAmount: runtime.Decimal | null;
};
export type ShopSaleSumAggregateOutputType = {
    totalAmount: runtime.Decimal | null;
};
export type ShopSaleMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    orderId: string | null;
    buyerUserId: string | null;
    registeredById: string | null;
    totalAmount: runtime.Decimal | null;
    soldAt: Date | null;
};
export type ShopSaleMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    orderId: string | null;
    buyerUserId: string | null;
    registeredById: string | null;
    totalAmount: runtime.Decimal | null;
    soldAt: Date | null;
};
export type ShopSaleCountAggregateOutputType = {
    id: number;
    guildId: number;
    orderId: number;
    buyerUserId: number;
    registeredById: number;
    totalAmount: number;
    soldAt: number;
    _all: number;
};
export type ShopSaleAvgAggregateInputType = {
    totalAmount?: true;
};
export type ShopSaleSumAggregateInputType = {
    totalAmount?: true;
};
export type ShopSaleMinAggregateInputType = {
    id?: true;
    guildId?: true;
    orderId?: true;
    buyerUserId?: true;
    registeredById?: true;
    totalAmount?: true;
    soldAt?: true;
};
export type ShopSaleMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    orderId?: true;
    buyerUserId?: true;
    registeredById?: true;
    totalAmount?: true;
    soldAt?: true;
};
export type ShopSaleCountAggregateInputType = {
    id?: true;
    guildId?: true;
    orderId?: true;
    buyerUserId?: true;
    registeredById?: true;
    totalAmount?: true;
    soldAt?: true;
    _all?: true;
};
export type ShopSaleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSale to aggregate.
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSales to fetch.
     */
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopSales
    **/
    _count?: true | ShopSaleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopSaleAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopSaleSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopSaleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopSaleMaxAggregateInputType;
};
export type GetShopSaleAggregateType<T extends ShopSaleAggregateArgs> = {
    [P in keyof T & keyof AggregateShopSale]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopSale[P]> : Prisma.GetScalarType<T[P], AggregateShopSale[P]>;
};
export type ShopSaleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSaleWhereInput;
    orderBy?: Prisma.ShopSaleOrderByWithAggregationInput | Prisma.ShopSaleOrderByWithAggregationInput[];
    by: Prisma.ShopSaleScalarFieldEnum[] | Prisma.ShopSaleScalarFieldEnum;
    having?: Prisma.ShopSaleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopSaleCountAggregateInputType | true;
    _avg?: ShopSaleAvgAggregateInputType;
    _sum?: ShopSaleSumAggregateInputType;
    _min?: ShopSaleMinAggregateInputType;
    _max?: ShopSaleMaxAggregateInputType;
};
export type ShopSaleGroupByOutputType = {
    id: string;
    guildId: string;
    orderId: string;
    buyerUserId: string;
    registeredById: string;
    totalAmount: runtime.Decimal;
    soldAt: Date;
    _count: ShopSaleCountAggregateOutputType | null;
    _avg: ShopSaleAvgAggregateOutputType | null;
    _sum: ShopSaleSumAggregateOutputType | null;
    _min: ShopSaleMinAggregateOutputType | null;
    _max: ShopSaleMaxAggregateOutputType | null;
};
export type GetShopSaleGroupByPayload<T extends ShopSaleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopSaleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopSaleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopSaleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopSaleGroupByOutputType[P]>;
}>>;
export type ShopSaleWhereInput = {
    AND?: Prisma.ShopSaleWhereInput | Prisma.ShopSaleWhereInput[];
    OR?: Prisma.ShopSaleWhereInput[];
    NOT?: Prisma.ShopSaleWhereInput | Prisma.ShopSaleWhereInput[];
    id?: Prisma.StringFilter<"ShopSale"> | string;
    guildId?: Prisma.StringFilter<"ShopSale"> | string;
    orderId?: Prisma.StringFilter<"ShopSale"> | string;
    buyerUserId?: Prisma.StringFilter<"ShopSale"> | string;
    registeredById?: Prisma.StringFilter<"ShopSale"> | string;
    totalAmount?: Prisma.DecimalFilter<"ShopSale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"ShopSale"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
    buyer?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
    registeredBy?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
};
export type ShopSaleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    buyerUserId?: Prisma.SortOrder;
    registeredById?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    order?: Prisma.ShopOrderOrderByWithRelationInput;
    buyer?: Prisma.ShopUserOrderByWithRelationInput;
    registeredBy?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopSaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.ShopSaleWhereInput | Prisma.ShopSaleWhereInput[];
    OR?: Prisma.ShopSaleWhereInput[];
    NOT?: Prisma.ShopSaleWhereInput | Prisma.ShopSaleWhereInput[];
    guildId?: Prisma.StringFilter<"ShopSale"> | string;
    buyerUserId?: Prisma.StringFilter<"ShopSale"> | string;
    registeredById?: Prisma.StringFilter<"ShopSale"> | string;
    totalAmount?: Prisma.DecimalFilter<"ShopSale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"ShopSale"> | Date | string;
    order?: Prisma.XOR<Prisma.ShopOrderScalarRelationFilter, Prisma.ShopOrderWhereInput>;
    buyer?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
    registeredBy?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
}, "id" | "orderId">;
export type ShopSaleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    buyerUserId?: Prisma.SortOrder;
    registeredById?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
    _count?: Prisma.ShopSaleCountOrderByAggregateInput;
    _avg?: Prisma.ShopSaleAvgOrderByAggregateInput;
    _max?: Prisma.ShopSaleMaxOrderByAggregateInput;
    _min?: Prisma.ShopSaleMinOrderByAggregateInput;
    _sum?: Prisma.ShopSaleSumOrderByAggregateInput;
};
export type ShopSaleScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopSaleScalarWhereWithAggregatesInput | Prisma.ShopSaleScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopSaleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopSaleScalarWhereWithAggregatesInput | Prisma.ShopSaleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopSale"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopSale"> | string;
    orderId?: Prisma.StringWithAggregatesFilter<"ShopSale"> | string;
    buyerUserId?: Prisma.StringWithAggregatesFilter<"ShopSale"> | string;
    registeredById?: Prisma.StringWithAggregatesFilter<"ShopSale"> | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"ShopSale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeWithAggregatesFilter<"ShopSale"> | Date | string;
};
export type ShopSaleCreateInput = {
    id?: string;
    guildId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutSaleInput;
    buyer: Prisma.ShopUserCreateNestedOneWithoutSalesAsBuyerInput;
    registeredBy: Prisma.ShopUserCreateNestedOneWithoutSalesRegisteredInput;
};
export type ShopSaleUncheckedCreateInput = {
    id?: string;
    guildId: string;
    orderId: string;
    buyerUserId: string;
    registeredById: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutSaleNestedInput;
    buyer?: Prisma.ShopUserUpdateOneRequiredWithoutSalesAsBuyerNestedInput;
    registeredBy?: Prisma.ShopUserUpdateOneRequiredWithoutSalesRegisteredNestedInput;
};
export type ShopSaleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredById?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleCreateManyInput = {
    id?: string;
    guildId: string;
    orderId: string;
    buyerUserId: string;
    registeredById: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredById?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleListRelationFilter = {
    every?: Prisma.ShopSaleWhereInput;
    some?: Prisma.ShopSaleWhereInput;
    none?: Prisma.ShopSaleWhereInput;
};
export type ShopSaleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopSaleNullableScalarRelationFilter = {
    is?: Prisma.ShopSaleWhereInput | null;
    isNot?: Prisma.ShopSaleWhereInput | null;
};
export type ShopSaleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    buyerUserId?: Prisma.SortOrder;
    registeredById?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
};
export type ShopSaleAvgOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type ShopSaleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    buyerUserId?: Prisma.SortOrder;
    registeredById?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
};
export type ShopSaleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    buyerUserId?: Prisma.SortOrder;
    registeredById?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    soldAt?: Prisma.SortOrder;
};
export type ShopSaleSumOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type ShopSaleCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput> | Prisma.ShopSaleCreateWithoutBuyerInput[] | Prisma.ShopSaleUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutBuyerInput | Prisma.ShopSaleCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.ShopSaleCreateManyBuyerInputEnvelope;
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
};
export type ShopSaleCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput> | Prisma.ShopSaleCreateWithoutRegisteredByInput[] | Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput | Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.ShopSaleCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
};
export type ShopSaleUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput> | Prisma.ShopSaleCreateWithoutBuyerInput[] | Prisma.ShopSaleUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutBuyerInput | Prisma.ShopSaleCreateOrConnectWithoutBuyerInput[];
    createMany?: Prisma.ShopSaleCreateManyBuyerInputEnvelope;
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
};
export type ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput> | Prisma.ShopSaleCreateWithoutRegisteredByInput[] | Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput | Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput[];
    createMany?: Prisma.ShopSaleCreateManyRegisteredByInputEnvelope;
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
};
export type ShopSaleUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput> | Prisma.ShopSaleCreateWithoutBuyerInput[] | Prisma.ShopSaleUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutBuyerInput | Prisma.ShopSaleCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.ShopSaleUpsertWithWhereUniqueWithoutBuyerInput | Prisma.ShopSaleUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.ShopSaleCreateManyBuyerInputEnvelope;
    set?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    disconnect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    delete?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    update?: Prisma.ShopSaleUpdateWithWhereUniqueWithoutBuyerInput | Prisma.ShopSaleUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.ShopSaleUpdateManyWithWhereWithoutBuyerInput | Prisma.ShopSaleUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
};
export type ShopSaleUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput> | Prisma.ShopSaleCreateWithoutRegisteredByInput[] | Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput | Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.ShopSaleUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.ShopSaleUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.ShopSaleCreateManyRegisteredByInputEnvelope;
    set?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    disconnect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    delete?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    update?: Prisma.ShopSaleUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.ShopSaleUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.ShopSaleUpdateManyWithWhereWithoutRegisteredByInput | Prisma.ShopSaleUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
};
export type ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput> | Prisma.ShopSaleCreateWithoutBuyerInput[] | Prisma.ShopSaleUncheckedCreateWithoutBuyerInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutBuyerInput | Prisma.ShopSaleCreateOrConnectWithoutBuyerInput[];
    upsert?: Prisma.ShopSaleUpsertWithWhereUniqueWithoutBuyerInput | Prisma.ShopSaleUpsertWithWhereUniqueWithoutBuyerInput[];
    createMany?: Prisma.ShopSaleCreateManyBuyerInputEnvelope;
    set?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    disconnect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    delete?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    update?: Prisma.ShopSaleUpdateWithWhereUniqueWithoutBuyerInput | Prisma.ShopSaleUpdateWithWhereUniqueWithoutBuyerInput[];
    updateMany?: Prisma.ShopSaleUpdateManyWithWhereWithoutBuyerInput | Prisma.ShopSaleUpdateManyWithWhereWithoutBuyerInput[];
    deleteMany?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
};
export type ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput> | Prisma.ShopSaleCreateWithoutRegisteredByInput[] | Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput[];
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput | Prisma.ShopSaleCreateOrConnectWithoutRegisteredByInput[];
    upsert?: Prisma.ShopSaleUpsertWithWhereUniqueWithoutRegisteredByInput | Prisma.ShopSaleUpsertWithWhereUniqueWithoutRegisteredByInput[];
    createMany?: Prisma.ShopSaleCreateManyRegisteredByInputEnvelope;
    set?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    disconnect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    delete?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    connect?: Prisma.ShopSaleWhereUniqueInput | Prisma.ShopSaleWhereUniqueInput[];
    update?: Prisma.ShopSaleUpdateWithWhereUniqueWithoutRegisteredByInput | Prisma.ShopSaleUpdateWithWhereUniqueWithoutRegisteredByInput[];
    updateMany?: Prisma.ShopSaleUpdateManyWithWhereWithoutRegisteredByInput | Prisma.ShopSaleUpdateManyWithWhereWithoutRegisteredByInput[];
    deleteMany?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
};
export type ShopSaleCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutOrderInput;
    connect?: Prisma.ShopSaleWhereUniqueInput;
};
export type ShopSaleUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutOrderInput;
    connect?: Prisma.ShopSaleWhereUniqueInput;
};
export type ShopSaleUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.ShopSaleUpsertWithoutOrderInput;
    disconnect?: Prisma.ShopSaleWhereInput | boolean;
    delete?: Prisma.ShopSaleWhereInput | boolean;
    connect?: Prisma.ShopSaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopSaleUpdateToOneWithWhereWithoutOrderInput, Prisma.ShopSaleUpdateWithoutOrderInput>, Prisma.ShopSaleUncheckedUpdateWithoutOrderInput>;
};
export type ShopSaleUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.ShopSaleCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.ShopSaleUpsertWithoutOrderInput;
    disconnect?: Prisma.ShopSaleWhereInput | boolean;
    delete?: Prisma.ShopSaleWhereInput | boolean;
    connect?: Prisma.ShopSaleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopSaleUpdateToOneWithWhereWithoutOrderInput, Prisma.ShopSaleUpdateWithoutOrderInput>, Prisma.ShopSaleUncheckedUpdateWithoutOrderInput>;
};
export type ShopSaleCreateWithoutBuyerInput = {
    id?: string;
    guildId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutSaleInput;
    registeredBy: Prisma.ShopUserCreateNestedOneWithoutSalesRegisteredInput;
};
export type ShopSaleUncheckedCreateWithoutBuyerInput = {
    id?: string;
    guildId: string;
    orderId: string;
    registeredById: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleCreateOrConnectWithoutBuyerInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput>;
};
export type ShopSaleCreateManyBuyerInputEnvelope = {
    data: Prisma.ShopSaleCreateManyBuyerInput | Prisma.ShopSaleCreateManyBuyerInput[];
    skipDuplicates?: boolean;
};
export type ShopSaleCreateWithoutRegisteredByInput = {
    id?: string;
    guildId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    order: Prisma.ShopOrderCreateNestedOneWithoutSaleInput;
    buyer: Prisma.ShopUserCreateNestedOneWithoutSalesAsBuyerInput;
};
export type ShopSaleUncheckedCreateWithoutRegisteredByInput = {
    id?: string;
    guildId: string;
    orderId: string;
    buyerUserId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleCreateOrConnectWithoutRegisteredByInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput>;
};
export type ShopSaleCreateManyRegisteredByInputEnvelope = {
    data: Prisma.ShopSaleCreateManyRegisteredByInput | Prisma.ShopSaleCreateManyRegisteredByInput[];
    skipDuplicates?: boolean;
};
export type ShopSaleUpsertWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopSaleUpdateWithoutBuyerInput, Prisma.ShopSaleUncheckedUpdateWithoutBuyerInput>;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutBuyerInput, Prisma.ShopSaleUncheckedCreateWithoutBuyerInput>;
};
export type ShopSaleUpdateWithWhereUniqueWithoutBuyerInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopSaleUpdateWithoutBuyerInput, Prisma.ShopSaleUncheckedUpdateWithoutBuyerInput>;
};
export type ShopSaleUpdateManyWithWhereWithoutBuyerInput = {
    where: Prisma.ShopSaleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopSaleUpdateManyMutationInput, Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerInput>;
};
export type ShopSaleScalarWhereInput = {
    AND?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
    OR?: Prisma.ShopSaleScalarWhereInput[];
    NOT?: Prisma.ShopSaleScalarWhereInput | Prisma.ShopSaleScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopSale"> | string;
    guildId?: Prisma.StringFilter<"ShopSale"> | string;
    orderId?: Prisma.StringFilter<"ShopSale"> | string;
    buyerUserId?: Prisma.StringFilter<"ShopSale"> | string;
    registeredById?: Prisma.StringFilter<"ShopSale"> | string;
    totalAmount?: Prisma.DecimalFilter<"ShopSale"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFilter<"ShopSale"> | Date | string;
};
export type ShopSaleUpsertWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopSaleUpdateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedUpdateWithoutRegisteredByInput>;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedCreateWithoutRegisteredByInput>;
};
export type ShopSaleUpdateWithWhereUniqueWithoutRegisteredByInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopSaleUpdateWithoutRegisteredByInput, Prisma.ShopSaleUncheckedUpdateWithoutRegisteredByInput>;
};
export type ShopSaleUpdateManyWithWhereWithoutRegisteredByInput = {
    where: Prisma.ShopSaleScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopSaleUpdateManyMutationInput, Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByInput>;
};
export type ShopSaleCreateWithoutOrderInput = {
    id?: string;
    guildId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
    buyer: Prisma.ShopUserCreateNestedOneWithoutSalesAsBuyerInput;
    registeredBy: Prisma.ShopUserCreateNestedOneWithoutSalesRegisteredInput;
};
export type ShopSaleUncheckedCreateWithoutOrderInput = {
    id?: string;
    guildId: string;
    buyerUserId: string;
    registeredById: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleCreateOrConnectWithoutOrderInput = {
    where: Prisma.ShopSaleWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
};
export type ShopSaleUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.ShopSaleUpdateWithoutOrderInput, Prisma.ShopSaleUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.ShopSaleCreateWithoutOrderInput, Prisma.ShopSaleUncheckedCreateWithoutOrderInput>;
    where?: Prisma.ShopSaleWhereInput;
};
export type ShopSaleUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.ShopSaleWhereInput;
    data: Prisma.XOR<Prisma.ShopSaleUpdateWithoutOrderInput, Prisma.ShopSaleUncheckedUpdateWithoutOrderInput>;
};
export type ShopSaleUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    buyer?: Prisma.ShopUserUpdateOneRequiredWithoutSalesAsBuyerNestedInput;
    registeredBy?: Prisma.ShopUserUpdateOneRequiredWithoutSalesRegisteredNestedInput;
};
export type ShopSaleUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredById?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleCreateManyBuyerInput = {
    id?: string;
    guildId: string;
    orderId: string;
    registeredById: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleCreateManyRegisteredByInput = {
    id?: string;
    guildId: string;
    orderId: string;
    buyerUserId: string;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Date | string;
};
export type ShopSaleUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutSaleNestedInput;
    registeredBy?: Prisma.ShopUserUpdateOneRequiredWithoutSalesRegisteredNestedInput;
};
export type ShopSaleUncheckedUpdateWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredById?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleUncheckedUpdateManyWithoutBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    registeredById?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleUpdateWithoutRegisteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.ShopOrderUpdateOneRequiredWithoutSaleNestedInput;
    buyer?: Prisma.ShopUserUpdateOneRequiredWithoutSalesAsBuyerNestedInput;
};
export type ShopSaleUncheckedUpdateWithoutRegisteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleUncheckedUpdateManyWithoutRegisteredByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    buyerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    soldAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopSaleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderId?: boolean;
    buyerUserId?: boolean;
    registeredById?: boolean;
    totalAmount?: boolean;
    soldAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSale"]>;
export type ShopSaleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderId?: boolean;
    buyerUserId?: boolean;
    registeredById?: boolean;
    totalAmount?: boolean;
    soldAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSale"]>;
export type ShopSaleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderId?: boolean;
    buyerUserId?: boolean;
    registeredById?: boolean;
    totalAmount?: boolean;
    soldAt?: boolean;
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopSale"]>;
export type ShopSaleSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    orderId?: boolean;
    buyerUserId?: boolean;
    registeredById?: boolean;
    totalAmount?: boolean;
    soldAt?: boolean;
};
export type ShopSaleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "orderId" | "buyerUserId" | "registeredById" | "totalAmount" | "soldAt", ExtArgs["result"]["shopSale"]>;
export type ShopSaleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopSaleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopSaleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.ShopOrderDefaultArgs<ExtArgs>;
    buyer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    registeredBy?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type $ShopSalePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopSale";
    objects: {
        order: Prisma.$ShopOrderPayload<ExtArgs>;
        buyer: Prisma.$ShopUserPayload<ExtArgs>;
        registeredBy: Prisma.$ShopUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        orderId: string;
        buyerUserId: string;
        registeredById: string;
        totalAmount: runtime.Decimal;
        soldAt: Date;
    }, ExtArgs["result"]["shopSale"]>;
    composites: {};
};
export type ShopSaleGetPayload<S extends boolean | null | undefined | ShopSaleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopSalePayload, S>;
export type ShopSaleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopSaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopSaleCountAggregateInputType | true;
};
export interface ShopSaleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopSale'];
        meta: {
            name: 'ShopSale';
        };
    };
    /**
     * Find zero or one ShopSale that matches the filter.
     * @param {ShopSaleFindUniqueArgs} args - Arguments to find a ShopSale
     * @example
     * // Get one ShopSale
     * const shopSale = await prisma.shopSale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopSaleFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopSaleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopSale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopSaleFindUniqueOrThrowArgs} args - Arguments to find a ShopSale
     * @example
     * // Get one ShopSale
     * const shopSale = await prisma.shopSale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopSaleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopSaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopSale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleFindFirstArgs} args - Arguments to find a ShopSale
     * @example
     * // Get one ShopSale
     * const shopSale = await prisma.shopSale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopSaleFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopSaleFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopSale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleFindFirstOrThrowArgs} args - Arguments to find a ShopSale
     * @example
     * // Get one ShopSale
     * const shopSale = await prisma.shopSale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopSaleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopSaleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopSales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopSales
     * const shopSales = await prisma.shopSale.findMany()
     *
     * // Get first 10 ShopSales
     * const shopSales = await prisma.shopSale.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopSaleWithIdOnly = await prisma.shopSale.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopSaleFindManyArgs>(args?: Prisma.SelectSubset<T, ShopSaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopSale.
     * @param {ShopSaleCreateArgs} args - Arguments to create a ShopSale.
     * @example
     * // Create one ShopSale
     * const ShopSale = await prisma.shopSale.create({
     *   data: {
     *     // ... data to create a ShopSale
     *   }
     * })
     *
     */
    create<T extends ShopSaleCreateArgs>(args: Prisma.SelectSubset<T, ShopSaleCreateArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopSales.
     * @param {ShopSaleCreateManyArgs} args - Arguments to create many ShopSales.
     * @example
     * // Create many ShopSales
     * const shopSale = await prisma.shopSale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopSaleCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopSaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopSales and returns the data saved in the database.
     * @param {ShopSaleCreateManyAndReturnArgs} args - Arguments to create many ShopSales.
     * @example
     * // Create many ShopSales
     * const shopSale = await prisma.shopSale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopSales and only return the `id`
     * const shopSaleWithIdOnly = await prisma.shopSale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopSaleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopSaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopSale.
     * @param {ShopSaleDeleteArgs} args - Arguments to delete one ShopSale.
     * @example
     * // Delete one ShopSale
     * const ShopSale = await prisma.shopSale.delete({
     *   where: {
     *     // ... filter to delete one ShopSale
     *   }
     * })
     *
     */
    delete<T extends ShopSaleDeleteArgs>(args: Prisma.SelectSubset<T, ShopSaleDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopSale.
     * @param {ShopSaleUpdateArgs} args - Arguments to update one ShopSale.
     * @example
     * // Update one ShopSale
     * const shopSale = await prisma.shopSale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopSaleUpdateArgs>(args: Prisma.SelectSubset<T, ShopSaleUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopSales.
     * @param {ShopSaleDeleteManyArgs} args - Arguments to filter ShopSales to delete.
     * @example
     * // Delete a few ShopSales
     * const { count } = await prisma.shopSale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopSaleDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopSaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopSales
     * const shopSale = await prisma.shopSale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopSaleUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopSaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopSales and returns the data updated in the database.
     * @param {ShopSaleUpdateManyAndReturnArgs} args - Arguments to update many ShopSales.
     * @example
     * // Update many ShopSales
     * const shopSale = await prisma.shopSale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopSales and only return the `id`
     * const shopSaleWithIdOnly = await prisma.shopSale.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopSaleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopSaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopSale.
     * @param {ShopSaleUpsertArgs} args - Arguments to update or create a ShopSale.
     * @example
     * // Update or create a ShopSale
     * const shopSale = await prisma.shopSale.upsert({
     *   create: {
     *     // ... data to create a ShopSale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopSale we want to update
     *   }
     * })
     */
    upsert<T extends ShopSaleUpsertArgs>(args: Prisma.SelectSubset<T, ShopSaleUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopSales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleCountArgs} args - Arguments to filter ShopSales to count.
     * @example
     * // Count the number of ShopSales
     * const count = await prisma.shopSale.count({
     *   where: {
     *     // ... the filter for the ShopSales we want to count
     *   }
     * })
    **/
    count<T extends ShopSaleCountArgs>(args?: Prisma.Subset<T, ShopSaleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopSaleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopSaleAggregateArgs>(args: Prisma.Subset<T, ShopSaleAggregateArgs>): Prisma.PrismaPromise<GetShopSaleAggregateType<T>>;
    /**
     * Group by ShopSale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopSaleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopSaleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopSaleGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopSaleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopSaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopSale model
     */
    readonly fields: ShopSaleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopSale.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopSaleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.ShopOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    buyer<T extends Prisma.ShopUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUserDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    registeredBy<T extends Prisma.ShopUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUserDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopSale model
 */
export interface ShopSaleFieldRefs {
    readonly id: Prisma.FieldRef<"ShopSale", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopSale", 'String'>;
    readonly orderId: Prisma.FieldRef<"ShopSale", 'String'>;
    readonly buyerUserId: Prisma.FieldRef<"ShopSale", 'String'>;
    readonly registeredById: Prisma.FieldRef<"ShopSale", 'String'>;
    readonly totalAmount: Prisma.FieldRef<"ShopSale", 'Decimal'>;
    readonly soldAt: Prisma.FieldRef<"ShopSale", 'DateTime'>;
}
/**
 * ShopSale findUnique
 */
export type ShopSaleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSale to fetch.
     */
    where: Prisma.ShopSaleWhereUniqueInput;
};
/**
 * ShopSale findUniqueOrThrow
 */
export type ShopSaleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSale to fetch.
     */
    where: Prisma.ShopSaleWhereUniqueInput;
};
/**
 * ShopSale findFirst
 */
export type ShopSaleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSale to fetch.
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSales to fetch.
     */
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopSales.
     */
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSales.
     */
    distinct?: Prisma.ShopSaleScalarFieldEnum | Prisma.ShopSaleScalarFieldEnum[];
};
/**
 * ShopSale findFirstOrThrow
 */
export type ShopSaleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSale to fetch.
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSales to fetch.
     */
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopSales.
     */
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSales.
     */
    distinct?: Prisma.ShopSaleScalarFieldEnum | Prisma.ShopSaleScalarFieldEnum[];
};
/**
 * ShopSale findMany
 */
export type ShopSaleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter, which ShopSales to fetch.
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopSales to fetch.
     */
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopSales.
     */
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopSales from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopSales.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopSales.
     */
    distinct?: Prisma.ShopSaleScalarFieldEnum | Prisma.ShopSaleScalarFieldEnum[];
};
/**
 * ShopSale create
 */
export type ShopSaleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopSale.
     */
    data: Prisma.XOR<Prisma.ShopSaleCreateInput, Prisma.ShopSaleUncheckedCreateInput>;
};
/**
 * ShopSale createMany
 */
export type ShopSaleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopSales.
     */
    data: Prisma.ShopSaleCreateManyInput | Prisma.ShopSaleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopSale createManyAndReturn
 */
export type ShopSaleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopSales.
     */
    data: Prisma.ShopSaleCreateManyInput | Prisma.ShopSaleCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopSale update
 */
export type ShopSaleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopSale.
     */
    data: Prisma.XOR<Prisma.ShopSaleUpdateInput, Prisma.ShopSaleUncheckedUpdateInput>;
    /**
     * Choose, which ShopSale to update.
     */
    where: Prisma.ShopSaleWhereUniqueInput;
};
/**
 * ShopSale updateMany
 */
export type ShopSaleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopSales.
     */
    data: Prisma.XOR<Prisma.ShopSaleUpdateManyMutationInput, Prisma.ShopSaleUncheckedUpdateManyInput>;
    /**
     * Filter which ShopSales to update
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * Limit how many ShopSales to update.
     */
    limit?: number;
};
/**
 * ShopSale updateManyAndReturn
 */
export type ShopSaleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * The data used to update ShopSales.
     */
    data: Prisma.XOR<Prisma.ShopSaleUpdateManyMutationInput, Prisma.ShopSaleUncheckedUpdateManyInput>;
    /**
     * Filter which ShopSales to update
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * Limit how many ShopSales to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopSale upsert
 */
export type ShopSaleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopSale to update in case it exists.
     */
    where: Prisma.ShopSaleWhereUniqueInput;
    /**
     * In case the ShopSale found by the `where` argument doesn't exist, create a new ShopSale with this data.
     */
    create: Prisma.XOR<Prisma.ShopSaleCreateInput, Prisma.ShopSaleUncheckedCreateInput>;
    /**
     * In case the ShopSale was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopSaleUpdateInput, Prisma.ShopSaleUncheckedUpdateInput>;
};
/**
 * ShopSale delete
 */
export type ShopSaleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
    /**
     * Filter which ShopSale to delete.
     */
    where: Prisma.ShopSaleWhereUniqueInput;
};
/**
 * ShopSale deleteMany
 */
export type ShopSaleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopSales to delete
     */
    where?: Prisma.ShopSaleWhereInput;
    /**
     * Limit how many ShopSales to delete.
     */
    limit?: number;
};
/**
 * ShopSale without action
 */
export type ShopSaleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopSale
     */
    select?: Prisma.ShopSaleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopSale
     */
    omit?: Prisma.ShopSaleOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopSaleInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopSale.d.ts.map