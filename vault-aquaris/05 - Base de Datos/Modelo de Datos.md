# Modelo de Datos

## Configuracion

`GuildConfig` guarda configuracion por servidor:

- Canales funcionales.
- Canales de logs por tipo.
- Roles del clan y staff.
- Canales/categorias de tienda.

## Moderacion

`ModerationLog`:

- `guildId`
- `targetId`
- `moderatorId`
- `type`
- `reason`
- `duration`
- `createdAt`

Uso:

- Historial administrativo.
- Logs auditables.
- Referencia para `/logs`, `/warnings` y `/reason`.

## Actividad

`UserActivity`:

- XP.
- Nivel.
- Conteo de mensajes.
- Minutos en voz.

## Recordatorios

- `ReminderTemplate`
- `Reminder`

Soportan recordatorios personales y plantillas de kits.

## Filtro

`FilterWord`:

- Palabras filtradas por servidor.
- Unicas por `(guildId, word)`.

## Reclutamiento y jugadores

- `RecruitmentTicket`: tickets de solicitud.
- `ClanPlayer`: registro de jugadores del clan.

## Tienda

Modelos principales:

- `ShopUser`
- `ShopMaterial`
- `ShopInventory`
- `ShopProduct`
- `ShopProductComponent`
- `ShopProductPrice`
- `ShopOrder`
- `ShopOrderItem`
- `ShopInventoryMovement`
- `ShopSale`
- `ShopWithdrawal`
- `ShopDiscountPolicy`
- `ShopAppliedDiscount`
- `ShopOrderEvent`

Regla principal:

El stock vive en materiales base, no en productos vendibles.
