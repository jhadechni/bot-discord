# Backlog por Modulo

## UI global

- Mantener `message-ui.ts` como base comun de footers, colores y builders.
- Mantener los archivos `*-ui.ts` como adaptadores especificos por modulo.
- Evitar diseñar embeds aislados por comando; migrar por modulo completo.
- Revisar si en el futuro hace falta tipar estados especificos por modulo.

Estado: footers principales, colores y tipos base de modulo/contexto/intencion definidos.

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

- Definir el flujo oficial externo para administrar catalogo, productos y materiales.
- Revisar si el canal temporal de pedido necesita un mensaje de bienvenida mas especifico.
- Revisar si se requiere log interno separado para ventas, cancelaciones o descuentos manuales.
- Revisar manualmente capturas reales de catalogo/carrito en Discord con productos largos.

Estado: migracion visual principal completada con `src/utils/shop-ui.ts`. La gestion de catalogo/materiales/productos no queda expuesta en Discord.

## Bienvenida, salidas y boost

- Revisar si bienvenida debe mencionar reglas o canal guia cuando exista configuracion para eso.
- Evaluar si boost debe tener log interno separado si el servidor lo necesita.

Estado: migracion principal completada con `src/utils/community-ui.ts`. Los logs usan `Aquaris Logs • Comunidad`.

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

- Revisar manualmente en Discord los embeds de catalogo y carrito.
- Evaluar si los builders de `catalog.ts`, `cart.ts` y `order-utils.ts` deben moverse a `shop-ui.ts`.

Estado: revision residual principal completada.
