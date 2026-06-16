import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model RecruitmentVote
 *
 */
export type RecruitmentVoteModel = runtime.Types.Result.DefaultSelection<Prisma.$RecruitmentVotePayload>;
export type AggregateRecruitmentVote = {
    _count: RecruitmentVoteCountAggregateOutputType | null;
    _min: RecruitmentVoteMinAggregateOutputType | null;
    _max: RecruitmentVoteMaxAggregateOutputType | null;
};
export type RecruitmentVoteMinAggregateOutputType = {
    id: string | null;
    ticketId: string | null;
    userId: string | null;
    username: string | null;
    vote: string | null;
    createdAt: Date | null;
};
export type RecruitmentVoteMaxAggregateOutputType = {
    id: string | null;
    ticketId: string | null;
    userId: string | null;
    username: string | null;
    vote: string | null;
    createdAt: Date | null;
};
export type RecruitmentVoteCountAggregateOutputType = {
    id: number;
    ticketId: number;
    userId: number;
    username: number;
    vote: number;
    createdAt: number;
    _all: number;
};
export type RecruitmentVoteMinAggregateInputType = {
    id?: true;
    ticketId?: true;
    userId?: true;
    username?: true;
    vote?: true;
    createdAt?: true;
};
export type RecruitmentVoteMaxAggregateInputType = {
    id?: true;
    ticketId?: true;
    userId?: true;
    username?: true;
    vote?: true;
    createdAt?: true;
};
export type RecruitmentVoteCountAggregateInputType = {
    id?: true;
    ticketId?: true;
    userId?: true;
    username?: true;
    vote?: true;
    createdAt?: true;
    _all?: true;
};
export type RecruitmentVoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentVote to aggregate.
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentVotes to fetch.
     */
    orderBy?: Prisma.RecruitmentVoteOrderByWithRelationInput | Prisma.RecruitmentVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RecruitmentVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RecruitmentVotes
    **/
    _count?: true | RecruitmentVoteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RecruitmentVoteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RecruitmentVoteMaxAggregateInputType;
};
export type GetRecruitmentVoteAggregateType<T extends RecruitmentVoteAggregateArgs> = {
    [P in keyof T & keyof AggregateRecruitmentVote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRecruitmentVote[P]> : Prisma.GetScalarType<T[P], AggregateRecruitmentVote[P]>;
};
export type RecruitmentVoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RecruitmentVoteWhereInput;
    orderBy?: Prisma.RecruitmentVoteOrderByWithAggregationInput | Prisma.RecruitmentVoteOrderByWithAggregationInput[];
    by: Prisma.RecruitmentVoteScalarFieldEnum[] | Prisma.RecruitmentVoteScalarFieldEnum;
    having?: Prisma.RecruitmentVoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RecruitmentVoteCountAggregateInputType | true;
    _min?: RecruitmentVoteMinAggregateInputType;
    _max?: RecruitmentVoteMaxAggregateInputType;
};
export type RecruitmentVoteGroupByOutputType = {
    id: string;
    ticketId: string;
    userId: string;
    username: string;
    vote: string;
    createdAt: Date;
    _count: RecruitmentVoteCountAggregateOutputType | null;
    _min: RecruitmentVoteMinAggregateOutputType | null;
    _max: RecruitmentVoteMaxAggregateOutputType | null;
};
export type GetRecruitmentVoteGroupByPayload<T extends RecruitmentVoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RecruitmentVoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RecruitmentVoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RecruitmentVoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RecruitmentVoteGroupByOutputType[P]>;
}>>;
export type RecruitmentVoteWhereInput = {
    AND?: Prisma.RecruitmentVoteWhereInput | Prisma.RecruitmentVoteWhereInput[];
    OR?: Prisma.RecruitmentVoteWhereInput[];
    NOT?: Prisma.RecruitmentVoteWhereInput | Prisma.RecruitmentVoteWhereInput[];
    id?: Prisma.StringFilter<"RecruitmentVote"> | string;
    ticketId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    userId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    username?: Prisma.StringFilter<"RecruitmentVote"> | string;
    vote?: Prisma.StringFilter<"RecruitmentVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"RecruitmentVote"> | Date | string;
    ticket?: Prisma.XOR<Prisma.RecruitmentTicketScalarRelationFilter, Prisma.RecruitmentTicketWhereInput>;
};
export type RecruitmentVoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ticket?: Prisma.RecruitmentTicketOrderByWithRelationInput;
};
export type RecruitmentVoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ticketId_userId?: Prisma.RecruitmentVoteTicketIdUserIdCompoundUniqueInput;
    AND?: Prisma.RecruitmentVoteWhereInput | Prisma.RecruitmentVoteWhereInput[];
    OR?: Prisma.RecruitmentVoteWhereInput[];
    NOT?: Prisma.RecruitmentVoteWhereInput | Prisma.RecruitmentVoteWhereInput[];
    ticketId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    userId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    username?: Prisma.StringFilter<"RecruitmentVote"> | string;
    vote?: Prisma.StringFilter<"RecruitmentVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"RecruitmentVote"> | Date | string;
    ticket?: Prisma.XOR<Prisma.RecruitmentTicketScalarRelationFilter, Prisma.RecruitmentTicketWhereInput>;
}, "id" | "ticketId_userId">;
export type RecruitmentVoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RecruitmentVoteCountOrderByAggregateInput;
    _max?: Prisma.RecruitmentVoteMaxOrderByAggregateInput;
    _min?: Prisma.RecruitmentVoteMinOrderByAggregateInput;
};
export type RecruitmentVoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.RecruitmentVoteScalarWhereWithAggregatesInput | Prisma.RecruitmentVoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.RecruitmentVoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RecruitmentVoteScalarWhereWithAggregatesInput | Prisma.RecruitmentVoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RecruitmentVote"> | string;
    ticketId?: Prisma.StringWithAggregatesFilter<"RecruitmentVote"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"RecruitmentVote"> | string;
    username?: Prisma.StringWithAggregatesFilter<"RecruitmentVote"> | string;
    vote?: Prisma.StringWithAggregatesFilter<"RecruitmentVote"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RecruitmentVote"> | Date | string;
};
export type RecruitmentVoteCreateInput = {
    id?: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
    ticket: Prisma.RecruitmentTicketCreateNestedOneWithoutVotesInput;
};
export type RecruitmentVoteUncheckedCreateInput = {
    id?: string;
    ticketId: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
};
export type RecruitmentVoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ticket?: Prisma.RecruitmentTicketUpdateOneRequiredWithoutVotesNestedInput;
};
export type RecruitmentVoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteCreateManyInput = {
    id?: string;
    ticketId: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
};
export type RecruitmentVoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticketId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteListRelationFilter = {
    every?: Prisma.RecruitmentVoteWhereInput;
    some?: Prisma.RecruitmentVoteWhereInput;
    none?: Prisma.RecruitmentVoteWhereInput;
};
export type RecruitmentVoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RecruitmentVoteTicketIdUserIdCompoundUniqueInput = {
    ticketId: string;
    userId: string;
};
export type RecruitmentVoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecruitmentVoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecruitmentVoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ticketId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    vote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RecruitmentVoteCreateNestedManyWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput> | Prisma.RecruitmentVoteCreateWithoutTicketInput[] | Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput | Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput[];
    createMany?: Prisma.RecruitmentVoteCreateManyTicketInputEnvelope;
    connect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
};
export type RecruitmentVoteUncheckedCreateNestedManyWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput> | Prisma.RecruitmentVoteCreateWithoutTicketInput[] | Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput | Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput[];
    createMany?: Prisma.RecruitmentVoteCreateManyTicketInputEnvelope;
    connect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
};
export type RecruitmentVoteUpdateManyWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput> | Prisma.RecruitmentVoteCreateWithoutTicketInput[] | Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput | Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput[];
    upsert?: Prisma.RecruitmentVoteUpsertWithWhereUniqueWithoutTicketInput | Prisma.RecruitmentVoteUpsertWithWhereUniqueWithoutTicketInput[];
    createMany?: Prisma.RecruitmentVoteCreateManyTicketInputEnvelope;
    set?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    disconnect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    delete?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    connect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    update?: Prisma.RecruitmentVoteUpdateWithWhereUniqueWithoutTicketInput | Prisma.RecruitmentVoteUpdateWithWhereUniqueWithoutTicketInput[];
    updateMany?: Prisma.RecruitmentVoteUpdateManyWithWhereWithoutTicketInput | Prisma.RecruitmentVoteUpdateManyWithWhereWithoutTicketInput[];
    deleteMany?: Prisma.RecruitmentVoteScalarWhereInput | Prisma.RecruitmentVoteScalarWhereInput[];
};
export type RecruitmentVoteUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput> | Prisma.RecruitmentVoteCreateWithoutTicketInput[] | Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput[];
    connectOrCreate?: Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput | Prisma.RecruitmentVoteCreateOrConnectWithoutTicketInput[];
    upsert?: Prisma.RecruitmentVoteUpsertWithWhereUniqueWithoutTicketInput | Prisma.RecruitmentVoteUpsertWithWhereUniqueWithoutTicketInput[];
    createMany?: Prisma.RecruitmentVoteCreateManyTicketInputEnvelope;
    set?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    disconnect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    delete?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    connect?: Prisma.RecruitmentVoteWhereUniqueInput | Prisma.RecruitmentVoteWhereUniqueInput[];
    update?: Prisma.RecruitmentVoteUpdateWithWhereUniqueWithoutTicketInput | Prisma.RecruitmentVoteUpdateWithWhereUniqueWithoutTicketInput[];
    updateMany?: Prisma.RecruitmentVoteUpdateManyWithWhereWithoutTicketInput | Prisma.RecruitmentVoteUpdateManyWithWhereWithoutTicketInput[];
    deleteMany?: Prisma.RecruitmentVoteScalarWhereInput | Prisma.RecruitmentVoteScalarWhereInput[];
};
export type RecruitmentVoteCreateWithoutTicketInput = {
    id?: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
};
export type RecruitmentVoteUncheckedCreateWithoutTicketInput = {
    id?: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
};
export type RecruitmentVoteCreateOrConnectWithoutTicketInput = {
    where: Prisma.RecruitmentVoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput>;
};
export type RecruitmentVoteCreateManyTicketInputEnvelope = {
    data: Prisma.RecruitmentVoteCreateManyTicketInput | Prisma.RecruitmentVoteCreateManyTicketInput[];
    skipDuplicates?: boolean;
};
export type RecruitmentVoteUpsertWithWhereUniqueWithoutTicketInput = {
    where: Prisma.RecruitmentVoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.RecruitmentVoteUpdateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedUpdateWithoutTicketInput>;
    create: Prisma.XOR<Prisma.RecruitmentVoteCreateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedCreateWithoutTicketInput>;
};
export type RecruitmentVoteUpdateWithWhereUniqueWithoutTicketInput = {
    where: Prisma.RecruitmentVoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.RecruitmentVoteUpdateWithoutTicketInput, Prisma.RecruitmentVoteUncheckedUpdateWithoutTicketInput>;
};
export type RecruitmentVoteUpdateManyWithWhereWithoutTicketInput = {
    where: Prisma.RecruitmentVoteScalarWhereInput;
    data: Prisma.XOR<Prisma.RecruitmentVoteUpdateManyMutationInput, Prisma.RecruitmentVoteUncheckedUpdateManyWithoutTicketInput>;
};
export type RecruitmentVoteScalarWhereInput = {
    AND?: Prisma.RecruitmentVoteScalarWhereInput | Prisma.RecruitmentVoteScalarWhereInput[];
    OR?: Prisma.RecruitmentVoteScalarWhereInput[];
    NOT?: Prisma.RecruitmentVoteScalarWhereInput | Prisma.RecruitmentVoteScalarWhereInput[];
    id?: Prisma.StringFilter<"RecruitmentVote"> | string;
    ticketId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    userId?: Prisma.StringFilter<"RecruitmentVote"> | string;
    username?: Prisma.StringFilter<"RecruitmentVote"> | string;
    vote?: Prisma.StringFilter<"RecruitmentVote"> | string;
    createdAt?: Prisma.DateTimeFilter<"RecruitmentVote"> | Date | string;
};
export type RecruitmentVoteCreateManyTicketInput = {
    id?: string;
    userId: string;
    username: string;
    vote: string;
    createdAt?: Date | string;
};
export type RecruitmentVoteUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteUncheckedUpdateWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteUncheckedUpdateManyWithoutTicketInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    vote?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RecruitmentVoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    userId?: boolean;
    username?: boolean;
    vote?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recruitmentVote"]>;
