import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopDiscountPolicy
 *
 */
export type ShopDiscountPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopDiscountPolicyPayload>;
export type AggregateShopDiscountPolicy = {
    _count: ShopDiscountPolicyCountAggregateOutputType | null;
    _avg: ShopDiscountPolicyAvgAggregateOutputType | null;
    _sum: ShopDiscountPolicySumAggregateOutputType | null;
    _min: ShopDiscountPolicyMinAggregateOutputType | null;
    _max: ShopDiscountPolicyMaxAggregateOutputType | null;
};
export type ShopDiscountPolicyAvgAggregateOutputType = {
    minQuantity: number | null;
    discountValue: runtime.Decimal | null;
    priority: number | null;
};
export type ShopDiscountPolicySumAggregateOutputType = {
    minQuantity: number | null;
    discountValue: runtime.Decimal | null;
    priority: number | null;
};
export type ShopDiscountPolicyMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    productId: string | null;
    minQuantity: number | null;
    name: string | null;
    description: string | null;
    policyType: string | null;
    scope: string | null;
    discountType: string | null;
    discountValue: runtime.Decimal | null;
    isActive: boolean | null;
    priority: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ShopDiscountPolicyMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    productId: string | null;
    minQuantity: number | null;
    name: string | null;
    description: string | null;
    policyType: string | null;
    scope: string | null;
    discountType: string | null;
    discountValue: runtime.Decimal | null;
    isActive: boolean | null;
    priority: number | null;
    startsAt: Date | null;
    endsAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type ShopDiscountPolicyCountAggregateOutputType = {
    id: number;
    guildId: number;
    productId: number;
    minQuantity: number;
    name: number;
    description: number;
    policyType: number;
    scope: number;
    discountType: number;
    discountValue: number;
    isActive: number;
    priority: number;
    startsAt: number;
    endsAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type ShopDiscountPolicyAvgAggregateInputType = {
    minQuantity?: true;
    discountValue?: true;
    priority?: true;
};
export type ShopDiscountPolicySumAggregateInputType = {
    minQuantity?: true;
    discountValue?: true;
    priority?: true;
};
export type ShopDiscountPolicyMinAggregateInputType = {
    id?: true;
    guildId?: true;
    productId?: true;
    minQuantity?: true;
    name?: true;
    description?: true;
    policyType?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    isActive?: true;
    priority?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ShopDiscountPolicyMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    productId?: true;
    minQuantity?: true;
    name?: true;
    description?: true;
    policyType?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    isActive?: true;
    priority?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type ShopDiscountPolicyCountAggregateInputType = {
    id?: true;
    guildId?: true;
    productId?: true;
    minQuantity?: true;
    name?: true;
    description?: true;
    policyType?: true;
    scope?: true;
    discountType?: true;
    discountValue?: true;
    isActive?: true;
    priority?: true;
    startsAt?: true;
    endsAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopDiscountPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopDiscountPolicy to aggregate.
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopDiscountPolicies to fetch.
     */
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput | Prisma.ShopDiscountPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopDiscountPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopDiscountPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopDiscountPolicies
    **/
    _count?: true | ShopDiscountPolicyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopDiscountPolicyAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopDiscountPolicySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopDiscountPolicyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopDiscountPolicyMaxAggregateInputType;
};
export type GetShopDiscountPolicyAggregateType<T extends ShopDiscountPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateShopDiscountPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopDiscountPolicy[P]> : Prisma.GetScalarType<T[P], AggregateShopDiscountPolicy[P]>;
};
export type ShopDiscountPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopDiscountPolicyWhereInput;
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithAggregationInput | Prisma.ShopDiscountPolicyOrderByWithAggregationInput[];
    by: Prisma.ShopDiscountPolicyScalarFieldEnum[] | Prisma.ShopDiscountPolicyScalarFieldEnum;
    having?: Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopDiscountPolicyCountAggregateInputType | true;
    _avg?: ShopDiscountPolicyAvgAggregateInputType;
    _sum?: ShopDiscountPolicySumAggregateInputType;
    _min?: ShopDiscountPolicyMinAggregateInputType;
    _max?: ShopDiscountPolicyMaxAggregateInputType;
};
export type ShopDiscountPolicyGroupByOutputType = {
    id: string;
    guildId: string;
    productId: string | null;
    minQuantity: number | null;
    name: string;
    description: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal;
    isActive: boolean;
    priority: number;
    startsAt: Date | null;
    endsAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date;
    _count: ShopDiscountPolicyCountAggregateOutputType | null;
    _avg: ShopDiscountPolicyAvgAggregateOutputType | null;
    _sum: ShopDiscountPolicySumAggregateOutputType | null;
    _min: ShopDiscountPolicyMinAggregateOutputType | null;
    _max: ShopDiscountPolicyMaxAggregateOutputType | null;
};
export type GetShopDiscountPolicyGroupByPayload<T extends ShopDiscountPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopDiscountPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopDiscountPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopDiscountPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopDiscountPolicyGroupByOutputType[P]>;
}>>;
export type ShopDiscountPolicyWhereInput = {
    AND?: Prisma.ShopDiscountPolicyWhereInput | Prisma.ShopDiscountPolicyWhereInput[];
    OR?: Prisma.ShopDiscountPolicyWhereInput[];
    NOT?: Prisma.ShopDiscountPolicyWhereInput | Prisma.ShopDiscountPolicyWhereInput[];
    id?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    guildId?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    productId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    minQuantity?: Prisma.IntNullableFilter<"ShopDiscountPolicy"> | number | null;
    name?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    description?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    policyType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    scope?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopDiscountPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"ShopDiscountPolicy"> | boolean;
    priority?: Prisma.IntFilter<"ShopDiscountPolicy"> | number;
    startsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    createdByUserId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopDiscountPolicy"> | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    product?: Prisma.XOR<Prisma.ShopProductNullableScalarRelationFilter, Prisma.ShopProductWhereInput> | null;
};
export type ShopDiscountPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    minQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    policyType?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    appliedDiscounts?: Prisma.ShopAppliedDiscountOrderByRelationAggregateInput;
    createdBy?: Prisma.ShopUserOrderByWithRelationInput;
    product?: Prisma.ShopProductOrderByWithRelationInput;
};
export type ShopDiscountPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopDiscountPolicyWhereInput | Prisma.ShopDiscountPolicyWhereInput[];
    OR?: Prisma.ShopDiscountPolicyWhereInput[];
    NOT?: Prisma.ShopDiscountPolicyWhereInput | Prisma.ShopDiscountPolicyWhereInput[];
    guildId?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    productId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    minQuantity?: Prisma.IntNullableFilter<"ShopDiscountPolicy"> | number | null;
    name?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    description?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    policyType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    scope?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopDiscountPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"ShopDiscountPolicy"> | boolean;
    priority?: Prisma.IntFilter<"ShopDiscountPolicy"> | number;
    startsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    createdByUserId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopDiscountPolicy"> | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountListRelationFilter;
    createdBy?: Prisma.XOR<Prisma.ShopUserNullableScalarRelationFilter, Prisma.ShopUserWhereInput> | null;
    product?: Prisma.XOR<Prisma.ShopProductNullableScalarRelationFilter, Prisma.ShopProductWhereInput> | null;
}, "id">;
export type ShopDiscountPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    productId?: Prisma.SortOrderInput | Prisma.SortOrder;
    minQuantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    policyType?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    endsAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopDiscountPolicyCountOrderByAggregateInput;
    _avg?: Prisma.ShopDiscountPolicyAvgOrderByAggregateInput;
    _max?: Prisma.ShopDiscountPolicyMaxOrderByAggregateInput;
    _min?: Prisma.ShopDiscountPolicyMinOrderByAggregateInput;
    _sum?: Prisma.ShopDiscountPolicySumOrderByAggregateInput;
};
export type ShopDiscountPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput | Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput | Prisma.ShopDiscountPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    productId?: Prisma.StringNullableWithAggregatesFilter<"ShopDiscountPolicy"> | string | null;
    minQuantity?: Prisma.IntNullableWithAggregatesFilter<"ShopDiscountPolicy"> | number | null;
    name?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ShopDiscountPolicy"> | string | null;
    policyType?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    scope?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    discountType?: Prisma.StringWithAggregatesFilter<"ShopDiscountPolicy"> | string;
    discountValue?: Prisma.DecimalWithAggregatesFilter<"ShopDiscountPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShopDiscountPolicy"> | boolean;
    priority?: Prisma.IntWithAggregatesFilter<"ShopDiscountPolicy"> | number;
    startsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopDiscountPolicy"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ShopDiscountPolicy"> | Date | string | null;
    createdByUserId?: Prisma.StringNullableWithAggregatesFilter<"ShopDiscountPolicy"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopDiscountPolicy"> | Date | string;
};
export type ShopDiscountPolicyCreateInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutDiscountPolicyInput;
    createdBy?: Prisma.ShopUserCreateNestedOneWithoutDiscountPoliciesInput;
    product?: Prisma.ShopProductCreateNestedOneWithoutDiscountPoliciesInput;
};
export type ShopDiscountPolicyUncheckedCreateInput = {
    id?: string;
    guildId: string;
    productId?: string | null;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdByUserId?: string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutDiscountPolicyInput;
};
export type ShopDiscountPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutDiscountPolicyNestedInput;
    createdBy?: Prisma.ShopUserUpdateOneWithoutDiscountPoliciesNestedInput;
    product?: Prisma.ShopProductUpdateOneWithoutDiscountPoliciesNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyNestedInput;
};
export type ShopDiscountPolicyCreateManyInput = {
    id?: string;
    guildId: string;
    productId?: string | null;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdByUserId?: string | null;
    createdAt?: Date | string;
};
export type ShopDiscountPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopDiscountPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopDiscountPolicyListRelationFilter = {
    every?: Prisma.ShopDiscountPolicyWhereInput;
    some?: Prisma.ShopDiscountPolicyWhereInput;
    none?: Prisma.ShopDiscountPolicyWhereInput;
};
export type ShopDiscountPolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopDiscountPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    minQuantity?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    policyType?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopDiscountPolicyAvgOrderByAggregateInput = {
    minQuantity?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type ShopDiscountPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    minQuantity?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    policyType?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopDiscountPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    minQuantity?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    policyType?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    discountType?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopDiscountPolicySumOrderByAggregateInput = {
    minQuantity?: Prisma.SortOrder;
    discountValue?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
};
export type ShopDiscountPolicyNullableScalarRelationFilter = {
    is?: Prisma.ShopDiscountPolicyWhereInput | null;
    isNot?: Prisma.ShopDiscountPolicyWhereInput | null;
};
export type ShopDiscountPolicyCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput> | Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
};
export type ShopDiscountPolicyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput> | Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyCreatedByInputEnvelope;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
};
export type ShopDiscountPolicyUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput> | Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    disconnect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    delete?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    update?: Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
};
export type ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput> | Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyCreatedByInputEnvelope;
    set?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    disconnect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    delete?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    update?: Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutCreatedByInput | Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
};
export type ShopDiscountPolicyCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput> | Prisma.ShopDiscountPolicyCreateWithoutProductInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyProductInputEnvelope;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
};
export type ShopDiscountPolicyUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput> | Prisma.ShopDiscountPolicyCreateWithoutProductInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyProductInputEnvelope;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
};
export type ShopDiscountPolicyUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput> | Prisma.ShopDiscountPolicyCreateWithoutProductInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyProductInputEnvelope;
    set?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    disconnect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    delete?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    update?: Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutProductInput | Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
};
export type ShopDiscountPolicyUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput> | Prisma.ShopDiscountPolicyCreateWithoutProductInput[] | Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput | Prisma.ShopDiscountPolicyCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopDiscountPolicyUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopDiscountPolicyCreateManyProductInputEnvelope;
    set?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    disconnect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    delete?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput | Prisma.ShopDiscountPolicyWhereUniqueInput[];
    update?: Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopDiscountPolicyUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutProductInput | Prisma.ShopDiscountPolicyUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
};
export type ShopDiscountPolicyCreateNestedOneWithoutAppliedDiscountsInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutAppliedDiscountsInput;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput;
};
export type ShopDiscountPolicyUpdateOneWithoutAppliedDiscountsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutAppliedDiscountsInput>;
    connectOrCreate?: Prisma.ShopDiscountPolicyCreateOrConnectWithoutAppliedDiscountsInput;
    upsert?: Prisma.ShopDiscountPolicyUpsertWithoutAppliedDiscountsInput;
    disconnect?: Prisma.ShopDiscountPolicyWhereInput | boolean;
    delete?: Prisma.ShopDiscountPolicyWhereInput | boolean;
    connect?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopDiscountPolicyUpdateToOneWithWhereWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUpdateWithoutAppliedDiscountsInput>, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopDiscountPolicyCreateWithoutCreatedByInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutDiscountPolicyInput;
    product?: Prisma.ShopProductCreateNestedOneWithoutDiscountPoliciesInput;
};
export type ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    guildId: string;
    productId?: string | null;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutDiscountPolicyInput;
};
export type ShopDiscountPolicyCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput>;
};
export type ShopDiscountPolicyCreateManyCreatedByInputEnvelope = {
    data: Prisma.ShopDiscountPolicyCreateManyCreatedByInput | Prisma.ShopDiscountPolicyCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type ShopDiscountPolicyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutCreatedByInput>;
};
export type ShopDiscountPolicyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutCreatedByInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutCreatedByInput>;
};
export type ShopDiscountPolicyUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.ShopDiscountPolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateManyMutationInput, Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByInput>;
};
export type ShopDiscountPolicyScalarWhereInput = {
    AND?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
    OR?: Prisma.ShopDiscountPolicyScalarWhereInput[];
    NOT?: Prisma.ShopDiscountPolicyScalarWhereInput | Prisma.ShopDiscountPolicyScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    guildId?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    productId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    minQuantity?: Prisma.IntNullableFilter<"ShopDiscountPolicy"> | number | null;
    name?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    description?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    policyType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    scope?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountType?: Prisma.StringFilter<"ShopDiscountPolicy"> | string;
    discountValue?: Prisma.DecimalFilter<"ShopDiscountPolicy"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"ShopDiscountPolicy"> | boolean;
    priority?: Prisma.IntFilter<"ShopDiscountPolicy"> | number;
    startsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    endsAt?: Prisma.DateTimeNullableFilter<"ShopDiscountPolicy"> | Date | string | null;
    createdByUserId?: Prisma.StringNullableFilter<"ShopDiscountPolicy"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ShopDiscountPolicy"> | Date | string;
};
export type ShopDiscountPolicyCreateWithoutProductInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountCreateNestedManyWithoutDiscountPolicyInput;
    createdBy?: Prisma.ShopUserCreateNestedOneWithoutDiscountPoliciesInput;
};
export type ShopDiscountPolicyUncheckedCreateWithoutProductInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdByUserId?: string | null;
    createdAt?: Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedCreateNestedManyWithoutDiscountPolicyInput;
};
export type ShopDiscountPolicyCreateOrConnectWithoutProductInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput>;
};
export type ShopDiscountPolicyCreateManyProductInputEnvelope = {
    data: Prisma.ShopDiscountPolicyCreateManyProductInput | Prisma.ShopDiscountPolicyCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ShopDiscountPolicyUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutProductInput>;
};
export type ShopDiscountPolicyUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutProductInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutProductInput>;
};
export type ShopDiscountPolicyUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ShopDiscountPolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateManyMutationInput, Prisma.ShopDiscountPolicyUncheckedUpdateManyWithoutProductInput>;
};
export type ShopDiscountPolicyCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
    createdBy?: Prisma.ShopUserCreateNestedOneWithoutDiscountPoliciesInput;
    product?: Prisma.ShopProductCreateNestedOneWithoutDiscountPoliciesInput;
};
export type ShopDiscountPolicyUncheckedCreateWithoutAppliedDiscountsInput = {
    id?: string;
    guildId: string;
    productId?: string | null;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdByUserId?: string | null;
    createdAt?: Date | string;
};
export type ShopDiscountPolicyCreateOrConnectWithoutAppliedDiscountsInput = {
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutAppliedDiscountsInput>;
};
export type ShopDiscountPolicyUpsertWithoutAppliedDiscountsInput = {
    update: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutAppliedDiscountsInput>;
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedCreateWithoutAppliedDiscountsInput>;
    where?: Prisma.ShopDiscountPolicyWhereInput;
};
export type ShopDiscountPolicyUpdateToOneWithWhereWithoutAppliedDiscountsInput = {
    where?: Prisma.ShopDiscountPolicyWhereInput;
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateWithoutAppliedDiscountsInput, Prisma.ShopDiscountPolicyUncheckedUpdateWithoutAppliedDiscountsInput>;
};
export type ShopDiscountPolicyUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.ShopUserUpdateOneWithoutDiscountPoliciesNestedInput;
    product?: Prisma.ShopProductUpdateOneWithoutDiscountPoliciesNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateWithoutAppliedDiscountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopDiscountPolicyCreateManyCreatedByInput = {
    id?: string;
    guildId: string;
    productId?: string | null;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ShopDiscountPolicyUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutDiscountPolicyNestedInput;
    product?: Prisma.ShopProductUpdateOneWithoutDiscountPoliciesNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopDiscountPolicyCreateManyProductInput = {
    id?: string;
    guildId: string;
    minQuantity?: number | null;
    name: string;
    description?: string | null;
    policyType: string;
    scope: string;
    discountType: string;
    discountValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: boolean;
    priority?: number;
    startsAt?: Date | string | null;
    endsAt?: Date | string | null;
    createdByUserId?: string | null;
    createdAt?: Date | string;
};
export type ShopDiscountPolicyUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUpdateManyWithoutDiscountPolicyNestedInput;
    createdBy?: Prisma.ShopUserUpdateOneWithoutDiscountPoliciesNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    appliedDiscounts?: Prisma.ShopAppliedDiscountUncheckedUpdateManyWithoutDiscountPolicyNestedInput;
};
export type ShopDiscountPolicyUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    minQuantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    policyType?: Prisma.StringFieldUpdateOperationsInput | string;
    scope?: Prisma.StringFieldUpdateOperationsInput | string;
    discountType?: Prisma.StringFieldUpdateOperationsInput | string;
    discountValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    priority?: Prisma.IntFieldUpdateOperationsInput | number;
    startsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    endsAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ShopDiscountPolicyCountOutputType
 */
