import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ProtectionMember
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ProtectionMemberModel = runtime.Types.Result.DefaultSelection<Prisma.$ProtectionMemberPayload>;
export type AggregateProtectionMember = {
    _count: ProtectionMemberCountAggregateOutputType | null;
    _min: ProtectionMemberMinAggregateOutputType | null;
    _max: ProtectionMemberMaxAggregateOutputType | null;
};
export type ProtectionMemberMinAggregateOutputType = {
    id: string | null;
    protectionId: string | null;
    playerName: string | null;
    level: string | null;
    addedAt: Date | null;
};
export type ProtectionMemberMaxAggregateOutputType = {
    id: string | null;
    protectionId: string | null;
    playerName: string | null;
    level: string | null;
    addedAt: Date | null;
};
export type ProtectionMemberCountAggregateOutputType = {
    id: number;
    protectionId: number;
    playerName: number;
    level: number;
    addedAt: number;
    _all: number;
};
export type ProtectionMemberMinAggregateInputType = {
    id?: true;
    protectionId?: true;
    playerName?: true;
    level?: true;
    addedAt?: true;
};
export type ProtectionMemberMaxAggregateInputType = {
    id?: true;
    protectionId?: true;
    playerName?: true;
    level?: true;
    addedAt?: true;
};
export type ProtectionMemberCountAggregateInputType = {
    id?: true;
    protectionId?: true;
    playerName?: true;
    level?: true;
    addedAt?: true;
    _all?: true;
};
export type ProtectionMemberAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProtectionMember to aggregate.
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProtectionMembers to fetch.
     */
    orderBy?: Prisma.ProtectionMemberOrderByWithRelationInput | Prisma.ProtectionMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProtectionMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProtectionMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProtectionMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProtectionMembers
    **/
    _count?: true | ProtectionMemberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProtectionMemberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProtectionMemberMaxAggregateInputType;
};
export type GetProtectionMemberAggregateType<T extends ProtectionMemberAggregateArgs> = {
    [P in keyof T & keyof AggregateProtectionMember]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProtectionMember[P]> : Prisma.GetScalarType<T[P], AggregateProtectionMember[P]>;
};
export type ProtectionMemberGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProtectionMemberWhereInput;
    orderBy?: Prisma.ProtectionMemberOrderByWithAggregationInput | Prisma.ProtectionMemberOrderByWithAggregationInput[];
    by: Prisma.ProtectionMemberScalarFieldEnum[] | Prisma.ProtectionMemberScalarFieldEnum;
    having?: Prisma.ProtectionMemberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProtectionMemberCountAggregateInputType | true;
    _min?: ProtectionMemberMinAggregateInputType;
    _max?: ProtectionMemberMaxAggregateInputType;
};
export type ProtectionMemberGroupByOutputType = {
    id: string;
    protectionId: string;
    playerName: string;
    level: string;
    addedAt: Date;
    _count: ProtectionMemberCountAggregateOutputType | null;
    _min: ProtectionMemberMinAggregateOutputType | null;
    _max: ProtectionMemberMaxAggregateOutputType | null;
};
export type GetProtectionMemberGroupByPayload<T extends ProtectionMemberGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProtectionMemberGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProtectionMemberGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProtectionMemberGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProtectionMemberGroupByOutputType[P]>;
}>>;
export type ProtectionMemberWhereInput = {
    AND?: Prisma.ProtectionMemberWhereInput | Prisma.ProtectionMemberWhereInput[];
    OR?: Prisma.ProtectionMemberWhereInput[];
    NOT?: Prisma.ProtectionMemberWhereInput | Prisma.ProtectionMemberWhereInput[];
    id?: Prisma.StringFilter<"ProtectionMember"> | string;
    protectionId?: Prisma.StringFilter<"ProtectionMember"> | string;
    playerName?: Prisma.StringFilter<"ProtectionMember"> | string;
    level?: Prisma.StringFilter<"ProtectionMember"> | string;
    addedAt?: Prisma.DateTimeFilter<"ProtectionMember"> | Date | string;
    WorldProtection?: Prisma.XOR<Prisma.WorldProtectionScalarRelationFilter, Prisma.WorldProtectionWhereInput>;
};
export type ProtectionMemberOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    protectionId?: Prisma.SortOrder;
    playerName?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    WorldProtection?: Prisma.WorldProtectionOrderByWithRelationInput;
};
export type ProtectionMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    protectionId_playerName?: Prisma.ProtectionMemberProtectionIdPlayerNameCompoundUniqueInput;
    AND?: Prisma.ProtectionMemberWhereInput | Prisma.ProtectionMemberWhereInput[];
    OR?: Prisma.ProtectionMemberWhereInput[];
    NOT?: Prisma.ProtectionMemberWhereInput | Prisma.ProtectionMemberWhereInput[];
    protectionId?: Prisma.StringFilter<"ProtectionMember"> | string;
    playerName?: Prisma.StringFilter<"ProtectionMember"> | string;
    level?: Prisma.StringFilter<"ProtectionMember"> | string;
    addedAt?: Prisma.DateTimeFilter<"ProtectionMember"> | Date | string;
    WorldProtection?: Prisma.XOR<Prisma.WorldProtectionScalarRelationFilter, Prisma.WorldProtectionWhereInput>;
}, "id" | "protectionId_playerName">;
export type ProtectionMemberOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    protectionId?: Prisma.SortOrder;
    playerName?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
    _count?: Prisma.ProtectionMemberCountOrderByAggregateInput;
    _max?: Prisma.ProtectionMemberMaxOrderByAggregateInput;
    _min?: Prisma.ProtectionMemberMinOrderByAggregateInput;
};
export type ProtectionMemberScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProtectionMemberScalarWhereWithAggregatesInput | Prisma.ProtectionMemberScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProtectionMemberScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProtectionMemberScalarWhereWithAggregatesInput | Prisma.ProtectionMemberScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ProtectionMember"> | string;
    protectionId?: Prisma.StringWithAggregatesFilter<"ProtectionMember"> | string;
    playerName?: Prisma.StringWithAggregatesFilter<"ProtectionMember"> | string;
    level?: Prisma.StringWithAggregatesFilter<"ProtectionMember"> | string;
    addedAt?: Prisma.DateTimeWithAggregatesFilter<"ProtectionMember"> | Date | string;
};
export type ProtectionMemberCreateInput = {
    id: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
    WorldProtection: Prisma.WorldProtectionCreateNestedOneWithoutProtectionMemberInput;
};
export type ProtectionMemberUncheckedCreateInput = {
    id: string;
    protectionId: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
};
export type ProtectionMemberUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    WorldProtection?: Prisma.WorldProtectionUpdateOneRequiredWithoutProtectionMemberNestedInput;
};
export type ProtectionMemberUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    protectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberCreateManyInput = {
    id: string;
    protectionId: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
};
export type ProtectionMemberUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    protectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberProtectionIdPlayerNameCompoundUniqueInput = {
    protectionId: string;
    playerName: string;
};
export type ProtectionMemberCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    protectionId?: Prisma.SortOrder;
    playerName?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type ProtectionMemberMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    protectionId?: Prisma.SortOrder;
    playerName?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type ProtectionMemberMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    protectionId?: Prisma.SortOrder;
    playerName?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    addedAt?: Prisma.SortOrder;
};
export type ProtectionMemberListRelationFilter = {
    every?: Prisma.ProtectionMemberWhereInput;
    some?: Prisma.ProtectionMemberWhereInput;
    none?: Prisma.ProtectionMemberWhereInput;
};
export type ProtectionMemberOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProtectionMemberCreateNestedManyWithoutWorldProtectionInput = {
    create?: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput> | Prisma.ProtectionMemberCreateWithoutWorldProtectionInput[] | Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput[];
    connectOrCreate?: Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput | Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput[];
    createMany?: Prisma.ProtectionMemberCreateManyWorldProtectionInputEnvelope;
    connect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
};
export type ProtectionMemberUncheckedCreateNestedManyWithoutWorldProtectionInput = {
    create?: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput> | Prisma.ProtectionMemberCreateWithoutWorldProtectionInput[] | Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput[];
    connectOrCreate?: Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput | Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput[];
    createMany?: Prisma.ProtectionMemberCreateManyWorldProtectionInputEnvelope;
    connect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
};
export type ProtectionMemberUpdateManyWithoutWorldProtectionNestedInput = {
    create?: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput> | Prisma.ProtectionMemberCreateWithoutWorldProtectionInput[] | Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput[];
    connectOrCreate?: Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput | Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput[];
    upsert?: Prisma.ProtectionMemberUpsertWithWhereUniqueWithoutWorldProtectionInput | Prisma.ProtectionMemberUpsertWithWhereUniqueWithoutWorldProtectionInput[];
    createMany?: Prisma.ProtectionMemberCreateManyWorldProtectionInputEnvelope;
    set?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    disconnect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    delete?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    connect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    update?: Prisma.ProtectionMemberUpdateWithWhereUniqueWithoutWorldProtectionInput | Prisma.ProtectionMemberUpdateWithWhereUniqueWithoutWorldProtectionInput[];
    updateMany?: Prisma.ProtectionMemberUpdateManyWithWhereWithoutWorldProtectionInput | Prisma.ProtectionMemberUpdateManyWithWhereWithoutWorldProtectionInput[];
    deleteMany?: Prisma.ProtectionMemberScalarWhereInput | Prisma.ProtectionMemberScalarWhereInput[];
};
export type ProtectionMemberUncheckedUpdateManyWithoutWorldProtectionNestedInput = {
    create?: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput> | Prisma.ProtectionMemberCreateWithoutWorldProtectionInput[] | Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput[];
    connectOrCreate?: Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput | Prisma.ProtectionMemberCreateOrConnectWithoutWorldProtectionInput[];
    upsert?: Prisma.ProtectionMemberUpsertWithWhereUniqueWithoutWorldProtectionInput | Prisma.ProtectionMemberUpsertWithWhereUniqueWithoutWorldProtectionInput[];
    createMany?: Prisma.ProtectionMemberCreateManyWorldProtectionInputEnvelope;
    set?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    disconnect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    delete?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    connect?: Prisma.ProtectionMemberWhereUniqueInput | Prisma.ProtectionMemberWhereUniqueInput[];
    update?: Prisma.ProtectionMemberUpdateWithWhereUniqueWithoutWorldProtectionInput | Prisma.ProtectionMemberUpdateWithWhereUniqueWithoutWorldProtectionInput[];
    updateMany?: Prisma.ProtectionMemberUpdateManyWithWhereWithoutWorldProtectionInput | Prisma.ProtectionMemberUpdateManyWithWhereWithoutWorldProtectionInput[];
    deleteMany?: Prisma.ProtectionMemberScalarWhereInput | Prisma.ProtectionMemberScalarWhereInput[];
};
export type ProtectionMemberCreateWithoutWorldProtectionInput = {
    id: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
};
export type ProtectionMemberUncheckedCreateWithoutWorldProtectionInput = {
    id: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
};
export type ProtectionMemberCreateOrConnectWithoutWorldProtectionInput = {
    where: Prisma.ProtectionMemberWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput>;
};
export type ProtectionMemberCreateManyWorldProtectionInputEnvelope = {
    data: Prisma.ProtectionMemberCreateManyWorldProtectionInput | Prisma.ProtectionMemberCreateManyWorldProtectionInput[];
    skipDuplicates?: boolean;
};
export type ProtectionMemberUpsertWithWhereUniqueWithoutWorldProtectionInput = {
    where: Prisma.ProtectionMemberWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProtectionMemberUpdateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedUpdateWithoutWorldProtectionInput>;
    create: Prisma.XOR<Prisma.ProtectionMemberCreateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedCreateWithoutWorldProtectionInput>;
};
export type ProtectionMemberUpdateWithWhereUniqueWithoutWorldProtectionInput = {
    where: Prisma.ProtectionMemberWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProtectionMemberUpdateWithoutWorldProtectionInput, Prisma.ProtectionMemberUncheckedUpdateWithoutWorldProtectionInput>;
};
export type ProtectionMemberUpdateManyWithWhereWithoutWorldProtectionInput = {
    where: Prisma.ProtectionMemberScalarWhereInput;
    data: Prisma.XOR<Prisma.ProtectionMemberUpdateManyMutationInput, Prisma.ProtectionMemberUncheckedUpdateManyWithoutWorldProtectionInput>;
};
export type ProtectionMemberScalarWhereInput = {
    AND?: Prisma.ProtectionMemberScalarWhereInput | Prisma.ProtectionMemberScalarWhereInput[];
    OR?: Prisma.ProtectionMemberScalarWhereInput[];
    NOT?: Prisma.ProtectionMemberScalarWhereInput | Prisma.ProtectionMemberScalarWhereInput[];
    id?: Prisma.StringFilter<"ProtectionMember"> | string;
    protectionId?: Prisma.StringFilter<"ProtectionMember"> | string;
    playerName?: Prisma.StringFilter<"ProtectionMember"> | string;
    level?: Prisma.StringFilter<"ProtectionMember"> | string;
    addedAt?: Prisma.DateTimeFilter<"ProtectionMember"> | Date | string;
};
export type ProtectionMemberCreateManyWorldProtectionInput = {
    id: string;
    playerName: string;
    level?: string;
    addedAt?: Date | string;
};
export type ProtectionMemberUpdateWithoutWorldProtectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberUncheckedUpdateWithoutWorldProtectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberUncheckedUpdateManyWithoutWorldProtectionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    playerName?: Prisma.StringFieldUpdateOperationsInput | string;
    level?: Prisma.StringFieldUpdateOperationsInput | string;
    addedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProtectionMemberSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    protectionId?: boolean;
    playerName?: boolean;
    level?: boolean;
    addedAt?: boolean;
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["protectionMember"]>;
export type ProtectionMemberSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    protectionId?: boolean;
    playerName?: boolean;
    level?: boolean;
    addedAt?: boolean;
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["protectionMember"]>;
export type ProtectionMemberSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    protectionId?: boolean;
    playerName?: boolean;
    level?: boolean;
    addedAt?: boolean;
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["protectionMember"]>;
export type ProtectionMemberSelectScalar = {
    id?: boolean;
    protectionId?: boolean;
    playerName?: boolean;
    level?: boolean;
    addedAt?: boolean;
};
export type ProtectionMemberOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "protectionId" | "playerName" | "level" | "addedAt", ExtArgs["result"]["protectionMember"]>;
export type ProtectionMemberInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
};
export type ProtectionMemberIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
};
export type ProtectionMemberIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    WorldProtection?: boolean | Prisma.WorldProtectionDefaultArgs<ExtArgs>;
};
export type $ProtectionMemberPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProtectionMember";
    objects: {
        WorldProtection: Prisma.$WorldProtectionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        protectionId: string;
        playerName: string;
        level: string;
        addedAt: Date;
    }, ExtArgs["result"]["protectionMember"]>;
    composites: {};
};
export type ProtectionMemberGetPayload<S extends boolean | null | undefined | ProtectionMemberDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload, S>;
export type ProtectionMemberCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProtectionMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProtectionMemberCountAggregateInputType | true;
};
export interface ProtectionMemberDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProtectionMember'];
        meta: {
            name: 'ProtectionMember';
        };
    };
    /**
     * Find zero or one ProtectionMember that matches the filter.
     * @param {ProtectionMemberFindUniqueArgs} args - Arguments to find a ProtectionMember
     * @example
     * // Get one ProtectionMember
     * const protectionMember = await prisma.protectionMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtectionMemberFindUniqueArgs>(args: Prisma.SelectSubset<T, ProtectionMemberFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProtectionMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProtectionMemberFindUniqueOrThrowArgs} args - Arguments to find a ProtectionMember
     * @example
     * // Get one ProtectionMember
     * const protectionMember = await prisma.protectionMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtectionMemberFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProtectionMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProtectionMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberFindFirstArgs} args - Arguments to find a ProtectionMember
     * @example
     * // Get one ProtectionMember
     * const protectionMember = await prisma.protectionMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtectionMemberFindFirstArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProtectionMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberFindFirstOrThrowArgs} args - Arguments to find a ProtectionMember
     * @example
     * // Get one ProtectionMember
     * const protectionMember = await prisma.protectionMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtectionMemberFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProtectionMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProtectionMembers
     * const protectionMembers = await prisma.protectionMember.findMany()
     *
     * // Get first 10 ProtectionMembers
     * const protectionMembers = await prisma.protectionMember.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const protectionMemberWithIdOnly = await prisma.protectionMember.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProtectionMemberFindManyArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProtectionMember.
     * @param {ProtectionMemberCreateArgs} args - Arguments to create a ProtectionMember.
     * @example
     * // Create one ProtectionMember
     * const ProtectionMember = await prisma.protectionMember.create({
     *   data: {
     *     // ... data to create a ProtectionMember
     *   }
     * })
     *
     */
    create<T extends ProtectionMemberCreateArgs>(args: Prisma.SelectSubset<T, ProtectionMemberCreateArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProtectionMembers.
     * @param {ProtectionMemberCreateManyArgs} args - Arguments to create many ProtectionMembers.
     * @example
     * // Create many ProtectionMembers
     * const protectionMember = await prisma.protectionMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProtectionMemberCreateManyArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProtectionMembers and returns the data saved in the database.
     * @param {ProtectionMemberCreateManyAndReturnArgs} args - Arguments to create many ProtectionMembers.
     * @example
     * // Create many ProtectionMembers
     * const protectionMember = await prisma.protectionMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProtectionMembers and only return the `id`
     * const protectionMemberWithIdOnly = await prisma.protectionMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProtectionMemberCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProtectionMember.
     * @param {ProtectionMemberDeleteArgs} args - Arguments to delete one ProtectionMember.
     * @example
     * // Delete one ProtectionMember
     * const ProtectionMember = await prisma.protectionMember.delete({
     *   where: {
     *     // ... filter to delete one ProtectionMember
     *   }
     * })
     *
     */
    delete<T extends ProtectionMemberDeleteArgs>(args: Prisma.SelectSubset<T, ProtectionMemberDeleteArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProtectionMember.
     * @param {ProtectionMemberUpdateArgs} args - Arguments to update one ProtectionMember.
     * @example
     * // Update one ProtectionMember
     * const protectionMember = await prisma.protectionMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProtectionMemberUpdateArgs>(args: Prisma.SelectSubset<T, ProtectionMemberUpdateArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProtectionMembers.
     * @param {ProtectionMemberDeleteManyArgs} args - Arguments to filter ProtectionMembers to delete.
     * @example
     * // Delete a few ProtectionMembers
     * const { count } = await prisma.protectionMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProtectionMemberDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProtectionMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProtectionMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProtectionMembers
     * const protectionMember = await prisma.protectionMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProtectionMemberUpdateManyArgs>(args: Prisma.SelectSubset<T, ProtectionMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProtectionMembers and returns the data updated in the database.
     * @param {ProtectionMemberUpdateManyAndReturnArgs} args - Arguments to update many ProtectionMembers.
     * @example
     * // Update many ProtectionMembers
     * const protectionMember = await prisma.protectionMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProtectionMembers and only return the `id`
     * const protectionMemberWithIdOnly = await prisma.protectionMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProtectionMemberUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProtectionMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProtectionMember.
     * @param {ProtectionMemberUpsertArgs} args - Arguments to update or create a ProtectionMember.
     * @example
     * // Update or create a ProtectionMember
     * const protectionMember = await prisma.protectionMember.upsert({
     *   create: {
     *     // ... data to create a ProtectionMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProtectionMember we want to update
     *   }
     * })
     */
    upsert<T extends ProtectionMemberUpsertArgs>(args: Prisma.SelectSubset<T, ProtectionMemberUpsertArgs<ExtArgs>>): Prisma.Prisma__ProtectionMemberClient<runtime.Types.Result.GetResult<Prisma.$ProtectionMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProtectionMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberCountArgs} args - Arguments to filter ProtectionMembers to count.
     * @example
     * // Count the number of ProtectionMembers
     * const count = await prisma.protectionMember.count({
     *   where: {
     *     // ... the filter for the ProtectionMembers we want to count
     *   }
     * })
    **/
    count<T extends ProtectionMemberCountArgs>(args?: Prisma.Subset<T, ProtectionMemberCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProtectionMemberCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProtectionMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtectionMemberAggregateArgs>(args: Prisma.Subset<T, ProtectionMemberAggregateArgs>): Prisma.PrismaPromise<GetProtectionMemberAggregateType<T>>;
    /**
     * Group by ProtectionMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtectionMemberGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProtectionMemberGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProtectionMemberGroupByArgs['orderBy'];
    } : {
        orderBy?: ProtectionMemberGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProtectionMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtectionMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProtectionMember model
     */
    readonly fields: ProtectionMemberFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProtectionMember.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProtectionMemberClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    WorldProtection<T extends Prisma.WorldProtectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorldProtectionDefaultArgs<ExtArgs>>): Prisma.Prisma__WorldProtectionClient<runtime.Types.Result.GetResult<Prisma.$WorldProtectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProtectionMember model
 */
export interface ProtectionMemberFieldRefs {
    readonly id: Prisma.FieldRef<"ProtectionMember", 'String'>;
    readonly protectionId: Prisma.FieldRef<"ProtectionMember", 'String'>;
    readonly playerName: Prisma.FieldRef<"ProtectionMember", 'String'>;
    readonly level: Prisma.FieldRef<"ProtectionMember", 'String'>;
    readonly addedAt: Prisma.FieldRef<"ProtectionMember", 'DateTime'>;
}
/**
 * ProtectionMember findUnique
 */
export type ProtectionMemberFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProtectionMember to fetch.
     */
    where: Prisma.ProtectionMemberWhereUniqueInput;
};
/**
 * ProtectionMember findUniqueOrThrow
 */
export type ProtectionMemberFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProtectionMember to fetch.
     */
    where: Prisma.ProtectionMemberWhereUniqueInput;
};
/**
 * ProtectionMember findFirst
 */
export type ProtectionMemberFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProtectionMember to fetch.
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProtectionMembers to fetch.
     */
    orderBy?: Prisma.ProtectionMemberOrderByWithRelationInput | Prisma.ProtectionMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProtectionMembers.
     */
    cursor?: Prisma.ProtectionMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProtectionMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProtectionMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProtectionMembers.
     */
    distinct?: Prisma.ProtectionMemberScalarFieldEnum | Prisma.ProtectionMemberScalarFieldEnum[];
};
/**
 * ProtectionMember findFirstOrThrow
 */
