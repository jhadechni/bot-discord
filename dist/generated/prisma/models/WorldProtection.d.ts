import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model WorldProtection
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type WorldProtectionModel = runtime.Types.Result.DefaultSelection<Prisma.$WorldProtectionPayload>;
export type AggregateWorldProtection = {
    _count: WorldProtectionCountAggregateOutputType | null;
    _avg: WorldProtectionAvgAggregateOutputType | null;
    _sum: WorldProtectionSumAggregateOutputType | null;
    _min: WorldProtectionMinAggregateOutputType | null;
    _max: WorldProtectionMaxAggregateOutputType | null;
};
export type WorldProtectionAvgAggregateOutputType = {
    startX: number | null;
    startZ: number | null;
    endX: number | null;
    endZ: number | null;
};
export type WorldProtectionSumAggregateOutputType = {
    startX: number | null;
    startZ: number | null;
    endX: number | null;
    endZ: number | null;
};
export type WorldProtectionMinAggregateOutputType = {
    id: string | null;
    alias: string | null;
    startX: number | null;
    startZ: number | null;
    endX: number | null;
    endZ: number | null;
    isOwned: boolean | null;
    color: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WorldProtectionMaxAggregateOutputType = {
    id: string | null;
    alias: string | null;
    startX: number | null;
    startZ: number | null;
    endX: number | null;
    endZ: number | null;
    isOwned: boolean | null;
    color: string | null;
    description: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WorldProtectionCountAggregateOutputType = {
    id: number;
    alias: number;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned: number;
    color: number;
    description: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WorldProtectionAvgAggregateInputType = {
    startX?: true;
    startZ?: true;
    endX?: true;
    endZ?: true;
};
export type WorldProtectionSumAggregateInputType = {
    startX?: true;
    startZ?: true;
    endX?: true;
    endZ?: true;
};
export type WorldProtectionMinAggregateInputType = {
    id?: true;
    alias?: true;
    startX?: true;
    startZ?: true;
    endX?: true;
    endZ?: true;
    isOwned?: true;
    color?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WorldProtectionMaxAggregateInputType = {
    id?: true;
    alias?: true;
    startX?: true;
    startZ?: true;
    endX?: true;
    endZ?: true;
    isOwned?: true;
    color?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WorldProtectionCountAggregateInputType = {
    id?: true;
    alias?: true;
    startX?: true;
    startZ?: true;
    endX?: true;
    endZ?: true;
    isOwned?: true;
    color?: true;
    description?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WorldProtectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorldProtection to aggregate.
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorldProtections to fetch.
     */
    orderBy?: Prisma.WorldProtectionOrderByWithRelationInput | Prisma.WorldProtectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.WorldProtectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorldProtections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorldProtections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned WorldProtections
    **/
    _count?: true | WorldProtectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: WorldProtectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: WorldProtectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: WorldProtectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: WorldProtectionMaxAggregateInputType;
};
export type GetWorldProtectionAggregateType<T extends WorldProtectionAggregateArgs> = {
    [P in keyof T & keyof AggregateWorldProtection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorldProtection[P]> : Prisma.GetScalarType<T[P], AggregateWorldProtection[P]>;
};
export type WorldProtectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorldProtectionWhereInput;
    orderBy?: Prisma.WorldProtectionOrderByWithAggregationInput | Prisma.WorldProtectionOrderByWithAggregationInput[];
    by: Prisma.WorldProtectionScalarFieldEnum[] | Prisma.WorldProtectionScalarFieldEnum;
    having?: Prisma.WorldProtectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorldProtectionCountAggregateInputType | true;
    _avg?: WorldProtectionAvgAggregateInputType;
    _sum?: WorldProtectionSumAggregateInputType;
    _min?: WorldProtectionMinAggregateInputType;
    _max?: WorldProtectionMaxAggregateInputType;
};
export type WorldProtectionGroupByOutputType = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned: boolean;
    color: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: WorldProtectionCountAggregateOutputType | null;
    _avg: WorldProtectionAvgAggregateOutputType | null;
    _sum: WorldProtectionSumAggregateOutputType | null;
    _min: WorldProtectionMinAggregateOutputType | null;
    _max: WorldProtectionMaxAggregateOutputType | null;
};
export type GetWorldProtectionGroupByPayload<T extends WorldProtectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorldProtectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorldProtectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorldProtectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorldProtectionGroupByOutputType[P]>;
}>>;
export type WorldProtectionWhereInput = {
    AND?: Prisma.WorldProtectionWhereInput | Prisma.WorldProtectionWhereInput[];
    OR?: Prisma.WorldProtectionWhereInput[];
    NOT?: Prisma.WorldProtectionWhereInput | Prisma.WorldProtectionWhereInput[];
    id?: Prisma.StringFilter<"WorldProtection"> | string;
    alias?: Prisma.StringFilter<"WorldProtection"> | string;
    startX?: Prisma.IntFilter<"WorldProtection"> | number;
    startZ?: Prisma.IntFilter<"WorldProtection"> | number;
    endX?: Prisma.IntFilter<"WorldProtection"> | number;
    endZ?: Prisma.IntFilter<"WorldProtection"> | number;
    isOwned?: Prisma.BoolFilter<"WorldProtection"> | boolean;
    color?: Prisma.StringFilter<"WorldProtection"> | string;
    description?: Prisma.StringNullableFilter<"WorldProtection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorldProtection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WorldProtection"> | Date | string;
    ProtectionMember?: Prisma.ProtectionMemberListRelationFilter;
};
export type WorldProtectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
    isOwned?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ProtectionMember?: Prisma.ProtectionMemberOrderByRelationAggregateInput;
};
export type WorldProtectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WorldProtectionWhereInput | Prisma.WorldProtectionWhereInput[];
    OR?: Prisma.WorldProtectionWhereInput[];
    NOT?: Prisma.WorldProtectionWhereInput | Prisma.WorldProtectionWhereInput[];
    alias?: Prisma.StringFilter<"WorldProtection"> | string;
    startX?: Prisma.IntFilter<"WorldProtection"> | number;
    startZ?: Prisma.IntFilter<"WorldProtection"> | number;
    endX?: Prisma.IntFilter<"WorldProtection"> | number;
    endZ?: Prisma.IntFilter<"WorldProtection"> | number;
    isOwned?: Prisma.BoolFilter<"WorldProtection"> | boolean;
    color?: Prisma.StringFilter<"WorldProtection"> | string;
    description?: Prisma.StringNullableFilter<"WorldProtection"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"WorldProtection"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"WorldProtection"> | Date | string;
    ProtectionMember?: Prisma.ProtectionMemberListRelationFilter;
}, "id">;
export type WorldProtectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
    isOwned?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WorldProtectionCountOrderByAggregateInput;
    _avg?: Prisma.WorldProtectionAvgOrderByAggregateInput;
    _max?: Prisma.WorldProtectionMaxOrderByAggregateInput;
    _min?: Prisma.WorldProtectionMinOrderByAggregateInput;
    _sum?: Prisma.WorldProtectionSumOrderByAggregateInput;
};
export type WorldProtectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorldProtectionScalarWhereWithAggregatesInput | Prisma.WorldProtectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorldProtectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorldProtectionScalarWhereWithAggregatesInput | Prisma.WorldProtectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WorldProtection"> | string;
    alias?: Prisma.StringWithAggregatesFilter<"WorldProtection"> | string;
    startX?: Prisma.IntWithAggregatesFilter<"WorldProtection"> | number;
    startZ?: Prisma.IntWithAggregatesFilter<"WorldProtection"> | number;
    endX?: Prisma.IntWithAggregatesFilter<"WorldProtection"> | number;
    endZ?: Prisma.IntWithAggregatesFilter<"WorldProtection"> | number;
    isOwned?: Prisma.BoolWithAggregatesFilter<"WorldProtection"> | boolean;
    color?: Prisma.StringWithAggregatesFilter<"WorldProtection"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"WorldProtection"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WorldProtection"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"WorldProtection"> | Date | string;
};
export type WorldProtectionCreateInput = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned?: boolean;
    color?: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    ProtectionMember?: Prisma.ProtectionMemberCreateNestedManyWithoutWorldProtectionInput;
};
export type WorldProtectionUncheckedCreateInput = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned?: boolean;
    color?: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    ProtectionMember?: Prisma.ProtectionMemberUncheckedCreateNestedManyWithoutWorldProtectionInput;
};
export type WorldProtectionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ProtectionMember?: Prisma.ProtectionMemberUpdateManyWithoutWorldProtectionNestedInput;
};
export type WorldProtectionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ProtectionMember?: Prisma.ProtectionMemberUncheckedUpdateManyWithoutWorldProtectionNestedInput;
};
export type WorldProtectionCreateManyInput = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned?: boolean;
    color?: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type WorldProtectionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorldProtectionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorldProtectionScalarRelationFilter = {
    is?: Prisma.WorldProtectionWhereInput;
    isNot?: Prisma.WorldProtectionWhereInput;
};
export type WorldProtectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
    isOwned?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorldProtectionAvgOrderByAggregateInput = {
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
};
export type WorldProtectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
    isOwned?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorldProtectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alias?: Prisma.SortOrder;
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
    isOwned?: Prisma.SortOrder;
    color?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WorldProtectionSumOrderByAggregateInput = {
    startX?: Prisma.SortOrder;
    startZ?: Prisma.SortOrder;
    endX?: Prisma.SortOrder;
    endZ?: Prisma.SortOrder;
};
export type WorldProtectionCreateNestedOneWithoutProtectionMemberInput = {
    create?: Prisma.XOR<Prisma.WorldProtectionCreateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedCreateWithoutProtectionMemberInput>;
    connectOrCreate?: Prisma.WorldProtectionCreateOrConnectWithoutProtectionMemberInput;
    connect?: Prisma.WorldProtectionWhereUniqueInput;
};
export type WorldProtectionUpdateOneRequiredWithoutProtectionMemberNestedInput = {
    create?: Prisma.XOR<Prisma.WorldProtectionCreateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedCreateWithoutProtectionMemberInput>;
    connectOrCreate?: Prisma.WorldProtectionCreateOrConnectWithoutProtectionMemberInput;
    upsert?: Prisma.WorldProtectionUpsertWithoutProtectionMemberInput;
    connect?: Prisma.WorldProtectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WorldProtectionUpdateToOneWithWhereWithoutProtectionMemberInput, Prisma.WorldProtectionUpdateWithoutProtectionMemberInput>, Prisma.WorldProtectionUncheckedUpdateWithoutProtectionMemberInput>;
};
export type WorldProtectionCreateWithoutProtectionMemberInput = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned?: boolean;
    color?: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type WorldProtectionUncheckedCreateWithoutProtectionMemberInput = {
    id: string;
    alias: string;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    isOwned?: boolean;
    color?: string;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type WorldProtectionCreateOrConnectWithoutProtectionMemberInput = {
    where: Prisma.WorldProtectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorldProtectionCreateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedCreateWithoutProtectionMemberInput>;
};
export type WorldProtectionUpsertWithoutProtectionMemberInput = {
    update: Prisma.XOR<Prisma.WorldProtectionUpdateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedUpdateWithoutProtectionMemberInput>;
    create: Prisma.XOR<Prisma.WorldProtectionCreateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedCreateWithoutProtectionMemberInput>;
    where?: Prisma.WorldProtectionWhereInput;
};
export type WorldProtectionUpdateToOneWithWhereWithoutProtectionMemberInput = {
    where?: Prisma.WorldProtectionWhereInput;
    data: Prisma.XOR<Prisma.WorldProtectionUpdateWithoutProtectionMemberInput, Prisma.WorldProtectionUncheckedUpdateWithoutProtectionMemberInput>;
};
export type WorldProtectionUpdateWithoutProtectionMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WorldProtectionUncheckedUpdateWithoutProtectionMemberInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alias?: Prisma.StringFieldUpdateOperationsInput | string;
    startX?: Prisma.IntFieldUpdateOperationsInput | number;
    startZ?: Prisma.IntFieldUpdateOperationsInput | number;
    endX?: Prisma.IntFieldUpdateOperationsInput | number;
    endZ?: Prisma.IntFieldUpdateOperationsInput | number;
    isOwned?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    color?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type WorldProtectionCountOutputType
 */
export type WorldProtectionCountOutputType = {
    ProtectionMember: number;
};
export type WorldProtectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ProtectionMember?: boolean | WorldProtectionCountOutputTypeCountProtectionMemberArgs;
};
/**
 * WorldProtectionCountOutputType without action
 */
