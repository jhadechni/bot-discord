import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopProductComponent
 *
 */
export type ShopProductComponentModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopProductComponentPayload>;
export type AggregateShopProductComponent = {
    _count: ShopProductComponentCountAggregateOutputType | null;
    _avg: ShopProductComponentAvgAggregateOutputType | null;
    _sum: ShopProductComponentSumAggregateOutputType | null;
    _min: ShopProductComponentMinAggregateOutputType | null;
    _max: ShopProductComponentMaxAggregateOutputType | null;
};
export type ShopProductComponentAvgAggregateOutputType = {
    quantityRequired: number | null;
};
export type ShopProductComponentSumAggregateOutputType = {
    quantityRequired: number | null;
};
export type ShopProductComponentMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    materialId: string | null;
    quantityRequired: number | null;
};
export type ShopProductComponentMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    materialId: string | null;
    quantityRequired: number | null;
};
export type ShopProductComponentCountAggregateOutputType = {
    id: number;
    productId: number;
    materialId: number;
    quantityRequired: number;
    _all: number;
};
export type ShopProductComponentAvgAggregateInputType = {
    quantityRequired?: true;
};
export type ShopProductComponentSumAggregateInputType = {
    quantityRequired?: true;
};
export type ShopProductComponentMinAggregateInputType = {
    id?: true;
    productId?: true;
    materialId?: true;
    quantityRequired?: true;
};
export type ShopProductComponentMaxAggregateInputType = {
    id?: true;
    productId?: true;
    materialId?: true;
    quantityRequired?: true;
};
export type ShopProductComponentCountAggregateInputType = {
    id?: true;
    productId?: true;
    materialId?: true;
    quantityRequired?: true;
    _all?: true;
};
export type ShopProductComponentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProductComponent to aggregate.
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductComponents to fetch.
     */
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductComponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductComponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopProductComponents
    **/
    _count?: true | ShopProductComponentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopProductComponentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopProductComponentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopProductComponentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopProductComponentMaxAggregateInputType;
};
export type GetShopProductComponentAggregateType<T extends ShopProductComponentAggregateArgs> = {
    [P in keyof T & keyof AggregateShopProductComponent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopProductComponent[P]> : Prisma.GetScalarType<T[P], AggregateShopProductComponent[P]>;
};
export type ShopProductComponentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductComponentWhereInput;
    orderBy?: Prisma.ShopProductComponentOrderByWithAggregationInput | Prisma.ShopProductComponentOrderByWithAggregationInput[];
    by: Prisma.ShopProductComponentScalarFieldEnum[] | Prisma.ShopProductComponentScalarFieldEnum;
    having?: Prisma.ShopProductComponentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopProductComponentCountAggregateInputType | true;
    _avg?: ShopProductComponentAvgAggregateInputType;
    _sum?: ShopProductComponentSumAggregateInputType;
    _min?: ShopProductComponentMinAggregateInputType;
    _max?: ShopProductComponentMaxAggregateInputType;
};
export type ShopProductComponentGroupByOutputType = {
    id: string;
    productId: string;
    materialId: string;
    quantityRequired: number;
    _count: ShopProductComponentCountAggregateOutputType | null;
    _avg: ShopProductComponentAvgAggregateOutputType | null;
    _sum: ShopProductComponentSumAggregateOutputType | null;
    _min: ShopProductComponentMinAggregateOutputType | null;
    _max: ShopProductComponentMaxAggregateOutputType | null;
};
export type GetShopProductComponentGroupByPayload<T extends ShopProductComponentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopProductComponentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopProductComponentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopProductComponentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopProductComponentGroupByOutputType[P]>;
}>>;
export type ShopProductComponentWhereInput = {
    AND?: Prisma.ShopProductComponentWhereInput | Prisma.ShopProductComponentWhereInput[];
    OR?: Prisma.ShopProductComponentWhereInput[];
    NOT?: Prisma.ShopProductComponentWhereInput | Prisma.ShopProductComponentWhereInput[];
    id?: Prisma.StringFilter<"ShopProductComponent"> | string;
    productId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    materialId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    quantityRequired?: Prisma.IntFilter<"ShopProductComponent"> | number;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    product?: Prisma.XOR<Prisma.ShopProductScalarRelationFilter, Prisma.ShopProductWhereInput>;
};
export type ShopProductComponentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantityRequired?: Prisma.SortOrder;
    material?: Prisma.ShopMaterialOrderByWithRelationInput;
    product?: Prisma.ShopProductOrderByWithRelationInput;
};
export type ShopProductComponentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId_materialId?: Prisma.ShopProductComponentProductIdMaterialIdCompoundUniqueInput;
    AND?: Prisma.ShopProductComponentWhereInput | Prisma.ShopProductComponentWhereInput[];
    OR?: Prisma.ShopProductComponentWhereInput[];
    NOT?: Prisma.ShopProductComponentWhereInput | Prisma.ShopProductComponentWhereInput[];
    productId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    materialId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    quantityRequired?: Prisma.IntFilter<"ShopProductComponent"> | number;
    material?: Prisma.XOR<Prisma.ShopMaterialScalarRelationFilter, Prisma.ShopMaterialWhereInput>;
    product?: Prisma.XOR<Prisma.ShopProductScalarRelationFilter, Prisma.ShopProductWhereInput>;
}, "id" | "productId_materialId">;
export type ShopProductComponentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantityRequired?: Prisma.SortOrder;
    _count?: Prisma.ShopProductComponentCountOrderByAggregateInput;
    _avg?: Prisma.ShopProductComponentAvgOrderByAggregateInput;
    _max?: Prisma.ShopProductComponentMaxOrderByAggregateInput;
    _min?: Prisma.ShopProductComponentMinOrderByAggregateInput;
    _sum?: Prisma.ShopProductComponentSumOrderByAggregateInput;
};
export type ShopProductComponentScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopProductComponentScalarWhereWithAggregatesInput | Prisma.ShopProductComponentScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopProductComponentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopProductComponentScalarWhereWithAggregatesInput | Prisma.ShopProductComponentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopProductComponent"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"ShopProductComponent"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"ShopProductComponent"> | string;
    quantityRequired?: Prisma.IntWithAggregatesFilter<"ShopProductComponent"> | number;
};
export type ShopProductComponentCreateInput = {
    id?: string;
    quantityRequired: number;
    material: Prisma.ShopMaterialCreateNestedOneWithoutComponentsInput;
    product: Prisma.ShopProductCreateNestedOneWithoutComponentsInput;
};
export type ShopProductComponentUncheckedCreateInput = {
    id?: string;
    productId: string;
    materialId: string;
    quantityRequired: number;
};
export type ShopProductComponentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutComponentsNestedInput;
    product?: Prisma.ShopProductUpdateOneRequiredWithoutComponentsNestedInput;
};
export type ShopProductComponentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentCreateManyInput = {
    id?: string;
    productId: string;
    materialId: string;
    quantityRequired: number;
};
export type ShopProductComponentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentListRelationFilter = {
    every?: Prisma.ShopProductComponentWhereInput;
    some?: Prisma.ShopProductComponentWhereInput;
    none?: Prisma.ShopProductComponentWhereInput;
};
export type ShopProductComponentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ShopProductComponentProductIdMaterialIdCompoundUniqueInput = {
    productId: string;
    materialId: string;
};
export type ShopProductComponentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantityRequired?: Prisma.SortOrder;
};
export type ShopProductComponentAvgOrderByAggregateInput = {
    quantityRequired?: Prisma.SortOrder;
};
export type ShopProductComponentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantityRequired?: Prisma.SortOrder;
};
export type ShopProductComponentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantityRequired?: Prisma.SortOrder;
};
export type ShopProductComponentSumOrderByAggregateInput = {
    quantityRequired?: Prisma.SortOrder;
};
export type ShopProductComponentCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput> | Prisma.ShopProductComponentCreateWithoutMaterialInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput | Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopProductComponentCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
};
export type ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput> | Prisma.ShopProductComponentCreateWithoutMaterialInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput | Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.ShopProductComponentCreateManyMaterialInputEnvelope;
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
};
export type ShopProductComponentUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput> | Prisma.ShopProductComponentCreateWithoutMaterialInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput | Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopProductComponentCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    disconnect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    delete?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    update?: Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopProductComponentUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopProductComponentUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
};
export type ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput> | Prisma.ShopProductComponentCreateWithoutMaterialInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput | Prisma.ShopProductComponentCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutMaterialInput | Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.ShopProductComponentCreateManyMaterialInputEnvelope;
    set?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    disconnect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    delete?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    update?: Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutMaterialInput | Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.ShopProductComponentUpdateManyWithWhereWithoutMaterialInput | Prisma.ShopProductComponentUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
};
export type ShopProductComponentCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput> | Prisma.ShopProductComponentCreateWithoutProductInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutProductInput | Prisma.ShopProductComponentCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopProductComponentCreateManyProductInputEnvelope;
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
};
export type ShopProductComponentUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput> | Prisma.ShopProductComponentCreateWithoutProductInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutProductInput | Prisma.ShopProductComponentCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ShopProductComponentCreateManyProductInputEnvelope;
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
};
export type ShopProductComponentUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput> | Prisma.ShopProductComponentCreateWithoutProductInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutProductInput | Prisma.ShopProductComponentCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopProductComponentCreateManyProductInputEnvelope;
    set?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    disconnect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    delete?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    update?: Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopProductComponentUpdateManyWithWhereWithoutProductInput | Prisma.ShopProductComponentUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
};
export type ShopProductComponentUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput> | Prisma.ShopProductComponentCreateWithoutProductInput[] | Prisma.ShopProductComponentUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ShopProductComponentCreateOrConnectWithoutProductInput | Prisma.ShopProductComponentCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutProductInput | Prisma.ShopProductComponentUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ShopProductComponentCreateManyProductInputEnvelope;
    set?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    disconnect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    delete?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    connect?: Prisma.ShopProductComponentWhereUniqueInput | Prisma.ShopProductComponentWhereUniqueInput[];
    update?: Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutProductInput | Prisma.ShopProductComponentUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ShopProductComponentUpdateManyWithWhereWithoutProductInput | Prisma.ShopProductComponentUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
};
export type ShopProductComponentCreateWithoutMaterialInput = {
    id?: string;
    quantityRequired: number;
    product: Prisma.ShopProductCreateNestedOneWithoutComponentsInput;
};
export type ShopProductComponentUncheckedCreateWithoutMaterialInput = {
    id?: string;
    productId: string;
    quantityRequired: number;
};
export type ShopProductComponentCreateOrConnectWithoutMaterialInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput>;
};
export type ShopProductComponentCreateManyMaterialInputEnvelope = {
    data: Prisma.ShopProductComponentCreateManyMaterialInput | Prisma.ShopProductComponentCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type ShopProductComponentUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductComponentUpdateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedCreateWithoutMaterialInput>;
};
export type ShopProductComponentUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateWithoutMaterialInput, Prisma.ShopProductComponentUncheckedUpdateWithoutMaterialInput>;
};
export type ShopProductComponentUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.ShopProductComponentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateManyMutationInput, Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialInput>;
};
export type ShopProductComponentScalarWhereInput = {
    AND?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
    OR?: Prisma.ShopProductComponentScalarWhereInput[];
    NOT?: Prisma.ShopProductComponentScalarWhereInput | Prisma.ShopProductComponentScalarWhereInput[];
    id?: Prisma.StringFilter<"ShopProductComponent"> | string;
    productId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    materialId?: Prisma.StringFilter<"ShopProductComponent"> | string;
    quantityRequired?: Prisma.IntFilter<"ShopProductComponent"> | number;
};
export type ShopProductComponentCreateWithoutProductInput = {
    id?: string;
    quantityRequired: number;
    material: Prisma.ShopMaterialCreateNestedOneWithoutComponentsInput;
};
export type ShopProductComponentUncheckedCreateWithoutProductInput = {
    id?: string;
    materialId: string;
    quantityRequired: number;
};
export type ShopProductComponentCreateOrConnectWithoutProductInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput>;
};
export type ShopProductComponentCreateManyProductInputEnvelope = {
    data: Prisma.ShopProductComponentCreateManyProductInput | Prisma.ShopProductComponentCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ShopProductComponentUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    update: Prisma.XOR<Prisma.ShopProductComponentUpdateWithoutProductInput, Prisma.ShopProductComponentUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ShopProductComponentCreateWithoutProductInput, Prisma.ShopProductComponentUncheckedCreateWithoutProductInput>;
};
export type ShopProductComponentUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ShopProductComponentWhereUniqueInput;
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateWithoutProductInput, Prisma.ShopProductComponentUncheckedUpdateWithoutProductInput>;
};
export type ShopProductComponentUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ShopProductComponentScalarWhereInput;
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateManyMutationInput, Prisma.ShopProductComponentUncheckedUpdateManyWithoutProductInput>;
};
export type ShopProductComponentCreateManyMaterialInput = {
    id?: string;
    productId: string;
    quantityRequired: number;
};
export type ShopProductComponentUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    product?: Prisma.ShopProductUpdateOneRequiredWithoutComponentsNestedInput;
};
export type ShopProductComponentUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentCreateManyProductInput = {
    id?: string;
    materialId: string;
    quantityRequired: number;
};
export type ShopProductComponentUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
    material?: Prisma.ShopMaterialUpdateOneRequiredWithoutComponentsNestedInput;
};
export type ShopProductComponentUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityRequired?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type ShopProductComponentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    materialId?: boolean;
    quantityRequired?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductComponent"]>;
