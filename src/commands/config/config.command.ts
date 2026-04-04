import {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
  ChannelType,
} from 'discord.js';
import type { Command } from '../../types/command.js';
import { prisma } from '../../database/prisma.js';
import { getOrCreateGuildConfig } from '../../database/guild-config.js';

export const configCommand: Command = {
  data: new SlashCommandBuilder()
    .setName('config')
    .setDescription('Configuración del servidor (solo staff)')
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageGuild)
    .addSubcommand(sub =>
      sub.setName('ver').setDescription('Ver la configuración actual del bot'),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-welcome')
        .setDescription('Canal de bienvenida y despedida')
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-logs')
        .setDescription('Configura un canal de logs')
        .addStringOption(opt =>
          opt
            .setName('tipo')
            .setDescription('Tipo de log')
            .setRequired(true)
            .addChoices(
              { name: 'General (fallback)', value: 'logsChannelId' },
              { name: 'Moderación', value: 'logsModChannelId' },
              { name: 'Auto-moderación', value: 'logsAutomodChannelId' },
              { name: 'Reclutamiento', value: 'logsRecruitChannelId' },
              { name: 'Entradas (joins)', value: 'logsJoinsChannelId' },
              { name: 'Salidas (leaves)', value: 'logsLeavesChannelId' },
            ),
        )
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-suggestions')
        .setDescription('Canal de sugerencias')
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-recruitment')
        .setDescription('Categoría para tickets de reclutamiento')
        .addStringOption(opt =>
          opt
            .setName('categoria_id')
            .setDescription('ID de la categoría (clic derecho → Copiar ID)')
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-niveles')
        .setDescription('Canal donde se anuncian las subidas de nivel')
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-boost')
        .setDescription('Canal donde se anuncian los boosts del servidor')
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-rol')
        .setDescription('Asignar rol a una función del bot')
        .addStringOption(opt =>
          opt
            .setName('tipo')
            .setDescription('Función del rol')
            .setRequired(true)
            .addChoices(
              { name: 'Visitante (autorol)', value: 'visitorRoleId' },
              { name: 'Aspirante (reclutamiento)', value: 'aspirantRoleId' },
              { name: 'Lider', value: 'liderRoleId' },
              { name: 'Co-Lider', value: 'coLiderRoleId' },
              { name: 'Aquaris (miembro)', value: 'aquarisRoleId' },
              { name: 'Staff', value: 'staffRoleId' },
            ),
        )
        .addRoleOption(opt =>
          opt.setName('rol').setDescription('Rol de Discord').setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('nick-rol-agregar')
        .setDescription('Agrega un rol al sistema de autonickname')
        .addRoleOption(opt =>
          opt.setName('rol').setDescription('Rol de Discord').setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('nick-rol-quitar')
        .setDescription('Quita un rol del sistema de autonickname')
        .addRoleOption(opt =>
          opt.setName('rol').setDescription('Rol de Discord').setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-shop-staff')
        .setDescription('Canal donde el bot notifica los nuevos pedidos al staff')
        .addChannelOption(opt =>
          opt
            .setName('canal')
            .setDescription('Canal de texto')
            .addChannelTypes(ChannelType.GuildText)
            .setRequired(true),
        ),
    )
    .addSubcommand(sub =>
      sub
        .setName('set-shop-categoria')
        .setDescription('Categoría donde se crean los canales temporales de pedido')
        .addStringOption(opt =>
          opt
            .setName('categoria_id')
            .setDescription('ID de la categoría (clic derecho → Copiar ID)')
            .setRequired(true),
        ),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const sub = interaction.options.getSubcommand();

    if (sub === 'ver') {
      const config = await getOrCreateGuildConfig(guildId);
      const ch = (id: string | null | undefined) => (id ? `<#${id}>` : '—');
      const ro = (id: string | null | undefined) => (id ? `<@&${id}>` : '—');
      const id = (v: string | null | undefined) => (v ? `\`${v}\`` : '—');

      const embedCanales = new EmbedBuilder()
        .setColor(0x57f287)
        .setTitle('⚙️ Configuración del servidor')
        .setDescription('**📢 Canales principales**')
        .addFields(
          { name: '👋 Bienvenida / Despedida', value: ch(config.welcomeChannelId), inline: true },
          { name: '💡 Sugerencias',            value: ch(config.suggestionsChannelId), inline: true },
          { name: '⭐ Subida de nivel',         value: ch(config.levelUpChannelId), inline: true },
          { name: '🚀 Boost',                   value: ch(config.boostChannelId), inline: true },
          { name: '🎯 Categoría reclutamiento', value: id(config.recruitmentCategoryId), inline: true },
        )
        .setTimestamp();

      const embedLogs = new EmbedBuilder()
        .setColor(0x5865f2)
        .setDescription('**📋 Canales de logs**')
        .addFields(
          { name: '📋 General (fallback)', value: ch(config.logsChannelId),        inline: true },
          { name: '🔨 Moderación',         value: ch(config.logsModChannelId),     inline: true },
          { name: '🤖 Auto-moderación',    value: ch(config.logsAutomodChannelId), inline: true },
          { name: '📥 Reclutamiento',      value: ch(config.logsRecruitChannelId), inline: true },
          { name: '👤 Entradas (joins)',   value: ch(config.logsJoinsChannelId),   inline: true },
          { name: '🚪 Salidas (leaves)',   value: ch(config.logsLeavesChannelId),  inline: true },
        );

      const embedRoles = new EmbedBuilder()
        .setColor(0xfaa61a)
        .setDescription('**🎭 Roles  ·  🏪 Tienda**')
        .addFields(
          { name: '🟢 Visitante',   value: ro(config.visitorRoleId),  inline: true },
          { name: '🔵 Aspirante',   value: ro(config.aspirantRoleId), inline: true },
          { name: '👑 Lider',       value: ro(config.liderRoleId),    inline: true },
          { name: '🥈 Co-Lider',    value: ro(config.coLiderRoleId),  inline: true },
          { name: '💧 Aquaris',     value: ro(config.aquarisRoleId),  inline: true },
          { name: '🛡️ Staff',      value: ro(config.staffRoleId),    inline: true },
          { name: '📣 Canal staff (pedidos)',    value: ch(config.shopStaffChannelId), inline: true },
          { name: '🗂️ Categoría tickets pedido', value: id(config.shopCategoryId),    inline: true },
        );

      await interaction.editReply({ embeds: [embedCanales, embedLogs, embedRoles] });
      return;
    }

    if (sub === 'set-welcome') {
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { welcomeChannelId: channel.id },
        create: { guildId, welcomeChannelId: channel.id },
      });
      await interaction.editReply(`✅ Canal de bienvenida: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-logs') {
      const tipo = interaction.options.getString('tipo', true) as
        | 'logsChannelId' | 'logsModChannelId' | 'logsAutomodChannelId'
        | 'logsRecruitChannelId' | 'logsJoinsChannelId' | 'logsLeavesChannelId';
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { [tipo]: channel.id },
        create: { guildId, [tipo]: channel.id },
      });
      const labels: Record<string, string> = {
        logsChannelId: 'General (fallback)',
        logsModChannelId: 'Moderación',
        logsAutomodChannelId: 'Auto-moderación',
        logsRecruitChannelId: 'Reclutamiento',
        logsJoinsChannelId: 'Entradas',
        logsLeavesChannelId: 'Salidas',
      };
      await interaction.editReply(`✅ Logs **${labels[tipo]}**: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-suggestions') {
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { suggestionsChannelId: channel.id },
        create: { guildId, suggestionsChannelId: channel.id },
      });
      await interaction.editReply(`✅ Canal de sugerencias: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-recruitment') {
      const categoryId = interaction.options.getString('categoria_id', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { recruitmentCategoryId: categoryId },
        create: { guildId, recruitmentCategoryId: categoryId },
      });
      await interaction.editReply(`✅ Categoría de reclutamiento: \`${categoryId}\``);
      return;
    }

    if (sub === 'set-niveles') {
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { levelUpChannelId: channel.id },
        create: { guildId, levelUpChannelId: channel.id },
      });
      await interaction.editReply(`✅ Canal de subida de nivel: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-boost') {
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { boostChannelId: channel.id },
        create: { guildId, boostChannelId: channel.id },
      });
      await interaction.editReply(`✅ Canal de boost: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-rol') {
      const tipo = interaction.options.getString('tipo', true) as
        | 'visitorRoleId'
        | 'aspirantRoleId'
        | 'liderRoleId'
        | 'coLiderRoleId'
        | 'aquarisRoleId'
        | 'staffRoleId';
      const rol = interaction.options.getRole('rol', true);
      await prisma.guildConfig.upsert({
        where: { guildId },
        update: { [tipo]: rol.id },
        create: { guildId, [tipo]: rol.id },
      });
      await interaction.editReply(`✅ Rol actualizado: <@&${rol.id}>`);
      return;
    }

    if (sub === 'set-shop-staff') {
      const channel = interaction.options.getChannel('canal', true);
      await prisma.guildConfig.upsert({
        where:  { guildId },
        update: { shopStaffChannelId: channel.id },
        create: { guildId, shopStaffChannelId: channel.id },
      });
      await interaction.editReply(`✅ Canal de notificaciones de tienda: <#${channel.id}>`);
      return;
    }

    if (sub === 'set-shop-categoria') {
      const categoryId = interaction.options.getString('categoria_id', true);
      await prisma.guildConfig.upsert({
        where:  { guildId },
        update: { shopCategoryId: categoryId },
        create: { guildId, shopCategoryId: categoryId },
      });
      await interaction.editReply(`✅ Categoría de canales de pedido: \`${categoryId}\``);
      return;
    }

    if (sub === 'nick-rol-agregar') {
      const rol = interaction.options.getRole('rol', true);
      await prisma.nicknameRole.upsert({
        where: { guildId_roleId: { guildId, roleId: rol.id } },
        update: {},
        create: { guildId, roleId: rol.id },
      });
      await interaction.editReply(`✅ <@&${rol.id}> agregado al autonickname.`);
      return;
    }

    if (sub === 'nick-rol-quitar') {
      const rol = interaction.options.getRole('rol', true);
      await prisma.nicknameRole.deleteMany({ where: { guildId, roleId: rol.id } });
      await interaction.editReply(`✅ <@&${rol.id}> quitado del autonickname.`);
    }
  },
};