export type ShopDiscountPolicyCountOutputType = {
    appliedDiscounts: number;
};
export type ShopDiscountPolicyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | ShopDiscountPolicyCountOutputTypeCountAppliedDiscountsArgs;
};
/**
 * ShopDiscountPolicyCountOutputType without action
 */
export type ShopDiscountPolicyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDiscountPolicyCountOutputType
     */
    select?: Prisma.ShopDiscountPolicyCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShopDiscountPolicyCountOutputType without action
 */
export type ShopDiscountPolicyCountOutputTypeCountAppliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopAppliedDiscountWhereInput;
};
export type ShopDiscountPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    productId?: boolean;
    minQuantity?: boolean;
    name?: boolean;
    description?: boolean;
    policyType?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    isActive?: boolean;
    priority?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    appliedDiscounts?: boolean | Prisma.ShopDiscountPolicy$appliedDiscountsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopDiscountPolicyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopDiscountPolicy"]>;
export type ShopDiscountPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    productId?: boolean;
    minQuantity?: boolean;
    name?: boolean;
    description?: boolean;
    policyType?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    isActive?: boolean;
    priority?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
}, ExtArgs["result"]["shopDiscountPolicy"]>;
export type ShopDiscountPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    productId?: boolean;
    minQuantity?: boolean;
    name?: boolean;
    description?: boolean;
    policyType?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    isActive?: boolean;
    priority?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
}, ExtArgs["result"]["shopDiscountPolicy"]>;
export type ShopDiscountPolicySelectScalar = {
    id?: boolean;
    guildId?: boolean;
    productId?: boolean;
    minQuantity?: boolean;
    name?: boolean;
    description?: boolean;
    policyType?: boolean;
    scope?: boolean;
    discountType?: boolean;
    discountValue?: boolean;
    isActive?: boolean;
    priority?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type ShopDiscountPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "productId" | "minQuantity" | "name" | "description" | "policyType" | "scope" | "discountType" | "discountValue" | "isActive" | "priority" | "startsAt" | "endsAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["shopDiscountPolicy"]>;
export type ShopDiscountPolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    appliedDiscounts?: boolean | Prisma.ShopDiscountPolicy$appliedDiscountsArgs<ExtArgs>;
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopDiscountPolicyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShopDiscountPolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
};
export type ShopDiscountPolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>;
    product?: boolean | Prisma.ShopDiscountPolicy$productArgs<ExtArgs>;
};
export type $ShopDiscountPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopDiscountPolicy";
    objects: {
        appliedDiscounts: Prisma.$ShopAppliedDiscountPayload<ExtArgs>[];
        createdBy: Prisma.$ShopUserPayload<ExtArgs> | null;
        product: Prisma.$ShopProductPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        productId: string | null;
        minQuantity: number | null;
        name: string;
        description: string | null;
        policyType: string;
        scope: string;
        discountType: string;
        discountValue: runtime.Decimal;
        isActive: boolean;
        priority: number;
        startsAt: Date | null;
        endsAt: Date | null;
        createdByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["shopDiscountPolicy"]>;
    composites: {};
};
export type ShopDiscountPolicyGetPayload<S extends boolean | null | undefined | ShopDiscountPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload, S>;
export type ShopDiscountPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopDiscountPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopDiscountPolicyCountAggregateInputType | true;
};
export interface ShopDiscountPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopDiscountPolicy'];
        meta: {
            name: 'ShopDiscountPolicy';
        };
    };
    /**
     * Find zero or one ShopDiscountPolicy that matches the filter.
     * @param {ShopDiscountPolicyFindUniqueArgs} args - Arguments to find a ShopDiscountPolicy
     * @example
     * // Get one ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopDiscountPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopDiscountPolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopDiscountPolicyFindUniqueOrThrowArgs} args - Arguments to find a ShopDiscountPolicy
     * @example
     * // Get one ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopDiscountPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopDiscountPolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyFindFirstArgs} args - Arguments to find a ShopDiscountPolicy
     * @example
     * // Get one ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopDiscountPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopDiscountPolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyFindFirstOrThrowArgs} args - Arguments to find a ShopDiscountPolicy
     * @example
     * // Get one ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopDiscountPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopDiscountPolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopDiscountPolicies
     * const shopDiscountPolicies = await prisma.shopDiscountPolicy.findMany()
     *
     * // Get first 10 ShopDiscountPolicies
     * const shopDiscountPolicies = await prisma.shopDiscountPolicy.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopDiscountPolicyWithIdOnly = await prisma.shopDiscountPolicy.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopDiscountPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopDiscountPolicy.
     * @param {ShopDiscountPolicyCreateArgs} args - Arguments to create a ShopDiscountPolicy.
     * @example
     * // Create one ShopDiscountPolicy
     * const ShopDiscountPolicy = await prisma.shopDiscountPolicy.create({
     *   data: {
     *     // ... data to create a ShopDiscountPolicy
     *   }
     * })
     *
     */
    create<T extends ShopDiscountPolicyCreateArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopDiscountPolicies.
     * @param {ShopDiscountPolicyCreateManyArgs} args - Arguments to create many ShopDiscountPolicies.
     * @example
     * // Create many ShopDiscountPolicies
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopDiscountPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopDiscountPolicies and returns the data saved in the database.
     * @param {ShopDiscountPolicyCreateManyAndReturnArgs} args - Arguments to create many ShopDiscountPolicies.
     * @example
     * // Create many ShopDiscountPolicies
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopDiscountPolicies and only return the `id`
     * const shopDiscountPolicyWithIdOnly = await prisma.shopDiscountPolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopDiscountPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopDiscountPolicy.
     * @param {ShopDiscountPolicyDeleteArgs} args - Arguments to delete one ShopDiscountPolicy.
     * @example
     * // Delete one ShopDiscountPolicy
     * const ShopDiscountPolicy = await prisma.shopDiscountPolicy.delete({
     *   where: {
     *     // ... filter to delete one ShopDiscountPolicy
     *   }
     * })
     *
     */
    delete<T extends ShopDiscountPolicyDeleteArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopDiscountPolicy.
     * @param {ShopDiscountPolicyUpdateArgs} args - Arguments to update one ShopDiscountPolicy.
     * @example
     * // Update one ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopDiscountPolicyUpdateArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopDiscountPolicies.
     * @param {ShopDiscountPolicyDeleteManyArgs} args - Arguments to filter ShopDiscountPolicies to delete.
     * @example
     * // Delete a few ShopDiscountPolicies
     * const { count } = await prisma.shopDiscountPolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopDiscountPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopDiscountPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopDiscountPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopDiscountPolicies
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopDiscountPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopDiscountPolicies and returns the data updated in the database.
     * @param {ShopDiscountPolicyUpdateManyAndReturnArgs} args - Arguments to update many ShopDiscountPolicies.
     * @example
     * // Update many ShopDiscountPolicies
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopDiscountPolicies and only return the `id`
     * const shopDiscountPolicyWithIdOnly = await prisma.shopDiscountPolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopDiscountPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopDiscountPolicy.
     * @param {ShopDiscountPolicyUpsertArgs} args - Arguments to update or create a ShopDiscountPolicy.
     * @example
     * // Update or create a ShopDiscountPolicy
     * const shopDiscountPolicy = await prisma.shopDiscountPolicy.upsert({
     *   create: {
     *     // ... data to create a ShopDiscountPolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopDiscountPolicy we want to update
     *   }
     * })
     */
    upsert<T extends ShopDiscountPolicyUpsertArgs>(args: Prisma.SelectSubset<T, ShopDiscountPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopDiscountPolicyClient<runtime.Types.Result.GetResult<Prisma.$ShopDiscountPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopDiscountPolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyCountArgs} args - Arguments to filter ShopDiscountPolicies to count.
     * @example
     * // Count the number of ShopDiscountPolicies
     * const count = await prisma.shopDiscountPolicy.count({
     *   where: {
     *     // ... the filter for the ShopDiscountPolicies we want to count
     *   }
     * })
    **/
    count<T extends ShopDiscountPolicyCountArgs>(args?: Prisma.Subset<T, ShopDiscountPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopDiscountPolicyCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopDiscountPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopDiscountPolicyAggregateArgs>(args: Prisma.Subset<T, ShopDiscountPolicyAggregateArgs>): Prisma.PrismaPromise<GetShopDiscountPolicyAggregateType<T>>;
    /**
     * Group by ShopDiscountPolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopDiscountPolicyGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopDiscountPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopDiscountPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopDiscountPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopDiscountPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopDiscountPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopDiscountPolicy model
     */
    readonly fields: ShopDiscountPolicyFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopDiscountPolicy.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopDiscountPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    appliedDiscounts<T extends Prisma.ShopDiscountPolicy$appliedDiscountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDiscountPolicy$appliedDiscountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopAppliedDiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    createdBy<T extends Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDiscountPolicy$createdByArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ShopDiscountPolicy$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopDiscountPolicy$productArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopDiscountPolicy model
 */
export interface ShopDiscountPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly productId: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly minQuantity: Prisma.FieldRef<"ShopDiscountPolicy", 'Int'>;
    readonly name: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly description: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly policyType: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly scope: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly discountType: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly discountValue: Prisma.FieldRef<"ShopDiscountPolicy", 'Decimal'>;
    readonly isActive: Prisma.FieldRef<"ShopDiscountPolicy", 'Boolean'>;
    readonly priority: Prisma.FieldRef<"ShopDiscountPolicy", 'Int'>;
    readonly startsAt: Prisma.FieldRef<"ShopDiscountPolicy", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"ShopDiscountPolicy", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"ShopDiscountPolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShopDiscountPolicy", 'DateTime'>;
}
/**
 * ShopDiscountPolicy findUnique
 */
