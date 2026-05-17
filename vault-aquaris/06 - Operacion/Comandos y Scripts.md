# Comandos y Scripts

## Scripts npm

| Script | Comando | Uso |
|---|---|---|
| Desarrollo | `npm run dev` | Ejecuta `tsx watch src/app.ts` |
| Produccion | `npm start` | Ejecuta `tsx src/app.ts` |
| Build | `npm run build` | `tsc --noEmit` |
| Deploy commands | `npm run deploy` | Registra slash commands |

## Variables de entorno

| Variable | Uso |
|---|---|
| `DISCORD_TOKEN` | Token del bot |
| `CLIENT_ID` | ID de aplicacion Discord |
| `GUILD_ID` | Guild para comandos en desarrollo |
| `DATABASE_URL` | Conexion PostgreSQL |
| `GOOGLE_SHEETS_ID` | Habilita sync de Sheets |
| `GOOGLE_CREDENTIALS_FILE` | Credenciales Google, default `credentials/google.json` |

## Verificaciones usadas

- `npm run build`
- `git diff --check`

## Notas operativas

- Ejecutar `npm run deploy` tras cambiar estructura de slash commands.
- No hacer sync de Sheets con `await` desde handlers principales; usar fire-and-forget.
- El bot usa `deferReply`/`deferUpdate` para operaciones que pueden tardar.
