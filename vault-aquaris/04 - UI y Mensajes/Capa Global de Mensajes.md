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
- `AquarisModule`
- `AquarisMessageContext`
- `AquarisMessageIntent`
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

## Revision de consistencia global

La revision global dejo cerrados estos criterios:

- Los footers de modulo viven en `AQUARIS_FOOTERS`.
- Los colores de identidad viven en `AQUARIS_COLORS` y toman sus valores desde `src/utils/ui.ts`.
- Los tipos `AquarisModule`, `AquarisMessageContext` y `AquarisMessageIntent` documentan el vocabulario comun de mensajes.
- Los logs de comunidad usan footer propio: `Aquaris Logs • Comunidad`.
- Los adaptadores por modulo siguen siendo la capa correcta para decidir tono, campos y exposicion de datos.

Estado: capa global activa y consistente con los modulos migrados.
