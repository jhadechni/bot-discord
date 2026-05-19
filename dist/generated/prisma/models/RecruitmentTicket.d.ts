import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RecruitmentTicket
 *
 */
export type RecruitmentTicketModel = runtime.Types.Result.DefaultSelection<Prisma.$RecruitmentTicketPayload>;
export type AggregateRecruitmentTicket = {
    _count: RecruitmentTicketCountAggregateOutputType | null;
    _min: RecruitmentTicketMinAggregateOutputType | null;
    _max: RecruitmentTicketMaxAggregateOutputType | null;
};
export type RecruitmentTicketMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    channelId: string | null;
    minecraftRole: string | null;
    status: string | null;
    staleAlertedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecruitmentTicketMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    channelId: string | null;
    minecraftRole: string | null;
    status: string | null;
    staleAlertedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RecruitmentTicketCountAggregateOutputType = {
    id: number;
    guildId: number;
    userId: number;
    channelId: number;
    minecraftRole: number;
    answers: number;
    status: number;
    staleAlertedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RecruitmentTicketMinAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    channelId?: true;
    minecraftRole?: true;
    status?: true;
    staleAlertedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecruitmentTicketMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    channelId?: true;
    minecraftRole?: true;
    status?: true;
    staleAlertedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RecruitmentTicketCountAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    channelId?: true;
    minecraftRole?: true;
    answers?: true;
    status?: true;
    staleAlertedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RecruitmentTicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentTicket to aggregate.
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentTickets to fetch.
     */
    orderBy?: Prisma.RecruitmentTicketOrderByWithRelationInput | Prisma.RecruitmentTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecruitmentTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecruitmentTickets
    **/
    _count?: true | RecruitmentTicketCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecruitmentTicketMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecruitmentTicketMaxAggregateInputType;
};
export type GetRecruitmentTicketAggregateType<T extends RecruitmentTicketAggregateArgs> = {
    [P in keyof T & keyof AggregateRecruitmentTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecruitmentTicket[P]> : Prisma.GetScalarType<T[P], AggregateRecruitmentTicket[P]>;
};
export type RecruitmentTicketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruitmentTicketWhereInput;
    orderBy?: Prisma.RecruitmentTicketOrderByWithAggregationInput | Prisma.RecruitmentTicketOrderByWithAggregationInput[];
    by: Prisma.RecruitmentTicketScalarFieldEnum[] | Prisma.RecruitmentTicketScalarFieldEnum;
    having?: Prisma.RecruitmentTicketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruitmentTicketCountAggregateInputType | true;
    _min?: RecruitmentTicketMinAggregateInputType;
    _max?: RecruitmentTicketMaxAggregateInputType;
};
export type RecruitmentTicketGroupByOutputType = {
    id: string;
    guildId: string;
    userId: string;
    channelId: string | null;
    minecraftRole: string | null;
    answers: runtime.JsonValue | null;
    status: string;
    staleAlertedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RecruitmentTicketCountAggregateOutputType | null;
    _min: RecruitmentTicketMinAggregateOutputType | null;
    _max: RecruitmentTicketMaxAggregateOutputType | null;
};
export type GetRecruitmentTicketGroupByPayload<T extends RecruitmentTicketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecruitmentTicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecruitmentTicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecruitmentTicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecruitmentTicketGroupByOutputType[P]>;
}>>;
export type RecruitmentTicketWhereInput = {
    AND?: Prisma.RecruitmentTicketWhereInput | Prisma.RecruitmentTicketWhereInput[];
    OR?: Prisma.RecruitmentTicketWhereInput[];
    NOT?: Prisma.RecruitmentTicketWhereInput | Prisma.RecruitmentTicketWhereInput[];
    id?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    guildId?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    userId?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    channelId?: Prisma.StringNullableFilter<"RecruitmentTicket"> | string | null;
    minecraftRole?: Prisma.StringNullableFilter<"RecruitmentTicket"> | string | null;
    answers?: Prisma.JsonNullableFilter<"RecruitmentTicket">;
    status?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    staleAlertedAt?: Prisma.DateTimeNullableFilter<"RecruitmentTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RecruitmentTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RecruitmentTicket"> | Date | string;
};
export type RecruitmentTicketOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    channelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    minecraftRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    staleAlertedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruitmentTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RecruitmentTicketWhereInput | Prisma.RecruitmentTicketWhereInput[];
    OR?: Prisma.RecruitmentTicketWhereInput[];
    NOT?: Prisma.RecruitmentTicketWhereInput | Prisma.RecruitmentTicketWhereInput[];
    guildId?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    userId?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    channelId?: Prisma.StringNullableFilter<"RecruitmentTicket"> | string | null;
    minecraftRole?: Prisma.StringNullableFilter<"RecruitmentTicket"> | string | null;
    answers?: Prisma.JsonNullableFilter<"RecruitmentTicket">;
    status?: Prisma.StringFilter<"RecruitmentTicket"> | string;
    staleAlertedAt?: Prisma.DateTimeNullableFilter<"RecruitmentTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RecruitmentTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RecruitmentTicket"> | Date | string;
}, "id">;
export type RecruitmentTicketOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    channelId?: Prisma.SortOrderInput | Prisma.SortOrder;
    minecraftRole?: Prisma.SortOrderInput | Prisma.SortOrder;
    answers?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    staleAlertedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RecruitmentTicketCountOrderByAggregateInput;
    _max?: Prisma.RecruitmentTicketMaxOrderByAggregateInput;
    _min?: Prisma.RecruitmentTicketMinOrderByAggregateInput;
};
export type RecruitmentTicketScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecruitmentTicketScalarWhereWithAggregatesInput | Prisma.RecruitmentTicketScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecruitmentTicketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecruitmentTicketScalarWhereWithAggregatesInput | Prisma.RecruitmentTicketScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RecruitmentTicket"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"RecruitmentTicket"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"RecruitmentTicket"> | string;
    channelId?: Prisma.StringNullableWithAggregatesFilter<"RecruitmentTicket"> | string | null;
    minecraftRole?: Prisma.StringNullableWithAggregatesFilter<"RecruitmentTicket"> | string | null;
    answers?: Prisma.JsonNullableWithAggregatesFilter<"RecruitmentTicket">;
    status?: Prisma.StringWithAggregatesFilter<"RecruitmentTicket"> | string;
    staleAlertedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RecruitmentTicket"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RecruitmentTicket"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RecruitmentTicket"> | Date | string;
};
export type RecruitmentTicketCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    channelId?: string | null;
    minecraftRole?: string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    staleAlertedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruitmentTicketUncheckedCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    channelId?: string | null;
    minecraftRole?: string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    staleAlertedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruitmentTicketUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    staleAlertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentTicketUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    staleAlertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentTicketCreateManyInput = {
    id?: string;
    guildId: string;
    userId: string;
    channelId?: string | null;
    minecraftRole?: string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: string;
    staleAlertedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RecruitmentTicketUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    staleAlertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentTicketUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    channelId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRole?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    answers?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    staleAlertedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentTicketCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    channelId?: Prisma.SortOrder;
    minecraftRole?: Prisma.SortOrder;
    answers?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    staleAlertedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruitmentTicketMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    channelId?: Prisma.SortOrder;
    minecraftRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    staleAlertedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RecruitmentTicketMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    channelId?: Prisma.SortOrder;
    minecraftRole?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    staleAlertedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type RecruitmentTicketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    channelId?: boolean;
    minecraftRole?: boolean;
    answers?: boolean;
    status?: boolean;
    staleAlertedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["recruitmentTicket"]>;
export type RecruitmentTicketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    channelId?: boolean;
    minecraftRole?: boolean;
    answers?: boolean;
    status?: boolean;
    staleAlertedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["recruitmentTicket"]>;
export type RecruitmentTicketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    channelId?: boolean;
    minecraftRole?: boolean;
    answers?: boolean;
    status?: boolean;
    staleAlertedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["recruitmentTicket"]>;
export type RecruitmentTicketSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    channelId?: boolean;
    minecraftRole?: boolean;
    answers?: boolean;
    status?: boolean;
    staleAlertedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RecruitmentTicketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "userId" | "channelId" | "minecraftRole" | "answers" | "status" | "staleAlertedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["recruitmentTicket"]>;
export type $RecruitmentTicketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RecruitmentTicket";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        userId: string;
        channelId: string | null;
        minecraftRole: string | null;
        answers: runtime.JsonValue | null;
        status: string;
        staleAlertedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["recruitmentTicket"]>;
    composites: {};
};
export type RecruitmentTicketGetPayload<S extends boolean | null | undefined | RecruitmentTicketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload, S>;
export type RecruitmentTicketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecruitmentTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecruitmentTicketCountAggregateInputType | true;
};
export interface RecruitmentTicketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RecruitmentTicket'];
        meta: {
            name: 'RecruitmentTicket';
        };
    };
    /**
     * Find zero or one RecruitmentTicket that matches the filter.
     * @param {RecruitmentTicketFindUniqueArgs} args - Arguments to find a RecruitmentTicket
     * @example
     * // Get one RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruitmentTicketFindUniqueArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RecruitmentTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruitmentTicketFindUniqueOrThrowArgs} args - Arguments to find a RecruitmentTicket
     * @example
     * // Get one RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruitmentTicketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecruitmentTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketFindFirstArgs} args - Arguments to find a RecruitmentTicket
     * @example
     * // Get one RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruitmentTicketFindFirstArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecruitmentTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketFindFirstOrThrowArgs} args - Arguments to find a RecruitmentTicket
     * @example
     * // Get one RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruitmentTicketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RecruitmentTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecruitmentTickets
     * const recruitmentTickets = await prisma.recruitmentTicket.findMany()
     *
     * // Get first 10 RecruitmentTickets
     * const recruitmentTickets = await prisma.recruitmentTicket.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recruitmentTicketWithIdOnly = await prisma.recruitmentTicket.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecruitmentTicketFindManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RecruitmentTicket.
     * @param {RecruitmentTicketCreateArgs} args - Arguments to create a RecruitmentTicket.
     * @example
     * // Create one RecruitmentTicket
     * const RecruitmentTicket = await prisma.recruitmentTicket.create({
     *   data: {
     *     // ... data to create a RecruitmentTicket
     *   }
     * })
     *
     */
    create<T extends RecruitmentTicketCreateArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketCreateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RecruitmentTickets.
     * @param {RecruitmentTicketCreateManyArgs} args - Arguments to create many RecruitmentTickets.
     * @example
     * // Create many RecruitmentTickets
     * const recruitmentTicket = await prisma.recruitmentTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecruitmentTicketCreateManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RecruitmentTickets and returns the data saved in the database.
     * @param {RecruitmentTicketCreateManyAndReturnArgs} args - Arguments to create many RecruitmentTickets.
     * @example
     * // Create many RecruitmentTickets
     * const recruitmentTicket = await prisma.recruitmentTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RecruitmentTickets and only return the `id`
     * const recruitmentTicketWithIdOnly = await prisma.recruitmentTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecruitmentTicketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RecruitmentTicket.
     * @param {RecruitmentTicketDeleteArgs} args - Arguments to delete one RecruitmentTicket.
     * @example
     * // Delete one RecruitmentTicket
     * const RecruitmentTicket = await prisma.recruitmentTicket.delete({
     *   where: {
     *     // ... filter to delete one RecruitmentTicket
     *   }
     * })
     *
     */
    delete<T extends RecruitmentTicketDeleteArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketDeleteArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RecruitmentTicket.
     * @param {RecruitmentTicketUpdateArgs} args - Arguments to update one RecruitmentTicket.
     * @example
     * // Update one RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecruitmentTicketUpdateArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketUpdateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RecruitmentTickets.
     * @param {RecruitmentTicketDeleteManyArgs} args - Arguments to filter RecruitmentTickets to delete.
     * @example
     * // Delete a few RecruitmentTickets
     * const { count } = await prisma.recruitmentTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecruitmentTicketDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecruitmentTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecruitmentTickets
     * const recruitmentTicket = await prisma.recruitmentTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecruitmentTicketUpdateManyArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecruitmentTickets and returns the data updated in the database.
     * @param {RecruitmentTicketUpdateManyAndReturnArgs} args - Arguments to update many RecruitmentTickets.
     * @example
     * // Update many RecruitmentTickets
     * const recruitmentTicket = await prisma.recruitmentTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RecruitmentTickets and only return the `id`
     * const recruitmentTicketWithIdOnly = await prisma.recruitmentTicket.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecruitmentTicketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RecruitmentTicket.
     * @param {RecruitmentTicketUpsertArgs} args - Arguments to update or create a RecruitmentTicket.
     * @example
     * // Update or create a RecruitmentTicket
     * const recruitmentTicket = await prisma.recruitmentTicket.upsert({
     *   create: {
     *     // ... data to create a RecruitmentTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecruitmentTicket we want to update
     *   }
     * })
     */
    upsert<T extends RecruitmentTicketUpsertArgs>(args: Prisma.SelectSubset<T, RecruitmentTicketUpsertArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RecruitmentTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketCountArgs} args - Arguments to filter RecruitmentTickets to count.
     * @example
     * // Count the number of RecruitmentTickets
     * const count = await prisma.recruitmentTicket.count({
     *   where: {
     *     // ... the filter for the RecruitmentTickets we want to count
     *   }
     * })
    **/
    count<T extends RecruitmentTicketCountArgs>(args?: Prisma.Subset<T, RecruitmentTicketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecruitmentTicketCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RecruitmentTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruitmentTicketAggregateArgs>(args: Prisma.Subset<T, RecruitmentTicketAggregateArgs>): Prisma.PrismaPromise<GetRecruitmentTicketAggregateType<T>>;
    /**
     * Group by RecruitmentTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentTicketGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RecruitmentTicketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecruitmentTicketGroupByArgs['orderBy'];
    } : {
        orderBy?: RecruitmentTicketGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecruitmentTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruitmentTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecruitmentTicket model
     */
    readonly fields: RecruitmentTicketFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RecruitmentTicket.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecruitmentTicketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the RecruitmentTicket model
 */
export interface RecruitmentTicketFieldRefs {
    readonly id: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly guildId: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly userId: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly channelId: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly minecraftRole: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly answers: Prisma.FieldRef<"RecruitmentTicket", 'Json'>;
    readonly status: Prisma.FieldRef<"RecruitmentTicket", 'String'>;
    readonly staleAlertedAt: Prisma.FieldRef<"RecruitmentTicket", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RecruitmentTicket", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RecruitmentTicket", 'DateTime'>;
}
/**
 * RecruitmentTicket findUnique
 */
export type RecruitmentTicketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter, which RecruitmentTicket to fetch.
     */
    where: Prisma.RecruitmentTicketWhereUniqueInput;
};
/**
 * RecruitmentTicket findUniqueOrThrow
 */
