import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
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
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
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
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.guildConfig`: Exposes CRUD operations for the **GuildConfig** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more GuildConfigs
  * const guildConfigs = await prisma.guildConfig.findMany()
  * ```
  */
    get guildConfig(): Prisma.GuildConfigDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.suggestion`: Exposes CRUD operations for the **Suggestion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Suggestions
      * const suggestions = await prisma.suggestion.findMany()
      * ```
      */
    get suggestion(): Prisma.SuggestionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.suggestionVote`: Exposes CRUD operations for the **SuggestionVote** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SuggestionVotes
      * const suggestionVotes = await prisma.suggestionVote.findMany()
      * ```
      */
    get suggestionVote(): Prisma.SuggestionVoteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.recruitmentTicket`: Exposes CRUD operations for the **RecruitmentTicket** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more RecruitmentTickets
      * const recruitmentTickets = await prisma.recruitmentTicket.findMany()
      * ```
      */
    get recruitmentTicket(): Prisma.RecruitmentTicketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.moderationLog`: Exposes CRUD operations for the **ModerationLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ModerationLogs
      * const moderationLogs = await prisma.moderationLog.findMany()
      * ```
      */
    get moderationLog(): Prisma.ModerationLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userActivity`: Exposes CRUD operations for the **UserActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserActivities
      * const userActivities = await prisma.userActivity.findMany()
      * ```
      */
    get userActivity(): Prisma.UserActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.monthlyActivity`: Exposes CRUD operations for the **MonthlyActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MonthlyActivities
      * const monthlyActivities = await prisma.monthlyActivity.findMany()
      * ```
      */
    get monthlyActivity(): Prisma.MonthlyActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reminderTemplate`: Exposes CRUD operations for the **ReminderTemplate** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ReminderTemplates
      * const reminderTemplates = await prisma.reminderTemplate.findMany()
      * ```
      */
    get reminderTemplate(): Prisma.ReminderTemplateDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Reminders
      * const reminders = await prisma.reminder.findMany()
      * ```
      */
    get reminder(): Prisma.ReminderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.filterWord`: Exposes CRUD operations for the **FilterWord** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more FilterWords
      * const filterWords = await prisma.filterWord.findMany()
      * ```
      */
    get filterWord(): Prisma.FilterWordDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.nicknameRole`: Exposes CRUD operations for the **NicknameRole** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more NicknameRoles
      * const nicknameRoles = await prisma.nicknameRole.findMany()
      * ```
      */
    get nicknameRole(): Prisma.NicknameRoleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clanPlayer`: Exposes CRUD operations for the **ClanPlayer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ClanPlayers
      * const clanPlayers = await prisma.clanPlayer.findMany()
      * ```
      */
    get clanPlayer(): Prisma.ClanPlayerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopUser`: Exposes CRUD operations for the **ShopUser** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopUsers
      * const shopUsers = await prisma.shopUser.findMany()
      * ```
      */
    get shopUser(): Prisma.ShopUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopMaterial`: Exposes CRUD operations for the **ShopMaterial** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopMaterials
      * const shopMaterials = await prisma.shopMaterial.findMany()
      * ```
      */
    get shopMaterial(): Prisma.ShopMaterialDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopInventory`: Exposes CRUD operations for the **ShopInventory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopInventories
      * const shopInventories = await prisma.shopInventory.findMany()
      * ```
      */
    get shopInventory(): Prisma.ShopInventoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopProduct`: Exposes CRUD operations for the **ShopProduct** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopProducts
      * const shopProducts = await prisma.shopProduct.findMany()
      * ```
      */
    get shopProduct(): Prisma.ShopProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopProductComponent`: Exposes CRUD operations for the **ShopProductComponent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopProductComponents
      * const shopProductComponents = await prisma.shopProductComponent.findMany()
      * ```
      */
    get shopProductComponent(): Prisma.ShopProductComponentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopProductPrice`: Exposes CRUD operations for the **ShopProductPrice** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopProductPrices
      * const shopProductPrices = await prisma.shopProductPrice.findMany()
      * ```
      */
    get shopProductPrice(): Prisma.ShopProductPriceDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopOrder`: Exposes CRUD operations for the **ShopOrder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopOrders
      * const shopOrders = await prisma.shopOrder.findMany()
      * ```
      */
    get shopOrder(): Prisma.ShopOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopOrderItem`: Exposes CRUD operations for the **ShopOrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopOrderItems
      * const shopOrderItems = await prisma.shopOrderItem.findMany()
      * ```
      */
    get shopOrderItem(): Prisma.ShopOrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopInventoryMovement`: Exposes CRUD operations for the **ShopInventoryMovement** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopInventoryMovements
      * const shopInventoryMovements = await prisma.shopInventoryMovement.findMany()
      * ```
      */
    get shopInventoryMovement(): Prisma.ShopInventoryMovementDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopSale`: Exposes CRUD operations for the **ShopSale** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopSales
      * const shopSales = await prisma.shopSale.findMany()
      * ```
      */
    get shopSale(): Prisma.ShopSaleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopWithdrawal`: Exposes CRUD operations for the **ShopWithdrawal** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopWithdrawals
      * const shopWithdrawals = await prisma.shopWithdrawal.findMany()
      * ```
      */
    get shopWithdrawal(): Prisma.ShopWithdrawalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopDiscountPolicy`: Exposes CRUD operations for the **ShopDiscountPolicy** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopDiscountPolicies
      * const shopDiscountPolicies = await prisma.shopDiscountPolicy.findMany()
      * ```
      */
    get shopDiscountPolicy(): Prisma.ShopDiscountPolicyDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopAppliedDiscount`: Exposes CRUD operations for the **ShopAppliedDiscount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopAppliedDiscounts
      * const shopAppliedDiscounts = await prisma.shopAppliedDiscount.findMany()
      * ```
      */
    get shopAppliedDiscount(): Prisma.ShopAppliedDiscountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopCategory`: Exposes CRUD operations for the **ShopCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopCategories
      * const shopCategories = await prisma.shopCategory.findMany()
      * ```
      */
    get shopCategory(): Prisma.ShopCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopSubcategory`: Exposes CRUD operations for the **ShopSubcategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopSubcategories
      * const shopSubcategories = await prisma.shopSubcategory.findMany()
      * ```
      */
    get shopSubcategory(): Prisma.ShopSubcategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.shopOrderEvent`: Exposes CRUD operations for the **ShopOrderEvent** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ShopOrderEvents
      * const shopOrderEvents = await prisma.shopOrderEvent.findMany()
      * ```
      */
    get shopOrderEvent(): Prisma.ShopOrderEventDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.poll`: Exposes CRUD operations for the **Poll** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Polls
      * const polls = await prisma.poll.findMany()
      * ```
      */
    get poll(): Prisma.PollDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.mapBackground`: Exposes CRUD operations for the **MapBackground** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more MapBackgrounds
      * const mapBackgrounds = await prisma.mapBackground.findMany()
      * ```
      */
    get mapBackground(): Prisma.MapBackgroundDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.protectionMember`: Exposes CRUD operations for the **ProtectionMember** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProtectionMembers
      * const protectionMembers = await prisma.protectionMember.findMany()
      * ```
      */
    get protectionMember(): Prisma.ProtectionMemberDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.worldProtection`: Exposes CRUD operations for the **WorldProtection** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more WorldProtections
      * const worldProtections = await prisma.worldProtection.findMany()
      * ```
      */
    get worldProtection(): Prisma.WorldProtectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map