export type ShopProductComponentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    materialId?: boolean;
    quantityRequired?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductComponent"]>;
export type ShopProductComponentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    materialId?: boolean;
    quantityRequired?: boolean;
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopProductComponent"]>;
export type ShopProductComponentSelectScalar = {
    id?: boolean;
    productId?: boolean;
    materialId?: boolean;
    quantityRequired?: boolean;
};
export type ShopProductComponentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "materialId" | "quantityRequired", ExtArgs["result"]["shopProductComponent"]>;
export type ShopProductComponentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
};
export type ShopProductComponentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
};
export type ShopProductComponentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    material?: boolean | Prisma.ShopMaterialDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ShopProductDefaultArgs<ExtArgs>;
};
export type $ShopProductComponentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopProductComponent";
    objects: {
        material: Prisma.$ShopMaterialPayload<ExtArgs>;
        product: Prisma.$ShopProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        materialId: string;
        quantityRequired: number;
    }, ExtArgs["result"]["shopProductComponent"]>;
    composites: {};
};
export type ShopProductComponentGetPayload<S extends boolean | null | undefined | ShopProductComponentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload, S>;
export type ShopProductComponentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopProductComponentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopProductComponentCountAggregateInputType | true;
};
export interface ShopProductComponentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopProductComponent'];
        meta: {
            name: 'ShopProductComponent';
        };
    };
    /**
     * Find zero or one ShopProductComponent that matches the filter.
     * @param {ShopProductComponentFindUniqueArgs} args - Arguments to find a ShopProductComponent
     * @example
     * // Get one ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopProductComponentFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopProductComponentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopProductComponent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopProductComponentFindUniqueOrThrowArgs} args - Arguments to find a ShopProductComponent
     * @example
     * // Get one ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopProductComponentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopProductComponentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProductComponent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentFindFirstArgs} args - Arguments to find a ShopProductComponent
     * @example
     * // Get one ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopProductComponentFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopProductComponent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentFindFirstOrThrowArgs} args - Arguments to find a ShopProductComponent
     * @example
     * // Get one ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopProductComponentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopProductComponents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopProductComponents
     * const shopProductComponents = await prisma.shopProductComponent.findMany()
     *
     * // Get first 10 ShopProductComponents
     * const shopProductComponents = await prisma.shopProductComponent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopProductComponentWithIdOnly = await prisma.shopProductComponent.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopProductComponentFindManyArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopProductComponent.
     * @param {ShopProductComponentCreateArgs} args - Arguments to create a ShopProductComponent.
     * @example
     * // Create one ShopProductComponent
     * const ShopProductComponent = await prisma.shopProductComponent.create({
     *   data: {
     *     // ... data to create a ShopProductComponent
     *   }
     * })
     *
     */
    create<T extends ShopProductComponentCreateArgs>(args: Prisma.SelectSubset<T, ShopProductComponentCreateArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopProductComponents.
     * @param {ShopProductComponentCreateManyArgs} args - Arguments to create many ShopProductComponents.
     * @example
     * // Create many ShopProductComponents
     * const shopProductComponent = await prisma.shopProductComponent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopProductComponentCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopProductComponents and returns the data saved in the database.
     * @param {ShopProductComponentCreateManyAndReturnArgs} args - Arguments to create many ShopProductComponents.
     * @example
     * // Create many ShopProductComponents
     * const shopProductComponent = await prisma.shopProductComponent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopProductComponents and only return the `id`
     * const shopProductComponentWithIdOnly = await prisma.shopProductComponent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopProductComponentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopProductComponent.
     * @param {ShopProductComponentDeleteArgs} args - Arguments to delete one ShopProductComponent.
     * @example
     * // Delete one ShopProductComponent
     * const ShopProductComponent = await prisma.shopProductComponent.delete({
     *   where: {
     *     // ... filter to delete one ShopProductComponent
     *   }
     * })
     *
     */
    delete<T extends ShopProductComponentDeleteArgs>(args: Prisma.SelectSubset<T, ShopProductComponentDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopProductComponent.
     * @param {ShopProductComponentUpdateArgs} args - Arguments to update one ShopProductComponent.
     * @example
     * // Update one ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopProductComponentUpdateArgs>(args: Prisma.SelectSubset<T, ShopProductComponentUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopProductComponents.
     * @param {ShopProductComponentDeleteManyArgs} args - Arguments to filter ShopProductComponents to delete.
     * @example
     * // Delete a few ShopProductComponents
     * const { count } = await prisma.shopProductComponent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopProductComponentDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopProductComponentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProductComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopProductComponents
     * const shopProductComponent = await prisma.shopProductComponent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopProductComponentUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopProductComponentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopProductComponents and returns the data updated in the database.
     * @param {ShopProductComponentUpdateManyAndReturnArgs} args - Arguments to update many ShopProductComponents.
     * @example
     * // Update many ShopProductComponents
     * const shopProductComponent = await prisma.shopProductComponent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopProductComponents and only return the `id`
     * const shopProductComponentWithIdOnly = await prisma.shopProductComponent.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopProductComponentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopProductComponentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopProductComponent.
     * @param {ShopProductComponentUpsertArgs} args - Arguments to update or create a ShopProductComponent.
     * @example
     * // Update or create a ShopProductComponent
     * const shopProductComponent = await prisma.shopProductComponent.upsert({
     *   create: {
     *     // ... data to create a ShopProductComponent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopProductComponent we want to update
     *   }
     * })
     */
    upsert<T extends ShopProductComponentUpsertArgs>(args: Prisma.SelectSubset<T, ShopProductComponentUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopProductComponentClient<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopProductComponents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentCountArgs} args - Arguments to filter ShopProductComponents to count.
     * @example
     * // Count the number of ShopProductComponents
     * const count = await prisma.shopProductComponent.count({
     *   where: {
     *     // ... the filter for the ShopProductComponents we want to count
     *   }
     * })
    **/
    count<T extends ShopProductComponentCountArgs>(args?: Prisma.Subset<T, ShopProductComponentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopProductComponentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopProductComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopProductComponentAggregateArgs>(args: Prisma.Subset<T, ShopProductComponentAggregateArgs>): Prisma.PrismaPromise<GetShopProductComponentAggregateType<T>>;
    /**
     * Group by ShopProductComponent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopProductComponentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopProductComponentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopProductComponentGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopProductComponentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopProductComponentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopProductComponentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopProductComponent model
     */
    readonly fields: ShopProductComponentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopProductComponent.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopProductComponentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    material<T extends Prisma.ShopMaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ShopProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ShopProductClient<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ShopProductComponent model
 */
export interface ShopProductComponentFieldRefs {
    readonly id: Prisma.FieldRef<"ShopProductComponent", 'String'>;
    readonly productId: Prisma.FieldRef<"ShopProductComponent", 'String'>;
    readonly materialId: Prisma.FieldRef<"ShopProductComponent", 'String'>;
    readonly quantityRequired: Prisma.FieldRef<"ShopProductComponent", 'Int'>;
}
/**
 * ShopProductComponent findUnique
 */
export type ShopProductComponentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProductComponent to fetch.
     */
    where: Prisma.ShopProductComponentWhereUniqueInput;
};
/**
 * ShopProductComponent findUniqueOrThrow
 */
export type ShopProductComponentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProductComponent to fetch.
     */
    where: Prisma.ShopProductComponentWhereUniqueInput;
};
/**
 * ShopProductComponent findFirst
 */
export type ShopProductComponentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProductComponent to fetch.
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductComponents to fetch.
     */
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProductComponents.
     */
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductComponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductComponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductComponents.
     */
    distinct?: Prisma.ShopProductComponentScalarFieldEnum | Prisma.ShopProductComponentScalarFieldEnum[];
};
/**
 * ShopProductComponent findFirstOrThrow
 */
