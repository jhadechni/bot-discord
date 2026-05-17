# Resumen del Proyecto

Bot Aquaris es un bot de Discord para el clan Aquaris, una comunidad de Minecraft tipo SMP privado.

## Stack

| Tecnologia | Uso |
|---|---|
| TypeScript | Codigo principal con `strict` y `exactOptionalPropertyTypes` |
| Discord.js v14 | Gateway, slash commands, embeds, botones, modals y selects |
| Prisma v7 | ORM sobre PostgreSQL, con cliente generado en `src/generated/prisma` |
| PostgreSQL | Base de datos principal |
| Google Sheets API v4 | Sincronizacion de tienda y taxonomia |
| pino | Logs estructurados |

## Funcionalidades principales

- Moderacion manual y automatica.
- Tienda del clan con catalogo, stock, pedidos y ventas.
- Reclutamiento mediante tickets y formularios.
- Sistema de niveles y XP.
- Sugerencias con votacion.
- Recordatorios personales y recordatorios de kits.
- Configuracion por servidor.
- Bienvenidas, salidas y eventos del servidor.

## Reglas tecnicas importantes

- Usar imports ESM con extension `.js`.
- Evitar `any`.
- Usar `??` sobre `||` para defaults nulos.
- Usar `null`, no `undefined`, en campos opcionales de Prisma.
- Usar `logger`, no `console.log`.
- No registrar slash commands en `app.ts`; usar `src/scripts/deploy-commands.ts`.
- Operaciones largas de Discord: `deferReply()` o `deferUpdate()`.

## Fuentes de contexto

- `AGENTS.md`
- `README.md`
- `tienda.md`
- `prisma/schema.prisma`
- Codigo en `src/`
