import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more GuildConfigs
 * const guildConfigs = await prisma.guildConfig.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model GuildConfig
 *
 */
export type GuildConfig = Prisma.GuildConfigModel;
/**
 * Model Suggestion
 *
 */
export type Suggestion = Prisma.SuggestionModel;
/**
 * Model SuggestionVote
 *
 */
export type SuggestionVote = Prisma.SuggestionVoteModel;
/**
 * Model RecruitmentTicket
 *
 */
export type RecruitmentTicket = Prisma.RecruitmentTicketModel;
/**
 * Model ModerationLog
 *
 */
export type ModerationLog = Prisma.ModerationLogModel;
/**
 * Model UserActivity
 *
 */
export type UserActivity = Prisma.UserActivityModel;
/**
 * Model MonthlyActivity
 *
 */
export type MonthlyActivity = Prisma.MonthlyActivityModel;
/**
 * Model ReminderTemplate
 *
 */
export type ReminderTemplate = Prisma.ReminderTemplateModel;
/**
 * Model Reminder
 *
 */
export type Reminder = Prisma.ReminderModel;
/**
 * Model FilterWord
 *
 */
export type FilterWord = Prisma.FilterWordModel;
/**
 * Model NicknameRole
 *
 */
export type NicknameRole = Prisma.NicknameRoleModel;
/**
 * Model ClanPlayer
 *
 */
export type ClanPlayer = Prisma.ClanPlayerModel;
/**
 * Model ShopUser
 *
 */
export type ShopUser = Prisma.ShopUserModel;
/**
 * Model ShopMaterial
 *
 */
export type ShopMaterial = Prisma.ShopMaterialModel;
/**
 * Model ShopInventory
 *
 */
export type ShopInventory = Prisma.ShopInventoryModel;
/**
 * Model ShopProduct
 *
 */
export type ShopProduct = Prisma.ShopProductModel;
/**
 * Model ShopProductComponent
 *
 */
export type ShopProductComponent = Prisma.ShopProductComponentModel;
/**
 * Model ShopProductPrice
 *
 */
export type ShopProductPrice = Prisma.ShopProductPriceModel;
/**
 * Model ShopOrder
 *
 */
export type ShopOrder = Prisma.ShopOrderModel;
/**
 * Model ShopOrderItem
 *
 */
export type ShopOrderItem = Prisma.ShopOrderItemModel;
/**
 * Model ShopInventoryMovement
 *
 */
export type ShopInventoryMovement = Prisma.ShopInventoryMovementModel;
/**
 * Model ShopSale
 *
 */
export type ShopSale = Prisma.ShopSaleModel;
/**
 * Model ShopWithdrawal
 *
 */
export type ShopWithdrawal = Prisma.ShopWithdrawalModel;
/**
 * Model ShopDiscountPolicy
 *
 */
export type ShopDiscountPolicy = Prisma.ShopDiscountPolicyModel;
/**
 * Model ShopAppliedDiscount
 *
 */
export type ShopAppliedDiscount = Prisma.ShopAppliedDiscountModel;
/**
 * Model ShopCategory
 *
 */
export type ShopCategory = Prisma.ShopCategoryModel;
/**
 * Model ShopSubcategory
 *
 */
export type ShopSubcategory = Prisma.ShopSubcategoryModel;
/**
 * Model ShopOrderEvent
 *
 */
export type ShopOrderEvent = Prisma.ShopOrderEventModel;
/**
 * Model ShopOrderSurcharge
 *
 */
export type ShopOrderSurcharge = Prisma.ShopOrderSurchargeModel;
/**
 * Model Poll
 *
 */
export type Poll = Prisma.PollModel;
/**
 * Model MapBackground
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type MapBackground = Prisma.MapBackgroundModel;
/**
 * Model ProtectionMember
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type ProtectionMember = Prisma.ProtectionMemberModel;
/**
 * Model CommandUsage
 *
 */
export type CommandUsage = Prisma.CommandUsageModel;
/**
 * Model ShopFreeRequest
 *
 */
export type ShopFreeRequest = Prisma.ShopFreeRequestModel;
/**
 * Model WorldProtection
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type WorldProtection = Prisma.WorldProtectionModel;
//# sourceMappingURL=client.d.ts.map