export type ShopDiscountPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopDiscountPolicy to fetch.
     */
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
};
/**
 * ShopDiscountPolicy findUniqueOrThrow
 */
export type ShopDiscountPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopDiscountPolicy to fetch.
     */
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
};
/**
 * ShopDiscountPolicy findFirst
 */
export type ShopDiscountPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopDiscountPolicy to fetch.
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopDiscountPolicies to fetch.
     */
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput | Prisma.ShopDiscountPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopDiscountPolicies.
     */
    cursor?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopDiscountPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopDiscountPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopDiscountPolicies.
     */
    distinct?: Prisma.ShopDiscountPolicyScalarFieldEnum | Prisma.ShopDiscountPolicyScalarFieldEnum[];
};
/**
 * ShopDiscountPolicy findFirstOrThrow
 */
export type ShopDiscountPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopDiscountPolicy to fetch.
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopDiscountPolicies to fetch.
     */
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput | Prisma.ShopDiscountPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopDiscountPolicies.
     */
    cursor?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopDiscountPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopDiscountPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopDiscountPolicies.
     */
    distinct?: Prisma.ShopDiscountPolicyScalarFieldEnum | Prisma.ShopDiscountPolicyScalarFieldEnum[];
};
/**
 * ShopDiscountPolicy findMany
 */