export type ProtectionMemberFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProtectionMember to fetch.
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProtectionMembers to fetch.
     */
    orderBy?: Prisma.ProtectionMemberOrderByWithRelationInput | Prisma.ProtectionMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProtectionMembers.
     */
    cursor?: Prisma.ProtectionMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProtectionMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProtectionMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProtectionMembers.
     */
    distinct?: Prisma.ProtectionMemberScalarFieldEnum | Prisma.ProtectionMemberScalarFieldEnum[];
};
/**
 * ProtectionMember findMany
 */
export type ProtectionMemberFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProtectionMembers to fetch.
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProtectionMembers to fetch.
     */
    orderBy?: Prisma.ProtectionMemberOrderByWithRelationInput | Prisma.ProtectionMemberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProtectionMembers.
     */
    cursor?: Prisma.ProtectionMemberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProtectionMembers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProtectionMembers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProtectionMembers.
     */
    distinct?: Prisma.ProtectionMemberScalarFieldEnum | Prisma.ProtectionMemberScalarFieldEnum[];
};
/**
 * ProtectionMember create
 */
export type ProtectionMemberCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProtectionMember.
     */
    data: Prisma.XOR<Prisma.ProtectionMemberCreateInput, Prisma.ProtectionMemberUncheckedCreateInput>;
};
/**
 * ProtectionMember createMany
 */
