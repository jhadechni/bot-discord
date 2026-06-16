import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  PermissionFlagsBits,
  ModalBuilder,
  StringSelectMenuBuilder,
  StringSelectMenuOptionBuilder,
  TextInputBuilder,
  TextInputStyle,
  ThreadAutoArchiveDuration,
  type Guild,
  type Message,
  type ButtonInteraction,
} from 'discord.js';
import { randomUUID } from 'node:crypto';
import type { BotEvent } from '../types/event.js';
import type { AquarisClient } from '../core/client.js';
import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import {
  SUGGESTION_COLORS,
  buildSuggestionErrorEmbed,
  buildSuggestionNoticeEmbed,
  buildSuggestionPublicEmbed,
  buildSuggestionVoteButtons,
} from '../utils/suggestion-ui.js';
import { getFilteredWords, findBannedWord } from '../utils/filter.js';
import { renderLogsPage } from '../commands/moderation/logs.command.js';
import { renderWarningsPage } from '../commands/moderation/warnings.command.js';
import { parseTime, formatTime } from '../utils/time.js';
import { logger } from '../core/logger.js';
import { upsertShopUser } from '../database/shop-user.js';
import {
  applyManualVolumeDiscounts,
  getEligibleManualVolumeDiscounts,
  normalizeDiscountType,
} from '../shop/discounts.js';
import {
  getOrderFull,
  buildOrderEmbed,
  buildAcceptedButtons,
  buildPendingButtons,
  createPendingOrder,
  formatOrderStockStatusLine,
  getOrderStockAssessment,
  releaseOrderStock,
  consumeOrderStock,
  addSurchargeToOrder,
} from '../shop/order-utils.js';
import {
  buildCatalogEntryView,
  buildCatalogView,
  buildProductDetailEmbed,
  buildSearchView,
  buildVariantDetailEmbed,
  buildVariantSelectRow,
  isParentProduct,
  queryCatalogProducts,
  searchCatalogProducts,
} from '../shop/catalog.js';
import type { CatalogMode } from '../shop/catalog.js';
import {
  getCart,
  setCart,
  deleteCart,
  buildCartView,
  buildCartSearchView,
  buildQtyModal,
  queryCartProducts,
} from '../shop/cart.js';
import { buildProductContentsSummary } from '../shop/product-contents.js';
import { hasProductInventoryDefinition, resolvePresentationTypeName } from '../shop/quantities.js';
import {
  CLAN_PLAYER_CUSTOM_IDS,
  applyAdditionalModalValues,
  applyBasicsModalValues,
  applySessionSelectValue,
  buildClanPlayerAdditionalModal,
  buildClanPlayerBasicsModal,
  buildClanPlayerReviewReply,
  buildClanPlayerStepOneReply,
  canManageClanPlayers,
  clearClanPlayerRegistrationSession,
  getClanPlayerSession,
  saveClanPlayerRegistration,
} from '../recruitment/player-registration.js';
import {
  RECRUITMENT_COLORS,
  buildRecruitmentAcceptedApplicationEmbed,
  buildRecruitmentApplicationEmbed,
  buildRecruitmentErrorEmbed,
  buildRecruitmentLogEmbed,
  buildRecruitmentNoticeEmbed,
  buildRecruitmentRejectedApplicationEmbed,
  buildRecruitmentTicketWelcomeEmbed,
  buildRecruitmentUserMessageEmbed,
  normalizeRecruitmentReason,
} from '../utils/recruitment-ui.js';
import {
  REMINDER_COLORS,
  buildKitReminderListEmbed,
  buildReminderErrorEmbed,
  buildReminderNoticeEmbed,
} from '../utils/reminder-ui.js';
import {
  SHOP_COLORS,
  buildOrderReceivedEmbed,
  buildShopErrorEmbed,
  buildShopNoticeEmbed,
} from '../utils/shop-ui.js';
import { formatPrice } from '../utils/ui.js';
import { buildSystemErrorEmbed } from '../utils/system-ui.js';
import { parseNotifRoles, buildNotifEphemeral } from '../commands/notif/notif.command.js';
import {
  parseExpulsionReasons,
  pendingExpulsions,
  buildExpulsionConfirmEmbed,
  buildReasonSelectMenu,
  buildConfirmRow,
  executeExpulsion,
} from '../commands/expulsion/expulsion.command.js';
import { buildAquarisEmbed, AQUARIS_COLORS } from '../utils/message-ui.js';

// ── Votación de reclutamiento ────────────────────────────────────────────────
function buildRecruitmentVoteComponents(
  approveCount: number,
  rejectCount: number,
  eligibleCount: number,
  ticketId: string,
): ActionRowBuilder<ButtonBuilder>[] {
  const threshold    = Math.floor(eligibleCount / 2) + 1;
  const approveReached = approveCount >= threshold;
  const rejectReached  = rejectCount  >= threshold;
  const votingClosed   = approveReached || rejectReached;

  const row1 = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`apply_vote_approve_${ticketId}`)
      .setLabel(`A favor (${approveCount}/${eligibleCount})`)
      .setEmoji('👍')
      .setStyle(ButtonStyle.Primary)
      .setDisabled(votingClosed),
    new ButtonBuilder()
      .setCustomId(`apply_vote_reject_${ticketId}`)
      .setLabel(`En contra (${rejectCount}/${eligibleCount})`)
      .setEmoji('👎')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(votingClosed),
  );

  const row2 = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`apply_finalize_accept_${ticketId}`)
      .setLabel('Confirmar aceptación')
      .setEmoji('✅')
      .setStyle(ButtonStyle.Success)
      .setDisabled(false),
    new ButtonBuilder()
      .setCustomId(`apply_finalize_reject_${ticketId}`)
      .setLabel('Confirmar rechazo')
      .setEmoji('❌')
      .setStyle(ButtonStyle.Danger)
      .setDisabled(false),
  );

  return [row1, row2];
}

// ── Cooldowns (en memoria para sugerencias, DB para apply) ───────────────────
const SUGGEST_COOLDOWN_MS = 5 * 60 * 1000;  // 5 minutos
const APPLY_COOLDOWN_MS   = 48 * 60 * 60 * 1000; // 48 horas
const suggestCooldown = new Map<string, number>(); // key: guildId-userId → last timestamp

// ── Sesiones de notif (en RAM) ────────────────────────────────────────────────
const activeNotifSessions = new Map<string, { interaction: ButtonInteraction; createdAt: number; timeoutId: ReturnType<typeof setTimeout> }>();
const NOTIF_SESSION_TTL = 14 * 60 * 1000; // 14 min (Discord tokens expiran a los 15)

async function expireNotifSession(sessionInteraction: ButtonInteraction, userId: string): Promise<void> {
  activeNotifSessions.delete(userId);
  try {
    await sessionInteraction.editReply({
      embeds: [
        new EmbedBuilder()
          .setColor(0x99aab5)
          .setDescription('⏱️ Esta sesión ha expirado. Pulsa el botón del panel para abrir una nueva.')
          .setFooter({ text: 'Aquaris • Notificaciones  ·  💙 by jhadechni' }),
      ],
      components: [],
    });
  } catch { /* token ya expirado */ }
}

// Cache de selección pendiente en /remind kit (userId → templateId[])
const kitSelectionCache = new Map<string, string[]>();

// Lee el estado {platform, role} del customId del botón apply_confirm_ en el mensaje
function parseApplyConfirmState(rawComponents: { components: { customId?: string }[] }[]) {
  const btn = rawComponents.flatMap(r => r.components).find(c => c.customId?.startsWith('apply_confirm_'));
  const suffix = btn?.customId?.replace('apply_confirm_', '') ?? '|';
  const [platform = '', role = ''] = suffix.split('|');
  return { platform, role };
}

function formatDiscountLabel(
  discountType: string,
  value: { toString(): string },
): string {
  const normalizedDiscountType = normalizeDiscountType(discountType);
  const numericValue = Number(value.toString());
  if (normalizedDiscountType === 'percent') {
    return `${numericValue.toLocaleString('es-ES')}%`;
  }
  return numericValue.toLocaleString('es-ES');
}

function buildManualDiscountPrompt(params: {
  channelId: string;
  messageId: string;
  options: Awaited<ReturnType<typeof getEligibleManualVolumeDiscounts>>;
  orderCode: string;
}) {
  const embed = buildShopNoticeEmbed({
    title: `Descuentos elegibles para ${params.orderCode}`,
    description: 'Selecciona los descuentos manuales que quieres aplicar. Solo se ofrece el tramo más alto elegible por producto.',
    color: SHOP_COLORS.info,
    fields: [{
      name: 'Opciones',
      value: params.options.slice(0, 25).map(option =>
        `• **${option.productName}**: ${formatDiscountLabel(option.discountType, option.discountValue)} ` +
        `(cantidad ${option.aggregatedQuantity}, tramo ${option.minQuantity}+)`,
      ).join('\n'),
    }],
  });

  const select = new StringSelectMenuBuilder()
    .setCustomId(`shop:discount_select:${params.orderCode}:${params.channelId}:${params.messageId}`)
    .setPlaceholder('Selecciona descuentos para aplicar')
    .setMinValues(1)
    .setMaxValues(Math.min(params.options.length, 25))
    .addOptions(
      params.options.slice(0, 25).map(option => ({
        label: `${option.productName} · ${formatDiscountLabel(option.discountType, option.discountValue)}`,
        description: `Cantidad ${option.aggregatedQuantity} · tramo ${option.minQuantity}+`,
        value: option.policyId,
      })),
    );

  return {
    embeds: [embed],
    components: [new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select)],
  };
}

function isCatalogMode(value: string | undefined): value is CatalogMode {
  return value === 'products' || value === 'services';
}

async function refreshOrderManagementEmbeds(params: {
  channelHints?: Array<string | null | undefined>;
  guild: Guild;
  orderCode: string;
  stockAssessment: Awaited<ReturnType<typeof getOrderStockAssessment>> | null;
  updatedOrder: NonNullable<Awaited<ReturnType<typeof getOrderFull>>>;
}) {
  const botUserId = params.guild.client.user?.id;
  if (!botUserId) return 0;

  const channelIds = Array.from(new Set(
    (params.channelHints ?? []).filter((value): value is string => !!value),
  ));

  let updatedCount = 0;
  const componentRow =
    params.updatedOrder.status === 'accepted'
      ? [buildAcceptedButtons(params.orderCode)]
      : params.updatedOrder.status === 'pending'
        ? [buildPendingButtons(params.orderCode)]
        : [];

  for (const channelId of channelIds) {
    const channel =
      params.guild.channels.cache.get(channelId) ??
      await params.guild.channels.fetch(channelId).catch(() => null);

    if (!channel?.isTextBased()) continue;

    const recentMessages = await channel.messages.fetch({ limit: 25 }).catch(() => null);
    if (!recentMessages) continue;

    const matchingMessages = recentMessages.filter((message: Message) => {
      if (message.author.id !== botUserId) return false;

      const hasMatchingTitle = message.embeds.some((embed: Message['embeds'][number]) =>
        (embed.title ?? '').includes(params.orderCode),
      );

      const hasMatchingButton = message.components.some((row: Message['components'][number]) => {
        if (!('components' in row) || !Array.isArray(row.components)) {
          return false;
        }

        return row.components.some(component =>
          'customId' in component && typeof component.customId === 'string' && component.customId.includes(params.orderCode),
        );
      });

      return hasMatchingTitle || hasMatchingButton;
    });

    for (const message of matchingMessages.values()) {
      await message.edit({
        embeds: [buildOrderEmbed(params.updatedOrder, params.stockAssessment)],
        components: componentRow,
      }).catch(() => undefined);
      updatedCount += 1;
    }
  }

  return updatedCount;
}

