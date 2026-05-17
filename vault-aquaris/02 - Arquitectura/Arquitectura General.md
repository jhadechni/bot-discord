# Arquitectura General

## Entrada del bot

- `src/app.ts` inicializa cliente, carga comandos y eventos.
- `src/scripts/deploy-commands.ts` registra slash commands en Discord.
- `src/core/client.ts` define el cliente Aquaris.

## Comandos

Cada comando exporta un objeto `Command` con:

- `data`: `SlashCommandBuilder`.
- `execute(interaction)`: logica principal.
- `autocomplete`: opcional.

Carpetas principales:

- `src/commands/moderation`
- `src/commands/shop`
- `src/commands/apply`
- `src/commands/suggest`
- `src/commands/levels`
- `src/commands/remind`
- `src/commands/config`
- `src/commands/kit`
- `src/commands/players`

## Eventos

`src/events/interactionCreate.event.ts` centraliza:

- Slash commands.
- Botones.
- Select menus.
- Modals.
- Flujos interactivos de tienda, reclutamiento, sugerencias y recordatorios.

Eventos adicionales:

- `guildMemberAdd.event.ts`
- `guildMemberRemove.event.ts`
- `guildMemberUpdate.event.ts`
- `messageCreate.event.ts`
- `voiceStateUpdate.event.ts`
- `ready.event.ts`

## Utilidades compartidas

- `src/utils/ui.ts`: paleta base, labels y formatters.
- `src/utils/moderation-ui.ts`: identidad visual actual para moderacion.
- `src/utils/log-channel.ts`: resolucion de canales de logs.
- `src/utils/time.ts`: parseo/formato de duraciones.
- `src/utils/filter.ts`: filtro de palabras.
- `src/utils/reminder-scheduler.ts`: scheduler de recordatorios.

## Integraciones

- PostgreSQL via Prisma.
- Google Sheets para tienda y taxonomia.
- Discord API via Discord.js.