export type RecruitmentVoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    userId?: boolean;
    username?: boolean;
    vote?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recruitmentVote"]>;
export type RecruitmentVoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ticketId?: boolean;
    userId?: boolean;
    username?: boolean;
    vote?: boolean;
    createdAt?: boolean;
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["recruitmentVote"]>;
export type RecruitmentVoteSelectScalar = {
    id?: boolean;
    ticketId?: boolean;
    userId?: boolean;
    username?: boolean;
    vote?: boolean;
    createdAt?: boolean;
};
export type RecruitmentVoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ticketId" | "userId" | "username" | "vote" | "createdAt", ExtArgs["result"]["recruitmentVote"]>;
export type RecruitmentVoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
};
export type RecruitmentVoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
};
export type RecruitmentVoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ticket?: boolean | Prisma.RecruitmentTicketDefaultArgs<ExtArgs>;
};
export type $RecruitmentVotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RecruitmentVote";
    objects: {
        ticket: Prisma.$RecruitmentTicketPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ticketId: string;
        userId: string;
        username: string;
        vote: string;
        createdAt: Date;
    }, ExtArgs["result"]["recruitmentVote"]>;
    composites: {};
};
export type RecruitmentVoteGetPayload<S extends boolean | null | undefined | RecruitmentVoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload, S>;
export type RecruitmentVoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RecruitmentVoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RecruitmentVoteCountAggregateInputType | true;
};
export interface RecruitmentVoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RecruitmentVote'];
        meta: {
            name: 'RecruitmentVote';
        };
    };
    /**
     * Find zero or one RecruitmentVote that matches the filter.
     * @param {RecruitmentVoteFindUniqueArgs} args - Arguments to find a RecruitmentVote
     * @example
     * // Get one RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecruitmentVoteFindUniqueArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RecruitmentVote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecruitmentVoteFindUniqueOrThrowArgs} args - Arguments to find a RecruitmentVote
     * @example
     * // Get one RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecruitmentVoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecruitmentVote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteFindFirstArgs} args - Arguments to find a RecruitmentVote
     * @example
     * // Get one RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecruitmentVoteFindFirstArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RecruitmentVote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteFindFirstOrThrowArgs} args - Arguments to find a RecruitmentVote
     * @example
     * // Get one RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecruitmentVoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RecruitmentVotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecruitmentVotes
     * const recruitmentVotes = await prisma.recruitmentVote.findMany()
     *
     * // Get first 10 RecruitmentVotes
     * const recruitmentVotes = await prisma.recruitmentVote.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const recruitmentVoteWithIdOnly = await prisma.recruitmentVote.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RecruitmentVoteFindManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RecruitmentVote.
     * @param {RecruitmentVoteCreateArgs} args - Arguments to create a RecruitmentVote.
     * @example
     * // Create one RecruitmentVote
     * const RecruitmentVote = await prisma.recruitmentVote.create({
     *   data: {
     *     // ... data to create a RecruitmentVote
     *   }
     * })
     *
     */
    create<T extends RecruitmentVoteCreateArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteCreateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RecruitmentVotes.
     * @param {RecruitmentVoteCreateManyArgs} args - Arguments to create many RecruitmentVotes.
     * @example
     * // Create many RecruitmentVotes
     * const recruitmentVote = await prisma.recruitmentVote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RecruitmentVoteCreateManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RecruitmentVotes and returns the data saved in the database.
     * @param {RecruitmentVoteCreateManyAndReturnArgs} args - Arguments to create many RecruitmentVotes.
     * @example
     * // Create many RecruitmentVotes
     * const recruitmentVote = await prisma.recruitmentVote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RecruitmentVotes and only return the `id`
     * const recruitmentVoteWithIdOnly = await prisma.recruitmentVote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RecruitmentVoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RecruitmentVote.
     * @param {RecruitmentVoteDeleteArgs} args - Arguments to delete one RecruitmentVote.
     * @example
     * // Delete one RecruitmentVote
     * const RecruitmentVote = await prisma.recruitmentVote.delete({
     *   where: {
     *     // ... filter to delete one RecruitmentVote
     *   }
     * })
     *
     */
    delete<T extends RecruitmentVoteDeleteArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteDeleteArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RecruitmentVote.
     * @param {RecruitmentVoteUpdateArgs} args - Arguments to update one RecruitmentVote.
     * @example
     * // Update one RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RecruitmentVoteUpdateArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteUpdateArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RecruitmentVotes.
     * @param {RecruitmentVoteDeleteManyArgs} args - Arguments to filter RecruitmentVotes to delete.
     * @example
     * // Delete a few RecruitmentVotes
     * const { count } = await prisma.recruitmentVote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RecruitmentVoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, RecruitmentVoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecruitmentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecruitmentVotes
     * const recruitmentVote = await prisma.recruitmentVote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RecruitmentVoteUpdateManyArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RecruitmentVotes and returns the data updated in the database.
     * @param {RecruitmentVoteUpdateManyAndReturnArgs} args - Arguments to update many RecruitmentVotes.
     * @example
     * // Update many RecruitmentVotes
     * const recruitmentVote = await prisma.recruitmentVote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RecruitmentVotes and only return the `id`
     * const recruitmentVoteWithIdOnly = await prisma.recruitmentVote.updateManyAndReturn({
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
    updateManyAndReturn<T extends RecruitmentVoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RecruitmentVote.
     * @param {RecruitmentVoteUpsertArgs} args - Arguments to update or create a RecruitmentVote.
     * @example
     * // Update or create a RecruitmentVote
     * const recruitmentVote = await prisma.recruitmentVote.upsert({
     *   create: {
     *     // ... data to create a RecruitmentVote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecruitmentVote we want to update
     *   }
     * })
     */
    upsert<T extends RecruitmentVoteUpsertArgs>(args: Prisma.SelectSubset<T, RecruitmentVoteUpsertArgs<ExtArgs>>): Prisma.Prisma__RecruitmentVoteClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentVotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RecruitmentVotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteCountArgs} args - Arguments to filter RecruitmentVotes to count.
     * @example
     * // Count the number of RecruitmentVotes
     * const count = await prisma.recruitmentVote.count({
     *   where: {
     *     // ... the filter for the RecruitmentVotes we want to count
     *   }
     * })
    **/
    count<T extends RecruitmentVoteCountArgs>(args?: Prisma.Subset<T, RecruitmentVoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RecruitmentVoteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RecruitmentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecruitmentVoteAggregateArgs>(args: Prisma.Subset<T, RecruitmentVoteAggregateArgs>): Prisma.PrismaPromise<GetRecruitmentVoteAggregateType<T>>;
    /**
     * Group by RecruitmentVote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecruitmentVoteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends RecruitmentVoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RecruitmentVoteGroupByArgs['orderBy'];
    } : {
        orderBy?: RecruitmentVoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RecruitmentVoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecruitmentVoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RecruitmentVote model
     */
    readonly fields: RecruitmentVoteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RecruitmentVote.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RecruitmentVoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ticket<T extends Prisma.RecruitmentTicketDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RecruitmentTicketDefaultArgs<ExtArgs>>): Prisma.Prisma__RecruitmentTicketClient<runtime.Types.Result.GetResult<Prisma.$RecruitmentTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the RecruitmentVote model
 */
export interface RecruitmentVoteFieldRefs {
    readonly id: Prisma.FieldRef<"RecruitmentVote", 'String'>;
    readonly ticketId: Prisma.FieldRef<"RecruitmentVote", 'String'>;
    readonly userId: Prisma.FieldRef<"RecruitmentVote", 'String'>;
    readonly username: Prisma.FieldRef<"RecruitmentVote", 'String'>;
    readonly vote: Prisma.FieldRef<"RecruitmentVote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RecruitmentVote", 'DateTime'>;
}
/**
 * RecruitmentVote findUnique
 */
export type RecruitmentVoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitmentVote to fetch.
     */
    where: Prisma.RecruitmentVoteWhereUniqueInput;
};
/**
 * RecruitmentVote findUniqueOrThrow
 */