const interactionCreateEvent: BotEvent<'interactionCreate'> = {
  name: 'interactionCreate',
  async execute(interaction) {
    try {
    // --- Autocomplete ---
    if (interaction.isAutocomplete()) {
      const client = interaction.client as AquarisClient;
      const command = client.commands.get(interaction.commandName);
      if (!command?.autocomplete) { await interaction.respond([]); return; }
      try {
        await command.autocomplete(interaction);
      } catch (err) {
        logger.error({ err, command: interaction.commandName }, 'Error en autocomplete');
        await interaction.respond([]).catch(() => undefined);
      }
      return;
    }

    // --- Slash commands ---
    if (interaction.isChatInputCommand()) {
      const client = interaction.client as AquarisClient;
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
      if (interaction.guildId) {
        void prisma.commandUsage.create({
          data: {
            guildId: interaction.guildId,
            userId: interaction.user.id,
            commandName: interaction.commandName,
            subcommandGroup: interaction.options.getSubcommandGroup(false) ?? null,
            subcommand: interaction.options.getSubcommand(false) ?? null,
          },
        }).catch(() => null);
      }
      try {
        await command.execute(interaction);
      } catch (err) {
        logger.error({ err, command: interaction.commandName }, 'Error ejecutando comando');
        const msg = {
          embeds: [
            buildSystemErrorEmbed(
              'Error al ejecutar comando',
              'Ocurrio un error al ejecutar este comando. Intentalo de nuevo.',
            ),
          ],
          ephemeral: true,
        };
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp(msg);
        } else {
          await interaction.reply(msg);
        }
      }
      return;
    }

    // ─── Kit: modal crear plantilla ──────────────────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId === 'kit:create_modal') {
      await interaction.deferReply({ ephemeral: true });

      const guildId = interaction.guildId;
      const guild = interaction.guild;
      if (!guildId || !guild) return;

      // Staff check
      const guildConfig = await getOrCreateGuildConfig(guildId);
      const member = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!member) return;
      const staffRoles = [guildConfig.staffRoleId, guildConfig.liderRoleId, guildConfig.coLiderRoleId].filter(Boolean) as string[];
      const isKitStaff = staffRoles.some(r => member.roles.cache.has(r)) || member.permissions.has('Administrator');
      if (!isKitStaff) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Permiso insuficiente',
              'Solo el staff puede crear plantillas de kits.',
            ),
          ],
        });
        return;
      }

      const name = interaction.fields.getTextInputValue('kit_name').trim();
      const cooldownStr = interaction.fields.getTextInputValue('kit_cooldown').trim();
      const description = interaction.fields.getTextInputValue('kit_description').trim() || null;

      const cooldownMin = parseTime(cooldownStr);
      if (!cooldownMin || cooldownMin < 1) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Cooldown inválido',
              'Usa un formato como `7d`, `24h` o `3d12h`.',
            ),
          ],
        });
        return;
      }

      const existing = await prisma.reminderTemplate.findFirst({ where: { guildId, name, isActive: true } });
      if (existing) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Plantilla duplicada',
              `Ya existe una plantilla llamada **${name}**.`,
            ),
          ],
        });
        return;
      }

      const template = await prisma.reminderTemplate.upsert({
        where: { guildId_name: { guildId, name } },
        create: { guildId, name, description: description ?? null, cooldownMin },
        update: { description: description ?? null, cooldownMin, isActive: true },
      });

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Plantilla creada',
            description: `**${template.name}** fue creada correctamente.`,
            color: REMINDER_COLORS.success,
            fields: [{ name: 'Cooldown', value: formatTime(template.cooldownMin), inline: true }],
          }),
        ],
      });
      return;
    }

    // ─── Kit: select menu toggle ──────────────────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'remind:kit:toggle') {
      await interaction.deferUpdate();

      const selected = interaction.values; // templateId[]
      kitSelectionCache.set(interaction.user.id, selected);

      // Reconstruir select con defaults actualizados
      const templates = await prisma.reminderTemplate.findMany({
        where: { guildId: interaction.guildId ?? '', isActive: true },
        orderBy: { name: 'asc' },
      });

      const updatedSelect = new StringSelectMenuBuilder()
        .setCustomId('remind:kit:toggle')
        .setPlaceholder('Selecciona los kits que quieres recordar...')
        .setMinValues(0)
        .setMaxValues(templates.length)
        .addOptions(
          templates.map(t =>
            new StringSelectMenuOptionBuilder()
              .setLabel(t.name)
              .setDescription(t.description ?? `Cooldown: ${formatTime(t.cooldownMin)}`)
              .setValue(t.id)
              .setDefault(selected.includes(t.id)),
          ),
        );

      const saveBtn = new ButtonBuilder()
        .setCustomId('remind:kit:save')
        .setLabel('Guardar')
        .setStyle(ButtonStyle.Primary);

      const editBtn = new ButtonBuilder()
        .setCustomId('remind:kit:edit_open')
        .setLabel('Editar próximo aviso')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(false); // si llega aquí hay reminders activos o están por activarse

      const selectedLabel = selected.length > 0
        ? templates.filter(t => selected.includes(t.id)).map(t => `🎁 ${t.name}`).join('\n')
        : 'Ninguno seleccionado — guardar desactivará todos los recordatorios de kit.';

      const updatedEmbed = buildKitReminderListEmbed({
        lines: [selectedLabel],
        footerHint: 'Pulsa Guardar para aplicar los cambios',
      });

      await interaction.editReply({
        embeds: [updatedEmbed],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(updatedSelect),
          new ActionRowBuilder<ButtonBuilder>().addComponents(saveBtn, editBtn),
        ],
      });
      return;
    }

    // ─── Kit: botón guardar selección ─────────────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'remind:kit:save') {
      await interaction.deferUpdate();

      const guildId = interaction.guildId ?? '';
      const userId = interaction.user.id;
      const selectedIds = kitSelectionCache.get(userId) ?? [];
      kitSelectionCache.delete(userId);

      // Obtener kits activos actuales del usuario
      const activeReminders = await prisma.reminder.findMany({
        where: { userId, guildId, active: true, templateId: { not: null } },
        select: { id: true, templateId: true },
      });

      const activeTemplateIds = activeReminders.map(r => r.templateId!);

      // Desactivar los que ya no están en la selección
      const toDeactivate = activeReminders.filter(r => !selectedIds.includes(r.templateId!));
      if (toDeactivate.length > 0) {
        await prisma.reminder.updateMany({
          where: { id: { in: toDeactivate.map(r => r.id) } },
          data: { active: false },
        });
      }

      // Crear los nuevos que no existen aún
      const toCreate = selectedIds.filter(id => !activeTemplateIds.includes(id));
      if (toCreate.length > 0) {
        const templates = await prisma.reminderTemplate.findMany({
          where: { id: { in: toCreate }, isActive: true },
        });
        for (const t of templates) {
          await prisma.reminder.create({
            data: {
              userId,
              guildId,
              message: t.name,
              triggerAt: new Date(Date.now() + t.cooldownMin * 60_000),
              intervalMin: null, // one-shot — se reprograma al clicar "Ya lo reclamé"
              templateId: t.id,
            },
          });
        }
      }

      // Rebuild view
      const allTemplates = await prisma.reminderTemplate.findMany({
        where: { guildId, isActive: true },
        orderBy: { name: 'asc' },
      });
      const updatedReminders = await prisma.reminder.findMany({
        where: { userId, guildId, active: true, templateId: { not: null } },
        include: { template: true },
        orderBy: { triggerAt: 'asc' },
      });
      const activeSet = new Set(updatedReminders.map(r => r.templateId!));

      const lines = updatedReminders.length > 0
        ? updatedReminders.map(r => {
            const msLeft = r.triggerAt.getTime() - Date.now();
            const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
            return `🎁 **${r.template!.name}** — en **${timeLeft}**  *(cada ${formatTime(r.template!.cooldownMin)})*`;
          })
        : ['No tienes recordatorios de kit activos.'];

      const embed = buildKitReminderListEmbed({
        title: 'Recordatorios de kits actualizados',
        lines,
        color: REMINDER_COLORS.success,
        footerHint: 'Recibirás un DM cuando sea momento de reclamar cada kit',
      });

      const select = new StringSelectMenuBuilder()
        .setCustomId('remind:kit:toggle')
        .setPlaceholder('Selecciona los kits que quieres recordar...')
        .setMinValues(0)
        .setMaxValues(allTemplates.length)
        .addOptions(
          allTemplates.map(t =>
            new StringSelectMenuOptionBuilder()
              .setLabel(t.name)
              .setDescription(t.description ?? `Cooldown: ${formatTime(t.cooldownMin)}`)
              .setValue(t.id)
              .setDefault(activeSet.has(t.id)),
          ),
        );

      const saveBtn = new ButtonBuilder().setCustomId('remind:kit:save').setLabel('Guardar').setStyle(ButtonStyle.Primary);
      const editBtn = new ButtonBuilder().setCustomId('remind:kit:edit_open').setLabel('Editar próximo aviso').setStyle(ButtonStyle.Secondary).setDisabled(updatedReminders.length === 0);

      await interaction.editReply({
        embeds: [embed],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select),
          new ActionRowBuilder<ButtonBuilder>().addComponents(saveBtn, editBtn),
        ],
      });
      return;
    }

    // ─── Kit: botón editar → muestra select de reminders activos ─────────────
    if (interaction.isButton() && interaction.customId === 'remind:kit:edit_open') {
      await interaction.deferUpdate();

      const guildId = interaction.guildId ?? '';
      const activeReminders = await prisma.reminder.findMany({
        where: { userId: interaction.user.id, guildId, active: true, templateId: { not: null } },
        include: { template: true },
        orderBy: { triggerAt: 'asc' },
      });

      if (activeReminders.length === 0) {
        await interaction.followUp({
          embeds: [
            buildReminderNoticeEmbed({
              title: 'Sin recordatorios activos',
              description: 'No tienes recordatorios de kit activos para editar.',
              color: REMINDER_COLORS.info,
            }),
          ],
          ephemeral: true,
        });
        return;
      }

      const editSelect = new StringSelectMenuBuilder()
        .setCustomId('remind:kit:edit_select')
        .setPlaceholder('Selecciona el kit cuyo aviso quieres cambiar...')
        .addOptions(
          activeReminders.map(r => {
            const msLeft = r.triggerAt.getTime() - Date.now();
            const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
            return new StringSelectMenuOptionBuilder()
              .setLabel(r.template!.name)
              .setDescription(`Próximo aviso en ${timeLeft}`)
              .setValue(r.id);
          }),
        );

      const backBtn = new ButtonBuilder()
        .setCustomId('remind:kit:edit_back')
        .setLabel('← Volver')
        .setStyle(ButtonStyle.Secondary);

      const embed = buildReminderNoticeEmbed({
        title: 'Editar próximo aviso',
        description: 'Selecciona el kit y establece en cuánto tiempo debe dispararse el siguiente recordatorio.',
      });

      await interaction.editReply({
        embeds: [embed],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(editSelect),
          new ActionRowBuilder<ButtonBuilder>().addComponents(backBtn),
        ],
      });
      return;
    }

    // ─── Kit: select editar → abre modal ──────────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'remind:kit:edit_select') {
      const reminderId = interaction.values[0];
      if (!reminderId) return;

      const modal = new ModalBuilder()
        .setCustomId(`remind:kit:edit_modal:${reminderId}`)
        .setTitle('Cambiar próximo aviso');

      modal.addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('new_trigger')
            .setLabel('¿En cuánto tiempo debe avisarte?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: 2d, 6h, 3d12h')
            .setRequired(true)
            .setMaxLength(20),
        ),
      );

      await interaction.showModal(modal);
      return;
    }

    // ─── Kit: modal editar → actualiza triggerAt ──────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId.startsWith('remind:kit:edit_modal:')) {
      await interaction.deferReply({ ephemeral: true });

      const reminderId = interaction.customId.replace('remind:kit:edit_modal:', '');
      const newTimeStr = interaction.fields.getTextInputValue('new_trigger').trim();
      const minutes = parseTime(newTimeStr);

      if (!minutes || minutes < 5) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Tiempo inválido',
              'El mínimo es 5 minutos. Usa un formato como `5m`, `2h` o `1d`.',
            ),
          ],
        });
        return;
      }

      const reminder = await prisma.reminder.findFirst({
        where: { id: reminderId, userId: interaction.user.id, active: true },
        include: { template: true },
      });

      if (!reminder) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Recordatorio no encontrado',
              'No se encontró ese recordatorio o ya no está activo.',
            ),
          ],
        });
        return;
      }

      const newTrigger = new Date(Date.now() + minutes * 60_000);
      await prisma.reminder.update({ where: { id: reminderId }, data: { triggerAt: newTrigger } });

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Próximo aviso actualizado',
            description: `**${reminder.template?.name ?? reminder.message}** te avisará en **${formatTime(minutes)}**.`,
            color: REMINDER_COLORS.success,
          }),
        ],
      });
      return;
    }

    // ─── Kit: botón volver al view principal ─────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'remind:kit:edit_back') {
      await interaction.deferUpdate();

      const guildId = interaction.guildId ?? '';
      const userId = interaction.user.id;

      const templates = await prisma.reminderTemplate.findMany({
        where: { guildId, isActive: true },
        orderBy: { name: 'asc' },
      });
      const activeReminders = await prisma.reminder.findMany({
        where: { userId, guildId, active: true, templateId: { not: null } },
        include: { template: true },
        orderBy: { triggerAt: 'asc' },
      });
      const activeSet = new Set(activeReminders.map(r => r.templateId!));

      const lines = activeReminders.length > 0
        ? activeReminders.map(r => {
            const msLeft = r.triggerAt.getTime() - Date.now();
            const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'vencido';
            return `🎁 **${r.template!.name}** — en **${timeLeft}**  *(cada ${formatTime(r.template!.cooldownMin)})*`;
          })
        : ['No tienes recordatorios de kit activos.'];

      const embed = buildKitReminderListEmbed({
        lines,
        footerHint: 'Selecciona kits y pulsa Guardar · Pulsa Ya lo reclamé en el DM cuando lo hagas',
      });

      const select = new StringSelectMenuBuilder()
        .setCustomId('remind:kit:toggle')
        .setPlaceholder('Selecciona los kits que quieres recordar...')
        .setMinValues(0)
        .setMaxValues(templates.length)
        .addOptions(
          templates.map(t =>
            new StringSelectMenuOptionBuilder()
              .setLabel(t.name)
              .setDescription(t.description ?? `Cooldown: ${formatTime(t.cooldownMin)}`)
              .setValue(t.id)
              .setDefault(activeSet.has(t.id)),
          ),
        );

      const saveBtn = new ButtonBuilder().setCustomId('remind:kit:save').setLabel('Guardar').setStyle(ButtonStyle.Primary);
      const editBtn = new ButtonBuilder().setCustomId('remind:kit:edit_open').setLabel('Editar próximo aviso').setStyle(ButtonStyle.Secondary).setDisabled(activeReminders.length === 0);

      await interaction.editReply({
        embeds: [embed],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(select),
          new ActionRowBuilder<ButtonBuilder>().addComponents(saveBtn, editBtn),
        ],
      });
      return;
    }

    // ─── Kit: botón "Ya lo reclamé" (llega desde DM) ─────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('remind:kit:claimed:')) {
      await interaction.deferReply({ ephemeral: true });

      const parts = interaction.customId.replace('remind:kit:claimed:', '').split(':');
      const templateId = parts[0];
      const guildId = parts[1];

      if (!templateId || !guildId) return;

      const template = await prisma.reminderTemplate.findFirst({
        where: { id: templateId, isActive: true },
      });

      if (!template) {
        await interaction.editReply({
          embeds: [
            buildReminderErrorEmbed(
              'Plantilla no disponible',
              'Esta plantilla de kit ya no está disponible.',
            ),
          ],
        });
        return;
      }

      // Verificar que no haya ya un reminder activo para este kit (evitar duplicados)
      const existing = await prisma.reminder.findFirst({
        where: { userId: interaction.user.id, guildId, active: true, templateId },
      });

      if (existing) {
        const msLeft = existing.triggerAt.getTime() - Date.now();
        const timeLeft = msLeft > 0 ? formatTime(Math.ceil(msLeft / 60_000)) : 'ahora mismo';
        await interaction.editReply({
          embeds: [
            buildReminderNoticeEmbed({
              title: 'Recordatorio ya activo',
              description: `Ya tienes un recordatorio activo para **${template.name}** — en **${timeLeft}**.`,
              color: REMINDER_COLORS.warning,
            }),
          ],
        });
        return;
      }

      const nextTrigger = new Date(Date.now() + template.cooldownMin * 60_000);
      await prisma.reminder.create({
        data: {
          userId: interaction.user.id,
          guildId,
          message: template.name,
          triggerAt: nextTrigger,
          intervalMin: null,
          templateId,
        },
      });

      await interaction.editReply({
        embeds: [
          buildReminderNoticeEmbed({
            title: 'Kit reprogramado',
            description: `Te recordaré reclamar **${template.name}** en **${formatTime(template.cooldownMin)}**.`,
            color: REMINDER_COLORS.success,
          }),
        ],
      });
      return;
    }

    // --- Botones de paginación de historial de moderación ---
    if (interaction.isButton() && interaction.customId.startsWith('mod:logs:')) {
      await interaction.deferUpdate();
      const [, , targetId, pageStr] = interaction.customId.split(':');
      const page = parseInt(pageStr ?? '', 10);
      if (!interaction.guildId || !targetId || isNaN(page)) return;
      const result = await renderLogsPage(interaction.guildId, targetId, page);
      await interaction.editReply(result);
      return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('mod:warnings:')) {
      await interaction.deferUpdate();
      const [, , targetId, pageStr] = interaction.customId.split(':');
      const page = parseInt(pageStr ?? '', 10);
      if (!interaction.guildId || !targetId || isNaN(page)) return;
      const result = await renderWarningsPage(interaction.guildId, targetId, page);
      await interaction.editReply(result);
      return;
    }

    // --- Botones de votación de sugerencias ---
    if (interaction.isButton() && (interaction.customId.startsWith('suggest:up:') || interaction.customId.startsWith('suggest:down:'))) {
      await interaction.deferUpdate();

      const parts = interaction.customId.split(':');
      const direction = parts[1] as 'up' | 'down';
      const suggestionId = parts[2];
      if (!suggestionId) return;

      const vote = direction === 'up' ? 'UP' : 'DOWN';

      const existing = await prisma.suggestionVote.findUnique({
        where: { suggestionId_userId: { suggestionId, userId: interaction.user.id } },
      });

      if (!existing) {
        await prisma.suggestionVote.create({
          data: { suggestionId, userId: interaction.user.id, vote },
        });
      } else if (existing.vote === vote) {
        // Mismo botón: retirar voto
        await prisma.suggestionVote.delete({
          where: { id: existing.id },
        });
      } else {
        // Botón contrario: cambiar voto
        await prisma.suggestionVote.update({
          where: { id: existing.id },
          data: { vote },
        });
      }

      const [[upCount, downCount], suggestion] = await Promise.all([
        Promise.all([
          prisma.suggestionVote.count({ where: { suggestionId, vote: 'UP' } }),
          prisma.suggestionVote.count({ where: { suggestionId, vote: 'DOWN' } }),
        ]),
        prisma.suggestion.findUnique({ where: { id: suggestionId } }),
      ]);

      if (!suggestion) return;

      const suggestionAuthor = await interaction.client.users.fetch(suggestion.userId).catch(() => null);
      const displayName = suggestionAuthor?.globalName ?? suggestionAuthor?.username ?? 'Usuario';

      await interaction.editReply({
        embeds: [buildSuggestionPublicEmbed({
          content: suggestion.content,
          userId: suggestion.userId,
          displayName,
          avatarUrl: suggestionAuthor?.displayAvatarURL() ?? null,
          suggestionId,
          upCount,
          downCount,
        })],
        components: [buildSuggestionVoteButtons(suggestionId, upCount, downCount)],
      });
      return;
    }

    // --- Botón debate de sugerencia ---
    if (interaction.isButton() && interaction.customId.startsWith('suggest:debate:')) {
      await interaction.deferUpdate();

      const suggestionId = interaction.customId.replace('suggest:debate:', '');
      const suggestion = await prisma.suggestion.findUnique({ where: { id: suggestionId } });
      if (!suggestion) return;

      const msg = interaction.message;
      if (msg.thread) return;

      const threadName = `💬 ${suggestion.content.slice(0, 80)}${suggestion.content.length > 80 ? '...' : ''}`;
      const thread = await msg.startThread({
        name: threadName,
        autoArchiveDuration: ThreadAutoArchiveDuration.OneWeek,
        reason: 'Debate de sugerencia',
      }).catch(() => null);

      if (!thread) return;

      await thread.send({
        embeds: [
          buildSuggestionNoticeEmbed({
            title: '💬 Hilo de debate abierto',
            description:
              `<@${suggestion.userId}> lanzó esta sugerencia a la comunidad.\n\n` +
              '¡Comparte tu opinión aquí! Recuerda mantener un tono respetuoso.',
            color: SUGGESTION_COLORS.info,
          }),
        ],
      });
      return;
    }

    // --- Modal: sugerencia ---
    if (interaction.isModalSubmit() && interaction.customId === 'suggest_modal') {
      await interaction.deferReply({ ephemeral: true });

      const guildId = interaction.guildId;
      if (!guildId) return;

      const content = interaction.fields.getTextInputValue('suggest_content');

      // Cooldown
      const cooldownKey = `${guildId}-${interaction.user.id}`;
      const lastUsed = suggestCooldown.get(cooldownKey) ?? 0;
      const remaining = SUGGEST_COOLDOWN_MS - (Date.now() - lastUsed);
      if (remaining > 0) {
        const mins = Math.ceil(remaining / 60_000);
        await interaction.editReply({
          embeds: [
            buildSuggestionNoticeEmbed({
              title: '⏳ Espera antes de sugerir',
              description: `Puedes enviar otra sugerencia en **${mins} minuto${mins === 1 ? '' : 's'}**.`,
              color: SUGGESTION_COLORS.warning,
            }),
          ],
        });
        return;
      }

      // Palabras baneadas
      const filterWords = await getFilteredWords(guildId);
      const banned = findBannedWord(content, filterWords);
      if (banned) {
        await interaction.editReply({
          embeds: [
            buildSuggestionErrorEmbed(
              'Sugerencia bloqueada',
              'Tu sugerencia contiene una palabra no permitida. Revisa el contenido e intenta de nuevo.',
            ),
          ],
        });
        return;
      }

      const config = await getOrCreateGuildConfig(guildId);

      if (!config.suggestionsChannelId) {
        await interaction.editReply({
          embeds: [
            buildSuggestionErrorEmbed(
              'Canal no configurado',
              'El canal de sugerencias no está configurado. Pide al staff que use `/config set-suggestions`.',
            ),
          ],
        });
        return;
      }

      const channel = interaction.guild?.channels.cache.get(config.suggestionsChannelId);
      if (!channel?.isTextBased()) {
        await interaction.editReply({
          embeds: [
            buildSuggestionErrorEmbed(
              'Canal inválido',
              'El canal de sugerencias configurado no es válido.',
            ),
          ],
        });
        return;
      }

      const suggestion = await prisma.suggestion.create({
        data: { guildId, userId: interaction.user.id, content },
      });

      const displayName = interaction.member && 'displayName' in interaction.member
        ? (interaction.member as { displayName: string }).displayName
        : (interaction.user.globalName ?? interaction.user.username);

      const embed = buildSuggestionPublicEmbed({
        content,
        userId: interaction.user.id,
        displayName,
        avatarUrl: interaction.user.displayAvatarURL(),
        suggestionId: suggestion.id,
        upCount: 0,
        downCount: 0,
      });
      const buttons = buildSuggestionVoteButtons(suggestion.id, 0, 0);
      const msg = await channel.send({ embeds: [embed], components: [buttons] });

      await prisma.suggestion.update({
        where: { id: suggestion.id },
        data: { messageId: msg.id },
      });

      suggestCooldown.set(cooldownKey, Date.now());
      await interaction.editReply({
        embeds: [
          buildSuggestionNoticeEmbed({
            title: '✅ Sugerencia enviada',
            description: 'Tu sugerencia fue publicada para votación.',
            color: SUGGESTION_COLORS.success,
          }),
        ],
      });
      return;
    }

    // --- Modal anunciar ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('anunciar:modal:')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      const parts     = interaction.customId.split(':');
      const channelId = parts[2];
      const roleId    = parts[3];

      const mensaje = interaction.fields.getTextInputValue('mensaje').trim();
      if (!mensaje) {
        await interaction.editReply({ content: 'El mensaje no puede estar vacío.' });
        return;
      }

      const targetChannel = guild.channels.cache.get(channelId ?? '')
        ?? (channelId ? await guild.channels.fetch(channelId).catch(() => null) : null);

      if (!targetChannel?.isTextBased()) {
        await interaction.editReply({ content: 'No se encontró el canal o no es un canal de texto.' });
        return;
      }

      let contenido = mensaje
        .replaceAll('{here}',     '@here')
        .replaceAll('{everyone}', '@everyone');

      if (roleId && roleId !== 'none') {
        const mencion = `<@&${roleId}>`;
        if (contenido.includes('{rol}')) {
          contenido = contenido.replaceAll('{rol}', mencion);
        } else {
          contenido = `${mencion} ${contenido}`;
        }
      }

      // Dividir en chunks de 2000 chars respetando saltos de línea y palabras
      const chunks: string[] = [];
      let restante = contenido;
      while (restante.length > 2000) {
        let corte = restante.lastIndexOf('\n', 2000);
        if (corte < 1000) corte = restante.lastIndexOf(' ', 2000);
        if (corte < 1) corte = 2000;
        chunks.push(restante.slice(0, corte));
        restante = restante.slice(corte).trimStart();
      }
      if (restante) chunks.push(restante);

      try {
        for (const chunk of chunks) {
          await targetChannel.send({
            content: chunk,
            allowedMentions: { parse: ['roles', 'everyone', 'users'] },
          });
        }
        const partes = chunks.length > 1 ? ` (${chunks.length} mensajes)` : '';
        await interaction.editReply({ content: `Mensaje enviado a <#${channelId}>${partes}.` });
      } catch (err) {
        logger.error({ err }, 'Error al enviar anuncio');
        await interaction.editReply({ content: 'No se pudo enviar el mensaje. Verifica que el bot tenga permisos en ese canal.' });
      }
      return;
    }

    // --- Modal búsqueda en tienda ---
    if (interaction.isModalSubmit() && interaction.customId === 'tienda:catalog:search_modal') {
      await interaction.deferUpdate();

      const guildId = interaction.guildId;
      if (!guildId) return;

      const query = interaction.fields.getTextInputValue('search_query').trim();
      const allProducts = await queryCatalogProducts(guildId);
      const results = searchCatalogProducts(allProducts, query);
      const { embed, components } = buildSearchView(allProducts, results, query);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    if (interaction.isModalSubmit() && interaction.customId === 'tienda:catalog:request_modal') {
      await interaction.deferReply({ ephemeral: true });

      const guildId = interaction.guildId;
      const guild = interaction.guild;
      if (!guildId || !guild) return;

      const requestText = interaction.fields.getTextInputValue('request_text').trim();
      const config = await getOrCreateGuildConfig(guildId);

      if (!config.shopStaffChannelId) {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Canal staff no configurado',
              description: 'La tienda no tiene configurado un canal de staff para solicitudes libres.',
              color: SHOP_COLORS.warning,
            }),
          ],
        });
        return;
      }

      const staffChannel =
        guild.channels.cache.get(config.shopStaffChannelId)
        ?? await guild.channels.fetch(config.shopStaffChannelId).catch(() => null);

      if (!staffChannel?.isTextBased()) {
        await interaction.editReply({
          embeds: [
            buildShopErrorEmbed(
              'Canal staff inválido',
              'El canal de staff configurado para la tienda no es válido.',
            ),
          ],
        });
        return;
      }

      const shopUser = await upsertShopUser(guildId, interaction.user);
      await prisma.shopFreeRequest.create({
        data: { guildId, userId: shopUser.id, requestText },
      });

      const embed = buildShopNoticeEmbed({
        title: 'Solicitud libre de tienda',
        description: requestText,
        color: SHOP_COLORS.warning,
        fields: [
          { name: 'Cliente', value: `<@${interaction.user.id}>`, inline: true },
          { name: 'Tipo', value: 'Solicitud fuera de catálogo', inline: true },
        ],
      });

      await staffChannel.send({ embeds: [embed] });
      await interaction.editReply({
        embeds: [
          buildShopNoticeEmbed({
            title: 'Solicitud enviada',
            description: 'Tu solicitud fue enviada al staff. Te contactarán si necesitan más detalles.',
            color: SHOP_COLORS.success,
          }),
        ],
      });
      return;
    }

    // --- Select menu: selección de rol(es) en reclutamiento ---
    const ALL_PLATFORMS = [
      { value: 'Java',    label: 'Java Edition',    description: 'PC — versión Java',             emoji: '☕' },
      { value: 'Bedrock', label: 'Bedrock Edition', description: 'Móvil, consola, Windows 10/11', emoji: '📱' },
    ];

    const ALL_APPLY_ROLES = [
      { value: 'Builder', label: 'Builder',           description: 'Construcción y diseño',       emoji: '🏗️' },
      { value: 'Técnico', label: 'Técnico / Redstone', description: 'Farms, mecánicas y redstone', emoji: '⚙️' },
      { value: 'PvP',     label: 'PvP',               description: 'Combate y defensa del clan',  emoji: '⚔️' },
      { value: 'Farmer',  label: 'Farmer',            description: 'Producción de recursos',      emoji: '🌾' },
      { value: 'Otro',    label: 'Otro',              description: 'Otro rol o perfil',           emoji: '✨' },
    ];

    function buildApplyPhaseOneReply(platform: string, role: string) {
      const isComplete = platform.length > 0 && role.length > 0;

      const platformRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('apply_platform_select')
          .setPlaceholder('¿En qué plataforma juegas? (Java / Bedrock)')
          .setMinValues(1)
          .setMaxValues(1)
          .addOptions(
            ALL_PLATFORMS.map(p =>
              new StringSelectMenuOptionBuilder()
                .setLabel(p.label)
                .setDescription(p.description)
                .setValue(p.value)
                .setEmoji(p.emoji)
                .setDefault(p.value === platform),
            ),
          ),
      );

      const selectedRoles = role.length > 0 ? role.split(',') : [];

      const roleRow = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('apply_role_select')
          .setPlaceholder('¿En qué destacas dentro del juego?')
          .setMinValues(1)
          .setMaxValues(5)
          .addOptions(
            ALL_APPLY_ROLES.map(r =>
              new StringSelectMenuOptionBuilder()
                .setLabel(r.label)
                .setDescription(r.description)
                .setValue(r.value)
                .setEmoji(r.emoji)
                .setDefault(selectedRoles.includes(r.value)),
            ),
          ),
      );

      const rolesDisplay = selectedRoles.length > 0 ? selectedRoles.join(', ') : '';
      const statusLine = isComplete
        ? `Plataforma: **${platform}** · Rol: **${rolesDisplay}**\n\nPulsa **Continuar** para abrir el formulario.`
        : 'Selecciona tu **plataforma** y en qué **destacas**, luego pulsa **Continuar**.';

      const embed = buildRecruitmentNoticeEmbed({
        title: 'Solicitud de ingreso',
        description: statusLine,
      });

      const confirmBtn = new ButtonBuilder()
        .setCustomId(`apply_confirm_${platform}|${role}`)
        .setLabel('Continuar')
        .setStyle(ButtonStyle.Primary)
        .setDisabled(!isComplete);

      return {
        embeds: [embed],
        components: [platformRow, roleRow, new ActionRowBuilder<ButtonBuilder>().addComponents(confirmBtn)],
      };
    }

    if (interaction.isStringSelectMenu() && interaction.customId === 'apply_platform_select') {
      if (interaction.values.length === 0) return;
      await interaction.deferUpdate();
      const platform = interaction.values[0] ?? '';
      const { role } = parseApplyConfirmState(interaction.message.components as { components: { customId?: string }[] }[]);
      await interaction.editReply(buildApplyPhaseOneReply(platform, role));
      return;
    }

    if (interaction.isStringSelectMenu() && interaction.customId === 'apply_role_select') {
      if (interaction.values.length === 0) return;
      await interaction.deferUpdate();
      const role = interaction.values.join(',');
      const { platform } = parseApplyConfirmState(interaction.message.components as { components: { customId?: string }[] }[]);
      await interaction.editReply(buildApplyPhaseOneReply(platform, role));
      return;
    }

    // --- Modal: formulario de reclutamiento ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('apply_modal_')) {
      await interaction.deferReply({ ephemeral: true });

      const guildId = interaction.guildId;
      if (!guildId || !interaction.guild) return;

      // Solicitud activa — comprobación de seguridad
      const activeTicketCheck = await prisma.recruitmentTicket.findFirst({
        where: { guildId, userId: interaction.user.id, status: { in: ['OPEN', 'ACCEPTED'] } },
        select: { status: true },
      });
      if (activeTicketCheck) {
        const statusMsg = activeTicketCheck.status === 'OPEN' ? 'pendiente de revisión' : 'en proceso de entrevista';
        await interaction.editReply({
          embeds: [
            buildRecruitmentNoticeEmbed({
              title: 'Ya tienes una solicitud activa',
              description: `Tienes una solicitud ${statusMsg}. Espera a que sea procesada antes de enviar una nueva.`,
              color: RECRUITMENT_COLORS.warning,
            }),
          ],
        });
        return;
      }

      // Cooldown 48h (DB) — comprobación de seguridad si el check del select fue omitido
      const lastApplyTicket = await prisma.recruitmentTicket.findFirst({
        where: { guildId, userId: interaction.user.id },
        orderBy: { createdAt: 'desc' },
        select: { createdAt: true },
      });
      if (lastApplyTicket) {
        const remaining = APPLY_COOLDOWN_MS - (Date.now() - lastApplyTicket.createdAt.getTime());
        if (remaining > 0) {
          const hours = Math.ceil(remaining / (60 * 60 * 1000));
          await interaction.editReply({
            embeds: [
              buildRecruitmentNoticeEmbed({
                title: 'Solicitud en espera',
                description: `Ya tienes una solicitud reciente. Podrás volver a aplicar en **${hours} hora${hours === 1 ? '' : 's'}**.`,
                color: RECRUITMENT_COLORS.warning,
              }),
            ],
          });
          return;
        }
      }

      // customId suffix = "{platform}|{role}" — rol viene del select de fase 1
      const [platform = '', role = ''] = interaction.customId.replace('apply_modal_', '').split('|');
      const age = interaction.fields.getTextInputValue('apply_age').trim();
      const aportar = interaction.fields.getTextInputValue('apply_aportar').trim();
      const disponibilidad = interaction.fields.getTextInputValue('apply_disponibilidad').trim();
      const colaborar = interaction.fields.getTextInputValue('apply_colaborar').trim();
      const dudas = interaction.fields.getTextInputValue('apply_dudas').trim();

      // Validar que la edad sea un número entero entre 1 y 99
      const ageNum = parseInt(age, 10);
      if (!/^\d{1,2}$/.test(age) || isNaN(ageNum) || ageNum < 1 || ageNum > 99) {
        await interaction.editReply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Edad no válida',
              'Por favor introduce tu edad como un número entero (por ejemplo: `20`).',
            ),
          ],
        });
        return;
      }

      // Palabras baneadas en cualquier campo de texto libre
      const recruitFilterWords = await getFilteredWords(guildId);
      const recruitTexts = [aportar, disponibilidad, colaborar, dudas].filter(Boolean);
      const recruitBanned = recruitTexts.map(t => findBannedWord(t, recruitFilterWords)).find(Boolean);
      if (recruitBanned) {
        await interaction.editReply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Solicitud bloqueada',
              'Tu solicitud contiene una palabra no permitida. Revisa tus respuestas e intenta de nuevo.',
            ),
          ],
        });
        return;
      }

      const config = await getOrCreateGuildConfig(guildId);

      // Crear canal de ticket
      let channelId: string | undefined;
      if (config.recruitmentCategoryId) {
        try {
          const ticketChannel = await interaction.guild.channels.create({
            name: `apply-${interaction.user.username}`,
            type: ChannelType.GuildText,
            parent: config.recruitmentCategoryId,
            permissionOverwrites: [
              {
                id: interaction.guild.roles.everyone.id,
                deny: [PermissionFlagsBits.ViewChannel],
              },
              {
                id: interaction.user.id,
                allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
              },
              ...(config.staffRoleId      ? [{ id: config.staffRoleId,      allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
              ...(config.liderRoleId      ? [{ id: config.liderRoleId,      allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
              ...(config.coLiderRoleId    ? [{ id: config.coLiderRoleId,    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
              ...(config.reclutadorRoleId ? [{ id: config.reclutadorRoleId, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
            ],
          });
          channelId = ticketChannel.id;
        } catch (err) {
          logger.warn({ err }, 'No se pudo crear canal de reclutamiento');
        }
      }

      const ticket = await prisma.recruitmentTicket.create({
        data: {
          guildId,
          userId: interaction.user.id,
          channelId: channelId ?? null,
          minecraftRole: role,
          answers: { age, platform, role, aportar, disponibilidad, colaborar, dudas },
        },
      });

      // Asignar rol Aspirante
      if (config.aspirantRoleId) {
        try {
          const member = await interaction.guild.members.fetch(interaction.user.id);
          await member.roles.add(config.aspirantRoleId);
        } catch (err) {
          logger.warn({ err }, 'No se pudo asignar rol Aspirante');
        }
      }

      const staffEmbed = buildRecruitmentApplicationEmbed({
        applicantId: interaction.user.id,
        username: interaction.user.username,
        platform,
        role,
        age,
        aportar,
        disponibilidad,
        colaborar,
        dudas,
        ticketId: ticket.id,
        avatarUrl: interaction.user.displayAvatarURL(),
      });

      const initialEligibleRoles = [config.liderRoleId, config.coLiderRoleId, config.staffRoleId, config.reclutadorRoleId].filter(Boolean) as string[];
      const initialEligibleIds = new Set<string>();
      for (const roleId of initialEligibleRoles) {
        const role = interaction.guild.roles.cache.get(roleId);
        if (role) role.members.forEach(m => { if (!m.user.bot) initialEligibleIds.add(m.id); });
      }
      const initialEligibleCount = Math.max(initialEligibleIds.size, 1);

      const buttons = buildRecruitmentVoteComponents(0, 0, initialEligibleCount, ticket.id);

      // El canal del ticket es solo para el solicitante — bienvenida y entrevista
      if (channelId) {
        const ticketChannel = interaction.guild.channels.cache.get(channelId);
        if (ticketChannel?.isTextBased()) {
          await ticketChannel.send({ embeds: [buildRecruitmentTicketWelcomeEmbed(interaction.user.id)] });

          if (role.split(',').includes('Builder')) {
            await ticketChannel.send({
              embeds: [
                buildRecruitmentNoticeEmbed({
                  title: '🏗️ Material adicional para Builder',
                  description: `<@${interaction.user.id}> sube aquí capturas de tus construcciones o proyectos. El staff las revisará junto con tu solicitud.`,
                  color: RECRUITMENT_COLORS.info,
                }),
              ],
            });
          }
        }
      }

      // El embed de votación va al canal de revisión de solicitudes (solo staff)
      const reviewChId = config.recruitmentReviewChannelId;
      const reviewCh = reviewChId
        ? (interaction.guild.channels.cache.get(reviewChId) ?? await interaction.guild.channels.fetch(reviewChId).catch(() => null))
        : null;
      const reviewTarget = reviewCh?.isTextBased() ? reviewCh : getLogChannel(interaction.guild, config, 'recruit');
      if (reviewTarget) {
        await reviewTarget.send({ embeds: [staffEmbed], components: buttons });
      }

      await interaction.editReply({
        embeds: [
          buildRecruitmentNoticeEmbed({
            title: '✅ Solicitud enviada',
            description: 'El staff revisará tu aplicación y te responderá en tu canal privado.',
            color: RECRUITMENT_COLORS.success,
          }),
        ],
      });
      return;
    }

    if (interaction.isModalSubmit() && interaction.customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.basicsModal)) {
      const guild = interaction.guild;
      if (!guild) return;

      const actor = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!actor || !(await canManageClanPlayers(actor))) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Permiso insuficiente',
              'Solo el staff puede registrar jugadores en el roster.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      const sessionId = interaction.customId.slice(CLAN_PLAYER_CUSTOM_IDS.basicsModal.length);
      const session = applyBasicsModalValues(sessionId, {
        discord: interaction.fields.getTextInputValue('discord').trim(),
        fullName: interaction.fields.getTextInputValue('fullName').trim(),
        minecraftNick: interaction.fields.getTextInputValue('minecraftNick').trim(),
        joinedAt: interaction.fields.getTextInputValue('joinedAt').trim(),
        country: interaction.fields.getTextInputValue('country').trim(),
      });

      if (!session) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Sesión expirada',
              'La sesión expiró. Ejecuta el comando otra vez.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      await interaction.reply({
        ...buildClanPlayerStepOneReply(session),
        ephemeral: true,
      });
      return;
    }

    if (interaction.isModalSubmit() && interaction.customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.additionalModal)) {
      const guild = interaction.guild;
      if (!guild) return;

      const actor = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!actor || !(await canManageClanPlayers(actor))) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Permiso insuficiente',
              'Solo el staff puede registrar jugadores en el roster.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      const sessionId = interaction.customId.slice(CLAN_PLAYER_CUSTOM_IDS.additionalModal.length);
      const session = applyAdditionalModalValues(sessionId, {
        utcOffset: interaction.fields.getTextInputValue('utcOffset').trim(),
        notes: interaction.fields.getTextInputValue('notes').trim(),
      });

      if (!session) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Sesión expirada',
              'La sesión expiró. Ejecuta el comando otra vez.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      await interaction.reply({
        ...buildClanPlayerReviewReply(session),
        ephemeral: true,
      });
      return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('clanplayer:')) {
      const guild = interaction.guild;
      if (!guild) return;

      const actor = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!actor || !(await canManageClanPlayers(actor))) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Permiso insuficiente',
              'Solo el staff puede registrar jugadores en el roster.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      const { customId } = interaction;

      if (customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.cancelButton)) {
        const sessionId = customId.slice(CLAN_PLAYER_CUSTOM_IDS.cancelButton.length);
        clearClanPlayerRegistrationSession(sessionId);
        await interaction.update({
          embeds: [
            buildRecruitmentNoticeEmbed({
              title: 'Registro cancelado',
              description: 'La sesión de registro fue cancelada.',
              color: RECRUITMENT_COLORS.success,
            }),
          ],
          components: [],
        });
        return;
      }

      const prefixToSlice =
        customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.continueButton) ? CLAN_PLAYER_CUSTOM_IDS.continueButton :
        customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.editBasicsButton) ? CLAN_PLAYER_CUSTOM_IDS.editBasicsButton :
        customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.editAdditionalButton) ? CLAN_PLAYER_CUSTOM_IDS.editAdditionalButton :
        customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.confirmButton) ? CLAN_PLAYER_CUSTOM_IDS.confirmButton :
        null;

      if (!prefixToSlice) return;

      const sessionId = customId.slice(prefixToSlice.length);
      const session = getClanPlayerSession(sessionId);

      if (!session) {
        await interaction.reply({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Sesión expirada',
              'La sesión expiró. Ejecuta el comando otra vez.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      if (customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.continueButton) || customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.editAdditionalButton)) {
        await interaction.showModal(buildClanPlayerAdditionalModal(session));
        return;
      }

      if (customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.editBasicsButton)) {
        await interaction.showModal(buildClanPlayerBasicsModal(session));
        return;
      }

      if (customId.startsWith(CLAN_PLAYER_CUSTOM_IDS.confirmButton)) {
        const result = await saveClanPlayerRegistration(sessionId);
        if (!result.ok) {
          await interaction.reply({
            embeds: [
              buildRecruitmentErrorEmbed(
                'No se pudo registrar',
                result.message,
              ),
            ],
            ephemeral: true,
          });
          return;
        }

        await interaction.reply({
          embeds: [
            buildRecruitmentNoticeEmbed({
              title: '✅ Jugador registrado',
              description: `**${result.player.minecraftNick}** fue registrado en el roster. Cerrando canal de entrevista...`,
              color: RECRUITMENT_COLORS.success,
            }),
          ],
          ephemeral: true,
        });

        const interviewChannel =
          guild.channels.cache.get(result.channelId) ??
          await guild.channels.fetch(result.channelId).catch(() => null);

        if (interviewChannel && 'delete' in interviewChannel) {
          await interviewChannel.delete('Jugador registrado en el roster desde el flujo de entrevista').catch(async () => {
            await interaction.followUp({
              embeds: [
                buildRecruitmentNoticeEmbed({
                  title: 'Canal no cerrado',
                  description: 'El jugador se registró, pero no pude cerrar el canal de entrevista automáticamente.',
                  color: RECRUITMENT_COLORS.warning,
                }),
              ],
              ephemeral: true,
            }).catch(() => undefined);
          });
        }

        // Log de registro al canal de reclutamiento
        const registerCfg = await getOrCreateGuildConfig(guild.id);
        const registerLogCh = getLogChannel(guild, registerCfg, 'recruit');
        if (registerLogCh) {
          await registerLogCh.send({
            embeds: [buildRecruitmentLogEmbed({
              type: 'registered',
              applicantId: result.applicantUserId,
              minecraftNick: result.player.minecraftNick,
              discordUsername: result.player.discord,
              staffId: interaction.user.id,
            })],
          }).catch(() => undefined);
        }

        return;
      }
    }

    // --- Botón confirmar selección de rol (reclutamiento) ---
    if (interaction.isButton() && interaction.customId.startsWith('apply_confirm_')) {
      const rolesJoined = interaction.customId.replace('apply_confirm_', '');
      if (!rolesJoined) return; // estado deshabilitado, no debería llegar aquí

      const guildId = interaction.guildId;
      if (!guildId) return;

      // Solicitud activa (OPEN o ACCEPTED)
      const activeTicket = await prisma.recruitmentTicket.findFirst({
        where: { guildId, userId: interaction.user.id, status: { in: ['OPEN', 'ACCEPTED'] } },
        select: { status: true },
      });
      if (activeTicket) {
        const statusMsg = activeTicket.status === 'OPEN' ? 'pendiente de revisión' : 'en proceso de entrevista';
        await interaction.reply({
          ephemeral: true,
          embeds: [
            buildRecruitmentNoticeEmbed({
              title: 'Ya tienes una solicitud activa',
              description: `Tienes una solicitud ${statusMsg}. Espera a que sea procesada antes de enviar una nueva.`,
              color: RECRUITMENT_COLORS.warning,
            }),
          ],
        });
        return;
      }

      // Cooldown 48h (DB)
      const lastApplyCheck = await prisma.recruitmentTicket.findFirst({
        where: { guildId, userId: interaction.user.id },
        orderBy: { createdAt: 'desc' },
        select: { createdAt: true },
      });
      if (lastApplyCheck) {
        const remaining = APPLY_COOLDOWN_MS - (Date.now() - lastApplyCheck.createdAt.getTime());
        if (remaining > 0) {
          const hours = Math.ceil(remaining / (60 * 60 * 1000));
          await interaction.reply({
            ephemeral: true,
            embeds: [
              buildRecruitmentNoticeEmbed({
                title: 'Solicitud en espera',
                description: `Ya tienes una solicitud reciente. Podrás volver a aplicar en **${hours} hora${hours === 1 ? '' : 's'}**.`,
                color: RECRUITMENT_COLORS.warning,
              }),
            ],
          });
          return;
        }
      }

      // customId suffix = "{platform}|{role}"
      const [platform = '', role = ''] = rolesJoined.split('|');
      if (!platform || !role) return; // estado incompleto, no debería llegar aquí

      const modal = new ModalBuilder()
        .setCustomId(`apply_modal_${platform}|${role}`)
        .setTitle('Solicitud de ingreso — Aquaris');

      modal.addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_age')
            .setLabel('¿Qué edad tienes?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: 20')
            .setRequired(true)
            .setMinLength(1)
            .setMaxLength(3),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_aportar')
            .setLabel('¿Qué puedes aportar al clan?')
            .setStyle(TextInputStyle.Paragraph)
            .setPlaceholder('Cuéntanos tus habilidades, proyectos anteriores...')
            .setRequired(true)
            .setMinLength(20)
            .setMaxLength(400),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_disponibilidad')
            .setLabel('¿Disponibilidad horaria y país?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Ej: tardes entre semana, fines de semana — España')
            .setRequired(true)
            .setMaxLength(150),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_colaborar')
            .setLabel('¿Colaboras en proyectos comunitarios?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('¿Aunque no sean para tu base personal? Sí / No / A veces')
            .setRequired(true)
            .setMaxLength(200),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_dudas')
            .setLabel('¿Tienes alguna duda sobre nosotros?')
            .setStyle(TextInputStyle.Short)
            .setPlaceholder('Escribe tus preguntas o deja en blanco si no tienes')
            .setRequired(false)
            .setMaxLength(300),
        ),
      );

      await interaction.showModal(modal);
      return;
    }

    // --- Botones de reclutamiento ---
    if (interaction.isButton()) {
      const { customId } = interaction;

      // ── Votos de reclutamiento ───────────────────────────────────────────────
      if (customId.startsWith('apply_vote_approve_') || customId.startsWith('apply_vote_reject_')) {
        const isApprove = customId.startsWith('apply_vote_approve_');
        const ticketId = customId.replace(isApprove ? 'apply_vote_approve_' : 'apply_vote_reject_', '');

        const guild = interaction.guild;
        if (!guild) return;

        await interaction.deferReply({ ephemeral: true });

        const cfg = await getOrCreateGuildConfig(guild.id);
        const voter = await guild.members.fetch(interaction.user.id);
        const eligibleRoles = [cfg.liderRoleId, cfg.coLiderRoleId, cfg.staffRoleId, cfg.reclutadorRoleId].filter(Boolean) as string[];
        const hasRole = voter.permissions.has(PermissionFlagsBits.Administrator) || eligibleRoles.some(r => voter.roles.cache.has(r));

        if (!hasRole) {
          await interaction.editReply({ content: 'No tienes permiso para votar en solicitudes.' });
          return;
        }

        const ticket = await prisma.recruitmentTicket.findUnique({ where: { id: ticketId } });
        if (!ticket || ticket.status !== 'OPEN') {
          await interaction.editReply({ content: 'Esta solicitud ya no está activa.' });
          return;
        }

        const existingVote = await prisma.recruitmentVote.findUnique({
          where: { ticketId_userId: { ticketId, userId: interaction.user.id } },
        });

        if (existingVote) {
          await interaction.editReply({ content: 'Ya has votado en esta solicitud.' });
          return;
        }

        await prisma.recruitmentVote.create({
          data: {
            ticketId,
            userId: interaction.user.id,
            username: interaction.user.username,
            vote: isApprove ? 'APPROVE' : 'REJECT',
          },
        });

        const votes = await prisma.recruitmentVote.findMany({ where: { ticketId } });
        const approveCount = votes.filter(v => v.vote === 'APPROVE').length;
        const rejectCount  = votes.filter(v => v.vote === 'REJECT').length;

        // Contar elegibles desde la caché de roles (sin fetch masivo de miembros)
        const eligibleMemberIds = new Set<string>();
        for (const roleId of eligibleRoles) {
          const role = guild.roles.cache.get(roleId);
          if (role) role.members.forEach(m => { if (!m.user.bot) eligibleMemberIds.add(m.id); });
        }
        const eligibleCount = Math.max(eligibleMemberIds.size, 1);
        const threshold = Math.floor(eligibleCount / 2) + 1;

        const components = buildRecruitmentVoteComponents(approveCount, rejectCount, eligibleCount, ticketId);
        await interaction.message.edit({ components });

        const voteLabel = isApprove ? 'a favor' : 'en contra';
        await interaction.editReply({
          content: `Voto registrado (${voteLabel}). Resultado: 👍 ${approveCount} / 👎 ${rejectCount} — se necesitan ${threshold}.`,
        });
      }

      // ── Confirmar aceptación ─────────────────────────────────────────────────
      if (customId.startsWith('apply_finalize_accept_')) {
        const ticketId = customId.replace('apply_finalize_accept_', '');

        const guild = interaction.guild;
        if (!guild) return;

        const actor = await guild.members.fetch(interaction.user.id);
        const cfg = await getOrCreateGuildConfig(guild.id);
        const eligibleRoles = [cfg.liderRoleId, cfg.coLiderRoleId, cfg.staffRoleId, cfg.reclutadorRoleId].filter(Boolean) as string[];
        const hasPermission = actor.permissions.has(PermissionFlagsBits.Administrator) || eligibleRoles.some(r => actor.roles.cache.has(r));

        if (!hasPermission) {
          await interaction.reply({ content: 'No tienes permiso para confirmar esta acción.', ephemeral: true });
          return;
        }

        const isLider = actor.permissions.has(PermissionFlagsBits.Administrator)
          || (cfg.liderRoleId != null && actor.roles.cache.has(cfg.liderRoleId));

        if (!isLider) {
          const votes = await prisma.recruitmentVote.findMany({ where: { ticketId } });
          const approveCount = votes.filter(v => v.vote === 'APPROVE').length;
          const eligibleRolesForCount = [cfg.liderRoleId, cfg.coLiderRoleId, cfg.staffRoleId, cfg.reclutadorRoleId].filter(Boolean) as string[];
          let eligibleCount = 0;
          for (const roleId of eligibleRolesForCount) {
            const role = guild.roles.cache.get(roleId) ?? await guild.roles.fetch(roleId).catch(() => null);
            if (role) eligibleCount += role.members.size;
          }
          const threshold = Math.floor(eligibleCount / 2) + 1;
          if (approveCount < threshold) {
            await interaction.reply({ content: `La votación aún no alcanzó el umbral necesario (👍 ${approveCount}/${threshold}). Sólo el Líder puede confirmar sin esperar el resultado.`, ephemeral: true });
            return;
          }
        }

        await interaction.deferUpdate();

        const ticket = await prisma.recruitmentTicket.findUnique({ where: { id: ticketId } });
        if (!ticket || ticket.status !== 'OPEN') {
          await interaction.followUp({ content: 'Este ticket ya fue procesado.', ephemeral: true });
          return;
        }

        await prisma.recruitmentTicket.update({
          where: { id: ticketId },
          data: { status: 'ACCEPTED', staleAlertedAt: null },
        });

        try {
          const applicant = await guild.members.fetch(ticket.userId);
          if (cfg.aspirantRoleId && !applicant.roles.cache.has(cfg.aspirantRoleId)) {
            await applicant.roles.add(cfg.aspirantRoleId);
          }
          await applicant.user.send({
            embeds: [
              buildRecruitmentUserMessageEmbed({
                title: '✅ Solicitud aceptada',
                description: 'El staff se pondrá en contacto contigo para coordinar la entrevista.',
                guildName: guild.name,
                color: RECRUITMENT_COLORS.success,
              }),
            ],
          });
        } catch { /* DMs desactivados o sin permisos */ }

        const acceptedEmbed = buildRecruitmentAcceptedApplicationEmbed(
          interaction.message.embeds[0] ?? new EmbedBuilder(),
          interaction.user.id,
        );
        await interaction.editReply({ embeds: [acceptedEmbed], components: [] });

        const acceptLogCh = getLogChannel(guild, cfg, 'recruit');
        if (acceptLogCh) {
          await acceptLogCh.send({
            embeds: [buildRecruitmentLogEmbed({
              type: 'accepted',
              applicantId: ticket.userId,
              staffId: interaction.user.id,
              ticketId: ticket.id,
            })],
          }).catch(() => undefined);
        }

        // Renombrar el canal privado del ticket (no el canal de revisión)
        if (ticket.channelId) {
          try {
            const privateChannel = guild.channels.cache.get(ticket.channelId)
              ?? await guild.channels.fetch(ticket.channelId).catch(() => null);
            const applicantMember = await guild.members.fetch(ticket.userId).catch(() => null);
            const username = applicantMember?.user.username ?? ticket.userId;
            if (privateChannel && privateChannel.isTextBased() && 'setName' in privateChannel) {
              await privateChannel.setName(`entrevista-${username}`);
              await privateChannel.send({
                embeds: [
                  buildRecruitmentNoticeEmbed({
                    title: '✅ Solicitud aceptada — entrevista en curso',
                    description:
                      `Solicitud aceptada por <@${interaction.user.id}>.\n\n` +
                      `<@${ticket.userId}> el staff se pondrá en contacto contigo aquí para coordinar la entrevista. ` +
                      'Una vez aprobada la entrevista, el staff te asignará el rol **Aquaris** manualmente.',
                    color: RECRUITMENT_COLORS.success,
                  }),
                ],
              });
            }
          } catch (err) {
            logger.warn({ err }, 'No se pudo renombrar el canal de entrevista');
          }
        }
      }

      // ── Confirmar rechazo (abre modal) ───────────────────────────────────────
      if (customId.startsWith('apply_finalize_reject_') && !customId.startsWith('apply_finalize_reject_reason_')) {
        const ticketId = customId.replace('apply_finalize_reject_', '');

        const guild = interaction.guild;
        if (!guild) return;

        const actor = await guild.members.fetch(interaction.user.id);
        const cfg = await getOrCreateGuildConfig(guild.id);
        const eligibleRoles = [cfg.liderRoleId, cfg.coLiderRoleId, cfg.staffRoleId, cfg.reclutadorRoleId].filter(Boolean) as string[];
        const hasPermission = actor.permissions.has(PermissionFlagsBits.Administrator) || eligibleRoles.some(r => actor.roles.cache.has(r));

        if (!hasPermission) {
          await interaction.reply({ content: 'No tienes permiso para confirmar esta acción.', ephemeral: true });
          return;
        }

        const isLiderForReject = actor.permissions.has(PermissionFlagsBits.Administrator)
          || (cfg.liderRoleId != null && actor.roles.cache.has(cfg.liderRoleId));

        if (!isLiderForReject) {
          const votes = await prisma.recruitmentVote.findMany({ where: { ticketId } });
          const rejectCount = votes.filter(v => v.vote === 'REJECT').length;
          const eligibleRolesForCount = [cfg.liderRoleId, cfg.coLiderRoleId, cfg.staffRoleId, cfg.reclutadorRoleId].filter(Boolean) as string[];
          let eligibleCount = 0;
          for (const roleId of eligibleRolesForCount) {
            const role = guild.roles.cache.get(roleId) ?? await guild.roles.fetch(roleId).catch(() => null);
            if (role) eligibleCount += role.members.size;
          }
          const threshold = Math.floor(eligibleCount / 2) + 1;
          if (rejectCount < threshold) {
            await interaction.reply({ content: `La votación aún no alcanzó el umbral necesario (👎 ${rejectCount}/${threshold}). Sólo el Líder puede confirmar sin esperar el resultado.`, ephemeral: true });
            return;
          }
        }

        const rejectModal = new ModalBuilder()
          .setCustomId(`apply_finalize_reject_reason_${ticketId}_${interaction.channelId}_${interaction.message.id}`)
          .setTitle('Rechazar solicitud');
        rejectModal.addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('reject_reason')
              .setLabel('Motivo del rechazo')
              .setStyle(TextInputStyle.Paragraph)
              .setRequired(true)
              .setMaxLength(500)
              .setPlaceholder('Explica brevemente el motivo del rechazo...'),
          ),
        );
        await interaction.showModal(rejectModal);
      }

    }

    // --- Botones de la tienda ---
    if (interaction.isButton() && interaction.customId.startsWith('shop:')) {
      const parts     = interaction.customId.split(':');
      const action    = parts[1]!;
      const orderCode = parts[2]!;
      const guild     = interaction.guild;
      const guildId   = interaction.guildId;
      if (!guild || !guildId) return;

      const actor = await guild.members.fetch(interaction.user.id);
      const cfg   = await getOrCreateGuildConfig(guildId);
      const hasPermission =
        actor.permissions.has(PermissionFlagsBits.ManageGuild) ||
        (cfg.staffRoleId != null && actor.roles.cache.has(cfg.staffRoleId));

      if (!hasPermission) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Permiso insuficiente', 'Solo el staff puede gestionar pedidos.')],
          ephemeral: true,
        });
        return;
      }

      // ── Aceptar pedido ──────────────────────────────────────────────────────
      if (action === 'accept') {
        await interaction.deferUpdate();

        const order = await prisma.shopOrder.findUnique({
          where:   { orderCode },
          include: { customer: true },
        });
        if (!order || order.status !== 'pending') {
          await interaction.followUp({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido ya procesado',
                description: 'Este pedido ya fue procesado.',
                color: SHOP_COLORS.warning,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        const staffUser = await upsertShopUser(guildId, interaction.user, true);

        let ticketChannelId: string | null = null;
        if (cfg.shopCategoryId) {
          try {
            const ticketCh = await guild.channels.create({
              name:   `pedido-${orderCode.toLowerCase()}`,
              type:   ChannelType.GuildText,
              parent: cfg.shopCategoryId,
              permissionOverwrites: [
                { id: guild.roles.everyone.id, deny: [PermissionFlagsBits.ViewChannel] },
                {
                  id:    order.customer.discordUserId,
                  allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                },
                ...(cfg.staffRoleId      ? [{ id: cfg.staffRoleId,      allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
                ...(cfg.liderRoleId      ? [{ id: cfg.liderRoleId,      allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
                ...(cfg.coLiderRoleId    ? [{ id: cfg.coLiderRoleId,    allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
                ...(cfg.comercianteRoleId ? [{ id: cfg.comercianteRoleId, allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages] }] : []),
              ],
            });
            ticketChannelId = ticketCh.id;
            await ticketCh.send({
              embeds: [
                buildShopNoticeEmbed({
                  title: 'Pedido aceptado',
                  description:
                    `Tu pedido **${orderCode}** fue aceptado.\n` +
                    `<@${order.customer.discordUserId}> el staff coordinará la entrega contigo aquí.`,
                  color: SHOP_COLORS.success,
                }),
              ],
            });
          } catch (err) {
            logger.warn({ err }, 'No se pudo crear canal de pedido');
          }
        }

        await prisma.shopOrder.update({
          where: { id: order.id },
          data:  {
            status:           'accepted',
            acceptedByUserId: staffUser.id,
            acceptedAt:       new Date(),
            ticketChannelId:  ticketChannelId,
          },
        });
        await prisma.shopOrderEvent.create({
          data: {
            orderId:       order.id,
            eventType:     'order_accepted',
            oldStatus:     'pending',
            newStatus:     'accepted',
            performedById: staffUser.id,
          },
        });

        const updatedOrder = await getOrderFull(orderCode);
        let movedToTicketChannel = false;
        let managementChannelId = interaction.channelId;
        let managementMessageId = interaction.message.id;
        if (updatedOrder) {
          if (ticketChannelId) {
            const ticketCh = guild.channels.cache.get(ticketChannelId);
            if (ticketCh?.isTextBased()) {
              try {
                const managementMessage = await ticketCh.send({
                  content: `<@${order.customer.discordUserId}>`,
                  embeds: [buildOrderEmbed(updatedOrder)],
                  components: [buildAcceptedButtons(orderCode)],
                });
                managementChannelId = ticketCh.id;
                managementMessageId = managementMessage.id;
                await interaction.message.delete().catch(err => {
                  logger.warn({ err }, 'No se pudo borrar el embed original del canal de pedidos');
                });
                movedToTicketChannel = true;
              } catch (err) {
                logger.warn({ err }, 'No se pudo publicar el embed de gestión en el canal temporal');
              }
            }
          }

          if (!movedToTicketChannel) {
            const stockAssessment = await getOrderStockAssessment(updatedOrder.id).catch(() => null);
            await interaction.message.edit({
              embeds:     [buildOrderEmbed(updatedOrder, stockAssessment)],
              components: [buildAcceptedButtons(orderCode)],
            });
          }
        }

        try {
          const customerMember = await guild.members.fetch(order.customer.discordUserId);
          await customerMember.user.send({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido aceptado',
                description:
                  `Tu pedido **${orderCode}** en **${guild.name}** fue aceptado.` +
                  (ticketChannelId ? '\nSe creó un canal temporal para coordinar la entrega.' : ''),
                color: SHOP_COLORS.success,
              }),
            ],
          });
        } catch { /* DMs desactivados */ }

        const eligibleDiscounts = await getEligibleManualVolumeDiscounts(order.id).catch(() => []);
        if (eligibleDiscounts.length > 0) {
          await interaction.followUp({
            ...buildManualDiscountPrompt({
              orderCode,
              channelId: managementChannelId,
              messageId: managementMessageId,
              options: eligibleDiscounts,
            }),
            ephemeral: true,
          });
        }

        await interaction.followUp({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Pedido aceptado',
              description: movedToTicketChannel && ticketChannelId
                ? `Pedido movido a <#${ticketChannelId}> para su gestión.`
                : 'La gestión se mantiene en el canal de pedidos porque no se pudo mover al canal temporal.',
              color: SHOP_COLORS.success,
            }),
          ],
          ephemeral: true,
        });
        return;
      }

      // ── Agregar servicio adicional (abre modal) ────────────────────────────
      if (action === 'add_service') {
        const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
        if (!order || order.status !== 'accepted') {
          await interaction.reply({
            embeds: [buildShopNoticeEmbed({ title: 'No disponible', description: 'Solo se pueden agregar servicios a pedidos aceptados.', color: SHOP_COLORS.warning })],
            ephemeral: true,
          });
          return;
        }

        const serviceModal = new ModalBuilder()
          .setCustomId(`shop:service_modal:${orderCode}:${interaction.channelId}:${interaction.message.id}`)
          .setTitle('Agregar servicio al pedido');
        serviceModal.addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('service_label')
              .setLabel('Nombre del servicio (ej: Domicilio)')
              .setStyle(TextInputStyle.Short)
              .setRequired(true)
              .setMaxLength(80),
          ),
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('service_amount')
              .setLabel('Monto (ej: 10% o 5000 para fijo)')
              .setStyle(TextInputStyle.Short)
              .setRequired(true)
              .setMaxLength(20)
              .setPlaceholder('10% o 5000'),
          ),
        );
        await interaction.showModal(serviceModal);
        return;
      }

      // ── Aplicar descuento manual ───────────────────────────────────────────
      if (action === 'discount') {
        const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
        if (!order || order.status !== 'accepted') {
          await interaction.reply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Descuento no disponible',
                description: 'Solo se pueden aplicar descuentos a pedidos aceptados.',
                color: SHOP_COLORS.warning,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        const eligibleDiscounts = await getEligibleManualVolumeDiscounts(order.id);
        if (eligibleDiscounts.length === 0) {
          await interaction.reply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Sin descuentos elegibles',
                description: 'No hay descuentos manuales elegibles para este pedido.',
                color: SHOP_COLORS.neutral,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        await interaction.reply({
          ...buildManualDiscountPrompt({
            orderCode,
            channelId: interaction.channelId,
            messageId: interaction.message.id,
            options: eligibleDiscounts,
          }),
          ephemeral: true,
        });
        return;
      }

      // ── Rechazar pedido (abre modal) ────────────────────────────────────────
      if (action === 'reject') {
        const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
        if (!order || order.status !== 'pending') {
          await interaction.reply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido ya procesado',
                description: 'Este pedido ya fue procesado.',
                color: SHOP_COLORS.warning,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        const rejectModal = new ModalBuilder()
          .setCustomId(`shop:reject_modal:${orderCode}:${interaction.channelId}:${interaction.message.id}`)
          .setTitle(`Rechazar pedido ${orderCode}`);
        rejectModal.addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('reject_reason')
              .setLabel('Motivo del rechazo')
              .setStyle(TextInputStyle.Paragraph)
              .setRequired(true)
              .setMaxLength(500)
              .setPlaceholder('Explica brevemente el motivo...'),
          ),
        );
        await interaction.showModal(rejectModal);
        return;
      }

      // ── Cerrar pedido (entregado) ───────────────────────────────────────────
      if (action === 'close') {
        await interaction.deferUpdate();

        const order = await prisma.shopOrder.findUnique({
          where:   { orderCode },
          include: { customer: true },
        });
        if (!order || order.status !== 'accepted') {
          await interaction.followUp({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido no cerrable',
                description: 'Solo se pueden cerrar pedidos aceptados.',
                color: SHOP_COLORS.warning,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        const staffUser = await upsertShopUser(guildId, interaction.user, true);

        try {
          const didReserve = await consumeOrderStock(order.id, guildId, staffUser.id);
          if (didReserve) {
            await prisma.shopOrderEvent.create({
              data: {
                orderId:       order.id,
                eventType:     'stock_reserved',
                oldStatus:     'accepted',
                newStatus:     'accepted',
                performedById: staffUser.id,
              },
            });
          }
        } catch (err) {
          const stockAssessment = await getOrderStockAssessment(order.id).catch(() => null);
          const shortageLines = stockAssessment?.shortages.slice(0, 6).map(formatOrderStockStatusLine) ?? [];
          await interaction.followUp({
            embeds: [
              buildShopErrorEmbed(
                'No se puede entregar',
                [
                  err instanceof Error ? err.message : 'Error al consumir stock.',
                  'Repón o prepara los materiales faltantes antes de cerrar el pedido.',
                  ...shortageLines,
                ].join('\n'),
              ),
            ],
            ephemeral: true,
          });
          return;
        }

        await prisma.shopSale.create({
          data: {
            guildId,
            orderId:        order.id,
            buyerUserId:    order.customerUserId,
            registeredById: staffUser.id,
            totalAmount:    order.totalAmount,
          },
        });

        await prisma.shopOrder.update({
          where: { id: order.id },
          data:  {
            status:         'completed',
            closedByUserId: staffUser.id,
            closedAt:       new Date(),
          },
        });
        await prisma.shopOrderEvent.create({
          data: {
            orderId:       order.id,
            eventType:     'delivery_completed',
            oldStatus:     'accepted',
            newStatus:     'completed',
            performedById: staffUser.id,
          },
        });
        await prisma.shopOrderEvent.create({
          data: {
            orderId:       order.id,
            eventType:     'order_completed',
            oldStatus:     'accepted',
            newStatus:     'completed',
            performedById: staffUser.id,
          },
        });

        const updatedOrder = await getOrderFull(orderCode);
        if (updatedOrder) {
          await interaction.message.edit({
            embeds:     [buildOrderEmbed(updatedOrder)],
            components: [],
          });
        }

        try {
          const customerMember = await guild.members.fetch(order.customer.discordUserId);
          await customerMember.user.send({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido entregado',
                description: `Tu pedido **${orderCode}** en **${guild.name}** fue marcado como entregado. Gracias por comprar en Aquaris.`,
                color: SHOP_COLORS.success,
              }),
            ],
          });
        } catch { /* DMs desactivados */ }

        if (order.ticketChannelId) {
          const ticketCh = guild.channels.cache.get(order.ticketChannelId);
          if (ticketCh) {
            setTimeout(async () => {
              try { await ticketCh.delete(); } catch { /* ya eliminado */ }
            }, 8_000);
          }
        }
        return;
      }

      // ── Cancelar pedido (abre modal) ────────────────────────────────────────
      if (action === 'cancel') {
        const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
        if (!order || !['pending', 'accepted'].includes(order.status)) {
          await interaction.reply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Pedido no cancelable',
                description: 'Este pedido no se puede cancelar.',
                color: SHOP_COLORS.warning,
              }),
            ],
            ephemeral: true,
          });
          return;
        }

        const cancelModal = new ModalBuilder()
          .setCustomId(`shop:cancel_modal:${orderCode}:${interaction.channelId}:${interaction.message.id}`)
          .setTitle(`Cancelar pedido ${orderCode}`);
        cancelModal.addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('cancel_reason')
              .setLabel('Motivo de la cancelación')
              .setStyle(TextInputStyle.Paragraph)
              .setRequired(true)
              .setMaxLength(500)
              .setPlaceholder('Explica brevemente el motivo...'),
          ),
        );
        await interaction.showModal(cancelModal);
        return;
      }
    }

    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('clanplayer:')) {
      await interaction.deferUpdate();

      const guild = interaction.guild;
      if (!guild) return;

      const actor = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!actor || !(await canManageClanPlayers(actor))) {
        await interaction.followUp({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Permiso insuficiente',
              'Solo el staff puede registrar jugadores en el roster.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      const mapping = [
        { prefix: CLAN_PLAYER_CUSTOM_IDS.rankSelect, field: 'rank' as const },
        { prefix: CLAN_PLAYER_CUSTOM_IDS.minecraftRankSelect, field: 'minecraftRank' as const },
        { prefix: CLAN_PLAYER_CUSTOM_IDS.statusSelect, field: 'status' as const },
      ].find(item => interaction.customId.startsWith(item.prefix));

      if (!mapping) return;

      const sessionId = interaction.customId.slice(mapping.prefix.length);
      const session = applySessionSelectValue(sessionId, mapping.field, interaction.values[0] ?? '');

      if (!session) {
        await interaction.followUp({
          embeds: [
            buildRecruitmentErrorEmbed(
              'Sesión expirada',
              'La sesión expiró. Ejecuta el comando otra vez.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      await interaction.editReply(buildClanPlayerReviewReply(session));
      return;
    }

    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('shop:discount_select:')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      const guildId = interaction.guildId;
      if (!guild || !guildId) return;

      const parts = interaction.customId.split(':');
      const orderCode = parts[2]!;
      const channelId = parts[3]!;
      const messageId = parts[4]!;

      const actor = await guild.members.fetch(interaction.user.id);
      const cfg = await getOrCreateGuildConfig(guildId);
      const hasPermission =
        actor.permissions.has(PermissionFlagsBits.ManageGuild) ||
        (cfg.staffRoleId != null && actor.roles.cache.has(cfg.staffRoleId));

      if (!hasPermission) {
        await interaction.editReply({
          embeds: [buildShopErrorEmbed('Permiso insuficiente', 'Solo el staff puede aplicar descuentos.')],
        });
        return;
      }

      const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
      if (!order || order.status !== 'accepted') {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Descuento no disponible',
              description: 'Este pedido ya no admite descuentos manuales.',
              color: SHOP_COLORS.warning,
            }),
          ],
        });
        return;
      }

      const staffUser = await upsertShopUser(guildId, interaction.user, true);

      try {
        const appliedDiscounts = await applyManualVolumeDiscounts({
          orderId: order.id,
          appliedByUserId: staffUser.id,
          selectedPolicyIds: interaction.values,
        });

        if (appliedDiscounts.length === 0) {
          await interaction.editReply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Sin descuentos nuevos',
                description: 'No había descuentos nuevos para aplicar.',
                color: SHOP_COLORS.neutral,
              }),
            ],
          });
          return;
        }

        let orderMessageUpdated = false;
        const updatedOrder = await getOrderFull(orderCode);
        if (updatedOrder) {
          const stockAssessment = await getOrderStockAssessment(updatedOrder.id).catch(() => null);
          const originalChannel =
            guild.channels.cache.get(channelId) ??
            await guild.channels.fetch(channelId).catch(() => null);
          if (originalChannel?.isTextBased()) {
            const originalMessage = await originalChannel.messages.fetch(messageId).catch(() => null);
            if (originalMessage) {
              await originalMessage.edit({
                embeds: [buildOrderEmbed(updatedOrder, stockAssessment)],
                components: [buildAcceptedButtons(orderCode)],
              });
              orderMessageUpdated = true;
            }
          }

          const refreshedEmbeds = await refreshOrderManagementEmbeds({
            guild,
            orderCode,
            stockAssessment,
            updatedOrder,
            channelHints: [
              channelId,
              order.ticketChannelId,
              order.staffChannelId,
            ],
          });
          orderMessageUpdated = orderMessageUpdated || refreshedEmbeds > 0;
        }

        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Descuentos aplicados',
              description: [
                ...appliedDiscounts.map(discount =>
                  `• ${discount.productName}: ${formatDiscountLabel(discount.discountType, discount.discountValue)} (${discount.minQuantity}+)`,
                ),
                orderMessageUpdated ? '' : 'El descuento se guardó, pero no pude refrescar el embed de la orden automáticamente.',
              ].filter(Boolean).join('\n'),
              color: SHOP_COLORS.success,
            }),
          ],
        });
      } catch (err) {
        await interaction.editReply({
          embeds: [
            buildShopErrorEmbed(
              'No se pudieron aplicar descuentos',
              err instanceof Error ? err.message : 'No se pudieron aplicar los descuentos.',
            ),
          ],
        });
      }

      return;
    }

    // --- Selección de variante en catálogo ---
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('tienda:catalog:variant:')) {
      await interaction.deferUpdate();

      const guildId = interaction.guildId;
      if (!guildId) return;

      const parentProductId = interaction.customId.slice('tienda:catalog:variant:'.length);
      const variantId = interaction.values[0];
      if (!parentProductId || !variantId) return;

      const products = await queryCatalogProducts(guildId);
      const parent = products.find(p => p.id === parentProductId);
      const variant = parent?.variants.find(v => v.id === variantId);
      if (!parent || !variant) return;

      const embed = buildVariantDetailEmbed(variant, parent, parent.category, parent.subcategory);
      const { components } = buildCatalogView(products, parent.productType === 'service' ? 'services' : 'products', parent.category, parent.subcategory, 1, parent.id, variantId);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // --- Select de producto en catálogo (≤25 items) ---
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('tienda:catalog:product:')) {
      await interaction.deferUpdate();

      const guildId = interaction.guildId;
      if (!guildId) return;

      const parts = interaction.customId.split(':');
      const mode = isCatalogMode(parts[3]) ? parts[3] : undefined;
      const categoryKey = parts[4];
      const subcategoryKey = parts[5];
      const selectedProductId = interaction.values[0];

      if (!mode) return;

      const products = await queryCatalogProducts(guildId);
      const { embed, components } = buildCatalogView(products, mode, categoryKey, subcategoryKey, 1, selectedProductId);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // --- Select de producto en resultados de búsqueda ---
    if (interaction.isStringSelectMenu() && interaction.customId === 'tienda:catalog:search_product') {
      await interaction.deferUpdate();

      const guildId = interaction.guildId;
      if (!guildId) return;

      const selectedProductId = interaction.values[0];
      const allProducts = await queryCatalogProducts(guildId);
      const product = allProducts.find(p => p.id === selectedProductId);
      if (!product) return;

      const embed = buildProductDetailEmbed(product, product.category, product.subcategory)
        .setTitle(`🔍 ${product.name}`);
      await interaction.editReply({ embeds: [embed] });
      return;
    }

    // --- Select menus de categoría/subcategoría del catálogo ---
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('tienda:catalog:')) {
      const parts   = interaction.customId.split(':');
      const action  = parts[2]; // 'category' | 'subcategory'
      const guildId = interaction.guildId;
      if (!guildId) return;

      await interaction.deferUpdate();

      const products = await queryCatalogProducts(guildId);
      const selected = interaction.values[0]!;

      let mode: CatalogMode | undefined;
      let categoryKey:    string | undefined;
      let subcategoryKey: string | undefined;

      if (action === 'category') {
        mode = isCatalogMode(parts[3]) ? parts[3] : undefined;
        categoryKey = selected;
        // subcategoría se resetea a la primera de la nueva categoría
      } else if (action === 'subcategory') {
        mode = isCatalogMode(parts[3]) ? parts[3] : undefined;
        categoryKey    = parts[4]; // tienda:catalog:subcategory:{mode}:{category}
        subcategoryKey = selected;
      }

      if (!mode) {
        const { embed, components } = buildCatalogEntryView(products);
        await interaction.editReply({ embeds: [embed], components });
        return;
      }

      const { embed, components } = buildCatalogView(products, mode, categoryKey, subcategoryKey, 1);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // --- Botones de navegación del catálogo de tienda ---
    if (interaction.isButton() && interaction.customId.startsWith('tienda:catalog:')) {
      const parts = interaction.customId.split(':');
      const guildId = interaction.guildId;
      if (!guildId) return;

      if (parts[2] === 'search') {
        const modal = new ModalBuilder()
          .setCustomId('tienda:catalog:search_modal')
          .setTitle('Buscar en la tienda');

        const input = new TextInputBuilder()
          .setCustomId('search_query')
          .setLabel('¿Qué estás buscando?')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMinLength(2)
          .setMaxLength(100)
          .setPlaceholder('Ej: diamante, elytra, kit de minería…');

        modal.addComponents(new ActionRowBuilder<TextInputBuilder>().addComponents(input));
        await interaction.showModal(modal);
        return;
      }

      if (parts[2] === 'search_back') {
        await interaction.deferUpdate();
        const products = await queryCatalogProducts(guildId);
        const { embed, components } = buildCatalogEntryView(products);
        await interaction.editReply({ embeds: [embed], components });
        return;
      }

      if (parts[2] === 'request') {
        const modal = new ModalBuilder()
          .setCustomId('tienda:catalog:request_modal')
          .setTitle('Solicitud libre');

        const input = new TextInputBuilder()
          .setCustomId('request_text')
          .setLabel('¿Qué quieres pedir?')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(true)
          .setMinLength(5)
          .setMaxLength(1000)
          .setPlaceholder('Ej: 2 cajas de cohetes, un servicio especial o un encargo no listado.');

        modal.addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(input),
        );

        await interaction.showModal(modal);
        return;
      }

      if (parts[2] === 'mode') {
        const mode = isCatalogMode(parts[3]) ? parts[3] : undefined;
        if (!mode) return;

        await interaction.deferUpdate();

        const products = await queryCartProducts(guildId);
        if (products.length === 0) {
          await interaction.editReply({
            embeds: [buildShopNoticeEmbed({ title: 'Tienda sin productos', description: 'La tienda no tiene productos disponibles en este momento.', color: SHOP_COLORS.neutral })],
            components: [],
          });
          return;
        }

        const existingCart = getCart(guildId, interaction.user.id);
        const session = existingCart ?? {
          guildId,
          userId: interaction.user.id,
          channelId: interaction.channelId,
          messageId: interaction.message.id,
          currentCategory: null,
          currentCatalogMode: mode,
          currentPage: 1,
          currentSubcategory: null,
          items: [],
          pendingProductId: null,
          viewMode: 'browse' as const,
        };

        session.channelId = interaction.channelId;
        session.messageId = interaction.message.id;
        session.currentCatalogMode = mode;
        session.currentPage = 1;
        session.currentCategory = null;
        session.currentSubcategory = null;
        session.viewMode = 'browse';
        setCart(session);

        const view = buildCartView(session, products);
        await interaction.editReply({ embeds: view.embeds, components: view.components });
        return;
      }

      if (parts[2] === 'open_cart') {
        await interaction.deferUpdate();

        const products = await queryCartProducts(guildId);
        if (products.length === 0) {
          await interaction.editReply({
            embeds: [
              buildShopNoticeEmbed({
                title: 'Tienda sin productos',
                description: 'La tienda no tiene productos disponibles en este momento.',
                color: SHOP_COLORS.neutral,
              }),
            ],
            components: [],
          });
          return;
        }

        const requestedPage = Number.parseInt(parts[6] ?? '1', 10);
        const existingCart = getCart(guildId, interaction.user.id);
        const session = existingCart ?? {
          guildId,
          userId: interaction.user.id,
          channelId: interaction.channelId,
          messageId: interaction.message.id,
          currentCategory: null,
          currentCatalogMode: 'products' as const,
          currentPage: 1,
          currentSubcategory: null,
          items: [],
          pendingProductId: null,
          viewMode: 'browse' as const,
        };

        session.channelId = interaction.channelId;
        session.messageId = interaction.message.id;
        session.currentCatalogMode = isCatalogMode(parts[3]) ? parts[3] : session.currentCatalogMode;
        session.currentCategory = parts[4] ?? session.currentCategory;
        session.currentSubcategory = parts[5] ?? session.currentSubcategory;
        session.currentPage = Number.isNaN(requestedPage) ? 1 : requestedPage;
        session.viewMode = 'browse';
        setCart(session);

        const view = buildCartView(session, products);
        await interaction.editReply({ embeds: view.embeds, components: view.components });
        return;
      }

      let category: string | undefined;
      let mode: CatalogMode | undefined;
      let subcategory: string | undefined;
      let rawPage: string | undefined;

      if (parts[2] === 'page') {
        mode = isCatalogMode(parts[3]) ? parts[3] : undefined;
        category = parts[4];
        subcategory = parts[5];
        rawPage = parts[6];
      } else if (parts[2] === 'page-label') {
        return;
      }

      await interaction.deferUpdate();

      const products = await queryCatalogProducts(guildId);
      if (!mode) {
        const { embed, components } = buildCatalogEntryView(products);
        await interaction.editReply({ embeds: [embed], components });
        return;
      }
      const requestedPage = Number.parseInt(rawPage ?? '1', 10);
      const { embed, components } = buildCatalogView(
        products,
        mode,
        category,
        subcategory,
        Number.isNaN(requestedPage) ? 1 : requestedPage,
      );

      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Carrito interactivo: cambiar categoría ────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('pedido:cart:category')) {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const mode = interaction.customId.split(':')[3];
      if (isCatalogMode(mode)) {
        cart.currentCatalogMode = mode;
      }
      cart.currentCategory = interaction.values[0] ?? null;
      cart.currentSubcategory = null;
      cart.currentPage = 1;
      cart.viewMode = 'browse';
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: cambiar subcategoría ────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'pedido:cart:subcategory') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      cart.currentSubcategory = interaction.values[0] ?? null;
      cart.currentPage = 1;
      cart.viewMode = 'browse';
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: paginación ──────────────────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('pedido:cart:page:')) {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const action = interaction.customId.split(':')[3];
      cart.currentPage += action === 'prev' ? -1 : 1;
      if (cart.currentPage < 1) cart.currentPage = 1;
      cart.viewMode = 'browse';
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: cambiar modo de vista ───────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('pedido:cart:view:')) {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const mode = interaction.customId.split(':')[3];
      cart.viewMode = mode === 'cart' ? 'cart' : 'browse';
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: seleccionar producto del select menu para agregar ─
    if (interaction.isStringSelectMenu() && interaction.customId === 'pedido:cart:add:select') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const productId = interaction.values[0];
      if (!productId) return;

      const productCheck = await prisma.shopProduct.findUnique({
        where: { id: productId },
        select: {
          name: true,
          presentationType: true,
          variants: {
            where:   { isActive: true },
            orderBy: { sortOrder: 'asc' },
            select: {
              id: true,
              name: true,
              variantLabel: true,
              presentationType: true,
              prices: { where: { validTo: null }, take: 1 },
              baseMaterial: { select: { stackSize: true } },
            },
          },
        },
      });

      if (!productCheck) return;

      // Producto padre → mostrar selector de variantes en lugar del modal
      if (productCheck.variants.length > 0) {
        await interaction.deferUpdate();
        const products = await queryCartProducts(guildId);
        const view = buildCartView(cart, products, productId);
        const variantRow = buildVariantSelectRow(
          productCheck.variants as Parameters<typeof buildVariantSelectRow>[0],
          productId,
          'cart',
        );
        const components = [...view.components];
        components.splice(components.length - 1, 0, variantRow);
        await interaction.editReply({ embeds: view.embeds, components });
        return;
      }

      // Producto hoja → flujo normal con modal
      const presentationTypeName = resolvePresentationTypeName(
        productCheck.presentationType as Parameters<typeof resolvePresentationTypeName>[0],
      );
      setCart({ ...cart, pendingProductId: productId });
      await interaction.showModal(buildQtyModal(productCheck.name, presentationTypeName));
      return;
    }

    // ── Carrito interactivo: seleccionar variante de producto padre ────────────
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('pedido:cart:variant:select:')) {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const variantId = interaction.values[0];
      if (!variantId) return;

      const variant = await prisma.shopProduct.findUnique({
        where: { id: variantId },
        select: { name: true, presentationType: true, parentId: true, isActive: true },
      });

      if (!variant?.isActive || !variant.parentId) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Variante no disponible', 'Esa variante ya no está activa.')],
          ephemeral: true,
        });
        return;
      }

      const presentationTypeName = resolvePresentationTypeName(
        variant.presentationType as Parameters<typeof resolvePresentationTypeName>[0],
      );
      setCart({ ...cart, pendingProductId: variantId });
      await interaction.showModal(buildQtyModal(variant.name, presentationTypeName));
      return;
    }

    // ── Carrito interactivo: abrir búsqueda ───────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:search') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const modal = new ModalBuilder()
        .setCustomId('pedido:cart:search_modal')
        .setTitle('Buscar producto')
        .addComponents(
          new ActionRowBuilder<TextInputBuilder>().addComponents(
            new TextInputBuilder()
              .setCustomId('query')
              .setLabel('Nombre del producto')
              .setStyle(TextInputStyle.Short)
              .setRequired(true)
              .setMaxLength(100)
              .setPlaceholder('Ej: espada, kit, madera…'),
          ),
        );

      await interaction.showModal(modal);
      return;
    }

    // ── Carrito interactivo: resultado de búsqueda ────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId === 'pedido:cart:search_modal') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      await interaction.deferUpdate();
      const query = interaction.fields.getTextInputValue('query').trim();
      const allProducts = await queryCartProducts(guildId);
      const results = searchCatalogProducts(allProducts, query);

      setCart({ ...cart, viewMode: 'search', searchQuery: query });
      const view = buildCartSearchView(cart, results, query);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: volver al catálogo desde búsqueda ───────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:search_back') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      await interaction.deferUpdate();
      setCart({ ...cart, viewMode: 'browse', searchQuery: null });
      const products = await queryCartProducts(guildId);
      const view = buildCartView({ ...cart, viewMode: 'browse' }, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: quitar producto ──────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'pedido:cart:remove') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const idx  = parseInt(interaction.values[0]!, 10);
      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      cart.items.splice(idx, 1);
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: vaciar carrito ───────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:clear') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      cart.items = [];
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: modal de cantidad ────────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId === 'pedido:cart:qty_modal') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart?.pendingProductId) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito expirado', 'Usa `/pedido carrito` de nuevo.')],
          ephemeral: true,
        });
        return;
      }

      const qtyRaw = interaction.fields.getTextInputValue('qty');
      const qty    = parseInt(qtyRaw, 10);
      if (isNaN(qty) || qty < 1) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Cantidad inválida', 'La cantidad debe ser un número entero mayor a 0.')],
          ephemeral: true,
        });
        return;
      }

      const notes       = interaction.fields.getTextInputValue('notes').trim() || null;
      const productId   = cart.pendingProductId;

      const product = await prisma.shopProduct.findUnique({
        where:   { id: productId },
        include: {
          components: {
            include: {
              material: {
                select: {
                  name: true,
                },
              },
            },
          },
          prices: { where: { validTo: null }, take: 1 },
        },
      });

      if (!product || !product.isActive) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Producto no disponible', 'Ese producto ya no está disponible.')],
          ephemeral: true,
        });
        return;
      }

      if (!hasProductInventoryDefinition(product)) {
        await interaction.reply({
          embeds: [
            buildShopErrorEmbed(
              'Producto no vendible',
              `**${product.name}** no tiene una definición de inventario válida y no se puede vender todavía.`,
            ),
          ],
          ephemeral: true,
        });
        return;
      }

      const priceRecord = product.prices[0];
      if (!priceRecord) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Precio no configurado', `**${product.name}** no tiene precio configurado.`)],
          ephemeral: true,
        });
        return;
      }

      const unitPrice = priceRecord.price;
      const lineTotal = unitPrice.mul(qty);
      const contentsSummary = buildProductContentsSummary(product);

      // Si el producto ya está en el carrito, sumar la cantidad
      const existing = cart.items.find(i => i.productId === product.id);
      if (existing) {
        existing.quantity  += qty;
        existing.lineTotal  = existing.unitPrice.mul(existing.quantity);
        existing.contentsSummary ??= contentsSummary;
      } else {
        cart.items.push({
          contentsSummary,
          productId:       product.id,
          productName:     product.name,
          variantLabel:    product.variantLabel ?? null,
          productType:     product.productType,
          productCategory: product.category,
          quantity:        qty,
          unitPrice,
          lineTotal,
          notes,
        });
      }

      cart.pendingProductId = null;
      setCart(cart);

      await interaction.deferUpdate();
      const products = await queryCartProducts(guildId);
      const view = buildCartView(cart, products);
      await interaction.editReply({ embeds: view.embeds, components: view.components });
      return;
    }

    // ── Carrito interactivo: confirmar pedido ─────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:confirm') {
      const guildId = interaction.guildId;
      if (!guildId || !interaction.guild) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart || cart.items.length === 0) {
        await interaction.reply({
          embeds: [buildShopErrorEmbed('Carrito vacío', 'El carrito está vacío.')],
          ephemeral: true,
        });
        return;
      }

      await interaction.deferUpdate();

      const config    = await getOrCreateGuildConfig(guildId);
      const customer = await upsertShopUser(guildId, interaction.user);
      let order;
      try {
        order = await createPendingOrder({
          guildId,
          customerUserId: customer.id,
          items: cart.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            notes: item.notes,
          })),
          staffChannelId: config.shopStaffChannelId ?? null,
          source: 'cart',
        });
      } catch (err) {
        await interaction.followUp({
          embeds: [
            buildShopErrorEmbed(
              'No se pudo crear el pedido',
              err instanceof Error ? err.message : 'No se pudo crear el pedido.',
            ),
          ],
          ephemeral: true,
        });
        return;
      }
      const orderCode = order.orderCode;

      // Notificar al canal de staff
      const orderFull = await getOrderFull(orderCode);
      const stockAssessment = orderFull ? await getOrderStockAssessment(orderFull.id) : null;
      if (orderFull && config.shopStaffChannelId) {
        const staffCh = interaction.guild.channels.cache.get(config.shopStaffChannelId);
        if (staffCh?.isTextBased()) {
          await staffCh.send({
            embeds:     [buildOrderEmbed(orderFull, stockAssessment)],
            components: [buildPendingButtons(orderCode)],
          });
        }
      }

      deleteCart(guildId, interaction.user.id);

      const isFullyAvailable = stockAssessment?.isFullyAvailable ?? true;

      await interaction.editReply({
        embeds: [
          buildOrderReceivedEmbed({
            orderCode,
            productLabel: cart.items.map(item => `${item.productName} x ${item.quantity}`).join('\n'),
            totalAmount: orderFull?.totalAmount ?? 0,
            discountAmount: orderFull?.totalDiscountAmount ?? 0,
            isFullyAvailable,
          }),
        ],
        components: [],
      });
      return;
    }

    // --- Modal: rechazo de reclutamiento con motivo ---
    if (interaction.isModalSubmit() && (
      interaction.customId.startsWith('apply_finalize_reject_reason_') ||
      interaction.customId.startsWith('apply_reject_reason_')
    )) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      // Parsear customId: apply_finalize_reject_reason_<ticketId>_<channelId>_<messageId>
      //                or: apply_reject_reason_<ticketId>_<channelId>_<messageId>
      const prefix = interaction.customId.startsWith('apply_finalize_reject_reason_')
        ? 'apply_finalize_reject_reason_'
        : 'apply_reject_reason_';
      const parts = interaction.customId.replace(prefix, '').split('_');
      // ticketId es cuid (puede contener letras/números), channelId y messageId son snowflakes (solo dígitos)
      // Los snowflakes están al final, son los últimos 2 elementos
      const messageId = parts[parts.length - 1];
      const channelId = parts[parts.length - 2];
      const ticketId = parts.slice(0, parts.length - 2).join('_');

      const reason = normalizeRecruitmentReason(interaction.fields.getTextInputValue('reject_reason'));

      const ticket = await prisma.recruitmentTicket.findUnique({ where: { id: ticketId } });
      if (!ticket || ticket.status !== 'OPEN') {
        await interaction.editReply({
          embeds: [
            buildRecruitmentNoticeEmbed({
              title: 'Ticket ya procesado',
              description: 'Este ticket ya fue procesado.',
              color: RECRUITMENT_COLORS.warning,
            }),
          ],
        });
        return;
      }

      await prisma.recruitmentTicket.update({
        where: { id: ticketId },
        data: { status: 'REJECTED' },
      });

      // Quitar rol aspirante + notificar
      const rejectCfg = await getOrCreateGuildConfig(guild.id);
      try {
        const applicant = await guild.members.fetch(ticket.userId);
        if (rejectCfg.aspirantRoleId && applicant.roles.cache.has(rejectCfg.aspirantRoleId)) {
          await applicant.roles.remove(rejectCfg.aspirantRoleId);
        }
        await applicant.user.send({
          embeds: [
            buildRecruitmentUserMessageEmbed({
              title: '❌ Solicitud rechazada',
              description: 'Puedes intentarlo de nuevo en el futuro.',
              guildName: guild.name,
              reason,
              color: RECRUITMENT_COLORS.danger,
            }),
          ],
        });
      } catch { /* DMs desactivados o sin permisos */ }

      // Actualizar el embed original si está accesible
      try {
        if (!channelId || !messageId) throw new Error('Missing channelId or messageId');
        const originalChannel = guild.channels.cache.get(channelId);
        if (originalChannel?.isTextBased()) {
          const originalMsg = await originalChannel.messages.fetch(messageId);
          const rejectedEmbed = buildRecruitmentRejectedApplicationEmbed(
            originalMsg.embeds[0] ?? new EmbedBuilder(),
            interaction.user.id,
            reason,
          );
          await originalMsg.edit({ embeds: [rejectedEmbed], components: [] });
        }
      } catch (err) {
        logger.warn({ err }, 'No se pudo actualizar el embed de rechazo');
      }

      // Eliminar canal de ticket si existe (no es el canal de logs)
      if (ticket.channelId && ticket.channelId === channelId) {
        const ticketChannel = guild.channels.cache.get(ticket.channelId);
        if (ticketChannel && 'delete' in ticketChannel) {
          setTimeout(async () => {
            try { await ticketChannel.delete(); } catch { /* ya eliminado */ }
          }, 8_000);
        }
      }

      await interaction.editReply({
        embeds: [
          buildRecruitmentNoticeEmbed({
            title: 'Solicitud rechazada',
            description: 'El usuario fue notificado con el motivo.',
            color: RECRUITMENT_COLORS.success,
          }),
        ],
      });

      // Log de rechazo al canal de reclutamiento
      const rejectLogCh = getLogChannel(guild, rejectCfg, 'recruit');
      if (rejectLogCh) {
        await rejectLogCh.send({
          embeds: [buildRecruitmentLogEmbed({
            type: 'rejected',
            applicantId: ticket.userId,
            staffId: interaction.user.id,
            ticketId: ticket.id,
            reason,
          })],
        }).catch(() => undefined);
      }
    }

    // --- Modal: rechazo de pedido ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('shop:reject_modal:')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      // Formato: shop:reject_modal:AQ-XXXXXX:channelId:messageId
      const parts     = interaction.customId.split(':');
      const orderCode = parts[2]!;
      const channelId = parts[3]!;
      const messageId = parts[4]!;
      const reason    = interaction.fields.getTextInputValue('reject_reason');
      const guildId   = interaction.guildId!;

      const order = await prisma.shopOrder.findUnique({
        where:   { orderCode },
        include: { customer: true },
      });
      if (!order || order.status !== 'pending') {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Pedido ya procesado',
              description: 'Este pedido ya fue procesado.',
              color: SHOP_COLORS.warning,
            }),
          ],
        });
        return;
      }

      const staffUser = await upsertShopUser(guildId, interaction.user, true);

      await prisma.shopOrder.update({
        where: { id: order.id },
        data:  {
          status:           'rejected',
          rejectedByUserId: staffUser.id,
          rejectedAt:       new Date(),
          rejectionReason:  reason,
        },
      });
      await prisma.shopOrderEvent.create({
        data: {
          orderId:       order.id,
          eventType:     'order_rejected',
          oldStatus:     'pending',
          newStatus:     'rejected',
          performedById: staffUser.id,
          notes:         reason,
        },
      });

      try {
        const originalCh = guild.channels.cache.get(channelId);
        if (originalCh?.isTextBased()) {
          const msg          = await originalCh.messages.fetch(messageId);
          const updatedOrder = await getOrderFull(orderCode);
          if (updatedOrder) {
            await msg.edit({ embeds: [buildOrderEmbed(updatedOrder)], components: [] });
          }
        }
      } catch (err) {
        logger.warn({ err }, 'No se pudo actualizar embed de pedido rechazado');
      }

      try {
        const customerMember = await guild.members.fetch(order.customer.discordUserId);
        await customerMember.user.send({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Pedido rechazado',
              description: `Tu pedido **${orderCode}** en **${guild.name}** fue rechazado.\nMotivo: ${reason}`,
              color: SHOP_COLORS.danger,
            }),
          ],
        });
      } catch { /* DMs desactivados */ }

      await interaction.editReply({
        embeds: [
          buildShopNoticeEmbed({
            title: 'Pedido rechazado',
            description: 'El cliente fue notificado.',
            color: SHOP_COLORS.success,
          }),
        ],
      });
      return;
    }

    // --- Modal: agregar servicio adicional al pedido ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('shop:service_modal:')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      // Formato: shop:service_modal:AQ-XXXXXX:channelId:messageId
      const parts     = interaction.customId.split(':');
      const orderCode = parts[2]!;
      const channelId = parts[3]!;
      const messageId = parts[4]!;

      const labelRaw  = interaction.fields.getTextInputValue('service_label').trim();
      const amountRaw = interaction.fields.getTextInputValue('service_amount').trim();

      const isPercent = amountRaw.endsWith('%');
      const rateStr   = amountRaw.replace('%', '').replace(',', '.').trim();
      const rate      = parseFloat(rateStr);

      if (isNaN(rate) || rate <= 0) {
        await interaction.editReply({
          embeds: [buildShopNoticeEmbed({ title: 'Monto inválido', description: 'Escribe un número válido, por ejemplo `10%` o `5000`.', color: SHOP_COLORS.warning })],
        });
        return;
      }

      try {
        await addSurchargeToOrder(orderCode, labelRaw, isPercent, rate);
      } catch (err) {
        logger.warn({ err }, 'Error al agregar servicio al pedido');
        await interaction.editReply({
          embeds: [buildShopNoticeEmbed({ title: 'Error', description: 'No se pudo agregar el servicio.', color: SHOP_COLORS.danger })],
        });
        return;
      }

      const updatedOrder = await getOrderFull(orderCode);
      if (!updatedOrder) return;

      // Actualizar embed en el canal de staff
      try {
        const staffCh = guild.channels.cache.get(channelId);
        if (staffCh?.isTextBased()) {
          const msg = await staffCh.messages.fetch(messageId);
          await msg.edit({ embeds: [buildOrderEmbed(updatedOrder)], components: [buildAcceptedButtons(orderCode)] });
        }
      } catch (err) {
        logger.warn({ err }, 'No se pudo actualizar embed tras agregar servicio');
      }

      // Notificar en el canal privado del pedido
      if (updatedOrder.ticketChannelId) {
        try {
          const ticketCh = guild.channels.cache.get(updatedOrder.ticketChannelId);
          if (ticketCh?.isTextBased()) {
            const surcharge = updatedOrder.surcharges.at(-1);
            const rateDisplay = surcharge?.isPercent && surcharge.rate != null ? ` (${surcharge.rate}%)` : '';
            await ticketCh.send({
              embeds: [
                buildShopNoticeEmbed({
                  title: 'Servicio agregado al pedido',
                  description: [
                    `Se agregó **${labelRaw}**${rateDisplay} por **+${formatPrice(surcharge!.amount)}** al pedido **${orderCode}**.`,
                    `Nuevo total: **${formatPrice(updatedOrder.totalAmount)}**`,
                  ].join('\n'),
                  color: SHOP_COLORS.info,
                }),
              ],
            });
          }
        } catch (err) {
          logger.warn({ err }, 'No se pudo notificar en canal del pedido');
        }
      }

      await interaction.editReply({
        embeds: [buildShopNoticeEmbed({ title: 'Servicio agregado', description: `**${labelRaw}** (+${formatPrice(updatedOrder.surcharges.at(-1)!.amount)}) agregado. Nuevo total: **${formatPrice(updatedOrder.totalAmount)}**`, color: SHOP_COLORS.success })],
      });
      return;
    }

    // --- Modal: cancelación de pedido ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('shop:cancel_modal:')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      // Formato: shop:cancel_modal:AQ-XXXXXX:channelId:messageId
      const parts     = interaction.customId.split(':');
      const orderCode = parts[2]!;
      const channelId = parts[3]!;
      const messageId = parts[4]!;
      const reason    = interaction.fields.getTextInputValue('cancel_reason');
      const guildId   = interaction.guildId!;

      const order = await prisma.shopOrder.findUnique({
        where:   { orderCode },
        include: { customer: true },
      });
      if (!order || !['pending', 'accepted'].includes(order.status)) {
        await interaction.editReply({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Pedido no cancelable',
              description: 'Este pedido no se puede cancelar.',
              color: SHOP_COLORS.warning,
            }),
          ],
        });
        return;
      }

      const staffUser = await upsertShopUser(guildId, interaction.user, true);

      if (order.status === 'accepted') {
        await releaseOrderStock(order.id, guildId, staffUser.id);
        await prisma.shopOrderEvent.create({
          data: {
            orderId: order.id,
            eventType: 'stock_released',
            oldStatus: 'accepted',
            newStatus: 'cancelled',
            performedById: staffUser.id,
            notes: reason,
          },
        });
      }

      await prisma.shopOrder.update({
        where: { id: order.id },
        data:  {
          status:       'cancelled',
          cancelReason: reason,
          cancelledAt:  new Date(),
        },
      });
      await prisma.shopOrderEvent.create({
        data: {
          orderId:       order.id,
          eventType:     'order_cancelled',
          oldStatus:     order.status,
          newStatus:     'cancelled',
          performedById: staffUser.id,
          notes:         reason,
        },
      });

      try {
        const originalCh = guild.channels.cache.get(channelId);
        if (originalCh?.isTextBased()) {
          const msg          = await originalCh.messages.fetch(messageId);
          const updatedOrder = await getOrderFull(orderCode);
          if (updatedOrder) {
            await msg.edit({ embeds: [buildOrderEmbed(updatedOrder)], components: [] });
          }
        }
      } catch (err) {
        logger.warn({ err }, 'No se pudo actualizar embed de pedido cancelado');
      }

      try {
        const customerMember = await guild.members.fetch(order.customer.discordUserId);
        await customerMember.user.send({
          embeds: [
            buildShopNoticeEmbed({
              title: 'Pedido cancelado',
              description: `Tu pedido **${orderCode}** en **${guild.name}** fue cancelado.\nMotivo: ${reason}`,
              color: SHOP_COLORS.warning,
            }),
          ],
        });
      } catch { /* DMs desactivados */ }

      if (order.ticketChannelId) {
        const ticketCh = guild.channels.cache.get(order.ticketChannelId);
        if (ticketCh) {
          setTimeout(async () => {
            try { await ticketCh.delete(); } catch { /* ya eliminado */ }
          }, 8_000);
        }
      }

      await interaction.editReply({
        embeds: [
          buildShopNoticeEmbed({
            title: 'Pedido cancelado',
            description: 'El cliente fue notificado.',
            color: SHOP_COLORS.success,
          }),
        ],
      });
      return;
    }

    // ── notif:open — abre el selector ephemeral por usuario ──────────────────
    if (interaction.isButton() && interaction.customId === 'notif:open') {
      const guild = interaction.guild;
      if (!guild) return;

      const session = activeNotifSessions.get(interaction.user.id);
      const sessionValid = !!session && (Date.now() - session.createdAt) < NOTIF_SESSION_TTL;

      const member = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!member) return;

      const config = await getOrCreateGuildConfig(guild.id);
      const notifRoles = parseNotifRoles(config.notifRoles);
      const currentRoleIds = new Set(notifRoles.map(r => r.roleId).filter(id => member.roles.cache.has(id)));

      const ephemeral = buildNotifEphemeral(notifRoles, currentRoleIds);

      if (sessionValid) {
        // Ya hay un ephemeral abierto — actualizar en lugar de crear uno nuevo
        await interaction.deferUpdate();
        await session.interaction.editReply(ephemeral);
      } else {
        // Primera vez o sesión expirada — crear nuevo ephemeral y programar cierre
        await interaction.reply({ ...ephemeral, ephemeral: true });
        const timeoutId = setTimeout(
          () => { void expireNotifSession(interaction, interaction.user.id); },
          NOTIF_SESSION_TTL,
        );
        activeNotifSessions.set(interaction.user.id, { interaction, createdAt: Date.now(), timeoutId });
      }
      return;
    }

    // ── notif:select — aplica roles al instante ───────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'notif:select') {
      await interaction.deferUpdate();
      const guild = interaction.guild;
      if (!guild) return;

      const config = await getOrCreateGuildConfig(guild.id);
      const notifRoles = parseNotifRoles(config.notifRoles);
      const member = await guild.members.fetch(interaction.user.id).catch(() => null);
      if (!member) return;

      const selected = new Set(interaction.values);

      for (const nr of notifRoles) {
        const shouldHave = selected.has(nr.roleId);
        const hasIt = member.roles.cache.has(nr.roleId);
        if (shouldHave === hasIt) continue;
        const role = guild.roles.cache.get(nr.roleId) ?? await guild.roles.fetch(nr.roleId).catch(() => null);
        if (!role) continue;
        if (shouldHave) await member.roles.add(role);
        else await member.roles.remove(role);
      }

      const ephemeral = buildNotifEphemeral(notifRoles, selected);
      await interaction.editReply(ephemeral);
      return;
    }

    // ── expulsion:select:{targetId} ───────────────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('expulsion:select:')) {
      const targetId = interaction.customId.slice('expulsion:select:'.length);
      const selected = interaction.values[0];
      const guild = interaction.guild;
      if (!guild) return;

      if (selected === '__custom__') {
        const modal = new ModalBuilder()
          .setCustomId(`expulsion:custom_modal:${targetId}`)
          .setTitle('Motivo de expulsión personalizado')
          .addComponents(
            new ActionRowBuilder<TextInputBuilder>().addComponents(
              new TextInputBuilder()
                .setCustomId('label_text')
                .setLabel('Nombre corto (aparece en el log)')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setMaxLength(80)
                .setPlaceholder('Ej: Conducta inapropiada'),
            ),
            new ActionRowBuilder<TextInputBuilder>().addComponents(
              new TextInputBuilder()
                .setCustomId('body_text')
                .setLabel('Mensaje completo (se envía al jugador por DM)')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(true)
                .setMaxLength(4000)
                .setPlaceholder('Escribe el mensaje completo aquí...'),
            ),
          );
        await interaction.showModal(modal);
        return;
      }

      const config = await getOrCreateGuildConfig(guild.id);
      const reasons = parseExpulsionReasons(config.expulsionReasons);
      const found = reasons.find(r => r.id === selected);
      if (!found) return;

      const target = await interaction.client.users.fetch(targetId).catch(() => null);
      if (!target) return;

      pendingExpulsions.set(interaction.user.id, {
        targetId,
        targetTag: target.tag,
        label: found.label,
        body: found.body,
        comments: null,
      });

      await interaction.deferUpdate();
      await interaction.editReply({
        embeds: [buildExpulsionConfirmEmbed({ id: targetId, username: target.username }, { label: found.label, body: found.body })],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            buildReasonSelectMenu(reasons, targetId, selected),
          ),
          buildConfirmRow(targetId, false),
        ],
      });
      return;
    }

    // ── expulsion:custom_modal:{targetId} — motivo libre ─────────────────────
    if (interaction.isModalSubmit() && interaction.customId.startsWith('expulsion:custom_modal:')) {
      const targetId = interaction.customId.slice('expulsion:custom_modal:'.length);
      const label = interaction.fields.getTextInputValue('label_text').trim();
      const body = interaction.fields.getTextInputValue('body_text').trim();
      const guild = interaction.guild;
      if (!guild) return;

      const target = await interaction.client.users.fetch(targetId).catch(() => null);
      if (!target) return;

      pendingExpulsions.set(interaction.user.id, {
        targetId,
        targetTag: target.tag,
        label,
        body,
        comments: null,
      });

      const config = await getOrCreateGuildConfig(guild.id);
      const reasons = parseExpulsionReasons(config.expulsionReasons);

      await interaction.deferUpdate();
      await interaction.editReply({
        embeds: [buildExpulsionConfirmEmbed({ id: targetId, username: target.username }, { label, body })],
        components: [
          new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
            buildReasonSelectMenu(reasons, targetId, '__custom__'),
          ),
          buildConfirmRow(targetId, false),
        ],
      });
      return;
    }

    // ── expulsion:add_reason_modal — guardar nuevo motivo predeterminado ──────
    if (interaction.isModalSubmit() && interaction.customId === 'expulsion:add_reason_modal') {
      if (!interaction.inCachedGuild()) return;
      const label = interaction.fields.getTextInputValue('label').trim();
      const body = interaction.fields.getTextInputValue('body').trim();
      const { guildId } = interaction;

      const config = await getOrCreateGuildConfig(guildId);
      const reasons = parseExpulsionReasons(config.expulsionReasons);

      if (reasons.length >= 24) {
        await interaction.reply({
          embeds: [new EmbedBuilder().setColor(0xed4245).setDescription('❌ Límite de 24 motivos alcanzado.')],
          flags: 64,
        });
        return;
      }

      const updated = [...reasons, { id: randomUUID().slice(0, 8), label, body }];
      await prisma.guildConfig.update({ where: { guildId }, data: { expulsionReasons: updated } });

      await interaction.reply({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('✅ Motivo agregado')
            .setDescription(`**${label}** fue agregado a los motivos predeterminados.`)
            .setFooter({ text: 'Aquaris • Moderación  ·  💙 by jhadechni' }),
        ],
        flags: 64,
      });
      return;
    }

    // ── expulsion:confirm:{targetId} ─────────────────────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('expulsion:confirm:')) {
      const targetId = interaction.customId.slice('expulsion:confirm:'.length);

      const pending = pendingExpulsions.get(interaction.user.id);
      if (!pending || pending.targetId !== targetId) {
        await interaction.reply({
          embeds: [new EmbedBuilder().setColor(0xed4245).setDescription('❌ Sesión expirada. Inicia el proceso de nuevo con `/expulsion ejecutar`.')],
          flags: 64,
        });
        return;
      }

      await interaction.showModal(
        new ModalBuilder()
          .setCustomId(`expulsion:comment_modal:${targetId}`)
          .setTitle('Comentario adicional (opcional)')
          .addComponents(
            new ActionRowBuilder<TextInputBuilder>().addComponents(
              new TextInputBuilder()
                .setCustomId('comment')
                .setLabel('Comentario interno')
                .setStyle(TextInputStyle.Paragraph)
                .setRequired(false)
                .setMaxLength(500)
                .setPlaceholder('Deja vacío si no hay comentarios adicionales...'),
            ),
          ),
      );
      return;
    }

    // ── expulsion:comment_modal:{targetId} ───────────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId.startsWith('expulsion:comment_modal:')) {
      await interaction.deferUpdate();
      const targetId = interaction.customId.slice('expulsion:comment_modal:'.length);
      const guild = interaction.guild;
      if (!guild) return;

      const pending = pendingExpulsions.get(interaction.user.id);
      if (!pending || pending.targetId !== targetId) {
        await interaction.editReply({
          embeds: [new EmbedBuilder().setColor(0xed4245).setDescription('❌ Sesión expirada. Inicia el proceso de nuevo con `/expulsion ejecutar`.')],
          components: [],
        });
        return;
      }

      const comments = interaction.fields.getTextInputValue('comment').trim() || null;
      pendingExpulsions.delete(interaction.user.id);

      const results = await executeExpulsion({
        guildId: guild.id,
        targetId: pending.targetId,
        targetTag: pending.targetTag,
        label: pending.label,
        body: pending.body,
        comments,
        moderatorId: interaction.user.id,
        guild,
      });

      await interaction.editReply({
        embeds: [
          new EmbedBuilder()
            .setColor(0x57f287)
            .setTitle('✅ Expulsión ejecutada')
            .setDescription(`<@${pending.targetId}> ha sido expulsado del clan.`)
            .addFields(
              { name: 'Motivo', value: pending.label, inline: false },
              ...(comments ? [{ name: 'Comentario', value: comments, inline: false }] : []),
              { name: 'Roles', value: results.rolesReset ? `✅ Quitados${results.visitorAssigned ? ' · Visitante asignado' : ''}` : '⚠️ No se pudo', inline: true },
              { name: 'Estado clan', value: results.clanPlayerFound ? (results.clanPlayerUpdated ? '✅ Marcado retirado' : '⚠️ Error') : '⚠️ No encontrado', inline: true },
              { name: 'Protecciones', value: results.clanPlayerFound ? `🗑️ ${results.protectionsRemoved} eliminadas` : '—', inline: true },
              { name: 'DM al jugador', value: results.dmDelivered ? '✅ Enviado' : '❌ DMs cerrados', inline: true },
            )
            .setFooter({ text: 'Aquaris • Moderación  ·  💙 by jhadechni' })
            .setTimestamp(),
        ],
        components: [],
      });
      return;
    }


    // ── expulsion:cancel:{targetId} ───────────────────────────────────────────
    if (interaction.isButton() && interaction.customId.startsWith('expulsion:cancel:')) {
      await interaction.deferUpdate();
      pendingExpulsions.delete(interaction.user.id);
      await interaction.editReply({
        embeds: [
          new EmbedBuilder()
            .setColor(0x99aab5)
            .setTitle('Expulsión cancelada')
            .setDescription('El proceso fue cancelado. No se realizaron cambios.')
            .setFooter({ text: 'Aquaris • Moderación  ·  💙 by jhadechni' })
            .setTimestamp(),
        ],
        components: [],
      });
      return;
    }

    } catch (err) {
      const context: Record<string, unknown> = {
        err,
        userId: interaction.user.id,
        guildId: interaction.guildId ?? 'DM',
      };
      if (interaction.isChatInputCommand()) context['command'] = interaction.commandName;
      if ('customId' in interaction) context['customId'] = interaction.customId;
      logger.error(context, 'Error no capturado en interactionCreate');

      try {
        const msg = {
          embeds: [
            buildSystemErrorEmbed(
              'Error interno',
              'Ocurrio un error interno. Intentalo de nuevo.',
            ),
          ],
          ephemeral: true,
        };
        if ('replied' in interaction && 'deferred' in interaction) {
          if (interaction.replied || interaction.deferred) {
            await interaction.followUp(msg);
          } else if ('reply' in interaction) {
            await interaction.reply(msg);
          }
        }
      } catch { /* no se puede responder */ }
    }
  },
};

export default interactionCreateEvent;
