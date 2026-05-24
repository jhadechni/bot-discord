import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopUser
 *
 */
export type ShopUserModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopUserPayload>;
export type AggregateShopUser = {
    _count: ShopUserCountAggregateOutputType | null;
    _min: ShopUserMinAggregateOutputType | null;
    _max: ShopUserMaxAggregateOutputType | null;
};
export type ShopUserMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    discordUserId: string | null;
    username: string | null;
    displayName: string | null;
    isStaff: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopUserMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    discordUserId: string | null;
    username: string | null;
    displayName: string | null;
    isStaff: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopUserCountAggregateOutputType = {
    id: number;
    guildId: number;
    discordUserId: number;
    username: number;
    displayName: number;
    isStaff: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShopUserMinAggregateInputType = {
    id?: true;
    guildId?: true;
    discordUserId?: true;
    username?: true;
    displayName?: true;
    isStaff?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopUserMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    discordUserId?: true;
    username?: true;
    displayName?: true;
    isStaff?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopUserCountAggregateInputType = {
    id?: true;
    guildId?: true;
    discordUserId?: true;
    username?: true;
    displayName?: true;
    isStaff?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShopUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUser to aggregate.
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopUsers
    **/
    _count?: true | ShopUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopUserMaxAggregateInputType;
};
export type GetShopUserAggregateType<T extends ShopUserAggregateArgs> = {
    [P in keyof T & keyof AggregateShopUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopUser[P]> : Prisma.GetScalarType<T[P], AggregateShopUser[P]>;
};
export type ShopUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopUserWhereInput;
    orderBy?: Prisma.ShopUserOrderByWithAggregationInput | Prisma.ShopUserOrderByWithAggregationInput[];
    by: Prisma.ShopUserScalarFieldEnum[] | Prisma.ShopUserScalarFieldEnum;
    having?: Prisma.ShopUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopUserCountAggregateInputType | true;
    _min?: ShopUserMinAggregateInputType;
    _max?: ShopUserMaxAggregateInputType;
};
export type ShopUserGroupByOutputType = {
    id: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ShopUserCountAggregateOutputType | null;
    _min: ShopUserMinAggregateOutputType | null;
    _max: ShopUserMaxAggregateOutputType | null;
};
export type GetShopUserGroupByPayload<T extends ShopUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopUserGroupByOutputType[P]>;
}>>;
export type ShopUserWhereInput = {
    AND?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    OR?: Prisma.ShopUserWhereInput[];
    NOT?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    id?: Prisma.StringFilter<"ShopUser"> | string;
    guildId?: Prisma.StringFilter<"ShopUser"> | string;
    discordUserId?: Prisma.StringFilter<"ShopUser"> | string;
    username?: Prisma.StringFilter<"ShopUser"> | string;
    displayName?: Prisma.StringFilter<"ShopUser"> | string;
    isStaff?: Prisma.BoolFilter<"ShopUser"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    discountPolicies?: Prisma.ShopDiscountPolicyListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    ordersAccepted?: Prisma.ShopOrderListRelationFilter;
    ordersClosed?: Prisma.ShopOrderListRelationFilter;
    ordersAsCustomer?: Prisma.ShopOrderListRelationFilter;
    ordersRejected?: Prisma.ShopOrderListRelationFilter;
    orderEvents?: Prisma.ShopOrderEventListRelationFilter;
    priceChanges?: Prisma.ShopProductPriceListRelationFilter;
    salesAsBuyer?: Prisma.ShopSaleListRelationFilter;
    salesRegistered?: Prisma.ShopSaleListRelationFilter;
    withdrawals?: Prisma.ShopWithdrawalListRelationFilter;
};
export type ShopUserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    discordUserId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    appliedDiscounts?: Prisma.ShopAppliedDiscountOrderByRelationAggregateInput;
    discountPolicies?: Prisma.ShopDiscountPolicyOrderByRelationAggregateInput;
    movements?: Prisma.ShopInventoryMovementOrderByRelationAggregateInput;
    ordersAccepted?: Prisma.ShopOrderOrderByRelationAggregateInput;
    ordersClosed?: Prisma.ShopOrderOrderByRelationAggregateInput;
    ordersAsCustomer?: Prisma.ShopOrderOrderByRelationAggregateInput;
    ordersRejected?: Prisma.ShopOrderOrderByRelationAggregateInput;
    orderEvents?: Prisma.ShopOrderEventOrderByRelationAggregateInput;
    priceChanges?: Prisma.ShopProductPriceOrderByRelationAggregateInput;
    salesAsBuyer?: Prisma.ShopSaleOrderByRelationAggregateInput;
    salesRegistered?: Prisma.ShopSaleOrderByRelationAggregateInput;
    withdrawals?: Prisma.ShopWithdrawalOrderByRelationAggregateInput;
};
export type ShopUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_discordUserId?: Prisma.ShopUserGuildIdDiscordUserIdCompoundUniqueInput;
    AND?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    OR?: Prisma.ShopUserWhereInput[];
    NOT?: Prisma.ShopUserWhereInput | Prisma.ShopUserWhereInput[];
    guildId?: Prisma.StringFilter<"ShopUser"> | string;
    discordUserId?: Prisma.StringFilter<"ShopUser"> | string;
    username?: Prisma.StringFilter<"ShopUser"> | string;
    displayName?: Prisma.StringFilter<"ShopUser"> | string;
    isStaff?: Prisma.BoolFilter<"ShopUser"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopUser"> | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    discountPolicies?: Prisma.ShopDiscountPolicyListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    ordersAccepted?: Prisma.ShopOrderListRelationFilter;
    ordersClosed?: Prisma.ShopOrderListRelationFilter;
    ordersAsCustomer?: Prisma.ShopOrderListRelationFilter;
    ordersRejected?: Prisma.ShopOrderListRelationFilter;
    orderEvents?: Prisma.ShopOrderEventListRelationFilter;
    priceChanges?: Prisma.ShopProductPriceListRelationFilter;
    salesAsBuyer?: Prisma.ShopSaleListRelationFilter;
    salesRegistered?: Prisma.ShopSaleListRelationFilter;
    withdrawals?: Prisma.ShopWithdrawalListRelationFilter;
}, "id" | "guildId_discordUserId">;
export type ShopUserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    discordUserId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopUserCountOrderByAggregateInput;
    _max?: Prisma.ShopUserMaxOrderByAggregateInput;
    _min?: Prisma.ShopUserMinOrderByAggregateInput;
};
export type ShopUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopUserScalarWhereWithAggregatesInput | Prisma.ShopUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopUserScalarWhereWithAggregatesInput | Prisma.ShopUserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopUser"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopUser"> | string;
    discordUserId?: Prisma.StringWithAggregatesFilter<"ShopUser"> | string;
    username?: Prisma.StringWithAggregatesFilter<"ShopUser"> | string;
    displayName?: Prisma.StringWithAggregatesFilter<"ShopUser"> | string;
    isStaff?: Prisma.BoolWithAggregatesFilter<"ShopUser"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopUser"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopUser"> | Date | string;
};
export type ShopUserCreateInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateManyInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopUserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopUserGuildIdDiscordUserIdCompoundUniqueInput = {
    guildId: string;
    discordUserId: string;
};
export type ShopUserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    discordUserId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopUserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    discordUserId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopUserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    discordUserId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    displayName?: Prisma.SortOrder;
    isStaff?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopUserNullableScalarRelationFilter = {
    is?: Prisma.ShopUserWhereInput | null;
    isNot?: Prisma.ShopUserWhereInput | null;
};
export type ShopUserScalarRelationFilter = {
    is?: Prisma.ShopUserWhereInput;
    isNot?: Prisma.ShopUserWhereInput;
};
export type ShopUserCreateNestedOneWithoutPriceChangesInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutPriceChangesInput, Prisma.ShopUserUncheckedCreateWithoutPriceChangesInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutPriceChangesInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutPriceChangesNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutPriceChangesInput, Prisma.ShopUserUncheckedCreateWithoutPriceChangesInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutPriceChangesInput;
    upsert?: Prisma.ShopUserUpsertWithoutPriceChangesInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutPriceChangesInput, Prisma.ShopUserUpdateWithoutPriceChangesInput>, Prisma.ShopUserUncheckedUpdateWithoutPriceChangesInput>;
};
export type ShopUserCreateNestedOneWithoutOrdersAcceptedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAcceptedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersAcceptedInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserCreateNestedOneWithoutOrdersClosedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersClosedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersClosedInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserCreateNestedOneWithoutOrdersAsCustomerInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAsCustomerInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersAsCustomerInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserCreateNestedOneWithoutOrdersRejectedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersRejectedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersRejectedInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutOrdersAcceptedNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAcceptedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersAcceptedInput;
    upsert?: Prisma.ShopUserUpsertWithoutOrdersAcceptedInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutOrdersAcceptedInput, Prisma.ShopUserUpdateWithoutOrdersAcceptedInput>, Prisma.ShopUserUncheckedUpdateWithoutOrdersAcceptedInput>;
};
export type ShopUserUpdateOneWithoutOrdersClosedNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersClosedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersClosedInput;
    upsert?: Prisma.ShopUserUpsertWithoutOrdersClosedInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutOrdersClosedInput, Prisma.ShopUserUpdateWithoutOrdersClosedInput>, Prisma.ShopUserUncheckedUpdateWithoutOrdersClosedInput>;
};
export type ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAsCustomerInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersAsCustomerInput;
    upsert?: Prisma.ShopUserUpsertWithoutOrdersAsCustomerInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutOrdersAsCustomerInput, Prisma.ShopUserUpdateWithoutOrdersAsCustomerInput>, Prisma.ShopUserUncheckedUpdateWithoutOrdersAsCustomerInput>;
};
export type ShopUserUpdateOneWithoutOrdersRejectedNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersRejectedInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrdersRejectedInput;
    upsert?: Prisma.ShopUserUpsertWithoutOrdersRejectedInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutOrdersRejectedInput, Prisma.ShopUserUpdateWithoutOrdersRejectedInput>, Prisma.ShopUserUncheckedUpdateWithoutOrdersRejectedInput>;
};
export type ShopUserCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutMovementsInput, Prisma.ShopUserUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutMovementsInput, Prisma.ShopUserUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.ShopUserUpsertWithoutMovementsInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutMovementsInput, Prisma.ShopUserUpdateWithoutMovementsInput>, Prisma.ShopUserUncheckedUpdateWithoutMovementsInput>;
};
export type ShopUserCreateNestedOneWithoutSalesAsBuyerInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedCreateWithoutSalesAsBuyerInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutSalesAsBuyerInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserCreateNestedOneWithoutSalesRegisteredInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedCreateWithoutSalesRegisteredInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutSalesRegisteredInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneRequiredWithoutSalesAsBuyerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedCreateWithoutSalesAsBuyerInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutSalesAsBuyerInput;
    upsert?: Prisma.ShopUserUpsertWithoutSalesAsBuyerInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutSalesAsBuyerInput, Prisma.ShopUserUpdateWithoutSalesAsBuyerInput>, Prisma.ShopUserUncheckedUpdateWithoutSalesAsBuyerInput>;
};
export type ShopUserUpdateOneRequiredWithoutSalesRegisteredNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedCreateWithoutSalesRegisteredInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutSalesRegisteredInput;
    upsert?: Prisma.ShopUserUpsertWithoutSalesRegisteredInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutSalesRegisteredInput, Prisma.ShopUserUpdateWithoutSalesRegisteredInput>, Prisma.ShopUserUncheckedUpdateWithoutSalesRegisteredInput>;
};
export type ShopUserCreateNestedOneWithoutWithdrawalsInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedCreateWithoutWithdrawalsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutWithdrawalsInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedCreateWithoutWithdrawalsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutWithdrawalsInput;
    upsert?: Prisma.ShopUserUpsertWithoutWithdrawalsInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutWithdrawalsInput, Prisma.ShopUserUpdateWithoutWithdrawalsInput>, Prisma.ShopUserUncheckedUpdateWithoutWithdrawalsInput>;
};
export type ShopUserCreateNestedOneWithoutDiscountPoliciesInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedCreateWithoutDiscountPoliciesInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutDiscountPoliciesInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutDiscountPoliciesNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedCreateWithoutDiscountPoliciesInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutDiscountPoliciesInput;
    upsert?: Prisma.ShopUserUpsertWithoutDiscountPoliciesInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutDiscountPoliciesInput, Prisma.ShopUserUpdateWithoutDiscountPoliciesInput>, Prisma.ShopUserUncheckedUpdateWithoutDiscountPoliciesInput>;
};
export type ShopUserCreateNestedOneWithoutAppliedDiscountsInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutAppliedDiscountsInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutAppliedDiscountsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutAppliedDiscountsInput;
    upsert?: Prisma.ShopUserUpsertWithoutAppliedDiscountsInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutAppliedDiscountsInput, Prisma.ShopUserUpdateWithoutAppliedDiscountsInput>, Prisma.ShopUserUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopUserCreateNestedOneWithoutOrderEventsInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrderEventsInput, Prisma.ShopUserUncheckedCreateWithoutOrderEventsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrderEventsInput;
    connect?: Prisma.ShopUserWhereUniqueInput;
};
export type ShopUserUpdateOneWithoutOrderEventsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopUserCreateWithoutOrderEventsInput, Prisma.ShopUserUncheckedCreateWithoutOrderEventsInput>;
    connectOrCreate?: Prisma.ShopUserCreateOrConnectWithoutOrderEventsInput;
    upsert?: Prisma.ShopUserUpsertWithoutOrderEventsInput;
    disconnect?: Prisma.ShopUserWhereInput | boolean;
    delete?: Prisma.ShopUserWhereInput | boolean;
    connect?: Prisma.ShopUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopUserUpdateToOneWithWhereWithoutOrderEventsInput, Prisma.ShopUserUpdateWithoutOrderEventsInput>, Prisma.ShopUserUncheckedUpdateWithoutOrderEventsInput>;
};
export type ShopUserCreateWithoutPriceChangesInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutPriceChangesInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutPriceChangesInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutPriceChangesInput, Prisma.ShopUserUncheckedCreateWithoutPriceChangesInput>;
};
export type ShopUserUpsertWithoutPriceChangesInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutPriceChangesInput, Prisma.ShopUserUncheckedUpdateWithoutPriceChangesInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutPriceChangesInput, Prisma.ShopUserUncheckedCreateWithoutPriceChangesInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutPriceChangesInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutPriceChangesInput, Prisma.ShopUserUncheckedUpdateWithoutPriceChangesInput>;
};
export type ShopUserUpdateWithoutPriceChangesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutPriceChangesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutOrdersAcceptedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutOrdersAcceptedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutOrdersAcceptedInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAcceptedInput>;
};
export type ShopUserCreateWithoutOrdersClosedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutOrdersClosedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutOrdersClosedInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersClosedInput>;
};
export type ShopUserCreateWithoutOrdersAsCustomerInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutOrdersAsCustomerInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutOrdersAsCustomerInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAsCustomerInput>;
};
export type ShopUserCreateWithoutOrdersRejectedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutOrdersRejectedInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutOrdersRejectedInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersRejectedInput>;
};
export type ShopUserUpsertWithoutOrdersAcceptedInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersAcceptedInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAcceptedInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutOrdersAcceptedInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersAcceptedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersAcceptedInput>;
};
export type ShopUserUpdateWithoutOrdersAcceptedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutOrdersAcceptedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUpsertWithoutOrdersClosedInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersClosedInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersClosedInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutOrdersClosedInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersClosedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersClosedInput>;
};
export type ShopUserUpdateWithoutOrdersClosedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutOrdersClosedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUpsertWithoutOrdersAsCustomerInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersAsCustomerInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedCreateWithoutOrdersAsCustomerInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutOrdersAsCustomerInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersAsCustomerInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersAsCustomerInput>;
};
export type ShopUserUpdateWithoutOrdersAsCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutOrdersAsCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUpsertWithoutOrdersRejectedInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersRejectedInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedCreateWithoutOrdersRejectedInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutOrdersRejectedInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrdersRejectedInput, Prisma.ShopUserUncheckedUpdateWithoutOrdersRejectedInput>;
};
export type ShopUserUpdateWithoutOrdersRejectedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutOrdersRejectedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutMovementsInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutMovementsInput, Prisma.ShopUserUncheckedCreateWithoutMovementsInput>;
};
export type ShopUserUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutMovementsInput, Prisma.ShopUserUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutMovementsInput, Prisma.ShopUserUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutMovementsInput, Prisma.ShopUserUncheckedUpdateWithoutMovementsInput>;
};
export type ShopUserUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutSalesAsBuyerInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutSalesAsBuyerInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutSalesAsBuyerInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedCreateWithoutSalesAsBuyerInput>;
};
export type ShopUserCreateWithoutSalesRegisteredInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutSalesRegisteredInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutSalesRegisteredInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedCreateWithoutSalesRegisteredInput>;
};
export type ShopUserUpsertWithoutSalesAsBuyerInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedUpdateWithoutSalesAsBuyerInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedCreateWithoutSalesAsBuyerInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutSalesAsBuyerInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutSalesAsBuyerInput, Prisma.ShopUserUncheckedUpdateWithoutSalesAsBuyerInput>;
};
export type ShopUserUpdateWithoutSalesAsBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutSalesAsBuyerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUpsertWithoutSalesRegisteredInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedUpdateWithoutSalesRegisteredInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedCreateWithoutSalesRegisteredInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutSalesRegisteredInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutSalesRegisteredInput, Prisma.ShopUserUncheckedUpdateWithoutSalesRegisteredInput>;
};
export type ShopUserUpdateWithoutSalesRegisteredInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutSalesRegisteredInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutWithdrawalsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
};
export type ShopUserUncheckedCreateWithoutWithdrawalsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
};
export type ShopUserCreateOrConnectWithoutWithdrawalsInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedCreateWithoutWithdrawalsInput>;
};
export type ShopUserUpsertWithoutWithdrawalsInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedUpdateWithoutWithdrawalsInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedCreateWithoutWithdrawalsInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutWithdrawalsInput, Prisma.ShopUserUncheckedUpdateWithoutWithdrawalsInput>;
};
export type ShopUserUpdateWithoutWithdrawalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutWithdrawalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
};
export type ShopUserCreateWithoutDiscountPoliciesInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutDiscountPoliciesInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutDiscountPoliciesInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedCreateWithoutDiscountPoliciesInput>;
};
export type ShopUserUpsertWithoutDiscountPoliciesInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedUpdateWithoutDiscountPoliciesInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedCreateWithoutDiscountPoliciesInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutDiscountPoliciesInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutDiscountPoliciesInput, Prisma.ShopUserUncheckedUpdateWithoutDiscountPoliciesInput>;
};
export type ShopUserUpdateWithoutDiscountPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutDiscountPoliciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutPerformedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutAppliedDiscountsInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedCreateWithoutAppliedDiscountsInput>;
};
export type ShopUserUpsertWithoutAppliedDiscountsInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedUpdateWithoutAppliedDiscountsInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedCreateWithoutAppliedDiscountsInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutAppliedDiscountsInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutAppliedDiscountsInput, Prisma.ShopUserUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopUserUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    orderEvents?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutPerformedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserCreateWithoutOrderEventsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderCreateNestedManyWithoutRejectedByInput;
    priceChanges?: Prisma.ShopProductPriceCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserUncheckedCreateWithoutOrderEventsInput = {
    id?: string;
    guildId: string;
    discordUserId: string;
    username: string;
    displayName: string;
    isStaff?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutAppliedByInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutPerformedByInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput;
    ordersClosed?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutClosedByInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutCustomerInput;
    ordersRejected?: Prisma.ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedCreateNestedManyWithoutChangedByUserInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutBuyerInput;
    salesRegistered?: Prisma.ShopSaleUncheckedCreateNestedManyWithoutRegisteredByInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutPerformedByInput;
};
export type ShopUserCreateOrConnectWithoutOrderEventsInput = {
    where: Prisma.ShopUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrderEventsInput, Prisma.ShopUserUncheckedCreateWithoutOrderEventsInput>;
};
export type ShopUserUpsertWithoutOrderEventsInput = {
    update: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrderEventsInput, Prisma.ShopUserUncheckedUpdateWithoutOrderEventsInput>;
    create: Prisma.XOR<Prisma.ShopUserCreateWithoutOrderEventsInput, Prisma.ShopUserUncheckedCreateWithoutOrderEventsInput>;
    where?: Prisma.ShopUserWhereInput;
};
export type ShopUserUpdateToOneWithWhereWithoutOrderEventsInput = {
    where?: Prisma.ShopUserWhereInput;
    data: Prisma.XOR<Prisma.ShopUserUpdateWithoutOrderEventsInput, Prisma.ShopUserUncheckedUpdateWithoutOrderEventsInput>;
};
export type ShopUserUpdateWithoutOrderEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUpdateManyWithoutRejectedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutPerformedByNestedInput;
};
export type ShopUserUncheckedUpdateWithoutOrderEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    discordUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    displayName?: Prisma.StringFieldUpdateOperationsInput | string;
    isStaff?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutAppliedByNestedInput;
    discountPolicies?: Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutPerformedByNestedInput;
    ordersAccepted?: Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput;
    ordersClosed?: Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput;
    ordersAsCustomer?: Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput;
    ordersRejected?: Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput;
    priceChanges?: Prisma.ShopProductPriceUncheckedUpdateManyWithoutChangedByUserNestedInput;
    salesAsBuyer?: Prisma.ShopSaleUncheckedUpdateManyWithoutBuyerNestedInput;
    salesRegistered?: Prisma.ShopSaleUncheckedUpdateManyWithoutRegisteredByNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutPerformedByNestedInput;
};
/**
 * Count Type ShopUserCountOutputType
 */
