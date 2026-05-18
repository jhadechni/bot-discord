import { randomUUID } from 'node:crypto';
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ModalBuilder,
  PermissionFlagsBits,
  StringSelectMenuBuilder,
  TextInputBuilder,
  TextInputStyle,
  type GuildMember,
} from 'discord.js';
import { z } from 'zod';
import { getOrCreateGuildConfig } from '../database/guild-config.js';
import { prisma } from '../database/prisma.js';
import { buildRecruitmentNoticeEmbed, RECRUITMENT_COLORS } from '../utils/recruitment-ui.js';

export const CLAN_PLAYER_CUSTOM_IDS = {
  basicsModal: 'clanplayer:s1:',
  additionalModal: 'clanplayer:s2:',
  continueButton: 'clanplayer:continue:',
  editBasicsButton: 'clanplayer:edit-basic:',
  editAdditionalButton: 'clanplayer:edit-extra:',
  rankSelect: 'clanplayer:rank:',
  minecraftRankSelect: 'clanplayer:mc-rank:',
  statusSelect: 'clanplayer:status:',
  confirmButton: 'clanplayer:confirm:',
  cancelButton: 'clanplayer:cancel:',
} as const;

export const DISCORD_RANK_VALUES = [
  'Aquaris',
  'Comerciante',
  'Reclutador',
  'Staff',
  'Co-Líder',
  'Líder',
] as const;

export const MINECRAFT_RANK_VALUES = ['dueno', 'colider', 'miembro'] as const;

export const CLAN_PLAYER_STATUS_VALUES = ['activo', 'ausente', 'inactivo', 'retirado'] as const;

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

const SESSION_TTL_MS = 30 * 60 * 1000;
const sessions = new Map<string, ClanPlayerRegistrationSession>();

const ClanPlayerSchema = z.object({
  discord: z.string().trim().min(1, 'El Discord es requerido.'),
  fullName: z.string().trim().min(1, 'El nombre es requerido.'),
  minecraftNick: z.string().trim().min(1, 'El nick de Minecraft es requerido.'),
  rank: z.string().trim().min(1, 'El rango de Discord es requerido.'),
  minecraftRank: z.enum(MINECRAFT_RANK_VALUES),
  joinedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'La fecha de ingreso debe usar el formato YYYY-MM-DD.'),
  country: z.string().trim().min(1, 'El país es requerido.'),
  utcOffset: z.string().trim().min(1, 'La diferencia horaria es requerida.'),
  status: z.enum(CLAN_PLAYER_STATUS_VALUES),
  notes: z.string().optional(),
});

function cleanExpiredSessions() {
  const now = Date.now();
  for (const [sessionId, session] of sessions.entries()) {
    if (now - session.updatedAt > SESSION_TTL_MS) {
      sessions.delete(sessionId);
    }
  }
}

function getDiscordDefault(member: GuildMember | null, userId: string) {
  if (member?.user.globalName) return member.user.globalName;
  if (member?.user.username) return `@${member.user.username}`;
  return `<@${userId}>`;
}

function getTodayDateInputValue() {
  return new Date().toISOString().slice(0, 10);
}

function buildDefaultDraft(member: GuildMember | null, applicantUserId: string): ClanPlayerDraft {
  return {
    discord: getDiscordDefault(member, applicantUserId),
    fullName: member?.displayName ?? '',
    minecraftNick: '',
    rank: 'Aquaris',
    minecraftRank: 'miembro',
    joinedAt: getTodayDateInputValue(),
    country: '',
    utcOffset: '',
    status: 'activo',
    notes: '',
  };
}

function buildRankOptions(currentValue: string) {
  return DISCORD_RANK_VALUES.map(value => ({
    label: value,
    value: value,
    default: value === currentValue,
  }));
}

function buildMinecraftRankLabel(value: MinecraftRankValue) {
  if (value === 'dueno') return 'Dueño';
  if (value === 'colider') return 'Colíder';
  return 'Miembro';
}

function buildMinecraftRankOptions(currentValue: MinecraftRankValue) {
  return MINECRAFT_RANK_VALUES.map(value => ({
    label: buildMinecraftRankLabel(value),
    value,
    default: value === currentValue,
  }));
}

