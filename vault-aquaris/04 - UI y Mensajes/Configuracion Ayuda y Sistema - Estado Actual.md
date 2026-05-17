# Configuracion Ayuda y Sistema - Estado Actual

## Estado

Migracion visual principal completada.

El bloque de configuracion, ayuda y sistema ya usa un adaptador propio:

- `src/utils/system-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

## Superficies migradas

- `/config ver`
- Confirmaciones de `/config set-*`
- Confirmaciones de autonickname
- `/help`
- `/ping`
- Error global al ejecutar slash commands
- Error global no capturado en `interactionCreate`

## Criterio visual

Sistema debe sentirse neutral, claro y administrativo.

Decisiones aplicadas:

- Footer `Aquaris • Sistema`.
- Color sistema para configuracion.
- Color informacion para ayuda y ping.
- Color exito para confirmaciones.
- Color error para errores globales.
- Respuestas de configuracion y sistema efimeras.
- Sin stack traces ni detalles tecnicos en mensajes al usuario.

## Builders actuales

- `buildConfigOverviewEmbeds`
- `buildSystemNoticeEmbed`
- `buildSystemErrorEmbed`
- `buildHelpEmbed`
- `buildPingEmbed`

## Archivos tocados

- `src/utils/system-ui.ts`
- `src/commands/config/config.command.ts`
- `src/commands/help/help.command.ts`
- `src/commands/ping/ping.command.ts`
- `src/events/interactionCreate.event.ts`

## Pendientes

- Revisar si `/help` debe dividirse por categorias interactivas cuando crezca el numero de comandos.
- Revisar si `/config ver` necesita paginacion o vista por seccion.
- Migrar mensajes residuales de tienda en `interactionCreate` cuando toque el modulo Tienda.
