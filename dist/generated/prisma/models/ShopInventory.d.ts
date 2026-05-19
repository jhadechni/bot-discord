import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopInventory
 *
 */
export type ShopInventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopInventoryPayload>;
export type AggregateShopInventory = {
    _count: ShopInventoryCountAggregateOutputType | null;
    _avg: ShopInventoryAvgAggregateOutputType | null;
    _sum: ShopInventorySumAggregateOutputType | null;
    _min: ShopInventoryMinAggregateOutputType | null;
    _max: ShopInventoryMaxAggregateOutputType | null;
};
export type ShopInventoryAvgAggregateOutputType = {
    currentStock: number | null;
    reservedStock: number | null;
    minStockAlert: number | null;
};
export type ShopInventorySumAggregateOutputType = {
    currentStock: number | null;
    reservedStock: number | null;
    minStockAlert: number | null;
};
export type ShopInventoryMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    currentStock: number | null;
    reservedStock: number | null;
    minStockAlert: number | null;
    updatedAt: Date | null;
};
export type ShopInventoryMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    materialId: string | null;
    currentStock: number | null;
    reservedStock: number | null;
    minStockAlert: number | null;
    updatedAt: Date | null;
};
export type ShopInventoryCountAggregateOutputType = {
    id: number;
    guildId: number;
    materialId: number;
    currentStock: number;
    reservedStock: number;
    minStockAlert: number;
    updatedAt: number;
    _all: number;
};
export type ShopInventoryAvgAggregateInputType = {
    currentStock?: true;
    reservedStock?: true;
    minStockAlert?: true;
};
export type ShopInventorySumAggregateInputType = {
    currentStock?: true;
    reservedStock?: true;
    minStockAlert?: true;
};
export type ShopInventoryMinAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    currentStock?: true;
    reservedStock?: true;
    minStockAlert?: true;
    updatedAt?: true;
};
export type ShopInventoryMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    currentStock?: true;
    reservedStock?: true;
    minStockAlert?: true;
    updatedAt?: true;
};
export type ShopInventoryCountAggregateInputType = {
    id?: true;
    guildId?: true;
    materialId?: true;
    currentStock?: true;
    reservedStock?: true;
    minStockAlert?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShopInventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopInventory to aggregate.
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventories to fetch.
     */
    orderBy?: Prisma.ShopInventoryOrderByWithRelationInput | Prisma.ShopInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopInventories
    **/
    _count?: true | ShopInventoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopInventoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopInventorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopInventoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopInventoryMaxAggregateInputType;
};
export type GetShopInventoryAggregateType<T extends ShopInventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateShopInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopInventory[P]> : Prisma.GetScalarType<T[P], AggregateShopInventory[P]>;
};
export type ShopInventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopInventoryWhereInput;
    orderBy?: Prisma.ShopInventoryOrderByWithAggregationInput | Prisma.ShopInventoryOrderByWithAggregationInput[];
    by: Prisma.ShopInventoryScalarFieldEnum[] | Prisma.ShopInventoryScalarFieldEnum;
    having?: Prisma.ShopInventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopInventoryCountAggregateInputType | true;
    _avg?: ShopInventoryAvgAggregateInputType;
    _sum?: ShopInventorySumAggregateInputType;
    _min?: ShopInventoryMinAggregateInputType;
    _max?: ShopInventoryMaxAggregateInputType;
};
export type ShopInventoryGroupByOutputType = {
    id: string;
    guildId: string;
    materialId: string;
    currentStock: number;
    reservedStock: number;
    minStockAlert: number;
    updatedAt: Date;
    _count: ShopInventoryCountAggregateOutputType | null;
    _avg: ShopInventoryAvgAggregateOutputType | null;
    _sum: ShopInventorySumAggregateOutputType | null;
    _min: ShopInventoryMinAggregateOutputType | null;
    _max: ShopInventoryMaxAggregateOutputType | null;
};
export type GetShopInventoryGroupByPayload<T extends ShopInventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopInventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopInventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopInventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopInventoryGroupByOutputType[P]>;
}>>;
export type ShopInventoryWhereInput = {
    AND?: Prisma.ShopInventoryWhereInput | Prisma.ShopInventoryWhereInput[];
    OR?: Prisma.ShopInventoryWhereInput[];
    NOT?: Prisma.ShopInventoryWhereInput | Prisma.ShopInventoryWhereInput[];
    id?: Prisma.StringFilter<"ShopInventory"> | string;
    guildId?: Prisma.StringFilter<"ShopInventory"> | string;
    materialId?: Prisma.StringFilter<"ShopInventory"> | string;
    currentStock?: Prisma.IntFilter<"ShopInventory"> | number;
    reservedStock?: Prisma.IntFilter<"ShopInventory"> | number;
    minStockAlert?: Prisma.IntFilter<"ShopInventory"> | number;
    updatedAt?: Prisma.DateTimeFilter<"ShopInventory"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
};
export type ShopInventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    material?: Prisma.ShopMaterialOrderByWithRelationInput;
};
export type ShopInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    materialId?: string;
    AND?: Prisma.ShopInventoryWhereInput | Prisma.ShopInventoryWhereInput[];
    OR?: Prisma.ShopInventoryWhereInput[];
    NOT?: Prisma.ShopInventoryWhereInput | Prisma.ShopInventoryWhereInput[];
    guildId?: Prisma.StringFilter<"ShopInventory"> | string;
    currentStock?: Prisma.IntFilter<"ShopInventory"> | number;
    reservedStock?: Prisma.IntFilter<"ShopInventory"> | number;
    minStockAlert?: Prisma.IntFilter<"ShopInventory"> | number;
    updatedAt?: Prisma.DateTimeFilter<"ShopInventory"> | Date | string;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
}, "id" | "materialId">;
export type ShopInventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopInventoryCountOrderByAggregateInput;
    _avg?: Prisma.ShopInventoryAvgOrderByAggregateInput;
    _max?: Prisma.ShopInventoryMaxOrderByAggregateInput;
    _min?: Prisma.ShopInventoryMinOrderByAggregateInput;
    _sum?: Prisma.ShopInventorySumOrderByAggregateInput;
};
export type ShopInventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopInventoryScalarWhereWithAggregatesInput | Prisma.ShopInventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopInventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopInventoryScalarWhereWithAggregatesInput | Prisma.ShopInventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopInventory"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopInventory"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"ShopInventory"> | string;
    currentStock?: Prisma.IntWithAggregatesFilter<"ShopInventory"> | number;
    reservedStock?: Prisma.IntWithAggregatesFilter<"ShopInventory"> | number;
    minStockAlert?: Prisma.IntWithAggregatesFilter<"ShopInventory"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopInventory"> | Date | string;
};
export type ShopInventoryCreateInput = {
    id?: string;
    guildId: string;
    currentStock?: number;
    reservedStock?: number;
    minStockAlert?: number;
    updatedAt?: Date | string;
    material: Prisma.ShopMaterialCreateNestedOneWithoutInventoryInput;
};
export type ShopInventoryUncheckedCreateInput = {
    id?: string;
    guildId: string;
    materialId: string;
    currentStock?: number;
    reservedStock?: number;
    minStockAlert?: number;
    updatedAt?: Date | string;
};
export type ShopInventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutInventoryNestedInput;
};
export type ShopInventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryCreateManyInput = {
    id?: string;
    guildId: string;
    materialId: string;
    currentStock?: number;
    reservedStock?: number;
    minStockAlert?: number;
    updatedAt?: Date | string;
};
export type ShopInventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryNullableScalarRelationFilter = {
    is?: Prisma.ShopInventoryWhereInput | null;
    isNot?: Prisma.ShopInventoryWhereInput | null;
};
export type ShopInventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopInventoryAvgOrderByAggregateInput = {
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
};
export type ShopInventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopInventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopInventorySumOrderByAggregateInput = {
    currentStock?: Prisma.SortOrder;
    reservedStock?: Prisma.SortOrder;
    minStockAlert?: Prisma.SortOrder;
};
export type ShopInventoryCreateNestedOneWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
    connectOrCreate?: Prisma.ShopInventoryCreateOrConnectWithoutMaterialInput;
    connect?: Prisma.ShopInventoryWhereUniqueInput;
};
export type ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
    connectOrCreate?: Prisma.ShopInventoryCreateOrConnectWithoutMaterialInput;
    connect?: Prisma.ShopInventoryWhereUniqueInput;
};
export type ShopInventoryUpdateOneWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
    connectOrCreate?: Prisma.ShopInventoryCreateOrConnectWithoutMaterialInput;
    upsert?: Prisma.ShopInventoryUpsertWithoutMaterialInput;
    disconnect?: Prisma.ShopInventoryWhereInput | boolean;
    delete?: Prisma.ShopInventoryWhereInput | boolean;
    connect?: Prisma.ShopInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopInventoryUpdateToOneWithWhereWithoutMaterialInput, Prisma.ShopInventoryUpdateWithoutMaterialInput>, Prisma.ShopInventoryUncheckedUpdateWithoutMaterialInput>;
};
export type ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
    connectOrCreate?: Prisma.ShopInventoryCreateOrConnectWithoutMaterialInput;
    upsert?: Prisma.ShopInventoryUpsertWithoutMaterialInput;
    disconnect?: Prisma.ShopInventoryWhereInput | boolean;
    delete?: Prisma.ShopInventoryWhereInput | boolean;
    connect?: Prisma.ShopInventoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopInventoryUpdateToOneWithWhereWithoutMaterialInput, Prisma.ShopInventoryUpdateWithoutMaterialInput>, Prisma.ShopInventoryUncheckedUpdateWithoutMaterialInput>;
};
export type ShopInventoryCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    currentStock?: number;
    reservedStock?: number;
    minStockAlert?: number;
    updatedAt?: Date | string;
};
export type ShopInventoryUncheckedCreateWithoutMaterialInput = {
    id?: string;
    guildId: string;
    currentStock?: number;
    reservedStock?: number;
    minStockAlert?: number;
    updatedAt?: Date | string;
};
export type ShopInventoryCreateOrConnectWithoutMaterialInput = {
    where: Prisma.ShopInventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
};
export type ShopInventoryUpsertWithoutMaterialInput = {
    update: Prisma.XOR<Prisma.ShopInventoryUpdateWithoutMaterialInput, Prisma.ShopInventoryUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.ShopInventoryCreateWithoutMaterialInput, Prisma.ShopInventoryUncheckedCreateWithoutMaterialInput>;
    where?: Prisma.ShopInventoryWhereInput;
};
export type ShopInventoryUpdateToOneWithWhereWithoutMaterialInput = {
    where?: Prisma.ShopInventoryWhereInput;
    data: Prisma.XOR<Prisma.ShopInventoryUpdateWithoutMaterialInput, Prisma.ShopInventoryUncheckedUpdateWithoutMaterialInput>;
};
export type ShopInventoryUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventoryUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    currentStock?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedStock?: Prisma.IntFieldUpdateOperationsInput | number;
    minStockAlert?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopInventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    currentStock?: boolean;
    reservedStock?: boolean;
    minStockAlert?: boolean;
    updatedAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventory"]>;
