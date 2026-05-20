import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model NicknameRole
 *
 */
export type NicknameRoleModel = runtime.Types.Result.DefaultSelection<Prisma.$NicknameRolePayload>;
export type AggregateNicknameRole = {
    _count: NicknameRoleCountAggregateOutputType | null;
    _min: NicknameRoleMinAggregateOutputType | null;
    _max: NicknameRoleMaxAggregateOutputType | null;
};
export type NicknameRoleMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    roleId: string | null;
    emoji: string | null;
    createdAt: Date | null;
};
export type NicknameRoleMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    roleId: string | null;
    emoji: string | null;
    createdAt: Date | null;
};
export type NicknameRoleCountAggregateOutputType = {
    id: number;
    guildId: number;
    roleId: number;
    emoji: number;
    createdAt: number;
    _all: number;
};
export type NicknameRoleMinAggregateInputType = {
    id?: true;
    guildId?: true;
    roleId?: true;
    emoji?: true;
    createdAt?: true;
};
export type NicknameRoleMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    roleId?: true;
    emoji?: true;
    createdAt?: true;
};
export type NicknameRoleCountAggregateInputType = {
    id?: true;
    guildId?: true;
    roleId?: true;
    emoji?: true;
    createdAt?: true;
    _all?: true;
};
export type NicknameRoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NicknameRole to aggregate.
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NicknameRoles to fetch.
     */
    orderBy?: Prisma.NicknameRoleOrderByWithRelationInput | Prisma.NicknameRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.NicknameRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NicknameRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NicknameRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned NicknameRoles
    **/
    _count?: true | NicknameRoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NicknameRoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NicknameRoleMaxAggregateInputType;
};
export type GetNicknameRoleAggregateType<T extends NicknameRoleAggregateArgs> = {
    [P in keyof T & keyof AggregateNicknameRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNicknameRole[P]> : Prisma.GetScalarType<T[P], AggregateNicknameRole[P]>;
};
export type NicknameRoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NicknameRoleWhereInput;
    orderBy?: Prisma.NicknameRoleOrderByWithAggregationInput | Prisma.NicknameRoleOrderByWithAggregationInput[];
    by: Prisma.NicknameRoleScalarFieldEnum[] | Prisma.NicknameRoleScalarFieldEnum;
    having?: Prisma.NicknameRoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NicknameRoleCountAggregateInputType | true;
    _min?: NicknameRoleMinAggregateInputType;
    _max?: NicknameRoleMaxAggregateInputType;
};
export type NicknameRoleGroupByOutputType = {
    id: string;
    guildId: string;
    roleId: string;
    emoji: string | null;
    createdAt: Date;
    _count: NicknameRoleCountAggregateOutputType | null;
    _min: NicknameRoleMinAggregateOutputType | null;
    _max: NicknameRoleMaxAggregateOutputType | null;
};
export type GetNicknameRoleGroupByPayload<T extends NicknameRoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NicknameRoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NicknameRoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NicknameRoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NicknameRoleGroupByOutputType[P]>;
}>>;
export type NicknameRoleWhereInput = {
    AND?: Prisma.NicknameRoleWhereInput | Prisma.NicknameRoleWhereInput[];
    OR?: Prisma.NicknameRoleWhereInput[];
    NOT?: Prisma.NicknameRoleWhereInput | Prisma.NicknameRoleWhereInput[];
    id?: Prisma.StringFilter<"NicknameRole"> | string;
    guildId?: Prisma.StringFilter<"NicknameRole"> | string;
    roleId?: Prisma.StringFilter<"NicknameRole"> | string;
    emoji?: Prisma.StringNullableFilter<"NicknameRole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"NicknameRole"> | Date | string;
};
export type NicknameRoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NicknameRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_roleId?: Prisma.NicknameRoleGuildIdRoleIdCompoundUniqueInput;
    AND?: Prisma.NicknameRoleWhereInput | Prisma.NicknameRoleWhereInput[];
    OR?: Prisma.NicknameRoleWhereInput[];
    NOT?: Prisma.NicknameRoleWhereInput | Prisma.NicknameRoleWhereInput[];
    guildId?: Prisma.StringFilter<"NicknameRole"> | string;
    roleId?: Prisma.StringFilter<"NicknameRole"> | string;
    emoji?: Prisma.StringNullableFilter<"NicknameRole"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"NicknameRole"> | Date | string;
}, "id" | "guildId_roleId">;
export type NicknameRoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.NicknameRoleCountOrderByAggregateInput;
    _max?: Prisma.NicknameRoleMaxOrderByAggregateInput;
    _min?: Prisma.NicknameRoleMinOrderByAggregateInput;
};
export type NicknameRoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.NicknameRoleScalarWhereWithAggregatesInput | Prisma.NicknameRoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.NicknameRoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NicknameRoleScalarWhereWithAggregatesInput | Prisma.NicknameRoleScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"NicknameRole"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"NicknameRole"> | string;
    roleId?: Prisma.StringWithAggregatesFilter<"NicknameRole"> | string;
    emoji?: Prisma.StringNullableWithAggregatesFilter<"NicknameRole"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"NicknameRole"> | Date | string;
};
export type NicknameRoleCreateInput = {
    id?: string;
    guildId: string;
    roleId: string;
    emoji?: string | null;
    createdAt?: Date | string;
};
export type NicknameRoleUncheckedCreateInput = {
    id?: string;
    guildId: string;
    roleId: string;
    emoji?: string | null;
    createdAt?: Date | string;
};
export type NicknameRoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NicknameRoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NicknameRoleCreateManyInput = {
    id?: string;
    guildId: string;
    roleId: string;
    emoji?: string | null;
    createdAt?: Date | string;
};
export type NicknameRoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NicknameRoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    roleId?: Prisma.StringFieldUpdateOperationsInput | string;
    emoji?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NicknameRoleGuildIdRoleIdCompoundUniqueInput = {
    guildId: string;
    roleId: string;
};
export type NicknameRoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NicknameRoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NicknameRoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    roleId?: Prisma.SortOrder;
    emoji?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type NicknameRoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    roleId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["nicknameRole"]>;