export type ShopUserCountOutputType = {
    appliedDiscounts: number;
    discountPolicies: number;
    movements: number;
    ordersAccepted: number;
    ordersClosed: number;
    ordersAsCustomer: number;
    ordersRejected: number;
    orderEvents: number;
    priceChanges: number;
    salesAsBuyer: number;
    salesRegistered: number;
    withdrawals: number;
};
export type ShopUserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | ShopUserCountOutputTypeCountAppliedDiscountsArgs;
    discountPolicies?: boolean | ShopUserCountOutputTypeCountDiscountPoliciesArgs;
    movements?: boolean | ShopUserCountOutputTypeCountMovementsArgs;
    ordersAccepted?: boolean | ShopUserCountOutputTypeCountOrdersAcceptedArgs;
    ordersClosed?: boolean | ShopUserCountOutputTypeCountOrdersClosedArgs;
    ordersAsCustomer?: boolean | ShopUserCountOutputTypeCountOrdersAsCustomerArgs;
    ordersRejected?: boolean | ShopUserCountOutputTypeCountOrdersRejectedArgs;
    orderEvents?: boolean | ShopUserCountOutputTypeCountOrderEventsArgs;
    priceChanges?: boolean | ShopUserCountOutputTypeCountPriceChangesArgs;
    salesAsBuyer?: boolean | ShopUserCountOutputTypeCountSalesAsBuyerArgs;
    salesRegistered?: boolean | ShopUserCountOutputTypeCountSalesRegisteredArgs;
    withdrawals?: boolean | ShopUserCountOutputTypeCountWithdrawalsArgs;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUserCountOutputType
     */
    select?: Prisma.ShopUserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountAppliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopAppliedDiscountWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountDiscountPoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopDiscountPolicyWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopInventoryMovementWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountOrdersAcceptedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountOrdersClosedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountOrdersAsCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountOrdersRejectedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountOrderEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderEventWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountPriceChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductPriceWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountSalesAsBuyerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSaleWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountSalesRegisteredArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopSaleWhereInput;
};
/**
 * ShopUserCountOutputType without action
 */
