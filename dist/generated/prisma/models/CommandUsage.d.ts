import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model CommandUsage
 *
 */
export type CommandUsageModel = runtime.Types.Result.DefaultSelection<Prisma.$CommandUsagePayload>;
export type AggregateCommandUsage = {
    _count: CommandUsageCountAggregateOutputType | null;
    _min: CommandUsageMinAggregateOutputType | null;
    _max: CommandUsageMaxAggregateOutputType | null;
};
export type CommandUsageMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    commandName: string | null;
    subcommandGroup: string | null;
    subcommand: string | null;
    createdAt: Date | null;
};
export type CommandUsageMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    commandName: string | null;
    subcommandGroup: string | null;
    subcommand: string | null;
    createdAt: Date | null;
};
export type CommandUsageCountAggregateOutputType = {
    id: number;
    guildId: number;
    userId: number;
    commandName: number;
    subcommandGroup: number;
    subcommand: number;
    createdAt: number;
    _all: number;
};
export type CommandUsageMinAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    commandName?: true;
    subcommandGroup?: true;
    subcommand?: true;
    createdAt?: true;
};
export type CommandUsageMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    commandName?: true;
    subcommandGroup?: true;
    subcommand?: true;
    createdAt?: true;
};
export type CommandUsageCountAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    commandName?: true;
    subcommandGroup?: true;
    subcommand?: true;
    createdAt?: true;
    _all?: true;
};
export type CommandUsageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandUsage to aggregate.
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandUsages to fetch.
     */
    orderBy?: Prisma.CommandUsageOrderByWithRelationInput | Prisma.CommandUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CommandUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned CommandUsages
    **/
    _count?: true | CommandUsageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CommandUsageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CommandUsageMaxAggregateInputType;
};
export type GetCommandUsageAggregateType<T extends CommandUsageAggregateArgs> = {
    [P in keyof T & keyof AggregateCommandUsage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCommandUsage[P]> : Prisma.GetScalarType<T[P], AggregateCommandUsage[P]>;
};
export type CommandUsageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CommandUsageWhereInput;
    orderBy?: Prisma.CommandUsageOrderByWithAggregationInput | Prisma.CommandUsageOrderByWithAggregationInput[];
    by: Prisma.CommandUsageScalarFieldEnum[] | Prisma.CommandUsageScalarFieldEnum;
    having?: Prisma.CommandUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CommandUsageCountAggregateInputType | true;
    _min?: CommandUsageMinAggregateInputType;
    _max?: CommandUsageMaxAggregateInputType;
};
export type CommandUsageGroupByOutputType = {
    id: string;
    guildId: string;
    userId: string;
    commandName: string;
    subcommandGroup: string | null;
    subcommand: string | null;
    createdAt: Date;
    _count: CommandUsageCountAggregateOutputType | null;
    _min: CommandUsageMinAggregateOutputType | null;
    _max: CommandUsageMaxAggregateOutputType | null;
};
export type GetCommandUsageGroupByPayload<T extends CommandUsageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CommandUsageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CommandUsageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CommandUsageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CommandUsageGroupByOutputType[P]>;
}>>;
export type CommandUsageWhereInput = {
    AND?: Prisma.CommandUsageWhereInput | Prisma.CommandUsageWhereInput[];
    OR?: Prisma.CommandUsageWhereInput[];
    NOT?: Prisma.CommandUsageWhereInput | Prisma.CommandUsageWhereInput[];
    id?: Prisma.StringFilter<"CommandUsage"> | string;
    guildId?: Prisma.StringFilter<"CommandUsage"> | string;
    userId?: Prisma.StringFilter<"CommandUsage"> | string;
    commandName?: Prisma.StringFilter<"CommandUsage"> | string;
    subcommandGroup?: Prisma.StringNullableFilter<"CommandUsage"> | string | null;
    subcommand?: Prisma.StringNullableFilter<"CommandUsage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CommandUsage"> | Date | string;
};
export type CommandUsageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commandName?: Prisma.SortOrder;
    subcommandGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    subcommand?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommandUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CommandUsageWhereInput | Prisma.CommandUsageWhereInput[];
    OR?: Prisma.CommandUsageWhereInput[];
    NOT?: Prisma.CommandUsageWhereInput | Prisma.CommandUsageWhereInput[];
    guildId?: Prisma.StringFilter<"CommandUsage"> | string;
    userId?: Prisma.StringFilter<"CommandUsage"> | string;
    commandName?: Prisma.StringFilter<"CommandUsage"> | string;
    subcommandGroup?: Prisma.StringNullableFilter<"CommandUsage"> | string | null;
    subcommand?: Prisma.StringNullableFilter<"CommandUsage"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CommandUsage"> | Date | string;
}, "id">;
export type CommandUsageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commandName?: Prisma.SortOrder;
    subcommandGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    subcommand?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CommandUsageCountOrderByAggregateInput;
    _max?: Prisma.CommandUsageMaxOrderByAggregateInput;
    _min?: Prisma.CommandUsageMinOrderByAggregateInput;
};
export type CommandUsageScalarWhereWithAggregatesInput = {
    AND?: Prisma.CommandUsageScalarWhereWithAggregatesInput | Prisma.CommandUsageScalarWhereWithAggregatesInput[];
    OR?: Prisma.CommandUsageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CommandUsageScalarWhereWithAggregatesInput | Prisma.CommandUsageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"CommandUsage"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"CommandUsage"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"CommandUsage"> | string;
    commandName?: Prisma.StringWithAggregatesFilter<"CommandUsage"> | string;
    subcommandGroup?: Prisma.StringNullableWithAggregatesFilter<"CommandUsage"> | string | null;
    subcommand?: Prisma.StringNullableWithAggregatesFilter<"CommandUsage"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CommandUsage"> | Date | string;
};
export type CommandUsageCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    commandName: string;
    subcommandGroup?: string | null;
    subcommand?: string | null;
    createdAt?: Date | string;
};
export type CommandUsageUncheckedCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    commandName: string;
    subcommandGroup?: string | null;
    subcommand?: string | null;
    createdAt?: Date | string;
};
export type CommandUsageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandName?: Prisma.StringFieldUpdateOperationsInput | string;
    subcommandGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subcommand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandUsageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandName?: Prisma.StringFieldUpdateOperationsInput | string;
    subcommandGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subcommand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandUsageCreateManyInput = {
    id?: string;
    guildId: string;
    userId: string;
    commandName: string;
    subcommandGroup?: string | null;
    subcommand?: string | null;
    createdAt?: Date | string;
};
export type CommandUsageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandName?: Prisma.StringFieldUpdateOperationsInput | string;
    subcommandGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subcommand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandUsageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    commandName?: Prisma.StringFieldUpdateOperationsInput | string;
    subcommandGroup?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subcommand?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CommandUsageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commandName?: Prisma.SortOrder;
    subcommandGroup?: Prisma.SortOrder;
    subcommand?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommandUsageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commandName?: Prisma.SortOrder;
    subcommandGroup?: Prisma.SortOrder;
    subcommand?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommandUsageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    commandName?: Prisma.SortOrder;
    subcommandGroup?: Prisma.SortOrder;
    subcommand?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CommandUsageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    commandName?: boolean;
    subcommandGroup?: boolean;
    subcommand?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["commandUsage"]>;
