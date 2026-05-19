import "dotenv/config";
function required(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}
export const env = {
    discordToken: required("DISCORD_TOKEN"),
    clientId: required("CLIENT_ID"),
    guildId: required("GUILD_ID"),
    databaseUrl: required("DATABASE_URL"),
    nodeEnv: process.env.NODE_ENV || "development",
    perspectiveApiKey: process.env.PERSPECTIVE_API_KEY ?? null,
};
//# sourceMappingURL=env.js.map