export type WorldProtectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtectionCountOutputType
     */
    select?: Prisma.WorldProtectionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * WorldProtectionCountOutputType without action
 */
export type WorldProtectionCountOutputTypeCountProtectionMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProtectionMemberWhereInput;
};
export type WorldProtectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    startX?: boolean;
    startZ?: boolean;
    endX?: boolean;
    endZ?: boolean;
    isOwned?: boolean;
    color?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ProtectionMember?: boolean | Prisma.WorldProtection$ProtectionMemberArgs<ExtArgs>;
    _count?: boolean | Prisma.WorldProtectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["worldProtection"]>;
export type WorldProtectionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    startX?: boolean;
    startZ?: boolean;
    endX?: boolean;
    endZ?: boolean;
    isOwned?: boolean;
    color?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["worldProtection"]>;
export type WorldProtectionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alias?: boolean;
    startX?: boolean;
    startZ?: boolean;
    endX?: boolean;
    endZ?: boolean;
    isOwned?: boolean;
    color?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["worldProtection"]>;
export type WorldProtectionSelectScalar = {
    id?: boolean;
    alias?: boolean;
    startX?: boolean;
    startZ?: boolean;
    endX?: boolean;
    endZ?: boolean;
    isOwned?: boolean;
    color?: boolean;
    description?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WorldProtectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alias" | "startX" | "startZ" | "endX" | "endZ" | "isOwned" | "color" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["worldProtection"]>;
export type WorldProtectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ProtectionMember?: boolean | Prisma.WorldProtection$ProtectionMemberArgs<ExtArgs>;
    _count?: boolean | Prisma.WorldProtectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WorldProtectionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type WorldProtectionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $WorldProtectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorldProtection";
    objects: {
        ProtectionMember: Prisma.$ProtectionMemberPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alias: string;
        startX: number;
        startZ: number;
        endX: number;
        endZ: number;
        isOwned: boolean;
        color: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["worldProtection"]>;
    composites: {};
};
export type WorldProtectionGetPayload<S extends boolean | null | undefined | WorldProtectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload, S>;
export type WorldProtectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorldProtectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorldProtectionCountAggregateInputType | true;
};
export interface WorldProtectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorldProtection'];
        meta: {
            name: 'WorldProtection';
        };
    };
    /**
     * Find zero or one WorldProtection that matches the filter.
     * @param {WorldProtectionFindUniqueArgs} args - Arguments to find a WorldProtection
     * @example
     * // Get one WorldProtection
     * const worldProtection = await prisma.worldProtection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldProtectionFindUniqueArgs>(args: Prisma.SelectSubset<T, WorldProtectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one WorldProtection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldProtectionFindUniqueOrThrowArgs} args - Arguments to find a WorldProtection
     * @example
     * // Get one WorldProtection
     * const worldProtection = await prisma.worldProtection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldProtectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorldProtectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorldProtection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionFindFirstArgs} args - Arguments to find a WorldProtection
     * @example
     * // Get one WorldProtection
     * const worldProtection = await prisma.worldProtection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldProtectionFindFirstArgs>(args?: Prisma.SelectSubset<T, WorldProtectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first WorldProtection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionFindFirstOrThrowArgs} args - Arguments to find a WorldProtection
     * @example
     * // Get one WorldProtection
     * const worldProtection = await prisma.worldProtection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldProtectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorldProtectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more WorldProtections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldProtections
     * const worldProtections = await prisma.worldProtection.findMany()
     *
     * // Get first 10 WorldProtections
     * const worldProtections = await prisma.worldProtection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const worldProtectionWithIdOnly = await prisma.worldProtection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends WorldProtectionFindManyArgs>(args?: Prisma.SelectSubset<T, WorldProtectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a WorldProtection.
     * @param {WorldProtectionCreateArgs} args - Arguments to create a WorldProtection.
     * @example
     * // Create one WorldProtection
     * const WorldProtection = await prisma.worldProtection.create({
     *   data: {
     *     // ... data to create a WorldProtection
     *   }
     * })
     *
     */
    create<T extends WorldProtectionCreateArgs>(args: Prisma.SelectSubset<T, WorldProtectionCreateArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many WorldProtections.
     * @param {WorldProtectionCreateManyArgs} args - Arguments to create many WorldProtections.
     * @example
     * // Create many WorldProtections
     * const worldProtection = await prisma.worldProtection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends WorldProtectionCreateManyArgs>(args?: Prisma.SelectSubset<T, WorldProtectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many WorldProtections and returns the data saved in the database.
     * @param {WorldProtectionCreateManyAndReturnArgs} args - Arguments to create many WorldProtections.
     * @example
     * // Create many WorldProtections
     * const worldProtection = await prisma.worldProtection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many WorldProtections and only return the `id`
     * const worldProtectionWithIdOnly = await prisma.worldProtection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends WorldProtectionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorldProtectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a WorldProtection.
     * @param {WorldProtectionDeleteArgs} args - Arguments to delete one WorldProtection.
     * @example
     * // Delete one WorldProtection
     * const WorldProtection = await prisma.worldProtection.delete({
     *   where: {
     *     // ... filter to delete one WorldProtection
     *   }
     * })
     *
     */
    delete<T extends WorldProtectionDeleteArgs>(args: Prisma.SelectSubset<T, WorldProtectionDeleteArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one WorldProtection.
     * @param {WorldProtectionUpdateArgs} args - Arguments to update one WorldProtection.
     * @example
     * // Update one WorldProtection
     * const worldProtection = await prisma.worldProtection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends WorldProtectionUpdateArgs>(args: Prisma.SelectSubset<T, WorldProtectionUpdateArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more WorldProtections.
     * @param {WorldProtectionDeleteManyArgs} args - Arguments to filter WorldProtections to delete.
     * @example
     * // Delete a few WorldProtections
     * const { count } = await prisma.worldProtection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends WorldProtectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorldProtectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorldProtections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldProtections
     * const worldProtection = await prisma.worldProtection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends WorldProtectionUpdateManyArgs>(args: Prisma.SelectSubset<T, WorldProtectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more WorldProtections and returns the data updated in the database.
     * @param {WorldProtectionUpdateManyAndReturnArgs} args - Arguments to update many WorldProtections.
     * @example
     * // Update many WorldProtections
     * const worldProtection = await prisma.worldProtection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more WorldProtections and only return the `id`
     * const worldProtectionWithIdOnly = await prisma.worldProtection.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorldProtectionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorldProtectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one WorldProtection.
     * @param {WorldProtectionUpsertArgs} args - Arguments to update or create a WorldProtection.
     * @example
     * // Update or create a WorldProtection
     * const worldProtection = await prisma.worldProtection.upsert({
     *   create: {
     *     // ... data to create a WorldProtection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldProtection we want to update
     *   }
     * })
     */
    upsert<T extends WorldProtectionUpsertArgs>(args: Prisma.SelectSubset<T, WorldProtectionUpsertArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of WorldProtections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionCountArgs} args - Arguments to filter WorldProtections to count.
     * @example
     * // Count the number of WorldProtections
     * const count = await prisma.worldProtection.count({
     *   where: {
     *     // ... the filter for the WorldProtections we want to count
     *   }
     * })
    **/
    count<T extends WorldProtectionCountArgs>(args?: Prisma.Subset<T, WorldProtectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorldProtectionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a WorldProtection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorldProtectionAggregateArgs>(args: Prisma.Subset<T, WorldProtectionAggregateArgs>): Prisma.PrismaPromise<GetWorldProtectionAggregateType<T>>;
    /**
     * Group by WorldProtection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldProtectionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends WorldProtectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorldProtectionGroupByArgs['orderBy'];
    } : {
        orderBy?: WorldProtectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorldProtectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldProtectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the WorldProtection model
     */
    readonly fields: WorldProtectionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for WorldProtection.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__WorldProtectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ProtectionMember<T extends Prisma.WorldProtection$ProtectionMemberArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorldProtection$ProtectionMemberArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the WorldProtection model
 */
export interface WorldProtectionFieldRefs {
    readonly id: Prisma.FieldRef<"WorldProtection", 'String'>;
    readonly alias: Prisma.FieldRef<"WorldProtection", 'String'>;
    readonly startX: Prisma.FieldRef<"WorldProtection", 'Int'>;
    readonly startZ: Prisma.FieldRef<"WorldProtection", 'Int'>;
    readonly endX: Prisma.FieldRef<"WorldProtection", 'Int'>;
    readonly endZ: Prisma.FieldRef<"WorldProtection", 'Int'>;
    readonly isOwned: Prisma.FieldRef<"WorldProtection", 'Boolean'>;
    readonly color: Prisma.FieldRef<"WorldProtection", 'String'>;
    readonly description: Prisma.FieldRef<"WorldProtection", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WorldProtection", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"WorldProtection", 'DateTime'>;
}
/**
 * WorldProtection findUnique
 */
export type WorldProtectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter, which WorldProtection to fetch.
     */
    where: Prisma.WorldProtectionWhereUniqueInput;
};
/**
 * WorldProtection findUniqueOrThrow
 */
export type WorldProtectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter, which WorldProtection to fetch.
     */
    where: Prisma.WorldProtectionWhereUniqueInput;
};
/**
 * WorldProtection findFirst
 */
export type WorldProtectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter, which WorldProtection to fetch.
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorldProtections to fetch.
     */
    orderBy?: Prisma.WorldProtectionOrderByWithRelationInput | Prisma.WorldProtectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorldProtections.
     */
    cursor?: Prisma.WorldProtectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorldProtections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorldProtections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorldProtections.
     */
    distinct?: Prisma.WorldProtectionScalarFieldEnum | Prisma.WorldProtectionScalarFieldEnum[];
};
/**
 * WorldProtection findFirstOrThrow
 */
export type WorldProtectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter, which WorldProtection to fetch.
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorldProtections to fetch.
     */
    orderBy?: Prisma.WorldProtectionOrderByWithRelationInput | Prisma.WorldProtectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for WorldProtections.
     */
    cursor?: Prisma.WorldProtectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorldProtections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorldProtections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorldProtections.
     */
    distinct?: Prisma.WorldProtectionScalarFieldEnum | Prisma.WorldProtectionScalarFieldEnum[];
};
/**
 * WorldProtection findMany
 */
export type WorldProtectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter, which WorldProtections to fetch.
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of WorldProtections to fetch.
     */
    orderBy?: Prisma.WorldProtectionOrderByWithRelationInput | Prisma.WorldProtectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing WorldProtections.
     */
    cursor?: Prisma.WorldProtectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` WorldProtections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` WorldProtections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of WorldProtections.
     */
    distinct?: Prisma.WorldProtectionScalarFieldEnum | Prisma.WorldProtectionScalarFieldEnum[];
};
/**
 * WorldProtection create
 */
export type WorldProtectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a WorldProtection.
     */
    data: Prisma.XOR<Prisma.WorldProtectionCreateInput, Prisma.WorldProtectionUncheckedCreateInput>;
};
/**
 * WorldProtection createMany
 */