export type RecruitmentVoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitmentVote to fetch.
     */
    where: Prisma.RecruitmentVoteWhereUniqueInput;
};
/**
 * RecruitmentVote findFirst
 */
export type RecruitmentVoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitmentVote to fetch.
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentVotes to fetch.
     */
    orderBy?: Prisma.RecruitmentVoteOrderByWithRelationInput | Prisma.RecruitmentVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitmentVotes.
     */
    cursor?: Prisma.RecruitmentVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentVotes.
     */
    distinct?: Prisma.RecruitmentVoteScalarFieldEnum | Prisma.RecruitmentVoteScalarFieldEnum[];
};
/**
 * RecruitmentVote findFirstOrThrow
 */
export type RecruitmentVoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitmentVote to fetch.
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentVotes to fetch.
     */
    orderBy?: Prisma.RecruitmentVoteOrderByWithRelationInput | Prisma.RecruitmentVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RecruitmentVotes.
     */
    cursor?: Prisma.RecruitmentVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentVotes.
     */
    distinct?: Prisma.RecruitmentVoteScalarFieldEnum | Prisma.RecruitmentVoteScalarFieldEnum[];
};
/**
 * RecruitmentVote findMany
 */
export type RecruitmentVoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter, which RecruitmentVotes to fetch.
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RecruitmentVotes to fetch.
     */
    orderBy?: Prisma.RecruitmentVoteOrderByWithRelationInput | Prisma.RecruitmentVoteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RecruitmentVotes.
     */
    cursor?: Prisma.RecruitmentVoteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RecruitmentVotes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RecruitmentVotes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RecruitmentVotes.
     */
    distinct?: Prisma.RecruitmentVoteScalarFieldEnum | Prisma.RecruitmentVoteScalarFieldEnum[];
};
/**
 * RecruitmentVote create
 */
