# Bot Aquaris

Bot de Discord para el clan **Aquaris** de Minecraft. Gestiona el reclutamiento de miembros, sugerencias, moderación automatizada, sistema de niveles por XP, recordatorios personales y la tienda del clan.

---

## Requisitos

- Node.js 20+
- PostgreSQL 14+
- Una aplicación de Discord con un bot creado en el [Discord Developer Portal](https://discord.com/developers/applications)

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd bot-aquaris

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita el archivo .env con tus valores

# 4. Aplicar el schema a la base de datos
npx prisma db push

# 5. Registrar los comandos slash en Discord
npm run deploy

# 6. Iniciar el bot
npm run dev       # Desarrollo (hot-reload)
npm start         # Producción
```

---

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
DISCORD_TOKEN=tu_token_del_bot
CLIENT_ID=id_de_la_aplicacion
GUILD_ID=id_del_servidor
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/aquaris
NODE_ENV=development
```

| Variable | Descripción | Requerida |
|---|---|---|
| `DISCORD_TOKEN` | Token del bot (Discord Developer Portal → Bot → Token) | ✅ |
| `CLIENT_ID` | ID de la aplicación (Developer Portal → General Information) | ✅ |
| `GUILD_ID` | ID del servidor de Discord (clic derecho en el servidor → Copiar ID) | ✅ |
| `DATABASE_URL` | URL de conexión a PostgreSQL | ✅ |
| `NODE_ENV` | Entorno (`development` / `production`) | ❌ |

---

## Scripts disponibles

| Script | Comando | Descripción |
|---|---|---|
| Desarrollo | `npm run dev` | Inicia con hot-reload usando `tsx watch` |
| Producción | `npm start` | Inicia el bot compilado |
| Compilar | `npm run build` | Compila TypeScript a JavaScript |
| Desplegar comandos | `npm run deploy` | Registra/actualiza los comandos slash en Discord |

> **Nota:** Ejecuta `npm run deploy` cada vez que añadas o modifiques un comando slash.

---

## Configuración inicial

Tras iniciar el bot por primera vez, usa el comando `/config` para configurar los canales y roles del servidor.

### Orden recomendado de configuración

```
# Canales de logs (cada tipo puede ir a un canal separado)
/config set-logs tipo:General        → Canal fallback si los demás no están configurados
/config set-logs tipo:Moderación     → Acciones manuales de moderación
/config set-logs tipo:Auto-mod       → Filtro de palabras y anti-spam
/config set-logs tipo:Reclutamiento  → Solicitudes de ingreso
/config set-logs tipo:Entradas       → Notificaciones de nuevos miembros
/config set-logs tipo:Salidas        → Notificaciones de miembros que salen

# Canales funcionales
/config set-welcome     → Canal de bienvenida pública
/config set-suggestions → Canal de sugerencias
/config set-recruitment → ID de la categoría para tickets de reclutamiento
/config set-niveles     → Canal donde se anuncian las subidas de nivel
/config set-boost       → Canal donde se anuncian los boosts del servidor

# Roles
/config set-rol visitante  → Rol asignado al entrar al servidor
/config set-rol aspirante  → Rol asignado al abrir un ticket de reclutamiento
/config set-rol aquaris    → Rol de miembro oficial del clan
/config set-rol staff      → Rol del equipo de moderación
/config set-rol lider      → Rol del líder del clan
/config set-rol colider    → Rol del co-líder del clan
```

---

## Comandos

### General

| Comando | Descripción | Permisos |
|---|---|---|
| `/ping` | Muestra la latencia del bot y el estado de la base de datos | Todos |
| `/help` | Lista todos los comandos disponibles | Todos |

---

### Niveles y XP

El bot registra la actividad de cada miembro y otorga XP por mensajes y tiempo en canales de voz.

**Fórmula de niveles:** `nivel = √(XP total / 100)`
- Nivel 1: 100 XP · Nivel 2: 400 XP · Nivel 5: 2 500 XP · Nivel 10: 10 000 XP

**Fuentes de XP:**
| Acción | XP ganado | Condición |
|---|---|---|
| Mensaje enviado | 15–25 XP (aleatorio) | Cooldown de 1 minuto por usuario |
| Tiempo en voz | 5 XP por minuto | Solo si no está muteado ni ensordecido |

Los usuarios con permisos de moderación no reciben XP. Los mensajes eliminados por el filtro de palabras o el anti-spam tampoco otorgan XP.

| Comando | Descripción | Permisos |
|---|---|---|
| `/perfil [usuario]` | Muestra el perfil de XP: nivel, barra de progreso, ranking, mensajes enviados y tiempo en voz | Todos |
| `/top [tipo]` | Ranking del servidor. Tipos: `XP` (por defecto), `Mensajes`, `Tiempo en voz` | Todos |

---

### Recordatorios

| Comando | Descripción | Permisos |
|---|---|---|
| `/remind add <tiempo> <mensaje> [repetir]` | Crea un recordatorio personal. Se entrega por DM | Todos |
| `/remind lista` | Muestra los recordatorios activos con su ID y tiempo restante | Todos |
| `/remind cancelar <id>` | Cancela un recordatorio por su ID corto | Todos |

**Formato de tiempo:** `30m`, `2h`, `1d`, `1h30m` (mínimo 5 min, máximo 30 días).

Con `repetir: true` el recordatorio se repite automáticamente con el mismo intervalo.

Máximo 10 recordatorios activos por usuario.

---

### Sugerencias

| Comando | Descripción | Permisos |
|---|---|---|
| `/suggest` | Abre un formulario para enviar una sugerencia | Todos |

**Flujo:**
1. El usuario ejecuta `/suggest` → se abre un modal con un campo de texto (10–500 caracteres).
2. La sugerencia se publica en el canal configurado con reacciones 👍/👎 para votar.
3. El embed incluye botones para que el **staff** gestione el estado:
   - **Aceptar** → cambia el estado a ✅ Aceptada (verde)
   - **Rechazar** → cambia el estado a ❌ Rechazada (rojo), bloquea más votos
   - **En revisión** → cambia el estado a 🔍 En revisión (naranja)

---

### Reclutamiento

| Comando | Descripción | Permisos |
|---|---|---|
| `/recruit` | Inicia el proceso de solicitud de ingreso al clan | Todos |

**Flujo:**
1. El usuario ejecuta `/recruit` → selecciona su rol en Minecraft:
   - 🏗️ Builder · ⚙️ Técnico / Redstone · ⚔️ PvP · 🌾 Farmer · ✨ Otro
2. Se abre un formulario con preguntas sobre el candidato.
3. Se crea un canal privado de ticket visible solo para el usuario y el staff. Se asigna el rol **Aspirante** automáticamente.
4. El staff puede desde el canal:
   - **Aceptar** → el canal se renombra a `entrevista-<usuario>` y queda abierto para coordinar la entrevista. Se quita el rol **Aspirante** automáticamente. El rol **Aquaris** se asigna manualmente por el staff tras la entrevista.
   - **Rechazar** → se muestra un modal para escribir el motivo. El usuario recibe un DM con la razón, se quita el rol **Aspirante** automáticamente y el canal se elimina en 8 segundos.

---

### Configuración

| Comando | Descripción | Permisos |
|---|---|---|
| `/config ver` | Muestra la configuración actual del bot | Administrador |
| `/config set-welcome <canal>` | Canal de bienvenida pública | Administrador |
| `/config set-logs <tipo> <canal>` | Canal de logs por tipo (ver tabla abajo) | Administrador |
| `/config set-suggestions <canal>` | Canal de publicación de sugerencias | Administrador |
| `/config set-recruitment <categoria_id>` | Categoría para tickets de reclutamiento | Administrador |
| `/config set-niveles <canal>` | Canal de anuncios de subida de nivel | Administrador |
| `/config set-boost <canal>` | Canal de anuncios de boost del servidor | Administrador |
| `/config set-rol <tipo> <rol>` | Asigna un rol a una función del bot | Administrador |
| `/config set-shop-staff <canal>` | Canal de notificaciones de nuevos pedidos al staff | Administrador |
| `/config set-shop-categoria <categoria_id>` | Categoría para canales temporales de pedido | Administrador |
| `/config nick-rol-agregar <rol>` | Agrega un rol al sistema de autonickname | Administrador |
| `/config nick-rol-quitar <rol>` | Quita un rol del sistema de autonickname | Administrador |

**Tipos de log para `/config set-logs`:**

| Tipo | Descripción |
|---|---|
| `General (fallback)` | Canal que se usa si el tipo específico no está configurado |
| `Moderación` | Acciones manuales: ban, kick, mute, warn, etc. |
| `Auto-moderación` | Filtro de palabras y anti-spam |
| `Reclutamiento` | Solicitudes de ingreso al clan |
| `Entradas (joins)` | Notificación cuando alguien entra al servidor |
| `Salidas (leaves)` | Notificación cuando alguien sale del servidor |

**Tipos de rol para `/config set-rol`:**

| Tipo | Descripción |
|---|---|
| `visitante` | Se asigna automáticamente al entrar al servidor |
| `aspirante` | Se asigna al abrir un ticket de reclutamiento |
| `aquaris` | Rol de miembro oficial (se asigna manualmente tras la entrevista) |
| `staff` | Equipo de moderación |
| `lider` | Líder del clan |
| `colider` | Co-líder del clan |

---

### Moderación

Todos los comandos de moderación registran la acción en el canal de logs y guardan un historial en la base de datos.

#### Sanciones

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/warn <usuario> <motivo>` | Envía un aviso al usuario (DM + registro) | Moderar miembros |
| `/kick <usuario> [motivo]` | Expulsa al usuario del servidor | Expulsar miembros |
| `/ban <usuario> [motivo] [borrar_mensajes]` | Banea permanentemente. `borrar_mensajes` = días (0–7) | Banear miembros |
| `/unban <user_id> [motivo]` | Desbanea a un usuario por su ID | Banear miembros |
| `/tempban <usuario> <duracion> [motivo]` | Banea temporalmente. `duracion` en minutos | Banear miembros |
| `/mute <usuario> [motivo]` | Silencia (timeout de 28 días, máximo de Discord) | Moderar miembros |
| `/tempmute <usuario> <duracion> [motivo]` | Silencia temporalmente. `duracion` en minutos (1–40320) | Moderar miembros |
| `/unmute <usuario> [motivo]` | Elimina el silencio de un usuario | Moderar miembros |
| `/timeout <usuario> <duracion> [motivo]` | Aplica un timeout. `duracion` en minutos (1–40320) | Moderar miembros |
| `/untimeout <usuario> [motivo]` | Elimina el timeout de un usuario | Moderar miembros |

> Los comandos `/mute`, `/tempmute`, `/unmute`, `/timeout` y `/untimeout` publican un mensaje visible en el canal donde se ejecutan informando de la acción y el motivo.

#### Utilidad

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/clear <cantidad> [usuario]` | Elimina mensajes del canal (1–100). Filtra por usuario si se especifica | Gestionar mensajes |
| `/warnings <usuario>` | Muestra los últimos 10 avisos de un usuario | Moderar miembros |
| `/logs <usuario> [pagina]` | Historial completo de moderación, paginado (8 por página) | Moderar miembros |
| `/reason <id> <motivo>` | Edita el motivo de una acción por su ID (obtenido con `/logs`) | Moderar miembros |

#### Filtro de palabras

| Comando | Descripción | Permiso requerido |
|---|---|---|
| `/filter añadir <palabra>` | Añade una palabra al filtro automático | Gestionar mensajes |
| `/filter eliminar <palabra>` | Elimina una palabra del filtro | Gestionar mensajes |
| `/filter lista` | Muestra todas las palabras filtradas | Gestionar mensajes |

---

### Auto-moderación

El bot aplica moderación automática sin necesidad de comandos manuales. Los usuarios con permisos `Administrator`, `ManageMessages` o `ModerateMembers` no son afectados.

#### Filtro de palabras
Cada mensaje se analiza contra las palabras configuradas con `/filter`. Los cambios son instantáneos (sin caché). Si hay coincidencia:
- El mensaje se elimina automáticamente.
- El usuario recibe un DM de aviso.
- La acción se registra en el canal de auto-moderación.

#### Anti-spam

| Umbral | Acción |
|---|---|
| 5 mensajes en 8 segundos | Timeout de 10 minutos + borrado de mensajes recientes |
| 4 menciones en 10 segundos | Timeout de 10 minutos + borrado de mensajes recientes |

Cuando se activa:
- Los mensajes recientes del usuario en el canal se eliminan.
- Se aplica un timeout de 10 minutos.
- Se publica un **mensaje visible en el canal** informando del silencio automático.
- El usuario recibe un DM de aviso.
- La acción se registra en el canal de auto-moderación.

---

### Auto-nickname

El bot actualiza automáticamente el apodo de los miembros según su rol más alto configurado, con el formato `ROLENAME | nombre`.

**Cuándo se aplica:**
- Al asignar o quitar un rol
- Al cambiar el apodo manualmente

**Jerarquía de prioridad** (de mayor a menor):

| Rol configurado | Ejemplo de apodo |
|---|---|
| Lider | `LIDER \| Jaime` |
| Co-Lider | `CO-LIDER \| Jaime` |
| Aquaris | `AQUARIS \| Jaime` |
| Staff | `STAFF \| Jaime` |
| Aspirante | `ASPIRANTE \| Jaime` |
| Visitante | `VISITANTE \| Jaime` |

El prefijo se toma del **nombre real del rol en Discord** (en mayúsculas), por lo que si renombras el rol en el servidor se reflejará automáticamente.

Si alguien cambia su apodo a `Juanito` y tiene el rol Aquaris, el bot lo corrige a `AQUARIS | Juanito`.

> **Requisito importante:** el rol del bot debe estar en la **posición más alta** de la lista de roles del servidor (Configuración del servidor → Roles). De lo contrario, no podrá cambiar el apodo de miembros con roles superiores al suyo. El único caso imposible es el dueño del servidor — Discord no permite que ningún bot modifique su apodo.

---

### Boost del servidor

Cuando un miembro boosteá el servidor, el bot publica un anuncio automático en el canal configurado con `/config set-boost`.

---

## Tienda del clan

### Cómo funciona el modelo de datos

El stock **vive en los materiales base**, no en los productos vendibles. Un producto es solo una "receta" de materiales.

```
piedra (material)   →  stock real: 10.000
├── Piedra x64       (producto)  →  consume 64 de piedra
└── Cofre doble      (producto)  →  consume 3.456 de piedra

Kit minero           (producto)
├── pico diamante    →  consume 1
├── antorcha         →  consume 64
└── pan              →  consume 16
```

**Ciclo del stock:**

| Evento | Efecto en inventario |
|---|---|
| Se acepta un pedido | Stock se **reserva** (disponible = total - reservado) |
| Se cierra el pedido (entregado) | Stock reservado se **descuenta** del total |
| Se rechaza o cancela el pedido | Stock reservado se **libera** |

---

### Cómo agregar un producto — paso a paso

#### 1. Registrar los materiales base

Cada material que compone el producto debe existir en el sistema.

```
/tienda material-agregar  nombre:piedra
/tienda material-agregar  nombre:pico diamante
/tienda material-agregar  nombre:antorcha
/tienda material-agregar  nombre:pan
```

> La unidad por defecto es `item`. Puedes especificar otra: `unidad:bloque`.
> También puedes definir `stack_max` para materiales que stackean a `1`, `16` o `64`.

#### 2. Cargar stock inicial

```
/stock sumar  material:piedra         cantidad:10000
/stock sumar  material:antorcha       cantidad:500
/stock sumar  material:pan            cantidad:100
/stock sumar  material:pico diamante  cantidad:10
```

#### 3. Crear el producto vendible

```
/tienda producto-agregar  nombre:Kit minero  tipo:kit  precio:45000  descripcion:Pico, antorchas y comida
```

**Tipos disponibles:**

| Tipo | Cuándo usarlo |
|---|---|
| `single` | Un único ítem (ej: piedra x64) |
| `bulk` | Granel, cantidad variable (ej: cofre doble) |
| `kit` | Conjunto de varios materiales |
| `service` | Servicio (construcción, farm, etc.) |

#### 4. Definir los componentes (receta)

```
/tienda producto-componente  producto:Kit minero  material:pico diamante  cantidad:1
/tienda producto-componente  producto:Kit minero  material:antorcha       cantidad:64
/tienda producto-componente  producto:Kit minero  material:pan            cantidad:16
```

> Puedes modificar o añadir componentes en cualquier momento con el mismo comando. El sistema tomará los valores actuales al procesar cada pedido.

#### 5. Verificar el catálogo

```
/tienda ver
```

El producto aparece activo por defecto. Si necesitas ocultarlo temporalmente:

```
/tienda producto-desactivar  producto:Kit minero
/tienda producto-activar     producto:Kit minero
```

---

### Referencia de comandos — Tienda

#### Para todos los usuarios

| Comando | Descripción |
|---|---|
| `/tienda ver` | Muestra el catálogo activo con precios actuales |
| `/pedido crear <producto> <cantidad> [notas]` | Crea un pedido |
| `/pedido estado <codigo>` | Consulta el estado de un pedido propio |

#### Gestión de materiales (staff)

| Comando | Descripción |
|---|---|
| `/tienda material-agregar <nombre> [unidad] [stack_max]` | Registra un nuevo material base (stock inicial: 0) |
| `/tienda material-configurar <nombre> [unidad] [stack_max]` | Ajusta la unidad visual y el tamaño de stack del material |
| `/tienda material-eliminar <nombre>` | Elimina un material (solo si no tiene productos ni stock) |

#### Gestión de productos (staff)

| Comando | Descripción |
|---|---|
| `/tienda producto-agregar <nombre> <tipo> <precio> [descripcion] [material_base] [presentacion] [cantidad_base]` | Crea un producto en el catálogo o una oferta directa de material |
| `/tienda producto-presentacion <producto> <material_base> <presentacion> [cantidad_base]` | Estandariza una presentación comercial para una oferta de material |
| `/tienda producto-componente <producto> <material> <cantidad>` | Define o actualiza un componente del producto |
| `/tienda producto-precio <producto> <precio>` | Actualiza el precio — guarda historial del anterior |
| `/tienda producto-activar <producto>` | Hace visible el producto en el catálogo |
| `/tienda producto-desactivar <producto>` | Oculta el producto sin eliminarlo |
| `/tienda producto-eliminar <producto>` | Elimina el producto (solo si no tiene pedidos asociados) |
| `/tienda stats [periodo]` | Estadísticas: ingresos, pedidos, top productos y compradores |

#### Gestión de pedidos (staff)

| Comando | Descripción |
|---|---|
| `/pedido lista` | Lista pedidos pendientes y aceptados |

#### Gestión de stock (staff)

| Comando | Descripción |
|---|---|
| `/stock ver` | Lista materiales con stock total, reservado y disponible |
| `/stock bajo` | Solo materiales por debajo del umbral de alerta |
| `/stock sumar <material> <cantidad> [motivo]` | Añade stock (queda registrado en movimientos) |
| `/stock restar <material> <cantidad> [motivo]` | Retira stock disponible |
| `/stock actualizar <material> <cantidad> [motivo]` | Ajuste absoluto del stock |
| `/stock alerta <material> <minimo>` | Configura el umbral de aviso de stock bajo |

---

### Historial de precios

Cada vez que se actualiza un precio con `/tienda producto-precio`, el sistema cierra el precio anterior (guarda la fecha de fin) y crea uno nuevo. Esto permite auditar qué costaba un producto en cualquier momento.

### Pedidos — flujo completo

| Acción | Quién | Resultado |
|---|---|---|
| `/pedido crear <producto> <cantidad> [notas]` | Cliente | Crea el pedido y notifica al staff con botones |
| Botón **✅ Aceptar** | Staff | Reserva stock y crea canal temporal de pedido |
| Botón **❌ Rechazar** | Staff | Modal para ingresar motivo · DM al cliente · embed actualizado |
| Botón **📦 Marcar entregado** | Staff | Consume stock · registra venta · DM al cliente · elimina canal |
| Botón **🚫 Cancelar** | Staff | Modal · libera stock reservado · DM al cliente · elimina canal |
| `/pedido estado <codigo>` | Cliente o staff | Muestra el estado actual del pedido |
| `/pedido lista` | Staff | Lista pedidos pendientes y aceptados |

> El código de pedido tiene el formato `AQ-XXXXXX`. El cliente recibe un DM en cada transición de estado.

---

### Configuración inicial de la tienda

```
/config set-rol tipo:Staff rol:@TuRolDeStaff
  ← define quién puede gestionar la tienda

/config set-shop-staff canal:#pedidos-staff
  ← canal donde el bot publica notificaciones de nuevos pedidos

/config set-shop-categoria categoria_id:123456789
  ← categoría donde se crean los canales temporales de pedido (opcional)
```

---

## Estructura del proyecto

```
bot-aquaris/
├── prisma/
│   └── schema.prisma          # Modelos de base de datos
├── src/
│   ├── app.ts                 # Punto de entrada (registra comandos y eventos)
│   ├── commands/
│   │   ├── config/            # /config
│   │   ├── help/              # /help
│   │   ├── levels/            # /perfil, /top
│   │   ├── moderation/        # /warn, /ban, /mute, /filter, etc.
│   │   ├── ping/              # /ping
│   │   ├── recruit/           # /recruit
│   │   ├── remind/            # /remind
│   │   ├── shop/              # /tienda, /stock, /pedido
│   │   └── suggest/           # /suggest
│   ├── config/
│   │   └── env.ts             # Validación de variables de entorno (Zod)
│   ├── core/
│   │   ├── client.ts          # Instancia del cliente Discord
│   │   └── logger.ts          # Logger (Pino)
│   ├── database/
│   │   ├── prisma.ts          # Instancia de Prisma Client
│   │   ├── guild-config.ts    # Helper: obtener/crear config de servidor
│   │   └── shop-user.ts       # Helper: upsert de ShopUser
│   ├── events/
│   │   ├── interactionCreate.event.ts   # Comandos, botones y modales
│   │   ├── messageCreate.event.ts       # Filtro, anti-spam y XP por mensaje
│   │   ├── voiceStateUpdate.event.ts    # XP por tiempo en voz
│   │   ├── guildMemberAdd.event.ts      # Bienvenida + autorol visitante + log entrada
│   │   ├── guildMemberRemove.event.ts   # Log de salida
│   │   ├── guildMemberUpdate.event.ts   # Auto-nickname + anuncio de boost
│   │   ├── messageReactionAdd.event.ts    # Votos en sugerencias
│   │   ├── messageReactionRemove.event.ts # Votos en sugerencias
│   │   └── ready.event.ts               # Log de inicio + reminder scheduler
│   ├── scripts/
│   │   └── deploy-commands.ts # Registra los slash commands en Discord
│   ├── types/
│   │   ├── command.ts         # Tipo Command
│   │   └── event.ts           # Tipo BotEvent
│   ├── shop/
│   │   └── order-utils.ts     # Lógica de pedidos: stock, embeds, botones
│   └── utils/
│       ├── log-channel.ts     # Resolución de canales de log con fallback
│       ├── reminder-scheduler.ts  # Scheduler de recordatorios (cada minuto)
│       ├── suggestion.ts      # Helpers: embed y botones de sugerencias
│       └── xp.ts              # Fórmulas de nivel, progreso y barra visual
└── .env                       # Variables de entorno (no versionar)
```

---

## Base de datos

El proyecto usa **PostgreSQL** con **Prisma ORM**.

| Modelo | Descripción |
|---|---|
| `GuildConfig` | Configuración por servidor: canales, roles y tienda |
| `Suggestion` | Sugerencias enviadas por usuarios |
| `RecruitmentTicket` | Solicitudes de ingreso al clan |
| `ModerationLog` | Historial de todas las acciones de moderación |
| `FilterWord` | Palabras censuradas por servidor |
| `UserActivity` | XP, nivel, mensajes y minutos de voz por usuario/servidor |
| `Reminder` | Recordatorios personales con soporte recurrente |
| `NicknameRole` | Roles dinámicos registrados para el sistema de autonickname |
| `ShopUser` | Usuarios referenciados por la tienda (solo para relaciones internas) |
| `ShopMaterial` | Materiales base del inventario (piedra, diamante, etc.) |
| `ShopInventory` | Stock actual y reservado por material (1:1 con ShopMaterial) |
| `ShopProduct` | Catálogo de productos vendibles |
| `ShopProductComponent` | Receta: qué materiales y cantidades consume cada producto |
| `ShopProductPrice` | Historial de precios por producto |
| `ShopOrder` | Pedido (cabecera): cliente, estado, canal, totales |
| `ShopOrderItem` | Líneas del pedido: producto, cantidad, precio congelado, bruto y neto |
| `ShopInventoryMovement` | Auditoría completa de todo cambio de stock |
| `ShopSale` | Registro formal de venta cerrada |
| `ShopWithdrawal` | Retiros de stock no comerciales (consumo interno, pérdidas) |
| `ShopOrderEvent` | Bitácora del flujo de cada pedido |
| `ShopDiscountPolicy` | Políticas estandarizadas de descuento |
| `ShopAppliedDiscount` | Descuentos realmente aplicados a pedido o línea |

### Comandos útiles de Prisma

```bash
npx prisma db push          # Aplica el schema a la BD (desarrollo)
npx prisma studio           # Abre el explorador visual de la BD
npx prisma generate         # Regenera el cliente de Prisma (tras cambios en schema)
```

---

## Permisos del bot

| Permiso | Para qué se usa |
|---|---|
| `Leer mensajes / Ver canales` | Funcionalidad básica |
| `Enviar mensajes` | Respuestas, embeds, logs |
| `Gestionar mensajes` | Borrar mensajes (filtro, anti-spam, /clear) |
| `Gestionar canales` | Crear/renombrar/eliminar canales de tickets |
| `Gestionar roles` | Asignar autoroles |
| `Expulsar miembros` | Comando /kick |
| `Banear miembros` | Comandos /ban, /tempban, /unban |
| `Moderar miembros` | Comandos /mute, /tempmute, /unmute, /timeout, /untimeout |
| `Gestionar apodos` | Auto-nickname por rol |
| `Leer historial de mensajes` | /clear, anti-spam |
| `Añadir reacciones` | Reacciones en sugerencias |

**Privileged Gateway Intents** (activar en Developer Portal → Bot → Privileged Gateway Intents):
- `Server Members Intent` — auto-nickname, autoroles, boost detection
- `Message Content Intent` — filtro de palabras, anti-spam y XP por mensaje

> **Importante:** el rol del bot debe estar en la posición más alta de la jerarquía de roles del servidor para poder gestionar apodos correctamente.

---

## Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| [discord.js](https://discord.js.org/) | 14.x | Wrapper de la API de Discord |
| [Prisma](https://www.prisma.io/) | 7.x | ORM para PostgreSQL |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Lenguaje principal |
| [Pino](https://getpino.io/) | 10.x | Logger de alto rendimiento |
| [Zod](https://zod.dev/) | 4.x | Validación de variables de entorno |
| [tsx](https://github.com/privatenumber/tsx) | 4.x | Ejecución directa de TypeScript |
