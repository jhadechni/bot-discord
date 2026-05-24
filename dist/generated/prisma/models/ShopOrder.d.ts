import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopOrder
 *
 */
export type ShopOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopOrderPayload>;
export type AggregateShopOrder = {
    _count: ShopOrderCountAggregateOutputType | null;
    _avg: ShopOrderAvgAggregateOutputType | null;
    _sum: ShopOrderSumAggregateOutputType | null;
    _min: ShopOrderMinAggregateOutputType | null;
    _max: ShopOrderMaxAggregateOutputType | null;
};
export type ShopOrderAvgAggregateOutputType = {
    subtotalAmount: runtime.Decimal | null;
    totalDiscountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type ShopOrderSumAggregateOutputType = {
    subtotalAmount: runtime.Decimal | null;
    totalDiscountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
};
export type ShopOrderMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    orderCode: string | null;
    customerUserId: string | null;
    status: string | null;
    ticketChannelId: string | null;
    staffChannelId: string | null;
    acceptedByUserId: string | null;
    rejectedByUserId: string | null;
    closedByUserId: string | null;
    rejectionReason: string | null;
    cancelReason: string | null;
    subtotalAmount: runtime.Decimal | null;
    totalDiscountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    createdAt: Date | null;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    closedAt: Date | null;
    cancelledAt: Date | null;
};
export type ShopOrderMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    orderCode: string | null;
    customerUserId: string | null;
    status: string | null;
    ticketChannelId: string | null;
    staffChannelId: string | null;
    acceptedByUserId: string | null;
    rejectedByUserId: string | null;
    closedByUserId: string | null;
    rejectionReason: string | null;
    cancelReason: string | null;
    subtotalAmount: runtime.Decimal | null;
    totalDiscountAmount: runtime.Decimal | null;
    totalAmount: runtime.Decimal | null;
    createdAt: Date | null;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    closedAt: Date | null;
    cancelledAt: Date | null;
};
export type ShopOrderCountAggregateOutputType = {
    id: number;
    guildId: number;
    orderCode: number;
    customerUserId: number;
    status: number;
    ticketChannelId: number;
    staffChannelId: number;
    acceptedByUserId: number;
    rejectedByUserId: number;
    closedByUserId: number;
    rejectionReason: number;
    cancelReason: number;
    subtotalAmount: number;
    totalDiscountAmount: number;
    totalAmount: number;
    createdAt: number;
    acceptedAt: number;
    rejectedAt: number;
    closedAt: number;
    cancelledAt: number;
    _all: number;
};
export type ShopOrderAvgAggregateInputType = {
    subtotalAmount?: true;
    totalDiscountAmount?: true;
    totalAmount?: true;
};
export type ShopOrderSumAggregateInputType = {
    subtotalAmount?: true;
    totalDiscountAmount?: true;
    totalAmount?: true;
};
export type ShopOrderMinAggregateInputType = {
    id?: true;
    guildId?: true;
    orderCode?: true;
    customerUserId?: true;
    status?: true;
    ticketChannelId?: true;
    staffChannelId?: true;
    acceptedByUserId?: true;
    rejectedByUserId?: true;
    closedByUserId?: true;
    rejectionReason?: true;
    cancelReason?: true;
    subtotalAmount?: true;
    totalDiscountAmount?: true;
    totalAmount?: true;
    createdAt?: true;
    acceptedAt?: true;
    rejectedAt?: true;
    closedAt?: true;
    cancelledAt?: true;
};
export type ShopOrderMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    orderCode?: true;
    customerUserId?: true;
    status?: true;
    ticketChannelId?: true;
    staffChannelId?: true;
    acceptedByUserId?: true;
    rejectedByUserId?: true;
    closedByUserId?: true;
    rejectionReason?: true;
    cancelReason?: true;
    subtotalAmount?: true;
    totalDiscountAmount?: true;
    totalAmount?: true;
    createdAt?: true;
    acceptedAt?: true;
    rejectedAt?: true;
    closedAt?: true;
    cancelledAt?: true;
};
export type ShopOrderCountAggregateInputType = {
    id?: true;
    guildId?: true;
    orderCode?: true;
    customerUserId?: true;
    status?: true;
    ticketChannelId?: true;
    staffChannelId?: true;
    acceptedByUserId?: true;
    rejectedByUserId?: true;
    closedByUserId?: true;
    rejectionReason?: true;
    cancelReason?: true;
    subtotalAmount?: true;
    totalDiscountAmount?: true;
    totalAmount?: true;
    createdAt?: true;
    acceptedAt?: true;
    rejectedAt?: true;
    closedAt?: true;
    cancelledAt?: true;
    _all?: true;
};
export type ShopOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrder to aggregate.
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopOrders
    **/
    _count?: true | ShopOrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopOrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopOrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopOrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopOrderMaxAggregateInputType;
};
export type GetShopOrderAggregateType<T extends ShopOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateShopOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopOrder[P]> : Prisma.GetScalarType<T[P], AggregateShopOrder[P]>;
};
export type ShopOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderWhereInput;
    orderBy?: Prisma.ShopOrderOrderByWithAggregationInput | Prisma.ShopOrderOrderByWithAggregationInput[];
    by: Prisma.ShopOrderScalarFieldEnum[] | Prisma.ShopOrderScalarFieldEnum;
    having?: Prisma.ShopOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopOrderCountAggregateInputType | true;
    _avg?: ShopOrderAvgAggregateInputType;
    _sum?: ShopOrderSumAggregateInputType;
    _min?: ShopOrderMinAggregateInputType;
    _max?: ShopOrderMaxAggregateInputType;
};
export type ShopOrderGroupByOutputType = {
    id: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status: string;
    ticketChannelId: string | null;
    staffChannelId: string | null;
    acceptedByUserId: string | null;
    rejectedByUserId: string | null;
    closedByUserId: string | null;
    rejectionReason: string | null;
    cancelReason: string | null;
    subtotalAmount: runtime.Decimal;
    totalDiscountAmount: runtime.Decimal;
    totalAmount: runtime.Decimal;
    createdAt: Date;
    acceptedAt: Date | null;
    rejectedAt: Date | null;
    closedAt: Date | null;
    cancelledAt: Date | null;
    _count: ShopOrderCountAggregateOutputType | null;
    _avg: ShopOrderAvgAggregateOutputType | null;
    _sum: ShopOrderSumAggregateOutputType | null;
    _min: ShopOrderMinAggregateOutputType | null;
    _max: ShopOrderMaxAggregateOutputType | null;
};
export type GetShopOrderGroupByPayload<T extends ShopOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopOrderGroupByOutputType[P]>;
}>>;
export type ShopOrderWhereInput = {
    AND?: Prisma.ShopOrderWhereInput | Prisma.ShopOrderWhereInput[];
    OR?: Prisma.ShopOrderWhereInput[];
    NOT?: Prisma.ShopOrderWhereInput | Prisma.ShopOrderWhereInput[];
    id?: Prisma.StringFilter<"ShopOrder"> | string;
    guildId?: Prisma.StringFilter<"ShopOrder"> | string;
    orderCode?: Prisma.StringFilter<"ShopOrder"> | string;
    customerUserId?: Prisma.StringFilter<"ShopOrder"> | string;
    status?: Prisma.StringFilter<"ShopOrder"> | string;
    ticketChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    staffChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    acceptedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    closedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    cancelReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrder"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    rejectedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    acceptedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    closedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    customer?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
    rejectedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    events?: Prisma.ShopOrderEventListRelationFilter;
    items?: Prisma.ShopOrderItemListRelationFilter;
    sale?: Prisma.XOR<Prisma.ShopSaleNullableScalarRelationFilter, Prisma.ShopSaleWhereInput> | null;
};
export type ShopOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderCode?: Prisma.SortOrder;
    customerUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketChannelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    staffChannelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    appliedDiscounts?: Prisma.ShopAppliedDiscountOrderByRelationAggregateInput;
    movements?: Prisma.ShopInventoryMovementOrderByRelationAggregateInput;
    acceptedBy?: Prisma.ShopUserOrderByWithRelationInput;
    closedBy?: Prisma.ShopUserOrderByWithRelationInput;
    customer?: Prisma.ShopUserOrderByWithRelationInput;
    rejectedBy?: Prisma.ShopUserOrderByWithRelationInput;
    events?: Prisma.ShopOrderEventOrderByRelationAggregateInput;
    items?: Prisma.ShopOrderItemOrderByRelationAggregateInput;
    sale?: Prisma.ShopSaleOrderByWithRelationInput;
};
export type ShopOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderCode?: string;
    AND?: Prisma.ShopOrderWhereInput | Prisma.ShopOrderWhereInput[];
    OR?: Prisma.ShopOrderWhereInput[];
    NOT?: Prisma.ShopOrderWhereInput | Prisma.ShopOrderWhereInput[];
    guildId?: Prisma.StringFilter<"ShopOrder"> | string;
    customerUserId?: Prisma.StringFilter<"ShopOrder"> | string;
    status?: Prisma.StringFilter<"ShopOrder"> | string;
    ticketChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    staffChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    acceptedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    closedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    cancelReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrder"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    rejectedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    acceptedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    closedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    customer?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
    rejectedBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    events?: Prisma.ShopOrderEventListRelationFilter;
    items?: Prisma.ShopOrderItemListRelationFilter;
    sale?: Prisma.XOR<Prisma.ShopSaleNullableScalarRelationFilter, Prisma.ShopSaleWhereInput> | null;
}, "id" | "orderCode">;
export type ShopOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderCode?: Prisma.SortOrder;
    customerUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketChannelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    staffChannelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    acceptedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelReason?: Prisma.SortOrderInput | Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    closedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ShopOrderCountOrderByAggregateInput;
    _avg?: Prisma.ShopOrderAvgOrderByAggregateInput;
    _max?: Prisma.ShopOrderMaxOrderByAggregateInput;
    _min?: Prisma.ShopOrderMinOrderByAggregateInput;
    _sum?: Prisma.ShopOrderSumOrderByAggregateInput;
};
export type ShopOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopOrderScalarWhereWithAggregatesInput | Prisma.ShopOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopOrderScalarWhereWithAggregatesInput | Prisma.ShopOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopOrder"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopOrder"> | string;
    orderCode?: Prisma.StringWithAggregatesFilter<"ShopOrder"> | string;
    customerUserId?: Prisma.StringWithAggregatesFilter<"ShopOrder"> | string;
    status?: Prisma.StringWithAggregatesFilter<"ShopOrder"> | string;
    ticketChannelId?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    staffChannelId?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    acceptedByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    rejectedByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    closedByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    rejectionReason?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    cancelReason?: Prisma.StringNullableWithAggregatesFilter<"ShopOrder"> | string | null;
    subtotalAmount?: Prisma.DecimalWithAggregatesFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalWithAggregatesFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopOrder"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopOrder"> | Date | string | null;
    rejectedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopOrder"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopOrder"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopOrder"> | Date | string | null;
};
export type ShopOrderCreateInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderCreateManyInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type ShopOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopOrderListRelationFilter = {
    every?: Prisma.ShopOrderWhereInput;
    some?: Prisma.ShopOrderWhereInput;
    none?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderCode?: Prisma.SortOrder;
    customerUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketChannelId?: Prisma.SortOrder;
    staffChannelId?: Prisma.SortOrder;
    acceptedByUserId?: Prisma.SortOrder;
    rejectedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rejectedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type ShopOrderAvgOrderByAggregateInput = {
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type ShopOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderCode?: Prisma.SortOrder;
    customerUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketChannelId?: Prisma.SortOrder;
    staffChannelId?: Prisma.SortOrder;
    acceptedByUserId?: Prisma.SortOrder;
    rejectedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rejectedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type ShopOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    orderCode?: Prisma.SortOrder;
    customerUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ticketChannelId?: Prisma.SortOrder;
    staffChannelId?: Prisma.SortOrder;
    acceptedByUserId?: Prisma.SortOrder;
    rejectedByUserId?: Prisma.SortOrder;
    closedByUserId?: Prisma.SortOrder;
    rejectionReason?: Prisma.SortOrder;
    cancelReason?: Prisma.SortOrder;
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    acceptedAt?: Prisma.SortOrder;
    rejectedAt?: Prisma.SortOrder;
    closedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
};
export type ShopOrderSumOrderByAggregateInput = {
    subtotalAmount?: Prisma.SortOrder;
    totalDiscountAmount?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
};
export type ShopOrderScalarRelationFilter = {
    is?: Prisma.ShopOrderWhereInput;
    isNot?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderNullableScalarRelationFilter = {
    is?: Prisma.ShopOrderWhereInput | null;
    isNot?: Prisma.ShopOrderWhereInput | null;
};
export type ShopOrderCreateNestedManyWithoutAcceptedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput> | Prisma.ShopOrderCreateWithoutAcceptedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput | Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput[];
    createMany?: Prisma.ShopOrderCreateManyAcceptedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderCreateNestedManyWithoutClosedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput> | Prisma.ShopOrderCreateWithoutClosedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutClosedByInput | Prisma.ShopOrderCreateOrConnectWithoutClosedByInput[];
    createMany?: Prisma.ShopOrderCreateManyClosedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput> | Prisma.ShopOrderCreateWithoutCustomerInput[] | Prisma.ShopOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutCustomerInput | Prisma.ShopOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ShopOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderCreateNestedManyWithoutRejectedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput> | Prisma.ShopOrderCreateWithoutRejectedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput | Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput[];
    createMany?: Prisma.ShopOrderCreateManyRejectedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderUncheckedCreateNestedManyWithoutAcceptedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput> | Prisma.ShopOrderCreateWithoutAcceptedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput | Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput[];
    createMany?: Prisma.ShopOrderCreateManyAcceptedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderUncheckedCreateNestedManyWithoutClosedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput> | Prisma.ShopOrderCreateWithoutClosedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutClosedByInput | Prisma.ShopOrderCreateOrConnectWithoutClosedByInput[];
    createMany?: Prisma.ShopOrderCreateManyClosedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput> | Prisma.ShopOrderCreateWithoutCustomerInput[] | Prisma.ShopOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutCustomerInput | Prisma.ShopOrderCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.ShopOrderCreateManyCustomerInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderUncheckedCreateNestedManyWithoutRejectedByInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput> | Prisma.ShopOrderCreateWithoutRejectedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput | Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput[];
    createMany?: Prisma.ShopOrderCreateManyRejectedByInputEnvelope;
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
};
export type ShopOrderUpdateManyWithoutAcceptedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput> | Prisma.ShopOrderCreateWithoutAcceptedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput | Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutAcceptedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutAcceptedByInput[];
    createMany?: Prisma.ShopOrderCreateManyAcceptedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutAcceptedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutAcceptedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutAcceptedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutAcceptedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUpdateManyWithoutClosedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput> | Prisma.ShopOrderCreateWithoutClosedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutClosedByInput | Prisma.ShopOrderCreateOrConnectWithoutClosedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutClosedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutClosedByInput[];
    createMany?: Prisma.ShopOrderCreateManyClosedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutClosedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutClosedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutClosedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutClosedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput> | Prisma.ShopOrderCreateWithoutCustomerInput[] | Prisma.ShopOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutCustomerInput | Prisma.ShopOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ShopOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.ShopOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUpdateManyWithoutRejectedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput> | Prisma.ShopOrderCreateWithoutRejectedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput | Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutRejectedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutRejectedByInput[];
    createMany?: Prisma.ShopOrderCreateManyRejectedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutRejectedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutRejectedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutRejectedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutRejectedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUncheckedUpdateManyWithoutAcceptedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput> | Prisma.ShopOrderCreateWithoutAcceptedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput | Prisma.ShopOrderCreateOrConnectWithoutAcceptedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutAcceptedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutAcceptedByInput[];
    createMany?: Prisma.ShopOrderCreateManyAcceptedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutAcceptedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutAcceptedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutAcceptedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutAcceptedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUncheckedUpdateManyWithoutClosedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput> | Prisma.ShopOrderCreateWithoutClosedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutClosedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutClosedByInput | Prisma.ShopOrderCreateOrConnectWithoutClosedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutClosedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutClosedByInput[];
    createMany?: Prisma.ShopOrderCreateManyClosedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutClosedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutClosedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutClosedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutClosedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput> | Prisma.ShopOrderCreateWithoutCustomerInput[] | Prisma.ShopOrderUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutCustomerInput | Prisma.ShopOrderCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutCustomerInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.ShopOrderCreateManyCustomerInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutCustomerInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutCustomerInput | Prisma.ShopOrderUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderUncheckedUpdateManyWithoutRejectedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput> | Prisma.ShopOrderCreateWithoutRejectedByInput[] | Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput[];
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput | Prisma.ShopOrderCreateOrConnectWithoutRejectedByInput[];
    upsert?: Prisma.ShopOrderUpsertWithWhereUniqueWithoutRejectedByInput | Prisma.ShopOrderUpsertWithWhereUniqueWithoutRejectedByInput[];
    createMany?: Prisma.ShopOrderCreateManyRejectedByInputEnvelope;
    set?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    disconnect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    delete?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    connect?: Prisma.ShopOrderWhereUniqueInput | Prisma.ShopOrderWhereUniqueInput[];
    update?: Prisma.ShopOrderUpdateWithWhereUniqueWithoutRejectedByInput | Prisma.ShopOrderUpdateWithWhereUniqueWithoutRejectedByInput[];
    updateMany?: Prisma.ShopOrderUpdateManyWithWhereWithoutRejectedByInput | Prisma.ShopOrderUpdateManyWithWhereWithoutRejectedByInput[];
    deleteMany?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
};
export type ShopOrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutItemsInput, Prisma.ShopOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
};
export type ShopOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutItemsInput, Prisma.ShopOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.ShopOrderUpsertWithoutItemsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopOrderUpdateToOneWithWhereWithoutItemsInput, Prisma.ShopOrderUpdateWithoutItemsInput>, Prisma.ShopOrderUncheckedUpdateWithoutItemsInput>;
};
export type ShopOrderCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutMovementsInput, Prisma.ShopOrderUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
};
export type ShopOrderUpdateOneWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutMovementsInput, Prisma.ShopOrderUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.ShopOrderUpsertWithoutMovementsInput;
    disconnect?: Prisma.ShopOrderWhereInput | boolean;
    delete?: Prisma.ShopOrderWhereInput | boolean;
    connect?: Prisma.ShopOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopOrderUpdateToOneWithWhereWithoutMovementsInput, Prisma.ShopOrderUpdateWithoutMovementsInput>, Prisma.ShopOrderUncheckedUpdateWithoutMovementsInput>;
};
export type ShopOrderCreateNestedOneWithoutSaleInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutSaleInput, Prisma.ShopOrderUncheckedCreateWithoutSaleInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutSaleInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
};
export type ShopOrderUpdateOneRequiredWithoutSaleNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutSaleInput, Prisma.ShopOrderUncheckedCreateWithoutSaleInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutSaleInput;
    upsert?: Prisma.ShopOrderUpsertWithoutSaleInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopOrderUpdateToOneWithWhereWithoutSaleInput, Prisma.ShopOrderUpdateWithoutSaleInput>, Prisma.ShopOrderUncheckedUpdateWithoutSaleInput>;
};
export type ShopOrderCreateNestedOneWithoutAppliedDiscountsInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAppliedDiscountsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
};
export type ShopOrderUpdateOneWithoutAppliedDiscountsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutAppliedDiscountsInput;
    upsert?: Prisma.ShopOrderUpsertWithoutAppliedDiscountsInput;
    disconnect?: Prisma.ShopOrderWhereInput | boolean;
    delete?: Prisma.ShopOrderWhereInput | boolean;
    connect?: Prisma.ShopOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopOrderUpdateToOneWithWhereWithoutAppliedDiscountsInput, Prisma.ShopOrderUpdateWithoutAppliedDiscountsInput>, Prisma.ShopOrderUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopOrderCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutEventsInput, Prisma.ShopOrderUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutEventsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
};
export type ShopOrderUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopOrderCreateWithoutEventsInput, Prisma.ShopOrderUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ShopOrderCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.ShopOrderUpsertWithoutEventsInput;
    connect?: Prisma.ShopOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopOrderUpdateToOneWithWhereWithoutEventsInput, Prisma.ShopOrderUpdateWithoutEventsInput>, Prisma.ShopOrderUncheckedUpdateWithoutEventsInput>;
};
export type ShopOrderCreateWithoutAcceptedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutAcceptedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutAcceptedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput>;
};
export type ShopOrderCreateManyAcceptedByInputEnvelope = {
    data: Prisma.ShopOrderCreateManyAcceptedByInput | Prisma.ShopOrderCreateManyAcceptedByInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderCreateWithoutClosedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutClosedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutClosedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput>;
};
export type ShopOrderCreateManyClosedByInputEnvelope = {
    data: Prisma.ShopOrderCreateManyClosedByInput | Prisma.ShopOrderCreateManyClosedByInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderCreateWithoutCustomerInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutCustomerInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutCustomerInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput>;
};
export type ShopOrderCreateManyCustomerInputEnvelope = {
    data: Prisma.ShopOrderCreateManyCustomerInput | Prisma.ShopOrderCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderCreateWithoutRejectedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutRejectedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutRejectedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput>;
};
export type ShopOrderCreateManyRejectedByInputEnvelope = {
    data: Prisma.ShopOrderCreateManyRejectedByInput | Prisma.ShopOrderCreateManyRejectedByInput[];
    skipDuplicates?: boolean;
};
export type ShopOrderUpsertWithWhereUniqueWithoutAcceptedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedUpdateWithoutAcceptedByInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedCreateWithoutAcceptedByInput>;
};
export type ShopOrderUpdateWithWhereUniqueWithoutAcceptedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutAcceptedByInput, Prisma.ShopOrderUncheckedUpdateWithoutAcceptedByInput>;
};
export type ShopOrderUpdateManyWithWhereWithoutAcceptedByInput = {
    where: Prisma.ShopOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyWithoutAcceptedByInput>;
};
export type ShopOrderScalarWhereInput = {
    AND?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
    OR?: Prisma.ShopOrderScalarWhereInput[];
    NOT?: Prisma.ShopOrderScalarWhereInput | Prisma.ShopOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopOrder"> | string;
    guildId?: Prisma.StringFilter<"ShopOrder"> | string;
    orderCode?: Prisma.StringFilter<"ShopOrder"> | string;
    customerUserId?: Prisma.StringFilter<"ShopOrder"> | string;
    status?: Prisma.StringFilter<"ShopOrder"> | string;
    ticketChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    staffChannelId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    acceptedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    closedByUserId?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    rejectionReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    cancelReason?: Prisma.StringNullableFilter<"ShopOrder"> | string | null;
    subtotalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFilter<"ShopOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"ShopOrder"> | Date | string;
    acceptedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    rejectedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    closedAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"ShopOrder"> | Date | string | null;
};
export type ShopOrderUpsertWithWhereUniqueWithoutClosedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutClosedByInput, Prisma.ShopOrderUncheckedUpdateWithoutClosedByInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutClosedByInput, Prisma.ShopOrderUncheckedCreateWithoutClosedByInput>;
};
export type ShopOrderUpdateWithWhereUniqueWithoutClosedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutClosedByInput, Prisma.ShopOrderUncheckedUpdateWithoutClosedByInput>;
};
export type ShopOrderUpdateManyWithWhereWithoutClosedByInput = {
    where: Prisma.ShopOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyWithoutClosedByInput>;
};
export type ShopOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutCustomerInput, Prisma.ShopOrderUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutCustomerInput, Prisma.ShopOrderUncheckedCreateWithoutCustomerInput>;
};
export type ShopOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutCustomerInput, Prisma.ShopOrderUncheckedUpdateWithoutCustomerInput>;
};
export type ShopOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.ShopOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyWithoutCustomerInput>;
};
export type ShopOrderUpsertWithWhereUniqueWithoutRejectedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutRejectedByInput, Prisma.ShopOrderUncheckedUpdateWithoutRejectedByInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutRejectedByInput, Prisma.ShopOrderUncheckedCreateWithoutRejectedByInput>;
};
export type ShopOrderUpdateWithWhereUniqueWithoutRejectedByInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutRejectedByInput, Prisma.ShopOrderUncheckedUpdateWithoutRejectedByInput>;
};
export type ShopOrderUpdateManyWithWhereWithoutRejectedByInput = {
    where: Prisma.ShopOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyWithoutRejectedByInput>;
};
export type ShopOrderCreateWithoutItemsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutItemsInput, Prisma.ShopOrderUncheckedCreateWithoutItemsInput>;
};
export type ShopOrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutItemsInput, Prisma.ShopOrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutItemsInput, Prisma.ShopOrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.ShopOrderWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutItemsInput, Prisma.ShopOrderUncheckedUpdateWithoutItemsInput>;
};
export type ShopOrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutMovementsInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutMovementsInput, Prisma.ShopOrderUncheckedCreateWithoutMovementsInput>;
};
export type ShopOrderUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutMovementsInput, Prisma.ShopOrderUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutMovementsInput, Prisma.ShopOrderUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.ShopOrderWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutMovementsInput, Prisma.ShopOrderUncheckedUpdateWithoutMovementsInput>;
};
export type ShopOrderUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderCreateWithoutSaleInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutSaleInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutSaleInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutSaleInput, Prisma.ShopOrderUncheckedCreateWithoutSaleInput>;
};
export type ShopOrderUpsertWithoutSaleInput = {
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutSaleInput, Prisma.ShopOrderUncheckedUpdateWithoutSaleInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutSaleInput, Prisma.ShopOrderUncheckedCreateWithoutSaleInput>;
    where?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderUpdateToOneWithWhereWithoutSaleInput = {
    where?: Prisma.ShopOrderWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutSaleInput, Prisma.ShopOrderUncheckedUpdateWithoutSaleInput>;
};
export type ShopOrderUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutSaleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
};
export type ShopOrderCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    events?: Prisma.ShopOrderEventCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    events?: Prisma.ShopOrderEventUncheckedCreateNestedManyWithoutOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutAppliedDiscountsInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedCreateWithoutAppliedDiscountsInput>;
};
export type ShopOrderUpsertWithoutAppliedDiscountsInput = {
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedUpdateWithoutAppliedDiscountsInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedCreateWithoutAppliedDiscountsInput>;
    where?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderUpdateToOneWithWhereWithoutAppliedDiscountsInput = {
    where?: Prisma.ShopOrderWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutAppliedDiscountsInput, Prisma.ShopOrderUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopOrderUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderCreateWithoutEventsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutRelatedOrderInput;
    acceptedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersAcceptedInput;
    closedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersClosedInput;
    customer: Prisma.ShopUserCreateNestedOneWithoutOrdersAsCustomerInput;
    rejectedBy?: Prisma.ShopUserCreateNestedOneWithoutOrdersRejectedInput;
    items?: Prisma.ShopOrderItemCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleCreateNestedOneWithoutOrderInput;
};
export type ShopOrderUncheckedCreateWithoutEventsInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutOrderInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutRelatedOrderInput;
    items?: Prisma.ShopOrderItemUncheckedCreateNestedManyWithoutOrderInput;
    sale?: Prisma.ShopSaleUncheckedCreateNestedOneWithoutOrderInput;
};
export type ShopOrderCreateOrConnectWithoutEventsInput = {
    where: Prisma.ShopOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutEventsInput, Prisma.ShopOrderUncheckedCreateWithoutEventsInput>;
};
export type ShopOrderUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.ShopOrderUpdateWithoutEventsInput, Prisma.ShopOrderUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.ShopOrderCreateWithoutEventsInput, Prisma.ShopOrderUncheckedCreateWithoutEventsInput>;
    where?: Prisma.ShopOrderWhereInput;
};
export type ShopOrderUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.ShopOrderWhereInput;
    data: Prisma.XOR<Prisma.ShopOrderUpdateWithoutEventsInput, Prisma.ShopOrderUncheckedUpdateWithoutEventsInput>;
};
export type ShopOrderUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderCreateManyAcceptedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type ShopOrderCreateManyClosedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type ShopOrderCreateManyCustomerInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    rejectedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type ShopOrderCreateManyRejectedByInput = {
    id?: string;
    guildId: string;
    orderCode: string;
    customerUserId: string;
    status?: string;
    ticketChannelId?: string | null;
    staffChannelId?: string | null;
    acceptedByUserId?: string | null;
    closedByUserId?: string | null;
    rejectionReason?: string | null;
    cancelReason?: string | null;
    subtotalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    acceptedAt?: Date | string | null;
    rejectedAt?: Date | string | null;
    closedAt?: Date | string | null;
    cancelledAt?: Date | string | null;
};
export type ShopOrderUpdateWithoutAcceptedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutAcceptedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateManyWithoutAcceptedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopOrderUpdateWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateManyWithoutClosedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopOrderUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    rejectedBy?: Prisma.ShopUserUpdateOneWithoutOrdersRejectedNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ShopOrderUpdateWithoutRejectedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutRelatedOrderNestedInput;
    acceptedBy?: Prisma.ShopUserUpdateOneWithoutOrdersAcceptedNestedInput;
    closedBy?: Prisma.ShopUserUpdateOneWithoutOrdersClosedNestedInput;
    customer?: Prisma.ShopUserUpdateOneRequiredWithoutOrdersAsCustomerNestedInput;
    events?: Prisma.ShopOrderEventUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateWithoutRejectedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutOrderNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutRelatedOrderNestedInput;
    events?: Prisma.ShopOrderEventUncheckedUpdateManyWithoutOrderNestedInput;
    items?: Prisma.ShopOrderItemUncheckedUpdateManyWithoutOrderNestedInput;
    sale?: Prisma.ShopSaleUncheckedUpdateOneWithoutOrderNestedInput;
};
export type ShopOrderUncheckedUpdateManyWithoutRejectedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderCode?: Prisma.StringFieldUpdateOperationsInput | string;
    customerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    staffChannelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    acceptedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    closedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rejectionReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subtotalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalDiscountAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acceptedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rejectedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    closedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
