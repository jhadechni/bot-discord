import {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} from "discord.js";
import type { Command } from "../../types/command.js";
import { prisma } from "../../database/prisma.js";
import { getOrCreateGuildConfig } from "../../database/guild-config.js";
import { getLogChannel } from "../../utils/log-channel.js";

export const warnCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("warn")
    .setDescription("Advierte a un usuario")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption((opt) =>
      opt
        .setName("usuario")
        .setDescription("Usuario a advertir")
        .setRequired(true),
    )
    .addStringOption((opt) =>
      opt
        .setName("motivo")
        .setDescription("Motivo de la advertencia")
        .setRequired(true),
    ),

  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) return;

    const target = interaction.options.getUser("usuario", true);
    const reason = interaction.options.getString("motivo", true);

    const log = await prisma.moderationLog.create({
      data: {
        guildId,
        targetId: target.id,
        moderatorId: interaction.user.id,
        type: "WARN",
        reason,
      },
    });

    try {
      await target.send(
        `⚠️ Has recibido una advertencia en **${interaction.guild?.name}**.\nMotivo: ${reason}`,
      );
    } catch {
      // usuario tiene DMs desactivados
    }

    const config = await getOrCreateGuildConfig(guildId);
    const logsChannel = getLogChannel(interaction.guild!, config, "mod");
    const warningsCount = await prisma.moderationLog.count({
      where: { guildId, targetId: target.id, type: "WARN" },
    });
    if (logsChannel) {
      const embed = new EmbedBuilder()
        .setColor(0xfee75c)
        .setTitle("⚠️ **Has sido advertido/a** ⚠️")
        .setDescription(
          `> **Usuario/a:** <@${target.id}>
           > **Moderador:** <@${interaction.user.id}>`,
        )
        .setFields(
          { name: '', value: `\`\`\`Motivo: ${reason}\`\`\`` },
          { name: "", value: `***Advertencia ${warningsCount} de 3***`, inline: true },
          { name: "", value: `ID: \`${log.id}\``, inline: false },
        ).setTimestamp();

      await logsChannel.send({ embeds: [embed] });
    }

    await interaction.editReply(
      `✅ Advertencia registrada para <@${target.id}>. ID: \`${log.id}\``,
    );
  },
};
