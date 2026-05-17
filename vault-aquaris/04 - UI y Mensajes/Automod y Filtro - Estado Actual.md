# Automod y Filtro - Estado Actual

## Estado

Migracion visual principal completada.

El bloque de automod ya usa un adaptador propio:

- `src/utils/automod-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

## Superficies migradas

- DM al usuario por palabra filtrada.
- Log interno por palabra filtrada.
- DM al usuario por deteccion de toxicidad via IA.
- Log interno por deteccion de toxicidad via IA.
- DM al usuario por anti-spam.
- Mensaje publico por anti-spam.
- Log interno por anti-spam.

El comando `/mod filtro` ya estaba alineado desde el modulo de moderacion mediante `src/utils/moderation-ui.ts`.

## Criterio visual

Automod debe sentirse claro, serio y operativo, sin parecer una sancion manual del staff.

Decisiones aplicadas:

- DMs cortos y sin ID interno.
- Mensajes publicos sin moderador ni ID interno.
- Logs internos con usuario, canal, motivo tecnico e ID de log.
- Footer publico/DM: `Aquaris • Moderación`.
- Footer logs: `Aquaris Logs • Moderación`.
- Color rojo para filtro/toxicidad.
- Color timeout para anti-spam.

## Builders actuales

- `buildAutomodFilterDmEmbed`
- `buildAutomodFilterLogEmbed`
- `buildAutomodToxicityDmEmbed`
- `buildAutomodToxicityLogEmbed`
- `buildAutomodSpamDmEmbed`
- `buildAutomodSpamPublicEmbed`
- `buildAutomodSpamLogEmbed`

## Archivos tocados

- `src/utils/automod-ui.ts`
- `src/events/messageCreate.event.ts`

## Pendientes

- Revisar si Automod debe tener footer propio o seguir agrupado bajo Moderacion.
- Revisar si los mensajes publicos de anti-spam deben ser configurables por servidor.
- Evaluar una vista administrativa para diagnosticar reglas activas y estado de Perspective API.
