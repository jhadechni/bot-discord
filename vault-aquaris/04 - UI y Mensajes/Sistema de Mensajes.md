# Sistema de Mensajes

## Contextos de mensaje

### Logs internos

Uso: auditoria y trazabilidad.

Deben incluir:

- Usuario objetivo.
- Staff/moderador.
- ID interno si existe.
- Motivo.
- Fecha/hora.
- Duracion cuando aplica.
- Estado tecnico si aplica.

Tono: tecnico, claro, auditable.

### DM al usuario

Uso: notificar acciones personales.

Deben ser:

- Cortos.
- Claros.
- Sin ID interno.
- Sin moderador.
- Sin pasos redundantes salvo casos apelables o especiales.

### Mensaje publico

Uso: claridad comunitaria.

Reglas:

- Solo publicar si aporta contexto al canal.
- No mostrar moderador.
- No mostrar ID interno.
- Evitar exposicion innecesaria.

### Ephemeral staff

Uso: confirmacion operativa.

Deben ser:

- Rapidos.
- Limpios.
- Accionables.
- Sin exceso narrativo.

Pueden incluir ID interno cuando sean herramientas administrativas.

### Errores

Uso: explicar bloqueo o fallo.

Deben ser:

- Claros.
- Sin stack traces.
- Con footer de sistema.
- Especificos sobre el siguiente paso cuando exista.

## Implementacion actual

`src/utils/moderation-ui.ts` define:

- `MODERATION_FOOTERS`
- `MODERATION_COLORS`
- `normalizeModerationReason`
- `buildModerationLogEmbed`
- `buildModerationUserDmEmbed`
- `buildModerationPublicEmbed`
- `buildModerationStaffEmbed`
- `buildModerationNoticeEmbed`
- `buildModerationErrorEmbed`

Esta utilidad es el primer patron implementado. La siguiente fase puede extraer una capa mas general, por ejemplo `src/utils/message-ui.ts`, para Tienda, Reclutamiento, Sistema y otros modulos.