export type NicknameRoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    roleId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["nicknameRole"]>;
export type NicknameRoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    roleId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["nicknameRole"]>;
export type NicknameRoleSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    roleId?: boolean;
    emoji?: boolean;
    createdAt?: boolean;
};
export type NicknameRoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "roleId" | "emoji" | "createdAt", ExtArgs["result"]["nicknameRole"]>;
export type $NicknameRolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NicknameRole";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        roleId: string;
        emoji: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["nicknameRole"]>;
    composites: {};
};
export type NicknameRoleGetPayload<S extends boolean | null | undefined | NicknameRoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload, S>;
export type NicknameRoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NicknameRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NicknameRoleCountAggregateInputType | true;
};
export interface NicknameRoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NicknameRole'];
        meta: {
            name: 'NicknameRole';
        };
    };
    /**
     * Find zero or one NicknameRole that matches the filter.
     * @param {NicknameRoleFindUniqueArgs} args - Arguments to find a NicknameRole
     * @example
     * // Get one NicknameRole
     * const nicknameRole = await prisma.nicknameRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NicknameRoleFindUniqueArgs>(args: Prisma.SelectSubset<T, NicknameRoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one NicknameRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NicknameRoleFindUniqueOrThrowArgs} args - Arguments to find a NicknameRole
     * @example
     * // Get one NicknameRole
     * const nicknameRole = await prisma.nicknameRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NicknameRoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NicknameRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NicknameRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleFindFirstArgs} args - Arguments to find a NicknameRole
     * @example
     * // Get one NicknameRole
     * const nicknameRole = await prisma.nicknameRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NicknameRoleFindFirstArgs>(args?: Prisma.SelectSubset<T, NicknameRoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first NicknameRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleFindFirstOrThrowArgs} args - Arguments to find a NicknameRole
     * @example
     * // Get one NicknameRole
     * const nicknameRole = await prisma.nicknameRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NicknameRoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NicknameRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more NicknameRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NicknameRoles
     * const nicknameRoles = await prisma.nicknameRole.findMany()
     *
     * // Get first 10 NicknameRoles
     * const nicknameRoles = await prisma.nicknameRole.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const nicknameRoleWithIdOnly = await prisma.nicknameRole.findMany({ select: { id: true } })
     *
     */
    findMany<T extends NicknameRoleFindManyArgs>(args?: Prisma.SelectSubset<T, NicknameRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a NicknameRole.
     * @param {NicknameRoleCreateArgs} args - Arguments to create a NicknameRole.
     * @example
     * // Create one NicknameRole
     * const NicknameRole = await prisma.nicknameRole.create({
     *   data: {
     *     // ... data to create a NicknameRole
     *   }
     * })
     *
     */
    create<T extends NicknameRoleCreateArgs>(args: Prisma.SelectSubset<T, NicknameRoleCreateArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many NicknameRoles.
     * @param {NicknameRoleCreateManyArgs} args - Arguments to create many NicknameRoles.
     * @example
     * // Create many NicknameRoles
     * const nicknameRole = await prisma.nicknameRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NicknameRoleCreateManyArgs>(args?: Prisma.SelectSubset<T, NicknameRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many NicknameRoles and returns the data saved in the database.
     * @param {NicknameRoleCreateManyAndReturnArgs} args - Arguments to create many NicknameRoles.
     * @example
     * // Create many NicknameRoles
     * const nicknameRole = await prisma.nicknameRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many NicknameRoles and only return the `id`
     * const nicknameRoleWithIdOnly = await prisma.nicknameRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NicknameRoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NicknameRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a NicknameRole.
     * @param {NicknameRoleDeleteArgs} args - Arguments to delete one NicknameRole.
     * @example
     * // Delete one NicknameRole
     * const NicknameRole = await prisma.nicknameRole.delete({
     *   where: {
     *     // ... filter to delete one NicknameRole
     *   }
     * })
     *
     */
    delete<T extends NicknameRoleDeleteArgs>(args: Prisma.SelectSubset<T, NicknameRoleDeleteArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one NicknameRole.
     * @param {NicknameRoleUpdateArgs} args - Arguments to update one NicknameRole.
     * @example
     * // Update one NicknameRole
     * const nicknameRole = await prisma.nicknameRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NicknameRoleUpdateArgs>(args: Prisma.SelectSubset<T, NicknameRoleUpdateArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more NicknameRoles.
     * @param {NicknameRoleDeleteManyArgs} args - Arguments to filter NicknameRoles to delete.
     * @example
     * // Delete a few NicknameRoles
     * const { count } = await prisma.nicknameRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NicknameRoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, NicknameRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NicknameRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NicknameRoles
     * const nicknameRole = await prisma.nicknameRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NicknameRoleUpdateManyArgs>(args: Prisma.SelectSubset<T, NicknameRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more NicknameRoles and returns the data updated in the database.
     * @param {NicknameRoleUpdateManyAndReturnArgs} args - Arguments to update many NicknameRoles.
     * @example
     * // Update many NicknameRoles
     * const nicknameRole = await prisma.nicknameRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more NicknameRoles and only return the `id`
     * const nicknameRoleWithIdOnly = await prisma.nicknameRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends NicknameRoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NicknameRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one NicknameRole.
     * @param {NicknameRoleUpsertArgs} args - Arguments to update or create a NicknameRole.
     * @example
     * // Update or create a NicknameRole
     * const nicknameRole = await prisma.nicknameRole.upsert({
     *   create: {
     *     // ... data to create a NicknameRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NicknameRole we want to update
     *   }
     * })
     */
    upsert<T extends NicknameRoleUpsertArgs>(args: Prisma.SelectSubset<T, NicknameRoleUpsertArgs<ExtArgs>>): Prisma.Prisma__NicknameRoleClient<runtime.Types.Result.GetResult<Prisma.$NicknameRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of NicknameRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleCountArgs} args - Arguments to filter NicknameRoles to count.
     * @example
     * // Count the number of NicknameRoles
     * const count = await prisma.nicknameRole.count({
     *   where: {
     *     // ... the filter for the NicknameRoles we want to count
     *   }
     * })
    **/
    count<T extends NicknameRoleCountArgs>(args?: Prisma.Subset<T, NicknameRoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NicknameRoleCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a NicknameRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NicknameRoleAggregateArgs>(args: Prisma.Subset<T, NicknameRoleAggregateArgs>): Prisma.PrismaPromise<GetNicknameRoleAggregateType<T>>;
    /**
     * Group by NicknameRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NicknameRoleGroupByArgs} args - Group by arguments.
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
    groupBy<T extends NicknameRoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NicknameRoleGroupByArgs['orderBy'];
    } : {
        orderBy?: NicknameRoleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NicknameRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNicknameRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the NicknameRole model
     */
    readonly fields: NicknameRoleFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for NicknameRole.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__NicknameRoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the NicknameRole model
 */
export interface NicknameRoleFieldRefs {
    readonly id: Prisma.FieldRef<"NicknameRole", 'String'>;
    readonly guildId: Prisma.FieldRef<"NicknameRole", 'String'>;
    readonly roleId: Prisma.FieldRef<"NicknameRole", 'String'>;
    readonly emoji: Prisma.FieldRef<"NicknameRole", 'String'>;
    readonly createdAt: Prisma.FieldRef<"NicknameRole", 'DateTime'>;
}
/**
 * NicknameRole findUnique
 */
export type NicknameRoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter, which NicknameRole to fetch.
     */
    where: Prisma.NicknameRoleWhereUniqueInput;
};
/**
 * NicknameRole findUniqueOrThrow
 */
export type NicknameRoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter, which NicknameRole to fetch.
     */
    where: Prisma.NicknameRoleWhereUniqueInput;
};
/**
 * NicknameRole findFirst
 */
export type NicknameRoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter, which NicknameRole to fetch.
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NicknameRoles to fetch.
     */
    orderBy?: Prisma.NicknameRoleOrderByWithRelationInput | Prisma.NicknameRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NicknameRoles.
     */
    cursor?: Prisma.NicknameRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NicknameRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NicknameRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NicknameRoles.
     */
    distinct?: Prisma.NicknameRoleScalarFieldEnum | Prisma.NicknameRoleScalarFieldEnum[];
};
/**
 * NicknameRole findFirstOrThrow
 */
export type NicknameRoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter, which NicknameRole to fetch.
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NicknameRoles to fetch.
     */
    orderBy?: Prisma.NicknameRoleOrderByWithRelationInput | Prisma.NicknameRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for NicknameRoles.
     */
    cursor?: Prisma.NicknameRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NicknameRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NicknameRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NicknameRoles.
     */
    distinct?: Prisma.NicknameRoleScalarFieldEnum | Prisma.NicknameRoleScalarFieldEnum[];
};
/**
 * NicknameRole findMany
 */
export type NicknameRoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter, which NicknameRoles to fetch.
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of NicknameRoles to fetch.
     */
    orderBy?: Prisma.NicknameRoleOrderByWithRelationInput | Prisma.NicknameRoleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing NicknameRoles.
     */
    cursor?: Prisma.NicknameRoleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` NicknameRoles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` NicknameRoles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of NicknameRoles.
     */
    distinct?: Prisma.NicknameRoleScalarFieldEnum | Prisma.NicknameRoleScalarFieldEnum[];
};
/**
 * NicknameRole create
 */
export type NicknameRoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * The data needed to create a NicknameRole.
     */
    data: Prisma.XOR<Prisma.NicknameRoleCreateInput, Prisma.NicknameRoleUncheckedCreateInput>;
};
/**
 * NicknameRole createMany
 */
