# Estrategia de Migracion Visual

## Decision principal

Aquaris no se esta construyendo como un bot con comandos sueltos. Se esta construyendo como un sistema modular de Discord con identidad visual propia.

La identidad debe sentirse consistente en todo el bot, aunque cada modulo tenga un tono distinto.

Regla guia:

> Cada modulo puede tener personalidad propia, pero todos deben sentirse parte del mismo bot.

## Direccion visual

La direccion acordada es:

**Discord nativo premium + branding Aquaris moderado.**

El bot debe sentirse:

- Limpio.
- Legible.
- Profesional.
- Amigable.
- No corporativo.
- No infantil.
- No sobrecargado.

La prioridad maxima es la legibilidad.

## Como se expresa el branding

El branding Aquaris aparece de forma sutil mediante:

- Footers coherentes.
- Colores consistentes.
- Tono claro y directo.
- Estructura repetible.
- Uso moderado de emojis.
- Jerarquia visual estable.

No se buscan banners externos, decoracion pesada ni interfaces imposibles fuera de Discord.js.

## Elementos permitidos

Solo se deben usar elementos viables en Discord.js:

- Embeds.
- Fields.
- Footers.
- Timestamps.
- Buttons.
- Select menus.
- Modals.
- Mensajes efimeros.
- DMs.
- Thumbnails cuando tenga sentido.
- Mensajes publicos.

## Contextos de mensaje

### Logs internos

Son para staff. Deben ser tecnicos, auditables y completos.

Deben incluir cuando aplique:

- Usuario objetivo.
- Staff/moderador.
- ID interno.
- Motivo.
- Fecha/hora.
- Duracion.
- Estado tecnico.

### DMs al usuario

Deben ser cortos, claros y humanos.

No deben mostrar:

- ID interno.
- Moderador.
- Datos tecnicos innecesarios.
- Pasos redundantes salvo casos apelables o especiales.

### Mensajes publicos

Solo se publican cuando aportan claridad comunitaria.

No deben mostrar:

- Moderador.
- ID interno.
- Informacion tecnica innecesaria.

### Ephemeral staff

Son confirmaciones operativas para quien ejecuta una accion.

Deben ser:

- Rapidas.
- Limpias.
- Accionables.

Pueden incluir ID interno cuando sean herramientas administrativas.

### Errores

Deben ser claros, sin stack traces, con identidad de sistema y con el siguiente paso cuando exista.

## Regla de exposicion de informacion

Decision cerrada:

> ID interno solo en logs y herramientas administrativas. Nunca en DMs ni mensajes publicos.

## Evolucion tecnica correcta

No conviene seguir creando embeds aislados por comando. Eso repetiría el problema original.

La evolucion correcta es:

1. Tomar `src/utils/moderation-ui.ts` como referencia real.
2. Extraer una utilidad global, por ejemplo `src/utils/message-ui.ts` o `src/utils/ui/`.
3. Definir tipos comunes: modulo, contexto, estado e intencion del mensaje.
4. Mantener adaptadores especificos por modulo.
5. Migrar los modulos pendientes uno por uno.

## Orden de migracion acordado

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

## Estado actual

Moderacion ya funciona como modulo patron.

La capa global de mensajes ya fue iniciada en `src/utils/message-ui.ts`.

`src/utils/moderation-ui.ts` ahora funciona como adaptador especifico de moderacion sobre esa base.

Reclutamiento ya tiene adaptador especifico en `src/utils/recruitment-ui.ts`.

Recordatorios / Kits ya tiene adaptador especifico en `src/utils/reminder-ui.ts`.

Sugerencias ya tiene adaptador especifico en `src/utils/suggestion-ui.ts`.

Niveles / XP ya tiene adaptador especifico en `src/utils/levels-ui.ts`.

Automod / Filtro ya tiene adaptador especifico en `src/utils/automod-ui.ts`.

Configuracion / Ayuda / Sistema ya tiene adaptador especifico en `src/utils/system-ui.ts`.

Bienvenida / Salidas / Boost ya tiene adaptador especifico en `src/utils/community-ui.ts`.

Tienda ya tiene adaptador especifico en `src/utils/shop-ui.ts`.

Fun / Utilidades especiales ya tiene adaptador especifico en `src/utils/fun-ui.ts`.

El siguiente paso no es otro modulo, sino una revision residual de mensajes planos y embeds sueltos.
