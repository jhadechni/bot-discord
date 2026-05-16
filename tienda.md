# Tienda del clan Aquaris — Especificación técnica

## 1. Idea central del modelo

La regla más importante:

> **El stock vive en los materiales base, no en los productos vendibles.**

```
piedra (material)   →  stock real: 10.000
├── Piedra x64       (producto)  →  consume 64 de piedra
└── Cofre doble      (producto)  →  consume 3.456 de piedra

Kit minero           (producto)
├── pico diamante    →  consume 1
├── antorcha         →  consume 64
└── pan              →  consume 16
```

Así evitas que se descuadre el inventario. Un producto es solo una **receta** de materiales.

---

## 2. Modelos de base de datos (schema real)

Todos los modelos tienen `guildId` para soporte multi-servidor.

### ShopUser
Referencia interna de usuarios Discord dentro de la tienda. Se crea/actualiza automáticamente al primer uso.

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | cuid | ID interno |
| `guildId` | String | Servidor |
| `discordUserId` | String | ID de Discord |
| `username` | String | Nombre de usuario |
| `displayName` | String | Nombre visible |
| `isStaff` | Boolean | Si el usuario puede ejecutar acciones administrativas |

Restricción única: `(guildId, discordUserId)`

### ShopMaterial
Materiales base del inventario (piedra, diamante, antorcha, etc.).

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | cuid | ID interno |
| `guildId` | String | Servidor |
| `name` | String | Nombre del material |
| `baseUnit` | String | Unidad de medida (default: `item`) |
| `stackSize` | Int | Tamaño máximo de stack real (`1`, `16` o `64`) |
| `isActive` | Boolean | Si está vigente |

Restricción única: `(guildId, name)`

### ShopInventory
Stock actual por material (relación 1:1 con ShopMaterial).

| Campo | Tipo | Descripción |
|---|---|---|
| `materialId` | String | Referencia al material |
| `currentStock` | Int | Stock total |
| `reservedStock` | Int | Reservado por pedidos aceptados |
| `minStockAlert` | Int | Umbral de alerta (0 = sin alerta) |

> **Disponible real = currentStock − reservedStock**

### ShopProduct
Catálogo de productos vendibles.

| Campo | Tipo | Descripción |
|---|---|---|
| `name` | String | Nombre del producto |
| `productType` | String | `single` \| `bulk` \| `kit` \| `service` |
| `description` | String? | Descripción visible en catálogo |
| `baseMaterialId` | String? | Material base si es una oferta directa de material |
| `presentationType` | String | `unit` \| `stack` \| `chest` \| `double_chest` \| `custom` |
| `presentationQuantity` | Int | Cantidad base real que consume la presentación |
| `presentationLabel` | String? | Texto visible de la presentación |
| `isActive` | Boolean | Si aparece en `/tienda ver` |

Restricción única: `(guildId, name)`

### ShopProductComponent
Receta: qué materiales y cantidades consume cada producto.

| Campo | Tipo | Descripción |
|---|---|---|
| `productId` | String | Producto vendible |
| `materialId` | String | Material base |
| `quantityRequired` | Int | Cantidad por unidad de producto |

Restricción única: `(productId, materialId)`

> Los productos de tipo `service` pueden no tener componentes. En ese caso, el pedido se procesa sin afectar stock.
> Una oferta directa de material puede definir `baseMaterialId` + presentación; el sistema la traduce a cantidad base real.

### ShopProductPrice
Historial de precios. El precio activo es el que tiene `validTo = null`.

| Campo | Tipo | Descripción |
|---|---|---|
| `productId` | String | Producto |
| `price` | Decimal | Precio |
| `currency` | String | Moneda (default: `$`) |
| `validFrom` | DateTime | Desde cuándo rige |
| `validTo` | DateTime? | `null` = precio vigente |
| `changedByUserId` | String? | Quién lo cambió |

> El precio se **congela** en `ShopOrderItem.unitPrice` al crear el pedido.

### ShopOrder
Cabecera del pedido.

