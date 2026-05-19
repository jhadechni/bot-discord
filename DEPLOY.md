# Guía de despliegue — Bot Aquaris

Guía completa para levantar el bot desde cero, configurar Discord y dejar todo funcionando.

---

## 1. Requisitos previos

| Requisito | Versión mínima |
|---|---|
| Node.js | 20+ |
| PostgreSQL | 14+ (o cuenta en Supabase) |
| Cuenta de Discord | Con acceso al servidor destino |

---

## 2. Configurar la aplicación en Discord Developer Portal

### 2.1 Crear la aplicación

1. Ir a [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Click en **New Application**
3. Poner nombre: `Bot Aquaris` → **Create**
4. En **General Information** copiar el **Application ID** → es el `CLIENT_ID` del `.env`

### 2.2 Crear el bot

1. Ir a la sección **Bot** del menú lateral
2. Click en **Add Bot** → **Yes, do it!**
3. En **Token** → click **Reset Token** → copiar el token → es el `DISCORD_TOKEN` del `.env`
4. **Guardar el token inmediatamente**, no se vuelve a mostrar

### 2.3 Activar Privileged Gateway Intents

En la misma sección **Bot**, bajar hasta **Privileged Gateway Intents** y activar:

- ✅ **Server Members Intent** — necesario para auto-nickname, autoroles y detección de boost
- ✅ **Message Content Intent** — necesario para filtro de palabras, anti-spam y XP por mensaje

> Sin estos intents el bot arrancará pero el filtro, el anti-spam, el sistema de XP y el auto-nickname **no funcionarán**.

### 2.4 Generar la URL de invitación

1. Ir a **OAuth2 → URL Generator**
2. En **Scopes** marcar: `bot` y `applications.commands`
3. En **Bot Permissions** marcar los siguientes permisos:

| Permiso | Motivo |
|---|---|
| View Channels | Funcionalidad básica |
| Send Messages | Respuestas, embeds, logs |
| Send Messages in Threads | Soporte de hilos |
| Embed Links | Todos los embeds del bot |
| Attach Files | Adjuntos opcionales |
| Read Message History | /clear, anti-spam |
| Add Reactions | Reacciones en sugerencias |
| Manage Messages | Filtro de palabras, anti-spam, /clear |
| Manage Channels | Crear y eliminar canales de tickets y pedidos |
| Manage Roles | Asignar autoroles (visitante, aspirante, etc.) |
| Manage Nicknames | Auto-nickname por rol |
| Kick Members | Comando /kick |
| Ban Members | Comandos /ban, /tempban, /unban |
| Moderate Members | Comandos /mute, /tempmute, /unmute, /timeout |

4. Copiar la URL generada y abrirla en el navegador para invitar el bot al servidor

---

## 3. Obtener el ID del servidor

1. En Discord, ir a **Ajustes de usuario → Avanzado** → activar **Modo desarrollador**
2. Clic derecho sobre el servidor → **Copiar ID del servidor** → es el `GUILD_ID` del `.env`

---

## 4. Configurar el entorno local

### 4.1 Clonar e instalar

```bash
git clone <repo-url>
cd bot-aquaris
npm install
```

### 4.2 Crear el archivo `.env`

Crear un archivo `.env` en la raíz del proyecto con:

```env
DISCORD_TOKEN=tu_token_del_bot
CLIENT_ID=id_de_la_aplicacion
GUILD_ID=id_del_servidor
DATABASE_URL=postgresql://usuario:contraseña@host:5432/aquaris
NODE_ENV=development
```

| Variable | Dónde encontrarla | Requerida |
|---|---|---|
| `DISCORD_TOKEN` | Developer Portal → Bot → Token | ✅ |
| `CLIENT_ID` | Developer Portal → General Information → Application ID | ✅ |
| `GUILD_ID` | Clic derecho al servidor en Discord → Copiar ID | ✅ |
| `DATABASE_URL` | String de conexión a PostgreSQL o Supabase | ✅ |
| `NODE_ENV` | `development` o `production` | ❌ |

#### Si usas Supabase

El `DATABASE_URL` está en: **Supabase → Project Settings → Database → Connection string → URI**

```env
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT].supabase.co:5432/postgres
```

---

## 5. Preparar la base de datos

```bash
# Aplica el schema (crea todas las tablas)
npx prisma db push

# Opcional: explorador visual de la BD
npx prisma studio
```

> Si el schema cambia en el futuro, volver a ejecutar `npx prisma db push`.

---

## 6. Registrar los slash commands en Discord

```bash
npm run deploy
```

Este comando registra todos los comandos slash en el servidor definido en `GUILD_ID`. Debe ejecutarse:
- La primera vez
- Cada vez que se añada o modifique un comando

> En modo `development` los comandos se registran solo en el servidor del `GUILD_ID` (instantáneo).
> En `production` se pueden registrar globalmente (puede tardar hasta 1 hora en propagarse).

---

## 7. Iniciar el bot

```bash
npm run dev     # Desarrollo — hot reload automático al guardar
npm start       # Producción
```

Si el bot arranca correctamente verás en consola:
```
Bot listo: Bot Aquaris#XXXX
```

---

## 8. Configurar el servidor de Discord

Tras iniciar el bot por primera vez, un **administrador** debe ejecutar los siguientes comandos en el servidor para que todas las funciones queden operativas.

### 8.1 Jerarquía de roles — OBLIGATORIO

Antes de cualquier otra cosa: en **Ajustes del servidor → Roles**, arrastrar el rol del bot a la **posición más alta** de la lista (por encima de todos los roles de usuarios).

> Si el rol del bot no está en el tope, no podrá gestionar apodos ni asignar roles a miembros con roles superiores al suyo.

---

### 8.2 Canales de logs

```
/config set-logs tipo:General canal:#logs-general
/config set-logs tipo:Moderación canal:#logs-moderacion
/config set-logs tipo:Auto-moderación canal:#logs-automod
/config set-logs tipo:Reclutamiento canal:#logs-reclutamiento
/config set-logs tipo:Entradas canal:#logs-entradas
/config set-logs tipo:Salidas canal:#logs-salidas
```

> Si solo tienes un canal de logs, configura solo `General`. Los demás tipos usan `General` como fallback si no están configurados.

---

### 8.3 Canales funcionales

```
/config set-welcome canal:#bienvenida
/config set-suggestions canal:#sugerencias
/config set-niveles canal:#nivel-up
/config set-boost canal:#boosts
```

---

### 8.4 Categorías para tickets

```
/config set-recruitment categoria_id:ID_DE_LA_CATEGORIA_RECLUTAMIENTO
/config set-shop-categoria categoria_id:ID_DE_LA_CATEGORIA_PEDIDOS
```

Para obtener el ID de una categoría: clic derecho sobre la categoría en Discord → **Copiar ID**.

---

### 8.5 Canal de notificaciones de pedidos al staff

```
/config set-shop-staff canal:#pedidos-staff
```

> En este canal el bot publicará un embed con botones cada vez que llegue un nuevo pedido. El staff acepta/rechaza desde ahí.

---

### 8.6 Roles del sistema

```
/config set-rol tipo:Visitante rol:@Visitante
/config set-rol tipo:Aspirante rol:@Aspirante
/config set-rol tipo:Aquaris rol:@Aquaris
/config set-rol tipo:Staff rol:@Staff
/config set-rol tipo:Lider rol:@Lider
/config set-rol tipo:Co-Lider rol:@Co-Lider
```

| Rol | Cuándo se asigna |
|---|---|
| Visitante | Automáticamente al entrar al servidor |
| Aspirante | Automáticamente al abrir un ticket de reclutamiento |
| Aquaris | Manualmente por el staff tras aprobar la entrevista |
| Staff | Equipo de moderación — habilita comandos de mod y tienda |
| Lider / Co-Lider | Solo para prefijos de auto-nickname |

---

### 8.7 Sistema de auto-nickname (opcional)

El bot aplica automáticamente el prefijo del rol más alto al apodo de cada miembro.

```
/config nick-rol-agregar rol:@Lider
/config nick-rol-agregar rol:@Co-Lider
/config nick-rol-agregar rol:@Aquaris
/config nick-rol-agregar rol:@Staff
/config nick-rol-agregar rol:@Aspirante
/config nick-rol-agregar rol:@Visitante
```

El prefijo se toma del nombre del rol en Discord (en mayúsculas). Si el rol se llama `Aquaris`, el apodo quedará `AQUARIS | Nombre`.

---

## 9. Verificar la configuración

```
/config ver
```

Muestra un resumen de toda la configuración actual del servidor. Verificar que todos los canales y roles estén asignados correctamente.

---

## 10. Configurar la tienda (si aplica)

### 10.1 Agregar categorías de productos

Las categorías se gestionan directamente en la base de datos o desde el panel de administración. Cada categoría necesita:
- `slug` — clave única sin acentos (ej: `bloques`, `minerales`)
- `name` — nombre visible (ej: `Bloques`, `Minerales`)
- `isActive: true`

### 10.2 Primera carga de productos

```
# 1. Registrar materiales base
/tienda material-agregar nombre:piedra
/tienda material-agregar nombre:diamante

# 2. Cargar stock inicial
/stock sumar material:piedra cantidad:10000
/stock sumar material:diamante cantidad:500

# 3. Crear producto
/tienda producto-agregar nombre:"Piedra x64" tipo:single precio:1000

# 4. Verificar catálogo
/tienda ver
```

---

## 11. Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Desarrollo con hot-reload |
| `npm start` | Producción |
| `npm run build` | Compilar TypeScript (verificación) |
| `npm run deploy` | Registrar slash commands en Discord |

---

## 12. Checklist de despliegue

- [ ] Aplicación creada en Discord Developer Portal
- [ ] Token del bot copiado en `.env`
- [ ] `Server Members Intent` activado en Developer Portal
- [ ] `Message Content Intent` activado en Developer Portal
- [ ] Bot invitado al servidor con todos los permisos necesarios
- [ ] Rol del bot en la posición más alta del servidor
- [ ] `.env` con todas las variables requeridas
- [ ] `npx prisma db push` ejecutado
- [ ] `npm run deploy` ejecutado
- [ ] Bot iniciado sin errores (`npm run dev` o `npm start`)
- [ ] `/config set-logs` configurado
- [ ] `/config set-welcome` configurado
- [ ] `/config set-suggestions` configurado
- [ ] `/config set-recruitment` configurado
- [ ] `/config set-shop-staff` configurado
- [ ] `/config set-rol` configurado para todos los roles
- [ ] `/config ver` sin campos vacíos críticos