export type CommandUsageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    commandName?: boolean;
    subcommandGroup?: boolean;
    subcommand?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["commandUsage"]>;
export type CommandUsageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    commandName?: boolean;
    subcommandGroup?: boolean;
    subcommand?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["commandUsage"]>;
export type CommandUsageSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    commandName?: boolean;
    subcommandGroup?: boolean;
    subcommand?: boolean;
    createdAt?: boolean;
};
export type CommandUsageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "userId" | "commandName" | "subcommandGroup" | "subcommand" | "createdAt", ExtArgs["result"]["commandUsage"]>;
export type $CommandUsagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CommandUsage";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        userId: string;
        commandName: string;
        subcommandGroup: string | null;
        subcommand: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["commandUsage"]>;
    composites: {};
};
export type CommandUsageGetPayload<S extends boolean | null | undefined | CommandUsageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload, S>;
export type CommandUsageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CommandUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CommandUsageCountAggregateInputType | true;
};
export interface CommandUsageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CommandUsage'];
        meta: {
            name: 'CommandUsage';
        };
    };
    /**
     * Find zero or one CommandUsage that matches the filter.
     * @param {CommandUsageFindUniqueArgs} args - Arguments to find a CommandUsage
     * @example
     * // Get one CommandUsage
     * const commandUsage = await prisma.commandUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandUsageFindUniqueArgs>(args: Prisma.SelectSubset<T, CommandUsageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one CommandUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandUsageFindUniqueOrThrowArgs} args - Arguments to find a CommandUsage
     * @example
     * // Get one CommandUsage
     * const commandUsage = await prisma.commandUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandUsageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CommandUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageFindFirstArgs} args - Arguments to find a CommandUsage
     * @example
     * // Get one CommandUsage
     * const commandUsage = await prisma.commandUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandUsageFindFirstArgs>(args?: Prisma.SelectSubset<T, CommandUsageFindFirstArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first CommandUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageFindFirstOrThrowArgs} args - Arguments to find a CommandUsage
     * @example
     * // Get one CommandUsage
     * const commandUsage = await prisma.commandUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandUsageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CommandUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more CommandUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommandUsages
     * const commandUsages = await prisma.commandUsage.findMany()
     *
     * // Get first 10 CommandUsages
     * const commandUsages = await prisma.commandUsage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const commandUsageWithIdOnly = await prisma.commandUsage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CommandUsageFindManyArgs>(args?: Prisma.SelectSubset<T, CommandUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a CommandUsage.
     * @param {CommandUsageCreateArgs} args - Arguments to create a CommandUsage.
     * @example
     * // Create one CommandUsage
     * const CommandUsage = await prisma.commandUsage.create({
     *   data: {
     *     // ... data to create a CommandUsage
     *   }
     * })
     *
     */
    create<T extends CommandUsageCreateArgs>(args: Prisma.SelectSubset<T, CommandUsageCreateArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many CommandUsages.
     * @param {CommandUsageCreateManyArgs} args - Arguments to create many CommandUsages.
     * @example
     * // Create many CommandUsages
     * const commandUsage = await prisma.commandUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CommandUsageCreateManyArgs>(args?: Prisma.SelectSubset<T, CommandUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many CommandUsages and returns the data saved in the database.
     * @param {CommandUsageCreateManyAndReturnArgs} args - Arguments to create many CommandUsages.
     * @example
     * // Create many CommandUsages
     * const commandUsage = await prisma.commandUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many CommandUsages and only return the `id`
     * const commandUsageWithIdOnly = await prisma.commandUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CommandUsageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CommandUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a CommandUsage.
     * @param {CommandUsageDeleteArgs} args - Arguments to delete one CommandUsage.
     * @example
     * // Delete one CommandUsage
     * const CommandUsage = await prisma.commandUsage.delete({
     *   where: {
     *     // ... filter to delete one CommandUsage
     *   }
     * })
     *
     */
    delete<T extends CommandUsageDeleteArgs>(args: Prisma.SelectSubset<T, CommandUsageDeleteArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one CommandUsage.
     * @param {CommandUsageUpdateArgs} args - Arguments to update one CommandUsage.
     * @example
     * // Update one CommandUsage
     * const commandUsage = await prisma.commandUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CommandUsageUpdateArgs>(args: Prisma.SelectSubset<T, CommandUsageUpdateArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more CommandUsages.
     * @param {CommandUsageDeleteManyArgs} args - Arguments to filter CommandUsages to delete.
     * @example
     * // Delete a few CommandUsages
     * const { count } = await prisma.commandUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CommandUsageDeleteManyArgs>(args?: Prisma.SelectSubset<T, CommandUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommandUsages
     * const commandUsage = await prisma.commandUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CommandUsageUpdateManyArgs>(args: Prisma.SelectSubset<T, CommandUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more CommandUsages and returns the data updated in the database.
     * @param {CommandUsageUpdateManyAndReturnArgs} args - Arguments to update many CommandUsages.
     * @example
     * // Update many CommandUsages
     * const commandUsage = await prisma.commandUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more CommandUsages and only return the `id`
     * const commandUsageWithIdOnly = await prisma.commandUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommandUsageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CommandUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one CommandUsage.
     * @param {CommandUsageUpsertArgs} args - Arguments to update or create a CommandUsage.
     * @example
     * // Update or create a CommandUsage
     * const commandUsage = await prisma.commandUsage.upsert({
     *   create: {
     *     // ... data to create a CommandUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommandUsage we want to update
     *   }
     * })
     */
    upsert<T extends CommandUsageUpsertArgs>(args: Prisma.SelectSubset<T, CommandUsageUpsertArgs<ExtArgs>>): Prisma.Prisma__CommandUsageClient<runtime.Types.Result.GetResult<Prisma.$CommandUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of CommandUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageCountArgs} args - Arguments to filter CommandUsages to count.
     * @example
     * // Count the number of CommandUsages
     * const count = await prisma.commandUsage.count({
     *   where: {
     *     // ... the filter for the CommandUsages we want to count
     *   }
     * })
    **/
    count<T extends CommandUsageCountArgs>(args?: Prisma.Subset<T, CommandUsageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CommandUsageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a CommandUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandUsageAggregateArgs>(args: Prisma.Subset<T, CommandUsageAggregateArgs>): Prisma.PrismaPromise<GetCommandUsageAggregateType<T>>;
    /**
     * Group by CommandUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandUsageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CommandUsageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CommandUsageGroupByArgs['orderBy'];
    } : {
        orderBy?: CommandUsageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CommandUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CommandUsage model
     */
    readonly fields: CommandUsageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for CommandUsage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CommandUsageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the CommandUsage model
 */
export interface CommandUsageFieldRefs {
    readonly id: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly guildId: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly userId: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly commandName: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly subcommandGroup: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly subcommand: Prisma.FieldRef<"CommandUsage", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CommandUsage", 'DateTime'>;
}
/**
 * CommandUsage findUnique
 */
export type CommandUsageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter, which CommandUsage to fetch.
     */
    where: Prisma.CommandUsageWhereUniqueInput;
};
/**
 * CommandUsage findUniqueOrThrow
 */
export type CommandUsageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter, which CommandUsage to fetch.
     */
    where: Prisma.CommandUsageWhereUniqueInput;
};
/**
 * CommandUsage findFirst
 */
export type CommandUsageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter, which CommandUsage to fetch.
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandUsages to fetch.
     */
    orderBy?: Prisma.CommandUsageOrderByWithRelationInput | Prisma.CommandUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandUsages.
     */
    cursor?: Prisma.CommandUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandUsages.
     */
    distinct?: Prisma.CommandUsageScalarFieldEnum | Prisma.CommandUsageScalarFieldEnum[];
};
/**
 * CommandUsage findFirstOrThrow
 */
export type CommandUsageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter, which CommandUsage to fetch.
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandUsages to fetch.
     */
    orderBy?: Prisma.CommandUsageOrderByWithRelationInput | Prisma.CommandUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for CommandUsages.
     */
    cursor?: Prisma.CommandUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandUsages.
     */
    distinct?: Prisma.CommandUsageScalarFieldEnum | Prisma.CommandUsageScalarFieldEnum[];
};
/**
 * CommandUsage findMany
 */
export type CommandUsageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter, which CommandUsages to fetch.
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of CommandUsages to fetch.
     */
    orderBy?: Prisma.CommandUsageOrderByWithRelationInput | Prisma.CommandUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing CommandUsages.
     */
    cursor?: Prisma.CommandUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` CommandUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` CommandUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of CommandUsages.
     */
    distinct?: Prisma.CommandUsageScalarFieldEnum | Prisma.CommandUsageScalarFieldEnum[];
};
/**
 * CommandUsage create
 */
export type CommandUsageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * The data needed to create a CommandUsage.
     */
    data: Prisma.XOR<Prisma.CommandUsageCreateInput, Prisma.CommandUsageUncheckedCreateInput>;
};
/**
 * CommandUsage createMany
 */
