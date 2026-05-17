# Sugerencias - Estado Actual

## Objetivo aplicado

Normalizar los mensajes principales del modulo de sugerencias usando la capa global `src/utils/message-ui.ts`.

## Adaptador del modulo

Se creo:

- `src/utils/suggestion-ui.ts`

Este adaptador centraliza:

- Colores de sugerencias.
- Embed publico de sugerencia.
- Notices al usuario.
- Errores.
- Actualizacion de votos.

## Archivos migrados

- `src/commands/suggest/suggest.command.ts` ya era modal puro y no requirio cambios visuales.
- `src/utils/suggestion-ui.ts`
- `src/events/messageReactionAdd.event.ts`
- `src/events/messageReactionRemove.event.ts`
- Seccion de sugerencias en `src/events/interactionCreate.event.ts`

## Flujos cubiertos

- Envio de sugerencia.
- Cooldown.
- Bloqueo por palabras filtradas.
- Canal no configurado o invalido.
- Publicacion publica para votacion.
- Confirmacion ephemeral al usuario.
- Actualizacion de votos por reacciones.

## Decision de ID

El embed publico de sugerencia ya no muestra el ID interno en el footer.

Motivo:

- El ID interno es dato administrativo.
- La sugerencia publica solo necesita contenido, autor y votacion.

Si se necesita gestionar IDs despues, debe hacerse desde una herramienta administrativa o log, no desde el embed publico.

## Pendientes

- Crear flujo staff para aceptar/rechazar/en revision si se retoma esa funcionalidad.
- Definir si los estados de sugerencia deben mostrarse en el embed publico con color propio.
- Agregar vista administrativa para buscar sugerencias por ID si hace falta.
