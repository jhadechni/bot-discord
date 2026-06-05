import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MonthlyActivity
 *
 */
export type MonthlyActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$MonthlyActivityPayload>;
export type AggregateMonthlyActivity = {
    _count: MonthlyActivityCountAggregateOutputType | null;
    _avg: MonthlyActivityAvgAggregateOutputType | null;
    _sum: MonthlyActivitySumAggregateOutputType | null;
    _min: MonthlyActivityMinAggregateOutputType | null;
    _max: MonthlyActivityMaxAggregateOutputType | null;
};
export type MonthlyActivityAvgAggregateOutputType = {
    xp: number | null;
    messageCount: number | null;
    voiceMinutes: number | null;
};
export type MonthlyActivitySumAggregateOutputType = {
    xp: number | null;
    messageCount: number | null;
    voiceMinutes: number | null;
};
export type MonthlyActivityMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    yearMonth: string | null;
    xp: number | null;
    messageCount: number | null;
    voiceMinutes: number | null;
    updatedAt: Date | null;
};
export type MonthlyActivityMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    yearMonth: string | null;
    xp: number | null;
    messageCount: number | null;
    voiceMinutes: number | null;
    updatedAt: Date | null;
};
export type MonthlyActivityCountAggregateOutputType = {
    id: number;
    guildId: number;
    userId: number;
    yearMonth: number;
    xp: number;
    messageCount: number;
    voiceMinutes: number;
    updatedAt: number;
    _all: number;
};
export type MonthlyActivityAvgAggregateInputType = {
    xp?: true;
    messageCount?: true;
    voiceMinutes?: true;
};
export type MonthlyActivitySumAggregateInputType = {
    xp?: true;
    messageCount?: true;
    voiceMinutes?: true;
};
export type MonthlyActivityMinAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    yearMonth?: true;
    xp?: true;
    messageCount?: true;
    voiceMinutes?: true;
    updatedAt?: true;
};
export type MonthlyActivityMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    yearMonth?: true;
    xp?: true;
    messageCount?: true;
    voiceMinutes?: true;
    updatedAt?: true;
};
export type MonthlyActivityCountAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    yearMonth?: true;
    xp?: true;
    messageCount?: true;
    voiceMinutes?: true;
    updatedAt?: true;
    _all?: true;
};
export type MonthlyActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyActivity to aggregate.
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonthlyActivities to fetch.
     */
    orderBy?: Prisma.MonthlyActivityOrderByWithRelationInput | Prisma.MonthlyActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MonthlyActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonthlyActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonthlyActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MonthlyActivities
    **/
    _count?: true | MonthlyActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MonthlyActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MonthlyActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyActivityMaxAggregateInputType;
};
export type GetMonthlyActivityAggregateType<T extends MonthlyActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateMonthlyActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMonthlyActivity[P]> : Prisma.GetScalarType<T[P], AggregateMonthlyActivity[P]>;
};
export type MonthlyActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MonthlyActivityWhereInput;
    orderBy?: Prisma.MonthlyActivityOrderByWithAggregationInput | Prisma.MonthlyActivityOrderByWithAggregationInput[];
    by: Prisma.MonthlyActivityScalarFieldEnum[] | Prisma.MonthlyActivityScalarFieldEnum;
    having?: Prisma.MonthlyActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MonthlyActivityCountAggregateInputType | true;
    _avg?: MonthlyActivityAvgAggregateInputType;
    _sum?: MonthlyActivitySumAggregateInputType;
    _min?: MonthlyActivityMinAggregateInputType;
    _max?: MonthlyActivityMaxAggregateInputType;
};
export type MonthlyActivityGroupByOutputType = {
    id: string;
    guildId: string;
    userId: string;
    yearMonth: string;
    xp: number;
    messageCount: number;
    voiceMinutes: number;
    updatedAt: Date;
    _count: MonthlyActivityCountAggregateOutputType | null;
    _avg: MonthlyActivityAvgAggregateOutputType | null;
    _sum: MonthlyActivitySumAggregateOutputType | null;
    _min: MonthlyActivityMinAggregateOutputType | null;
    _max: MonthlyActivityMaxAggregateOutputType | null;
};
export type GetMonthlyActivityGroupByPayload<T extends MonthlyActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MonthlyActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MonthlyActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MonthlyActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MonthlyActivityGroupByOutputType[P]>;
}>>;
export type MonthlyActivityWhereInput = {
    AND?: Prisma.MonthlyActivityWhereInput | Prisma.MonthlyActivityWhereInput[];
    OR?: Prisma.MonthlyActivityWhereInput[];
    NOT?: Prisma.MonthlyActivityWhereInput | Prisma.MonthlyActivityWhereInput[];
    id?: Prisma.StringFilter<"MonthlyActivity"> | string;
    guildId?: Prisma.StringFilter<"MonthlyActivity"> | string;
    userId?: Prisma.StringFilter<"MonthlyActivity"> | string;
    yearMonth?: Prisma.StringFilter<"MonthlyActivity"> | string;
    xp?: Prisma.IntFilter<"MonthlyActivity"> | number;
    messageCount?: Prisma.IntFilter<"MonthlyActivity"> | number;
    voiceMinutes?: Prisma.IntFilter<"MonthlyActivity"> | number;
    updatedAt?: Prisma.DateTimeFilter<"MonthlyActivity"> | Date | string;
};
export type MonthlyActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    yearMonth?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_userId_yearMonth?: Prisma.MonthlyActivityGuildIdUserIdYearMonthCompoundUniqueInput;
    AND?: Prisma.MonthlyActivityWhereInput | Prisma.MonthlyActivityWhereInput[];
    OR?: Prisma.MonthlyActivityWhereInput[];
    NOT?: Prisma.MonthlyActivityWhereInput | Prisma.MonthlyActivityWhereInput[];
    guildId?: Prisma.StringFilter<"MonthlyActivity"> | string;
    userId?: Prisma.StringFilter<"MonthlyActivity"> | string;
    yearMonth?: Prisma.StringFilter<"MonthlyActivity"> | string;
    xp?: Prisma.IntFilter<"MonthlyActivity"> | number;
    messageCount?: Prisma.IntFilter<"MonthlyActivity"> | number;
    voiceMinutes?: Prisma.IntFilter<"MonthlyActivity"> | number;
    updatedAt?: Prisma.DateTimeFilter<"MonthlyActivity"> | Date | string;
}, "id" | "guildId_userId_yearMonth">;
export type MonthlyActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    yearMonth?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MonthlyActivityCountOrderByAggregateInput;
    _avg?: Prisma.MonthlyActivityAvgOrderByAggregateInput;
    _max?: Prisma.MonthlyActivityMaxOrderByAggregateInput;
    _min?: Prisma.MonthlyActivityMinOrderByAggregateInput;
    _sum?: Prisma.MonthlyActivitySumOrderByAggregateInput;
};
export type MonthlyActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.MonthlyActivityScalarWhereWithAggregatesInput | Prisma.MonthlyActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.MonthlyActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MonthlyActivityScalarWhereWithAggregatesInput | Prisma.MonthlyActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MonthlyActivity"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"MonthlyActivity"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"MonthlyActivity"> | string;
    yearMonth?: Prisma.StringWithAggregatesFilter<"MonthlyActivity"> | string;
    xp?: Prisma.IntWithAggregatesFilter<"MonthlyActivity"> | number;
    messageCount?: Prisma.IntWithAggregatesFilter<"MonthlyActivity"> | number;
    voiceMinutes?: Prisma.IntWithAggregatesFilter<"MonthlyActivity"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"MonthlyActivity"> | Date | string;
};
export type MonthlyActivityCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    yearMonth: string;
    xp?: number;
    messageCount?: number;
    voiceMinutes?: number;
    updatedAt?: Date | string;
};
export type MonthlyActivityUncheckedCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    yearMonth: string;
    xp?: number;
    messageCount?: number;
    voiceMinutes?: number;
    updatedAt?: Date | string;
};
export type MonthlyActivityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    yearMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voiceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyActivityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    yearMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voiceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyActivityCreateManyInput = {
    id?: string;
    guildId: string;
    userId: string;
    yearMonth: string;
    xp?: number;
    messageCount?: number;
    voiceMinutes?: number;
    updatedAt?: Date | string;
};
export type MonthlyActivityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    yearMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voiceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyActivityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    yearMonth?: Prisma.StringFieldUpdateOperationsInput | string;
    xp?: Prisma.IntFieldUpdateOperationsInput | number;
    messageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    voiceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MonthlyActivityGuildIdUserIdYearMonthCompoundUniqueInput = {
    guildId: string;
    userId: string;
    yearMonth: string;
};
export type MonthlyActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    yearMonth?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyActivityAvgOrderByAggregateInput = {
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
};
export type MonthlyActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    yearMonth?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    yearMonth?: Prisma.SortOrder;
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MonthlyActivitySumOrderByAggregateInput = {
    xp?: Prisma.SortOrder;
    messageCount?: Prisma.SortOrder;
    voiceMinutes?: Prisma.SortOrder;
};
export type MonthlyActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    yearMonth?: boolean;
    xp?: boolean;
    messageCount?: boolean;
    voiceMinutes?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["monthlyActivity"]>;