function buildStatusLabel(value: ClanPlayerStatusValue) {
  if (value === 'activo') return 'Activo';
  if (value === 'ausente') return 'Ausente';
  if (value === 'inactivo') return 'Inactivo';
  return 'Retirado';
}

function buildStatusOptions(currentValue: ClanPlayerStatusValue) {
  return CLAN_PLAYER_STATUS_VALUES.map(value => ({
    label: buildStatusLabel(value),
    value,
    default: value === currentValue,
  }));
}

function withOptionalValue<T extends TextInputBuilder>(input: T, value: string) {
  if (value.length > 0) {
    input.setValue(value);
  }
  return input;
}

function getSession(sessionId: string) {
  cleanExpiredSessions();
  const session = sessions.get(sessionId) ?? null;
  if (!session) return null;
  session.updatedAt = Date.now();
  return session;
}

function setSession(session: ClanPlayerRegistrationSession) {
  session.updatedAt = Date.now();
  sessions.set(session.id, session);
}

function formatFieldValue(value: string) {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : '—';
}

function buildPreviewEmbed(session: ClanPlayerRegistrationSession) {
  const draft = session.draft;

  return buildRecruitmentNoticeEmbed({
    title: 'Registro de jugador',
    color: RECRUITMENT_COLORS.log,
    description:
      `Jugador: <@${session.applicantUserId}>\n` +
      `Ticket: \`${session.ticketId}\`\n` +
      'Al guardar se insertará el registro en la tabla de jugadores y se cerrará el canal de entrevista.',
    fields: [
      { name: 'Discord', value: formatFieldValue(draft.discord), inline: true },
      { name: 'Nombre', value: formatFieldValue(draft.fullName), inline: true },
      { name: 'Nick Minecraft', value: formatFieldValue(draft.minecraftNick), inline: true },
      { name: 'Rango Discord', value: formatFieldValue(draft.rank), inline: true },
      { name: 'Rango Minecraft', value: buildMinecraftRankLabel(draft.minecraftRank), inline: true },
      { name: 'Status', value: buildStatusLabel(draft.status), inline: true },
      { name: 'Fecha de ingreso', value: formatFieldValue(draft.joinedAt), inline: true },
      { name: 'País', value: formatFieldValue(draft.country), inline: true },
      { name: 'UTC', value: formatFieldValue(draft.utcOffset), inline: true },
      { name: 'Notas', value: formatFieldValue(draft.notes) },
    ],
  });
}

export async function canManageClanPlayers(member: GuildMember) {
  if (member.permissions.has(PermissionFlagsBits.Administrator)) return true;
  if (member.permissions.has(PermissionFlagsBits.ManageGuild)) return true;

  const config = await getOrCreateGuildConfig(member.guild.id);
  return [
    config.staffRoleId,
    config.liderRoleId,
    config.coLiderRoleId,
  ].some(roleId => roleId != null && member.roles.cache.has(roleId));
}

export async function findAcceptedInterviewTicket(guildId: string, channelId: string) {
  return prisma.recruitmentTicket.findFirst({
    where: {
      guildId,
      channelId,
      status: 'ACCEPTED',
    },
    orderBy: { updatedAt: 'desc' },
  });
}

