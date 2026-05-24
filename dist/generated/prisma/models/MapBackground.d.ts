import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model MapBackground
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type MapBackgroundModel = runtime.Types.Result.DefaultSelection<Prisma.$MapBackgroundPayload>;
export type AggregateMapBackground = {
    _count: MapBackgroundCountAggregateOutputType | null;
    _avg: MapBackgroundAvgAggregateOutputType | null;
    _sum: MapBackgroundSumAggregateOutputType | null;
    _min: MapBackgroundMinAggregateOutputType | null;
    _max: MapBackgroundMaxAggregateOutputType | null;
};
export type MapBackgroundAvgAggregateOutputType = {
    x1: number | null;
    z1: number | null;
    x2: number | null;
    z2: number | null;
};
export type MapBackgroundSumAggregateOutputType = {
    x1: number | null;
    z1: number | null;
    x2: number | null;
    z2: number | null;
};
export type MapBackgroundMinAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    x1: number | null;
    z1: number | null;
    x2: number | null;
    z2: number | null;
};
export type MapBackgroundMaxAggregateOutputType = {
    id: string | null;
    imageUrl: string | null;
    x1: number | null;
    z1: number | null;
    x2: number | null;
    z2: number | null;
};
export type MapBackgroundCountAggregateOutputType = {
    id: number;
    imageUrl: number;
    x1: number;
    z1: number;
    x2: number;
    z2: number;
    _all: number;
};
export type MapBackgroundAvgAggregateInputType = {
    x1?: true;
    z1?: true;
    x2?: true;
    z2?: true;
};
export type MapBackgroundSumAggregateInputType = {
    x1?: true;
    z1?: true;
    x2?: true;
    z2?: true;
};
export type MapBackgroundMinAggregateInputType = {
    id?: true;
    imageUrl?: true;
    x1?: true;
    z1?: true;
    x2?: true;
    z2?: true;
};
export type MapBackgroundMaxAggregateInputType = {
    id?: true;
    imageUrl?: true;
    x1?: true;
    z1?: true;
    x2?: true;
    z2?: true;
};
export type MapBackgroundCountAggregateInputType = {
    id?: true;
    imageUrl?: true;
    x1?: true;
    z1?: true;
    x2?: true;
    z2?: true;
    _all?: true;
};
export type MapBackgroundAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MapBackground to aggregate.
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapBackgrounds to fetch.
     */
    orderBy?: Prisma.MapBackgroundOrderByWithRelationInput | Prisma.MapBackgroundOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MapBackgroundWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapBackgrounds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapBackgrounds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MapBackgrounds
    **/
    _count?: true | MapBackgroundCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MapBackgroundAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MapBackgroundSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MapBackgroundMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MapBackgroundMaxAggregateInputType;
};
export type GetMapBackgroundAggregateType<T extends MapBackgroundAggregateArgs> = {
    [P in keyof T & keyof AggregateMapBackground]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMapBackground[P]> : Prisma.GetScalarType<T[P], AggregateMapBackground[P]>;
};
export type MapBackgroundGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MapBackgroundWhereInput;
    orderBy?: Prisma.MapBackgroundOrderByWithAggregationInput | Prisma.MapBackgroundOrderByWithAggregationInput[];
    by: Prisma.MapBackgroundScalarFieldEnum[] | Prisma.MapBackgroundScalarFieldEnum;
    having?: Prisma.MapBackgroundScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MapBackgroundCountAggregateInputType | true;
    _avg?: MapBackgroundAvgAggregateInputType;
    _sum?: MapBackgroundSumAggregateInputType;
    _min?: MapBackgroundMinAggregateInputType;
    _max?: MapBackgroundMaxAggregateInputType;
};
export type MapBackgroundGroupByOutputType = {
    id: string;
    imageUrl: string | null;
    x1: number;
    z1: number;
    x2: number;
    z2: number;
    _count: MapBackgroundCountAggregateOutputType | null;
    _avg: MapBackgroundAvgAggregateOutputType | null;
    _sum: MapBackgroundSumAggregateOutputType | null;
    _min: MapBackgroundMinAggregateOutputType | null;
    _max: MapBackgroundMaxAggregateOutputType | null;
};
export type GetMapBackgroundGroupByPayload<T extends MapBackgroundGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MapBackgroundGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MapBackgroundGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MapBackgroundGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MapBackgroundGroupByOutputType[P]>;
}>>;
export type MapBackgroundWhereInput = {
    AND?: Prisma.MapBackgroundWhereInput | Prisma.MapBackgroundWhereInput[];
    OR?: Prisma.MapBackgroundWhereInput[];
    NOT?: Prisma.MapBackgroundWhereInput | Prisma.MapBackgroundWhereInput[];
    id?: Prisma.StringFilter<"MapBackground"> | string;
    imageUrl?: Prisma.StringNullableFilter<"MapBackground"> | string | null;
    x1?: Prisma.IntFilter<"MapBackground"> | number;
    z1?: Prisma.IntFilter<"MapBackground"> | number;
    x2?: Prisma.IntFilter<"MapBackground"> | number;
    z2?: Prisma.IntFilter<"MapBackground"> | number;
};
export type MapBackgroundOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MapBackgroundWhereInput | Prisma.MapBackgroundWhereInput[];
    OR?: Prisma.MapBackgroundWhereInput[];
    NOT?: Prisma.MapBackgroundWhereInput | Prisma.MapBackgroundWhereInput[];
    imageUrl?: Prisma.StringNullableFilter<"MapBackground"> | string | null;
    x1?: Prisma.IntFilter<"MapBackground"> | number;
    z1?: Prisma.IntFilter<"MapBackground"> | number;
    x2?: Prisma.IntFilter<"MapBackground"> | number;
    z2?: Prisma.IntFilter<"MapBackground"> | number;
}, "id">;
export type MapBackgroundOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
    _count?: Prisma.MapBackgroundCountOrderByAggregateInput;
    _avg?: Prisma.MapBackgroundAvgOrderByAggregateInput;
    _max?: Prisma.MapBackgroundMaxOrderByAggregateInput;
    _min?: Prisma.MapBackgroundMinOrderByAggregateInput;
    _sum?: Prisma.MapBackgroundSumOrderByAggregateInput;
};
export type MapBackgroundScalarWhereWithAggregatesInput = {
    AND?: Prisma.MapBackgroundScalarWhereWithAggregatesInput | Prisma.MapBackgroundScalarWhereWithAggregatesInput[];
    OR?: Prisma.MapBackgroundScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MapBackgroundScalarWhereWithAggregatesInput | Prisma.MapBackgroundScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MapBackground"> | string;
    imageUrl?: Prisma.StringNullableWithAggregatesFilter<"MapBackground"> | string | null;
    x1?: Prisma.IntWithAggregatesFilter<"MapBackground"> | number;
    z1?: Prisma.IntWithAggregatesFilter<"MapBackground"> | number;
    x2?: Prisma.IntWithAggregatesFilter<"MapBackground"> | number;
    z2?: Prisma.IntWithAggregatesFilter<"MapBackground"> | number;
};
export type MapBackgroundCreateInput = {
    id: string;
    imageUrl?: string | null;
    x1?: number;
    z1?: number;
    x2?: number;
    z2?: number;
};
export type MapBackgroundUncheckedCreateInput = {
    id: string;
    imageUrl?: string | null;
    x1?: number;
    z1?: number;
    x2?: number;
    z2?: number;
};
export type MapBackgroundUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    x1?: Prisma.IntFieldUpdateOperationsInput | number;
    z1?: Prisma.IntFieldUpdateOperationsInput | number;
    x2?: Prisma.IntFieldUpdateOperationsInput | number;
    z2?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MapBackgroundUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    x1?: Prisma.IntFieldUpdateOperationsInput | number;
    z1?: Prisma.IntFieldUpdateOperationsInput | number;
    x2?: Prisma.IntFieldUpdateOperationsInput | number;
    z2?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MapBackgroundCreateManyInput = {
    id: string;
    imageUrl?: string | null;
    x1?: number;
    z1?: number;
    x2?: number;
    z2?: number;
};
export type MapBackgroundUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    x1?: Prisma.IntFieldUpdateOperationsInput | number;
    z1?: Prisma.IntFieldUpdateOperationsInput | number;
    x2?: Prisma.IntFieldUpdateOperationsInput | number;
    z2?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MapBackgroundUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    x1?: Prisma.IntFieldUpdateOperationsInput | number;
    z1?: Prisma.IntFieldUpdateOperationsInput | number;
    x2?: Prisma.IntFieldUpdateOperationsInput | number;
    z2?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type MapBackgroundCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundAvgOrderByAggregateInput = {
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundSumOrderByAggregateInput = {
    x1?: Prisma.SortOrder;
    z1?: Prisma.SortOrder;
    x2?: Prisma.SortOrder;
    z2?: Prisma.SortOrder;
};
export type MapBackgroundSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    x1?: boolean;
    z1?: boolean;
    x2?: boolean;
    z2?: boolean;
}, ExtArgs["result"]["mapBackground"]>;
export type MapBackgroundSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    x1?: boolean;
    z1?: boolean;
    x2?: boolean;
    z2?: boolean;
}, ExtArgs["result"]["mapBackground"]>;
export type MapBackgroundSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    imageUrl?: boolean;
    x1?: boolean;
    z1?: boolean;
    x2?: boolean;
    z2?: boolean;
}, ExtArgs["result"]["mapBackground"]>;
export type MapBackgroundSelectScalar = {
    id?: boolean;
    imageUrl?: boolean;
    x1?: boolean;
    z1?: boolean;
    x2?: boolean;
    z2?: boolean;
};
export type MapBackgroundOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "imageUrl" | "x1" | "z1" | "x2" | "z2", ExtArgs["result"]["mapBackground"]>;
export type $MapBackgroundPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MapBackground";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        imageUrl: string | null;
        x1: number;
        z1: number;
        x2: number;
        z2: number;
    }, ExtArgs["result"]["mapBackground"]>;
    composites: {};
};
export type MapBackgroundGetPayload<S extends boolean | null | undefined | MapBackgroundDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload, S>;
export type MapBackgroundCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MapBackgroundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MapBackgroundCountAggregateInputType | true;
};
export interface MapBackgroundDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MapBackground'];
        meta: {
            name: 'MapBackground';
        };
    };
    /**
     * Find zero or one MapBackground that matches the filter.
     * @param {MapBackgroundFindUniqueArgs} args - Arguments to find a MapBackground
     * @example
     * // Get one MapBackground
     * const mapBackground = await prisma.mapBackground.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MapBackgroundFindUniqueArgs>(args: Prisma.SelectSubset<T, MapBackgroundFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MapBackground that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MapBackgroundFindUniqueOrThrowArgs} args - Arguments to find a MapBackground
     * @example
     * // Get one MapBackground
     * const mapBackground = await prisma.mapBackground.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MapBackgroundFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MapBackgroundFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MapBackground that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundFindFirstArgs} args - Arguments to find a MapBackground
     * @example
     * // Get one MapBackground
     * const mapBackground = await prisma.mapBackground.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MapBackgroundFindFirstArgs>(args?: Prisma.SelectSubset<T, MapBackgroundFindFirstArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MapBackground that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundFindFirstOrThrowArgs} args - Arguments to find a MapBackground
     * @example
     * // Get one MapBackground
     * const mapBackground = await prisma.mapBackground.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MapBackgroundFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MapBackgroundFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MapBackgrounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MapBackgrounds
     * const mapBackgrounds = await prisma.mapBackground.findMany()
     *
     * // Get first 10 MapBackgrounds
     * const mapBackgrounds = await prisma.mapBackground.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mapBackgroundWithIdOnly = await prisma.mapBackground.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MapBackgroundFindManyArgs>(args?: Prisma.SelectSubset<T, MapBackgroundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MapBackground.
     * @param {MapBackgroundCreateArgs} args - Arguments to create a MapBackground.
     * @example
     * // Create one MapBackground
     * const MapBackground = await prisma.mapBackground.create({
     *   data: {
     *     // ... data to create a MapBackground
     *   }
     * })
     *
     */
    create<T extends MapBackgroundCreateArgs>(args: Prisma.SelectSubset<T, MapBackgroundCreateArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MapBackgrounds.
     * @param {MapBackgroundCreateManyArgs} args - Arguments to create many MapBackgrounds.
     * @example
     * // Create many MapBackgrounds
     * const mapBackground = await prisma.mapBackground.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MapBackgroundCreateManyArgs>(args?: Prisma.SelectSubset<T, MapBackgroundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MapBackgrounds and returns the data saved in the database.
     * @param {MapBackgroundCreateManyAndReturnArgs} args - Arguments to create many MapBackgrounds.
     * @example
     * // Create many MapBackgrounds
     * const mapBackground = await prisma.mapBackground.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MapBackgrounds and only return the `id`
     * const mapBackgroundWithIdOnly = await prisma.mapBackground.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MapBackgroundCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MapBackgroundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MapBackground.
     * @param {MapBackgroundDeleteArgs} args - Arguments to delete one MapBackground.
     * @example
     * // Delete one MapBackground
     * const MapBackground = await prisma.mapBackground.delete({
     *   where: {
     *     // ... filter to delete one MapBackground
     *   }
     * })
     *
     */
    delete<T extends MapBackgroundDeleteArgs>(args: Prisma.SelectSubset<T, MapBackgroundDeleteArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MapBackground.
     * @param {MapBackgroundUpdateArgs} args - Arguments to update one MapBackground.
     * @example
     * // Update one MapBackground
     * const mapBackground = await prisma.mapBackground.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MapBackgroundUpdateArgs>(args: Prisma.SelectSubset<T, MapBackgroundUpdateArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MapBackgrounds.
     * @param {MapBackgroundDeleteManyArgs} args - Arguments to filter MapBackgrounds to delete.
     * @example
     * // Delete a few MapBackgrounds
     * const { count } = await prisma.mapBackground.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MapBackgroundDeleteManyArgs>(args?: Prisma.SelectSubset<T, MapBackgroundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MapBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MapBackgrounds
     * const mapBackground = await prisma.mapBackground.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MapBackgroundUpdateManyArgs>(args: Prisma.SelectSubset<T, MapBackgroundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MapBackgrounds and returns the data updated in the database.
     * @param {MapBackgroundUpdateManyAndReturnArgs} args - Arguments to update many MapBackgrounds.
     * @example
     * // Update many MapBackgrounds
     * const mapBackground = await prisma.mapBackground.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MapBackgrounds and only return the `id`
     * const mapBackgroundWithIdOnly = await prisma.mapBackground.updateManyAndReturn({
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
    updateManyAndReturn<T extends MapBackgroundUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MapBackgroundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MapBackground.
     * @param {MapBackgroundUpsertArgs} args - Arguments to update or create a MapBackground.
     * @example
     * // Update or create a MapBackground
     * const mapBackground = await prisma.mapBackground.upsert({
     *   create: {
     *     // ... data to create a MapBackground
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MapBackground we want to update
     *   }
     * })
     */
    upsert<T extends MapBackgroundUpsertArgs>(args: Prisma.SelectSubset<T, MapBackgroundUpsertArgs<ExtArgs>>): Prisma.Prisma__MapBackgroundClient<runtime.Types.Result.GetResult<Prisma.$MapBackgroundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MapBackgrounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundCountArgs} args - Arguments to filter MapBackgrounds to count.
     * @example
     * // Count the number of MapBackgrounds
     * const count = await prisma.mapBackground.count({
     *   where: {
     *     // ... the filter for the MapBackgrounds we want to count
     *   }
     * })
    **/
    count<T extends MapBackgroundCountArgs>(args?: Prisma.Subset<T, MapBackgroundCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MapBackgroundCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MapBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MapBackgroundAggregateArgs>(args: Prisma.Subset<T, MapBackgroundAggregateArgs>): Prisma.PrismaPromise<GetMapBackgroundAggregateType<T>>;
    /**
     * Group by MapBackground.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MapBackgroundGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MapBackgroundGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MapBackgroundGroupByArgs['orderBy'];
    } : {
        orderBy?: MapBackgroundGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MapBackgroundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMapBackgroundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MapBackground model
     */
    readonly fields: MapBackgroundFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MapBackground.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MapBackgroundClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the MapBackground model
 */
export interface MapBackgroundFieldRefs {
    readonly id: Prisma.FieldRef<"MapBackground", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"MapBackground", 'String'>;
    readonly x1: Prisma.FieldRef<"MapBackground", 'Int'>;
    readonly z1: Prisma.FieldRef<"MapBackground", 'Int'>;
    readonly x2: Prisma.FieldRef<"MapBackground", 'Int'>;
    readonly z2: Prisma.FieldRef<"MapBackground", 'Int'>;
}
/**
 * MapBackground findUnique
 */
export type MapBackgroundFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter, which MapBackground to fetch.
     */
    where: Prisma.MapBackgroundWhereUniqueInput;
};
/**
 * MapBackground findUniqueOrThrow
 */
export type MapBackgroundFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter, which MapBackground to fetch.
     */
    where: Prisma.MapBackgroundWhereUniqueInput;
};
/**
 * MapBackground findFirst
 */
export type MapBackgroundFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter, which MapBackground to fetch.
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapBackgrounds to fetch.
     */
    orderBy?: Prisma.MapBackgroundOrderByWithRelationInput | Prisma.MapBackgroundOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapBackgrounds.
     */
    cursor?: Prisma.MapBackgroundWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapBackgrounds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapBackgrounds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapBackgrounds.
     */
    distinct?: Prisma.MapBackgroundScalarFieldEnum | Prisma.MapBackgroundScalarFieldEnum[];
};
/**
 * MapBackground findFirstOrThrow
 */
export type MapBackgroundFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter, which MapBackground to fetch.
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapBackgrounds to fetch.
     */
    orderBy?: Prisma.MapBackgroundOrderByWithRelationInput | Prisma.MapBackgroundOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MapBackgrounds.
     */
    cursor?: Prisma.MapBackgroundWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapBackgrounds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapBackgrounds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapBackgrounds.
     */
    distinct?: Prisma.MapBackgroundScalarFieldEnum | Prisma.MapBackgroundScalarFieldEnum[];
};
/**
 * MapBackground findMany
 */
export type MapBackgroundFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter, which MapBackgrounds to fetch.
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MapBackgrounds to fetch.
     */
    orderBy?: Prisma.MapBackgroundOrderByWithRelationInput | Prisma.MapBackgroundOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MapBackgrounds.
     */
    cursor?: Prisma.MapBackgroundWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MapBackgrounds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MapBackgrounds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MapBackgrounds.
     */
    distinct?: Prisma.MapBackgroundScalarFieldEnum | Prisma.MapBackgroundScalarFieldEnum[];
};
/**
 * MapBackground create
 */
export type MapBackgroundCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * The data needed to create a MapBackground.
     */
    data: Prisma.XOR<Prisma.MapBackgroundCreateInput, Prisma.MapBackgroundUncheckedCreateInput>;
};
/**
 * MapBackground createMany
 */
export type MapBackgroundCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MapBackgrounds.
     */
    data: Prisma.MapBackgroundCreateManyInput | Prisma.MapBackgroundCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MapBackground createManyAndReturn
 */
export type MapBackgroundCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * The data used to create many MapBackgrounds.
     */
    data: Prisma.MapBackgroundCreateManyInput | Prisma.MapBackgroundCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MapBackground update
 */
export type MapBackgroundUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * The data needed to update a MapBackground.
     */
    data: Prisma.XOR<Prisma.MapBackgroundUpdateInput, Prisma.MapBackgroundUncheckedUpdateInput>;
    /**
     * Choose, which MapBackground to update.
     */
    where: Prisma.MapBackgroundWhereUniqueInput;
};
/**
 * MapBackground updateMany
 */
export type MapBackgroundUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MapBackgrounds.
     */
    data: Prisma.XOR<Prisma.MapBackgroundUpdateManyMutationInput, Prisma.MapBackgroundUncheckedUpdateManyInput>;
    /**
     * Filter which MapBackgrounds to update
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * Limit how many MapBackgrounds to update.
     */
    limit?: number;
};
/**
 * MapBackground updateManyAndReturn
 */
