const SHOP_GUILD_FALLBACK = 'aquaris';

export function resolveShopGuildScopes(guildId: string | null | undefined): string[] {
  return [...new Set([guildId?.trim(), SHOP_GUILD_FALLBACK].filter((value): value is string => !!value))];
}

export function buildShopGuildWhere(guildId: string | null | undefined) {
  const scopes = resolveShopGuildScopes(guildId);
  const firstScope = scopes[0] ?? SHOP_GUILD_FALLBACK;
  return scopes.length === 1 ? { guildId: firstScope } : { guildId: { in: scopes } };
}

export async function findFirstInShopScopes<T>(
  guildId: string | null | undefined,
  resolver: (scope: string) => Promise<T | null>,
): Promise<T | null> {
  for (const scope of resolveShopGuildScopes(guildId)) {
    const result = await resolver(scope);
    if (result) return result;
  }

  return null;
}
