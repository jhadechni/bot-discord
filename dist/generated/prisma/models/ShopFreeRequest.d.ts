import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopFreeRequest
 *
 */
export type ShopFreeRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopFreeRequestPayload>;
export type AggregateShopFreeRequest = {
    _count: ShopFreeRequestCountAggregateOutputType | null;
    _min: ShopFreeRequestMinAggregateOutputType | null;
    _max: ShopFreeRequestMaxAggregateOutputType | null;
};
export type ShopFreeRequestMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    requestText: string | null;
    createdAt: Date | null;
};
export type ShopFreeRequestMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    userId: string | null;
    requestText: string | null;
    createdAt: Date | null;
};
export type ShopFreeRequestCountAggregateOutputType = {
    id: number;
    guildId: number;
    userId: number;
    requestText: number;
    createdAt: number;
    _all: number;
};
export type ShopFreeRequestMinAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    requestText?: true;
    createdAt?: true;
};
export type ShopFreeRequestMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    requestText?: true;
    createdAt?: true;
};
export type ShopFreeRequestCountAggregateInputType = {
    id?: true;
    guildId?: true;
    userId?: true;
    requestText?: true;
    createdAt?: true;
    _all?: true;
};
export type ShopFreeRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopFreeRequest to aggregate.
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopFreeRequests to fetch.
     */
    orderBy?: Prisma.ShopFreeRequestOrderByWithRelationInput | Prisma.ShopFreeRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopFreeRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopFreeRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopFreeRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopFreeRequests
    **/
    _count?: true | ShopFreeRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopFreeRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopFreeRequestMaxAggregateInputType;
};
export type GetShopFreeRequestAggregateType<T extends ShopFreeRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateShopFreeRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopFreeRequest[P]> : Prisma.GetScalarType<T[P], AggregateShopFreeRequest[P]>;
};
export type ShopFreeRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopFreeRequestWhereInput;
    orderBy?: Prisma.ShopFreeRequestOrderByWithAggregationInput | Prisma.ShopFreeRequestOrderByWithAggregationInput[];
    by: Prisma.ShopFreeRequestScalarFieldEnum[] | Prisma.ShopFreeRequestScalarFieldEnum;
    having?: Prisma.ShopFreeRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopFreeRequestCountAggregateInputType | true;
    _min?: ShopFreeRequestMinAggregateInputType;
    _max?: ShopFreeRequestMaxAggregateInputType;
};
export type ShopFreeRequestGroupByOutputType = {
    id: string;
    guildId: string;
    userId: string;
    requestText: string;
    createdAt: Date;
    _count: ShopFreeRequestCountAggregateOutputType | null;
    _min: ShopFreeRequestMinAggregateOutputType | null;
    _max: ShopFreeRequestMaxAggregateOutputType | null;
};
export type GetShopFreeRequestGroupByPayload<T extends ShopFreeRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopFreeRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopFreeRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopFreeRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopFreeRequestGroupByOutputType[P]>;
}>>;
export type ShopFreeRequestWhereInput = {
    AND?: Prisma.ShopFreeRequestWhereInput | Prisma.ShopFreeRequestWhereInput[];
    OR?: Prisma.ShopFreeRequestWhereInput[];
    NOT?: Prisma.ShopFreeRequestWhereInput | Prisma.ShopFreeRequestWhereInput[];
    id?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    guildId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    userId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    requestText?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopFreeRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
};
export type ShopFreeRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.ShopUserOrderByWithRelationInput;
};
export type ShopFreeRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ShopFreeRequestWhereInput | Prisma.ShopFreeRequestWhereInput[];
    OR?: Prisma.ShopFreeRequestWhereInput[];
    NOT?: Prisma.ShopFreeRequestWhereInput | Prisma.ShopFreeRequestWhereInput[];
    guildId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    userId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    requestText?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopFreeRequest"> | Date | string;
    user?: Prisma.XOR<Prisma.ShopUserScalarRelationFilter, Prisma.ShopUserWhereInput>;
}, "id">;
export type ShopFreeRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ShopFreeRequestCountOrderByAggregateInput;
    _max?: Prisma.ShopFreeRequestMaxOrderByAggregateInput;
    _min?: Prisma.ShopFreeRequestMinOrderByAggregateInput;
};
export type ShopFreeRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopFreeRequestScalarWhereWithAggregatesInput | Prisma.ShopFreeRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopFreeRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopFreeRequestScalarWhereWithAggregatesInput | Prisma.ShopFreeRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopFreeRequest"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopFreeRequest"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"ShopFreeRequest"> | string;
    requestText?: Prisma.StringWithAggregatesFilter<"ShopFreeRequest"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopFreeRequest"> | Date | string;
};
export type ShopFreeRequestCreateInput = {
    id?: string;
    guildId: string;
    requestText: string;
    createdAt?: Date | string;
    user: Prisma.ShopUserCreateNestedOneWithoutFreeRequestsInput;
};
export type ShopFreeRequestUncheckedCreateInput = {
    id?: string;
    guildId: string;
    userId: string;
    requestText: string;
    createdAt?: Date | string;
};
export type ShopFreeRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.ShopUserUpdateOneRequiredWithoutFreeRequestsNestedInput;
};
export type ShopFreeRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestCreateManyInput = {
    id?: string;
    guildId: string;
    userId: string;
    requestText: string;
    createdAt?: Date | string;
};
export type ShopFreeRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestListRelationFilter = {
    every?: Prisma.ShopFreeRequestWhereInput;
    some?: Prisma.ShopFreeRequestWhereInput;
    none?: Prisma.ShopFreeRequestWhereInput;
};
export type ShopFreeRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopFreeRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopFreeRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopFreeRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    requestText?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ShopFreeRequestCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput> | Prisma.ShopFreeRequestCreateWithoutUserInput[] | Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput | Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShopFreeRequestCreateManyUserInputEnvelope;
    connect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
};
export type ShopFreeRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput> | Prisma.ShopFreeRequestCreateWithoutUserInput[] | Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput | Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ShopFreeRequestCreateManyUserInputEnvelope;
    connect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
};
export type ShopFreeRequestUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput> | Prisma.ShopFreeRequestCreateWithoutUserInput[] | Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput | Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShopFreeRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.ShopFreeRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShopFreeRequestCreateManyUserInputEnvelope;
    set?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    disconnect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    delete?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    connect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    update?: Prisma.ShopFreeRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.ShopFreeRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShopFreeRequestUpdateManyWithWhereWithoutUserInput | Prisma.ShopFreeRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShopFreeRequestScalarWhereInput | Prisma.ShopFreeRequestScalarWhereInput[];
};
export type ShopFreeRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput> | Prisma.ShopFreeRequestCreateWithoutUserInput[] | Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput | Prisma.ShopFreeRequestCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ShopFreeRequestUpsertWithWhereUniqueWithoutUserInput | Prisma.ShopFreeRequestUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ShopFreeRequestCreateManyUserInputEnvelope;
    set?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    disconnect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    delete?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    connect?: Prisma.ShopFreeRequestWhereUniqueInput | Prisma.ShopFreeRequestWhereUniqueInput[];
    update?: Prisma.ShopFreeRequestUpdateWithWhereUniqueWithoutUserInput | Prisma.ShopFreeRequestUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ShopFreeRequestUpdateManyWithWhereWithoutUserInput | Prisma.ShopFreeRequestUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ShopFreeRequestScalarWhereInput | Prisma.ShopFreeRequestScalarWhereInput[];
};
export type ShopFreeRequestCreateWithoutUserInput = {
    id?: string;
    guildId: string;
    requestText: string;
    createdAt?: Date | string;
};
export type ShopFreeRequestUncheckedCreateWithoutUserInput = {
    id?: string;
    guildId: string;
    requestText: string;
    createdAt?: Date | string;
};
export type ShopFreeRequestCreateOrConnectWithoutUserInput = {
    where: Prisma.ShopFreeRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput>;
};
export type ShopFreeRequestCreateManyUserInputEnvelope = {
    data: Prisma.ShopFreeRequestCreateManyUserInput | Prisma.ShopFreeRequestCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ShopFreeRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShopFreeRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopFreeRequestUpdateWithoutUserInput, Prisma.ShopFreeRequestUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ShopFreeRequestCreateWithoutUserInput, Prisma.ShopFreeRequestUncheckedCreateWithoutUserInput>;
};
export type ShopFreeRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ShopFreeRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopFreeRequestUpdateWithoutUserInput, Prisma.ShopFreeRequestUncheckedUpdateWithoutUserInput>;
};
export type ShopFreeRequestUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ShopFreeRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopFreeRequestUpdateManyMutationInput, Prisma.ShopFreeRequestUncheckedUpdateManyWithoutUserInput>;
};
export type ShopFreeRequestScalarWhereInput = {
    AND?: Prisma.ShopFreeRequestScalarWhereInput | Prisma.ShopFreeRequestScalarWhereInput[];
    OR?: Prisma.ShopFreeRequestScalarWhereInput[];
    NOT?: Prisma.ShopFreeRequestScalarWhereInput | Prisma.ShopFreeRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    guildId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    userId?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    requestText?: Prisma.StringFilter<"ShopFreeRequest"> | string;
    createdAt?: Prisma.DateTimeFilter<"ShopFreeRequest"> | Date | string;
};
export type ShopFreeRequestCreateManyUserInput = {
    id?: string;
    guildId: string;
    requestText: string;
    createdAt?: Date | string;
};
export type ShopFreeRequestUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    requestText?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopFreeRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    requestText?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopFreeRequest"]>;
export type ShopFreeRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    requestText?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopFreeRequest"]>;
export type ShopFreeRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    requestText?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopFreeRequest"]>;
export type ShopFreeRequestSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    userId?: boolean;
    requestText?: boolean;
    createdAt?: boolean;
};
export type ShopFreeRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "userId" | "requestText" | "createdAt", ExtArgs["result"]["shopFreeRequest"]>;
export type ShopFreeRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopFreeRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type ShopFreeRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.ShopUserDefaultArgs<ExtArgs>;
};
export type $ShopFreeRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopFreeRequest";
    objects: {
        user: Prisma.$ShopUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        userId: string;
        requestText: string;
        createdAt: Date;
    }, ExtArgs["result"]["shopFreeRequest"]>;
    composites: {};
};
export type ShopFreeRequestGetPayload<S extends boolean | null | undefined | ShopFreeRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload, S>;
export type ShopFreeRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopFreeRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopFreeRequestCountAggregateInputType | true;
};
export interface ShopFreeRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopFreeRequest'];
        meta: {
            name: 'ShopFreeRequest';
        };
    };
    /**
     * Find zero or one ShopFreeRequest that matches the filter.
     * @param {ShopFreeRequestFindUniqueArgs} args - Arguments to find a ShopFreeRequest
     * @example
     * // Get one ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFreeRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopFreeRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFreeRequestFindUniqueOrThrowArgs} args - Arguments to find a ShopFreeRequest
     * @example
     * // Get one ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFreeRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopFreeRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestFindFirstArgs} args - Arguments to find a ShopFreeRequest
     * @example
     * // Get one ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFreeRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopFreeRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestFindFirstOrThrowArgs} args - Arguments to find a ShopFreeRequest
     * @example
     * // Get one ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFreeRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopFreeRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopFreeRequests
     * const shopFreeRequests = await prisma.shopFreeRequest.findMany()
     *
     * // Get first 10 ShopFreeRequests
     * const shopFreeRequests = await prisma.shopFreeRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopFreeRequestWithIdOnly = await prisma.shopFreeRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopFreeRequestFindManyArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopFreeRequest.
     * @param {ShopFreeRequestCreateArgs} args - Arguments to create a ShopFreeRequest.
     * @example
     * // Create one ShopFreeRequest
     * const ShopFreeRequest = await prisma.shopFreeRequest.create({
     *   data: {
     *     // ... data to create a ShopFreeRequest
     *   }
     * })
     *
     */
    create<T extends ShopFreeRequestCreateArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestCreateArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopFreeRequests.
     * @param {ShopFreeRequestCreateManyArgs} args - Arguments to create many ShopFreeRequests.
     * @example
     * // Create many ShopFreeRequests
     * const shopFreeRequest = await prisma.shopFreeRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopFreeRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopFreeRequests and returns the data saved in the database.
     * @param {ShopFreeRequestCreateManyAndReturnArgs} args - Arguments to create many ShopFreeRequests.
     * @example
     * // Create many ShopFreeRequests
     * const shopFreeRequest = await prisma.shopFreeRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopFreeRequests and only return the `id`
     * const shopFreeRequestWithIdOnly = await prisma.shopFreeRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopFreeRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopFreeRequest.
     * @param {ShopFreeRequestDeleteArgs} args - Arguments to delete one ShopFreeRequest.
     * @example
     * // Delete one ShopFreeRequest
     * const ShopFreeRequest = await prisma.shopFreeRequest.delete({
     *   where: {
     *     // ... filter to delete one ShopFreeRequest
     *   }
     * })
     *
     */
    delete<T extends ShopFreeRequestDeleteArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopFreeRequest.
     * @param {ShopFreeRequestUpdateArgs} args - Arguments to update one ShopFreeRequest.
     * @example
     * // Update one ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopFreeRequestUpdateArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopFreeRequests.
     * @param {ShopFreeRequestDeleteManyArgs} args - Arguments to filter ShopFreeRequests to delete.
     * @example
     * // Delete a few ShopFreeRequests
     * const { count } = await prisma.shopFreeRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopFreeRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopFreeRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopFreeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopFreeRequests
     * const shopFreeRequest = await prisma.shopFreeRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopFreeRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopFreeRequests and returns the data updated in the database.
     * @param {ShopFreeRequestUpdateManyAndReturnArgs} args - Arguments to update many ShopFreeRequests.
     * @example
     * // Update many ShopFreeRequests
     * const shopFreeRequest = await prisma.shopFreeRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopFreeRequests and only return the `id`
     * const shopFreeRequestWithIdOnly = await prisma.shopFreeRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopFreeRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopFreeRequest.
     * @param {ShopFreeRequestUpsertArgs} args - Arguments to update or create a ShopFreeRequest.
     * @example
     * // Update or create a ShopFreeRequest
     * const shopFreeRequest = await prisma.shopFreeRequest.upsert({
     *   create: {
     *     // ... data to create a ShopFreeRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopFreeRequest we want to update
     *   }
     * })
     */
    upsert<T extends ShopFreeRequestUpsertArgs>(args: Prisma.SelectSubset<T, ShopFreeRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopFreeRequestClient<runtime.Types.Result.GetResult<Prisma.$ShopFreeRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopFreeRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestCountArgs} args - Arguments to filter ShopFreeRequests to count.
     * @example
     * // Count the number of ShopFreeRequests
     * const count = await prisma.shopFreeRequest.count({
     *   where: {
     *     // ... the filter for the ShopFreeRequests we want to count
     *   }
     * })
    **/
    count<T extends ShopFreeRequestCountArgs>(args?: Prisma.Subset<T, ShopFreeRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopFreeRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopFreeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopFreeRequestAggregateArgs>(args: Prisma.Subset<T, ShopFreeRequestAggregateArgs>): Prisma.PrismaPromise<GetShopFreeRequestAggregateType<T>>;
    /**
     * Group by ShopFreeRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFreeRequestGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopFreeRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopFreeRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopFreeRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopFreeRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopFreeRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopFreeRequest model
     */
    readonly fields: ShopFreeRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopFreeRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopFreeRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.ShopUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopUserDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopUserClient<runtime.Types.Result.GetResult<Prisma.$ShopUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopFreeRequest model
 */
export interface ShopFreeRequestFieldRefs {
    readonly id: Prisma.FieldRef<"ShopFreeRequest", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopFreeRequest", 'String'>;
    readonly userId: Prisma.FieldRef<"ShopFreeRequest", 'String'>;
    readonly requestText: Prisma.FieldRef<"ShopFreeRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ShopFreeRequest", 'DateTime'>;
}
/**
 * ShopFreeRequest findUnique
 */
export type ShopFreeRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter, which ShopFreeRequest to fetch.
     */
    where: Prisma.ShopFreeRequestWhereUniqueInput;
};
/**
 * ShopFreeRequest findUniqueOrThrow
 */