export type ShopUserCountOutputTypeCountWithdrawalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopWithdrawalWhereInput;
};
export type ShopUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    discordUserId?: boolean;
    username?: boolean;
    displayName?: boolean;
    isStaff?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    appliedDiscounts?: boolean | Prisma.ShopUser$appliedDiscountsArgs<ExtArgs>;
    discountPolicies?: boolean | Prisma.ShopUser$discountPoliciesArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopUser$movementsArgs<ExtArgs>;
    ordersAccepted?: boolean | Prisma.ShopUser$ordersAcceptedArgs<ExtArgs>;
    ordersClosed?: boolean | Prisma.ShopUser$ordersClosedArgs<ExtArgs>;
    ordersAsCustomer?: boolean | Prisma.ShopUser$ordersAsCustomerArgs<ExtArgs>;
    ordersRejected?: boolean | Prisma.ShopUser$ordersRejectedArgs<ExtArgs>;
    orderEvents?: boolean | Prisma.ShopUser$orderEventsArgs<ExtArgs>;
    priceChanges?: boolean | Prisma.ShopUser$priceChangesArgs<ExtArgs>;
    salesAsBuyer?: boolean | Prisma.ShopUser$salesAsBuyerArgs<ExtArgs>;
    salesRegistered?: boolean | Prisma.ShopUser$salesRegisteredArgs<ExtArgs>;
    withdrawals?: boolean | Prisma.ShopUser$withdrawalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopUserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    discordUserId?: boolean;
    username?: boolean;
    displayName?: boolean;
    isStaff?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    discordUserId?: boolean;
    username?: boolean;
    displayName?: boolean;
    isStaff?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopUser"]>;
