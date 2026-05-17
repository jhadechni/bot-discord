# Moderacion - Estado Actual

## Objetivo aplicado

Normalizar todos los mensajes del modulo de moderacion con una identidad compartida.

## Estado tecnico actualizado

Moderacion usa `src/utils/moderation-ui.ts` como adaptador especifico del modulo.

Ese adaptador ahora delega la base visual a `src/utils/message-ui.ts`.

## Archivos tocados

- `src/utils/moderation-ui.ts`
- `src/commands/moderation/clear.command.ts`
- `src/commands/moderation/warn.command.ts`
- `src/commands/moderation/mute.command.ts`
- `src/commands/moderation/timeout.command.ts`
- `src/commands/moderation/kick.command.ts`
- `src/commands/moderation/ban.command.ts`
- `src/commands/moderation/tempban.command.ts`
- `src/commands/moderation/unban.command.ts`
- `src/commands/moderation/warnings.command.ts`
- `src/commands/moderation/logs.command.ts`
- `src/commands/moderation/reason.command.ts`
- `src/commands/moderation/filter.command.ts`
- `src/commands/moderation/mod.command.ts`

## Comandos cubiertos

- `/mod disciplina warn`
- `/mod disciplina kick`
- `/mod disciplina ban`
- `/mod disciplina tempban`
- `/mod disciplina unban`
- `/mod disciplina mute`
- `/mod disciplina tempmute`
- `/mod disciplina unmute`
- `/mod disciplina timeout`
- `/mod disciplina untimeout`
- `/mod historial warnings`
- `/mod historial logs`
- `/mod historial reason`
- `/mod chat clear`
- `/mod filtro añadir`
- `/mod filtro eliminar`
- `/mod filtro lista`

Tambien quedan cubiertos los comandos individuales equivalentes cuando existen.

## Criterios ya respetados

- DMs sin ID interno ni moderador.
- Mensajes publicos sin ID interno ni moderador.
- Logs con usuario, moderador, ID interno, motivo, fecha y duracion cuando aplica.
- Confirmaciones staff en embeds ephemeral.
- Errores con identidad `Aquaris • Sistema`.
- Build verificado con `npm run build`.

## Pendiente potencial

- Decidir si `mute` y `timeout` deben publicar siempre en canal o solo bajo condicion/configuracion.
- Seguir usando `message-ui.ts` para los siguientes modulos.
- Agregar tests o snapshots de builders si el proyecto incorpora pruebas.