export type ShopFreeRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter, which ShopFreeRequest to fetch.
     */
    where: Prisma.ShopFreeRequestWhereUniqueInput;
};
/**
 * ShopFreeRequest findFirst
 */
export type ShopFreeRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter, which ShopFreeRequest to fetch.
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopFreeRequests to fetch.
     */
    orderBy?: Prisma.ShopFreeRequestOrderByWithRelationInput | Prisma.ShopFreeRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopFreeRequests.
     */
    cursor?: Prisma.ShopFreeRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopFreeRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopFreeRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopFreeRequests.
     */
    distinct?: Prisma.ShopFreeRequestScalarFieldEnum | Prisma.ShopFreeRequestScalarFieldEnum[];
};
/**
 * ShopFreeRequest findFirstOrThrow
 */
export type ShopFreeRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter, which ShopFreeRequest to fetch.
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopFreeRequests to fetch.
     */
    orderBy?: Prisma.ShopFreeRequestOrderByWithRelationInput | Prisma.ShopFreeRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopFreeRequests.
     */
    cursor?: Prisma.ShopFreeRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopFreeRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopFreeRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopFreeRequests.
     */
    distinct?: Prisma.ShopFreeRequestScalarFieldEnum | Prisma.ShopFreeRequestScalarFieldEnum[];
};
/**
 * ShopFreeRequest findMany
 */
