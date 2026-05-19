import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ReminderTemplate
 *
 */
export type ReminderTemplateModel = runtime.Types.Result.DefaultSelection<Prisma.$ReminderTemplatePayload>;
export type AggregateReminderTemplate = {
    _count: ReminderTemplateCountAggregateOutputType | null;
    _avg: ReminderTemplateAvgAggregateOutputType | null;
    _sum: ReminderTemplateSumAggregateOutputType | null;
    _min: ReminderTemplateMinAggregateOutputType | null;
    _max: ReminderTemplateMaxAggregateOutputType | null;
};
export type ReminderTemplateAvgAggregateOutputType = {
    cooldownMin: number | null;
};
export type ReminderTemplateSumAggregateOutputType = {
    cooldownMin: number | null;
};
export type ReminderTemplateMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    description: string | null;
    cooldownMin: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ReminderTemplateMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    description: string | null;
    cooldownMin: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
};
export type ReminderTemplateCountAggregateOutputType = {
    id: number;
    guildId: number;
    name: number;
    description: number;
    cooldownMin: number;
    isActive: number;
    createdAt: number;
    _all: number;
};
export type ReminderTemplateAvgAggregateInputType = {
    cooldownMin?: true;
};
export type ReminderTemplateSumAggregateInputType = {
    cooldownMin?: true;
};
export type ReminderTemplateMinAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    description?: true;
    cooldownMin?: true;
    isActive?: true;
    createdAt?: true;
};
export type ReminderTemplateMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    description?: true;
    cooldownMin?: true;
    isActive?: true;
    createdAt?: true;
};
export type ReminderTemplateCountAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    description?: true;
    cooldownMin?: true;
    isActive?: true;
    createdAt?: true;
    _all?: true;
};
export type ReminderTemplateAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderTemplate to aggregate.
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReminderTemplates to fetch.
     */
    orderBy?: Prisma.ReminderTemplateOrderByWithRelationInput | Prisma.ReminderTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ReminderTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReminderTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReminderTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ReminderTemplates
    **/
    _count?: true | ReminderTemplateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ReminderTemplateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ReminderTemplateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ReminderTemplateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ReminderTemplateMaxAggregateInputType;
};
export type GetReminderTemplateAggregateType<T extends ReminderTemplateAggregateArgs> = {
    [P in keyof T & keyof AggregateReminderTemplate]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReminderTemplate[P]> : Prisma.GetScalarType<T[P], AggregateReminderTemplate[P]>;
};
export type ReminderTemplateGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReminderTemplateWhereInput;
    orderBy?: Prisma.ReminderTemplateOrderByWithAggregationInput | Prisma.ReminderTemplateOrderByWithAggregationInput[];
    by: Prisma.ReminderTemplateScalarFieldEnum[] | Prisma.ReminderTemplateScalarFieldEnum;
    having?: Prisma.ReminderTemplateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReminderTemplateCountAggregateInputType | true;
    _avg?: ReminderTemplateAvgAggregateInputType;
    _sum?: ReminderTemplateSumAggregateInputType;
    _min?: ReminderTemplateMinAggregateInputType;
    _max?: ReminderTemplateMaxAggregateInputType;
};
export type ReminderTemplateGroupByOutputType = {
    id: string;
    guildId: string;
    name: string;
    description: string | null;
    cooldownMin: number;
    isActive: boolean;
    createdAt: Date;
    _count: ReminderTemplateCountAggregateOutputType | null;
    _avg: ReminderTemplateAvgAggregateOutputType | null;
    _sum: ReminderTemplateSumAggregateOutputType | null;
    _min: ReminderTemplateMinAggregateOutputType | null;
    _max: ReminderTemplateMaxAggregateOutputType | null;
};
export type GetReminderTemplateGroupByPayload<T extends ReminderTemplateGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReminderTemplateGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReminderTemplateGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReminderTemplateGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReminderTemplateGroupByOutputType[P]>;
}>>;
export type ReminderTemplateWhereInput = {
    AND?: Prisma.ReminderTemplateWhereInput | Prisma.ReminderTemplateWhereInput[];
    OR?: Prisma.ReminderTemplateWhereInput[];
    NOT?: Prisma.ReminderTemplateWhereInput | Prisma.ReminderTemplateWhereInput[];
    id?: Prisma.StringFilter<"ReminderTemplate"> | string;
    guildId?: Prisma.StringFilter<"ReminderTemplate"> | string;
    name?: Prisma.StringFilter<"ReminderTemplate"> | string;
    description?: Prisma.StringNullableFilter<"ReminderTemplate"> | string | null;
    cooldownMin?: Prisma.IntFilter<"ReminderTemplate"> | number;
    isActive?: Prisma.BoolFilter<"ReminderTemplate"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ReminderTemplate"> | Date | string;
    reminders?: Prisma.ReminderListRelationFilter;
};
export type ReminderTemplateOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    cooldownMin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reminders?: Prisma.ReminderOrderByRelationAggregateInput;
};
export type ReminderTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_name?: Prisma.ReminderTemplateGuildIdNameCompoundUniqueInput;
    AND?: Prisma.ReminderTemplateWhereInput | Prisma.ReminderTemplateWhereInput[];
    OR?: Prisma.ReminderTemplateWhereInput[];
    NOT?: Prisma.ReminderTemplateWhereInput | Prisma.ReminderTemplateWhereInput[];
    guildId?: Prisma.StringFilter<"ReminderTemplate"> | string;
    name?: Prisma.StringFilter<"ReminderTemplate"> | string;
    description?: Prisma.StringNullableFilter<"ReminderTemplate"> | string | null;
    cooldownMin?: Prisma.IntFilter<"ReminderTemplate"> | number;
    isActive?: Prisma.BoolFilter<"ReminderTemplate"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ReminderTemplate"> | Date | string;
    reminders?: Prisma.ReminderListRelationFilter;
}, "id" | "guildId_name">;
export type ReminderTemplateOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    cooldownMin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReminderTemplateCountOrderByAggregateInput;
    _avg?: Prisma.ReminderTemplateAvgOrderByAggregateInput;
    _max?: Prisma.ReminderTemplateMaxOrderByAggregateInput;
    _min?: Prisma.ReminderTemplateMinOrderByAggregateInput;
    _sum?: Prisma.ReminderTemplateSumOrderByAggregateInput;
};
export type ReminderTemplateScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReminderTemplateScalarWhereWithAggregatesInput | Prisma.ReminderTemplateScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReminderTemplateScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReminderTemplateScalarWhereWithAggregatesInput | Prisma.ReminderTemplateScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ReminderTemplate"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ReminderTemplate"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ReminderTemplate"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"ReminderTemplate"> | string | null;
    cooldownMin?: Prisma.IntWithAggregatesFilter<"ReminderTemplate"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"ReminderTemplate"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReminderTemplate"> | Date | string;
};
export type ReminderTemplateCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    description?: string | null;
    cooldownMin: number;
    isActive?: boolean;
    createdAt?: Date | string;
    reminders?: Prisma.ReminderCreateNestedManyWithoutTemplateInput;
};
export type ReminderTemplateUncheckedCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    description?: string | null;
    cooldownMin: number;
    isActive?: boolean;
    createdAt?: Date | string;
    reminders?: Prisma.ReminderUncheckedCreateNestedManyWithoutTemplateInput;
};
export type ReminderTemplateUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminders?: Prisma.ReminderUpdateManyWithoutTemplateNestedInput;
};
export type ReminderTemplateUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reminders?: Prisma.ReminderUncheckedUpdateManyWithoutTemplateNestedInput;
};
export type ReminderTemplateCreateManyInput = {
    id?: string;
    guildId: string;
    name: string;
    description?: string | null;
    cooldownMin: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ReminderTemplateUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReminderTemplateUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReminderTemplateGuildIdNameCompoundUniqueInput = {
    guildId: string;
    name: string;
};
export type ReminderTemplateCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cooldownMin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReminderTemplateAvgOrderByAggregateInput = {
    cooldownMin?: Prisma.SortOrder;
};
export type ReminderTemplateMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cooldownMin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReminderTemplateMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    cooldownMin?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReminderTemplateSumOrderByAggregateInput = {
    cooldownMin?: Prisma.SortOrder;
};
export type ReminderTemplateNullableScalarRelationFilter = {
    is?: Prisma.ReminderTemplateWhereInput | null;
    isNot?: Prisma.ReminderTemplateWhereInput | null;
};
export type ReminderTemplateCreateNestedOneWithoutRemindersInput = {
    create?: Prisma.XOR<Prisma.ReminderTemplateCreateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.ReminderTemplateCreateOrConnectWithoutRemindersInput;
    connect?: Prisma.ReminderTemplateWhereUniqueInput;
};
export type ReminderTemplateUpdateOneWithoutRemindersNestedInput = {
    create?: Prisma.XOR<Prisma.ReminderTemplateCreateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedCreateWithoutRemindersInput>;
    connectOrCreate?: Prisma.ReminderTemplateCreateOrConnectWithoutRemindersInput;
    upsert?: Prisma.ReminderTemplateUpsertWithoutRemindersInput;
    disconnect?: Prisma.ReminderTemplateWhereInput | boolean;
    delete?: Prisma.ReminderTemplateWhereInput | boolean;
    connect?: Prisma.ReminderTemplateWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReminderTemplateUpdateToOneWithWhereWithoutRemindersInput, Prisma.ReminderTemplateUpdateWithoutRemindersInput>, Prisma.ReminderTemplateUncheckedUpdateWithoutRemindersInput>;
};
export type ReminderTemplateCreateWithoutRemindersInput = {
    id?: string;
    guildId: string;
    name: string;
    description?: string | null;
    cooldownMin: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ReminderTemplateUncheckedCreateWithoutRemindersInput = {
    id?: string;
    guildId: string;
    name: string;
    description?: string | null;
    cooldownMin: number;
    isActive?: boolean;
    createdAt?: Date | string;
};
export type ReminderTemplateCreateOrConnectWithoutRemindersInput = {
    where: Prisma.ReminderTemplateWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReminderTemplateCreateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedCreateWithoutRemindersInput>;
};
export type ReminderTemplateUpsertWithoutRemindersInput = {
    update: Prisma.XOR<Prisma.ReminderTemplateUpdateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedUpdateWithoutRemindersInput>;
    create: Prisma.XOR<Prisma.ReminderTemplateCreateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedCreateWithoutRemindersInput>;
    where?: Prisma.ReminderTemplateWhereInput;
};
export type ReminderTemplateUpdateToOneWithWhereWithoutRemindersInput = {
    where?: Prisma.ReminderTemplateWhereInput;
    data: Prisma.XOR<Prisma.ReminderTemplateUpdateWithoutRemindersInput, Prisma.ReminderTemplateUncheckedUpdateWithoutRemindersInput>;
};
export type ReminderTemplateUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReminderTemplateUncheckedUpdateWithoutRemindersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cooldownMin?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ReminderTemplateCountOutputType
 */
export type ReminderTemplateCountOutputType = {
    reminders: number;
};
export type ReminderTemplateCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reminders?: boolean | ReminderTemplateCountOutputTypeCountRemindersArgs;
};
/**
 * ReminderTemplateCountOutputType without action
 */
export type ReminderTemplateCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplateCountOutputType
     */
    select?: Prisma.ReminderTemplateCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ReminderTemplateCountOutputType without action
 */
export type ReminderTemplateCountOutputTypeCountRemindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReminderWhereInput;
};
export type ReminderTemplateSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    description?: boolean;
    cooldownMin?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    reminders?: boolean | Prisma.ReminderTemplate$remindersArgs<ExtArgs>;
    _count?: boolean | Prisma.ReminderTemplateCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reminderTemplate"]>;
