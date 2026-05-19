import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ShopMaterial
 *
 */
export type ShopMaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$ShopMaterialPayload>;
export type AggregateShopMaterial = {
    _count: ShopMaterialCountAggregateOutputType | null;
    _avg: ShopMaterialAvgAggregateOutputType | null;
    _sum: ShopMaterialSumAggregateOutputType | null;
    _min: ShopMaterialMinAggregateOutputType | null;
    _max: ShopMaterialMaxAggregateOutputType | null;
};
export type ShopMaterialAvgAggregateOutputType = {
    stackSize: number | null;
};
export type ShopMaterialSumAggregateOutputType = {
    stackSize: number | null;
};
export type ShopMaterialMinAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    baseUnit: string | null;
    stackSize: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopMaterialMaxAggregateOutputType = {
    id: string | null;
    guildId: string | null;
    name: string | null;
    baseUnit: string | null;
    stackSize: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ShopMaterialCountAggregateOutputType = {
    id: number;
    guildId: number;
    name: number;
    baseUnit: number;
    stackSize: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ShopMaterialAvgAggregateInputType = {
    stackSize?: true;
};
export type ShopMaterialSumAggregateInputType = {
    stackSize?: true;
};
export type ShopMaterialMinAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    baseUnit?: true;
    stackSize?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopMaterialMaxAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    baseUnit?: true;
    stackSize?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ShopMaterialCountAggregateInputType = {
    id?: true;
    guildId?: true;
    name?: true;
    baseUnit?: true;
    stackSize?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ShopMaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopMaterial to aggregate.
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopMaterials to fetch.
     */
    orderBy?: Prisma.ShopMaterialOrderByWithRelationInput | Prisma.ShopMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ShopMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ShopMaterials
    **/
    _count?: true | ShopMaterialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ShopMaterialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ShopMaterialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ShopMaterialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaterialMaxAggregateInputType;
};
export type GetShopMaterialAggregateType<T extends ShopMaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateShopMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateShopMaterial[P]> : Prisma.GetScalarType<T[P], AggregateShopMaterial[P]>;
};
export type ShopMaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopMaterialWhereInput;
    orderBy?: Prisma.ShopMaterialOrderByWithAggregationInput | Prisma.ShopMaterialOrderByWithAggregationInput[];
    by: Prisma.ShopMaterialScalarFieldEnum[] | Prisma.ShopMaterialScalarFieldEnum;
    having?: Prisma.ShopMaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ShopMaterialCountAggregateInputType | true;
    _avg?: ShopMaterialAvgAggregateInputType;
    _sum?: ShopMaterialSumAggregateInputType;
    _min?: ShopMaterialMinAggregateInputType;
    _max?: ShopMaterialMaxAggregateInputType;
};
export type ShopMaterialGroupByOutputType = {
    id: string;
    guildId: string;
    name: string;
    baseUnit: string;
    stackSize: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ShopMaterialCountAggregateOutputType | null;
    _avg: ShopMaterialAvgAggregateOutputType | null;
    _sum: ShopMaterialSumAggregateOutputType | null;
    _min: ShopMaterialMinAggregateOutputType | null;
    _max: ShopMaterialMaxAggregateOutputType | null;
};
export type GetShopMaterialGroupByPayload<T extends ShopMaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ShopMaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ShopMaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ShopMaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ShopMaterialGroupByOutputType[P]>;
}>>;
export type ShopMaterialWhereInput = {
    AND?: Prisma.ShopMaterialWhereInput | Prisma.ShopMaterialWhereInput[];
    OR?: Prisma.ShopMaterialWhereInput[];
    NOT?: Prisma.ShopMaterialWhereInput | Prisma.ShopMaterialWhereInput[];
    id?: Prisma.StringFilter<"ShopMaterial"> | string;
    guildId?: Prisma.StringFilter<"ShopMaterial"> | string;
    name?: Prisma.StringFilter<"ShopMaterial"> | string;
    baseUnit?: Prisma.StringFilter<"ShopMaterial"> | string;
    stackSize?: Prisma.IntFilter<"ShopMaterial"> | number;
    isActive?: Prisma.BoolFilter<"ShopMaterial"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopMaterial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopMaterial"> | Date | string;
    inventory?: Prisma.XOR<Prisma.ShopInventoryNullableScalarRelationFilter, Prisma.ShopInventoryWhereInput> | null;
    components?: Prisma.ShopProductComponentListRelationFilter;
    directProducts?: Prisma.ShopProductListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    withdrawals?: Prisma.ShopWithdrawalListRelationFilter;
};
export type ShopMaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseUnit?: Prisma.SortOrder;
    stackSize?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    inventory?: Prisma.ShopInventoryOrderByWithRelationInput;
    components?: Prisma.ShopProductComponentOrderByRelationAggregateInput;
    directProducts?: Prisma.ShopProductOrderByRelationAggregateInput;
    movements?: Prisma.ShopInventoryMovementOrderByRelationAggregateInput;
    withdrawals?: Prisma.ShopWithdrawalOrderByRelationAggregateInput;
};
export type ShopMaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    guildId_name?: Prisma.ShopMaterialGuildIdNameCompoundUniqueInput;
    AND?: Prisma.ShopMaterialWhereInput | Prisma.ShopMaterialWhereInput[];
    OR?: Prisma.ShopMaterialWhereInput[];
    NOT?: Prisma.ShopMaterialWhereInput | Prisma.ShopMaterialWhereInput[];
    guildId?: Prisma.StringFilter<"ShopMaterial"> | string;
    name?: Prisma.StringFilter<"ShopMaterial"> | string;
    baseUnit?: Prisma.StringFilter<"ShopMaterial"> | string;
    stackSize?: Prisma.IntFilter<"ShopMaterial"> | number;
    isActive?: Prisma.BoolFilter<"ShopMaterial"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"ShopMaterial"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ShopMaterial"> | Date | string;
    inventory?: Prisma.XOR<Prisma.ShopInventoryNullableScalarRelationFilter, Prisma.ShopInventoryWhereInput> | null;
    components?: Prisma.ShopProductComponentListRelationFilter;
    directProducts?: Prisma.ShopProductListRelationFilter;
    movements?: Prisma.ShopInventoryMovementListRelationFilter;
    withdrawals?: Prisma.ShopWithdrawalListRelationFilter;
}, "id" | "guildId_name">;
export type ShopMaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseUnit?: Prisma.SortOrder;
    stackSize?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ShopMaterialCountOrderByAggregateInput;
    _avg?: Prisma.ShopMaterialAvgOrderByAggregateInput;
    _max?: Prisma.ShopMaterialMaxOrderByAggregateInput;
    _min?: Prisma.ShopMaterialMinOrderByAggregateInput;
    _sum?: Prisma.ShopMaterialSumOrderByAggregateInput;
};
export type ShopMaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.ShopMaterialScalarWhereWithAggregatesInput | Prisma.ShopMaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.ShopMaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ShopMaterialScalarWhereWithAggregatesInput | Prisma.ShopMaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ShopMaterial"> | string;
    guildId?: Prisma.StringWithAggregatesFilter<"ShopMaterial"> | string;
    name?: Prisma.StringWithAggregatesFilter<"ShopMaterial"> | string;
    baseUnit?: Prisma.StringWithAggregatesFilter<"ShopMaterial"> | string;
    stackSize?: Prisma.IntWithAggregatesFilter<"ShopMaterial"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"ShopMaterial"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ShopMaterial"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ShopMaterial"> | Date | string;
};
export type ShopMaterialCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialCreateManyInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ShopMaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopMaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ShopMaterialGuildIdNameCompoundUniqueInput = {
    guildId: string;
    name: string;
};
export type ShopMaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseUnit?: Prisma.SortOrder;
    stackSize?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopMaterialAvgOrderByAggregateInput = {
    stackSize?: Prisma.SortOrder;
};
export type ShopMaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseUnit?: Prisma.SortOrder;
    stackSize?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopMaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    guildId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    baseUnit?: Prisma.SortOrder;
    stackSize?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ShopMaterialSumOrderByAggregateInput = {
    stackSize?: Prisma.SortOrder;
};
export type ShopMaterialScalarRelationFilter = {
    is?: Prisma.ShopMaterialWhereInput;
    isNot?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialNullableScalarRelationFilter = {
    is?: Prisma.ShopMaterialWhereInput | null;
    isNot?: Prisma.ShopMaterialWhereInput | null;
};
export type ShopMaterialCreateNestedOneWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutInventoryInput, Prisma.ShopMaterialUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutInventoryInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
};
export type ShopMaterialUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutInventoryInput, Prisma.ShopMaterialUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutInventoryInput;
    upsert?: Prisma.ShopMaterialUpsertWithoutInventoryInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopMaterialUpdateToOneWithWhereWithoutInventoryInput, Prisma.ShopMaterialUpdateWithoutInventoryInput>, Prisma.ShopMaterialUncheckedUpdateWithoutInventoryInput>;
};
export type ShopMaterialCreateNestedOneWithoutDirectProductsInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedCreateWithoutDirectProductsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutDirectProductsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
};
export type ShopMaterialUpdateOneWithoutDirectProductsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedCreateWithoutDirectProductsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutDirectProductsInput;
    upsert?: Prisma.ShopMaterialUpsertWithoutDirectProductsInput;
    disconnect?: Prisma.ShopMaterialWhereInput | boolean;
    delete?: Prisma.ShopMaterialWhereInput | boolean;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopMaterialUpdateToOneWithWhereWithoutDirectProductsInput, Prisma.ShopMaterialUpdateWithoutDirectProductsInput>, Prisma.ShopMaterialUncheckedUpdateWithoutDirectProductsInput>;
};
export type ShopMaterialCreateNestedOneWithoutComponentsInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutComponentsInput, Prisma.ShopMaterialUncheckedCreateWithoutComponentsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutComponentsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
};
export type ShopMaterialUpdateOneRequiredWithoutComponentsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutComponentsInput, Prisma.ShopMaterialUncheckedCreateWithoutComponentsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutComponentsInput;
    upsert?: Prisma.ShopMaterialUpsertWithoutComponentsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopMaterialUpdateToOneWithWhereWithoutComponentsInput, Prisma.ShopMaterialUpdateWithoutComponentsInput>, Prisma.ShopMaterialUncheckedUpdateWithoutComponentsInput>;
};
export type ShopMaterialCreateNestedOneWithoutMovementsInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutMovementsInput, Prisma.ShopMaterialUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutMovementsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
};
export type ShopMaterialUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutMovementsInput, Prisma.ShopMaterialUncheckedCreateWithoutMovementsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutMovementsInput;
    upsert?: Prisma.ShopMaterialUpsertWithoutMovementsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopMaterialUpdateToOneWithWhereWithoutMovementsInput, Prisma.ShopMaterialUpdateWithoutMovementsInput>, Prisma.ShopMaterialUncheckedUpdateWithoutMovementsInput>;
};
export type ShopMaterialCreateNestedOneWithoutWithdrawalsInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedCreateWithoutWithdrawalsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutWithdrawalsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
};
export type ShopMaterialUpdateOneRequiredWithoutWithdrawalsNestedInput = {
    create?: Prisma.XOR<Prisma.ShopMaterialCreateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedCreateWithoutWithdrawalsInput>;
    connectOrCreate?: Prisma.ShopMaterialCreateOrConnectWithoutWithdrawalsInput;
    upsert?: Prisma.ShopMaterialUpsertWithoutWithdrawalsInput;
    connect?: Prisma.ShopMaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ShopMaterialUpdateToOneWithWhereWithoutWithdrawalsInput, Prisma.ShopMaterialUpdateWithoutWithdrawalsInput>, Prisma.ShopMaterialUncheckedUpdateWithoutWithdrawalsInput>;
};
export type ShopMaterialCreateWithoutInventoryInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateWithoutInventoryInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialCreateOrConnectWithoutInventoryInput = {
    where: Prisma.ShopMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutInventoryInput, Prisma.ShopMaterialUncheckedCreateWithoutInventoryInput>;
};
export type ShopMaterialUpsertWithoutInventoryInput = {
    update: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutInventoryInput, Prisma.ShopMaterialUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutInventoryInput, Prisma.ShopMaterialUncheckedCreateWithoutInventoryInput>;
    where?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.ShopMaterialWhereInput;
    data: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutInventoryInput, Prisma.ShopMaterialUncheckedUpdateWithoutInventoryInput>;
};
export type ShopMaterialUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    components?: Prisma.ShopProductComponentUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialCreateWithoutDirectProductsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutMaterialInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateWithoutDirectProductsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialCreateOrConnectWithoutDirectProductsInput = {
    where: Prisma.ShopMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedCreateWithoutDirectProductsInput>;
};
export type ShopMaterialUpsertWithoutDirectProductsInput = {
    update: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedUpdateWithoutDirectProductsInput>;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedCreateWithoutDirectProductsInput>;
    where?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialUpdateToOneWithWhereWithoutDirectProductsInput = {
    where?: Prisma.ShopMaterialWhereInput;
    data: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutDirectProductsInput, Prisma.ShopMaterialUncheckedUpdateWithoutDirectProductsInput>;
};
export type ShopMaterialUpdateWithoutDirectProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateWithoutDirectProductsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialCreateWithoutComponentsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryCreateNestedOneWithoutMaterialInput;
    directProducts?: Prisma.ShopProductCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateWithoutComponentsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput;
    directProducts?: Prisma.ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialCreateOrConnectWithoutComponentsInput = {
    where: Prisma.ShopMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutComponentsInput, Prisma.ShopMaterialUncheckedCreateWithoutComponentsInput>;
};
export type ShopMaterialUpsertWithoutComponentsInput = {
    update: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutComponentsInput, Prisma.ShopMaterialUncheckedUpdateWithoutComponentsInput>;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutComponentsInput, Prisma.ShopMaterialUncheckedCreateWithoutComponentsInput>;
    where?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialUpdateToOneWithWhereWithoutComponentsInput = {
    where?: Prisma.ShopMaterialWhereInput;
    data: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutComponentsInput, Prisma.ShopMaterialUncheckedUpdateWithoutComponentsInput>;
};
export type ShopMaterialUpdateWithoutComponentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUpdateOneWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateWithoutComponentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductCreateNestedManyWithoutBaseMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateWithoutMovementsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialCreateOrConnectWithoutMovementsInput = {
    where: Prisma.ShopMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutMovementsInput, Prisma.ShopMaterialUncheckedCreateWithoutMovementsInput>;
};
export type ShopMaterialUpsertWithoutMovementsInput = {
    update: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutMovementsInput, Prisma.ShopMaterialUncheckedUpdateWithoutMovementsInput>;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutMovementsInput, Prisma.ShopMaterialUncheckedCreateWithoutMovementsInput>;
    where?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialUpdateToOneWithWhereWithoutMovementsInput = {
    where?: Prisma.ShopMaterialWhereInput;
    data: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutMovementsInput, Prisma.ShopMaterialUncheckedUpdateWithoutMovementsInput>;
};
export type ShopMaterialUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUpdateManyWithoutBaseMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateWithoutMovementsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput;
    withdrawals?: Prisma.ShopWithdrawalUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialCreateWithoutWithdrawalsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialUncheckedCreateWithoutWithdrawalsInput = {
    id?: string;
    guildId: string;
    name: string;
    baseUnit?: string;
    stackSize?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.ShopInventoryUncheckedCreateNestedOneWithoutMaterialInput;
    components?: Prisma.ShopProductComponentUncheckedCreateNestedManyWithoutMaterialInput;
    directProducts?: Prisma.ShopProductUncheckedCreateNestedManyWithoutBaseMaterialInput;
    movements?: Prisma.ShopInventoryMovementUncheckedCreateNestedManyWithoutMaterialInput;
};
export type ShopMaterialCreateOrConnectWithoutWithdrawalsInput = {
    where: Prisma.ShopMaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedCreateWithoutWithdrawalsInput>;
};
export type ShopMaterialUpsertWithoutWithdrawalsInput = {
    update: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedUpdateWithoutWithdrawalsInput>;
    create: Prisma.XOR<Prisma.ShopMaterialCreateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedCreateWithoutWithdrawalsInput>;
    where?: Prisma.ShopMaterialWhereInput;
};
export type ShopMaterialUpdateToOneWithWhereWithoutWithdrawalsInput = {
    where?: Prisma.ShopMaterialWhereInput;
    data: Prisma.XOR<Prisma.ShopMaterialUpdateWithoutWithdrawalsInput, Prisma.ShopMaterialUncheckedUpdateWithoutWithdrawalsInput>;
};
export type ShopMaterialUpdateWithoutWithdrawalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUpdateManyWithoutMaterialNestedInput;
};
export type ShopMaterialUncheckedUpdateWithoutWithdrawalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    guildId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    baseUnit?: Prisma.StringFieldUpdateOperationsInput | string;
    stackSize?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.ShopInventoryUncheckedUpdateOneWithoutMaterialNestedInput;
    components?: Prisma.ShopProductComponentUncheckedUpdateManyWithoutMaterialNestedInput;
    directProducts?: Prisma.ShopProductUncheckedUpdateManyWithoutBaseMaterialNestedInput;
    movements?: Prisma.ShopInventoryMovementUncheckedUpdateManyWithoutMaterialNestedInput;
};
/**
 * Count Type ShopMaterialCountOutputType
 */
export type ShopMaterialCountOutputType = {
    components: number;
    directProducts: number;
    movements: number;
    withdrawals: number;
};
export type ShopMaterialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    components?: boolean | ShopMaterialCountOutputTypeCountComponentsArgs;
    directProducts?: boolean | ShopMaterialCountOutputTypeCountDirectProductsArgs;
    movements?: boolean | ShopMaterialCountOutputTypeCountMovementsArgs;
    withdrawals?: boolean | ShopMaterialCountOutputTypeCountWithdrawalsArgs;
};
/**
 * ShopMaterialCountOutputType without action
 */
