# Reclutamiento - Estado Actual

## Objetivo aplicado

Normalizar los mensajes principales del modulo de reclutamiento usando la capa global `src/utils/message-ui.ts`.

## Adaptador del modulo

Se creo:

- `src/utils/recruitment-ui.ts`

Este adaptador centraliza:

- Colores de reclutamiento.
- Notices del modulo.
- Errores.
- DMs al usuario.
- Embed staff de solicitud.
- Embed de bienvenida del ticket.
- Normalizacion de motivos.

## Archivos migrados

- `src/commands/apply/apply.command.ts`
- `src/commands/players/jugadores.command.ts`
- `src/recruitment/player-registration.ts`
- Secciones de reclutamiento en `src/events/interactionCreate.event.ts`

## Flujos cubiertos

- Inicio de solicitud `/apply`.
- Seleccion de roles.
- Cooldown de solicitud.
- Bloqueo por palabras filtradas.
- Creacion de ticket.
- Embed staff de nueva solicitud.
- Bienvenida en canal privado.
- Solicitud adicional para Builder.
- Confirmacion al aspirante.
- Aceptacion de solicitud.
- DM de aceptacion.
- Mensaje en canal de entrevista.
- Rechazo con motivo.
- DM de rechazo.
- Actualizacion del embed staff.
- Registro de jugador en roster desde entrevista.
- Errores de permisos y sesiones expiradas.

## Reglas respetadas

- DMs al aspirante sin ID interno ni moderador.
- Staff/ticket puede ver ID interno cuando es herramienta administrativa.
- Errores con identidad de sistema.
- Mensajes de reclutamiento con footer `Aquaris • Reclutamiento`.
- Roster tratado como herramienta administrativa.

## Pendientes

- Revisar si el ID interno de ticket debe aparecer en todos los embeds staff o solo logs/herramientas administrativas.
- Revisar eventos de reclutamiento antiguos si aparecen nuevos flujos fuera de `interactionCreate`.
- Considerar un footer especifico `Aquaris • Roster` si el roster crece como modulo propio.
- Agregar snapshots/tests de builders cuando exista framework de pruebas.