export type ShopFreeRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter, which ShopFreeRequests to fetch.
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopFreeRequests to fetch.
     */
    orderBy?: Prisma.ShopFreeRequestOrderByWithRelationInput | Prisma.ShopFreeRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopFreeRequests.
     */
    cursor?: Prisma.ShopFreeRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopFreeRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopFreeRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopFreeRequests.
     */
    distinct?: Prisma.ShopFreeRequestScalarFieldEnum | Prisma.ShopFreeRequestScalarFieldEnum[];
};
/**
 * ShopFreeRequest create
 */
export type ShopFreeRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopFreeRequest.
     */
    data: Prisma.XOR<Prisma.ShopFreeRequestCreateInput, Prisma.ShopFreeRequestUncheckedCreateInput>;
};
/**
 * ShopFreeRequest createMany
 */
export type ShopFreeRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopFreeRequests.
     */
    data: Prisma.ShopFreeRequestCreateManyInput | Prisma.ShopFreeRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopFreeRequest createManyAndReturn
 */
export type ShopFreeRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopFreeRequests.
     */
    data: Prisma.ShopFreeRequestCreateManyInput | Prisma.ShopFreeRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopFreeRequest update
 */
export type ShopFreeRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopFreeRequest.
     */
    data: Prisma.XOR<Prisma.ShopFreeRequestUpdateInput, Prisma.ShopFreeRequestUncheckedUpdateInput>;
    /**
     * Choose, which ShopFreeRequest to update.
     */
    where: Prisma.ShopFreeRequestWhereUniqueInput;
};
/**
 * ShopFreeRequest updateMany
 */