export type ShopMaterialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterialCountOutputType
     */
    select?: Prisma.ShopMaterialCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ShopMaterialCountOutputType without action
 */
export type ShopMaterialCountOutputTypeCountComponentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductComponentWhereInput;
};
/**
 * ShopMaterialCountOutputType without action
 */
export type ShopMaterialCountOutputTypeCountDirectProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopProductWhereInput;
};
/**
 * ShopMaterialCountOutputType without action
 */
export type ShopMaterialCountOutputTypeCountMovementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopInventoryMovementWhereInput;
};
/**
 * ShopMaterialCountOutputType without action
 */
export type ShopMaterialCountOutputTypeCountWithdrawalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ShopWithdrawalWhereInput;
};
export type ShopMaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    baseUnit?: boolean;
    stackSize?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    inventory?: boolean | Prisma.ShopMaterial$inventoryArgs<ExtArgs>;
    components?: boolean | Prisma.ShopMaterial$componentsArgs<ExtArgs>;
    directProducts?: boolean | Prisma.ShopMaterial$directProductsArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopMaterial$movementsArgs<ExtArgs>;
    withdrawals?: boolean | Prisma.ShopMaterial$withdrawalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopMaterialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["shopMaterial"]>;
export type ShopMaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    baseUnit?: boolean;
    stackSize?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopMaterial"]>;
