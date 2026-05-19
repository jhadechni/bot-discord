export declare function resolveShopGuildScopes(guildId: string | null | undefined): string[];
export declare function buildShopGuildWhere(guildId: string | null | undefined): {
    guildId: string;
} | {
    guildId: {
        in: string[];
    };
};
export declare function findFirstInShopScopes<T>(guildId: string | null | undefined, resolver: (scope: string) => Promise<T | null>): Promise<T | null>;
//# sourceMappingURL=scope.d.ts.map