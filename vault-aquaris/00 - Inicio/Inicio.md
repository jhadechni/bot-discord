# Vault Aquaris

Este vault documenta el contexto funcional, tecnico y visual del bot Aquaris.

## Entradas principales

- [[01 - Proyecto/Resumen del Proyecto]]
- [[02 - Arquitectura/Arquitectura General]]
- [[02 - Arquitectura/Indice de Codigo]]
- [[03 - Modulos/Mapa de Modulos]]
- [[04 - UI y Mensajes/Identidad Visual]]
- [[04 - UI y Mensajes/Sistema de Mensajes]]
- [[04 - UI y Mensajes/Estrategia de Migracion Visual]]
- [[04 - UI y Mensajes/Capa Global de Mensajes]]
- [[04 - UI y Mensajes/Moderacion - Estado Actual]]
- [[04 - UI y Mensajes/Reclutamiento - Estado Actual]]
- [[04 - UI y Mensajes/Recordatorios y Kits - Estado Actual]]
- [[04 - UI y Mensajes/Sugerencias - Estado Actual]]
- [[04 - UI y Mensajes/Niveles y XP - Estado Actual]]
- [[04 - UI y Mensajes/Automod y Filtro - Estado Actual]]
- [[04 - UI y Mensajes/Configuracion Ayuda y Sistema - Estado Actual]]
- [[04 - UI y Mensajes/Bienvenida Salidas y Boost - Estado Actual]]
- [[04 - UI y Mensajes/Tienda - Estado Actual]]
- [[04 - UI y Mensajes/Fun y Utilidades Especiales - Estado Actual]]
- [[05 - Base de Datos/Modelo de Datos]]
- [[06 - Operacion/Comandos y Scripts]]
- [[07 - Cambios/Cambios Recientes]]
- [[08 - Backlog/Backlog por Modulo]]

## Estado actual

El proyecto ya tiene una capa visual compartida en `src/utils/message-ui.ts` y adaptadores por modulo para moderacion, reclutamiento, recordatorios/kits, sugerencias, niveles/XP, automod/filtro, configuracion/sistema, comunidad, tienda y utilidades especiales.

La estrategia acordada es avanzar por modulos, no hacer una conversion global de golpe.

## Convenciones del vault

- Las notas de contexto tecnico viven en `01 - Proyecto`, `02 - Arquitectura` y `05 - Base de Datos`.
- Las notas de UI/UX y mensajes viven en `04 - UI y Mensajes`.
- Cada modulo funcional se documenta en `03 - Modulos`.
- Los cambios de implementacion y decisiones recientes se registran en `07 - Cambios`.
- Los pendientes se dejan en `08 - Backlog`.