/**
 * Count Type ShopOrderCountOutputType
 */
export type ShopOrderCountOutputType = {
    appliedDiscounts: number;
    movements: number;
    events: number;
    items: number;
};
export type ShopOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | ShopOrderCountOutputTypeCountAppliedDiscountsArgs;
    movements?: boolean | ShopOrderCountOutputTypeCountMovementsArgs;
    events?: boolean | ShopOrderCountOutputTypeCountEventsArgs;
    items?: boolean | ShopOrderCountOutputTypeCountItemsArgs;
};
/**
 * ShopOrderCountOutputType without action
 */
export type ShopOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrderCountOutputType
     */
    select?: Prisma.ShopOrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShopOrderCountOutputType without action
 */
export type ShopOrderCountOutputTypeCountAppliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopAppliedDiscountWhereInput;
};
/**
 * ShopOrderCountOutputType without action
 */
export type ShopOrderCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopInventoryMovementWhereInput;
};
/**
 * ShopOrderCountOutputType without action
 */
export type ShopOrderCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderEventWhereInput;
};
/**
 * ShopOrderCountOutputType without action
 */
export type ShopOrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopOrderItemWhereInput;
};
export type ShopOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderCode?: boolean;
    customerUserId?: boolean;
    status?: boolean;
    ticketChannelId?: boolean;
    staffChannelId?: boolean;
    acceptedByUserId?: boolean;
    rejectedByUserId?: boolean;
    closedByUserId?: boolean;
    rejectionReason?: boolean;
    cancelReason?: boolean;
    subtotalAmount?: boolean;
    totalDiscountAmount?: boolean;
    totalAmount?: boolean;
    createdAt?: boolean;
    acceptedAt?: boolean;
    rejectedAt?: boolean;
    closedAt?: boolean;
    cancelledAt?: boolean;
    appliedDiscounts?: boolean | Prisma.ShopOrder$appliedDiscountsArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopOrder$movementsArgs<ExtArgs>;
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
    events?: boolean | Prisma.ShopOrder$eventsArgs<ExtArgs>;
    items?: boolean | Prisma.ShopOrder$itemsArgs<ExtArgs>;
    sale?: boolean | Prisma.ShopOrder$saleArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrder"]>;
