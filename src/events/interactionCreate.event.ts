import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType,
  PermissionFlagsBits,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
} from 'discord.js';
import type { BotEvent } from '../types/event.js';
import type { AquarisClient } from '../core/client.js';
import { prisma } from '../database/prisma.js';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { getLogChannel } from '../utils/log-channel.js';
import { buildSuggestionEmbed } from '../utils/suggestion.js';
import { getFilteredWords, findBannedWord } from '../utils/filter.js';
import { appendMember } from '../utils/registry.js';
import { logger } from '../core/logger.js';
import { upsertShopUser } from '../database/shop-user.js';
import {
  getOrderFull,
  buildOrderEmbed,
  buildAcceptedButtons,
  buildPendingButtons,
  createPendingOrder,
  reserveOrderStock,
  releaseOrderStock,
  consumeOrderStock,
} from '../shop/order-utils.js';
import {
  appendVentaToSheet,
  syncPedidosToSheet,
} from '../shop/sync.js';
import {
  buildCatalogView,
  queryCatalogProducts,
} from '../shop/catalog.js';
import {
  getCart,
  setCart,
  deleteCart,
  buildCartEmbed,
  buildCartComponents,
  buildQtyModal,
  queryCartProducts,
} from '../shop/cart.js';

// ── Cooldown de sugerencias (en memoria) ──────────────────────────────────────
const SUGGEST_COOLDOWN_MS = 30 * 60 * 1000; // 30 minutos
const suggestCooldown = new Map<string, number>(); // key: guildId-userId → last timestamp

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
      try {
        await command.execute(interaction);
      } catch (err) {
        logger.error({ err, command: interaction.commandName }, 'Error ejecutando comando');
        const msg = { content: '❌ Ocurrió un error al ejecutar este comando.', ephemeral: true };
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp(msg);
        } else {
          await interaction.reply(msg);
        }
      }
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
        await interaction.editReply(`⏳ Puedes enviar otra sugerencia en **${mins} minuto${mins === 1 ? '' : 's'}**.`);
        return;
      }

      // Palabras baneadas
      const filterWords = await getFilteredWords(guildId);
      const banned = findBannedWord(content, filterWords);
      if (banned) {
        await interaction.editReply('🚫 Tu sugerencia contiene una palabra no permitida.');
        return;
      }

      const config = await getOrCreateGuildConfig(guildId);

      if (!config.suggestionsChannelId) {
        await interaction.editReply(
          '⚠️ El canal de sugerencias no está configurado. Pide al staff que use `/config set-suggestions`.',
        );
        return;
      }

      const channel = interaction.guild?.channels.cache.get(config.suggestionsChannelId);
      if (!channel?.isTextBased()) {
        await interaction.editReply('⚠️ El canal de sugerencias configurado no es válido.');
        return;
      }

      const suggestion = await prisma.suggestion.create({
        data: { guildId, userId: interaction.user.id, content },
      });

      const embed = buildSuggestionEmbed(content, interaction.user.id, suggestion.id);
      const msg = await channel.send({ embeds: [embed] });
      await msg.react('👍');
      await msg.react('👎');

      await prisma.suggestion.update({
        where: { id: suggestion.id },
        data: { messageId: msg.id },
      });

      suggestCooldown.set(cooldownKey, Date.now());
      await interaction.editReply('✅ Tu sugerencia fue enviada.');
      return;
    }

    // --- Select menu: navegación del catálogo de tienda ---
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('tienda:catalog:')) {
      const guildId = interaction.guildId;
      if (!guildId) return;

      await interaction.deferUpdate();

      const products = await queryCatalogProducts(guildId);

      if (interaction.customId === 'tienda:catalog:category') {
        const selectedCategory = interaction.values[0];
        const { embed, components } = buildCatalogView(products, selectedCategory, null, 1);
        await interaction.editReply({ embeds: [embed], components });
        return;
      }

      if (interaction.customId.startsWith('tienda:catalog:subcategory:')) {
        const selectedCategory = interaction.customId.split(':')[3];
        const selectedSubcategory = interaction.values[0];
        const { embed, components } = buildCatalogView(
          products,
          selectedCategory,
          selectedSubcategory,
          1,
        );
        await interaction.editReply({ embeds: [embed], components });
        return;
      }
    }

    // --- Select menu: selección de rol(es) en reclutamiento ---
    if (interaction.isStringSelectMenu() && interaction.customId === 'apply_role_select') {
      if (interaction.values.length === 0) return;

      // Unir roles con coma para pasarlos en el customId del modal
      const rolesJoined = interaction.values.join(',');

      const modal = new ModalBuilder()
        .setCustomId(`apply_modal_${rolesJoined}`)
        .setTitle('Solicitud de ingreso — Aquaris');

      modal.addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_age')
            .setLabel('¿Cuántos años tienes?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(3),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_experience')
            .setLabel('¿Cuánto tiempo llevas jugando Minecraft?')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(100),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_contribution')
            .setLabel('¿Qué puedes aportar al clan?')
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
            .setMaxLength(400),
        ),
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId('apply_availability')
            .setLabel('Disponibilidad (días/horas por semana)')
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setMaxLength(100),
        ),
      );

      await interaction.showModal(modal);
      return;
    }

    // --- Modal: formulario de reclutamiento ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('apply_modal_')) {
      await interaction.deferReply({ ephemeral: true });

      const guildId = interaction.guildId;
      if (!guildId || !interaction.guild) return;

      const roles = interaction.customId.replace('apply_modal_', '').split(',');
      const role = roles.join(', ');
      const age = interaction.fields.getTextInputValue('apply_age');
      const experience = interaction.fields.getTextInputValue('apply_experience');
      const contribution = interaction.fields.getTextInputValue('apply_contribution');
      const availability = interaction.fields.getTextInputValue('apply_availability');

      // Palabras baneadas en cualquier campo de texto libre
      const recruitFilterWords = await getFilteredWords(guildId);
      const recruitTexts = [experience, contribution, availability];
      const recruitBanned = recruitTexts.map(t => findBannedWord(t, recruitFilterWords)).find(Boolean);
      if (recruitBanned) {
        await interaction.editReply('🚫 Tu solicitud contiene una palabra no permitida. Revisa tus respuestas.');
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
          answers: { age, experience, role, contribution, availability },
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

      const embed = new EmbedBuilder()
        .setColor(0x5865f2)
        .setTitle('📋 Nueva solicitud de reclutamiento')
        .addFields(
          { name: 'Solicitante', value: `<@${interaction.user.id}>`, inline: true },
          { name: 'Rol deseado', value: role, inline: true },
          { name: 'Edad', value: age, inline: true },
          { name: 'Experiencia en Minecraft', value: experience },
          { name: 'Aportación al clan', value: contribution },
          { name: 'Disponibilidad', value: availability },
          { name: 'ID Ticket', value: ticket.id },
        )
        .setThumbnail(interaction.user.displayAvatarURL())
        .setTimestamp();

      const buttons = new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId(`apply_accept_${ticket.id}`)
          .setLabel('Aceptar')
          .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
          .setCustomId(`apply_reject_${ticket.id}`)
          .setLabel('Rechazar')
          .setStyle(ButtonStyle.Danger),
      );

      if (channelId) {
        const ticketChannel = interaction.guild.channels.cache.get(channelId);
        if (ticketChannel?.isTextBased()) {
          await ticketChannel.send({ embeds: [embed], components: [buttons] });
          if (roles.includes('Builder')) {
            await ticketChannel.send(
              `📸 <@${interaction.user.id}> Ya que aplicas como **Builder**, sube aquí capturas de tus construcciones o proyectos. El staff las revisará junto con tu solicitud.`,
            );
          }
        }
      } else {
        const recruitLogCh = getLogChannel(interaction.guild, config, 'recruit');
        if (recruitLogCh) {
          await recruitLogCh.send({ embeds: [embed], components: [buttons] });
          if (roles.includes('Builder')) {
            await recruitLogCh.send(
              `📸 <@${interaction.user.id}> Ya que aplicas como **Builder**, sube aquí capturas de tus construcciones o proyectos.`,
            );
          }
        }
      }

      await interaction.editReply('✅ Solicitud enviada. El staff revisará tu aplicación pronto.');
      return;
    }

    // --- Botones de reclutamiento ---
    if (interaction.isButton()) {
      const { customId } = interaction;

      if (customId.startsWith('apply_accept_') || customId.startsWith('apply_reject_')) {
        const isAccept = customId.startsWith('apply_accept_');
        const ticketId = customId.replace(isAccept ? 'apply_accept_' : 'apply_reject_', '');

        // Verificar permisos
        const guild = interaction.guild;
        if (!guild) return;

        const actor = await guild.members.fetch(interaction.user.id);
        const cfg = await getOrCreateGuildConfig(guild.id);

        const hasPermission =
          actor.permissions.has(PermissionFlagsBits.Administrator) ||
          (cfg.staffRoleId != null && actor.roles.cache.has(cfg.staffRoleId)) ||
          (cfg.liderRoleId != null && actor.roles.cache.has(cfg.liderRoleId)) ||
          (cfg.coLiderRoleId != null && actor.roles.cache.has(cfg.coLiderRoleId));

        if (!hasPermission) {
          await interaction.reply({
            content: '❌ Solo el staff puede aceptar o rechazar solicitudes.',
            ephemeral: true,
          });
          return;
        }

        // Rechazo: mostrar modal para pedir motivo
        if (!isAccept) {
          const rejectModal = new ModalBuilder()
            .setCustomId(`apply_reject_reason_${ticketId}_${interaction.channelId}_${interaction.message.id}`)
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
          return;
        }

        // Aceptación
        await interaction.deferUpdate();

        const ticket = await prisma.recruitmentTicket.findUnique({ where: { id: ticketId } });
        if (!ticket || ticket.status !== 'OPEN') {
          await interaction.followUp({ content: '⚠️ Este ticket ya fue procesado.', ephemeral: true });
          return;
        }

        await prisma.recruitmentTicket.update({
          where: { id: ticketId },
          data: { status: 'ACCEPTED' },
        });

        // Quitar rol aspirante
        try {
          const applicant = await guild.members.fetch(ticket.userId);
          if (cfg.aspirantRoleId && applicant.roles.cache.has(cfg.aspirantRoleId)) {
            await applicant.roles.remove(cfg.aspirantRoleId);
          }
          await applicant.user.send(
            `✅ ¡Tu solicitud en **${guild.name}** fue **aceptada**! El staff se pondrá en contacto contigo para coordinar la entrevista.`,
          );
        } catch { /* DMs desactivados o sin permisos */ }

        const acceptedEmbed = EmbedBuilder.from(interaction.message.embeds[0] ?? new EmbedBuilder())
          .setColor(0x57f287)
          .setTitle('✅ Solicitud aceptada')
          .setFooter({ text: `Aceptado por ${interaction.user.tag}` });

        await interaction.editReply({ embeds: [acceptedEmbed], components: [] });

        // Mantener canal abierto para la entrevista
        const ticketChannel = interaction.channel;
        if (ticketChannel && ticketChannel.isTextBased() && 'setName' in ticketChannel) {
          try {
            const applicantMember = await guild.members.fetch(ticket.userId).catch(() => null);
            const username = applicantMember?.user.username ?? ticket.userId;
            await ticketChannel.setName(`entrevista-${username}`);
            await ticketChannel.send(
              `✅ **Solicitud aceptada** por <@${interaction.user.id}>.\n\n` +
              `<@${ticket.userId}> — El staff se pondrá en contacto contigo aquí para coordinar la entrevista. ` +
              `Una vez aprobada la entrevista, el staff te asignará el rol **Aquaris** manualmente.`,
            );
          } catch (err) {
            logger.warn({ err }, 'No se pudo renombrar el canal de entrevista');
          }
        }
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
        await interaction.reply({ content: '❌ Solo el staff puede gestionar pedidos.', ephemeral: true });
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
          await interaction.followUp({ content: '⚠️ Este pedido ya fue procesado.', ephemeral: true });
          return;
        }

        const staffUser = await upsertShopUser(guildId, interaction.user, true);

        try {
          await reserveOrderStock(order.id, guildId, staffUser.id);
        } catch (err) {
          await interaction.followUp({
            content:   `❌ No se puede aceptar: ${err instanceof Error ? err.message : 'Error al reservar stock.'}`,
            ephemeral: true,
          });
          return;
        }

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
                ...(cfg.staffRoleId ? [{
                  id:    cfg.staffRoleId,
                  allow: [PermissionFlagsBits.ViewChannel, PermissionFlagsBits.SendMessages],
                }] : []),
              ],
            });
            ticketChannelId = ticketCh.id;
            await ticketCh.send(
              `✅ Tu pedido **${orderCode}** fue **aceptado** por <@${interaction.user.id}>.\n` +
              `<@${order.customer.discordUserId}> — El staff coordinará la entrega contigo aquí.`,
            );
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
        await prisma.shopOrderEvent.create({
          data: {
            orderId: order.id,
            eventType: 'stock_reserved',
            oldStatus: 'pending',
            newStatus: 'accepted',
            performedById: staffUser.id,
          },
        });

        const updatedOrder = await getOrderFull(orderCode);
        if (updatedOrder) {
          await interaction.message.edit({
            embeds:     [buildOrderEmbed(updatedOrder)],
            components: [buildAcceptedButtons(orderCode)],
          });
        }

        try {
          const customerMember = await guild.members.fetch(order.customer.discordUserId);
          await customerMember.user.send(
            `✅ Tu pedido **${orderCode}** en **${guild.name}** fue **aceptado**.\n` +
            (ticketChannelId ? `Se ha creado un canal temporal para coordinar la entrega.` : ''),
          );
        } catch { /* DMs desactivados */ }
        void syncPedidosToSheet(guildId);
        return;
      }

      // ── Rechazar pedido (abre modal) ────────────────────────────────────────
      if (action === 'reject') {
        const order = await prisma.shopOrder.findUnique({ where: { orderCode } });
        if (!order || order.status !== 'pending') {
          await interaction.reply({ content: '⚠️ Este pedido ya fue procesado.', ephemeral: true });
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
          await interaction.followUp({ content: '⚠️ Solo se pueden cerrar pedidos aceptados.', ephemeral: true });
          return;
        }

        const staffUser = await upsertShopUser(guildId, interaction.user, true);

        await consumeOrderStock(order.id, guildId, staffUser.id);

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
          await customerMember.user.send(
            `📦 Tu pedido **${orderCode}** en **${guild.name}** fue marcado como **entregado**. ¡Gracias!`,
          );
        } catch { /* DMs desactivados */ }

        void appendVentaToSheet(order.id, guildId);
        void syncPedidosToSheet(guildId);

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
          await interaction.reply({ content: '⚠️ Este pedido no se puede cancelar.', ephemeral: true });
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

    // --- Select menus de categoría/subcategoría del catálogo ---
    if (interaction.isStringSelectMenu() && interaction.customId.startsWith('tienda:catalog:')) {
      const parts   = interaction.customId.split(':');
      const action  = parts[2]; // 'category' | 'subcategory'
      const guildId = interaction.guildId;
      if (!guildId) return;

      await interaction.deferUpdate();

      const products = await queryCatalogProducts(guildId);
      const selected = interaction.values[0]!;

      let categoryKey:    string | undefined;
      let subcategoryKey: string | undefined;

      if (action === 'category') {
        categoryKey = selected;
        // subcategoría se resetea a la primera de la nueva categoría
      } else if (action === 'subcategory') {
        categoryKey    = parts[3]; // tienda:catalog:subcategory:{category}
        subcategoryKey = selected;
      }

      const { embed, components } = buildCatalogView(products, categoryKey, subcategoryKey, 1);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // --- Botones de navegación del catálogo de tienda ---
    if (interaction.isButton() && interaction.customId.startsWith('tienda:catalog:')) {
      const parts = interaction.customId.split(':');
      const guildId = interaction.guildId;
      if (!guildId) return;

      let category: string | undefined;
      let subcategory: string | undefined;
      let rawPage: string | undefined;

      if (parts[2] === 'page') {
        category = parts[3];
        subcategory = parts[4];
        rawPage = parts[5];
      } else if (parts[2] === 'page-label') {
        return;
      }

      await interaction.deferUpdate();

      const products = await queryCatalogProducts(guildId);
      const requestedPage = Number.parseInt(rawPage ?? '1', 10);
      const { embed, components } = buildCatalogView(
        products,
        category,
        subcategory,
        Number.isNaN(requestedPage) ? 1 : requestedPage,
      );

      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Carrito interactivo: seleccionar producto para agregar ────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'pedido:cart:add') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const productName = interaction.values[0]!;
      const cart        = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({ content: '⚠️ Tu carrito expiró. Usa `/pedido carrito` de nuevo.', ephemeral: true });
        return;
      }

      setCart({ ...cart, pendingProduct: productName });
      await interaction.showModal(buildQtyModal(productName));
      return;
    }

    // ── Carrito interactivo: quitar producto ──────────────────────────────────
    if (interaction.isStringSelectMenu() && interaction.customId === 'pedido:cart:remove') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const idx  = parseInt(interaction.values[0]!, 10);
      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({ content: '⚠️ Tu carrito expiró. Usa `/pedido carrito` de nuevo.', ephemeral: true });
        return;
      }

      cart.items.splice(idx, 1);
      setCart(cart);

      await interaction.deferUpdate();
      const products   = await queryCartProducts(guildId);
      const embed      = buildCartEmbed(cart);
      const components = buildCartComponents(cart, products);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Carrito interactivo: vaciar carrito ───────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:clear') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart) {
        await interaction.reply({ content: '⚠️ Tu carrito expiró. Usa `/pedido carrito` de nuevo.', ephemeral: true });
        return;
      }

      cart.items = [];
      setCart(cart);

      await interaction.deferUpdate();
      const products   = await queryCartProducts(guildId);
      const embed      = buildCartEmbed(cart);
      const components = buildCartComponents(cart, products);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Carrito interactivo: modal de cantidad ────────────────────────────────
    if (interaction.isModalSubmit() && interaction.customId === 'pedido:cart:qty_modal') {
      const guildId = interaction.guildId;
      if (!guildId) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart?.pendingProduct) {
        await interaction.reply({ content: '⚠️ Tu carrito expiró. Usa `/pedido carrito` de nuevo.', ephemeral: true });
        return;
      }

      const qtyRaw = interaction.fields.getTextInputValue('qty');
      const qty    = parseInt(qtyRaw, 10);
      if (isNaN(qty) || qty < 1) {
        await interaction.reply({ content: '❌ La cantidad debe ser un número entero mayor a 0.', ephemeral: true });
        return;
      }

      const notes       = interaction.fields.getTextInputValue('notes').trim() || null;
      const productName = cart.pendingProduct;

      const product = await prisma.shopProduct.findUnique({
        where:   { guildId_name: { guildId, name: productName } },
        include: {
          components: { select: { id: true } },
          prices: { where: { validTo: null }, take: 1 },
        },
      });

      if (!product || !product.isActive) {
        await interaction.reply({ content: `❌ El producto **${productName}** ya no está disponible.`, ephemeral: true });
        return;
      }

      if (product.productType !== 'service' && product.components.length === 0) {
        await interaction.reply({
          content: `❌ **${productName}** no tiene materiales configurados y no se puede vender todavía.`,
          ephemeral: true,
        });
        return;
      }

      const priceRecord = product.prices[0];
      if (!priceRecord) {
        await interaction.reply({ content: `❌ **${productName}** no tiene precio configurado.`, ephemeral: true });
        return;
      }

      const unitPrice = priceRecord.price;
      const lineTotal = unitPrice.mul(qty);

      // Si el producto ya está en el carrito, sumar la cantidad
      const existing = cart.items.find(i => i.productId === product.id);
      if (existing) {
        existing.quantity  += qty;
        existing.lineTotal  = existing.unitPrice.mul(existing.quantity);
      } else {
        cart.items.push({
          productId:   product.id,
          productName: product.name,
          productType: product.productType,
          quantity:    qty,
          unitPrice,
          lineTotal,
          notes,
        });
      }

      cart.pendingProduct = null;
      setCart(cart);

      await interaction.deferUpdate();
      const products   = await queryCartProducts(guildId);
      const embed      = buildCartEmbed(cart);
      const components = buildCartComponents(cart, products);
      await interaction.editReply({ embeds: [embed], components });
      return;
    }

    // ── Carrito interactivo: confirmar pedido ─────────────────────────────────
    if (interaction.isButton() && interaction.customId === 'pedido:cart:confirm') {
      const guildId = interaction.guildId;
      if (!guildId || !interaction.guild) return;

      const cart = getCart(guildId, interaction.user.id);
      if (!cart || cart.items.length === 0) {
        await interaction.reply({ content: '⚠️ El carrito está vacío.', ephemeral: true });
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
        });
      } catch (err) {
        await interaction.followUp({
          content: `❌ ${err instanceof Error ? err.message : 'No se pudo crear el pedido.'}`,
          ephemeral: true,
        });
        return;
      }
      const orderCode = order.orderCode;

      // Notificar al canal de staff
      const orderFull = await getOrderFull(orderCode);
      if (orderFull && config.shopStaffChannelId) {
        const staffCh = interaction.guild.channels.cache.get(config.shopStaffChannelId);
        if (staffCh?.isTextBased()) {
          await staffCh.send({
            embeds:     [buildOrderEmbed(orderFull)],
            components: [buildPendingButtons(orderCode)],
          });
        }
      }

      deleteCart(guildId, interaction.user.id);

      // Actualizar el embed del carrito con confirmación
      const { COLORS, formatPrice, SHOP_FOOTER } = await import('../utils/ui.js');
      const { EmbedBuilder } = await import('discord.js');
      const confirmEmbed = new EmbedBuilder()
        .setTitle('✅ Pedido confirmado')
        .setColor(COLORS.success)
        .setDescription(
          `Tu pedido **${orderCode}** ha sido registrado.\n` +
          `El staff lo revisará pronto y recibirás una notificación.`,
        )
        .addFields(
          { name: '🛍️ Productos', value: cart.items.map(i => `${i.productName} × ${i.quantity}`).join('\n') },
          { name: '💰 Total',     value: `**${formatPrice(orderFull?.totalAmount ?? 0)}**`, inline: true },
          { name: '📋 Estado',    value: '🟡 Pendiente',                             inline: true },
        )
        .setFooter({ text: `${SHOP_FOOTER.text}  ·  Usa /pedido estado ${orderCode} para consultar` })
        .setTimestamp();

      if (orderFull && orderFull.totalDiscountAmount.toString() !== '0') {
        confirmEmbed.addFields({
          name: '🏷️ Descuentos',
          value: `-${formatPrice(orderFull.totalDiscountAmount)}`,
          inline: true,
        });
      }

      await interaction.editReply({ embeds: [confirmEmbed], components: [] });
      return;
    }

    // --- Modal: rechazo de reclutamiento con motivo ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('apply_reject_reason_')) {
      await interaction.deferReply({ ephemeral: true });

      const guild = interaction.guild;
      if (!guild) return;

      // Parsear customId: apply_reject_reason_<ticketId>_<channelId>_<messageId>
      const parts = interaction.customId.replace('apply_reject_reason_', '').split('_');
      // ticketId es cuid (puede contener letras/números), channelId y messageId son snowflakes (solo dígitos)
      // Los snowflakes están al final, son los últimos 2 elementos
      const messageId = parts[parts.length - 1];
      const channelId = parts[parts.length - 2];
      const ticketId = parts.slice(0, parts.length - 2).join('_');

      const reason = interaction.fields.getTextInputValue('reject_reason');

      const ticket = await prisma.recruitmentTicket.findUnique({ where: { id: ticketId } });
      if (!ticket || ticket.status !== 'OPEN') {
        await interaction.editReply('⚠️ Este ticket ya fue procesado.');
        return;
      }

      await prisma.recruitmentTicket.update({
        where: { id: ticketId },
        data: { status: 'REJECTED' },
      });

      // Quitar rol aspirante + notificar
      try {
        const rejectCfg = await getOrCreateGuildConfig(guild.id);
        const applicant = await guild.members.fetch(ticket.userId);
        if (rejectCfg.aspirantRoleId && applicant.roles.cache.has(rejectCfg.aspirantRoleId)) {
          await applicant.roles.remove(rejectCfg.aspirantRoleId);
        }
        await applicant.user.send(
          `❌ Tu solicitud en **${guild.name}** fue **rechazada**.\nMotivo: ${reason}\n\nPuedes intentarlo de nuevo en el futuro.`,
        );
      } catch { /* DMs desactivados o sin permisos */ }

      // Actualizar el embed original si está accesible
      try {
        if (!channelId || !messageId) throw new Error('Missing channelId or messageId');
        const originalChannel = guild.channels.cache.get(channelId);
        if (originalChannel?.isTextBased()) {
          const originalMsg = await originalChannel.messages.fetch(messageId);
          const rejectedEmbed = EmbedBuilder.from(originalMsg.embeds[0] ?? new EmbedBuilder())
            .setColor(0xed4245)
            .setTitle('❌ Solicitud rechazada')
            .addFields({ name: 'Motivo del rechazo', value: reason })
            .setFooter({ text: `Rechazado por ${interaction.user.tag}` });
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

      await interaction.editReply('✅ Solicitud rechazada. El usuario fue notificado con el motivo.');
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
        await interaction.editReply('⚠️ Este pedido ya fue procesado.');
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
        await customerMember.user.send(
          `❌ Tu pedido **${orderCode}** en **${guild.name}** fue **rechazado**.\nMotivo: ${reason}`,
        );
      } catch { /* DMs desactivados */ }

      void syncPedidosToSheet(guildId);
      await interaction.editReply('✅ Pedido rechazado. El cliente fue notificado.');
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
        await interaction.editReply('⚠️ Este pedido no se puede cancelar.');
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
        await customerMember.user.send(
          `🚫 Tu pedido **${orderCode}** en **${guild.name}** fue **cancelado**.\nMotivo: ${reason}`,
        );
      } catch { /* DMs desactivados */ }

      void syncPedidosToSheet(guildId);

      if (order.ticketChannelId) {
        const ticketCh = guild.channels.cache.get(order.ticketChannelId);
        if (ticketCh) {
          setTimeout(async () => {
            try { await ticketCh.delete(); } catch { /* ya eliminado */ }
          }, 8_000);
        }
      }

      await interaction.editReply('✅ Pedido cancelado. El cliente fue notificado.');
      return;
    }

    // --- Modal: registro de nuevo miembro ---
    if (interaction.isModalSubmit() && interaction.customId.startsWith('register_modal_')) {
      await interaction.deferReply({ ephemeral: true });

      const discordUserId = interaction.customId.replace('register_modal_', '');
      const guild = interaction.guild;
      if (!guild) return;

      const targetMember = await guild.members.fetch(discordUserId).catch(() => null);
      const discordTag = targetMember?.user.tag ?? targetMember?.user.username ?? discordUserId;

      const mcUsername = interaction.fields.getTextInputValue('register_mc_username');
      const alias      = interaction.fields.getTextInputValue('register_alias');
      const country    = interaction.fields.getTextInputValue('register_country');
      const notes      = interaction.fields.getTextInputValue('register_notes');

      await appendMember({ mcUsername, alias, discord: discordTag, country, notes });

      await interaction.editReply(
        `✅ **${mcUsername}** (${discordTag}) registrado correctamente en el spreadsheet.\n🗑️ Este canal se cerrará en 5 segundos.`,
      );

      // Cerrar el canal temporal tras 5 segundos
      const channel = interaction.channel;
      if (channel && 'delete' in channel) {
        setTimeout(async () => {
          try { await channel.delete(); } catch { /* canal ya eliminado */ }
        }, 5_000);
      }
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
        const msg = { content: '❌ Ocurrió un error interno. Inténtalo de nuevo.', ephemeral: true };
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
