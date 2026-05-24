import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ClanPlayer
 *
 */
export type ClanPlayerModel = runtime.Types.Result.DefaultSelection<Prisma.$ClanPlayerPayload>;
export type AggregateClanPlayer = {
    _count: ClanPlayerCountAggregateOutputType | null;
    _min: ClanPlayerMinAggregateOutputType | null;
    _max: ClanPlayerMaxAggregateOutputType | null;
};
export type ClanPlayerMinAggregateOutputType = {
    id: string | null;
    discord: string | null;
    fullName: string | null;
    minecraftNick: string | null;
    rank: string | null;
    joinedAt: Date | null;
    country: string | null;
    utcOffset: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    notes: string | null;
    minecraftRank: string | null;
};
export type ClanPlayerMaxAggregateOutputType = {
    id: string | null;
    discord: string | null;
    fullName: string | null;
    minecraftNick: string | null;
    rank: string | null;
    joinedAt: Date | null;
    country: string | null;
    utcOffset: string | null;
    status: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    notes: string | null;
    minecraftRank: string | null;
};
export type ClanPlayerCountAggregateOutputType = {
    id: number;
    discord: number;
    fullName: number;
    minecraftNick: number;
    rank: number;
    joinedAt: number;
    country: number;
    utcOffset: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    notes: number;
    minecraftRank: number;
    _all: number;
};
export type ClanPlayerMinAggregateInputType = {
    id?: true;
    discord?: true;
    fullName?: true;
    minecraftNick?: true;
    rank?: true;
    joinedAt?: true;
    country?: true;
    utcOffset?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    notes?: true;
    minecraftRank?: true;
};
export type ClanPlayerMaxAggregateInputType = {
    id?: true;
    discord?: true;
    fullName?: true;
    minecraftNick?: true;
    rank?: true;
    joinedAt?: true;
    country?: true;
    utcOffset?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    notes?: true;
    minecraftRank?: true;
};
export type ClanPlayerCountAggregateInputType = {
    id?: true;
    discord?: true;
    fullName?: true;
    minecraftNick?: true;
    rank?: true;
    joinedAt?: true;
    country?: true;
    utcOffset?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    notes?: true;
    minecraftRank?: true;
    _all?: true;
};
export type ClanPlayerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanPlayer to aggregate.
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPlayers to fetch.
     */
    orderBy?: Prisma.ClanPlayerOrderByWithRelationInput | Prisma.ClanPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ClanPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ClanPlayers
    **/
    _count?: true | ClanPlayerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClanPlayerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClanPlayerMaxAggregateInputType;
};
export type GetClanPlayerAggregateType<T extends ClanPlayerAggregateArgs> = {
    [P in keyof T & keyof AggregateClanPlayer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClanPlayer[P]> : Prisma.GetScalarType<T[P], AggregateClanPlayer[P]>;
};
export type ClanPlayerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClanPlayerWhereInput;
    orderBy?: Prisma.ClanPlayerOrderByWithAggregationInput | Prisma.ClanPlayerOrderByWithAggregationInput[];
    by: Prisma.ClanPlayerScalarFieldEnum[] | Prisma.ClanPlayerScalarFieldEnum;
    having?: Prisma.ClanPlayerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClanPlayerCountAggregateInputType | true;
    _min?: ClanPlayerMinAggregateInputType;
    _max?: ClanPlayerMaxAggregateInputType;
};
export type ClanPlayerGroupByOutputType = {
    id: string;
    discord: string;
    fullName: string;
    minecraftNick: string;
    rank: string;
    joinedAt: Date;
    country: string;
    utcOffset: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    notes: string | null;
    minecraftRank: string;
    _count: ClanPlayerCountAggregateOutputType | null;
    _min: ClanPlayerMinAggregateOutputType | null;
    _max: ClanPlayerMaxAggregateOutputType | null;
};
export type GetClanPlayerGroupByPayload<T extends ClanPlayerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClanPlayerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClanPlayerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClanPlayerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClanPlayerGroupByOutputType[P]>;
}>>;
export type ClanPlayerWhereInput = {
    AND?: Prisma.ClanPlayerWhereInput | Prisma.ClanPlayerWhereInput[];
    OR?: Prisma.ClanPlayerWhereInput[];
    NOT?: Prisma.ClanPlayerWhereInput | Prisma.ClanPlayerWhereInput[];
    id?: Prisma.StringFilter<"ClanPlayer"> | string;
    discord?: Prisma.StringFilter<"ClanPlayer"> | string;
    fullName?: Prisma.StringFilter<"ClanPlayer"> | string;
    minecraftNick?: Prisma.StringFilter<"ClanPlayer"> | string;
    rank?: Prisma.StringFilter<"ClanPlayer"> | string;
    joinedAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    country?: Prisma.StringFilter<"ClanPlayer"> | string;
    utcOffset?: Prisma.StringFilter<"ClanPlayer"> | string;
    status?: Prisma.StringFilter<"ClanPlayer"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    notes?: Prisma.StringNullableFilter<"ClanPlayer"> | string | null;
    minecraftRank?: Prisma.StringFilter<"ClanPlayer"> | string;
};
export type ClanPlayerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    discord?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    minecraftNick?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    utcOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    minecraftRank?: Prisma.SortOrder;
};
export type ClanPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    discord?: string;
    minecraftNick?: string;
    AND?: Prisma.ClanPlayerWhereInput | Prisma.ClanPlayerWhereInput[];
    OR?: Prisma.ClanPlayerWhereInput[];
    NOT?: Prisma.ClanPlayerWhereInput | Prisma.ClanPlayerWhereInput[];
    fullName?: Prisma.StringFilter<"ClanPlayer"> | string;
    rank?: Prisma.StringFilter<"ClanPlayer"> | string;
    joinedAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    country?: Prisma.StringFilter<"ClanPlayer"> | string;
    utcOffset?: Prisma.StringFilter<"ClanPlayer"> | string;
    status?: Prisma.StringFilter<"ClanPlayer"> | string;
    createdAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ClanPlayer"> | Date | string;
    notes?: Prisma.StringNullableFilter<"ClanPlayer"> | string | null;
    minecraftRank?: Prisma.StringFilter<"ClanPlayer"> | string;
}, "id" | "discord" | "minecraftNick">;
export type ClanPlayerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    discord?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    minecraftNick?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    utcOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    minecraftRank?: Prisma.SortOrder;
    _count?: Prisma.ClanPlayerCountOrderByAggregateInput;
    _max?: Prisma.ClanPlayerMaxOrderByAggregateInput;
    _min?: Prisma.ClanPlayerMinOrderByAggregateInput;
};
export type ClanPlayerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClanPlayerScalarWhereWithAggregatesInput | Prisma.ClanPlayerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClanPlayerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClanPlayerScalarWhereWithAggregatesInput | Prisma.ClanPlayerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    discord?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    minecraftNick?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    rank?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    joinedAt?: Prisma.DateTimeWithAggregatesFilter<"ClanPlayer"> | Date | string;
    country?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    utcOffset?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    status?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ClanPlayer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ClanPlayer"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"ClanPlayer"> | string | null;
    minecraftRank?: Prisma.StringWithAggregatesFilter<"ClanPlayer"> | string;
};
export type ClanPlayerCreateInput = {
    id: string;
    discord: string;
    fullName: string;
    minecraftNick: string;
    rank: string;
    joinedAt: Date | string;
    country: string;
    utcOffset: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: string | null;
    minecraftRank?: string;
};
export type ClanPlayerUncheckedCreateInput = {
    id: string;
    discord: string;
    fullName: string;
    minecraftNick: string;
    rank: string;
    joinedAt: Date | string;
    country: string;
    utcOffset: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: string | null;
    minecraftRank?: string;
};
export type ClanPlayerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discord?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    minecraftNick?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    utcOffset?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPlayerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discord?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    minecraftNick?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    utcOffset?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPlayerCreateManyInput = {
    id: string;
    discord: string;
    fullName: string;
    minecraftNick: string;
    rank: string;
    joinedAt: Date | string;
    country: string;
    utcOffset: string;
    status?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    notes?: string | null;
    minecraftRank?: string;
};
export type ClanPlayerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discord?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    minecraftNick?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    utcOffset?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPlayerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    discord?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    minecraftNick?: Prisma.StringFieldUpdateOperationsInput | string;
    rank?: Prisma.StringFieldUpdateOperationsInput | string;
    joinedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    utcOffset?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    minecraftRank?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ClanPlayerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discord?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    minecraftNick?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    utcOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    minecraftRank?: Prisma.SortOrder;
};
export type ClanPlayerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discord?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    minecraftNick?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    utcOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    minecraftRank?: Prisma.SortOrder;
};
export type ClanPlayerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    discord?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    minecraftNick?: Prisma.SortOrder;
    rank?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    utcOffset?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    minecraftRank?: Prisma.SortOrder;
};
export type ClanPlayerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discord?: boolean;
    fullName?: boolean;
    minecraftNick?: boolean;
    rank?: boolean;
    joinedAt?: boolean;
    country?: boolean;
    utcOffset?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    notes?: boolean;
    minecraftRank?: boolean;
}, ExtArgs["result"]["clanPlayer"]>;
export type ClanPlayerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discord?: boolean;
    fullName?: boolean;
    minecraftNick?: boolean;
    rank?: boolean;
    joinedAt?: boolean;
    country?: boolean;
    utcOffset?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    notes?: boolean;
    minecraftRank?: boolean;
}, ExtArgs["result"]["clanPlayer"]>;
export type ClanPlayerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    discord?: boolean;
    fullName?: boolean;
    minecraftNick?: boolean;
    rank?: boolean;
    joinedAt?: boolean;
    country?: boolean;
    utcOffset?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    notes?: boolean;
    minecraftRank?: boolean;
}, ExtArgs["result"]["clanPlayer"]>;
export type ClanPlayerSelectScalar = {
    id?: boolean;
    discord?: boolean;
    fullName?: boolean;
    minecraftNick?: boolean;
    rank?: boolean;
    joinedAt?: boolean;
    country?: boolean;
    utcOffset?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    notes?: boolean;
    minecraftRank?: boolean;
};
export type ClanPlayerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "discord" | "fullName" | "minecraftNick" | "rank" | "joinedAt" | "country" | "utcOffset" | "status" | "createdAt" | "updatedAt" | "notes" | "minecraftRank", ExtArgs["result"]["clanPlayer"]>;
export type $ClanPlayerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClanPlayer";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        discord: string;
        fullName: string;
        minecraftNick: string;
        rank: string;
        joinedAt: Date;
        country: string;
        utcOffset: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        minecraftRank: string;
    }, ExtArgs["result"]["clanPlayer"]>;
    composites: {};
};
export type ClanPlayerGetPayload<S extends boolean | null | undefined | ClanPlayerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload, S>;
export type ClanPlayerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClanPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClanPlayerCountAggregateInputType | true;
};
export interface ClanPlayerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClanPlayer'];
        meta: {
            name: 'ClanPlayer';
        };
    };
    /**
     * Find zero or one ClanPlayer that matches the filter.
     * @param {ClanPlayerFindUniqueArgs} args - Arguments to find a ClanPlayer
     * @example
     * // Get one ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClanPlayerFindUniqueArgs>(args: Prisma.SelectSubset<T, ClanPlayerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ClanPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClanPlayerFindUniqueOrThrowArgs} args - Arguments to find a ClanPlayer
     * @example
     * // Get one ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClanPlayerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClanPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerFindFirstArgs} args - Arguments to find a ClanPlayer
     * @example
     * // Get one ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClanPlayerFindFirstArgs>(args?: Prisma.SelectSubset<T, ClanPlayerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ClanPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerFindFirstOrThrowArgs} args - Arguments to find a ClanPlayer
     * @example
     * // Get one ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClanPlayerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClanPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ClanPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClanPlayers
     * const clanPlayers = await prisma.clanPlayer.findMany()
     *
     * // Get first 10 ClanPlayers
     * const clanPlayers = await prisma.clanPlayer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clanPlayerWithIdOnly = await prisma.clanPlayer.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ClanPlayerFindManyArgs>(args?: Prisma.SelectSubset<T, ClanPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ClanPlayer.
     * @param {ClanPlayerCreateArgs} args - Arguments to create a ClanPlayer.
     * @example
     * // Create one ClanPlayer
     * const ClanPlayer = await prisma.clanPlayer.create({
     *   data: {
     *     // ... data to create a ClanPlayer
     *   }
     * })
     *
     */
    create<T extends ClanPlayerCreateArgs>(args: Prisma.SelectSubset<T, ClanPlayerCreateArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ClanPlayers.
     * @param {ClanPlayerCreateManyArgs} args - Arguments to create many ClanPlayers.
     * @example
     * // Create many ClanPlayers
     * const clanPlayer = await prisma.clanPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ClanPlayerCreateManyArgs>(args?: Prisma.SelectSubset<T, ClanPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ClanPlayers and returns the data saved in the database.
     * @param {ClanPlayerCreateManyAndReturnArgs} args - Arguments to create many ClanPlayers.
     * @example
     * // Create many ClanPlayers
     * const clanPlayer = await prisma.clanPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ClanPlayers and only return the `id`
     * const clanPlayerWithIdOnly = await prisma.clanPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ClanPlayerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClanPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ClanPlayer.
     * @param {ClanPlayerDeleteArgs} args - Arguments to delete one ClanPlayer.
     * @example
     * // Delete one ClanPlayer
     * const ClanPlayer = await prisma.clanPlayer.delete({
     *   where: {
     *     // ... filter to delete one ClanPlayer
     *   }
     * })
     *
     */
    delete<T extends ClanPlayerDeleteArgs>(args: Prisma.SelectSubset<T, ClanPlayerDeleteArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ClanPlayer.
     * @param {ClanPlayerUpdateArgs} args - Arguments to update one ClanPlayer.
     * @example
     * // Update one ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ClanPlayerUpdateArgs>(args: Prisma.SelectSubset<T, ClanPlayerUpdateArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ClanPlayers.
     * @param {ClanPlayerDeleteManyArgs} args - Arguments to filter ClanPlayers to delete.
     * @example
     * // Delete a few ClanPlayers
     * const { count } = await prisma.clanPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ClanPlayerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClanPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClanPlayers
     * const clanPlayer = await prisma.clanPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ClanPlayerUpdateManyArgs>(args: Prisma.SelectSubset<T, ClanPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ClanPlayers and returns the data updated in the database.
     * @param {ClanPlayerUpdateManyAndReturnArgs} args - Arguments to update many ClanPlayers.
     * @example
     * // Update many ClanPlayers
     * const clanPlayer = await prisma.clanPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ClanPlayers and only return the `id`
     * const clanPlayerWithIdOnly = await prisma.clanPlayer.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClanPlayerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClanPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ClanPlayer.
     * @param {ClanPlayerUpsertArgs} args - Arguments to update or create a ClanPlayer.
     * @example
     * // Update or create a ClanPlayer
     * const clanPlayer = await prisma.clanPlayer.upsert({
     *   create: {
     *     // ... data to create a ClanPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClanPlayer we want to update
     *   }
     * })
     */
    upsert<T extends ClanPlayerUpsertArgs>(args: Prisma.SelectSubset<T, ClanPlayerUpsertArgs<ExtArgs>>): Prisma.Prisma__ClanPlayerClient<runtime.Types.Result.GetResult<Prisma.$ClanPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ClanPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerCountArgs} args - Arguments to filter ClanPlayers to count.
     * @example
     * // Count the number of ClanPlayers
     * const count = await prisma.clanPlayer.count({
     *   where: {
     *     // ... the filter for the ClanPlayers we want to count
     *   }
     * })
    **/
    count<T extends ClanPlayerCountArgs>(args?: Prisma.Subset<T, ClanPlayerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClanPlayerCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ClanPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClanPlayerAggregateArgs>(args: Prisma.Subset<T, ClanPlayerAggregateArgs>): Prisma.PrismaPromise<GetClanPlayerAggregateType<T>>;
    /**
     * Group by ClanPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClanPlayerGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ClanPlayerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClanPlayerGroupByArgs['orderBy'];
    } : {
        orderBy?: ClanPlayerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClanPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClanPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ClanPlayer model
     */
    readonly fields: ClanPlayerFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ClanPlayer.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ClanPlayerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the ClanPlayer model
 */
export interface ClanPlayerFieldRefs {
    readonly id: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly discord: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly fullName: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly minecraftNick: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly rank: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly joinedAt: Prisma.FieldRef<"ClanPlayer", 'DateTime'>;
    readonly country: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly utcOffset: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly status: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ClanPlayer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ClanPlayer", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"ClanPlayer", 'String'>;
    readonly minecraftRank: Prisma.FieldRef<"ClanPlayer", 'String'>;
}
/**
 * ClanPlayer findUnique
 */
export type ClanPlayerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter, which ClanPlayer to fetch.
     */
    where: Prisma.ClanPlayerWhereUniqueInput;
};
/**
 * ClanPlayer findUniqueOrThrow
 */
export type ClanPlayerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter, which ClanPlayer to fetch.
     */
    where: Prisma.ClanPlayerWhereUniqueInput;
};
/**
 * ClanPlayer findFirst
 */
export type ClanPlayerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter, which ClanPlayer to fetch.
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPlayers to fetch.
     */
    orderBy?: Prisma.ClanPlayerOrderByWithRelationInput | Prisma.ClanPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanPlayers.
     */
    cursor?: Prisma.ClanPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPlayers.
     */
    distinct?: Prisma.ClanPlayerScalarFieldEnum | Prisma.ClanPlayerScalarFieldEnum[];
};
/**
 * ClanPlayer findFirstOrThrow
 */
export type ClanPlayerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter, which ClanPlayer to fetch.
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPlayers to fetch.
     */
    orderBy?: Prisma.ClanPlayerOrderByWithRelationInput | Prisma.ClanPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ClanPlayers.
     */
    cursor?: Prisma.ClanPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPlayers.
     */
    distinct?: Prisma.ClanPlayerScalarFieldEnum | Prisma.ClanPlayerScalarFieldEnum[];
};
/**
 * ClanPlayer findMany
 */