export type ReminderTemplateSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    description?: boolean;
    cooldownMin?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["reminderTemplate"]>;
export type ReminderTemplateSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    description?: boolean;
    cooldownMin?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["reminderTemplate"]>;
export type ReminderTemplateSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    description?: boolean;
    cooldownMin?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
};
export type ReminderTemplateOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "name" | "description" | "cooldownMin" | "isActive" | "createdAt", ExtArgs["result"]["reminderTemplate"]>;
export type ReminderTemplateInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reminders?: boolean | Prisma.ReminderTemplate$remindersArgs<ExtArgs>;
    _count?: boolean | Prisma.ReminderTemplateCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReminderTemplateIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ReminderTemplateIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ReminderTemplatePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReminderTemplate";
    objects: {
        reminders: Prisma.$ReminderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        name: string;
        description: string | null;
        cooldownMin: number;
        isActive: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["reminderTemplate"]>;
    composites: {};
};
export type ReminderTemplateGetPayload<S extends boolean | null | undefined | ReminderTemplateDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload, S>;
export type ReminderTemplateCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReminderTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReminderTemplateCountAggregateInputType | true;
};
export interface ReminderTemplateDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReminderTemplate'];
        meta: {
            name: 'ReminderTemplate';
        };
    };
    /**
     * Find zero or one ReminderTemplate that matches the filter.
     * @param {ReminderTemplateFindUniqueArgs} args - Arguments to find a ReminderTemplate
     * @example
     * // Get one ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderTemplateFindUniqueArgs>(args: Prisma.SelectSubset<T, ReminderTemplateFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ReminderTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderTemplateFindUniqueOrThrowArgs} args - Arguments to find a ReminderTemplate
     * @example
     * // Get one ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderTemplateFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReminderTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ReminderTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateFindFirstArgs} args - Arguments to find a ReminderTemplate
     * @example
     * // Get one ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderTemplateFindFirstArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ReminderTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateFindFirstOrThrowArgs} args - Arguments to find a ReminderTemplate
     * @example
     * // Get one ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderTemplateFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ReminderTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderTemplates
     * const reminderTemplates = await prisma.reminderTemplate.findMany()
     *
     * // Get first 10 ReminderTemplates
     * const reminderTemplates = await prisma.reminderTemplate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const reminderTemplateWithIdOnly = await prisma.reminderTemplate.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ReminderTemplateFindManyArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ReminderTemplate.
     * @param {ReminderTemplateCreateArgs} args - Arguments to create a ReminderTemplate.
     * @example
     * // Create one ReminderTemplate
     * const ReminderTemplate = await prisma.reminderTemplate.create({
     *   data: {
     *     // ... data to create a ReminderTemplate
     *   }
     * })
     *
     */
    create<T extends ReminderTemplateCreateArgs>(args: Prisma.SelectSubset<T, ReminderTemplateCreateArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ReminderTemplates.
     * @param {ReminderTemplateCreateManyArgs} args - Arguments to create many ReminderTemplates.
     * @example
     * // Create many ReminderTemplates
     * const reminderTemplate = await prisma.reminderTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ReminderTemplateCreateManyArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ReminderTemplates and returns the data saved in the database.
     * @param {ReminderTemplateCreateManyAndReturnArgs} args - Arguments to create many ReminderTemplates.
     * @example
     * // Create many ReminderTemplates
     * const reminderTemplate = await prisma.reminderTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ReminderTemplates and only return the `id`
     * const reminderTemplateWithIdOnly = await prisma.reminderTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ReminderTemplateCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ReminderTemplate.
     * @param {ReminderTemplateDeleteArgs} args - Arguments to delete one ReminderTemplate.
     * @example
     * // Delete one ReminderTemplate
     * const ReminderTemplate = await prisma.reminderTemplate.delete({
     *   where: {
     *     // ... filter to delete one ReminderTemplate
     *   }
     * })
     *
     */
    delete<T extends ReminderTemplateDeleteArgs>(args: Prisma.SelectSubset<T, ReminderTemplateDeleteArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ReminderTemplate.
     * @param {ReminderTemplateUpdateArgs} args - Arguments to update one ReminderTemplate.
     * @example
     * // Update one ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ReminderTemplateUpdateArgs>(args: Prisma.SelectSubset<T, ReminderTemplateUpdateArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ReminderTemplates.
     * @param {ReminderTemplateDeleteManyArgs} args - Arguments to filter ReminderTemplates to delete.
     * @example
     * // Delete a few ReminderTemplates
     * const { count } = await prisma.reminderTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ReminderTemplateDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReminderTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ReminderTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderTemplates
     * const reminderTemplate = await prisma.reminderTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ReminderTemplateUpdateManyArgs>(args: Prisma.SelectSubset<T, ReminderTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ReminderTemplates and returns the data updated in the database.
     * @param {ReminderTemplateUpdateManyAndReturnArgs} args - Arguments to update many ReminderTemplates.
     * @example
     * // Update many ReminderTemplates
     * const reminderTemplate = await prisma.reminderTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ReminderTemplates and only return the `id`
     * const reminderTemplateWithIdOnly = await prisma.reminderTemplate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReminderTemplateUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReminderTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ReminderTemplate.
     * @param {ReminderTemplateUpsertArgs} args - Arguments to update or create a ReminderTemplate.
     * @example
     * // Update or create a ReminderTemplate
     * const reminderTemplate = await prisma.reminderTemplate.upsert({
     *   create: {
     *     // ... data to create a ReminderTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ReminderTemplateUpsertArgs>(args: Prisma.SelectSubset<T, ReminderTemplateUpsertArgs<ExtArgs>>): Prisma.Prisma__ReminderTemplateClient<runtime.Types.Result.GetResult<Prisma.$ReminderTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ReminderTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateCountArgs} args - Arguments to filter ReminderTemplates to count.
     * @example
     * // Count the number of ReminderTemplates
     * const count = await prisma.reminderTemplate.count({
     *   where: {
     *     // ... the filter for the ReminderTemplates we want to count
     *   }
     * })
    **/
    count<T extends ReminderTemplateCountArgs>(args?: Prisma.Subset<T, ReminderTemplateCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReminderTemplateCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ReminderTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderTemplateAggregateArgs>(args: Prisma.Subset<T, ReminderTemplateAggregateArgs>): Prisma.PrismaPromise<GetReminderTemplateAggregateType<T>>;
    /**
     * Group by ReminderTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderTemplateGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ReminderTemplateGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReminderTemplateGroupByArgs['orderBy'];
    } : {
        orderBy?: ReminderTemplateGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReminderTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ReminderTemplate model
     */
    readonly fields: ReminderTemplateFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ReminderTemplate.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ReminderTemplateClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reminders<T extends Prisma.ReminderTemplate$remindersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReminderTemplate$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ReminderTemplate model
 */
export interface ReminderTemplateFieldRefs {
    readonly id: Prisma.FieldRef<"ReminderTemplate", 'String'>;
    readonly guildId: Prisma.FieldRef<"ReminderTemplate", 'String'>;
    readonly name: Prisma.FieldRef<"ReminderTemplate", 'String'>;
    readonly description: Prisma.FieldRef<"ReminderTemplate", 'String'>;
    readonly cooldownMin: Prisma.FieldRef<"ReminderTemplate", 'Int'>;
    readonly isActive: Prisma.FieldRef<"ReminderTemplate", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ReminderTemplate", 'DateTime'>;
}
/**
 * ReminderTemplate findUnique
 */
export type ReminderTemplateFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter, which ReminderTemplate to fetch.
     */
    where: Prisma.ReminderTemplateWhereUniqueInput;
};
/**
 * ReminderTemplate findUniqueOrThrow
 */
export type ReminderTemplateFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter, which ReminderTemplate to fetch.
     */
    where: Prisma.ReminderTemplateWhereUniqueInput;
};
/**
 * ReminderTemplate findFirst
 */
export type ReminderTemplateFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter, which ReminderTemplate to fetch.
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReminderTemplates to fetch.
     */
    orderBy?: Prisma.ReminderTemplateOrderByWithRelationInput | Prisma.ReminderTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReminderTemplates.
     */
    cursor?: Prisma.ReminderTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReminderTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReminderTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReminderTemplates.
     */
    distinct?: Prisma.ReminderTemplateScalarFieldEnum | Prisma.ReminderTemplateScalarFieldEnum[];
};
/**
 * ReminderTemplate findFirstOrThrow
 */
export type ReminderTemplateFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter, which ReminderTemplate to fetch.
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReminderTemplates to fetch.
     */
    orderBy?: Prisma.ReminderTemplateOrderByWithRelationInput | Prisma.ReminderTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ReminderTemplates.
     */
    cursor?: Prisma.ReminderTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReminderTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReminderTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReminderTemplates.
     */
    distinct?: Prisma.ReminderTemplateScalarFieldEnum | Prisma.ReminderTemplateScalarFieldEnum[];
};
/**
 * ReminderTemplate findMany
 */
export type ReminderTemplateFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter, which ReminderTemplates to fetch.
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ReminderTemplates to fetch.
     */
    orderBy?: Prisma.ReminderTemplateOrderByWithRelationInput | Prisma.ReminderTemplateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ReminderTemplates.
     */
    cursor?: Prisma.ReminderTemplateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ReminderTemplates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ReminderTemplates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ReminderTemplates.
     */
    distinct?: Prisma.ReminderTemplateScalarFieldEnum | Prisma.ReminderTemplateScalarFieldEnum[];
};
/**
 * ReminderTemplate create
 */
export type ReminderTemplateCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * The data needed to create a ReminderTemplate.
     */
    data: Prisma.XOR<Prisma.ReminderTemplateCreateInput, Prisma.ReminderTemplateUncheckedCreateInput>;
};
/**
 * ReminderTemplate createMany
 */
export type ReminderTemplateCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReminderTemplates.
     */
    data: Prisma.ReminderTemplateCreateManyInput | Prisma.ReminderTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ReminderTemplate createManyAndReturn
 */
export type ReminderTemplateCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * The data used to create many ReminderTemplates.
     */
    data: Prisma.ReminderTemplateCreateManyInput | Prisma.ReminderTemplateCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ReminderTemplate update
 */
export type ReminderTemplateUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * The data needed to update a ReminderTemplate.
     */
    data: Prisma.XOR<Prisma.ReminderTemplateUpdateInput, Prisma.ReminderTemplateUncheckedUpdateInput>;
    /**
     * Choose, which ReminderTemplate to update.
     */
    where: Prisma.ReminderTemplateWhereUniqueInput;
};
/**
 * ReminderTemplate updateMany
 */