export type MonthlyActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    yearMonth?: boolean;
    xp?: boolean;
    messageCount?: boolean;
    voiceMinutes?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["monthlyActivity"]>;
export type MonthlyActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    yearMonth?: boolean;
    xp?: boolean;
    messageCount?: boolean;
    voiceMinutes?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["monthlyActivity"]>;
export type MonthlyActivitySelectScalar = {
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    yearMonth?: boolean;
    xp?: boolean;
    messageCount?: boolean;
    voiceMinutes?: boolean;
    updatedAt?: boolean;
};
export type MonthlyActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "userId" | "yearMonth" | "xp" | "messageCount" | "voiceMinutes" | "updatedAt", ExtArgs["result"]["monthlyActivity"]>;
export type $MonthlyActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MonthlyActivity";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        userId: string;
        yearMonth: string;
        xp: number;
        messageCount: number;
        voiceMinutes: number;
        updatedAt: Date;
    }, ExtArgs["result"]["monthlyActivity"]>;
    composites: {};
};
export type MonthlyActivityGetPayload<S extends boolean | null | undefined | MonthlyActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload, S>;
export type MonthlyActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MonthlyActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MonthlyActivityCountAggregateInputType | true;
};
export interface MonthlyActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MonthlyActivity'];
        meta: {
            name: 'MonthlyActivity';
        };
    };
    /**
     * Find zero or one MonthlyActivity that matches the filter.
     * @param {MonthlyActivityFindUniqueArgs} args - Arguments to find a MonthlyActivity
     * @example
     * // Get one MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, MonthlyActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MonthlyActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyActivityFindUniqueOrThrowArgs} args - Arguments to find a MonthlyActivity
     * @example
     * // Get one MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MonthlyActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MonthlyActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityFindFirstArgs} args - Arguments to find a MonthlyActivity
     * @example
     * // Get one MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MonthlyActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityFindFirstOrThrowArgs} args - Arguments to find a MonthlyActivity
     * @example
     * // Get one MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MonthlyActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyActivities
     * const monthlyActivities = await prisma.monthlyActivity.findMany()
     *
     * // Get first 10 MonthlyActivities
     * const monthlyActivities = await prisma.monthlyActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const monthlyActivityWithIdOnly = await prisma.monthlyActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MonthlyActivityFindManyArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MonthlyActivity.
     * @param {MonthlyActivityCreateArgs} args - Arguments to create a MonthlyActivity.
     * @example
     * // Create one MonthlyActivity
     * const MonthlyActivity = await prisma.monthlyActivity.create({
     *   data: {
     *     // ... data to create a MonthlyActivity
     *   }
     * })
     *
     */
    create<T extends MonthlyActivityCreateArgs>(args: Prisma.SelectSubset<T, MonthlyActivityCreateArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MonthlyActivities.
     * @param {MonthlyActivityCreateManyArgs} args - Arguments to create many MonthlyActivities.
     * @example
     * // Create many MonthlyActivities
     * const monthlyActivity = await prisma.monthlyActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MonthlyActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MonthlyActivities and returns the data saved in the database.
     * @param {MonthlyActivityCreateManyAndReturnArgs} args - Arguments to create many MonthlyActivities.
     * @example
     * // Create many MonthlyActivities
     * const monthlyActivity = await prisma.monthlyActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MonthlyActivities and only return the `id`
     * const monthlyActivityWithIdOnly = await prisma.monthlyActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MonthlyActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MonthlyActivity.
     * @param {MonthlyActivityDeleteArgs} args - Arguments to delete one MonthlyActivity.
     * @example
     * // Delete one MonthlyActivity
     * const MonthlyActivity = await prisma.monthlyActivity.delete({
     *   where: {
     *     // ... filter to delete one MonthlyActivity
     *   }
     * })
     *
     */
    delete<T extends MonthlyActivityDeleteArgs>(args: Prisma.SelectSubset<T, MonthlyActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MonthlyActivity.
     * @param {MonthlyActivityUpdateArgs} args - Arguments to update one MonthlyActivity.
     * @example
     * // Update one MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MonthlyActivityUpdateArgs>(args: Prisma.SelectSubset<T, MonthlyActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MonthlyActivities.
     * @param {MonthlyActivityDeleteManyArgs} args - Arguments to filter MonthlyActivities to delete.
     * @example
     * // Delete a few MonthlyActivities
     * const { count } = await prisma.monthlyActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MonthlyActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, MonthlyActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MonthlyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyActivities
     * const monthlyActivity = await prisma.monthlyActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MonthlyActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, MonthlyActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MonthlyActivities and returns the data updated in the database.
     * @param {MonthlyActivityUpdateManyAndReturnArgs} args - Arguments to update many MonthlyActivities.
     * @example
     * // Update many MonthlyActivities
     * const monthlyActivity = await prisma.monthlyActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MonthlyActivities and only return the `id`
     * const monthlyActivityWithIdOnly = await prisma.monthlyActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonthlyActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MonthlyActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MonthlyActivity.
     * @param {MonthlyActivityUpsertArgs} args - Arguments to update or create a MonthlyActivity.
     * @example
     * // Update or create a MonthlyActivity
     * const monthlyActivity = await prisma.monthlyActivity.upsert({
     *   create: {
     *     // ... data to create a MonthlyActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyActivity we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyActivityUpsertArgs>(args: Prisma.SelectSubset<T, MonthlyActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__MonthlyActivityClient<runtime.Types.Result.GetResult<Prisma.$MonthlyActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MonthlyActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityCountArgs} args - Arguments to filter MonthlyActivities to count.
     * @example
     * // Count the number of MonthlyActivities
     * const count = await prisma.monthlyActivity.count({
     *   where: {
     *     // ... the filter for the MonthlyActivities we want to count
     *   }
     * })
    **/
    count<T extends MonthlyActivityCountArgs>(args?: Prisma.Subset<T, MonthlyActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MonthlyActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MonthlyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonthlyActivityAggregateArgs>(args: Prisma.Subset<T, MonthlyActivityAggregateArgs>): Prisma.PrismaPromise<GetMonthlyActivityAggregateType<T>>;
    /**
     * Group by MonthlyActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MonthlyActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MonthlyActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: MonthlyActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MonthlyActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MonthlyActivity model
     */
    readonly fields: MonthlyActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MonthlyActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MonthlyActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MonthlyActivity model
 */
export interface MonthlyActivityFieldRefs {
    readonly id: Prisma.FieldRef<"MonthlyActivity", 'String'>;
    readonly guildId: Prisma.FieldRef<"MonthlyActivity", 'String'>;
    readonly userId: Prisma.FieldRef<"MonthlyActivity", 'String'>;
    readonly yearMonth: Prisma.FieldRef<"MonthlyActivity", 'String'>;
    readonly xp: Prisma.FieldRef<"MonthlyActivity", 'Int'>;
    readonly messageCount: Prisma.FieldRef<"MonthlyActivity", 'Int'>;
    readonly voiceMinutes: Prisma.FieldRef<"MonthlyActivity", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"MonthlyActivity", 'DateTime'>;
}
/**
 * MonthlyActivity findUnique
 */
export type MonthlyActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter, which MonthlyActivity to fetch.
     */
    where: Prisma.MonthlyActivityWhereUniqueInput;
};
/**
 * MonthlyActivity findUniqueOrThrow
 */
export type MonthlyActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter, which MonthlyActivity to fetch.
     */
    where: Prisma.MonthlyActivityWhereUniqueInput;
};
/**
 * MonthlyActivity findFirst
 */
export type MonthlyActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter, which MonthlyActivity to fetch.
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonthlyActivities to fetch.
     */
    orderBy?: Prisma.MonthlyActivityOrderByWithRelationInput | Prisma.MonthlyActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MonthlyActivities.
     */
    cursor?: Prisma.MonthlyActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonthlyActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonthlyActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonthlyActivities.
     */
    distinct?: Prisma.MonthlyActivityScalarFieldEnum | Prisma.MonthlyActivityScalarFieldEnum[];
};
/**
 * MonthlyActivity findFirstOrThrow
 */
export type MonthlyActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter, which MonthlyActivity to fetch.
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonthlyActivities to fetch.
     */
    orderBy?: Prisma.MonthlyActivityOrderByWithRelationInput | Prisma.MonthlyActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MonthlyActivities.
     */
    cursor?: Prisma.MonthlyActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonthlyActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonthlyActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonthlyActivities.
     */
    distinct?: Prisma.MonthlyActivityScalarFieldEnum | Prisma.MonthlyActivityScalarFieldEnum[];
};
/**
 * MonthlyActivity findMany
 */
export type MonthlyActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter, which MonthlyActivities to fetch.
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MonthlyActivities to fetch.
     */
    orderBy?: Prisma.MonthlyActivityOrderByWithRelationInput | Prisma.MonthlyActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MonthlyActivities.
     */
    cursor?: Prisma.MonthlyActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MonthlyActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MonthlyActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MonthlyActivities.
     */
    distinct?: Prisma.MonthlyActivityScalarFieldEnum | Prisma.MonthlyActivityScalarFieldEnum[];
};
/**
 * MonthlyActivity create
 */
export type MonthlyActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * The data needed to create a MonthlyActivity.
     */
    data: Prisma.XOR<Prisma.MonthlyActivityCreateInput, Prisma.MonthlyActivityUncheckedCreateInput>;
};
/**
 * MonthlyActivity createMany
 */