export type ClanPlayerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter, which ClanPlayers to fetch.
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ClanPlayers to fetch.
     */
    orderBy?: Prisma.ClanPlayerOrderByWithRelationInput | Prisma.ClanPlayerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ClanPlayers.
     */
    cursor?: Prisma.ClanPlayerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ClanPlayers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ClanPlayers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ClanPlayers.
     */
    distinct?: Prisma.ClanPlayerScalarFieldEnum | Prisma.ClanPlayerScalarFieldEnum[];
};
/**
 * ClanPlayer create
 */
export type ClanPlayerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * The data needed to create a ClanPlayer.
     */
    data: Prisma.XOR<Prisma.ClanPlayerCreateInput, Prisma.ClanPlayerUncheckedCreateInput>;
};
/**
 * ClanPlayer createMany
 */
export type ClanPlayerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClanPlayers.
     */
    data: Prisma.ClanPlayerCreateManyInput | Prisma.ClanPlayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ClanPlayer createManyAndReturn
 */
export type ClanPlayerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * The data used to create many ClanPlayers.
     */
    data: Prisma.ClanPlayerCreateManyInput | Prisma.ClanPlayerCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ClanPlayer update
 */
export type ClanPlayerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * The data needed to update a ClanPlayer.
     */
    data: Prisma.XOR<Prisma.ClanPlayerUpdateInput, Prisma.ClanPlayerUncheckedUpdateInput>;
    /**
     * Choose, which ClanPlayer to update.
     */
    where: Prisma.ClanPlayerWhereUniqueInput;
};
/**
 * ClanPlayer updateMany
 */