export type ShopFreeRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopFreeRequests.
     */
    data: Prisma.XOR<Prisma.ShopFreeRequestUpdateManyMutationInput, Prisma.ShopFreeRequestUncheckedUpdateManyInput>;
    /**
     * Filter which ShopFreeRequests to update
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * Limit how many ShopFreeRequests to update.
     */
    limit?: number;
};
/**
 * ShopFreeRequest updateManyAndReturn
 */
export type ShopFreeRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * The data used to update ShopFreeRequests.
     */
    data: Prisma.XOR<Prisma.ShopFreeRequestUpdateManyMutationInput, Prisma.ShopFreeRequestUncheckedUpdateManyInput>;
    /**
     * Filter which ShopFreeRequests to update
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * Limit how many ShopFreeRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopFreeRequest upsert
 */
export type ShopFreeRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopFreeRequest to update in case it exists.
     */
    where: Prisma.ShopFreeRequestWhereUniqueInput;
    /**
     * In case the ShopFreeRequest found by the `where` argument doesn't exist, create a new ShopFreeRequest with this data.
     */
    create: Prisma.XOR<Prisma.ShopFreeRequestCreateInput, Prisma.ShopFreeRequestUncheckedCreateInput>;
    /**
     * In case the ShopFreeRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopFreeRequestUpdateInput, Prisma.ShopFreeRequestUncheckedUpdateInput>;
};
/**
 * ShopFreeRequest delete
 */
export type ShopFreeRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
    /**
     * Filter which ShopFreeRequest to delete.
     */
    where: Prisma.ShopFreeRequestWhereUniqueInput;
};
/**
 * ShopFreeRequest deleteMany
 */
export type ShopFreeRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopFreeRequests to delete
     */
    where?: Prisma.ShopFreeRequestWhereInput;
    /**
     * Limit how many ShopFreeRequests to delete.
     */
    limit?: number;
};
/**
 * ShopFreeRequest without action
 */
export type ShopFreeRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopFreeRequest
     */
    select?: Prisma.ShopFreeRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopFreeRequest
     */
    omit?: Prisma.ShopFreeRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopFreeRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopFreeRequest.d.ts.map