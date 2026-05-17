# Recordatorios y Kits - Estado Actual

## Objetivo aplicado

Normalizar los mensajes principales de recordatorios personales y recordatorios de kits usando la capa global `src/utils/message-ui.ts`.

## Adaptador del modulo

Se creo:

- `src/utils/reminder-ui.ts`

Este adaptador centraliza:

- Colores de recordatorios.
- Notices del modulo.
- Errores.
- DMs de recordatorio.
- Listas de recordatorios de kits.

## Archivos migrados

- `src/commands/remind/remind.command.ts`
- `src/commands/kit/kit.command.ts`
- `src/utils/reminder-scheduler.ts`
- Secciones de kits en `src/events/interactionCreate.event.ts`

## Flujos cubiertos

- Crear recordatorio personal.
- Listar recordatorios activos.
- Cancelar recordatorio.
- Editar recordatorio.
- Abrir gestion de recordatorios de kits.
- Crear plantilla de kit.
- Listar plantillas.
- Eliminar plantilla.
- Guardar seleccion de kits.
- Editar proximo aviso de kit.
- Volver a la vista principal de kits.
- DM de recordatorio personal.
- DM de kit disponible.
- Boton "Ya lo reclame" desde DM.

## Reglas respetadas

- IDs de recordatorio aparecen en herramientas del usuario cuando son necesarios para gestion.
- DMs son cortos y accionables.
- Errores usan identidad `Aquaris • Sistema`.
- Mensajes del modulo usan footer `Aquaris • Recordatorios`.
- Staff de kits recibe respuestas limpias y operativas.

## Pendientes

- Decidir si las plantillas de kits deben tener un footer propio `Aquaris • Kits` o seguir dentro de Recordatorios.
- Evaluar paginacion si hay mas de 25 plantillas de kit, por limite de select menu.
- Revisar si el ID corto de recordatorio debe presentarse siempre como herramienta administrativa del usuario o reducirse en algunas vistas.