export function startClanPlayerRegistrationSession(params: {
  guildId: string;
  channelId: string;
  ticketId: string;
  applicantUserId: string;
  applicantMember: GuildMember | null;
}) {
  cleanExpiredSessions();

  const session: ClanPlayerRegistrationSession = {
    id: randomUUID().slice(0, 8),
    guildId: params.guildId,
    channelId: params.channelId,
    ticketId: params.ticketId,
    applicantUserId: params.applicantUserId,
    draft: buildDefaultDraft(params.applicantMember, params.applicantUserId),
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  sessions.set(session.id, session);
  return session;
}

export function clearClanPlayerRegistrationSession(sessionId: string) {
  sessions.delete(sessionId);
}

export function buildClanPlayerBasicsModal(session: ClanPlayerRegistrationSession) {
  return new ModalBuilder()
    .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.basicsModal}${session.id}`)
    .setTitle('Registrar jugador — datos base')
    .addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('discord')
          .setLabel('Discord *')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(120), session.draft.discord),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('fullName')
          .setLabel('Nombre *')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(120), session.draft.fullName),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('minecraftNick')
          .setLabel('Nick Minecraft *')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(120), session.draft.minecraftNick),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('joinedAt')
          .setLabel('Fecha de ingreso *')
          .setPlaceholder('YYYY-MM-DD')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(10), session.draft.joinedAt),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('country')
          .setLabel('País *')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(120), session.draft.country),
      ),
    );
}

export function buildClanPlayerAdditionalModal(session: ClanPlayerRegistrationSession) {
  return new ModalBuilder()
    .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.additionalModal}${session.id}`)
    .setTitle('Registrar jugador — datos extra')
    .addComponents(
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('utcOffset')
          .setLabel('Diferencia horaria *')
          .setPlaceholder('UTC-05:00')
          .setStyle(TextInputStyle.Short)
          .setRequired(true)
          .setMaxLength(20), session.draft.utcOffset),
      ),
      new ActionRowBuilder<TextInputBuilder>().addComponents(
        withOptionalValue(new TextInputBuilder()
          .setCustomId('notes')
          .setLabel('Notas (opcional)')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
          .setMaxLength(1000), session.draft.notes),
      ),
    );
}

export function applyBasicsModalValues(sessionId: string, values: {
  discord: string;
  fullName: string;
  minecraftNick: string;
  joinedAt: string;
  country: string;
}) {
  const session = getSession(sessionId);
  if (!session) return null;

  session.draft.discord = values.discord;
  session.draft.fullName = values.fullName;
  session.draft.minecraftNick = values.minecraftNick;
  session.draft.joinedAt = values.joinedAt;
  session.draft.country = values.country;
  setSession(session);

  return session;
}

export function applyAdditionalModalValues(sessionId: string, values: {
  utcOffset: string;
  notes: string;
}) {
  const session = getSession(sessionId);
  if (!session) return null;

  session.draft.utcOffset = values.utcOffset;
  session.draft.notes = values.notes;
  setSession(session);

  return session;
}

export function applySessionSelectValue(
  sessionId: string,
  field: 'rank' | 'minecraftRank' | 'status',
  value: string,
) {
  const session = getSession(sessionId);
  if (!session) return null;

  if (field === 'rank') {
    session.draft.rank = value;
  } else if (field === 'minecraftRank' && MINECRAFT_RANK_VALUES.includes(value as MinecraftRankValue)) {
    session.draft.minecraftRank = value as MinecraftRankValue;
  } else if (field === 'status' && CLAN_PLAYER_STATUS_VALUES.includes(value as ClanPlayerStatusValue)) {
    session.draft.status = value as ClanPlayerStatusValue;
  }

  setSession(session);
  return session;
}

export function buildClanPlayerStepOneReply(session: ClanPlayerRegistrationSession) {
  const buttons = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.continueButton}${session.id}`)
      .setLabel('Completar datos restantes')
      .setStyle(ButtonStyle.Primary),
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.cancelButton}${session.id}`)
      .setLabel('Cancelar')
      .setStyle(ButtonStyle.Secondary),
  );

  return {
    embeds: [buildPreviewEmbed(session)],
    components: [buttons],
  };
}