export type NicknameRoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many NicknameRoles.
     */
    data: Prisma.NicknameRoleCreateManyInput | Prisma.NicknameRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * NicknameRole createManyAndReturn
 */
export type NicknameRoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * The data used to create many NicknameRoles.
     */
    data: Prisma.NicknameRoleCreateManyInput | Prisma.NicknameRoleCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * NicknameRole update
 */
export type NicknameRoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * The data needed to update a NicknameRole.
     */
    data: Prisma.XOR<Prisma.NicknameRoleUpdateInput, Prisma.NicknameRoleUncheckedUpdateInput>;
    /**
     * Choose, which NicknameRole to update.
     */
    where: Prisma.NicknameRoleWhereUniqueInput;
};
/**
 * NicknameRole updateMany
 */
export type NicknameRoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update NicknameRoles.
     */
    data: Prisma.XOR<Prisma.NicknameRoleUpdateManyMutationInput, Prisma.NicknameRoleUncheckedUpdateManyInput>;
    /**
     * Filter which NicknameRoles to update
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * Limit how many NicknameRoles to update.
     */
    limit?: number;
};
/**
 * NicknameRole updateManyAndReturn
 */
export type NicknameRoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * The data used to update NicknameRoles.
     */
    data: Prisma.XOR<Prisma.NicknameRoleUpdateManyMutationInput, Prisma.NicknameRoleUncheckedUpdateManyInput>;
    /**
     * Filter which NicknameRoles to update
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * Limit how many NicknameRoles to update.
     */
    limit?: number;
};
/**
 * NicknameRole upsert
 */