export type ReminderTemplateUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ReminderTemplates.
     */
    data: Prisma.XOR<Prisma.ReminderTemplateUpdateManyMutationInput, Prisma.ReminderTemplateUncheckedUpdateManyInput>;
    /**
     * Filter which ReminderTemplates to update
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * Limit how many ReminderTemplates to update.
     */
    limit?: number;
};
/**
 * ReminderTemplate updateManyAndReturn
 */
export type ReminderTemplateUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * The data used to update ReminderTemplates.
     */
    data: Prisma.XOR<Prisma.ReminderTemplateUpdateManyMutationInput, Prisma.ReminderTemplateUncheckedUpdateManyInput>;
    /**
     * Filter which ReminderTemplates to update
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * Limit how many ReminderTemplates to update.
     */
    limit?: number;
};
/**
 * ReminderTemplate upsert
 */
export type ReminderTemplateUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * The filter to search for the ReminderTemplate to update in case it exists.
     */
    where: Prisma.ReminderTemplateWhereUniqueInput;
    /**
     * In case the ReminderTemplate found by the `where` argument doesn't exist, create a new ReminderTemplate with this data.
     */
    create: Prisma.XOR<Prisma.ReminderTemplateCreateInput, Prisma.ReminderTemplateUncheckedCreateInput>;
    /**
     * In case the ReminderTemplate was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ReminderTemplateUpdateInput, Prisma.ReminderTemplateUncheckedUpdateInput>;
};
/**
 * ReminderTemplate delete
 */
