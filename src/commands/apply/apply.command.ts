import {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  ActionRowBuilder,
  EmbedBuilder,
  ButtonBuilder,
  ButtonStyle,
} from "discord.js";
import type { Command } from "../../types/command.js";

export const applyCommand: Command = {
  data: new SlashCommandBuilder()
    .setName("apply")
    .setDescription("Abre una solicitud de ingreso al clan Aquaris"),

  async execute(interaction) {
    const select = new StringSelectMenuBuilder()
      .setCustomId("apply_role_select")
      .setPlaceholder("¿En qué puedes aportar?")
      .setMinValues(1)
      .setMaxValues(5)
      .addOptions(
        new StringSelectMenuOptionBuilder().setLabel("Builder").setDescription("Construcción y diseño").setValue("Builder").setEmoji("🏗️"),
        new StringSelectMenuOptionBuilder().setLabel("Técnico / Redstone").setDescription("Farms, mecánicas y redstone").setValue("Técnico").setEmoji("⚙️"),
        new StringSelectMenuOptionBuilder().setLabel("PvP").setDescription("Combate y defensa del clan").setValue("PvP").setEmoji("⚔️"),
        new StringSelectMenuOptionBuilder().setLabel("Farmer").setDescription("Producción de recursos").setValue("Farmer").setEmoji("🌾"),
        new StringSelectMenuOptionBuilder().setLabel("Otro").setDescription("Otro rol o perfil").setValue("Otro").setEmoji("✨"),
      );

    const embed = new EmbedBuilder()
      .setColor(0x5865f2)
      .setTitle("Solicitud de ingreso — Aquaris")
      .setDescription("Selecciona el rol en el que puedes aportar y pulsa **Continuar**.");

    const confirmBtn = new ButtonBuilder()
      .setCustomId("apply_confirm_")
      .setLabel("Continuar")
      .setStyle(ButtonStyle.Primary)
      .setDisabled(true);

    await interaction.reply({
      embeds: [embed],
      components: [
        new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select),
        new ActionRowBuilder<ButtonBuilder>().addComponents(confirmBtn),
      ],
      ephemeral: true,
    });
  },
};
