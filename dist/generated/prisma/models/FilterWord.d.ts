import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model FilterWord
 *
 */
export type FilterWordModel = runtime.Types.Result.DefaultSelection<Prisma.$FilterWordPayload>;
export type AggregateFilterWord = {
    _count: FilterWordCountAggregateOutputType | null;
    _min: FilterWordMinAggregateOutputType | null;
    _max: FilterWordMaxAggregateOutputType | null;
};
export type FilterWordMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    word: string | null;
    addedById: string | null;
    createdAt: Date | null;
};
export type FilterWordMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    word: string | null;
    addedById: string | null;
    createdAt: Date | null;
};
export type FilterWordCountAggregateOutputType = {
    id: number;
    guildId: number;
    word: number;
    addedById: number;
    createdAt: number;
    _all: number;
};
export type FilterWordMinAggregateInputType = {
    id?: true;
    guildId?: true;
    word?: true;
    addedById?: true;
    createdAt?: true;
};
export type FilterWordMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    word?: true;
    addedById?: true;
    createdAt?: true;
};
export type FilterWordCountAggregateInputType = {
    id?: true;
    guildId?: true;
    word?: true;
    addedById?: true;
    createdAt?: true;
    _all?: true;
};
export type FilterWordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FilterWord to aggregate.
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilterWords to fetch.
     */
    orderBy?: Prisma.FilterWordOrderByWithRelationInput | Prisma.FilterWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FilterWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilterWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilterWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned FilterWords
    **/
    _count?: true | FilterWordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FilterWordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FilterWordMaxAggregateInputType;
};
export type GetFilterWordAggregateType<T extends FilterWordAggregateArgs> = {
    [P in keyof T & keyof AggregateFilterWord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFilterWord[P]> : Prisma.GetScalarType<T[P], AggregateFilterWord[P]>;
};
export type FilterWordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FilterWordWhereInput;
    orderBy?: Prisma.FilterWordOrderByWithAggregationInput | Prisma.FilterWordOrderByWithAggregationInput[];
    by: Prisma.FilterWordScalarFieldEnum[] | Prisma.FilterWordScalarFieldEnum;
    having?: Prisma.FilterWordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FilterWordCountAggregateInputType | true;
    _min?: FilterWordMinAggregateInputType;
    _max?: FilterWordMaxAggregateInputType;
};
export type FilterWordGroupByOutputType = {
    id: string;
    guildId: string;
    word: string;
    addedById: string;
    createdAt: Date;
    _count: FilterWordCountAggregateOutputType | null;
    _min: FilterWordMinAggregateOutputType | null;
    _max: FilterWordMaxAggregateOutputType | null;
};
export type GetFilterWordGroupByPayload<T extends FilterWordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FilterWordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FilterWordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FilterWordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FilterWordGroupByOutputType[P]>;
}>>;
export type FilterWordWhereInput = {
    AND?: Prisma.FilterWordWhereInput | Prisma.FilterWordWhereInput[];
    OR?: Prisma.FilterWordWhereInput[];
    NOT?: Prisma.FilterWordWhereInput | Prisma.FilterWordWhereInput[];
    id?: Prisma.StringFilter<"FilterWord"> | string;
    guildId?: Prisma.StringFilter<"FilterWord"> | string;
    word?: Prisma.StringFilter<"FilterWord"> | string;
    addedById?: Prisma.StringFilter<"FilterWord"> | string;
    createdAt?: Prisma.DateTimeFilter<"FilterWord"> | Date | string;
};
export type FilterWordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    addedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FilterWordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_word?: Prisma.FilterWordGuildIdWordCompoundUniqueInput;
    AND?: Prisma.FilterWordWhereInput | Prisma.FilterWordWhereInput[];
    OR?: Prisma.FilterWordWhereInput[];
    NOT?: Prisma.FilterWordWhereInput | Prisma.FilterWordWhereInput[];
    guildId?: Prisma.StringFilter<"FilterWord"> | string;
    word?: Prisma.StringFilter<"FilterWord"> | string;
    addedById?: Prisma.StringFilter<"FilterWord"> | string;
    createdAt?: Prisma.DateTimeFilter<"FilterWord"> | Date | string;
}, "id" | "guildId_word">;
export type FilterWordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    addedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FilterWordCountOrderByAggregateInput;
    _max?: Prisma.FilterWordMaxOrderByAggregateInput;
    _min?: Prisma.FilterWordMinOrderByAggregateInput;
};
export type FilterWordScalarWhereWithAggregatesInput = {
    AND?: Prisma.FilterWordScalarWhereWithAggregatesInput | Prisma.FilterWordScalarWhereWithAggregatesInput[];
    OR?: Prisma.FilterWordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FilterWordScalarWhereWithAggregatesInput | Prisma.FilterWordScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"FilterWord"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"FilterWord"> | string;
    word?: Prisma.StringWithAggregatesFilter<"FilterWord"> | string;
    addedById?: Prisma.StringWithAggregatesFilter<"FilterWord"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"FilterWord"> | Date | string;
};
export type FilterWordCreateInput = {
    id?: string;
    guildId: string;
    word: string;
    addedById: string;
    createdAt?: Date | string;
};
export type FilterWordUncheckedCreateInput = {
    id?: string;
    guildId: string;
    word: string;
    addedById: string;
    createdAt?: Date | string;
};
export type FilterWordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    addedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilterWordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    addedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilterWordCreateManyInput = {
    id?: string;
    guildId: string;
    word: string;
    addedById: string;
    createdAt?: Date | string;
};
export type FilterWordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    addedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilterWordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    word?: Prisma.StringFieldUpdateOperationsInput | string;
    addedById?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FilterWordGuildIdWordCompoundUniqueInput = {
    guildId: string;
    word: string;
};
export type FilterWordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    addedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FilterWordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    addedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FilterWordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    word?: Prisma.SortOrder;
    addedById?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FilterWordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    word?: boolean;
    addedById?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["filterWord"]>;