| Campo | Tipo | Descripción |
|---|---|---|
| `orderCode` | String | Código único (formato `AQ-XXXXXX`) |
| `customerUserId` | String | Cliente (ShopUser) |
| `status` | String | Estado actual (ver tabla) |
| `ticketChannelId` | String? | Canal temporal creado al aceptar |
| `staffChannelId` | String? | Canal del staff asociado al pedido, si existe |
| `acceptedByUserId` | String? | Staff que aceptó |
| `rejectedByUserId` | String? | Staff que rechazó |
| `closedByUserId` | String? | Staff que cerró |
| `rejectionReason` | String? | Motivo de rechazo |
| `cancelReason` | String? | Motivo de cancelación |
| `subtotalAmount` | Decimal | Suma bruta de líneas |
| `totalDiscountAmount` | Decimal | Suma total de descuentos aplicados |
| `totalAmount` | Decimal | Total final a pagar |

**Estados:**

| Estado | Descripción |
|---|---|
| `pending` | Recién creado, esperando decisión del staff |
| `accepted` | Aceptado, stock reservado, canal creado |
| `rejected` | Rechazado antes de reservar (stock no tocado) |
| `completed` | Entregado, stock consumido, venta registrada |
| `cancelled` | Cancelado por staff (stock liberado si estaba reservado) |

### ShopOrderItem
Líneas del pedido. Una por producto.

| Campo | Tipo | Descripción |
|---|---|---|
| `productId` | String | Producto |
| `quantity` | Int | Cantidad pedida |
| `unitPrice` | Decimal | Precio congelado al crear el pedido |
| `grossLineTotal` | Decimal | `unitPrice × quantity` |
| `netLineTotal` | Decimal | Total neto de la línea tras descuentos por ítem |
| `reservedQuantity` | Int | Cantidad con stock reservado |
| `deliveredQuantity` | Int | Cantidad finalmente entregada |
| `notes` | String? | Notas del cliente |

### ShopInventoryMovement
Auditoría completa de todos los cambios de stock.

| `movementType` | Cuándo se genera |
|---|---|
| `stock_add` | `/stock sumar` |
| `manual_adjustment` | `/stock actualizar` |
| `reserve` | Al aceptar un pedido |
| `release` | Al rechazar o cancelar un pedido aceptado |
| `sale` | Al completar un pedido (entregado) |
| `withdrawal` | `/stock restar` y retiros manuales formales |

> **Regla:** todo cambio de stock debe pasar por esta tabla.

### ShopSale
Registro formal de venta cerrada (se crea al cerrar un pedido).

### ShopWithdrawal
Retiros de inventario fuera del flujo de venta (consumo interno, pérdidas, regalos).

### ShopDiscountPolicy
Políticas estandarizadas de descuento.

| Campo | Tipo | Descripción |
|---|---|---|
| `name` | String | Nombre visible de la política |
| `policyType` | String | `new_customer` \| `first_order` \| `volume` \| `seasonal` \| `manual_authorized` |
| `scope` | String | `order` \| `item` |
| `discountType` | String | `fixed` \| `percent` |
| `discountValue` | Decimal | Valor base del descuento |
| `isActive` | Boolean | Si la política está habilitada |
| `priority` | Int | Prioridad de aplicación |
| `startsAt` | DateTime? | Inicio de vigencia |
| `endsAt` | DateTime? | Fin de vigencia |

### ShopAppliedDiscount
Descuentos realmente aplicados y congelados en el pedido.

| Campo | Tipo | Descripción |
|---|---|---|
| `discountPolicyId` | String? | Política origen, si aplica |
| `orderId` | String? | Descuento global al pedido |
| `orderItemId` | String? | Descuento aplicado a una línea |
| `scope` | String | `order` \| `item` |
| `discountType` | String | `fixed` \| `percent` |
| `discountValue` | Decimal | Valor base de la política |
| `discountAmount` | Decimal | Monto real descontado |
| `reason` | String? | Motivo visible |
| `appliedByUserId` | String? | Usuario o sistema que lo aplicó |