export type ShopInventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    currentStock?: boolean;
    reservedStock?: boolean;
    minStockAlert?: boolean;
    updatedAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventory"]>;
export type ShopInventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    currentStock?: boolean;
    reservedStock?: boolean;
    minStockAlert?: boolean;
    updatedAt?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopInventory"]>;
export type ShopInventorySelectScalar = {
    id?: boolean;
    guildId?: boolean;
    materialId?: boolean;
    currentStock?: boolean;
    reservedStock?: boolean;
    minStockAlert?: boolean;
    updatedAt?: boolean;
};
export type ShopInventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "materialId" | "currentStock" | "reservedStock" | "minStockAlert" | "updatedAt", ExtArgs["result"]["shopInventory"]>;
export type ShopInventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
};
export type ShopInventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
};
export type ShopInventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
};
export type $ShopInventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopInventory";
    objects: {
        material: Prisma.$ShopMaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        materialId: string;
        currentStock: number;
        reservedStock: number;
        minStockAlert: number;
        updatedAt: Date;
    }, ExtArgs["result"]["shopInventory"]>;
    composites: {};
};
export type ShopInventoryGetPayload<S extends boolean | null | undefined | ShopInventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload, S>;
export type ShopInventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopInventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopInventoryCountAggregateInputType | true;
};
export interface ShopInventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopInventory'];
        meta: {
            name: 'ShopInventory';
        };
    };
    /**
     * Find zero or one ShopInventory that matches the filter.
     * @param {ShopInventoryFindUniqueArgs} args - Arguments to find a ShopInventory
     * @example
     * // Get one ShopInventory
     * const shopInventory = await prisma.shopInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopInventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopInventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopInventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopInventoryFindUniqueOrThrowArgs} args - Arguments to find a ShopInventory
     * @example
     * // Get one ShopInventory
     * const shopInventory = await prisma.shopInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopInventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopInventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryFindFirstArgs} args - Arguments to find a ShopInventory
     * @example
     * // Get one ShopInventory
     * const shopInventory = await prisma.shopInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopInventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopInventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryFindFirstOrThrowArgs} args - Arguments to find a ShopInventory
     * @example
     * // Get one ShopInventory
     * const shopInventory = await prisma.shopInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopInventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopInventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopInventories
     * const shopInventories = await prisma.shopInventory.findMany()
     *
     * // Get first 10 ShopInventories
     * const shopInventories = await prisma.shopInventory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopInventoryWithIdOnly = await prisma.shopInventory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopInventoryFindManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopInventory.
     * @param {ShopInventoryCreateArgs} args - Arguments to create a ShopInventory.
     * @example
     * // Create one ShopInventory
     * const ShopInventory = await prisma.shopInventory.create({
     *   data: {
     *     // ... data to create a ShopInventory
     *   }
     * })
     *
     */
    create<T extends ShopInventoryCreateArgs>(args: Prisma.SelectSubset<T, ShopInventoryCreateArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopInventories.
     * @param {ShopInventoryCreateManyArgs} args - Arguments to create many ShopInventories.
     * @example
     * // Create many ShopInventories
     * const shopInventory = await prisma.shopInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopInventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopInventories and returns the data saved in the database.
     * @param {ShopInventoryCreateManyAndReturnArgs} args - Arguments to create many ShopInventories.
     * @example
     * // Create many ShopInventories
     * const shopInventory = await prisma.shopInventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopInventories and only return the `id`
     * const shopInventoryWithIdOnly = await prisma.shopInventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopInventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopInventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopInventory.
     * @param {ShopInventoryDeleteArgs} args - Arguments to delete one ShopInventory.
     * @example
     * // Delete one ShopInventory
     * const ShopInventory = await prisma.shopInventory.delete({
     *   where: {
     *     // ... filter to delete one ShopInventory
     *   }
     * })
     *
     */
    delete<T extends ShopInventoryDeleteArgs>(args: Prisma.SelectSubset<T, ShopInventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopInventory.
     * @param {ShopInventoryUpdateArgs} args - Arguments to update one ShopInventory.
     * @example
     * // Update one ShopInventory
     * const shopInventory = await prisma.shopInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopInventoryUpdateArgs>(args: Prisma.SelectSubset<T, ShopInventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopInventories.
     * @param {ShopInventoryDeleteManyArgs} args - Arguments to filter ShopInventories to delete.
     * @example
     * // Delete a few ShopInventories
     * const { count } = await prisma.shopInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopInventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopInventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopInventories
     * const shopInventory = await prisma.shopInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopInventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopInventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopInventories and returns the data updated in the database.
     * @param {ShopInventoryUpdateManyAndReturnArgs} args - Arguments to update many ShopInventories.
     * @example
     * // Update many ShopInventories
     * const shopInventory = await prisma.shopInventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopInventories and only return the `id`
     * const shopInventoryWithIdOnly = await prisma.shopInventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopInventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopInventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopInventory.
     * @param {ShopInventoryUpsertArgs} args - Arguments to update or create a ShopInventory.
     * @example
     * // Update or create a ShopInventory
     * const shopInventory = await prisma.shopInventory.upsert({
     *   create: {
     *     // ... data to create a ShopInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopInventory we want to update
     *   }
     * })
     */
    upsert<T extends ShopInventoryUpsertArgs>(args: Prisma.SelectSubset<T, ShopInventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryCountArgs} args - Arguments to filter ShopInventories to count.
     * @example
     * // Count the number of ShopInventories
     * const count = await prisma.shopInventory.count({
     *   where: {
     *     // ... the filter for the ShopInventories we want to count
     *   }
     * })
    **/
    count<T extends ShopInventoryCountArgs>(args?: Prisma.Subset<T, ShopInventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopInventoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopInventoryAggregateArgs>(args: Prisma.Subset<T, ShopInventoryAggregateArgs>): Prisma.PrismaPromise<GetShopInventoryAggregateType<T>>;
    /**
     * Group by ShopInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopInventoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopInventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopInventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopInventoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopInventory model
     */
    readonly fields: ShopInventoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopInventory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopInventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.ShopMaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopInventory model
 */
export interface ShopInventoryFieldRefs {
    readonly id: Prisma.FieldRef<"ShopInventory", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopInventory", 'String'>;
    readonly materialId: Prisma.FieldRef<"ShopInventory", 'String'>;
    readonly currentStock: Prisma.FieldRef<"ShopInventory", 'Int'>;
    readonly reservedStock: Prisma.FieldRef<"ShopInventory", 'Int'>;
    readonly minStockAlert: Prisma.FieldRef<"ShopInventory", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"ShopInventory", 'DateTime'>;
}
/**
 * ShopInventory findUnique
 */
export type ShopInventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventory to fetch.
     */
    where: Prisma.ShopInventoryWhereUniqueInput;
};
/**
 * ShopInventory findUniqueOrThrow
 */
export type ShopInventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventory to fetch.
     */
    where: Prisma.ShopInventoryWhereUniqueInput;
};
/**
 * ShopInventory findFirst
 */
export type ShopInventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventory to fetch.
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventories to fetch.
     */
    orderBy?: Prisma.ShopInventoryOrderByWithRelationInput | Prisma.ShopInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopInventories.
     */
    cursor?: Prisma.ShopInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventories.
     */
    distinct?: Prisma.ShopInventoryScalarFieldEnum | Prisma.ShopInventoryScalarFieldEnum[];
};
/**
 * ShopInventory findFirstOrThrow
 */
export type ShopInventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventory to fetch.
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventories to fetch.
     */
    orderBy?: Prisma.ShopInventoryOrderByWithRelationInput | Prisma.ShopInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopInventories.
     */
    cursor?: Prisma.ShopInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventories.
     */
    distinct?: Prisma.ShopInventoryScalarFieldEnum | Prisma.ShopInventoryScalarFieldEnum[];
};
/**
 * ShopInventory findMany
 */