export type FilterWordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    word?: boolean;
    addedById?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["filterWord"]>;
export type FilterWordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    word?: boolean;
    addedById?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["filterWord"]>;
export type FilterWordSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    word?: boolean;
    addedById?: boolean;
    createdAt?: boolean;
};
export type FilterWordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "word" | "addedById" | "createdAt", ExtArgs["result"]["filterWord"]>;
export type $FilterWordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "FilterWord";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        word: string;
        addedById: string;
        createdAt: Date;
    }, ExtArgs["result"]["filterWord"]>;
    composites: {};
};
export type FilterWordGetPayload<S extends boolean | null | undefined | FilterWordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilterWordPayload, S>;
export type FilterWordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FilterWordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FilterWordCountAggregateInputType | true;
};
export interface FilterWordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['FilterWord'];
        meta: {
            name: 'FilterWord';
        };
    };
    /**
     * Find zero or one FilterWord that matches the filter.
     * @param {FilterWordFindUniqueArgs} args - Arguments to find a FilterWord
     * @example
     * // Get one FilterWord
     * const filterWord = await prisma.filterWord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterWordFindUniqueArgs>(args: Prisma.SelectSubset<T, FilterWordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one FilterWord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterWordFindUniqueOrThrowArgs} args - Arguments to find a FilterWord
     * @example
     * // Get one FilterWord
     * const filterWord = await prisma.filterWord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterWordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FilterWordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FilterWord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordFindFirstArgs} args - Arguments to find a FilterWord
     * @example
     * // Get one FilterWord
     * const filterWord = await prisma.filterWord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterWordFindFirstArgs>(args?: Prisma.SelectSubset<T, FilterWordFindFirstArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first FilterWord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordFindFirstOrThrowArgs} args - Arguments to find a FilterWord
     * @example
     * // Get one FilterWord
     * const filterWord = await prisma.filterWord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterWordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FilterWordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more FilterWords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FilterWords
     * const filterWords = await prisma.filterWord.findMany()
     *
     * // Get first 10 FilterWords
     * const filterWords = await prisma.filterWord.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const filterWordWithIdOnly = await prisma.filterWord.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FilterWordFindManyArgs>(args?: Prisma.SelectSubset<T, FilterWordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a FilterWord.
     * @param {FilterWordCreateArgs} args - Arguments to create a FilterWord.
     * @example
     * // Create one FilterWord
     * const FilterWord = await prisma.filterWord.create({
     *   data: {
     *     // ... data to create a FilterWord
     *   }
     * })
     *
     */
    create<T extends FilterWordCreateArgs>(args: Prisma.SelectSubset<T, FilterWordCreateArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many FilterWords.
     * @param {FilterWordCreateManyArgs} args - Arguments to create many FilterWords.
     * @example
     * // Create many FilterWords
     * const filterWord = await prisma.filterWord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FilterWordCreateManyArgs>(args?: Prisma.SelectSubset<T, FilterWordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many FilterWords and returns the data saved in the database.
     * @param {FilterWordCreateManyAndReturnArgs} args - Arguments to create many FilterWords.
     * @example
     * // Create many FilterWords
     * const filterWord = await prisma.filterWord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many FilterWords and only return the `id`
     * const filterWordWithIdOnly = await prisma.filterWord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FilterWordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FilterWordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a FilterWord.
     * @param {FilterWordDeleteArgs} args - Arguments to delete one FilterWord.
     * @example
     * // Delete one FilterWord
     * const FilterWord = await prisma.filterWord.delete({
     *   where: {
     *     // ... filter to delete one FilterWord
     *   }
     * })
     *
     */
    delete<T extends FilterWordDeleteArgs>(args: Prisma.SelectSubset<T, FilterWordDeleteArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one FilterWord.
     * @param {FilterWordUpdateArgs} args - Arguments to update one FilterWord.
     * @example
     * // Update one FilterWord
     * const filterWord = await prisma.filterWord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FilterWordUpdateArgs>(args: Prisma.SelectSubset<T, FilterWordUpdateArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more FilterWords.
     * @param {FilterWordDeleteManyArgs} args - Arguments to filter FilterWords to delete.
     * @example
     * // Delete a few FilterWords
     * const { count } = await prisma.filterWord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FilterWordDeleteManyArgs>(args?: Prisma.SelectSubset<T, FilterWordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FilterWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FilterWords
     * const filterWord = await prisma.filterWord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FilterWordUpdateManyArgs>(args: Prisma.SelectSubset<T, FilterWordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more FilterWords and returns the data updated in the database.
     * @param {FilterWordUpdateManyAndReturnArgs} args - Arguments to update many FilterWords.
     * @example
     * // Update many FilterWords
     * const filterWord = await prisma.filterWord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more FilterWords and only return the `id`
     * const filterWordWithIdOnly = await prisma.filterWord.updateManyAndReturn({
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
    updateManyAndReturn<T extends FilterWordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FilterWordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one FilterWord.
     * @param {FilterWordUpsertArgs} args - Arguments to update or create a FilterWord.
     * @example
     * // Update or create a FilterWord
     * const filterWord = await prisma.filterWord.upsert({
     *   create: {
     *     // ... data to create a FilterWord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FilterWord we want to update
     *   }
     * })
     */
    upsert<T extends FilterWordUpsertArgs>(args: Prisma.SelectSubset<T, FilterWordUpsertArgs<ExtArgs>>): Prisma.Prisma__FilterWordClient<runtime.Types.Result.GetResult<Prisma.$FilterWordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of FilterWords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordCountArgs} args - Arguments to filter FilterWords to count.
     * @example
     * // Count the number of FilterWords
     * const count = await prisma.filterWord.count({
     *   where: {
     *     // ... the filter for the FilterWords we want to count
     *   }
     * })
    **/
    count<T extends FilterWordCountArgs>(args?: Prisma.Subset<T, FilterWordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FilterWordCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a FilterWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilterWordAggregateArgs>(args: Prisma.Subset<T, FilterWordAggregateArgs>): Prisma.PrismaPromise<GetFilterWordAggregateType<T>>;
    /**
     * Group by FilterWord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterWordGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FilterWordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FilterWordGroupByArgs['orderBy'];
    } : {
        orderBy?: FilterWordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FilterWordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the FilterWord model
     */
    readonly fields: FilterWordFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for FilterWord.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FilterWordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the FilterWord model
 */
export interface FilterWordFieldRefs {
    readonly id: Prisma.FieldRef<"FilterWord", 'String'>;
    readonly guildId: Prisma.FieldRef<"FilterWord", 'String'>;
    readonly word: Prisma.FieldRef<"FilterWord", 'String'>;
    readonly addedById: Prisma.FieldRef<"FilterWord", 'String'>;
    readonly createdAt: Prisma.FieldRef<"FilterWord", 'DateTime'>;
}
/**
 * FilterWord findUnique
 */
export type FilterWordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter, which FilterWord to fetch.
     */
    where: Prisma.FilterWordWhereUniqueInput;
};
/**
 * FilterWord findUniqueOrThrow
 */
export type FilterWordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter, which FilterWord to fetch.
     */
    where: Prisma.FilterWordWhereUniqueInput;
};
/**
 * FilterWord findFirst
 */
export type FilterWordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter, which FilterWord to fetch.
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilterWords to fetch.
     */
    orderBy?: Prisma.FilterWordOrderByWithRelationInput | Prisma.FilterWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FilterWords.
     */
    cursor?: Prisma.FilterWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilterWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilterWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilterWords.
     */
    distinct?: Prisma.FilterWordScalarFieldEnum | Prisma.FilterWordScalarFieldEnum[];
};
/**
 * FilterWord findFirstOrThrow
 */
export type FilterWordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter, which FilterWord to fetch.
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilterWords to fetch.
     */
    orderBy?: Prisma.FilterWordOrderByWithRelationInput | Prisma.FilterWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for FilterWords.
     */
    cursor?: Prisma.FilterWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilterWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilterWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilterWords.
     */
    distinct?: Prisma.FilterWordScalarFieldEnum | Prisma.FilterWordScalarFieldEnum[];
};
/**
 * FilterWord findMany
 */
export type FilterWordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter, which FilterWords to fetch.
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of FilterWords to fetch.
     */
    orderBy?: Prisma.FilterWordOrderByWithRelationInput | Prisma.FilterWordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing FilterWords.
     */
    cursor?: Prisma.FilterWordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` FilterWords from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` FilterWords.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of FilterWords.
     */
    distinct?: Prisma.FilterWordScalarFieldEnum | Prisma.FilterWordScalarFieldEnum[];
};
/**
 * FilterWord create
 */
export type FilterWordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * The data needed to create a FilterWord.
     */
    data: Prisma.XOR<Prisma.FilterWordCreateInput, Prisma.FilterWordUncheckedCreateInput>;
};
/**
 * FilterWord createMany
 */
export type FilterWordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many FilterWords.
     */
    data: Prisma.FilterWordCreateManyInput | Prisma.FilterWordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FilterWord createManyAndReturn
 */
export type FilterWordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * The data used to create many FilterWords.
     */
    data: Prisma.FilterWordCreateManyInput | Prisma.FilterWordCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * FilterWord update
 */
export type FilterWordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * The data needed to update a FilterWord.
     */
    data: Prisma.XOR<Prisma.FilterWordUpdateInput, Prisma.FilterWordUncheckedUpdateInput>;
    /**
     * Choose, which FilterWord to update.
     */
    where: Prisma.FilterWordWhereUniqueInput;
};
/**
 * FilterWord updateMany
 */
export type FilterWordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update FilterWords.
     */
    data: Prisma.XOR<Prisma.FilterWordUpdateManyMutationInput, Prisma.FilterWordUncheckedUpdateManyInput>;
    /**
     * Filter which FilterWords to update
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * Limit how many FilterWords to update.
     */
    limit?: number;
};
/**
 * FilterWord updateManyAndReturn
 */