### ShopOrderEvent
Bitácora del flujo del pedido. Se registra en cada transición de estado.

| `eventType` | Cuándo |
|---|---|
| `order_created` | `/pedido crear` |
| `order_accepted` | Botón ✅ Aceptar |
| `stock_reserved` | Reserva exitosa de materiales |
| `order_rejected` | Modal de rechazo |
| `stock_released` | Liberación de reserva |
| `delivery_completed` | Entrega de materiales al cliente |
| `order_completed` | Cierre final del pedido |
| `order_cancelled` | Modal de cancelación |

---

## 3. Flujos operativos

### Flujo 1: crear un producto vendible

```
1. /tienda material-agregar  nombre:piedra
2. /stock sumar  material:piedra  cantidad:10000
3. /tienda producto-agregar  nombre:Piedra x64  tipo:single  precio:500
4. /tienda producto-componente  producto:Piedra x64  material:piedra  cantidad:64
5. /tienda ver   ← verifica que aparece en el catálogo
```

### Flujo 2: ciclo de vida de un pedido

```
Cliente: /pedido crear  producto:Piedra x64  cantidad:2
  → Crea ShopOrder (status: pending)
  → Congela precio vigente en ShopOrderItem.unitPrice
  → Calcula grossLineTotal / netLineTotal
  → Aplica descuentos automáticos vigentes, si existen
  → Publica embed en canal de staff con botones [✅ Aceptar] [❌ Rechazar]
  → Responde al cliente con el código AQ-XXXXXX

Staff: clic en [✅ Aceptar]
  → Valida stock: piedra disponible ≥ 64×2 = 128
  → ShopInventory.reservedStock += 128
  → ShopInventoryMovement (type: reserve)
  → Crea canal temporal: pedido-aq-xxxxxx
  → ShopOrder.status = accepted, ticketChannelId = <canal>
  → Actualiza embed → botones [📦 Marcar entregado] [🚫 Cancelar]
  → DM al cliente

Staff: clic en [📦 Marcar entregado]
  → ShopInventory.currentStock -= 128
  → ShopInventory.reservedStock -= 128
  → ShopInventoryMovement (type: sale)
  → ShopSale creada
  → ShopOrder.status = completed
  → Actualiza embed (sin botones)
  → DM al cliente
  → Canal eliminado en 8 segundos
```

### Flujo 3: rechazo

```
Staff: clic en [❌ Rechazar]
  → Modal para ingresar motivo
  → ShopOrder.status = rejected, rejectionReason = <motivo>
  → Embed actualizado (sin botones, color rojo)
  → DM al cliente con motivo
  (el stock nunca fue reservado, no hay nada que liberar)
```

### Flujo 4: cancelación (después de aceptar)

```
Staff: clic en [🚫 Cancelar]
  → Modal para ingresar motivo
  → ShopInventory.reservedStock -= (cantidad reservada por el pedido)
  → ShopInventoryMovement (type: release)
  → ShopOrder.status = cancelled, cancelReason = <motivo>
  → Embed actualizado (sin botones, color gris)
  → DM al cliente con motivo
  → Canal eliminado en 8 segundos
```

### Flujo 5: retiro manual de stock

```
Staff: /stock restar  material:piedra  cantidad:100  motivo:consumo interno
  → Valida: cantidad <= currentStock - reservedStock
  → Crea ShopWithdrawal
  → ShopInventory.currentStock -= 100
  → ShopInventoryMovement (type: withdrawal)
```

---

## 4. Fuente de verdad

El bot consulta exclusivamente la base de datos.

Notas:

- `ShopProduct` y `ShopProductPrice` definen el catálogo visible.
- `ShopMaterial` y `ShopInventory` sostienen el inventario real.
- `ShopProductComponent` define recetas y kits.
- El panel administrativo es la superficie de gestión; el bot solo consume y opera sobre la BD.
- Si un producto no es `service` y no tiene definición de inventario válida, no aparecerá en `/tienda ver`.

