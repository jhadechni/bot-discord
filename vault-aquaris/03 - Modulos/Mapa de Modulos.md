# Mapa de Modulos

## Moderacion

Archivos:

- `src/commands/moderation/*.command.ts`
- `src/utils/moderation-ui.ts`
- `src/utils/log-channel.ts`
- `src/events/messageCreate.event.ts` para automod/spam.

Mensajes:

- Ephemeral staff.
- DMs de sancion.
- Mensajes publicos cuando aportan claridad.
- Logs internos auditables.
- Consultas administrativas (`logs`, `warnings`, `reason`).

Estado: identidad visual compartida ya aplicada.

## Tienda

Archivos:

- `src/commands/shop/tienda.command.ts`
- `src/commands/shop/pedido.command.ts`
- `src/commands/shop/stock.command.ts`
- `src/shop/catalog.ts`
- `src/shop/cart.ts`
- `src/shop/order-utils.ts`
- `src/shop/taxonomy.ts`

Mensajes:

- Catalogo publico.
- Carrito y confirmaciones al usuario.
- Gestion staff de pedidos.
- DMs al cliente.
- Canales temporales de pedido.

Estado: usa `src/utils/ui.ts` y `SHOP_FOOTER`; pendiente alinear al nuevo sistema visual global.

## Reclutamiento

Archivos:

- `src/commands/apply/apply.command.ts`
- `src/commands/players/jugadores.command.ts`
- `src/recruitment/player-registration.ts`
- `src/events/interactionCreate.event.ts`

Mensajes:

- Formularios y modals.
- Ticket privado.
- Mensajes staff.
- DMs o avisos al aspirante.

Estado: pendiente normalizacion visual.

## Recordatorios y Kits

Archivos:

- `src/commands/remind/remind.command.ts`
- `src/commands/kit/kit.command.ts`
- `src/utils/reminder-scheduler.ts`

Mensajes:

- DMs de recordatorio.
- Ephemeral de gestion.
- Listas de recordatorios y plantillas.

Estado: pendiente normalizacion visual.

## Sugerencias

Archivos:

- `src/commands/suggest/suggest.command.ts`
- `src/utils/suggestion.ts`
- `src/events/interactionCreate.event.ts`

Mensajes:

- Modal de sugerencia.
- Publicacion en canal de sugerencias.
- Estados de gestion por staff.

Estado: pendiente normalizacion visual.

## Niveles y XP

Archivos:

- `src/commands/levels/perfil.command.ts`
- `src/commands/levels/top.command.ts`
- `src/utils/xp.ts`
- `src/events/messageCreate.event.ts`
- `src/events/voiceStateUpdate.event.ts`

Mensajes:

- Perfil del usuario.
- Rankings.
- Anuncios de subida de nivel.

Estado: pendiente normalizacion visual.

## Configuracion, ayuda y sistema

Archivos:

- `src/commands/config/config.command.ts`
- `src/commands/help/help.command.ts`
- `src/commands/ping/ping.command.ts`
- Handler global en `src/events/interactionCreate.event.ts`.

Mensajes:

- Configuracion administrativa.
- Ayuda general.
- Errores globales.

Estado: pendiente normalizacion visual.