export type RecruitmentTicketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter, which RecruitmentTicket to fetch.
     */
    where: Prisma.RecruitmentTicketWhereUniqueInput;
};
/**
 * RecruitmentTicket findFirst
 */
export type RecruitmentTicketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter, which RecruitmentTicket to fetch.
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentTickets to fetch.
     */
    orderBy?: Prisma.RecruitmentTicketOrderByWithRelationInput | Prisma.RecruitmentTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitmentTickets.
     */
    cursor?: Prisma.RecruitmentTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentTickets.
     */
    distinct?: Prisma.RecruitmentTicketScalarFieldEnum | Prisma.RecruitmentTicketScalarFieldEnum[];
};
/**
 * RecruitmentTicket findFirstOrThrow
 */
export type RecruitmentTicketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter, which RecruitmentTicket to fetch.
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentTickets to fetch.
     */
    orderBy?: Prisma.RecruitmentTicketOrderByWithRelationInput | Prisma.RecruitmentTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitmentTickets.
     */
    cursor?: Prisma.RecruitmentTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentTickets.
     */
    distinct?: Prisma.RecruitmentTicketScalarFieldEnum | Prisma.RecruitmentTicketScalarFieldEnum[];
};
/**
 * RecruitmentTicket findMany
 */
export type RecruitmentTicketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter, which RecruitmentTickets to fetch.
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentTickets to fetch.
     */
    orderBy?: Prisma.RecruitmentTicketOrderByWithRelationInput | Prisma.RecruitmentTicketOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecruitmentTickets.
     */
    cursor?: Prisma.RecruitmentTicketWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentTickets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentTickets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentTickets.
     */
    distinct?: Prisma.RecruitmentTicketScalarFieldEnum | Prisma.RecruitmentTicketScalarFieldEnum[];
};
/**
 * RecruitmentTicket create
 */
