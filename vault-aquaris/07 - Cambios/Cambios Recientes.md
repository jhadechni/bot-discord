# Cambios Recientes

## Identidad visual de moderacion

Se creo y amplio `src/utils/moderation-ui.ts` para centralizar builders visuales de moderacion.

Builders actuales:

- `buildModerationLogEmbed`
- `buildModerationUserDmEmbed`
- `buildModerationPublicEmbed`
- `buildModerationStaffEmbed`
- `buildModerationNoticeEmbed`
- `buildModerationErrorEmbed`

## Paleta actualizada

`src/utils/ui.ts` ahora incluye colores adicionales:

- `info`
- `mute`
- `timeout`
- `kick`
- `system`

## Comandos de moderacion migrados

Se migraron los mensajes planos y embeds locales del modulo de moderacion hacia la utilidad compartida.

Resultado:

- Consistencia visual.
- Footers estandarizados.
- IDs internos limitados a logs y herramientas administrativas.
- DMs limpios para usuarios.
- Confirmaciones staff en embeds.

## Verificacion

`npm run build` paso correctamente despues de los cambios.

`git diff --check` paso correctamente sobre los archivos tocados.

## Decision de roadmap visual

Se definio que el proyecto debe avanzar por modulos y que no conviene crear embeds aislados por comando.

Orden de trabajo acordado:

1. Moderacion.
2. Reclutamiento.
3. Recordatorios / Kits.
4. Sugerencias.
5. Niveles / XP.
6. Automod / Filtro.
7. Configuracion / Ayuda / Sistema.
8. Bienvenida / Salidas / Boost.
9. Tienda.
10. Fun / Utilidades especiales.

La capa global de mensajes ya fue iniciada en `src/utils/message-ui.ts`.

`src/utils/moderation-ui.ts` queda como adaptador de moderacion sobre esa base.

## Reclutamiento normalizado

Se creo `src/utils/recruitment-ui.ts` como adaptador del modulo de reclutamiento.

Se migraron los mensajes principales de:

- `/apply`.
- Seleccion de roles.
- Creacion de ticket.
- Staff embed de solicitud.
- Bienvenida al aspirante.
- Aceptacion y rechazo.
- DMs al aspirante.
- Registro de jugadores en roster desde entrevista.

La verificacion `npm run build` paso correctamente.

## Recordatorios / Kits normalizado

Se creo `src/utils/reminder-ui.ts` como adaptador del modulo.

Se migraron los mensajes principales de:

- `/remind add`.
- `/remind lista`.
- `/remind cancelar`.
- `/remind editar`.
- `/remind kit`.
- `/kit crear`, `/kit lista`, `/kit eliminar`.
- Scheduler de recordatorios por DM.
- Botones y selects de kits en `interactionCreate`.

La verificacion `npm run build` paso correctamente.

## Sugerencias normalizado

Se creo `src/utils/suggestion-ui.ts` como adaptador del modulo.

Se migraron:

- Embed publico de sugerencia.
- Confirmacion de envio.
- Errores de cooldown, filtro y canal configurado.
- Actualizacion de votos por reacciones.

Decision: el ID interno de sugerencia ya no se muestra en el embed publico.

La verificacion `npm run build` paso correctamente.

## Niveles / XP normalizado

Se creo `src/utils/levels-ui.ts` como adaptador del modulo.

Se migraron:

- `/perfil`.
- `/top`.
- Anuncio publico de subida de nivel por mensajes.
- Anuncio publico de subida de nivel por voz.

Decision: los mensajes publicos de subida de nivel no muestran IDs internos ni datos administrativos.

La verificacion `npm run build` paso correctamente.

## Automod / Filtro normalizado

Se creo `src/utils/automod-ui.ts` como adaptador del bloque.

Se migraron:

- DMs por palabra filtrada.
- Logs por palabra filtrada.
- DMs por deteccion de toxicidad via IA.
- Logs por deteccion de toxicidad via IA.
- DMs por anti-spam.
- Mensaje publico por anti-spam.
- Log interno por anti-spam.

Decision: los IDs internos quedan solo en logs; DMs y mensajes publicos no muestran moderador ni ID.

La verificacion `npm run build` paso correctamente.

## Configuracion / Ayuda / Sistema normalizado

Se creo `src/utils/system-ui.ts` como adaptador del bloque.

Se migraron:

- `/config ver`.
- Confirmaciones de `/config set-*`.
- Confirmaciones de autonickname.
- `/help`.
- `/ping`.
- Error global al ejecutar slash commands.
- Error global no capturado en `interactionCreate`.

Decision: los errores globales no muestran detalles tecnicos al usuario; los detalles quedan en `logger`.

La verificacion `npm run build` paso correctamente.

## Bienvenida / Salidas / Boost normalizado

Se creo `src/utils/community-ui.ts` como adaptador del bloque.

Se migraron:

- Mensaje publico de bienvenida.
- Log interno de entrada.
- Log interno de salida.
- Mensaje publico de boost.

Decision: los mensajes publicos de comunidad no muestran IDs internos; los logs conservan ID y conteo de miembros.

La verificacion `npm run build` paso correctamente.

## Tienda normalizada

Se creo `src/utils/shop-ui.ts` como adaptador del modulo.

Se migraron en primera capa:

- Confirmaciones y errores principales de pedidos.
- Vista de pedidos activos.
- Vista de inventario y stock bajo.
- Solicitud libre desde catalogo.
- Confirmacion de pedido desde carrito.
- Errores principales del carrito.
- DMs principales de estado de pedido.
- Confirmaciones staff de pedido y descuentos.

Decision: los codigos de pedido siguen visibles porque son utiles para cliente y staff; los IDs internos de base de datos no se exponen al cliente ni al publico.

La verificacion `npm run build` paso correctamente.

## Fun / Utilidades especiales normalizado

Se creo `src/utils/fun-ui.ts` como adaptador del bloque.

Se migraron:

- `/adormirdani`.
- `/atrabajardani`.

Decision: quedan como utilidades internas de staff con identidad de sistema, no como sanciones formales de moderacion.

La verificacion `npm run build` paso correctamente.

## Revision residual visual

Se hizo una busqueda general de mensajes planos y embeds directos.

El CRUD de catalogo, materiales, productos, presentaciones, clasificacion, componentes, precios y activacion/desactivacion fue retirado de la superficie de comandos de Discord.

Resultado: no quedan coincidencias relevantes de respuestas planas con el patron revisado.

Usos directos de `new EmbedBuilder` que quedan se consideran aceptados por ahora porque son builders internos o actualizaciones de embeds existentes.

La verificacion `npm run build` paso correctamente.

## Pulido visual de tienda

Se ajustaron las vistas densas de tienda para priorizar legibilidad:

- Catalogo sin grilla de tres columnas.
- Footer de catalogo mas corto.
- Entrada de tienda mas limpia.
- Carrito con titulo y resumen mas sobrios.
- Pedidos de staff y cliente con campos sin iconografia excesiva.

Archivos ajustados:

- `src/shop/catalog.ts`
- `src/shop/cart.ts`
- `src/shop/order-utils.ts`

La verificacion `npm run build` paso correctamente.

## Gestion de catalogo fuera de Discord

Se elimino `catalogoCommand` de `src/commands/shop/tienda.command.ts`.

Decision: la administracion de catalogo, productos y materiales no debe ejecutarse desde Discord. La tienda conserva la vista publica `/tienda ver`, pedidos, carrito, inventario operativo y gestion de pedidos.

La verificacion `npm run build` paso correctamente.

`git diff --check` paso correctamente.

## Consistencia global de mensajes

Se reviso la capa global `src/utils/message-ui.ts` despues de migrar los bloques principales.

Cambios cerrados:

- Footer nuevo `Aquaris Logs • Comunidad` para logs de bienvenida/salidas.
- Tipos globales `AquarisModule`, `AquarisMessageContext` y `AquarisMessageIntent`.
- Colores finales centralizados a traves de `AQUARIS_COLORS` y `src/utils/ui.ts`.
- Limpieza de fallbacks hexadecimales residuales fuera de la paleta compartida.

La verificacion `npm run build` paso correctamente.

`git diff --check` paso correctamente.

## Skills de Obsidian

Se busco una skill de Obsidian con `npx skills find obsidian`.

Resultados relevantes:

- `kepano/obsidian-skills@obsidian-markdown`
- `kepano/obsidian-skills@obsidian-cli`
- `kepano/obsidian-skills@obsidian-bases`
- `kepano/obsidian-skills@json-canvas`
- `mattpocock/skills@obsidian-vault`

No se instalo una skill nueva porque el vault requerido se pudo construir directamente como Markdown estandar compatible con Obsidian dentro del repo.