export type MonthlyActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyActivities.
     */
    data: Prisma.MonthlyActivityCreateManyInput | Prisma.MonthlyActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MonthlyActivity createManyAndReturn
 */
export type MonthlyActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many MonthlyActivities.
     */
    data: Prisma.MonthlyActivityCreateManyInput | Prisma.MonthlyActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MonthlyActivity update
 */
export type MonthlyActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * The data needed to update a MonthlyActivity.
     */
    data: Prisma.XOR<Prisma.MonthlyActivityUpdateInput, Prisma.MonthlyActivityUncheckedUpdateInput>;
    /**
     * Choose, which MonthlyActivity to update.
     */
    where: Prisma.MonthlyActivityWhereUniqueInput;
};
/**
 * MonthlyActivity updateMany
 */
export type MonthlyActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyActivities.
     */
    data: Prisma.XOR<Prisma.MonthlyActivityUpdateManyMutationInput, Prisma.MonthlyActivityUncheckedUpdateManyInput>;
    /**
     * Filter which MonthlyActivities to update
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * Limit how many MonthlyActivities to update.
     */
    limit?: number;
};
/**
 * MonthlyActivity updateManyAndReturn
 */
export type MonthlyActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * The data used to update MonthlyActivities.
     */
    data: Prisma.XOR<Prisma.MonthlyActivityUpdateManyMutationInput, Prisma.MonthlyActivityUncheckedUpdateManyInput>;
    /**
     * Filter which MonthlyActivities to update
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * Limit how many MonthlyActivities to update.
     */
    limit?: number;
};
/**
 * MonthlyActivity upsert
 */
