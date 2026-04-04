import {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
} from "discord.js";
import type { Command } from "../../types/command.js";

export const applyCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("apply")
    .setDescription("Abre una solicitud de ingreso al clan Aquaris"),

  async execute(interaction) {
    const select = new StringSelectMenuBuilder()
      .setCustomId("apply_role_select")
      .setPlaceholder("Selecciona uno o varios roles...")
      .setMinValues(1)
      .setMaxValues(5)
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel("Builder")
          .setDescription("Construcción y diseño")
          .setValue("Builder")
          .setEmoji("🏗️"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Técnico / Redstone")
          .setDescription("Farms, mecánicas y redstone")
          .setValue("Técnico")
          .setEmoji("⚙️"),
        new StringSelectMenuOptionBuilder()
          .setLabel("PvP")
          .setDescription("Combate y defensa del clan")
          .setValue("PvP")
          .setEmoji("⚔️"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Farmer")
          .setDescription("Producción de recursos")
          .setValue("Farmer")
          .setEmoji("🌾"),
        new StringSelectMenuOptionBuilder()
          .setLabel("Otro")
          .setDescription("Otro rol o perfil")
          .setValue("Otro")
          .setEmoji("✨"),
      );

    const row = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
      select,
    );

    await interaction.reply({
      content:
        "## 📋 Solicitud de ingreso — Aquaris\nSelecciona los roles en los que puedes aportar (puedes elegir varios):",
      components: [row],
      ephemeral: true,
    });
  },
};
