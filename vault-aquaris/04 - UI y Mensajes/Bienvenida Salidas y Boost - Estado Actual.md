# Bienvenida Salidas y Boost - Estado Actual

## Estado

Migracion visual principal completada.

El bloque de comunidad ya usa un adaptador propio:

- `src/utils/community-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

## Superficies migradas

- Mensaje publico de bienvenida.
- Log interno de entrada.
- Log interno de salida.
- Mensaje publico de boost.

## Criterio visual

Este bloque debe sentirse mas calido que moderacion y sistema, pero sin sobrecargar el servidor.

Decisiones aplicadas:

- Footer publico: `Aquaris • Comunidad`.
- Logs internos: `Aquaris Logs • Moderación`.
- Mensaje publico de bienvenida sin ID interno.
- Mensaje publico de boost sin datos tecnicos.
- Logs de entrada/salida con ID y conteo de miembros.
- Thumbnails con avatar del usuario cuando corresponde.

## Builders actuales

- `buildWelcomePublicEmbed`
- `buildJoinLogEmbed`
- `buildLeaveLogEmbed`
- `buildBoostPublicEmbed`

## Archivos tocados

- `src/utils/message-ui.ts`
- `src/utils/community-ui.ts`
- `src/events/guildMemberAdd.event.ts`
- `src/events/guildMemberRemove.event.ts`
- `src/events/guildMemberUpdate.event.ts`

## Pendientes

- Decidir si los logs de entradas/salidas deben usar footer propio `Aquaris Logs • Comunidad`.
- Revisar si bienvenida debe mencionar reglas o canal guia cuando exista configuracion para eso.
- Evaluar si boost debe tener log interno separado si el servidor lo necesita.