export type WorldProtectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldProtections.
     */
    data: Prisma.WorldProtectionCreateManyInput | Prisma.WorldProtectionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WorldProtection createManyAndReturn
 */
export type WorldProtectionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * The data used to create many WorldProtections.
     */
    data: Prisma.WorldProtectionCreateManyInput | Prisma.WorldProtectionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * WorldProtection update
 */
export type WorldProtectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a WorldProtection.
     */
    data: Prisma.XOR<Prisma.WorldProtectionUpdateInput, Prisma.WorldProtectionUncheckedUpdateInput>;
    /**
     * Choose, which WorldProtection to update.
     */
    where: Prisma.WorldProtectionWhereUniqueInput;
};
/**
 * WorldProtection updateMany
 */
export type WorldProtectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldProtections.
     */
    data: Prisma.XOR<Prisma.WorldProtectionUpdateManyMutationInput, Prisma.WorldProtectionUncheckedUpdateManyInput>;
    /**
     * Filter which WorldProtections to update
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * Limit how many WorldProtections to update.
     */
    limit?: number;
};
/**
 * WorldProtection updateManyAndReturn
 */
export type WorldProtectionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * The data used to update WorldProtections.
     */
    data: Prisma.XOR<Prisma.WorldProtectionUpdateManyMutationInput, Prisma.WorldProtectionUncheckedUpdateManyInput>;
    /**
     * Filter which WorldProtections to update
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * Limit how many WorldProtections to update.
     */
    limit?: number;
};
/**
 * WorldProtection upsert
 */