export type NicknameRoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * The filter to search for the NicknameRole to update in case it exists.
     */
    where: Prisma.NicknameRoleWhereUniqueInput;
    /**
     * In case the NicknameRole found by the `where` argument doesn't exist, create a new NicknameRole with this data.
     */
    create: Prisma.XOR<Prisma.NicknameRoleCreateInput, Prisma.NicknameRoleUncheckedCreateInput>;
    /**
     * In case the NicknameRole was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.NicknameRoleUpdateInput, Prisma.NicknameRoleUncheckedUpdateInput>;
};
/**
 * NicknameRole delete
 */
export type NicknameRoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
    /**
     * Filter which NicknameRole to delete.
     */
    where: Prisma.NicknameRoleWhereUniqueInput;
};
/**
 * NicknameRole deleteMany
 */
export type NicknameRoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NicknameRoles to delete
     */
    where?: Prisma.NicknameRoleWhereInput;
    /**
     * Limit how many NicknameRoles to delete.
     */
    limit?: number;
};
/**
 * NicknameRole without action
 */
export type NicknameRoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NicknameRole
     */
    select?: Prisma.NicknameRoleSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the NicknameRole
     */
    omit?: Prisma.NicknameRoleOmit<ExtArgs> | null;
};
//# sourceMappingURL=NicknameRole.d.ts.map