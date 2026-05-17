# Niveles y XP - Estado Actual

## Estado

Migracion visual principal completada.

El modulo de niveles ya usa un adaptador propio:

- `src/utils/levels-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

## Superficies migradas

- `/perfil`
- `/top`
- Anuncio publico de subida de nivel por mensajes.
- Anuncio publico de subida de nivel por voz.

## Criterio visual

Niveles debe sentirse social y claro, no excesivamente competitivo.

Decisiones aplicadas:

- Perfil en color Aquaris / Discord neutral.
- Ranking en advertencia suave para dar jerarquia visual.
- Subida de nivel en exito.
- Footer `Aquaris • Niveles`.
- Sin IDs internos ni datos administrativos en mensajes publicos.
- Perfil y top siguen siendo respuestas efimeras.

## Builders actuales

- `buildLevelProfileEmbed`
- `buildLevelTopEmbed`
- `buildLevelEmptyEmbed`
- `buildLevelUpEmbed`

## Archivos tocados

- `src/utils/levels-ui.ts`
- `src/commands/levels/perfil.command.ts`
- `src/commands/levels/top.command.ts`
- `src/events/messageCreate.event.ts`
- `src/events/voiceStateUpdate.event.ts`

## Pendientes

- Revisar si el ranking debe ser publico o seguir efimero segun configuracion del servidor.
- Evaluar si el anuncio de subida de nivel debe usar canal dedicado siempre o fallback configurable.
- Decidir si se agregan recompensas visuales por hitos de nivel sin sobrecargar el mensaje.