export type ShopMaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    baseUnit?: boolean;
    stackSize?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["shopMaterial"]>;
export type ShopMaterialSelectScalar = {
    id?: boolean;
    guildId?: boolean;
    name?: boolean;
    baseUnit?: boolean;
    stackSize?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ShopMaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "guildId" | "name" | "baseUnit" | "stackSize" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["shopMaterial"]>;
export type ShopMaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | Prisma.ShopMaterial$inventoryArgs<ExtArgs>;
    components?: boolean | Prisma.ShopMaterial$componentsArgs<ExtArgs>;
    directProducts?: boolean | Prisma.ShopMaterial$directProductsArgs<ExtArgs>;
    movements?: boolean | Prisma.ShopMaterial$movementsArgs<ExtArgs>;
    withdrawals?: boolean | Prisma.ShopMaterial$withdrawalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ShopMaterialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ShopMaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ShopMaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ShopMaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ShopMaterial";
    objects: {
        inventory: Prisma.$ShopInventoryPayload<ExtArgs> | null;
        components: Prisma.$ShopProductComponentPayload<ExtArgs>[];
        directProducts: Prisma.$ShopProductPayload<ExtArgs>[];
        movements: Prisma.$ShopInventoryMovementPayload<ExtArgs>[];
        withdrawals: Prisma.$ShopWithdrawalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        guildId: string;
        name: string;
        baseUnit: string;
        stackSize: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["shopMaterial"]>;
    composites: {};
};
export type ShopMaterialGetPayload<S extends boolean | null | undefined | ShopMaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload, S>;
export type ShopMaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ShopMaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ShopMaterialCountAggregateInputType | true;
};
export interface ShopMaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ShopMaterial'];
        meta: {
            name: 'ShopMaterial';
        };
    };
    /**
     * Find zero or one ShopMaterial that matches the filter.
     * @param {ShopMaterialFindUniqueArgs} args - Arguments to find a ShopMaterial
     * @example
     * // Get one ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopMaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, ShopMaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ShopMaterial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopMaterialFindUniqueOrThrowArgs} args - Arguments to find a ShopMaterial
     * @example
     * // Get one ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopMaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ShopMaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopMaterial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialFindFirstArgs} args - Arguments to find a ShopMaterial
     * @example
     * // Get one ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopMaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, ShopMaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ShopMaterial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialFindFirstOrThrowArgs} args - Arguments to find a ShopMaterial
     * @example
     * // Get one ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopMaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ShopMaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ShopMaterials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShopMaterials
     * const shopMaterials = await prisma.shopMaterial.findMany()
     *
     * // Get first 10 ShopMaterials
     * const shopMaterials = await prisma.shopMaterial.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const shopMaterialWithIdOnly = await prisma.shopMaterial.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ShopMaterialFindManyArgs>(args?: Prisma.SelectSubset<T, ShopMaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ShopMaterial.
     * @param {ShopMaterialCreateArgs} args - Arguments to create a ShopMaterial.
     * @example
     * // Create one ShopMaterial
     * const ShopMaterial = await prisma.shopMaterial.create({
     *   data: {
     *     // ... data to create a ShopMaterial
     *   }
     * })
     *
     */
    create<T extends ShopMaterialCreateArgs>(args: Prisma.SelectSubset<T, ShopMaterialCreateArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ShopMaterials.
     * @param {ShopMaterialCreateManyArgs} args - Arguments to create many ShopMaterials.
     * @example
     * // Create many ShopMaterials
     * const shopMaterial = await prisma.shopMaterial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ShopMaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, ShopMaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ShopMaterials and returns the data saved in the database.
     * @param {ShopMaterialCreateManyAndReturnArgs} args - Arguments to create many ShopMaterials.
     * @example
     * // Create many ShopMaterials
     * const shopMaterial = await prisma.shopMaterial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ShopMaterials and only return the `id`
     * const shopMaterialWithIdOnly = await prisma.shopMaterial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ShopMaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ShopMaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ShopMaterial.
     * @param {ShopMaterialDeleteArgs} args - Arguments to delete one ShopMaterial.
     * @example
     * // Delete one ShopMaterial
     * const ShopMaterial = await prisma.shopMaterial.delete({
     *   where: {
     *     // ... filter to delete one ShopMaterial
     *   }
     * })
     *
     */
    delete<T extends ShopMaterialDeleteArgs>(args: Prisma.SelectSubset<T, ShopMaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ShopMaterial.
     * @param {ShopMaterialUpdateArgs} args - Arguments to update one ShopMaterial.
     * @example
     * // Update one ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ShopMaterialUpdateArgs>(args: Prisma.SelectSubset<T, ShopMaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ShopMaterials.
     * @param {ShopMaterialDeleteManyArgs} args - Arguments to filter ShopMaterials to delete.
     * @example
     * // Delete a few ShopMaterials
     * const { count } = await prisma.shopMaterial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ShopMaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, ShopMaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShopMaterials
     * const shopMaterial = await prisma.shopMaterial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ShopMaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, ShopMaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ShopMaterials and returns the data updated in the database.
     * @param {ShopMaterialUpdateManyAndReturnArgs} args - Arguments to update many ShopMaterials.
     * @example
     * // Update many ShopMaterials
     * const shopMaterial = await prisma.shopMaterial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ShopMaterials and only return the `id`
     * const shopMaterialWithIdOnly = await prisma.shopMaterial.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopMaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ShopMaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ShopMaterial.
     * @param {ShopMaterialUpsertArgs} args - Arguments to update or create a ShopMaterial.
     * @example
     * // Update or create a ShopMaterial
     * const shopMaterial = await prisma.shopMaterial.upsert({
     *   create: {
     *     // ... data to create a ShopMaterial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShopMaterial we want to update
     *   }
     * })
     */
    upsert<T extends ShopMaterialUpsertArgs>(args: Prisma.SelectSubset<T, ShopMaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__ShopMaterialClient<runtime.Types.Result.GetResult<Prisma.$ShopMaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ShopMaterials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialCountArgs} args - Arguments to filter ShopMaterials to count.
     * @example
     * // Count the number of ShopMaterials
     * const count = await prisma.shopMaterial.count({
     *   where: {
     *     // ... the filter for the ShopMaterials we want to count
     *   }
     * })
    **/
    count<T extends ShopMaterialCountArgs>(args?: Prisma.Subset<T, ShopMaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ShopMaterialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ShopMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopMaterialAggregateArgs>(args: Prisma.Subset<T, ShopMaterialAggregateArgs>): Prisma.PrismaPromise<GetShopMaterialAggregateType<T>>;
    /**
     * Group by ShopMaterial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopMaterialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ShopMaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ShopMaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: ShopMaterialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ShopMaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ShopMaterial model
     */
    readonly fields: ShopMaterialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ShopMaterial.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ShopMaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    inventory<T extends Prisma.ShopMaterial$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterial$inventoryArgs<ExtArgs>>): Prisma.Prisma__ShopInventoryClient<runtime.Types.Result.GetResult<Prisma.$ShopInventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    components<T extends Prisma.ShopMaterial$componentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterial$componentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductComponentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    directProducts<T extends Prisma.ShopMaterial$directProductsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterial$directProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movements<T extends Prisma.ShopMaterial$movementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterial$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopInventoryMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    withdrawals<T extends Prisma.ShopMaterial$withdrawalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ShopMaterial$withdrawalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ShopWithdrawalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ShopMaterial model
 */
export interface ShopMaterialFieldRefs {
    readonly id: Prisma.FieldRef<"ShopMaterial", 'String'>;
    readonly guildId: Prisma.FieldRef<"ShopMaterial", 'String'>;
    readonly name: Prisma.FieldRef<"ShopMaterial", 'String'>;
    readonly baseUnit: Prisma.FieldRef<"ShopMaterial", 'String'>;
    readonly stackSize: Prisma.FieldRef<"ShopMaterial", 'Int'>;
    readonly isActive: Prisma.FieldRef<"ShopMaterial", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"ShopMaterial", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ShopMaterial", 'DateTime'>;
}
/**
 * ShopMaterial findUnique
 */
export type ShopMaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which ShopMaterial to fetch.
     */
    where: Prisma.ShopMaterialWhereUniqueInput;
};
/**
 * ShopMaterial findUniqueOrThrow
 */
export type ShopMaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which ShopMaterial to fetch.
     */
    where: Prisma.ShopMaterialWhereUniqueInput;
};
/**
 * ShopMaterial findFirst
 */
