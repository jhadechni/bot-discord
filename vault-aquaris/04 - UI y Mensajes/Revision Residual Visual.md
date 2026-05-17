# Revision Residual Visual

## Estado

Revision residual principal completada.

Se buscaron:

- Mensajes planos con `reply`, `editReply`, `followUp`, `send` y `content`.
- Embeds directos con `new EmbedBuilder`.
- Footers y colores directos fuera de adaptadores.

## Ajustes aplicados

El residuo mas claro estaba en el CRUD interno de tienda. Esa superficie fue retirada de Discord:

- Materiales.
- Productos.
- Presentaciones.
- Clasificacion.
- Componentes.
- Precios.
- Activacion/desactivacion.
- Eliminacion.

Se migraron esas respuestas a:

- `buildShopNoticeEmbed`
- `buildShopErrorEmbed`

## Resultado de busqueda

No quedan coincidencias relevantes para respuestas planas con el patron revisado.

Quedan usos directos de `new EmbedBuilder` en lugares aceptados:

- `src/utils/message-ui.ts`: builder global base.
- `src/shop/catalog.ts`: builder especializado de catalogo.
- `src/shop/cart.ts`: builder especializado de carrito.
- `src/shop/order-utils.ts`: builders especializados de pedido.
- `src/events/interactionCreate.event.ts`: actualizacion de embeds existentes de reclutamiento con `EmbedBuilder.from`.

## Criterio

Estos usos se aceptan porque no son mensajes sueltos sin identidad:

- Los builders de tienda ya usan footer `Aquaris • Tienda`.
- `message-ui.ts` es la capa global.
- `EmbedBuilder.from` modifica mensajes ya existentes, no crea una identidad paralela nueva.

## Pendientes posteriores

- Si se quiere mayor pureza arquitectonica, mover los builders de `catalog.ts`, `cart.ts` y `order-utils.ts` para que llamen internamente a `shop-ui.ts`.
- Revisar manualmente en Discord los embeds de catalogo y carrito, porque son los mas densos visualmente.
