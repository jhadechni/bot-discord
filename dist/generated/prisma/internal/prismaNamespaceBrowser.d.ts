import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
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
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly GuildConfig: "GuildConfig";
    readonly Suggestion: "Suggestion";
    readonly SuggestionVote: "SuggestionVote";
    readonly RecruitmentTicket: "RecruitmentTicket";
    readonly RecruitmentVote: "RecruitmentVote";
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
    readonly ShopOrderSurcharge: "ShopOrderSurcharge";
    readonly Poll: "Poll";
    readonly MapBackground: "MapBackground";
    readonly ProtectionMember: "ProtectionMember";
    readonly CommandUsage: "CommandUsage";
    readonly ShopFreeRequest: "ShopFreeRequest";
    readonly WorldProtection: "WorldProtection";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
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
    readonly recruitmentReviewChannelId: "recruitmentReviewChannelId";
    readonly visitorRoleId: "visitorRoleId";
    readonly aspirantRoleId: "aspirantRoleId";
    readonly liderRoleId: "liderRoleId";
    readonly coLiderRoleId: "coLiderRoleId";
    readonly aquarisRoleId: "aquarisRoleId";
    readonly staffRoleId: "staffRoleId";
    readonly reclutadorRoleId: "reclutadorRoleId";
    readonly comercianteRoleId: "comercianteRoleId";
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
export declare const RecruitmentVoteScalarFieldEnum: {
    readonly id: "id";
    readonly ticketId: "ticketId";
    readonly userId: "userId";
    readonly username: "username";
    readonly vote: "vote";
    readonly createdAt: "createdAt";
};
export type RecruitmentVoteScalarFieldEnum = (typeof RecruitmentVoteScalarFieldEnum)[keyof typeof RecruitmentVoteScalarFieldEnum];
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
    readonly parentId: "parentId";
    readonly variantLabel: "variantLabel";
    readonly variantAttributes: "variantAttributes";
    readonly sortOrder: "sortOrder";
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
    readonly source: "source";
    readonly ticketChannelId: "ticketChannelId";
    readonly staffChannelId: "staffChannelId";
    readonly acceptedByUserId: "acceptedByUserId";
    readonly rejectedByUserId: "rejectedByUserId";
    readonly closedByUserId: "closedByUserId";
    readonly rejectionReason: "rejectionReason";
    readonly cancelReason: "cancelReason";
    readonly subtotalAmount: "subtotalAmount";
    readonly totalDiscountAmount: "totalDiscountAmount";
    readonly surchargesAmount: "surchargesAmount";
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
export declare const ShopOrderSurchargeScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly label: "label";
    readonly isPercent: "isPercent";
    readonly rate: "rate";
    readonly amount: "amount";
    readonly createdAt: "createdAt";
};
export type ShopOrderSurchargeScalarFieldEnum = (typeof ShopOrderSurchargeScalarFieldEnum)[keyof typeof ShopOrderSurchargeScalarFieldEnum];
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
export declare const CommandUsageScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly commandName: "commandName";
    readonly subcommandGroup: "subcommandGroup";
    readonly subcommand: "subcommand";
    readonly createdAt: "createdAt";
};
export type CommandUsageScalarFieldEnum = (typeof CommandUsageScalarFieldEnum)[keyof typeof CommandUsageScalarFieldEnum];
export declare const ShopFreeRequestScalarFieldEnum: {
    readonly id: "id";
    readonly guildId: "guildId";
    readonly userId: "userId";
    readonly requestText: "requestText";
    readonly createdAt: "createdAt";
};
export type ShopFreeRequestScalarFieldEnum = (typeof ShopFreeRequestScalarFieldEnum)[keyof typeof ShopFreeRequestScalarFieldEnum];
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
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map