export type ShopMaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which ShopMaterial to fetch.
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopMaterials to fetch.
     */
    orderBy?: Prisma.ShopMaterialOrderByWithRelationInput | Prisma.ShopMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopMaterials.
     */
    cursor?: Prisma.ShopMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopMaterials.
     */
    distinct?: Prisma.ShopMaterialScalarFieldEnum | Prisma.ShopMaterialScalarFieldEnum[];
};
/**
 * ShopMaterial findFirstOrThrow
 */
export type ShopMaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which ShopMaterial to fetch.
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopMaterials to fetch.
     */
    orderBy?: Prisma.ShopMaterialOrderByWithRelationInput | Prisma.ShopMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ShopMaterials.
     */
    cursor?: Prisma.ShopMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopMaterials.
     */
    distinct?: Prisma.ShopMaterialScalarFieldEnum | Prisma.ShopMaterialScalarFieldEnum[];
};
/**
 * ShopMaterial findMany
 */
export type ShopMaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter, which ShopMaterials to fetch.
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ShopMaterials to fetch.
     */
    orderBy?: Prisma.ShopMaterialOrderByWithRelationInput | Prisma.ShopMaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ShopMaterials.
     */
    cursor?: Prisma.ShopMaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ShopMaterials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ShopMaterials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ShopMaterials.
     */
    distinct?: Prisma.ShopMaterialScalarFieldEnum | Prisma.ShopMaterialScalarFieldEnum[];
};
/**
 * ShopMaterial create
 */