export type ShopProductComponentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProductComponent to fetch.
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductComponents to fetch.
     */
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopProductComponents.
     */
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductComponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductComponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductComponents.
     */
    distinct?: Prisma.ShopProductComponentScalarFieldEnum | Prisma.ShopProductComponentScalarFieldEnum[];
};
/**
 * ShopProductComponent findMany
 */
export type ShopProductComponentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter, which ShopProductComponents to fetch.
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopProductComponents to fetch.
     */
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopProductComponents.
     */
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopProductComponents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopProductComponents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopProductComponents.
     */
    distinct?: Prisma.ShopProductComponentScalarFieldEnum | Prisma.ShopProductComponentScalarFieldEnum[];
};
/**
 * ShopProductComponent create
 */
export type ShopProductComponentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopProductComponent.
     */
    data: Prisma.XOR<Prisma.ShopProductComponentCreateInput, Prisma.ShopProductComponentUncheckedCreateInput>;
};
/**
 * ShopProductComponent createMany
 */
export type ShopProductComponentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopProductComponents.
     */
    data: Prisma.ShopProductComponentCreateManyInput | Prisma.ShopProductComponentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopProductComponent createManyAndReturn
 */
export type ShopProductComponentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopProductComponents.
     */
    data: Prisma.ShopProductComponentCreateManyInput | Prisma.ShopProductComponentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProductComponent update
 */