export type RecruitmentVoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * The data needed to create a RecruitmentVote.
     */
    data: Prisma.XOR<Prisma.RecruitmentVoteCreateInput, Prisma.RecruitmentVoteUncheckedCreateInput>;
};
/**
 * RecruitmentVote createMany
 */
export type RecruitmentVoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecruitmentVotes.
     */
    data: Prisma.RecruitmentVoteCreateManyInput | Prisma.RecruitmentVoteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RecruitmentVote createManyAndReturn
 */
export type RecruitmentVoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * The data used to create many RecruitmentVotes.
     */
    data: Prisma.RecruitmentVoteCreateManyInput | Prisma.RecruitmentVoteCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RecruitmentVote update
 */
export type RecruitmentVoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * The data needed to update a RecruitmentVote.
     */
    data: Prisma.XOR<Prisma.RecruitmentVoteUpdateInput, Prisma.RecruitmentVoteUncheckedUpdateInput>;
    /**
     * Choose, which RecruitmentVote to update.
     */
    where: Prisma.RecruitmentVoteWhereUniqueInput;
};
/**
 * RecruitmentVote updateMany
 */
export type RecruitmentVoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RecruitmentVotes.
     */
    data: Prisma.XOR<Prisma.RecruitmentVoteUpdateManyMutationInput, Prisma.RecruitmentVoteUncheckedUpdateManyInput>;
    /**
     * Filter which RecruitmentVotes to update
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * Limit how many RecruitmentVotes to update.
     */
    limit?: number;
};
/**
 * RecruitmentVote updateManyAndReturn
 */
