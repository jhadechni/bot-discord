import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.6.0
 * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly GuildConfig: "GuildConfig";
    readonly Suggestion: "Suggestion";
    readonly SuggestionVote: "SuggestionVote";
    readonly RecruitmentTicket: "RecruitmentTicket";
    readonly ModerationLog: "ModerationLog";
    readonly UserActivity: "UserActivity";
    readonly MonthlyActivity: "MonthlyActivity";
    readonly ReminderTemplate: "ReminderTemplate";
    readonly Reminder: "Reminder";
    readonly FilterWord: "FilterWord";
    readonly NicknameRole: "NicknameRole";
    readonly ClanPlayer: "ClanPlayer";
    readonly ShopUser: "ShopUser";
    readonly ShopMaterial: "ShopMaterial";
    readonly ShopInventory: "ShopInventory";
    readonly ShopProduct: "ShopProduct";
    readonly ShopProductComponent: "ShopProductComponent";
    readonly ShopProductPrice: "ShopProductPrice";
    readonly ShopOrder: "ShopOrder";
    readonly ShopOrderItem: "ShopOrderItem";
    readonly ShopInventoryMovement: "ShopInventoryMovement";
    readonly ShopSale: "ShopSale";
    readonly ShopWithdrawal: "ShopWithdrawal";
    readonly ShopDiscountPolicy: "ShopDiscountPolicy";
    readonly ShopAppliedDiscount: "ShopAppliedDiscount";
    readonly ShopCategory: "ShopCategory";
    readonly ShopSubcategory: "ShopSubcategory";
    readonly ShopOrderEvent: "ShopOrderEvent";
    readonly Poll: "Poll";
    readonly MapBackground: "MapBackground";
    readonly ProtectionMember: "ProtectionMember";
    readonly WorldProtection: "WorldProtection";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "guildConfig" | "suggestion" | "suggestionVote" | "recruitmentTicket" | "moderationLog" | "userActivity" | "monthlyActivity" | "reminderTemplate" | "reminder" | "filterWord" | "nicknameRole" | "clanPlayer" | "shopUser" | "shopMaterial" | "shopInventory" | "shopProduct" | "shopProductComponent" | "shopProductPrice" | "shopOrder" | "shopOrderItem" | "shopInventoryMovement" | "shopSale" | "shopWithdrawal" | "shopDiscountPolicy" | "shopAppliedDiscount" | "shopCategory" | "shopSubcategory" | "shopOrderEvent" | "poll" | "mapBackground" | "protectionMember" | "worldProtection";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        GuildConfig: {
            payload: Prisma.$GuildConfigPayload<ExtArgs>;
            fields: Prisma.GuildConfigFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GuildConfigFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GuildConfigFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                findFirst: {
                    args: Prisma.GuildConfigFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GuildConfigFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                findMany: {
                    args: Prisma.GuildConfigFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
                };
                create: {
                    args: Prisma.GuildConfigCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                createMany: {
                    args: Prisma.GuildConfigCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GuildConfigCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
                };
                delete: {
                    args: Prisma.GuildConfigDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                update: {
                    args: Prisma.GuildConfigUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                deleteMany: {
                    args: Prisma.GuildConfigDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GuildConfigUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GuildConfigUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>[];
                };
                upsert: {
                    args: Prisma.GuildConfigUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GuildConfigPayload>;
                };
                aggregate: {
                    args: Prisma.GuildConfigAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGuildConfig>;
                };
                groupBy: {
                    args: Prisma.GuildConfigGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuildConfigGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GuildConfigCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GuildConfigCountAggregateOutputType> | number;
                };
            };
        };
        Suggestion: {
            payload: Prisma.$SuggestionPayload<ExtArgs>;
            fields: Prisma.SuggestionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuggestionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuggestionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                findFirst: {
                    args: Prisma.SuggestionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuggestionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                findMany: {
                    args: Prisma.SuggestionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>[];
                };
                create: {
                    args: Prisma.SuggestionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                createMany: {
                    args: Prisma.SuggestionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuggestionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>[];
                };
                delete: {
                    args: Prisma.SuggestionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                update: {
                    args: Prisma.SuggestionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                deleteMany: {
                    args: Prisma.SuggestionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuggestionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuggestionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>[];
                };
                upsert: {
                    args: Prisma.SuggestionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionPayload>;
                };
                aggregate: {
                    args: Prisma.SuggestionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuggestion>;
                };
                groupBy: {
                    args: Prisma.SuggestionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuggestionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuggestionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuggestionCountAggregateOutputType> | number;
                };
            };
        };
        SuggestionVote: {
            payload: Prisma.$SuggestionVotePayload<ExtArgs>;
            fields: Prisma.SuggestionVoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SuggestionVoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SuggestionVoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                findFirst: {
                    args: Prisma.SuggestionVoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SuggestionVoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                findMany: {
                    args: Prisma.SuggestionVoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>[];
                };
                create: {
                    args: Prisma.SuggestionVoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                createMany: {
                    args: Prisma.SuggestionVoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SuggestionVoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>[];
                };
                delete: {
                    args: Prisma.SuggestionVoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                update: {
                    args: Prisma.SuggestionVoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                deleteMany: {
                    args: Prisma.SuggestionVoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SuggestionVoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SuggestionVoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>[];
                };
                upsert: {
                    args: Prisma.SuggestionVoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SuggestionVotePayload>;
                };
                aggregate: {
                    args: Prisma.SuggestionVoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSuggestionVote>;
                };
                groupBy: {
                    args: Prisma.SuggestionVoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuggestionVoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SuggestionVoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SuggestionVoteCountAggregateOutputType> | number;
                };
            };
        };
        RecruitmentTicket: {
            payload: Prisma.$RecruitmentTicketPayload<ExtArgs>;
            fields: Prisma.RecruitmentTicketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RecruitmentTicketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RecruitmentTicketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                findFirst: {
                    args: Prisma.RecruitmentTicketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RecruitmentTicketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                findMany: {
                    args: Prisma.RecruitmentTicketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>[];
                };
                create: {
                    args: Prisma.RecruitmentTicketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                createMany: {
                    args: Prisma.RecruitmentTicketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RecruitmentTicketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>[];
                };
                delete: {
                    args: Prisma.RecruitmentTicketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                update: {
                    args: Prisma.RecruitmentTicketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                deleteMany: {
                    args: Prisma.RecruitmentTicketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RecruitmentTicketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RecruitmentTicketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>[];
                };
                upsert: {
                    args: Prisma.RecruitmentTicketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RecruitmentTicketPayload>;
                };
                aggregate: {
                    args: Prisma.RecruitmentTicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRecruitmentTicket>;
                };
                groupBy: {
                    args: Prisma.RecruitmentTicketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RecruitmentTicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RecruitmentTicketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RecruitmentTicketCountAggregateOutputType> | number;
                };
            };
        };
        ModerationLog: {
            payload: Prisma.$ModerationLogPayload<ExtArgs>;
            fields: Prisma.ModerationLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ModerationLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ModerationLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                findFirst: {
                    args: Prisma.ModerationLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ModerationLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                findMany: {
                    args: Prisma.ModerationLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>[];
                };
                create: {
                    args: Prisma.ModerationLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                createMany: {
                    args: Prisma.ModerationLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ModerationLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>[];
                };
                delete: {
                    args: Prisma.ModerationLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                update: {
                    args: Prisma.ModerationLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                deleteMany: {
                    args: Prisma.ModerationLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ModerationLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ModerationLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>[];
                };
                upsert: {
                    args: Prisma.ModerationLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ModerationLogPayload>;
                };
                aggregate: {
                    args: Prisma.ModerationLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModerationLog>;
                };
                groupBy: {
                    args: Prisma.ModerationLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModerationLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ModerationLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModerationLogCountAggregateOutputType> | number;
                };
            };
        };
        UserActivity: {
            payload: Prisma.$UserActivityPayload<ExtArgs>;
            fields: Prisma.UserActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                findFirst: {
                    args: Prisma.UserActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                findMany: {
                    args: Prisma.UserActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>[];
                };
                create: {
                    args: Prisma.UserActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                createMany: {
                    args: Prisma.UserActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>[];
                };
                delete: {
                    args: Prisma.UserActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                update: {
                    args: Prisma.UserActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.UserActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>[];
                };
                upsert: {
                    args: Prisma.UserActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserActivityPayload>;
                };
                aggregate: {
                    args: Prisma.UserActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserActivity>;
                };
                groupBy: {
                    args: Prisma.UserActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserActivityCountAggregateOutputType> | number;
                };
            };
        };
        MonthlyActivity: {
            payload: Prisma.$MonthlyActivityPayload<ExtArgs>;
            fields: Prisma.MonthlyActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MonthlyActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MonthlyActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                findFirst: {
                    args: Prisma.MonthlyActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MonthlyActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                findMany: {
                    args: Prisma.MonthlyActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>[];
                };
                create: {
                    args: Prisma.MonthlyActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                createMany: {
                    args: Prisma.MonthlyActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MonthlyActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>[];
                };
                delete: {
                    args: Prisma.MonthlyActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                update: {
                    args: Prisma.MonthlyActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.MonthlyActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MonthlyActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MonthlyActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>[];
                };
                upsert: {
                    args: Prisma.MonthlyActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MonthlyActivityPayload>;
                };
                aggregate: {
                    args: Prisma.MonthlyActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMonthlyActivity>;
                };
                groupBy: {
                    args: Prisma.MonthlyActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonthlyActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MonthlyActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MonthlyActivityCountAggregateOutputType> | number;
                };
            };
        };
        ReminderTemplate: {
            payload: Prisma.$ReminderTemplatePayload<ExtArgs>;
            fields: Prisma.ReminderTemplateFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReminderTemplateFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReminderTemplateFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                findFirst: {
                    args: Prisma.ReminderTemplateFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReminderTemplateFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                findMany: {
                    args: Prisma.ReminderTemplateFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>[];
                };
                create: {
                    args: Prisma.ReminderTemplateCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                createMany: {
                    args: Prisma.ReminderTemplateCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReminderTemplateCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>[];
                };
                delete: {
                    args: Prisma.ReminderTemplateDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                update: {
                    args: Prisma.ReminderTemplateUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                deleteMany: {
                    args: Prisma.ReminderTemplateDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReminderTemplateUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReminderTemplateUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>[];
                };
                upsert: {
                    args: Prisma.ReminderTemplateUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderTemplatePayload>;
                };
                aggregate: {
                    args: Prisma.ReminderTemplateAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReminderTemplate>;
                };
                groupBy: {
                    args: Prisma.ReminderTemplateGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderTemplateGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReminderTemplateCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderTemplateCountAggregateOutputType> | number;
                };
            };
        };
        Reminder: {
            payload: Prisma.$ReminderPayload<ExtArgs>;
            fields: Prisma.ReminderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReminderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                findFirst: {
                    args: Prisma.ReminderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                findMany: {
                    args: Prisma.ReminderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                create: {
                    args: Prisma.ReminderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                createMany: {
                    args: Prisma.ReminderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                delete: {
                    args: Prisma.ReminderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                update: {
                    args: Prisma.ReminderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                deleteMany: {
                    args: Prisma.ReminderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReminderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>[];
                };
                upsert: {
                    args: Prisma.ReminderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReminderPayload>;
                };
                aggregate: {
                    args: Prisma.ReminderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReminder>;
                };
                groupBy: {
                    args: Prisma.ReminderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReminderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReminderCountAggregateOutputType> | number;
                };
            };
        };
        FilterWord: {
            payload: Prisma.$FilterWordPayload<ExtArgs>;
            fields: Prisma.FilterWordFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FilterWordFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FilterWordFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                findFirst: {
                    args: Prisma.FilterWordFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FilterWordFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                findMany: {
                    args: Prisma.FilterWordFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>[];
                };
                create: {
                    args: Prisma.FilterWordCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                createMany: {
                    args: Prisma.FilterWordCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FilterWordCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>[];
                };
                delete: {
                    args: Prisma.FilterWordDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                update: {
                    args: Prisma.FilterWordUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                deleteMany: {
                    args: Prisma.FilterWordDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FilterWordUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FilterWordUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>[];
                };
                upsert: {
                    args: Prisma.FilterWordUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilterWordPayload>;
                };
                aggregate: {
                    args: Prisma.FilterWordAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFilterWord>;
                };
                groupBy: {
                    args: Prisma.FilterWordGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilterWordGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FilterWordCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FilterWordCountAggregateOutputType> | number;
                };
            };
        };
        NicknameRole: {
            payload: Prisma.$NicknameRolePayload<ExtArgs>;
            fields: Prisma.NicknameRoleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NicknameRoleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NicknameRoleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                findFirst: {
                    args: Prisma.NicknameRoleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NicknameRoleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                findMany: {
                    args: Prisma.NicknameRoleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>[];
                };
                create: {
                    args: Prisma.NicknameRoleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                createMany: {
                    args: Prisma.NicknameRoleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NicknameRoleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>[];
                };
                delete: {
                    args: Prisma.NicknameRoleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                update: {
                    args: Prisma.NicknameRoleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                deleteMany: {
                    args: Prisma.NicknameRoleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NicknameRoleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NicknameRoleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>[];
                };
                upsert: {
                    args: Prisma.NicknameRoleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NicknameRolePayload>;
                };
                aggregate: {
                    args: Prisma.NicknameRoleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNicknameRole>;
                };
                groupBy: {
                    args: Prisma.NicknameRoleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NicknameRoleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NicknameRoleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NicknameRoleCountAggregateOutputType> | number;
                };
            };
        };
        ClanPlayer: {
            payload: Prisma.$ClanPlayerPayload<ExtArgs>;
            fields: Prisma.ClanPlayerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClanPlayerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClanPlayerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                findFirst: {
                    args: Prisma.ClanPlayerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClanPlayerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                findMany: {
                    args: Prisma.ClanPlayerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>[];
                };
                create: {
                    args: Prisma.ClanPlayerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                createMany: {
                    args: Prisma.ClanPlayerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClanPlayerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>[];
                };
                delete: {
                    args: Prisma.ClanPlayerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                update: {
                    args: Prisma.ClanPlayerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                deleteMany: {
                    args: Prisma.ClanPlayerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClanPlayerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClanPlayerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>[];
                };
                upsert: {
                    args: Prisma.ClanPlayerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClanPlayerPayload>;
                };
                aggregate: {
                    args: Prisma.ClanPlayerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClanPlayer>;
                };
                groupBy: {
                    args: Prisma.ClanPlayerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClanPlayerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClanPlayerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClanPlayerCountAggregateOutputType> | number;
                };
            };
        };
        ShopUser: {
            payload: Prisma.$ShopUserPayload<ExtArgs>;
            fields: Prisma.ShopUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                findFirst: {
                    args: Prisma.ShopUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                findMany: {
                    args: Prisma.ShopUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>[];
                };
                create: {
                    args: Prisma.ShopUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                createMany: {
                    args: Prisma.ShopUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>[];
                };
                delete: {
                    args: Prisma.ShopUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                update: {
                    args: Prisma.ShopUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>[];
                };
                upsert: {
                    args: Prisma.ShopUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopUserPayload>;
                };
                aggregate: {
                    args: Prisma.ShopUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopUser>;
                };
                groupBy: {
                    args: Prisma.ShopUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopUserCountAggregateOutputType> | number;
                };
            };
        };
        ShopMaterial: {
            payload: Prisma.$ShopMaterialPayload<ExtArgs>;
            fields: Prisma.ShopMaterialFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopMaterialFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopMaterialFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                findFirst: {
                    args: Prisma.ShopMaterialFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopMaterialFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                findMany: {
                    args: Prisma.ShopMaterialFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>[];
                };
                create: {
                    args: Prisma.ShopMaterialCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                createMany: {
                    args: Prisma.ShopMaterialCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopMaterialCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>[];
                };
                delete: {
                    args: Prisma.ShopMaterialDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                update: {
                    args: Prisma.ShopMaterialUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopMaterialDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopMaterialUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopMaterialUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>[];
                };
                upsert: {
                    args: Prisma.ShopMaterialUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopMaterialPayload>;
                };
                aggregate: {
                    args: Prisma.ShopMaterialAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopMaterial>;
                };
                groupBy: {
                    args: Prisma.ShopMaterialGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopMaterialGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopMaterialCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopMaterialCountAggregateOutputType> | number;
                };
            };
        };
        ShopInventory: {
            payload: Prisma.$ShopInventoryPayload<ExtArgs>;
            fields: Prisma.ShopInventoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopInventoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopInventoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                findFirst: {
                    args: Prisma.ShopInventoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopInventoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                findMany: {
                    args: Prisma.ShopInventoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>[];
                };
                create: {
                    args: Prisma.ShopInventoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                createMany: {
                    args: Prisma.ShopInventoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopInventoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>[];
                };
                delete: {
                    args: Prisma.ShopInventoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                update: {
                    args: Prisma.ShopInventoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopInventoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopInventoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopInventoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>[];
                };
                upsert: {
                    args: Prisma.ShopInventoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryPayload>;
                };
                aggregate: {
                    args: Prisma.ShopInventoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopInventory>;
                };
                groupBy: {
                    args: Prisma.ShopInventoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopInventoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopInventoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopInventoryCountAggregateOutputType> | number;
                };
            };
        };
        ShopProduct: {
            payload: Prisma.$ShopProductPayload<ExtArgs>;
            fields: Prisma.ShopProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                findFirst: {
                    args: Prisma.ShopProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                findMany: {
                    args: Prisma.ShopProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>[];
                };
                create: {
                    args: Prisma.ShopProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                createMany: {
                    args: Prisma.ShopProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>[];
                };
                delete: {
                    args: Prisma.ShopProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                update: {
                    args: Prisma.ShopProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>[];
                };
                upsert: {
                    args: Prisma.ShopProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPayload>;
                };
                aggregate: {
                    args: Prisma.ShopProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopProduct>;
                };
                groupBy: {
                    args: Prisma.ShopProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductCountAggregateOutputType> | number;
                };
            };
        };
        ShopProductComponent: {
            payload: Prisma.$ShopProductComponentPayload<ExtArgs>;
            fields: Prisma.ShopProductComponentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopProductComponentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopProductComponentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                findFirst: {
                    args: Prisma.ShopProductComponentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopProductComponentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                findMany: {
                    args: Prisma.ShopProductComponentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>[];
                };
                create: {
                    args: Prisma.ShopProductComponentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                createMany: {
                    args: Prisma.ShopProductComponentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopProductComponentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>[];
                };
                delete: {
                    args: Prisma.ShopProductComponentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                update: {
                    args: Prisma.ShopProductComponentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopProductComponentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopProductComponentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopProductComponentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>[];
                };
                upsert: {
                    args: Prisma.ShopProductComponentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductComponentPayload>;
                };
                aggregate: {
                    args: Prisma.ShopProductComponentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopProductComponent>;
                };
                groupBy: {
                    args: Prisma.ShopProductComponentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductComponentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopProductComponentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductComponentCountAggregateOutputType> | number;
                };
            };
        };
        ShopProductPrice: {
            payload: Prisma.$ShopProductPricePayload<ExtArgs>;
            fields: Prisma.ShopProductPriceFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopProductPriceFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopProductPriceFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                findFirst: {
                    args: Prisma.ShopProductPriceFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopProductPriceFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                findMany: {
                    args: Prisma.ShopProductPriceFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>[];
                };
                create: {
                    args: Prisma.ShopProductPriceCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                createMany: {
                    args: Prisma.ShopProductPriceCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopProductPriceCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>[];
                };
                delete: {
                    args: Prisma.ShopProductPriceDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                update: {
                    args: Prisma.ShopProductPriceUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                deleteMany: {
                    args: Prisma.ShopProductPriceDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopProductPriceUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopProductPriceUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>[];
                };
                upsert: {
                    args: Prisma.ShopProductPriceUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopProductPricePayload>;
                };
                aggregate: {
                    args: Prisma.ShopProductPriceAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopProductPrice>;
                };
                groupBy: {
                    args: Prisma.ShopProductPriceGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductPriceGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopProductPriceCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopProductPriceCountAggregateOutputType> | number;
                };
            };
        };
        ShopOrder: {
            payload: Prisma.$ShopOrderPayload<ExtArgs>;
            fields: Prisma.ShopOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                findFirst: {
                    args: Prisma.ShopOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                findMany: {
                    args: Prisma.ShopOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>[];
                };
                create: {
                    args: Prisma.ShopOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                createMany: {
                    args: Prisma.ShopOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>[];
                };
                delete: {
                    args: Prisma.ShopOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                update: {
                    args: Prisma.ShopOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>[];
                };
                upsert: {
                    args: Prisma.ShopOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderPayload>;
                };
                aggregate: {
                    args: Prisma.ShopOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopOrder>;
                };
                groupBy: {
                    args: Prisma.ShopOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderCountAggregateOutputType> | number;
                };
            };
        };
        ShopOrderItem: {
            payload: Prisma.$ShopOrderItemPayload<ExtArgs>;
            fields: Prisma.ShopOrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopOrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopOrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.ShopOrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopOrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                findMany: {
                    args: Prisma.ShopOrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>[];
                };
                create: {
                    args: Prisma.ShopOrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                createMany: {
                    args: Prisma.ShopOrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopOrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>[];
                };
                delete: {
                    args: Prisma.ShopOrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                update: {
                    args: Prisma.ShopOrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopOrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopOrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopOrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.ShopOrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.ShopOrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopOrderItem>;
                };
                groupBy: {
                    args: Prisma.ShopOrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopOrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderItemCountAggregateOutputType> | number;
                };
            };
        };
        ShopInventoryMovement: {
            payload: Prisma.$ShopInventoryMovementPayload<ExtArgs>;
            fields: Prisma.ShopInventoryMovementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopInventoryMovementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopInventoryMovementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                findFirst: {
                    args: Prisma.ShopInventoryMovementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopInventoryMovementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                findMany: {
                    args: Prisma.ShopInventoryMovementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>[];
                };
                create: {
                    args: Prisma.ShopInventoryMovementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                createMany: {
                    args: Prisma.ShopInventoryMovementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopInventoryMovementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>[];
                };
                delete: {
                    args: Prisma.ShopInventoryMovementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                update: {
                    args: Prisma.ShopInventoryMovementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopInventoryMovementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopInventoryMovementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopInventoryMovementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>[];
                };
                upsert: {
                    args: Prisma.ShopInventoryMovementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopInventoryMovementPayload>;
                };
                aggregate: {
                    args: Prisma.ShopInventoryMovementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopInventoryMovement>;
                };
                groupBy: {
                    args: Prisma.ShopInventoryMovementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopInventoryMovementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopInventoryMovementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopInventoryMovementCountAggregateOutputType> | number;
                };
            };
        };
        ShopSale: {
            payload: Prisma.$ShopSalePayload<ExtArgs>;
            fields: Prisma.ShopSaleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopSaleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopSaleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                findFirst: {
                    args: Prisma.ShopSaleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopSaleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                findMany: {
                    args: Prisma.ShopSaleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>[];
                };
                create: {
                    args: Prisma.ShopSaleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                createMany: {
                    args: Prisma.ShopSaleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopSaleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>[];
                };
                delete: {
                    args: Prisma.ShopSaleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                update: {
                    args: Prisma.ShopSaleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                deleteMany: {
                    args: Prisma.ShopSaleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopSaleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopSaleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>[];
                };
                upsert: {
                    args: Prisma.ShopSaleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSalePayload>;
                };
                aggregate: {
                    args: Prisma.ShopSaleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopSale>;
                };
                groupBy: {
                    args: Prisma.ShopSaleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopSaleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopSaleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopSaleCountAggregateOutputType> | number;
                };
            };
        };
        ShopWithdrawal: {
            payload: Prisma.$ShopWithdrawalPayload<ExtArgs>;
            fields: Prisma.ShopWithdrawalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopWithdrawalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopWithdrawalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                findFirst: {
                    args: Prisma.ShopWithdrawalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopWithdrawalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                findMany: {
                    args: Prisma.ShopWithdrawalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>[];
                };
                create: {
                    args: Prisma.ShopWithdrawalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                createMany: {
                    args: Prisma.ShopWithdrawalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopWithdrawalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>[];
                };
                delete: {
                    args: Prisma.ShopWithdrawalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                update: {
                    args: Prisma.ShopWithdrawalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopWithdrawalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopWithdrawalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopWithdrawalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>[];
                };
                upsert: {
                    args: Prisma.ShopWithdrawalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopWithdrawalPayload>;
                };
                aggregate: {
                    args: Prisma.ShopWithdrawalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopWithdrawal>;
                };
                groupBy: {
                    args: Prisma.ShopWithdrawalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopWithdrawalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopWithdrawalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopWithdrawalCountAggregateOutputType> | number;
                };
            };
        };
        ShopDiscountPolicy: {
            payload: Prisma.$ShopDiscountPolicyPayload<ExtArgs>;
            fields: Prisma.ShopDiscountPolicyFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopDiscountPolicyFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopDiscountPolicyFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                findFirst: {
                    args: Prisma.ShopDiscountPolicyFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopDiscountPolicyFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                findMany: {
                    args: Prisma.ShopDiscountPolicyFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>[];
                };
                create: {
                    args: Prisma.ShopDiscountPolicyCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                createMany: {
                    args: Prisma.ShopDiscountPolicyCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopDiscountPolicyCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>[];
                };
                delete: {
                    args: Prisma.ShopDiscountPolicyDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                update: {
                    args: Prisma.ShopDiscountPolicyUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopDiscountPolicyDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopDiscountPolicyUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopDiscountPolicyUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>[];
                };
                upsert: {
                    args: Prisma.ShopDiscountPolicyUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopDiscountPolicyPayload>;
                };
                aggregate: {
                    args: Prisma.ShopDiscountPolicyAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopDiscountPolicy>;
                };
                groupBy: {
                    args: Prisma.ShopDiscountPolicyGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopDiscountPolicyGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopDiscountPolicyCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopDiscountPolicyCountAggregateOutputType> | number;
                };
            };
        };
        ShopAppliedDiscount: {
            payload: Prisma.$ShopAppliedDiscountPayload<ExtArgs>;
            fields: Prisma.ShopAppliedDiscountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopAppliedDiscountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopAppliedDiscountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                findFirst: {
                    args: Prisma.ShopAppliedDiscountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopAppliedDiscountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                findMany: {
                    args: Prisma.ShopAppliedDiscountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>[];
                };
                create: {
                    args: Prisma.ShopAppliedDiscountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                createMany: {
                    args: Prisma.ShopAppliedDiscountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopAppliedDiscountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>[];
                };
                delete: {
                    args: Prisma.ShopAppliedDiscountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                update: {
                    args: Prisma.ShopAppliedDiscountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopAppliedDiscountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopAppliedDiscountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopAppliedDiscountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>[];
                };
                upsert: {
                    args: Prisma.ShopAppliedDiscountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopAppliedDiscountPayload>;
                };
                aggregate: {
                    args: Prisma.ShopAppliedDiscountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopAppliedDiscount>;
                };
                groupBy: {
                    args: Prisma.ShopAppliedDiscountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopAppliedDiscountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopAppliedDiscountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopAppliedDiscountCountAggregateOutputType> | number;
                };
            };
        };
        ShopCategory: {
            payload: Prisma.$ShopCategoryPayload<ExtArgs>;
            fields: Prisma.ShopCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ShopCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ShopCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>[];
                };
                create: {
                    args: Prisma.ShopCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ShopCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ShopCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                update: {
                    args: Prisma.ShopCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ShopCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ShopCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopCategory>;
                };
                groupBy: {
                    args: Prisma.ShopCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopCategoryCountAggregateOutputType> | number;
                };
            };
        };
        ShopSubcategory: {
            payload: Prisma.$ShopSubcategoryPayload<ExtArgs>;
            fields: Prisma.ShopSubcategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopSubcategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopSubcategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ShopSubcategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopSubcategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                findMany: {
                    args: Prisma.ShopSubcategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>[];
                };
                create: {
                    args: Prisma.ShopSubcategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                createMany: {
                    args: Prisma.ShopSubcategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopSubcategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>[];
                };
                delete: {
                    args: Prisma.ShopSubcategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                update: {
                    args: Prisma.ShopSubcategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopSubcategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopSubcategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopSubcategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ShopSubcategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopSubcategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ShopSubcategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopSubcategory>;
                };
                groupBy: {
                    args: Prisma.ShopSubcategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopSubcategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopSubcategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopSubcategoryCountAggregateOutputType> | number;
                };
            };
        };
        ShopOrderEvent: {
            payload: Prisma.$ShopOrderEventPayload<ExtArgs>;
            fields: Prisma.ShopOrderEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ShopOrderEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ShopOrderEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                findFirst: {
                    args: Prisma.ShopOrderEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ShopOrderEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                findMany: {
                    args: Prisma.ShopOrderEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>[];
                };
                create: {
                    args: Prisma.ShopOrderEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                createMany: {
                    args: Prisma.ShopOrderEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ShopOrderEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>[];
                };
                delete: {
                    args: Prisma.ShopOrderEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                update: {
                    args: Prisma.ShopOrderEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                deleteMany: {
                    args: Prisma.ShopOrderEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ShopOrderEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ShopOrderEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>[];
                };
                upsert: {
                    args: Prisma.ShopOrderEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ShopOrderEventPayload>;
                };
                aggregate: {
                    args: Prisma.ShopOrderEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateShopOrderEvent>;
                };
                groupBy: {
                    args: Prisma.ShopOrderEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ShopOrderEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ShopOrderEventCountAggregateOutputType> | number;
                };
            };
        };
        Poll: {
            payload: Prisma.$PollPayload<ExtArgs>;
            fields: Prisma.PollFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PollFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PollFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                findFirst: {
                    args: Prisma.PollFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PollFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                findMany: {
                    args: Prisma.PollFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>[];
                };
                create: {
                    args: Prisma.PollCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                createMany: {
                    args: Prisma.PollCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PollCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>[];
                };
                delete: {
                    args: Prisma.PollDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                update: {
                    args: Prisma.PollUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                deleteMany: {
                    args: Prisma.PollDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PollUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PollUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>[];
                };
                upsert: {
                    args: Prisma.PollUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PollPayload>;
                };
                aggregate: {
                    args: Prisma.PollAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePoll>;
                };
                groupBy: {
                    args: Prisma.PollGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PollGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PollCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PollCountAggregateOutputType> | number;
                };
            };
        };
        MapBackground: {
            payload: Prisma.$MapBackgroundPayload<ExtArgs>;
            fields: Prisma.MapBackgroundFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MapBackgroundFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MapBackgroundFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                findFirst: {
                    args: Prisma.MapBackgroundFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MapBackgroundFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                findMany: {
                    args: Prisma.MapBackgroundFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>[];
                };
                create: {
                    args: Prisma.MapBackgroundCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                createMany: {
                    args: Prisma.MapBackgroundCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MapBackgroundCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>[];
                };
                delete: {
                    args: Prisma.MapBackgroundDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                update: {
                    args: Prisma.MapBackgroundUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                deleteMany: {
                    args: Prisma.MapBackgroundDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MapBackgroundUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MapBackgroundUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>[];
                };
                upsert: {
                    args: Prisma.MapBackgroundUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MapBackgroundPayload>;
                };
                aggregate: {
                    args: Prisma.MapBackgroundAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMapBackground>;
                };
                groupBy: {
                    args: Prisma.MapBackgroundGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MapBackgroundGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MapBackgroundCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MapBackgroundCountAggregateOutputType> | number;
                };
            };
        };
        ProtectionMember: {
            payload: Prisma.$ProtectionMemberPayload<ExtArgs>;
            fields: Prisma.ProtectionMemberFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProtectionMemberFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProtectionMemberFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                findFirst: {
                    args: Prisma.ProtectionMemberFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProtectionMemberFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                findMany: {
                    args: Prisma.ProtectionMemberFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>[];
                };
                create: {
                    args: Prisma.ProtectionMemberCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                createMany: {
                    args: Prisma.ProtectionMemberCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProtectionMemberCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>[];
                };
                delete: {
                    args: Prisma.ProtectionMemberDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                update: {
                    args: Prisma.ProtectionMemberUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                deleteMany: {
                    args: Prisma.ProtectionMemberDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProtectionMemberUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProtectionMemberUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>[];
                };
                upsert: {
                    args: Prisma.ProtectionMemberUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProtectionMemberPayload>;
                };
                aggregate: {
                    args: Prisma.ProtectionMemberAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProtectionMember>;
                };
                groupBy: {
                    args: Prisma.ProtectionMemberGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProtectionMemberGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProtectionMemberCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProtectionMemberCountAggregateOutputType> | number;
                };
            };
        };
        WorldProtection: {
            payload: Prisma.$WorldProtectionPayload<ExtArgs>;
            fields: Prisma.WorldProtectionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WorldProtectionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WorldProtectionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                findFirst: {
                    args: Prisma.WorldProtectionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WorldProtectionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                findMany: {
                    args: Prisma.WorldProtectionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>[];
                };
                create: {
                    args: Prisma.WorldProtectionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                createMany: {
                    args: Prisma.WorldProtectionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WorldProtectionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>[];
                };
                delete: {
                    args: Prisma.WorldProtectionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                update: {
                    args: Prisma.WorldProtectionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                deleteMany: {
                    args: Prisma.WorldProtectionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WorldProtectionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WorldProtectionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>[];
                };
                upsert: {
                    args: Prisma.WorldProtectionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WorldProtectionPayload>;
                };
                aggregate: {
                    args: Prisma.WorldProtectionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWorldProtection>;
                };
                groupBy: {
                    args: Prisma.WorldProtectionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorldProtectionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WorldProtectionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WorldProtectionCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const GuildConfigScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly welcomeChannelId: "welcomeChannelId";
    readonly logsChannelId: "logsChannelId";
    readonly logsModChannelId: "logsModChannelId";
    readonly logsAutomodChannelId: "logsAutomodChannelId";
    readonly logsRecruitChannelId: "logsRecruitChannelId";
    readonly logsJoinsChannelId: "logsJoinsChannelId";
    readonly logsLeavesChannelId: "logsLeavesChannelId";
    readonly suggestionsChannelId: "suggestionsChannelId";
    readonly recruitmentCategoryId: "recruitmentCategoryId";
    readonly visitorRoleId: "visitorRoleId";
    readonly aspirantRoleId: "aspirantRoleId";
    readonly liderRoleId: "liderRoleId";
    readonly coLiderRoleId: "coLiderRoleId";
    readonly aquarisRoleId: "aquarisRoleId";
    readonly staffRoleId: "staffRoleId";
    readonly levelUpChannelId: "levelUpChannelId";
    readonly boostChannelId: "boostChannelId";
    readonly shopStaffChannelId: "shopStaffChannelId";
    readonly shopCategoryId: "shopCategoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly farewellChannelId: "farewellChannelId";
    readonly notifRoles: "notifRoles";
    readonly expulsionReasons: "expulsionReasons";
    readonly notifPanelChannelId: "notifPanelChannelId";
    readonly notifPanelMessageId: "notifPanelMessageId";
};
export type GuildConfigScalarFieldEnum = (typeof GuildConfigScalarFieldEnum)[keyof typeof GuildConfigScalarFieldEnum];
export declare const SuggestionScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly messageId: "messageId";
    readonly content: "content";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type SuggestionScalarFieldEnum = (typeof SuggestionScalarFieldEnum)[keyof typeof SuggestionScalarFieldEnum];
export declare const SuggestionVoteScalarFieldEnum: {
    readonly id: "id";
    readonly suggestionId: "suggestionId";
    readonly userId: "userId";
    readonly vote: "vote";
    readonly createdAt: "createdAt";
};
export type SuggestionVoteScalarFieldEnum = (typeof SuggestionVoteScalarFieldEnum)[keyof typeof SuggestionVoteScalarFieldEnum];
export declare const RecruitmentTicketScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly channelId: "channelId";
    readonly minecraftRole: "minecraftRole";
    readonly answers: "answers";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly staleAlertedAt: "staleAlertedAt";
};
export type RecruitmentTicketScalarFieldEnum = (typeof RecruitmentTicketScalarFieldEnum)[keyof typeof RecruitmentTicketScalarFieldEnum];
export declare const ModerationLogScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly targetId: "targetId";
    readonly moderatorId: "moderatorId";
    readonly type: "type";
    readonly reason: "reason";
    readonly duration: "duration";
    readonly createdAt: "createdAt";
    readonly active: "active";
};
export type ModerationLogScalarFieldEnum = (typeof ModerationLogScalarFieldEnum)[keyof typeof ModerationLogScalarFieldEnum];
export declare const UserActivityScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly xp: "xp";
    readonly level: "level";
    readonly messageCount: "messageCount";
    readonly voiceMinutes: "voiceMinutes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserActivityScalarFieldEnum = (typeof UserActivityScalarFieldEnum)[keyof typeof UserActivityScalarFieldEnum];
export declare const MonthlyActivityScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly yearMonth: "yearMonth";
    readonly xp: "xp";
    readonly messageCount: "messageCount";
    readonly voiceMinutes: "voiceMinutes";
    readonly updatedAt: "updatedAt";
};
export type MonthlyActivityScalarFieldEnum = (typeof MonthlyActivityScalarFieldEnum)[keyof typeof MonthlyActivityScalarFieldEnum];
export declare const ReminderTemplateScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly name: "name";
    readonly description: "description";
    readonly cooldownMin: "cooldownMin";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type ReminderTemplateScalarFieldEnum = (typeof ReminderTemplateScalarFieldEnum)[keyof typeof ReminderTemplateScalarFieldEnum];
export declare const ReminderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly guildId: "guildId";
    readonly message: "message";
    readonly triggerAt: "triggerAt";
    readonly intervalMin: "intervalMin";
    readonly active: "active";
    readonly createdAt: "createdAt";
    readonly templateId: "templateId";
};
export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum];
export declare const FilterWordScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly word: "word";
    readonly addedById: "addedById";
    readonly createdAt: "createdAt";
};
export type FilterWordScalarFieldEnum = (typeof FilterWordScalarFieldEnum)[keyof typeof FilterWordScalarFieldEnum];
export declare const NicknameRoleScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly roleId: "roleId";
    readonly createdAt: "createdAt";
    readonly emoji: "emoji";
};
export type NicknameRoleScalarFieldEnum = (typeof NicknameRoleScalarFieldEnum)[keyof typeof NicknameRoleScalarFieldEnum];
export declare const ClanPlayerScalarFieldEnum: {
    readonly id: "id";
    readonly discord: "discord";
    readonly fullName: "fullName";
    readonly minecraftNick: "minecraftNick";
    readonly rank: "rank";
    readonly joinedAt: "joinedAt";
    readonly country: "country";
    readonly utcOffset: "utcOffset";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly notes: "notes";
    readonly minecraftRank: "minecraftRank";
};
export type ClanPlayerScalarFieldEnum = (typeof ClanPlayerScalarFieldEnum)[keyof typeof ClanPlayerScalarFieldEnum];
export declare const ShopUserScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly discordUserId: "discordUserId";
    readonly username: "username";
    readonly displayName: "displayName";
    readonly isStaff: "isStaff";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShopUserScalarFieldEnum = (typeof ShopUserScalarFieldEnum)[keyof typeof ShopUserScalarFieldEnum];
export declare const ShopMaterialScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly name: "name";
    readonly baseUnit: "baseUnit";
    readonly stackSize: "stackSize";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShopMaterialScalarFieldEnum = (typeof ShopMaterialScalarFieldEnum)[keyof typeof ShopMaterialScalarFieldEnum];
export declare const ShopInventoryScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly materialId: "materialId";
    readonly currentStock: "currentStock";
    readonly reservedStock: "reservedStock";
    readonly minStockAlert: "minStockAlert";
    readonly updatedAt: "updatedAt";
};
export type ShopInventoryScalarFieldEnum = (typeof ShopInventoryScalarFieldEnum)[keyof typeof ShopInventoryScalarFieldEnum];
export declare const ShopProductScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly name: "name";
    readonly productType: "productType";
    readonly category: "category";
    readonly subcategory: "subcategory";
    readonly description: "description";
    readonly baseMaterialId: "baseMaterialId";
    readonly presentationType: "presentationType";
    readonly presentationQuantity: "presentationQuantity";
    readonly presentationLabel: "presentationLabel";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly additionalCategories: "additionalCategories";
    readonly additionalCategoryAssignments: "additionalCategoryAssignments";
};
export type ShopProductScalarFieldEnum = (typeof ShopProductScalarFieldEnum)[keyof typeof ShopProductScalarFieldEnum];
export declare const ShopProductComponentScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly materialId: "materialId";
    readonly quantityRequired: "quantityRequired";
};
export type ShopProductComponentScalarFieldEnum = (typeof ShopProductComponentScalarFieldEnum)[keyof typeof ShopProductComponentScalarFieldEnum];
export declare const ShopProductPriceScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly price: "price";
    readonly currency: "currency";
    readonly validFrom: "validFrom";
    readonly validTo: "validTo";
    readonly changedByUserId: "changedByUserId";
};
export type ShopProductPriceScalarFieldEnum = (typeof ShopProductPriceScalarFieldEnum)[keyof typeof ShopProductPriceScalarFieldEnum];
export declare const ShopOrderScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly orderCode: "orderCode";
    readonly customerUserId: "customerUserId";
    readonly status: "status";
    readonly ticketChannelId: "ticketChannelId";
    readonly staffChannelId: "staffChannelId";
    readonly acceptedByUserId: "acceptedByUserId";
    readonly rejectedByUserId: "rejectedByUserId";
    readonly closedByUserId: "closedByUserId";
    readonly rejectionReason: "rejectionReason";
    readonly cancelReason: "cancelReason";
    readonly subtotalAmount: "subtotalAmount";
    readonly totalDiscountAmount: "totalDiscountAmount";
    readonly totalAmount: "totalAmount";
    readonly createdAt: "createdAt";
    readonly acceptedAt: "acceptedAt";
    readonly rejectedAt: "rejectedAt";
    readonly closedAt: "closedAt";
    readonly cancelledAt: "cancelledAt";
};
export type ShopOrderScalarFieldEnum = (typeof ShopOrderScalarFieldEnum)[keyof typeof ShopOrderScalarFieldEnum];
export declare const ShopOrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly grossLineTotal: "grossLineTotal";
    readonly netLineTotal: "netLineTotal";
    readonly reservedQuantity: "reservedQuantity";
    readonly deliveredQuantity: "deliveredQuantity";
    readonly notes: "notes";
};
export type ShopOrderItemScalarFieldEnum = (typeof ShopOrderItemScalarFieldEnum)[keyof typeof ShopOrderItemScalarFieldEnum];
export declare const ShopInventoryMovementScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly materialId: "materialId";
    readonly movementType: "movementType";
    readonly quantity: "quantity";
    readonly reason: "reason";
    readonly relatedOrderId: "relatedOrderId";
    readonly performedById: "performedById";
    readonly createdAt: "createdAt";
};
export type ShopInventoryMovementScalarFieldEnum = (typeof ShopInventoryMovementScalarFieldEnum)[keyof typeof ShopInventoryMovementScalarFieldEnum];
export declare const ShopSaleScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly orderId: "orderId";
    readonly buyerUserId: "buyerUserId";
    readonly registeredById: "registeredById";
    readonly totalAmount: "totalAmount";
    readonly soldAt: "soldAt";
};
export type ShopSaleScalarFieldEnum = (typeof ShopSaleScalarFieldEnum)[keyof typeof ShopSaleScalarFieldEnum];
export declare const ShopWithdrawalScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly materialId: "materialId";
    readonly quantity: "quantity";
    readonly reason: "reason";
    readonly performedById: "performedById";
    readonly createdAt: "createdAt";
};
export type ShopWithdrawalScalarFieldEnum = (typeof ShopWithdrawalScalarFieldEnum)[keyof typeof ShopWithdrawalScalarFieldEnum];
export declare const ShopDiscountPolicyScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly productId: "productId";
    readonly minQuantity: "minQuantity";
    readonly name: "name";
    readonly description: "description";
    readonly policyType: "policyType";
    readonly scope: "scope";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly isActive: "isActive";
    readonly priority: "priority";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly createdByUserId: "createdByUserId";
    readonly createdAt: "createdAt";
};
export type ShopDiscountPolicyScalarFieldEnum = (typeof ShopDiscountPolicyScalarFieldEnum)[keyof typeof ShopDiscountPolicyScalarFieldEnum];
export declare const ShopAppliedDiscountScalarFieldEnum: {
    readonly id: "id";
    readonly discountPolicyId: "discountPolicyId";
    readonly orderId: "orderId";
    readonly orderItemId: "orderItemId";
    readonly scope: "scope";
    readonly discountType: "discountType";
    readonly discountValue: "discountValue";
    readonly discountAmount: "discountAmount";
    readonly reason: "reason";
    readonly appliedByUserId: "appliedByUserId";
    readonly appliedAt: "appliedAt";
};
export type ShopAppliedDiscountScalarFieldEnum = (typeof ShopAppliedDiscountScalarFieldEnum)[keyof typeof ShopAppliedDiscountScalarFieldEnum];
export declare const ShopCategoryScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShopCategoryScalarFieldEnum = (typeof ShopCategoryScalarFieldEnum)[keyof typeof ShopCategoryScalarFieldEnum];
export declare const ShopSubcategoryScalarFieldEnum: {
    readonly id: "id";
    readonly categoryId: "categoryId";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly imageUrl: "imageUrl";
    readonly isActive: "isActive";
    readonly sortOrder: "sortOrder";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ShopSubcategoryScalarFieldEnum = (typeof ShopSubcategoryScalarFieldEnum)[keyof typeof ShopSubcategoryScalarFieldEnum];
export declare const ShopOrderEventScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly eventType: "eventType";
    readonly oldStatus: "oldStatus";
    readonly newStatus: "newStatus";
    readonly performedById: "performedById";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
};
export type ShopOrderEventScalarFieldEnum = (typeof ShopOrderEventScalarFieldEnum)[keyof typeof ShopOrderEventScalarFieldEnum];
export declare const PollScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly channelId: "channelId";
    readonly messageId: "messageId";
    readonly authorId: "authorId";
    readonly question: "question";
    readonly options: "options";
    readonly votes: "votes";
    readonly anonymous: "anonymous";
    readonly closesAt: "closesAt";
    readonly closed: "closed";
    readonly createdAt: "createdAt";
};
export type PollScalarFieldEnum = (typeof PollScalarFieldEnum)[keyof typeof PollScalarFieldEnum];
export declare const MapBackgroundScalarFieldEnum: {
    readonly id: "id";
    readonly imageUrl: "imageUrl";
    readonly x1: "x1";
    readonly z1: "z1";
    readonly x2: "x2";
    readonly z2: "z2";
};
export type MapBackgroundScalarFieldEnum = (typeof MapBackgroundScalarFieldEnum)[keyof typeof MapBackgroundScalarFieldEnum];
export declare const ProtectionMemberScalarFieldEnum: {
    readonly id: "id";
    readonly protectionId: "protectionId";
    readonly playerName: "playerName";
    readonly level: "level";
    readonly addedAt: "addedAt";
};
export type ProtectionMemberScalarFieldEnum = (typeof ProtectionMemberScalarFieldEnum)[keyof typeof ProtectionMemberScalarFieldEnum];
export declare const WorldProtectionScalarFieldEnum: {
    readonly id: "id";
    readonly alias: "alias";
    readonly startX: "startX";
    readonly startZ: "startZ";
    readonly endX: "endX";
    readonly endZ: "endZ";
    readonly isOwned: "isOwned";
    readonly color: "color";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WorldProtectionScalarFieldEnum = (typeof WorldProtectionScalarFieldEnum)[keyof typeof WorldProtectionScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-pg`.
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl: string;
    adapter?: never;
}) & {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    guildConfig?: Prisma.GuildConfigOmit;
    suggestion?: Prisma.SuggestionOmit;
    suggestionVote?: Prisma.SuggestionVoteOmit;
    recruitmentTicket?: Prisma.RecruitmentTicketOmit;
    moderationLog?: Prisma.ModerationLogOmit;
    userActivity?: Prisma.UserActivityOmit;
    monthlyActivity?: Prisma.MonthlyActivityOmit;
    reminderTemplate?: Prisma.ReminderTemplateOmit;
    reminder?: Prisma.ReminderOmit;
    filterWord?: Prisma.FilterWordOmit;
    nicknameRole?: Prisma.NicknameRoleOmit;
    clanPlayer?: Prisma.ClanPlayerOmit;
    shopUser?: Prisma.ShopUserOmit;
    shopMaterial?: Prisma.ShopMaterialOmit;
    shopInventory?: Prisma.ShopInventoryOmit;
    shopProduct?: Prisma.ShopProductOmit;
    shopProductComponent?: Prisma.ShopProductComponentOmit;
    shopProductPrice?: Prisma.ShopProductPriceOmit;
    shopOrder?: Prisma.ShopOrderOmit;
    shopOrderItem?: Prisma.ShopOrderItemOmit;
    shopInventoryMovement?: Prisma.ShopInventoryMovementOmit;
    shopSale?: Prisma.ShopSaleOmit;
    shopWithdrawal?: Prisma.ShopWithdrawalOmit;
    shopDiscountPolicy?: Prisma.ShopDiscountPolicyOmit;
    shopAppliedDiscount?: Prisma.ShopAppliedDiscountOmit;
    shopCategory?: Prisma.ShopCategoryOmit;
    shopSubcategory?: Prisma.ShopSubcategoryOmit;
    shopOrderEvent?: Prisma.ShopOrderEventOmit;
    poll?: Prisma.PollOmit;
    mapBackground?: Prisma.MapBackgroundOmit;
    protectionMember?: Prisma.ProtectionMemberOmit;
    worldProtection?: Prisma.WorldProtectionOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map