export type ReminderTemplateDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
    /**
     * Filter which ReminderTemplate to delete.
     */
    where: Prisma.ReminderTemplateWhereUniqueInput;
};
/**
 * ReminderTemplate deleteMany
 */
export type ReminderTemplateDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderTemplates to delete
     */
    where?: Prisma.ReminderTemplateWhereInput;
    /**
     * Limit how many ReminderTemplates to delete.
     */
    limit?: number;
};
/**
 * ReminderTemplate.reminders
 */
export type ReminderTemplate$remindersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: Prisma.ReminderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Reminder
     */
    omit?: Prisma.ReminderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderInclude<ExtArgs> | null;
    where?: Prisma.ReminderWhereInput;
    orderBy?: Prisma.ReminderOrderByWithRelationInput | Prisma.ReminderOrderByWithRelationInput[];
    cursor?: Prisma.ReminderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReminderScalarFieldEnum | Prisma.ReminderScalarFieldEnum[];
};
/**
 * ReminderTemplate without action
 */
export type ReminderTemplateDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderTemplate
     */
    select?: Prisma.ReminderTemplateSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ReminderTemplate
     */
    omit?: Prisma.ReminderTemplateOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ReminderTemplateInclude<ExtArgs> | null;
};
//# sourceMappingURL=ReminderTemplate.d.ts.map