export type ShopDiscountPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ShopDiscountPolicies to fetch.
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopDiscountPolicies to fetch.
     */
    orderBy?: Prisma.ShopDiscountPolicyOrderByWithRelationInput | Prisma.ShopDiscountPolicyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopDiscountPolicies.
     */
    cursor?: Prisma.ShopDiscountPolicyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopDiscountPolicies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopDiscountPolicies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopDiscountPolicies.
     */
    distinct?: Prisma.ShopDiscountPolicyScalarFieldEnum | Prisma.ShopDiscountPolicyScalarFieldEnum[];
};
/**
 * ShopDiscountPolicy create
 */
export type ShopDiscountPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ShopDiscountPolicy.
     */
    data: Prisma.XOR<Prisma.ShopDiscountPolicyCreateInput, Prisma.ShopDiscountPolicyUncheckedCreateInput>;
};
/**
 * ShopDiscountPolicy createMany
 */
export type ShopDiscountPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopDiscountPolicies.
     */
    data: Prisma.ShopDiscountPolicyCreateManyInput | Prisma.ShopDiscountPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopDiscountPolicy createManyAndReturn
 */
export type ShopDiscountPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDiscountPolicy
     */
    select?: Prisma.ShopDiscountPolicySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopDiscountPolicy
     */
    omit?: Prisma.ShopDiscountPolicyOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopDiscountPolicies.
     */
    data: Prisma.ShopDiscountPolicyCreateManyInput | Prisma.ShopDiscountPolicyCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopDiscountPolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopDiscountPolicy update
 */