export type RecruitmentTicketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * The data needed to create a RecruitmentTicket.
     */
    data: Prisma.XOR<Prisma.RecruitmentTicketCreateInput, Prisma.RecruitmentTicketUncheckedCreateInput>;
};
/**
 * RecruitmentTicket createMany
 */
export type RecruitmentTicketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecruitmentTickets.
     */
    data: Prisma.RecruitmentTicketCreateManyInput | Prisma.RecruitmentTicketCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RecruitmentTicket createManyAndReturn
 */
export type RecruitmentTicketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * The data used to create many RecruitmentTickets.
     */
    data: Prisma.RecruitmentTicketCreateManyInput | Prisma.RecruitmentTicketCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RecruitmentTicket update
 */
export type RecruitmentTicketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * The data needed to update a RecruitmentTicket.
     */
    data: Prisma.XOR<Prisma.RecruitmentTicketUpdateInput, Prisma.RecruitmentTicketUncheckedUpdateInput>;
    /**
     * Choose, which RecruitmentTicket to update.
     */
    where: Prisma.RecruitmentTicketWhereUniqueInput;
};
/**
 * RecruitmentTicket updateMany
 */
export type RecruitmentTicketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RecruitmentTickets.
     */
    data: Prisma.XOR<Prisma.RecruitmentTicketUpdateManyMutationInput, Prisma.RecruitmentTicketUncheckedUpdateManyInput>;
    /**
     * Filter which RecruitmentTickets to update
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * Limit how many RecruitmentTickets to update.
     */
    limit?: number;
};
/**
 * RecruitmentTicket updateManyAndReturn
 */