export type MonthlyActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * The filter to search for the MonthlyActivity to update in case it exists.
     */
    where: Prisma.MonthlyActivityWhereUniqueInput;
    /**
     * In case the MonthlyActivity found by the `where` argument doesn't exist, create a new MonthlyActivity with this data.
     */
    create: Prisma.XOR<Prisma.MonthlyActivityCreateInput, Prisma.MonthlyActivityUncheckedCreateInput>;
    /**
     * In case the MonthlyActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MonthlyActivityUpdateInput, Prisma.MonthlyActivityUncheckedUpdateInput>;
};
/**
 * MonthlyActivity delete
 */
export type MonthlyActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
    /**
     * Filter which MonthlyActivity to delete.
     */
    where: Prisma.MonthlyActivityWhereUniqueInput;
};
/**
 * MonthlyActivity deleteMany
 */
export type MonthlyActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyActivities to delete
     */
    where?: Prisma.MonthlyActivityWhereInput;
    /**
     * Limit how many MonthlyActivities to delete.
     */
    limit?: number;
};
/**
 * MonthlyActivity without action
 */
export type MonthlyActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyActivity
     */
    select?: Prisma.MonthlyActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MonthlyActivity
     */
    omit?: Prisma.MonthlyActivityOmit<ExtArgs> | null;
};
//# sourceMappingURL=MonthlyActivity.d.ts.map