export type ShopUserSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    discordUserId?: boolean;
    username?: boolean;
    displayName?: boolean;
    isStaff?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShopUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "discordUserId" | "username" | "displayName" | "isStaff" | "createdAt" | "updatedAt", ExtArgs["result"]["shopUser"]>;
export type ShopUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | Prisma.ShopUser$appliedDiscountsArgs<ExtArgs>;
    discountPolicies?: boolean | Prisma.ShopUser$discountPoliciesArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopUser$movementsArgs<ExtArgs>;
    ordersAccepted?: boolean | Prisma.ShopUser$ordersAcceptedArgs<ExtArgs>;
    ordersClosed?: boolean | Prisma.ShopUser$ordersClosedArgs<ExtArgs>;
    ordersAsCustomer?: boolean | Prisma.ShopUser$ordersAsCustomerArgs<ExtArgs>;
    ordersRejected?: boolean | Prisma.ShopUser$ordersRejectedArgs<ExtArgs>;
    orderEvents?: boolean | Prisma.ShopUser$orderEventsArgs<ExtArgs>;
    priceChanges?: boolean | Prisma.ShopUser$priceChangesArgs<ExtArgs>;
    salesAsBuyer?: boolean | Prisma.ShopUser$salesAsBuyerArgs<ExtArgs>;
    salesRegistered?: boolean | Prisma.ShopUser$salesRegisteredArgs<ExtArgs>;
    withdrawals?: boolean | Prisma.ShopUser$withdrawalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopUserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShopUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ShopUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ShopUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopUser";
    objects: {
        appliedDiscounts: Prisma.$ShopAppliedDiscountPayload<ExtArgs>[];
        discountPolicies: Prisma.$ShopDiscountPolicyPayload<ExtArgs>[];
        movements: Prisma.$ShopInventoryMovementPayload<ExtArgs>[];
        ordersAccepted: Prisma.$ShopOrderPayload<ExtArgs>[];
        ordersClosed: Prisma.$ShopOrderPayload<ExtArgs>[];
        ordersAsCustomer: Prisma.$ShopOrderPayload<ExtArgs>[];
        ordersRejected: Prisma.$ShopOrderPayload<ExtArgs>[];
        orderEvents: Prisma.$ShopOrderEventPayload<ExtArgs>[];
        priceChanges: Prisma.$ShopProductPricePayload<ExtArgs>[];
        salesAsBuyer: Prisma.$ShopSalePayload<ExtArgs>[];
        salesRegistered: Prisma.$ShopSalePayload<ExtArgs>[];
        withdrawals: Prisma.$ShopWithdrawalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        discordUserId: string;
        username: string;
        displayName: string;
        isStaff: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shopUser"]>;
    composites: {};
};
export type ShopUserGetPayload<S extends boolean | null | undefined | ShopUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopUserPayload, S>;
export type ShopUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopUserCountAggregateInputType | true;
};
export interface ShopUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopUser'];
        meta: {
            name: 'ShopUser';
        };
    };
    /**
     * Find zero or one ShopUser that matches the filter.
     * @param {ShopUserFindUniqueArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopUserFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopUserFindUniqueOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopUserFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindFirstOrThrowArgs} args - Arguments to find a ShopUser
     * @example
     * // Get one ShopUser
     * const shopUser = await prisma.shopUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopUsers
     * const shopUsers = await prisma.shopUser.findMany()
     *
     * // Get first 10 ShopUsers
     * const shopUsers = await prisma.shopUser.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopUserFindManyArgs>(args?: Prisma.SelectSubset<T, ShopUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopUser.
     * @param {ShopUserCreateArgs} args - Arguments to create a ShopUser.
     * @example
     * // Create one ShopUser
     * const ShopUser = await prisma.shopUser.create({
     *   data: {
     *     // ... data to create a ShopUser
     *   }
     * })
     *
     */
    create<T extends ShopUserCreateArgs>(args: Prisma.SelectSubset<T, ShopUserCreateArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopUsers.
     * @param {ShopUserCreateManyArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopUserCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopUsers and returns the data saved in the database.
     * @param {ShopUserCreateManyAndReturnArgs} args - Arguments to create many ShopUsers.
     * @example
     * // Create many ShopUsers
     * const shopUser = await prisma.shopUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopUser.
     * @param {ShopUserDeleteArgs} args - Arguments to delete one ShopUser.
     * @example
     * // Delete one ShopUser
     * const ShopUser = await prisma.shopUser.delete({
     *   where: {
     *     // ... filter to delete one ShopUser
     *   }
     * })
     *
     */
    delete<T extends ShopUserDeleteArgs>(args: Prisma.SelectSubset<T, ShopUserDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopUser.
     * @param {ShopUserUpdateArgs} args - Arguments to update one ShopUser.
     * @example
     * // Update one ShopUser
     * const shopUser = await prisma.shopUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopUserUpdateArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopUsers.
     * @param {ShopUserDeleteManyArgs} args - Arguments to filter ShopUsers to delete.
     * @example
     * // Delete a few ShopUsers
     * const { count } = await prisma.shopUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopUserUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopUsers and returns the data updated in the database.
     * @param {ShopUserUpdateManyAndReturnArgs} args - Arguments to update many ShopUsers.
     * @example
     * // Update many ShopUsers
     * const shopUser = await prisma.shopUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopUsers and only return the `id`
     * const shopUserWithIdOnly = await prisma.shopUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopUser.
     * @param {ShopUserUpsertArgs} args - Arguments to update or create a ShopUser.
     * @example
     * // Update or create a ShopUser
     * const shopUser = await prisma.shopUser.upsert({
     *   create: {
     *     // ... data to create a ShopUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopUser we want to update
     *   }
     * })
     */
    upsert<T extends ShopUserUpsertArgs>(args: Prisma.SelectSubset<T, ShopUserUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserCountArgs} args - Arguments to filter ShopUsers to count.
     * @example
     * // Count the number of ShopUsers
     * const count = await prisma.shopUser.count({
     *   where: {
     *     // ... the filter for the ShopUsers we want to count
     *   }
     * })
    **/
    count<T extends ShopUserCountArgs>(args?: Prisma.Subset<T, ShopUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopUserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopUserAggregateArgs>(args: Prisma.Subset<T, ShopUserAggregateArgs>): Prisma.PrismaPromise<GetShopUserAggregateType<T>>;
    /**
     * Group by ShopUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopUserGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopUserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopUser model
     */
    readonly fields: ShopUserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopUser.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appliedDiscounts<T extends Prisma.ShopUser$appliedDiscountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$appliedDiscountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    discountPolicies<T extends Prisma.ShopUser$discountPoliciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$discountPoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movements<T extends Prisma.ShopUser$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAccepted<T extends Prisma.ShopUser$ordersAcceptedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$ordersAcceptedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersClosed<T extends Prisma.ShopUser$ordersClosedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$ordersClosedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersAsCustomer<T extends Prisma.ShopUser$ordersAsCustomerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$ordersAsCustomerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordersRejected<T extends Prisma.ShopUser$ordersRejectedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$ordersRejectedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderEvents<T extends Prisma.ShopUser$orderEventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$orderEventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    priceChanges<T extends Prisma.ShopUser$priceChangesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$priceChangesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesAsBuyer<T extends Prisma.ShopUser$salesAsBuyerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$salesAsBuyerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    salesRegistered<T extends Prisma.ShopUser$salesRegisteredArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$salesRegisteredArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    withdrawals<T extends Prisma.ShopUser$withdrawalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUser$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ShopUser model
 */
export interface ShopUserFieldRefs {
    readonly id: Prisma.FieldRef<"ShopUser", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopUser", 'String'>;
    readonly discordUserId: Prisma.FieldRef<"ShopUser", 'String'>;
    readonly username: Prisma.FieldRef<"ShopUser", 'String'>;
    readonly displayName: Prisma.FieldRef<"ShopUser", 'String'>;
    readonly isStaff: Prisma.FieldRef<"ShopUser", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ShopUser", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShopUser", 'DateTime'>;
}
/**
 * ShopUser findUnique
 */
export type ShopUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopUser to fetch.
     */
    where: Prisma.ShopUserWhereUniqueInput;
};
/**
 * ShopUser findUniqueOrThrow
 */
export type ShopUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopUser to fetch.
     */
    where: Prisma.ShopUserWhereUniqueInput;
};
/**
 * ShopUser findFirst
 */
export type ShopUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopUsers.
     */
    cursor?: Prisma.ShopUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
/**
 * ShopUser findFirstOrThrow
 */
export type ShopUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopUser to fetch.
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopUsers.
     */
    cursor?: Prisma.ShopUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
/**
 * ShopUser findMany
 */
export type ShopUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopUsers to fetch.
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopUsers to fetch.
     */
    orderBy?: Prisma.ShopUserOrderByWithRelationInput | Prisma.ShopUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopUsers.
     */
    cursor?: Prisma.ShopUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopUsers.
     */
    distinct?: Prisma.ShopUserScalarFieldEnum | Prisma.ShopUserScalarFieldEnum[];
};
/**
 * ShopUser create
 */
export type ShopUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShopUser.
     */
    data: Prisma.XOR<Prisma.ShopUserCreateInput, Prisma.ShopUserUncheckedCreateInput>;
};
/**
 * ShopUser createMany
 */
