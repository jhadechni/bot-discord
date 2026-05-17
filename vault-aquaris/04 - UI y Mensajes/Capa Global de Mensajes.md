# Capa Global de Mensajes

## Archivo base

La capa global vive en:

- `src/utils/message-ui.ts`

Esta utilidad nace a partir del patron validado en `src/utils/moderation-ui.ts`.

## Objetivo

Evitar que cada comando o modulo cree embeds aislados con estilos distintos.

La capa global centraliza:

- Footers Aquaris.
- Colores Aquaris.
- Builder base de embeds.
- Builder de notices.
- Builder de errores.
- Builder de mensajes orientados al usuario.
- Normalizacion de motivos.

## Exports principales

- `AQUARIS_FOOTERS`
- `AQUARIS_COLORS`
- `AquarisFooterKey`
- `AquarisColor`
- `AquarisEmbedOptions`
- `AquarisUserFacingOptions`
- `normalizeMessageReason`
- `buildAquarisEmbed`
- `buildAquarisNoticeEmbed`
- `buildAquarisErrorEmbed`
- `buildAquarisUserFacingEmbed`

## Relacion con moderacion

`src/utils/moderation-ui.ts` queda como adaptador especifico del modulo.

Mantiene nombres como:

- `buildModerationLogEmbed`
- `buildModerationUserDmEmbed`
- `buildModerationPublicEmbed`
- `buildModerationStaffEmbed`
- `buildModerationNoticeEmbed`
- `buildModerationErrorEmbed`

Pero delega la base visual a `message-ui.ts`.

## Por que hacerlo asi

Esto permite migrar los siguientes modulos sin duplicar:

- Colores.
- Footers.
- Estructura de embed.
- Timestamps.
- Estilo de errores.

Cada modulo conserva su tono y datos propios, pero usa la misma identidad base.

## Siguiente modulo

El siguiente modulo en el orden acordado es Reclutamiento.