export type CommandUsageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommandUsages.
     */
    data: Prisma.CommandUsageCreateManyInput | Prisma.CommandUsageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommandUsage createManyAndReturn
 */
export type CommandUsageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * The data used to create many CommandUsages.
     */
    data: Prisma.CommandUsageCreateManyInput | Prisma.CommandUsageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * CommandUsage update
 */
export type CommandUsageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * The data needed to update a CommandUsage.
     */
    data: Prisma.XOR<Prisma.CommandUsageUpdateInput, Prisma.CommandUsageUncheckedUpdateInput>;
    /**
     * Choose, which CommandUsage to update.
     */
    where: Prisma.CommandUsageWhereUniqueInput;
};
/**
 * CommandUsage updateMany
 */
export type CommandUsageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update CommandUsages.
     */
    data: Prisma.XOR<Prisma.CommandUsageUpdateManyMutationInput, Prisma.CommandUsageUncheckedUpdateManyInput>;
    /**
     * Filter which CommandUsages to update
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * Limit how many CommandUsages to update.
     */
    limit?: number;
};
/**
 * CommandUsage updateManyAndReturn
 */
export type CommandUsageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * The data used to update CommandUsages.
     */
    data: Prisma.XOR<Prisma.CommandUsageUpdateManyMutationInput, Prisma.CommandUsageUncheckedUpdateManyInput>;
    /**
     * Filter which CommandUsages to update
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * Limit how many CommandUsages to update.
     */
    limit?: number;
};
/**
 * CommandUsage upsert
 */
export type CommandUsageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * The filter to search for the CommandUsage to update in case it exists.
     */
    where: Prisma.CommandUsageWhereUniqueInput;
    /**
     * In case the CommandUsage found by the `where` argument doesn't exist, create a new CommandUsage with this data.
     */
    create: Prisma.XOR<Prisma.CommandUsageCreateInput, Prisma.CommandUsageUncheckedCreateInput>;
    /**
     * In case the CommandUsage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CommandUsageUpdateInput, Prisma.CommandUsageUncheckedUpdateInput>;
};
/**
 * CommandUsage delete
 */
export type CommandUsageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
    /**
     * Filter which CommandUsage to delete.
     */
    where: Prisma.CommandUsageWhereUniqueInput;
};
/**
 * CommandUsage deleteMany
 */
export type CommandUsageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which CommandUsages to delete
     */
    where?: Prisma.CommandUsageWhereInput;
    /**
     * Limit how many CommandUsages to delete.
     */
    limit?: number;
};
/**
 * CommandUsage without action
 */
export type CommandUsageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandUsage
     */
    select?: Prisma.CommandUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CommandUsage
     */
    omit?: Prisma.CommandUsageOmit<ExtArgs> | null;
};
//# sourceMappingURL=CommandUsage.d.ts.map