export type ShopDiscountPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ShopDiscountPolicy.
     */
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateInput, Prisma.ShopDiscountPolicyUncheckedUpdateInput>;
    /**
     * Choose, which ShopDiscountPolicy to update.
     */
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
};
/**
 * ShopDiscountPolicy updateMany
 */
export type ShopDiscountPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopDiscountPolicies.
     */
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateManyMutationInput, Prisma.ShopDiscountPolicyUncheckedUpdateManyInput>;
    /**
     * Filter which ShopDiscountPolicies to update
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * Limit how many ShopDiscountPolicies to update.
     */
    limit?: number;
};
/**
 * ShopDiscountPolicy updateManyAndReturn
 */
export type ShopDiscountPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopDiscountPolicy
     */
    select?: Prisma.ShopDiscountPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopDiscountPolicy
     */
    omit?: Prisma.ShopDiscountPolicyOmit<ExtArgs> | null;
    /**
     * The data used to update ShopDiscountPolicies.
     */
    data: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateManyMutationInput, Prisma.ShopDiscountPolicyUncheckedUpdateManyInput>;
    /**
     * Filter which ShopDiscountPolicies to update
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * Limit how many ShopDiscountPolicies to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopDiscountPolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopDiscountPolicy upsert
 */
export type ShopDiscountPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ShopDiscountPolicy to update in case it exists.
     */
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
    /**
     * In case the ShopDiscountPolicy found by the `where` argument doesn't exist, create a new ShopDiscountPolicy with this data.
     */
    create: Prisma.XOR<Prisma.ShopDiscountPolicyCreateInput, Prisma.ShopDiscountPolicyUncheckedCreateInput>;
    /**
     * In case the ShopDiscountPolicy was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopDiscountPolicyUpdateInput, Prisma.ShopDiscountPolicyUncheckedUpdateInput>;
};
/**
 * ShopDiscountPolicy delete
 */
export type ShopDiscountPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ShopDiscountPolicy to delete.
     */
    where: Prisma.ShopDiscountPolicyWhereUniqueInput;
};
/**
 * ShopDiscountPolicy deleteMany
 */
export type ShopDiscountPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopDiscountPolicies to delete
     */
    where?: Prisma.ShopDiscountPolicyWhereInput;
    /**
     * Limit how many ShopDiscountPolicies to delete.
     */
    limit?: number;
};
/**
 * ShopDiscountPolicy.appliedDiscounts
 */
export type ShopDiscountPolicy$appliedDiscountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopDiscountPolicy.createdBy
 */
export type ShopDiscountPolicy$createdByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ShopDiscountPolicy.product
 */
export type ShopDiscountPolicy$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    where?: Prisma.ShopProductWhereInput;
};
/**
 * ShopDiscountPolicy without action
 */
export type ShopDiscountPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ShopDiscountPolicy.d.ts.map