export type ProtectionMemberCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProtectionMembers.
     */
    data: Prisma.ProtectionMemberCreateManyInput | Prisma.ProtectionMemberCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProtectionMember createManyAndReturn
 */
export type ProtectionMemberCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtectionMember
     */
    select?: Prisma.ProtectionMemberSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProtectionMember
     */
    omit?: Prisma.ProtectionMemberOmit<ExtArgs> | null;
    /**
     * The data used to create many ProtectionMembers.
     */
    data: Prisma.ProtectionMemberCreateManyInput | Prisma.ProtectionMemberCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProtectionMemberIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProtectionMember update
 */
export type ProtectionMemberUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProtectionMember.
     */
    data: Prisma.XOR<Prisma.ProtectionMemberUpdateInput, Prisma.ProtectionMemberUncheckedUpdateInput>;
    /**
     * Choose, which ProtectionMember to update.
     */
    where: Prisma.ProtectionMemberWhereUniqueInput;
};
/**
 * ProtectionMember updateMany
 */
export type ProtectionMemberUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProtectionMembers.
     */
    data: Prisma.XOR<Prisma.ProtectionMemberUpdateManyMutationInput, Prisma.ProtectionMemberUncheckedUpdateManyInput>;
    /**
     * Filter which ProtectionMembers to update
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * Limit how many ProtectionMembers to update.
     */
    limit?: number;
};
/**
 * ProtectionMember updateManyAndReturn
 */
