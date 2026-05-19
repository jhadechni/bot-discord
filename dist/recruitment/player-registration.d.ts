import { ActionRowBuilder, ButtonBuilder, ModalBuilder, StringSelectMenuBuilder, type GuildMember } from 'discord.js';
export declare const CLAN_PLAYER_CUSTOM_IDS: {
    readonly basicsModal: "clanplayer:s1:";
    readonly additionalModal: "clanplayer:s2:";
    readonly continueButton: "clanplayer:continue:";
    readonly editBasicsButton: "clanplayer:edit-basic:";
    readonly editAdditionalButton: "clanplayer:edit-extra:";
    readonly rankSelect: "clanplayer:rank:";
    readonly minecraftRankSelect: "clanplayer:mc-rank:";
    readonly statusSelect: "clanplayer:status:";
    readonly confirmButton: "clanplayer:confirm:";
    readonly cancelButton: "clanplayer:cancel:";
};
export declare const DISCORD_RANK_VALUES: readonly ["Aquaris", "Comerciante", "Reclutador", "Staff", "Co-Líder", "Líder"];
export declare const MINECRAFT_RANK_VALUES: readonly ["dueno", "colider", "miembro"];
export declare const CLAN_PLAYER_STATUS_VALUES: readonly ["activo", "ausente", "inactivo", "retirado"];
type MinecraftRankValue = (typeof MINECRAFT_RANK_VALUES)[number];
type ClanPlayerStatusValue = (typeof CLAN_PLAYER_STATUS_VALUES)[number];
export type ClanPlayerDraft = {
    discord: string;
    fullName: string;
    minecraftNick: string;
    rank: string;
    minecraftRank: MinecraftRankValue;
    joinedAt: string;
    country: string;
    utcOffset: string;
    status: ClanPlayerStatusValue;
    notes: string;
};
type ClanPlayerRegistrationSession = {
    id: string;
    guildId: string;
    channelId: string;
    ticketId: string;
    applicantUserId: string;
    draft: ClanPlayerDraft;
    createdAt: number;
    updatedAt: number;
};
export declare function canManageClanPlayers(member: GuildMember): Promise<boolean>;
export declare function findAcceptedInterviewTicket(guildId: string, channelId: string): Promise<{
    createdAt: Date;
    id: string;
    guildId: string;
    channelId: string | null;
    updatedAt: Date;
    userId: string;
    minecraftRole: string | null;
    answers: import("@prisma/client/runtime/client").JsonValue | null;
    status: string;
    staleAlertedAt: Date | null;
} | null>;
export declare function startClanPlayerRegistrationSession(params: {
    guildId: string;
    channelId: string;
    ticketId: string;
    applicantUserId: string;
    applicantMember: GuildMember | null;
}): ClanPlayerRegistrationSession;
export declare function clearClanPlayerRegistrationSession(sessionId: string): void;
export declare function buildClanPlayerBasicsModal(session: ClanPlayerRegistrationSession): ModalBuilder;
export declare function buildClanPlayerAdditionalModal(session: ClanPlayerRegistrationSession): ModalBuilder;
export declare function applyBasicsModalValues(sessionId: string, values: {
    discord: string;
    fullName: string;
    minecraftNick: string;
    joinedAt: string;
    country: string;
}): ClanPlayerRegistrationSession | null;
export declare function applyAdditionalModalValues(sessionId: string, values: {
    utcOffset: string;
    notes: string;
}): ClanPlayerRegistrationSession | null;
export declare function applySessionSelectValue(sessionId: string, field: 'rank' | 'minecraftRank' | 'status', value: string): ClanPlayerRegistrationSession | null;
export declare function buildClanPlayerStepOneReply(session: ClanPlayerRegistrationSession): {
    embeds: import("discord.js").EmbedBuilder[];
    components: ActionRowBuilder<ButtonBuilder>[];
};
export declare function buildClanPlayerReviewReply(session: ClanPlayerRegistrationSession): {
    embeds: import("discord.js").EmbedBuilder[];
    components: (ActionRowBuilder<ButtonBuilder> | ActionRowBuilder<StringSelectMenuBuilder>)[];
};
export declare function getClanPlayerSession(sessionId: string): ClanPlayerRegistrationSession | null;
export declare function saveClanPlayerRegistration(sessionId: string): Promise<{
    ok: false;
    message: string;
    player?: never;
    channelId?: never;
    applicantUserId?: never;
} | {
    ok: true;
    player: {
        createdAt: Date;
        id: string;
        updatedAt: Date;
        status: string;
        rank: string;
        notes: string | null;
        discord: string;
        fullName: string;
        minecraftNick: string;
        minecraftRank: string;
        joinedAt: Date;
        country: string;
        utcOffset: string;
    };
    channelId: string;
    applicantUserId: string;
    message?: never;
}>;
export {};
//# sourceMappingURL=player-registration.d.ts.map