# Fun y Utilidades Especiales - Estado Actual

## Estado

Migracion visual principal completada.

El bloque de utilidades especiales ya usa un adaptador propio:

- `src/utils/fun-ui.ts`

Este adaptador se apoya en la capa global:

- `src/utils/message-ui.ts`

## Superficies migradas

- `/adormirdani`
- `/atrabajardani`

## Criterio visual

Son utilidades internas de staff, no sanciones formales de moderacion.

Decisiones aplicadas:

- Respuestas efimeras.
- Footer `Aquaris • Sistema`.
- Errores con identidad de sistema.
- Confirmaciones limpias y discretas.
- Sin logs internos por ahora, porque son comandos especiales y no parte del flujo formal de sanciones.

## Builders actuales

- `buildFunNoticeEmbed`
- `buildFunErrorEmbed`

## Archivos tocados

- `src/utils/fun-ui.ts`
- `src/commands/fun/adormirdani.command.ts`

## Pendientes

- Decidir si estos comandos deben quedarse en Fun o moverse a staff/sistema.
- Decidir si acciones que aplican timeout deben crear log interno aunque sean utilidades especiales.