export type ShopProductComponentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopProductComponent.
     */
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateInput, Prisma.ShopProductComponentUncheckedUpdateInput>;
    /**
     * Choose, which ShopProductComponent to update.
     */
    where: Prisma.ShopProductComponentWhereUniqueInput;
};
/**
 * ShopProductComponent updateMany
 */
export type ShopProductComponentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopProductComponents.
     */
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateManyMutationInput, Prisma.ShopProductComponentUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProductComponents to update
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * Limit how many ShopProductComponents to update.
     */
    limit?: number;
};
/**
 * ShopProductComponent updateManyAndReturn
 */
export type ShopProductComponentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * The data used to update ShopProductComponents.
     */
    data: Prisma.XOR<Prisma.ShopProductComponentUpdateManyMutationInput, Prisma.ShopProductComponentUncheckedUpdateManyInput>;
    /**
     * Filter which ShopProductComponents to update
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * Limit how many ShopProductComponents to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ShopProductComponent upsert
 */
export type ShopProductComponentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopProductComponent to update in case it exists.
     */
    where: Prisma.ShopProductComponentWhereUniqueInput;
    /**
     * In case the ShopProductComponent found by the `where` argument doesn't exist, create a new ShopProductComponent with this data.
     */
    create: Prisma.XOR<Prisma.ShopProductComponentCreateInput, Prisma.ShopProductComponentUncheckedCreateInput>;
    /**
     * In case the ShopProductComponent was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopProductComponentUpdateInput, Prisma.ShopProductComponentUncheckedUpdateInput>;
};
/**
 * ShopProductComponent delete
 */
export type ShopProductComponentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
    /**
     * Filter which ShopProductComponent to delete.
     */
    where: Prisma.ShopProductComponentWhereUniqueInput;
};
/**
 * ShopProductComponent deleteMany
 */
export type ShopProductComponentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopProductComponents to delete
     */
    where?: Prisma.ShopProductComponentWhereInput;
    /**
     * Limit how many ShopProductComponents to delete.
     */
    limit?: number;
};
/**
 * ShopProductComponent without action
 */
export type ShopProductComponentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProductComponent
     */
    select?: Prisma.ShopProductComponentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProductComponent
     */
    omit?: Prisma.ShopProductComponentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductComponentInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopProductComponent.d.ts.map