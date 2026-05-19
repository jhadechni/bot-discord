const SHOP_GUILD_FALLBACK = 'aquaris';
export function resolveShopGuildScopes(guildId) {
    return [...new Set([guildId?.trim(), SHOP_GUILD_FALLBACK].filter((value) => !!value))];
}
export function buildShopGuildWhere(guildId) {
    const scopes = resolveShopGuildScopes(guildId);
    const firstScope = scopes[0] ?? SHOP_GUILD_FALLBACK;
    return scopes.length === 1 ? { guildId: firstScope } : { guildId: { in: scopes } };
}
export async function findFirstInShopScopes(guildId, resolver) {
    for (const scope of resolveShopGuildScopes(guildId)) {
        const result = await resolver(scope);
        if (result)
            return result;
    }
    return null;
}
//# sourceMappingURL=scope.js.map