export type ShopInventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter, which ShopInventories to fetch.
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopInventories to fetch.
     */
    orderBy?: Prisma.ShopInventoryOrderByWithRelationInput | Prisma.ShopInventoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopInventories.
     */
    cursor?: Prisma.ShopInventoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopInventories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopInventories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopInventories.
     */
    distinct?: Prisma.ShopInventoryScalarFieldEnum | Prisma.ShopInventoryScalarFieldEnum[];
};
/**
 * ShopInventory create
 */
export type ShopInventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopInventory.
     */
    data: Prisma.XOR<Prisma.ShopInventoryCreateInput, Prisma.ShopInventoryUncheckedCreateInput>;
};
/**
 * ShopInventory createMany
 */
export type ShopInventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopInventories.
     */
    data: Prisma.ShopInventoryCreateManyInput | Prisma.ShopInventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopInventory createManyAndReturn
 */
export type ShopInventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopInventories.
     */
    data: Prisma.ShopInventoryCreateManyInput | Prisma.ShopInventoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopInventory update
 */
export type ShopInventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopInventory.
     */
    data: Prisma.XOR<Prisma.ShopInventoryUpdateInput, Prisma.ShopInventoryUncheckedUpdateInput>;
    /**
     * Choose, which ShopInventory to update.
     */
    where: Prisma.ShopInventoryWhereUniqueInput;
};
/**
 * ShopInventory updateMany
 */