export type ProtectionMemberUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtectionMember
     */
    select?: Prisma.ProtectionMemberSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProtectionMember
     */
    omit?: Prisma.ProtectionMemberOmit<ExtArgs> | null;
    /**
     * The data used to update ProtectionMembers.
     */
    data: Prisma.XOR<Prisma.ProtectionMemberUpdateManyMutationInput, Prisma.ProtectionMemberUncheckedUpdateManyInput>;
    /**
     * Filter which ProtectionMembers to update
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * Limit how many ProtectionMembers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProtectionMemberIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProtectionMember upsert
 */
export type ProtectionMemberUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProtectionMember to update in case it exists.
     */
    where: Prisma.ProtectionMemberWhereUniqueInput;
    /**
     * In case the ProtectionMember found by the `where` argument doesn't exist, create a new ProtectionMember with this data.
     */
    create: Prisma.XOR<Prisma.ProtectionMemberCreateInput, Prisma.ProtectionMemberUncheckedCreateInput>;
    /**
     * In case the ProtectionMember was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProtectionMemberUpdateInput, Prisma.ProtectionMemberUncheckedUpdateInput>;
};
/**
 * ProtectionMember delete
 */
export type ProtectionMemberDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProtectionMember to delete.
     */
    where: Prisma.ProtectionMemberWhereUniqueInput;
};
/**
 * ProtectionMember deleteMany
 */
export type ProtectionMemberDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProtectionMembers to delete
     */
    where?: Prisma.ProtectionMemberWhereInput;
    /**
     * Limit how many ProtectionMembers to delete.
     */
    limit?: number;
};
/**
 * ProtectionMember without action
 */
export type ProtectionMemberDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=ProtectionMember.d.ts.map