export type RecruitmentVoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * The data used to update RecruitmentVotes.
     */
    data: Prisma.XOR<Prisma.RecruitmentVoteUpdateManyMutationInput, Prisma.RecruitmentVoteUncheckedUpdateManyInput>;
    /**
     * Filter which RecruitmentVotes to update
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * Limit how many RecruitmentVotes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RecruitmentVote upsert
 */
export type RecruitmentVoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * The filter to search for the RecruitmentVote to update in case it exists.
     */
    where: Prisma.RecruitmentVoteWhereUniqueInput;
    /**
     * In case the RecruitmentVote found by the `where` argument doesn't exist, create a new RecruitmentVote with this data.
     */
    create: Prisma.XOR<Prisma.RecruitmentVoteCreateInput, Prisma.RecruitmentVoteUncheckedCreateInput>;
    /**
     * In case the RecruitmentVote was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RecruitmentVoteUpdateInput, Prisma.RecruitmentVoteUncheckedUpdateInput>;
};
/**
 * RecruitmentVote delete
 */
export type RecruitmentVoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
    /**
     * Filter which RecruitmentVote to delete.
     */
    where: Prisma.RecruitmentVoteWhereUniqueInput;
};
/**
 * RecruitmentVote deleteMany
 */
export type RecruitmentVoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RecruitmentVotes to delete
     */
    where?: Prisma.RecruitmentVoteWhereInput;
    /**
     * Limit how many RecruitmentVotes to delete.
     */
    limit?: number;
};
/**
 * RecruitmentVote without action
 */
export type RecruitmentVoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecruitmentVote
     */
    select?: Prisma.RecruitmentVoteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RecruitmentVote
     */
    omit?: Prisma.RecruitmentVoteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RecruitmentVoteInclude<ExtArgs> | null;
};
//# sourceMappingURL=RecruitmentVote.d.ts.map