# Tienda - Estado Actual

## Estado

Migracion visual principal completada y pulido de vistas densas aplicado.

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
- Tienda vacia.
- Solicitud libre desde catalogo.
- Confirmacion de pedido desde carrito.
- Errores principales del carrito.
- DMs principales de pedido aceptado, entregado, rechazado y cancelado.
- Confirmaciones staff de aceptar, rechazar, cancelar y descuentos.
- Pulido visual de catalogo, carrito y pedidos.

## Criterio visual

Tienda debe sentirse clara, comercial y operativa, sin parecer un e-commerce corporativo.

Decisiones aplicadas:

- Footer `Aquaris • Tienda`.
- Codigos de pedido visibles porque son identificadores utiles para cliente y staff.
- IDs internos de base de datos no se exponen al cliente ni al publico.
- Confirmaciones de cliente y staff en embeds.
- Stock y pedidos activos usan estructura de fields para facilitar lectura.
- DMs al cliente son cortos y orientados al estado.
- Catalogo ya no usa grilla de tres columnas; prioriza lectura vertical.
- Footers de catalogo se acortaron para evitar ruido visual.
- Carrito y pedidos redujeron iconos en titulos/campos para verse mas limpios.
- La gestion de catalogo, productos y materiales no se expone como comando de Discord.

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
- `src/shop/catalog.ts`
- `src/shop/cart.ts`
- `src/shop/order-utils.ts`

## Pendientes

- Definir el flujo oficial externo para administrar catalogo, productos y materiales.
- Revisar si el canal temporal de pedido necesita un mensaje de bienvenida mas especifico.
- Revisar si se requiere log interno separado para ventas, cancelaciones o descuentos manuales.
- Revisar manualmente capturas reales de catalogo/carrito en Discord con productos largos.