export type ShopOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderCode?: boolean;
    customerUserId?: boolean;
    status?: boolean;
    ticketChannelId?: boolean;
    staffChannelId?: boolean;
    acceptedByUserId?: boolean;
    rejectedByUserId?: boolean;
    closedByUserId?: boolean;
    rejectionReason?: boolean;
    cancelReason?: boolean;
    subtotalAmount?: boolean;
    totalDiscountAmount?: boolean;
    totalAmount?: boolean;
    createdAt?: boolean;
    acceptedAt?: boolean;
    rejectedAt?: boolean;
    closedAt?: boolean;
    cancelledAt?: boolean;
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrder"]>;
export type ShopOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    orderCode?: boolean;
    customerUserId?: boolean;
    status?: boolean;
    ticketChannelId?: boolean;
    staffChannelId?: boolean;
    acceptedByUserId?: boolean;
    rejectedByUserId?: boolean;
    closedByUserId?: boolean;
    rejectionReason?: boolean;
    cancelReason?: boolean;
    subtotalAmount?: boolean;
    totalDiscountAmount?: boolean;
    totalAmount?: boolean;
    createdAt?: boolean;
    acceptedAt?: boolean;
    rejectedAt?: boolean;
    closedAt?: boolean;
    cancelledAt?: boolean;
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
}, ExtArgs["result"]["shopOrder"]>;
export type ShopOrderSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    orderCode?: boolean;
    customerUserId?: boolean;
    status?: boolean;
    ticketChannelId?: boolean;
    staffChannelId?: boolean;
    acceptedByUserId?: boolean;
    rejectedByUserId?: boolean;
    closedByUserId?: boolean;
    rejectionReason?: boolean;
    cancelReason?: boolean;
    subtotalAmount?: boolean;
    totalDiscountAmount?: boolean;
    totalAmount?: boolean;
    createdAt?: boolean;
    acceptedAt?: boolean;
    rejectedAt?: boolean;
    closedAt?: boolean;
    cancelledAt?: boolean;
};
export type ShopOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "orderCode" | "customerUserId" | "status" | "ticketChannelId" | "staffChannelId" | "acceptedByUserId" | "rejectedByUserId" | "closedByUserId" | "rejectionReason" | "cancelReason" | "subtotalAmount" | "totalDiscountAmount" | "totalAmount" | "createdAt" | "acceptedAt" | "rejectedAt" | "closedAt" | "cancelledAt", ExtArgs["result"]["shopOrder"]>;
export type ShopOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | Prisma.ShopOrder$appliedDiscountsArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopOrder$movementsArgs<ExtArgs>;
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
    events?: boolean | Prisma.ShopOrder$eventsArgs<ExtArgs>;
    items?: boolean | Prisma.ShopOrder$itemsArgs<ExtArgs>;
    sale?: boolean | Prisma.ShopOrder$saleArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShopOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
};
export type ShopOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    acceptedBy?: boolean | Prisma.ShopOrder$acceptedByArgs<ExtArgs>;
    closedBy?: boolean | Prisma.ShopOrder$closedByArgs<ExtArgs>;
    customer?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
    rejectedBy?: boolean | Prisma.ShopOrder$rejectedByArgs<ExtArgs>;
};
export type $ShopOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopOrder";
    objects: {
        appliedDiscounts: Prisma.$ShopAppliedDiscountPayload<ExtArgs>[];
        movements: Prisma.$ShopInventoryMovementPayload<ExtArgs>[];
        acceptedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
        closedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
        customer: Prisma.$ShopUserPayload<ExtArgs>;
        rejectedBy: Prisma.$ShopUserPayload<ExtArgs> | null;
        events: Prisma.$ShopOrderEventPayload<ExtArgs>[];
        items: Prisma.$ShopOrderItemPayload<ExtArgs>[];
        sale: Prisma.$ShopSalePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        orderCode: string;
        customerUserId: string;
        status: string;
        ticketChannelId: string | null;
        staffChannelId: string | null;
        acceptedByUserId: string | null;
        rejectedByUserId: string | null;
        closedByUserId: string | null;
        rejectionReason: string | null;
        cancelReason: string | null;
        subtotalAmount: runtime.Decimal;
        totalDiscountAmount: runtime.Decimal;
        totalAmount: runtime.Decimal;
        createdAt: Date;
        acceptedAt: Date | null;
        rejectedAt: Date | null;
        closedAt: Date | null;
        cancelledAt: Date | null;
    }, ExtArgs["result"]["shopOrder"]>;
    composites: {};
};
export type ShopOrderGetPayload<S extends boolean | null | undefined | ShopOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload, S>;
export type ShopOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopOrderCountAggregateInputType | true;
};
export interface ShopOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopOrder'];
        meta: {
            name: 'ShopOrder';
        };
    };
    /**
     * Find zero or one ShopOrder that matches the filter.
     * @param {ShopOrderFindUniqueArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopOrderFindUniqueOrThrowArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindFirstArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindFirstOrThrowArgs} args - Arguments to find a ShopOrder
     * @example
     * // Get one ShopOrder
     * const shopOrder = await prisma.shopOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopOrders
     * const shopOrders = await prisma.shopOrder.findMany()
     *
     * // Get first 10 ShopOrders
     * const shopOrders = await prisma.shopOrder.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopOrderFindManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopOrder.
     * @param {ShopOrderCreateArgs} args - Arguments to create a ShopOrder.
     * @example
     * // Create one ShopOrder
     * const ShopOrder = await prisma.shopOrder.create({
     *   data: {
     *     // ... data to create a ShopOrder
     *   }
     * })
     *
     */
    create<T extends ShopOrderCreateArgs>(args: Prisma.SelectSubset<T, ShopOrderCreateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopOrders.
     * @param {ShopOrderCreateManyArgs} args - Arguments to create many ShopOrders.
     * @example
     * // Create many ShopOrders
     * const shopOrder = await prisma.shopOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopOrders and returns the data saved in the database.
     * @param {ShopOrderCreateManyAndReturnArgs} args - Arguments to create many ShopOrders.
     * @example
     * // Create many ShopOrders
     * const shopOrder = await prisma.shopOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopOrders and only return the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopOrder.
     * @param {ShopOrderDeleteArgs} args - Arguments to delete one ShopOrder.
     * @example
     * // Delete one ShopOrder
     * const ShopOrder = await prisma.shopOrder.delete({
     *   where: {
     *     // ... filter to delete one ShopOrder
     *   }
     * })
     *
     */
    delete<T extends ShopOrderDeleteArgs>(args: Prisma.SelectSubset<T, ShopOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopOrder.
     * @param {ShopOrderUpdateArgs} args - Arguments to update one ShopOrder.
     * @example
     * // Update one ShopOrder
     * const shopOrder = await prisma.shopOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopOrderUpdateArgs>(args: Prisma.SelectSubset<T, ShopOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopOrders.
     * @param {ShopOrderDeleteManyArgs} args - Arguments to filter ShopOrders to delete.
     * @example
     * // Delete a few ShopOrders
     * const { count } = await prisma.shopOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopOrders
     * const shopOrder = await prisma.shopOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopOrders and returns the data updated in the database.
     * @param {ShopOrderUpdateManyAndReturnArgs} args - Arguments to update many ShopOrders.
     * @example
     * // Update many ShopOrders
     * const shopOrder = await prisma.shopOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopOrders and only return the `id`
     * const shopOrderWithIdOnly = await prisma.shopOrder.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopOrder.
     * @param {ShopOrderUpsertArgs} args - Arguments to update or create a ShopOrder.
     * @example
     * // Update or create a ShopOrder
     * const shopOrder = await prisma.shopOrder.upsert({
     *   create: {
     *     // ... data to create a ShopOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopOrder we want to update
     *   }
     * })
     */
    upsert<T extends ShopOrderUpsertArgs>(args: Prisma.SelectSubset<T, ShopOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopOrderClient<runtime.Types.Result.GetResult<Prisma.$ShopOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderCountArgs} args - Arguments to filter ShopOrders to count.
     * @example
     * // Count the number of ShopOrders
     * const count = await prisma.shopOrder.count({
     *   where: {
     *     // ... the filter for the ShopOrders we want to count
     *   }
     * })
    **/
    count<T extends ShopOrderCountArgs>(args?: Prisma.Subset<T, ShopOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopOrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopOrderAggregateArgs>(args: Prisma.Subset<T, ShopOrderAggregateArgs>): Prisma.PrismaPromise<GetShopOrderAggregateType<T>>;
    /**
     * Group by ShopOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopOrderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopOrder model
     */
    readonly fields: ShopOrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopOrder.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appliedDiscounts<T extends Prisma.ShopOrder$appliedDiscountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$appliedDiscountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movements<T extends Prisma.ShopOrder$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    acceptedBy<T extends Prisma.ShopOrder$acceptedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$acceptedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    closedBy<T extends Prisma.ShopOrder$closedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$closedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.ShopUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUserDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rejectedBy<T extends Prisma.ShopOrder$rejectedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$rejectedByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.ShopOrder$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    items<T extends Prisma.ShopOrder$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sale<T extends Prisma.ShopOrder$saleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopOrder$saleArgs<ExtArgs>>): Prisma.Prisma__ShopSaleClient<runtime.Types.Result.GetResult<Prisma.$ShopSalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopOrder model
 */
export interface ShopOrderFieldRefs {
    readonly id: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly orderCode: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly customerUserId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly status: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly ticketChannelId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly staffChannelId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly acceptedByUserId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly rejectedByUserId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly closedByUserId: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly rejectionReason: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly cancelReason: Prisma.FieldRef<"ShopOrder", 'String'>;
    readonly subtotalAmount: Prisma.FieldRef<"ShopOrder", 'Decimal'>;
    readonly totalDiscountAmount: Prisma.FieldRef<"ShopOrder", 'Decimal'>;
    readonly totalAmount: Prisma.FieldRef<"ShopOrder", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"ShopOrder", 'DateTime'>;
    readonly acceptedAt: Prisma.FieldRef<"ShopOrder", 'DateTime'>;
    readonly rejectedAt: Prisma.FieldRef<"ShopOrder", 'DateTime'>;
    readonly closedAt: Prisma.FieldRef<"ShopOrder", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"ShopOrder", 'DateTime'>;
}
/**
 * ShopOrder findUnique
 */
export type ShopOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopOrder to fetch.
     */
    where: Prisma.ShopOrderWhereUniqueInput;
};
/**
 * ShopOrder findUniqueOrThrow
 */
export type ShopOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopOrder to fetch.
     */
    where: Prisma.ShopOrderWhereUniqueInput;
};
/**
 * ShopOrder findFirst
 */
export type ShopOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopOrder to fetch.
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrders.
     */
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrders.
     */
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopOrder findFirstOrThrow
 */
export type ShopOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopOrder to fetch.
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopOrders.
     */
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrders.
     */
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopOrder findMany
 */
export type ShopOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopOrders to fetch.
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopOrders to fetch.
     */
    orderBy?: Prisma.ShopOrderOrderByWithRelationInput | Prisma.ShopOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopOrders.
     */
    cursor?: Prisma.ShopOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopOrders.
     */
    distinct?: Prisma.ShopOrderScalarFieldEnum | Prisma.ShopOrderScalarFieldEnum[];
};
/**
 * ShopOrder create
 */