export type WorldProtectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the WorldProtection to update in case it exists.
     */
    where: Prisma.WorldProtectionWhereUniqueInput;
    /**
     * In case the WorldProtection found by the `where` argument doesn't exist, create a new WorldProtection with this data.
     */
    create: Prisma.XOR<Prisma.WorldProtectionCreateInput, Prisma.WorldProtectionUncheckedCreateInput>;
    /**
     * In case the WorldProtection was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.WorldProtectionUpdateInput, Prisma.WorldProtectionUncheckedUpdateInput>;
};
/**
 * WorldProtection delete
 */
export type WorldProtectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
    /**
     * Filter which WorldProtection to delete.
     */
    where: Prisma.WorldProtectionWhereUniqueInput;
};
/**
 * WorldProtection deleteMany
 */
export type WorldProtectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which WorldProtections to delete
     */
    where?: Prisma.WorldProtectionWhereInput;
    /**
     * Limit how many WorldProtections to delete.
     */
    limit?: number;
};
/**
 * WorldProtection.ProtectionMember
 */
export type WorldProtection$ProtectionMemberArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtectionMember
     */
    select?: Prisma.ProtectionMemberSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProtectionMember
     */
    omit?: Prisma.ProtectionMemberOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProtectionMemberInclude<ExtArgs> | null;
    where?: Prisma.ProtectionMemberWhereInput;
    orderBy?: Prisma.ProtectionMemberOrderByWithRelationInput | Prisma.ProtectionMemberOrderByWithRelationInput[];
    cursor?: Prisma.ProtectionMemberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProtectionMemberScalarFieldEnum | Prisma.ProtectionMemberScalarFieldEnum[];
};
/**
 * WorldProtection without action
 */
export type WorldProtectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldProtection
     */
    select?: Prisma.WorldProtectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the WorldProtection
     */
    omit?: Prisma.WorldProtectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.WorldProtectionInclude<ExtArgs> | null;
};
//# sourceMappingURL=WorldProtection.d.ts.map