---

## 5. Reglas de negocio

| # | Regla |
|---|---|
| 1 | Los productos vendibles **no tienen stock propio**. El stock vive en los materiales. |
| 2 | Todo cambio de stock genera un registro en `ShopInventoryMovement`. |
| 3 | El precio del pedido se **congela** en `ShopOrderItem.unitPrice` al crearlo. |
| 4 | El disponible real siempre es `currentStock − reservedStock`. |
| 5 | Solo el staff (`ManageGuild` o rol staff configurado) puede aceptar, rechazar, cerrar y cancelar pedidos. |
| 6 | El stock se reserva al **aceptar**, no al crear el pedido. |
| 7 | El stock se consume (descuenta definitivamente) al **cerrar** el pedido. |
| 8 | Al rechazar/cancelar se libera el stock solo si ya había sido reservado. |
| 9 | Un producto sin componentes (ej: `service`) no afecta inventario en ningún paso. |
| 10 | El código de pedido tiene formato `AQ-XXXXXX` (6 caracteres alfanuméricos en mayúscula). |
| 11 | Los descuentos afectan dinero, no inventario. El pedido guarda `subtotalAmount`, `totalDiscountAmount` y `totalAmount`. |

---

## 6. Configuración del servidor

Antes de usar la tienda, el servidor debe configurar:

```
/config set-rol tipo:Staff rol:@StaffRol
  → Define quién puede gestionar pedidos y stock

/config set-shop-staff canal:#pedidos-staff
  → Canal donde el bot publica notificaciones de nuevos pedidos

/config set-shop-categoria categoria_id:123456789
  → Categoría donde se crean los canales temporales de pedido
  (opcional: si no está configurado, no se crean canales de ticket)
```

> Si `shopCategoryId` no está configurado, la tienda funciona igual pero sin canal de ticket. El staff recibe la notificación en su canal y coordina la entrega por otros medios.

---

## 7. Permisos del bot necesarios

- `Gestionar canales` — para crear/eliminar canales de ticket de pedido
- `Gestionar roles` — no requerido específicamente para tienda
- `Enviar mensajes` — para publicar notificaciones en el canal de staff y DMs

---

## 8. Referencia rápida de comandos

### Para todos los usuarios

| Comando | Descripción |
|---|---|
| `/tienda ver` | Catálogo de productos activos con precios |
| `/pedido crear <producto> <cantidad> [notas]` | Crea un pedido |
| `/pedido estado <codigo>` | Consulta el estado de tu pedido |

### Solo staff

| Comando | Descripción |
|---|---|
| `/pedido lista` | Lista pedidos pendientes y aceptados |
| `/tienda material-agregar <nombre> [unidad]` | Registra un material base |
| `/tienda material-eliminar <nombre>` | Elimina un material (sin stock ni productos) |
| `/tienda producto-agregar <nombre> <tipo> <precio> [desc]` | Crea un producto |
| `/tienda producto-componente <producto> <material> <cantidad>` | Define/actualiza componente |
| `/tienda producto-precio <producto> <precio>` | Actualiza precio (guarda historial) |
| `/tienda producto-activar <producto>` | Hace visible en catálogo |
| `/tienda producto-desactivar <producto>` | Oculta sin eliminar |
| `/tienda producto-eliminar <producto>` | Elimina (sin pedidos asociados) |
| `/tienda stats [periodo]` | Estadísticas de ventas. Períodos: `hoy`, `semana` (default), `mes`, `todo` |
| `/stock ver` | Stock total, reservado y disponible por material |
| `/stock bajo` | Materiales bajo el umbral de alerta |
| `/stock sumar <material> <cantidad> [motivo]` | Añade stock |
| `/stock restar <material> <cantidad> [motivo]` | Retira stock disponible |
| `/stock actualizar <material> <cantidad> [motivo]` | Ajuste absoluto |
| `/stock alerta <material> <minimo>` | Configura umbral de aviso |