export type ShopUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopUsers.
     */
    data: Prisma.ShopUserCreateManyInput | Prisma.ShopUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopUser createManyAndReturn
 */
export type ShopUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: Prisma.ShopUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopUsers.
     */
    data: Prisma.ShopUserCreateManyInput | Prisma.ShopUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopUser update
 */
export type ShopUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShopUser.
     */
    data: Prisma.XOR<Prisma.ShopUserUpdateInput, Prisma.ShopUserUncheckedUpdateInput>;
    /**
     * Choose, which ShopUser to update.
     */
    where: Prisma.ShopUserWhereUniqueInput;
};
/**
 * ShopUser updateMany
 */
export type ShopUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopUsers.
     */
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyInput>;
    /**
     * Filter which ShopUsers to update
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number;
};
/**
 * ShopUser updateManyAndReturn
 */
export type ShopUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopUser
     */
    select?: Prisma.ShopUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopUser
     */
    omit?: Prisma.ShopUserOmit<ExtArgs> | null;
    /**
     * The data used to update ShopUsers.
     */
    data: Prisma.XOR<Prisma.ShopUserUpdateManyMutationInput, Prisma.ShopUserUncheckedUpdateManyInput>;
    /**
     * Filter which ShopUsers to update
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * Limit how many ShopUsers to update.
     */
    limit?: number;
};
/**
 * ShopUser upsert
 */