export type ClanPlayerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ClanPlayers.
     */
    data: Prisma.XOR<Prisma.ClanPlayerUpdateManyMutationInput, Prisma.ClanPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which ClanPlayers to update
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * Limit how many ClanPlayers to update.
     */
    limit?: number;
};
/**
 * ClanPlayer updateManyAndReturn
 */
export type ClanPlayerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * The data used to update ClanPlayers.
     */
    data: Prisma.XOR<Prisma.ClanPlayerUpdateManyMutationInput, Prisma.ClanPlayerUncheckedUpdateManyInput>;
    /**
     * Filter which ClanPlayers to update
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * Limit how many ClanPlayers to update.
     */
    limit?: number;
};
/**
 * ClanPlayer upsert
 */
export type ClanPlayerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * The filter to search for the ClanPlayer to update in case it exists.
     */
    where: Prisma.ClanPlayerWhereUniqueInput;
    /**
     * In case the ClanPlayer found by the `where` argument doesn't exist, create a new ClanPlayer with this data.
     */
    create: Prisma.XOR<Prisma.ClanPlayerCreateInput, Prisma.ClanPlayerUncheckedCreateInput>;
    /**
     * In case the ClanPlayer was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ClanPlayerUpdateInput, Prisma.ClanPlayerUncheckedUpdateInput>;
};
/**
 * ClanPlayer delete
 */
export type ClanPlayerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
    /**
     * Filter which ClanPlayer to delete.
     */
    where: Prisma.ClanPlayerWhereUniqueInput;
};
/**
 * ClanPlayer deleteMany
 */
export type ClanPlayerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ClanPlayers to delete
     */
    where?: Prisma.ClanPlayerWhereInput;
    /**
     * Limit how many ClanPlayers to delete.
     */
    limit?: number;
};
/**
 * ClanPlayer without action
 */
export type ClanPlayerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClanPlayer
     */
    select?: Prisma.ClanPlayerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ClanPlayer
     */
    omit?: Prisma.ClanPlayerOmit<ExtArgs> | null;
};
//# sourceMappingURL=ClanPlayer.d.ts.map