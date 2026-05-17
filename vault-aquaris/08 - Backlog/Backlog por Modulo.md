# Backlog por Modulo

## UI global

- Extender `message-ui.ts` segun necesidades reales de los siguientes modulos.
- Mantener `moderation-ui.ts` como adaptador especifico sobre la utilidad global.
- Definir footers finales para Tienda, Reclutamiento, Sistema, Niveles, Sugerencias y Recordatorios.
- Definir tipos comunes para modulo, contexto, estado e intencion de mensaje.
- Evitar diseñar embeds aislados por comando; migrar por modulo completo.

## Orden de migracion

1. Moderacion. Completado.
2. Reclutamiento. Completado.
3. Recordatorios / Kits. Completado.
4. Sugerencias. Completado.
5. Niveles / XP. Completado.
6. Automod / Filtro. Completado.
7. Configuracion / Ayuda / Sistema. Completado.
8. Bienvenida / Salidas / Boost. Completado.
9. Tienda. Primera capa completada.
10. Fun / Utilidades especiales. Completado.

## Moderacion

- Revisar si todos los mensajes publicos de sancion deben ser opcionales/configurables.
- Revisar `adormirdani` si debe quedar dentro del estilo de moderacion o como utilidad fun.

## Tienda

- Revisar mensajes administrativos residuales de `tienda.command.ts` para material/producto CRUD.
- Evaluar si `catalog.ts` y `cart.ts` deben depender directamente de `shop-ui.ts` o seguir usando `SHOP_FOOTER`.
- Revisar si el canal temporal de pedido necesita un mensaje de bienvenida mas especifico.
- Revisar si se requiere log interno separado para ventas, cancelaciones o descuentos manuales.

Estado: migracion visual principal completada en primera capa con `src/utils/shop-ui.ts`.

## Bienvenida, salidas y boost

- Decidir si los logs de entradas/salidas deben usar footer propio `Aquaris Logs • Comunidad`.
- Revisar si bienvenida debe mencionar reglas o canal guia cuando exista configuracion para eso.
- Evaluar si boost debe tener log interno separado si el servidor lo necesita.

Estado: migracion principal completada con `src/utils/community-ui.ts`.

## Reclutamiento

- Revisar si el ID interno de ticket debe aparecer siempre en herramientas staff o solo en logs.
- Considerar footer especifico `Aquaris • Roster` si el roster se separa del flujo de reclutamiento.
- Revisar flujos residuales si se agregan nuevos botones/modals.

Estado: migracion principal completada con `src/utils/recruitment-ui.ts`.

## Recordatorios y kits

- Decidir si las plantillas de kits deben tener footer propio `Aquaris • Kits` o seguir en `Aquaris • Recordatorios`.
- Evaluar paginacion si existen mas de 25 plantillas de kit.
- Revisar exposicion de IDs cortos en vistas de usuario.

Estado: migracion principal completada con `src/utils/reminder-ui.ts`.

## Sugerencias

- Crear flujo staff para aceptar, rechazar y marcar en revision si se retoma esa funcionalidad.
- Definir colores finales para estados de sugerencia.
- Crear vista administrativa si se necesita buscar sugerencias por ID.

Estado: migracion principal completada con `src/utils/suggestion-ui.ts`. El ID interno ya no se muestra en publico.

## Niveles

- Revisar si el ranking debe ser publico, efimero o configurable.
- Evaluar recompensas visuales por hitos de nivel.

Estado: migracion principal completada con `src/utils/levels-ui.ts`.

## Automod y filtro

- Revisar si Automod debe tener footer propio o seguir bajo `Aquaris • Moderación`.
- Revisar si los mensajes publicos de anti-spam deben ser configurables.
- Evaluar una vista administrativa para diagnosticar reglas activas y Perspective API.

Estado: migracion principal completada con `src/utils/automod-ui.ts`.

## Configuracion y sistema

- Revisar si `/help` debe dividirse por categorias interactivas cuando crezca el numero de comandos.
- Revisar si `/config ver` necesita paginacion o vista por seccion.

Estado: migracion principal completada con `src/utils/system-ui.ts`.

## Fun y utilidades especiales

- Decidir si estos comandos deben quedarse en Fun o moverse a staff/sistema.
- Decidir si acciones que aplican timeout deben crear log interno aunque sean utilidades especiales.

Estado: migracion principal completada con `src/utils/fun-ui.ts`.

## Revision residual

- Buscar mensajes planos restantes en comandos y eventos.
- Revisar embeds directos que aun no usan adaptador especifico.
- Separar lo que sea deuda aceptada por modulo de lo que deba migrarse antes de cerrar la fase visual.