export type ShopUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShopUser to update in case it exists.
     */
    where: Prisma.ShopUserWhereUniqueInput;
    /**
     * In case the ShopUser found by the `where` argument doesn't exist, create a new ShopUser with this data.
     */
    create: Prisma.XOR<Prisma.ShopUserCreateInput, Prisma.ShopUserUncheckedCreateInput>;
    /**
     * In case the ShopUser was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopUserUpdateInput, Prisma.ShopUserUncheckedUpdateInput>;
};
/**
 * ShopUser delete
 */
export type ShopUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShopUser to delete.
     */
    where: Prisma.ShopUserWhereUniqueInput;
};
/**
 * ShopUser deleteMany
 */
export type ShopUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopUsers to delete
     */
    where?: Prisma.ShopUserWhereInput;
    /**
     * Limit how many ShopUsers to delete.
     */
    limit?: number;
};
/**
 * ShopUser.appliedDiscounts
 */
export type ShopUser$appliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopAppliedDiscountWhereInput;
    orderBy?: Prisma.ShopAppliedDiscountOrderByWithRelationInput | Prisma.ShopAppliedDiscountOrderByWithRelationInput[];
    cursor?: Prisma.ShopAppliedDiscountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopAppliedDiscountScalarFieldEnum | Prisma.ShopAppliedDiscountScalarFieldEnum[];
};
/**
 * ShopUser.discountPolicies
 */