export type ShopOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShopOrder.
     */
    data: Prisma.XOR<Prisma.ShopOrderCreateInput, Prisma.ShopOrderUncheckedCreateInput>;
};
/**
 * ShopOrder createMany
 */
export type ShopOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopOrders.
     */
    data: Prisma.ShopOrderCreateManyInput | Prisma.ShopOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopOrder createManyAndReturn
 */
export type ShopOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: Prisma.ShopOrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: Prisma.ShopOrderOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopOrders.
     */
    data: Prisma.ShopOrderCreateManyInput | Prisma.ShopOrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrder update
 */
export type ShopOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShopOrder.
     */
    data: Prisma.XOR<Prisma.ShopOrderUpdateInput, Prisma.ShopOrderUncheckedUpdateInput>;
    /**
     * Choose, which ShopOrder to update.
     */
    where: Prisma.ShopOrderWhereUniqueInput;
};
/**
 * ShopOrder updateMany
 */
export type ShopOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopOrders.
     */
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrders to update
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * Limit how many ShopOrders to update.
     */
    limit?: number;
};
/**
 * ShopOrder updateManyAndReturn
 */
export type ShopOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopOrder
     */
    select?: Prisma.ShopOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopOrder
     */
    omit?: Prisma.ShopOrderOmit<ExtArgs> | null;
    /**
     * The data used to update ShopOrders.
     */
    data: Prisma.XOR<Prisma.ShopOrderUpdateManyMutationInput, Prisma.ShopOrderUncheckedUpdateManyInput>;
    /**
     * Filter which ShopOrders to update
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * Limit how many ShopOrders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopOrder upsert
 */