export type ShopInventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopInventories.
     */
    data: Prisma.XOR<Prisma.ShopInventoryUpdateManyMutationInput, Prisma.ShopInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ShopInventories to update
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * Limit how many ShopInventories to update.
     */
    limit?: number;
};
/**
 * ShopInventory updateManyAndReturn
 */
export type ShopInventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * The data used to update ShopInventories.
     */
    data: Prisma.XOR<Prisma.ShopInventoryUpdateManyMutationInput, Prisma.ShopInventoryUncheckedUpdateManyInput>;
    /**
     * Filter which ShopInventories to update
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * Limit how many ShopInventories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopInventory upsert
 */
export type ShopInventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopInventory to update in case it exists.
     */
    where: Prisma.ShopInventoryWhereUniqueInput;
    /**
     * In case the ShopInventory found by the `where` argument doesn't exist, create a new ShopInventory with this data.
     */
    create: Prisma.XOR<Prisma.ShopInventoryCreateInput, Prisma.ShopInventoryUncheckedCreateInput>;
    /**
     * In case the ShopInventory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopInventoryUpdateInput, Prisma.ShopInventoryUncheckedUpdateInput>;
};
/**
 * ShopInventory delete
 */
export type ShopInventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
    /**
     * Filter which ShopInventory to delete.
     */
    where: Prisma.ShopInventoryWhereUniqueInput;
};
/**
 * ShopInventory deleteMany
 */
export type ShopInventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopInventories to delete
     */
    where?: Prisma.ShopInventoryWhereInput;
    /**
     * Limit how many ShopInventories to delete.
     */
    limit?: number;
};
/**
 * ShopInventory without action
 */
export type ShopInventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventory
     */
    select?: Prisma.ShopInventorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventory
     */
    omit?: Prisma.ShopInventoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopInventory.d.ts.map