export type ShopUser$discountPoliciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopUser.movements
 */
export type ShopUser$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopInventoryMovementWhereInput;
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopInventoryMovementScalarFieldEnum | Prisma.ShopInventoryMovementScalarFieldEnum[];
};
/**
 * ShopUser.ordersAccepted
 */
export type ShopUser$ordersAcceptedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopUser.ordersClosed
 */
export type ShopUser$ordersClosedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopUser.ordersAsCustomer
 */
export type ShopUser$ordersAsCustomerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopUser.ordersRejected
 */
export type ShopUser$ordersRejectedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopUser.orderEvents
 */
export type ShopUser$orderEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopOrderEventWhereInput;
    orderBy?: Prisma.ShopOrderEventOrderByWithRelationInput | Prisma.ShopOrderEventOrderByWithRelationInput[];
    cursor?: Prisma.ShopOrderEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopOrderEventScalarFieldEnum | Prisma.ShopOrderEventScalarFieldEnum[];
};
/**
 * ShopUser.priceChanges
 */
export type ShopUser$priceChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopUser.salesAsBuyer
 */
export type ShopUser$salesAsBuyerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopSaleWhereInput;
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopSaleScalarFieldEnum | Prisma.ShopSaleScalarFieldEnum[];
};
/**
 * ShopUser.salesRegistered
 */
export type ShopUser$salesRegisteredArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopSaleWhereInput;
    orderBy?: Prisma.ShopSaleOrderByWithRelationInput | Prisma.ShopSaleOrderByWithRelationInput[];
    cursor?: Prisma.ShopSaleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopSaleScalarFieldEnum | Prisma.ShopSaleScalarFieldEnum[];
};
/**
 * ShopUser.withdrawals
 */
export type ShopUser$withdrawalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopWithdrawalWhereInput;
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopWithdrawalScalarFieldEnum | Prisma.ShopWithdrawalScalarFieldEnum[];
};
/**
 * ShopUser without action
 */
export type ShopUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ShopUser.d.ts.map