export type RecruitmentTicketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * The data used to update RecruitmentTickets.
     */
    data: Prisma.XOR<Prisma.RecruitmentTicketUpdateManyMutationInput, Prisma.RecruitmentTicketUncheckedUpdateManyInput>;
    /**
     * Filter which RecruitmentTickets to update
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * Limit how many RecruitmentTickets to update.
     */
    limit?: number;
};
/**
 * RecruitmentTicket upsert
 */
export type RecruitmentTicketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * The filter to search for the RecruitmentTicket to update in case it exists.
     */
    where: Prisma.RecruitmentTicketWhereUniqueInput;
    /**
     * In case the RecruitmentTicket found by the `where` argument doesn't exist, create a new RecruitmentTicket with this data.
     */
    create: Prisma.XOR<Prisma.RecruitmentTicketCreateInput, Prisma.RecruitmentTicketUncheckedCreateInput>;
    /**
     * In case the RecruitmentTicket was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecruitmentTicketUpdateInput, Prisma.RecruitmentTicketUncheckedUpdateInput>;
};
/**
 * RecruitmentTicket delete
 */
export type RecruitmentTicketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
    /**
     * Filter which RecruitmentTicket to delete.
     */
    where: Prisma.RecruitmentTicketWhereUniqueInput;
};
/**
 * RecruitmentTicket deleteMany
 */
export type RecruitmentTicketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentTickets to delete
     */
    where?: Prisma.RecruitmentTicketWhereInput;
    /**
     * Limit how many RecruitmentTickets to delete.
     */
    limit?: number;
};
/**
 * RecruitmentTicket without action
 */
export type RecruitmentTicketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentTicket
     */
    select?: Prisma.RecruitmentTicketSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentTicket
     */
    omit?: Prisma.RecruitmentTicketOmit<ExtArgs> | null;
};
//# sourceMappingURL=RecruitmentTicket.d.ts.map