export type ShopMaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * The data needed to create a ShopMaterial.
     */
    data: Prisma.XOR<Prisma.ShopMaterialCreateInput, Prisma.ShopMaterialUncheckedCreateInput>;
};
/**
 * ShopMaterial createMany
 */
export type ShopMaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShopMaterials.
     */
    data: Prisma.ShopMaterialCreateManyInput | Prisma.ShopMaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopMaterial createManyAndReturn
 */
export type ShopMaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * The data used to create many ShopMaterials.
     */
    data: Prisma.ShopMaterialCreateManyInput | Prisma.ShopMaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ShopMaterial update
 */
export type ShopMaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * The data needed to update a ShopMaterial.
     */
    data: Prisma.XOR<Prisma.ShopMaterialUpdateInput, Prisma.ShopMaterialUncheckedUpdateInput>;
    /**
     * Choose, which ShopMaterial to update.
     */
    where: Prisma.ShopMaterialWhereUniqueInput;
};
/**
 * ShopMaterial updateMany
 */
export type ShopMaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ShopMaterials.
     */
    data: Prisma.XOR<Prisma.ShopMaterialUpdateManyMutationInput, Prisma.ShopMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which ShopMaterials to update
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * Limit how many ShopMaterials to update.
     */
    limit?: number;
};
/**
 * ShopMaterial updateManyAndReturn
 */
