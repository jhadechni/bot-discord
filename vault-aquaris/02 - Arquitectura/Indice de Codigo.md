# Indice de Codigo

## Raiz

- `package.json`: scripts y dependencias.
- `tsconfig.json`: configuracion TypeScript estricta.
- `prisma/schema.prisma`: modelos de base de datos.
- `AGENTS.md`: contexto operativo para agentes.
- `README.md`: instalacion, comandos y uso general.
- `tienda.md`: especificacion tecnica de tienda.

## Comandos

### Moderacion

- `src/commands/moderation/mod.command.ts`: router principal `/mod`.
- `src/commands/moderation/warn.command.ts`: advertencias.
- `src/commands/moderation/mute.command.ts`: mute, tempmute, unmute.
- `src/commands/moderation/timeout.command.ts`: timeout, untimeout.
- `src/commands/moderation/kick.command.ts`: expulsiones.
- `src/commands/moderation/ban.command.ts`: bans.
- `src/commands/moderation/tempban.command.ts`: bans temporales.
- `src/commands/moderation/unban.command.ts`: desbaneo.
- `src/commands/moderation/clear.command.ts`: limpieza de chat.
- `src/commands/moderation/filter.command.ts`: palabras filtradas.
- `src/commands/moderation/logs.command.ts`: historial.
- `src/commands/moderation/warnings.command.ts`: advertencias por usuario.
- `src/commands/moderation/reason.command.ts`: editar motivo de accion.

### Tienda

- `src/commands/shop/tienda.command.ts`: vista publica de tienda.
- `src/commands/shop/pedido.command.ts`: pedidos.
- `src/commands/shop/stock.command.ts`: stock.

### Reclutamiento y jugadores

- `src/commands/apply/apply.command.ts`: solicitud de ingreso.
- `src/commands/players/jugadores.command.ts`: registro de jugadores.

### Otros

- `src/commands/config/config.command.ts`: configuracion.
- `src/commands/remind/remind.command.ts`: recordatorios.
- `src/commands/kit/kit.command.ts`: plantillas de kit.
- `src/commands/suggest/suggest.command.ts`: sugerencias.
- `src/commands/levels/perfil.command.ts`: perfil XP.
- `src/commands/levels/top.command.ts`: ranking XP.
- `src/commands/help/help.command.ts`: ayuda.
- `src/commands/ping/ping.command.ts`: ping.

## Eventos

- `src/events/interactionCreate.event.ts`: centro de interacciones.
- `src/events/messageCreate.event.ts`: XP por mensajes, filtro, spam.
- `src/events/voiceStateUpdate.event.ts`: XP por voz.
- `src/events/guildMemberAdd.event.ts`: entradas.
- `src/events/guildMemberRemove.event.ts`: salidas.
- `src/events/guildMemberUpdate.event.ts`: boosts y cambios de miembro.
- `src/events/ready.event.ts`: arranque y carga inicial.

## Tienda interna

- `src/shop/catalog.ts`: vistas de catalogo y paginacion.
- `src/shop/cart.ts`: carrito interactivo.
- `src/shop/order-utils.ts`: reservas, consumo, liberacion y embeds de pedido.
- `src/shop/taxonomy.ts`: categorias/subcategorias.
- `src/shop/discounts.ts`: descuentos.
- `src/shop/quantities.ts`: cantidades y presentaciones.
- `src/shop/scope.ts`: resolucion de scope.
- `src/shop/product-contents.ts`: contenido de productos.

## Utilidades

- `src/utils/ui.ts`: paleta base y formatters.
- `src/utils/moderation-ui.ts`: UI compartida de moderacion.
- `src/utils/log-channel.ts`: resolucion de canales de log.
- `src/utils/time.ts`: parseo/formato de tiempo.
- `src/utils/filter.ts`: filtro de palabras.
- `src/utils/automod-sync.ts`: sincronizacion AutoMod.
- `src/utils/perspective.ts`: analisis de toxicidad.
- `src/utils/reminder-scheduler.ts`: scheduler de recordatorios.
- `src/utils/suggestion.ts`: embed de sugerencias.
- `src/utils/xp.ts`: calculos de XP.

## Base de datos

- `src/database/prisma.ts`: cliente Prisma.
- `src/database/guild-config.ts`: configuracion por guild.
- `src/database/shop-user.ts`: usuarios de tienda.
