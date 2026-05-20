import { SlashCommandBuilder, PermissionFlagsBits, ChannelType, } from 'discord.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';
import { buildConfigOverviewEmbeds, buildSystemNoticeEmbed } from '../../utils/system-ui.js';
export const configCommand = {
    data: new SlashCommandBuilder()
        .setName('config')
        .setDescription('Configuración del servidor (solo staff)')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
        .addSubcommand(sub => sub.setName('ver').setDescription('Ver la configuración actual del bot'))
        .addSubcommand(sub => sub
        .setName('set-welcome')
        .setDescription('Canal de bienvenida')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-farewell')
        .setDescription('Canal de despedida')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-logs')
        .setDescription('Configura un canal de logs')
        .addStringOption(opt => opt
        .setName('tipo')
        .setDescription('Tipo de log')
        .setRequired(true)
        .addChoices({ name: 'General (fallback)', value: 'logsChannelId' }, { name: 'Moderación', value: 'logsModChannelId' }, { name: 'Auto-moderación', value: 'logsAutomodChannelId' }, { name: 'Reclutamiento', value: 'logsRecruitChannelId' }, { name: 'Entradas (joins)', value: 'logsJoinsChannelId' }, { name: 'Salidas (leaves)', value: 'logsLeavesChannelId' }))
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-suggestions')
        .setDescription('Canal de sugerencias')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-recruitment')
        .setDescription('Categoría para tickets de reclutamiento')
        .addStringOption(opt => opt
        .setName('categoria_id')
        .setDescription('ID de la categoría (clic derecho → Copiar ID)')
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-niveles')
        .setDescription('Canal donde se anuncian las subidas de nivel')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-boost')
        .setDescription('Canal donde se anuncian los boosts del servidor')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-rol')
        .setDescription('Asignar rol a una función del bot')
        .addStringOption(opt => opt
        .setName('tipo')
        .setDescription('Función del rol')
        .setRequired(true)
        .addChoices({ name: 'Visitante (autorol)', value: 'visitorRoleId' }, { name: 'Aspirante (reclutamiento)', value: 'aspirantRoleId' }, { name: 'Lider', value: 'liderRoleId' }, { name: 'Co-Lider', value: 'coLiderRoleId' }, { name: 'Aquaris (miembro)', value: 'aquarisRoleId' }, { name: 'Staff', value: 'staffRoleId' }))
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol de Discord').setRequired(true)))
        .addSubcommand(sub => sub
        .setName('nick-rol-agregar')
        .setDescription('Agrega un rol al sistema de autonickname')
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol de Discord').setRequired(true)))
        .addSubcommand(sub => sub
        .setName('nick-rol-emoji')
        .setDescription('Asigna o actualiza el emoji de un rol en el autonickname')
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol de Discord').setRequired(true))
        .addStringOption(opt => opt.setName('emoji').setDescription('Emoji Unicode antes del nombre (ej: 🌊 ⚔️ 🔥). Solo emojis estándar, no emojis de servidor').setRequired(true)))
        .addSubcommand(sub => sub
        .setName('nick-rol-quitar')
        .setDescription('Quita un rol del sistema de autonickname')
        .addRoleOption(opt => opt.setName('rol').setDescription('Rol de Discord').setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-shop-staff')
        .setDescription('Canal donde el bot notifica los nuevos pedidos al staff')
        .addChannelOption(opt => opt
        .setName('canal')
        .setDescription('Canal de texto')
        .addChannelTypes(ChannelType.GuildText)
        .setRequired(true)))
        .addSubcommand(sub => sub
        .setName('set-shop-categoria')
        .setDescription('Categoría donde se crean los canales temporales de pedido')
        .addStringOption(opt => opt
        .setName('categoria_id')
        .setDescription('ID de la categoría (clic derecho → Copiar ID)')
        .setRequired(true))),
    async execute(interaction) {
        await interaction.deferReply({ ephemeral: true });
        const guildId = interaction.guildId;
        if (!guildId)
            return;
        const sub = interaction.options.getSubcommand();
        if (sub === 'ver') {
            const config = await getOrCreateGuildConfig(guildId);
            await interaction.editReply({ embeds: buildConfigOverviewEmbeds(config) });
            return;
        }
        if (sub === 'set-welcome') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { welcomeChannelId: channel.id },
                create: { guildId, welcomeChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de bienvenida actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-farewell') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { farewellChannelId: channel.id },
                create: { guildId, farewellChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de despedida actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-logs') {
            const tipo = interaction.options.getString('tipo', true);
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { [tipo]: channel.id },
                create: { guildId, [tipo]: channel.id },
            });
            const labels = {
                logsChannelId: 'General (fallback)',
                logsModChannelId: 'Moderación',
                logsAutomodChannelId: 'Auto-moderación',
                logsRecruitChannelId: 'Reclutamiento',
                logsJoinsChannelId: 'Entradas',
                logsLeavesChannelId: 'Salidas',
            };
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de logs actualizado', `**${labels[tipo]}** ahora usa <#${channel.id}>.`)],
            });
            return;
        }
        if (sub === 'set-suggestions') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { suggestionsChannelId: channel.id },
                create: { guildId, suggestionsChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de sugerencias actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-recruitment') {
            const categoryId = interaction.options.getString('categoria_id', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { recruitmentCategoryId: categoryId },
                create: { guildId, recruitmentCategoryId: categoryId },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Categoria de reclutamiento actualizada', `Nueva categoria: \`${categoryId}\``)],
            });
            return;
        }
        if (sub === 'set-niveles') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { levelUpChannelId: channel.id },
                create: { guildId, levelUpChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de niveles actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-boost') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { boostChannelId: channel.id },
                create: { guildId, boostChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal de boost actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-rol') {
            const tipo = interaction.options.getString('tipo', true);
            const rol = interaction.options.getRole('rol', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { [tipo]: rol.id },
                create: { guildId, [tipo]: rol.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Rol actualizado', `Nuevo rol: <@&${rol.id}>`)],
            });
            return;
        }
        if (sub === 'set-shop-staff') {
            const channel = interaction.options.getChannel('canal', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { shopStaffChannelId: channel.id },
                create: { guildId, shopStaffChannelId: channel.id },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Canal staff de tienda actualizado', `Nuevo canal: <#${channel.id}>`)],
            });
            return;
        }
        if (sub === 'set-shop-categoria') {
            const categoryId = interaction.options.getString('categoria_id', true);
            await prisma.guildConfig.upsert({
                where: { guildId },
                update: { shopCategoryId: categoryId },
                create: { guildId, shopCategoryId: categoryId },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Categoria de pedidos actualizada', `Nueva categoria: \`${categoryId}\``)],
            });
            return;
        }
        if (sub === 'nick-rol-agregar') {
            const rol = interaction.options.getRole('rol', true);
            await prisma.nicknameRole.upsert({
                where: { guildId_roleId: { guildId, roleId: rol.id } },
                update: {},
                create: { guildId, roleId: rol.id, emoji: null },
            });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Rol agregado al autonickname', `Rol: <@&${rol.id}>`)],
            });
            return;
        }
        if (sub === 'nick-rol-emoji') {
            const rol = interaction.options.getRole('rol', true);
            const emoji = interaction.options.getString('emoji', true).trim();
            const exists = await prisma.nicknameRole.findUnique({
                where: { guildId_roleId: { guildId, roleId: rol.id } },
            });
            if (!exists) {
                await interaction.editReply({
                    embeds: [buildSystemNoticeEmbed('Rol no encontrado', `<@&${rol.id}> no está en el sistema de autonickname. Agrégalo primero con \`/config nick-rol-agregar\`.`)],
                });
                return;
            }
            await prisma.nicknameRole.update({
                where: { guildId_roleId: { guildId, roleId: rol.id } },
                data: { emoji: emoji || null },
            });
            const desc = emoji ? `Rol: <@&${rol.id}> — Emoji: ${emoji}` : `Rol: <@&${rol.id}> — Emoji eliminado`;
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Emoji actualizado', desc)],
            });
            return;
        }
        if (sub === 'nick-rol-quitar') {
            const rol = interaction.options.getRole('rol', true);
            await prisma.nicknameRole.deleteMany({ where: { guildId, roleId: rol.id } });
            await interaction.editReply({
                embeds: [buildSystemNoticeEmbed('Rol quitado del autonickname', `Rol: <@&${rol.id}>`)],
            });
            return;
        }
    },
};
//# sourceMappingURL=config.command.js.map