export type ShopOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShopOrder to update in case it exists.
     */
    where: Prisma.ShopOrderWhereUniqueInput;
    /**
     * In case the ShopOrder found by the `where` argument doesn't exist, create a new ShopOrder with this data.
     */
    create: Prisma.XOR<Prisma.ShopOrderCreateInput, Prisma.ShopOrderUncheckedCreateInput>;
    /**
     * In case the ShopOrder was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopOrderUpdateInput, Prisma.ShopOrderUncheckedUpdateInput>;
};
/**
 * ShopOrder delete
 */
export type ShopOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShopOrder to delete.
     */
    where: Prisma.ShopOrderWhereUniqueInput;
};
/**
 * ShopOrder deleteMany
 */
export type ShopOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopOrders to delete
     */
    where?: Prisma.ShopOrderWhereInput;
    /**
     * Limit how many ShopOrders to delete.
     */
    limit?: number;
};
/**
 * ShopOrder.appliedDiscounts
 */
export type ShopOrder$appliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.movements
 */
export type ShopOrder$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.acceptedBy
 */
export type ShopOrder$acceptedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.closedBy
 */
export type ShopOrder$closedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.rejectedBy
 */
export type ShopOrder$rejectedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.events
 */
export type ShopOrder$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.items
 */
export type ShopOrder$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopOrder.sale
 */
export type ShopOrder$saleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * ShopOrder without action
 */
export type ShopOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ShopOrder.d.ts.map