export function buildClanPlayerReviewReply(session: ClanPlayerRegistrationSession) {
  const rankSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.rankSelect}${session.id}`)
      .setPlaceholder('Rango Discord')
      .addOptions(buildRankOptions(session.draft.rank)),
  );

  const minecraftRankSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.minecraftRankSelect}${session.id}`)
      .setPlaceholder('Rango Minecraft')
      .addOptions(buildMinecraftRankOptions(session.draft.minecraftRank)),
  );

  const statusSelect = new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
    new StringSelectMenuBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.statusSelect}${session.id}`)
      .setPlaceholder('Status')
      .addOptions(buildStatusOptions(session.draft.status)),
  );

  const buttons = new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.editBasicsButton}${session.id}`)
      .setLabel('Editar básicos')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.editAdditionalButton}${session.id}`)
      .setLabel('Editar adicionales')
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.confirmButton}${session.id}`)
      .setLabel('Guardar y cerrar canal')
      .setStyle(ButtonStyle.Success),
    new ButtonBuilder()
      .setCustomId(`${CLAN_PLAYER_CUSTOM_IDS.cancelButton}${session.id}`)
      .setLabel('Cancelar')
      .setStyle(ButtonStyle.Danger),
  );

  return {
    embeds: [buildPreviewEmbed(session)],
    components: [rankSelect, minecraftRankSelect, statusSelect, buttons],
  };
}

export function getClanPlayerSession(sessionId: string) {
  return getSession(sessionId);
}

function toJoinedAtDate(value: string) {
  return new Date(`${value}T12:00:00.000Z`);
}

function formatValidationErrors(errors: Record<string, string[] | undefined>) {
  return Object.values(errors)
    .flatMap(messages => messages ?? [])
    .filter(Boolean)
    .slice(0, 4)
    .join('\n');
}

export async function saveClanPlayerRegistration(sessionId: string) {
  const session = getSession(sessionId);
  if (!session) {
    return { ok: false as const, message: 'La sesión expiró. Ejecuta el comando otra vez.' };
  }

  const parsed = ClanPlayerSchema.safeParse(session.draft);
  if (!parsed.success) {
    return {
      ok: false as const,
      message: formatValidationErrors(parsed.error.flatten().fieldErrors) || 'Faltan datos requeridos.',
    };
  }

  const [discordTaken, minecraftNickTaken] = await Promise.all([
    prisma.clanPlayer.findFirst({
      where: {
        discord: { equals: parsed.data.discord, mode: 'insensitive' },
      },
      select: { id: true },
    }),
    prisma.clanPlayer.findFirst({
      where: {
        minecraftNick: { equals: parsed.data.minecraftNick, mode: 'insensitive' },
      },
      select: { id: true },
    }),
  ]);

  if (discordTaken) {
    return { ok: false as const, message: 'Ya existe un jugador con ese Discord.' };
  }

  if (minecraftNickTaken) {
    return { ok: false as const, message: 'Ya existe un jugador con ese nick de Minecraft.' };
  }

  try {
    const createdPlayer = await prisma.$transaction(async tx => {
      const ticket = await tx.recruitmentTicket.findUnique({
        where: { id: session.ticketId },
        select: { id: true, status: true },
      });

      if (!ticket || ticket.status !== 'ACCEPTED') {
        throw new Error('RECRUITMENT_TICKET_NOT_ACCEPTED');
      }

      const player = await tx.clanPlayer.create({
        data: {
          id: randomUUID(),
          discord: parsed.data.discord,
          fullName: parsed.data.fullName,
          minecraftNick: parsed.data.minecraftNick,
          rank: parsed.data.rank,
          minecraftRank: parsed.data.minecraftRank,
          joinedAt: toJoinedAtDate(parsed.data.joinedAt),
          country: parsed.data.country,
          utcOffset: parsed.data.utcOffset,
          status: parsed.data.status,
          notes: parsed.data.notes?.trim() ? parsed.data.notes.trim() : null,
        },
      });

      await tx.recruitmentTicket.update({
        where: { id: session.ticketId },
        data: { status: 'REGISTERED' },
      });

      return player;
    });

    clearClanPlayerRegistrationSession(sessionId);

    return {
      ok: true as const,
      player: createdPlayer,
      channelId: session.channelId,
      applicantUserId: session.applicantUserId,
    };
  } catch (error) {
    if (error instanceof Error && error.message === 'RECRUITMENT_TICKET_NOT_ACCEPTED') {
      return {
        ok: false as const,
        message: 'El ticket ya no está en estado aceptado. Revisa la entrevista antes de registrar.',
      };
    }

    return {
      ok: false as const,
      message: 'No se pudo crear el jugador. Revisa los datos e intenta de nuevo.',
    };
  }
}