export type ShopMaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * The data used to update ShopMaterials.
     */
    data: Prisma.XOR<Prisma.ShopMaterialUpdateManyMutationInput, Prisma.ShopMaterialUncheckedUpdateManyInput>;
    /**
     * Filter which ShopMaterials to update
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * Limit how many ShopMaterials to update.
     */
    limit?: number;
};
/**
 * ShopMaterial upsert
 */
export type ShopMaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * The filter to search for the ShopMaterial to update in case it exists.
     */
    where: Prisma.ShopMaterialWhereUniqueInput;
    /**
     * In case the ShopMaterial found by the `where` argument doesn't exist, create a new ShopMaterial with this data.
     */
    create: Prisma.XOR<Prisma.ShopMaterialCreateInput, Prisma.ShopMaterialUncheckedCreateInput>;
    /**
     * In case the ShopMaterial was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ShopMaterialUpdateInput, Prisma.ShopMaterialUncheckedUpdateInput>;
};
/**
 * ShopMaterial delete
 */
export type ShopMaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
    /**
     * Filter which ShopMaterial to delete.
     */
    where: Prisma.ShopMaterialWhereUniqueInput;
};
/**
 * ShopMaterial deleteMany
 */
export type ShopMaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ShopMaterials to delete
     */
    where?: Prisma.ShopMaterialWhereInput;
    /**
     * Limit how many ShopMaterials to delete.
     */
    limit?: number;
};
/**
 * ShopMaterial.inventory
 */