export type FilterWordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * The data used to update FilterWords.
     */
    data: Prisma.XOR<Prisma.FilterWordUpdateManyMutationInput, Prisma.FilterWordUncheckedUpdateManyInput>;
    /**
     * Filter which FilterWords to update
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * Limit how many FilterWords to update.
     */
    limit?: number;
};
/**
 * FilterWord upsert
 */
export type FilterWordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * The filter to search for the FilterWord to update in case it exists.
     */
    where: Prisma.FilterWordWhereUniqueInput;
    /**
     * In case the FilterWord found by the `where` argument doesn't exist, create a new FilterWord with this data.
     */
    create: Prisma.XOR<Prisma.FilterWordCreateInput, Prisma.FilterWordUncheckedCreateInput>;
    /**
     * In case the FilterWord was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FilterWordUpdateInput, Prisma.FilterWordUncheckedUpdateInput>;
};
/**
 * FilterWord delete
 */
export type FilterWordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
    /**
     * Filter which FilterWord to delete.
     */
    where: Prisma.FilterWordWhereUniqueInput;
};
/**
 * FilterWord deleteMany
 */
export type FilterWordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which FilterWords to delete
     */
    where?: Prisma.FilterWordWhereInput;
    /**
     * Limit how many FilterWords to delete.
     */
    limit?: number;
};
/**
 * FilterWord without action
 */
export type FilterWordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilterWord
     */
    select?: Prisma.FilterWordSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the FilterWord
     */
    omit?: Prisma.FilterWordOmit<ExtArgs> | null;
};
//# sourceMappingURL=FilterWord.d.ts.map