export type MapBackgroundUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * The data used to update MapBackgrounds.
     */
    data: Prisma.XOR<Prisma.MapBackgroundUpdateManyMutationInput, Prisma.MapBackgroundUncheckedUpdateManyInput>;
    /**
     * Filter which MapBackgrounds to update
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * Limit how many MapBackgrounds to update.
     */
    limit?: number;
};
/**
 * MapBackground upsert
 */
export type MapBackgroundUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * The filter to search for the MapBackground to update in case it exists.
     */
    where: Prisma.MapBackgroundWhereUniqueInput;
    /**
     * In case the MapBackground found by the `where` argument doesn't exist, create a new MapBackground with this data.
     */
    create: Prisma.XOR<Prisma.MapBackgroundCreateInput, Prisma.MapBackgroundUncheckedCreateInput>;
    /**
     * In case the MapBackground was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MapBackgroundUpdateInput, Prisma.MapBackgroundUncheckedUpdateInput>;
};
/**
 * MapBackground delete
 */
export type MapBackgroundDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
    /**
     * Filter which MapBackground to delete.
     */
    where: Prisma.MapBackgroundWhereUniqueInput;
};
/**
 * MapBackground deleteMany
 */
export type MapBackgroundDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MapBackgrounds to delete
     */
    where?: Prisma.MapBackgroundWhereInput;
    /**
     * Limit how many MapBackgrounds to delete.
     */
    limit?: number;
};
/**
 * MapBackground without action
 */
export type MapBackgroundDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MapBackground
     */
    select?: Prisma.MapBackgroundSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MapBackground
     */
    omit?: Prisma.MapBackgroundOmit<ExtArgs> | null;
};
//# sourceMappingURL=MapBackground.d.ts.map