export type ShopMaterial$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopInventoryWhereInput;
};
/**
 * ShopMaterial.components
 */
export type ShopMaterial$componentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.ShopProductComponentWhereInput;
    orderBy?: Prisma.ShopProductComponentOrderByWithRelationInput | Prisma.ShopProductComponentOrderByWithRelationInput[];
    cursor?: Prisma.ShopProductComponentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopProductComponentScalarFieldEnum | Prisma.ShopProductComponentScalarFieldEnum[];
};
/**
 * ShopMaterial.directProducts
 */
export type ShopMaterial$directProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopProduct
     */
    select?: Prisma.ShopProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopProduct
     */
    omit?: Prisma.ShopProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopProductInclude<ExtArgs> | null;
    where?: Prisma.ShopProductWhereInput;
    orderBy?: Prisma.ShopProductOrderByWithRelationInput | Prisma.ShopProductOrderByWithRelationInput[];
    cursor?: Prisma.ShopProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopProductScalarFieldEnum | Prisma.ShopProductScalarFieldEnum[];
};
/**
 * ShopMaterial.movements
 */
export type ShopMaterial$movementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopInventoryMovement
     */
    select?: Prisma.ShopInventoryMovementSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopInventoryMovement
     */
    omit?: Prisma.ShopInventoryMovementOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopInventoryMovementInclude<ExtArgs> | null;
    where?: Prisma.ShopInventoryMovementWhereInput;
    orderBy?: Prisma.ShopInventoryMovementOrderByWithRelationInput | Prisma.ShopInventoryMovementOrderByWithRelationInput[];
    cursor?: Prisma.ShopInventoryMovementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopInventoryMovementScalarFieldEnum | Prisma.ShopInventoryMovementScalarFieldEnum[];
};
/**
 * ShopMaterial.withdrawals
 */
export type ShopMaterial$withdrawalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopWithdrawal
     */
    select?: Prisma.ShopWithdrawalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopWithdrawal
     */
    omit?: Prisma.ShopWithdrawalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopWithdrawalInclude<ExtArgs> | null;
    where?: Prisma.ShopWithdrawalWhereInput;
    orderBy?: Prisma.ShopWithdrawalOrderByWithRelationInput | Prisma.ShopWithdrawalOrderByWithRelationInput[];
    cursor?: Prisma.ShopWithdrawalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ShopWithdrawalScalarFieldEnum | Prisma.ShopWithdrawalScalarFieldEnum[];
};
/**
 * ShopMaterial without action
 */
export type ShopMaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopMaterial
     */
    select?: Prisma.ShopMaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ShopMaterial
     */
    omit?: Prisma.ShopMaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ShopMaterialInclude<ExtArgs> | null;
};
//# sourceMappingURL=ShopMaterial.d.ts.map