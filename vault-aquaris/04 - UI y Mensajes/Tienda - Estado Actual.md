# Tienda - Estado Actual

## Estado

Migracion visual principal completada en primera capa.

El modulo de tienda ya usa un adaptador propio:

- `src/utils/shop-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

Tambien se alineo el footer compartido de tienda:

- `SHOP_FOOTER`: `Aquaris • Tienda`

## Superficies migradas

- Confirmacion de pedido directo.
- Errores principales de `/pedido crear`.
- `/pedido estado`.
- `/pedidos lista`.
- Vista de inventario `/stock ver`.
- Vista de stock bajo `/stock bajo`.
- Errores principales de inventario.
- Estadisticas de tienda.
- Tienda vacia.
- Solicitud libre desde catalogo.
- Confirmacion de pedido desde carrito.
- Errores principales del carrito.
- DMs principales de pedido aceptado, entregado, rechazado y cancelado.
- Confirmaciones staff de aceptar, rechazar, cancelar y descuentos.

## Criterio visual

Tienda debe sentirse clara, comercial y operativa, sin parecer un e-commerce corporativo.

Decisiones aplicadas:

- Footer `Aquaris • Tienda`.
- Codigos de pedido visibles porque son identificadores utiles para cliente y staff.
- IDs internos de base de datos no se exponen al cliente ni al publico.
- Confirmaciones de cliente y staff en embeds.
- Stock y pedidos activos usan estructura de fields para facilitar lectura.
- DMs al cliente son cortos y orientados al estado.

## Builders actuales

- `buildShopNoticeEmbed`
- `buildShopErrorEmbed`
- `buildOrderReceivedEmbed`
- `buildActiveOrdersEmbed`
- `buildInventoryEmbed`
- `buildLowStockEmbed`
- `buildShopStatsEmbed`

## Archivos tocados

- `src/utils/ui.ts`
- `src/utils/shop-ui.ts`
- `src/commands/shop/pedido.command.ts`
- `src/commands/shop/stock.command.ts`
- `src/commands/shop/tienda.command.ts`
- `src/events/interactionCreate.event.ts`

## Pendientes

- Revisar mensajes administrativos residuales de `tienda.command.ts` para material/producto CRUD.
- Evaluar si `catalog.ts` y `cart.ts` deben depender directamente de `shop-ui.ts` o seguir usando `SHOP_FOOTER`.
- Revisar si el canal temporal de pedido necesita un mensaje de bienvenida mas especifico.
- Revisar si se requiere log interno separado para ventas, cancelaciones o descuentos manuales.
