/**
 * sync.ts — Lógica de sincronización entre la base de datos y Google Sheets.
 *
 * Todas las funciones de exportación (DB → Sheet) son fire-and-forget seguras:
 * capturan sus propios errores y nunca lanzan excepciones.
 *
 * Las funciones de importación (Sheet → DB) devuelven un resumen y sí pueden lanzar
 * errores en casos graves (fallo de auth, spreadsheet no encontrado).
 */

import { prisma } from '../database/prisma.js';
import { logger } from '../core/logger.js';
import { writeTab, appendRow, readTab, applyProductosDropdowns } from '../utils/sheets-shop.js';
import {
  coerceShopTaxonomy,
  getTaxonomy,
  loadTaxonomy,
  parseTaxonomyRows,
} from './taxonomy.js';

/** Devuelve true si Google Sheets está configurado en el entorno. */
export function sheetsEnabled(): boolean {
  return !!process.env.GOOGLE_SHEETS_ID;
}

// ── DB → Sheet ────────────────────────────────────────────────────────────────

/**
 * Escribe el tab "Categorías" con la taxonomía completa como referencia
 * y aplica dropdowns de validación en las columnas Categoría/Subcategoría del tab Productos.
 */
export async function syncCategoriasToSheet(): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const taxonomy = getTaxonomy();
    const rows: string[][] = [];
    for (const cat of taxonomy) {
      for (const sub of cat.subcategories) {
        rows.push([cat.key, `${cat.emoji} ${cat.label}`, sub.key, sub.label]);
      }
    }
    await writeTab('categorias', rows);

    const categoryKeys    = taxonomy.map(c => c.key);
    const subcategoryKeys = taxonomy.flatMap(c => c.subcategories.map(s => s.key));
    await applyProductosDropdowns(categoryKeys, subcategoryKeys);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando categorías a Sheets');
  }
}

/**
 * Lee el tab Categorías y actualiza el cache de taxonomía en memoria.
 * No modifica la base de datos — la taxonomía es puramente in-memory.
 */
export async function importCategoriasFromSheet(): Promise<ImportSummary> {
  const summary: ImportSummary = { created: 0, updated: 0, unchanged: 0, notFound: 0, errors: [] };
  if (!sheetsEnabled()) return summary;

  try {
    const rows = await readTab('categorias');
    if (rows.length === 0) {
      summary.errors.push('El tab Categorías está vacío.');
      return summary;
    }

    const categories = parseTaxonomyRows(rows);
    if (categories.length === 0) {
      summary.errors.push('No se pudieron parsear categorías del tab Categorías.');
      return summary;
    }

    loadTaxonomy(categories);
    summary.created = categories.length;
  } catch (err) {
    summary.errors.push(err instanceof Error ? err.message : String(err));
  }

  return summary;
}

export async function syncProductosToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const products = await prisma.shopProduct.findMany({
      where:   { guildId },
      include: { prices: { where: { validTo: null }, take: 1 } },
      orderBy: { name: 'asc' },
    });

    const rows = products.map(p => [
      p.name,
      p.productType,
      p.category,
      p.subcategory,
      String(p.prices[0]?.price ?? 0),
      p.description ?? '',
      p.isActive ? 'TRUE' : 'FALSE',
    ]);

    await writeTab('productos', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando productos a Sheets');
  }
}

export async function syncComponentesToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const components = await prisma.shopProductComponent.findMany({
      where: {
        product: { guildId },
      },
      include: {
        material: true,
        product: true,
      },
      orderBy: [
        { product: { name: 'asc' } },
        { material: { name: 'asc' } },
      ],
    });

    const rows = components.map(component => [
      component.product.name,
      component.material.name,
      String(component.quantityRequired),
    ]);

    await writeTab('componentes', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando componentes a Sheets');
  }
}

export async function syncInventarioToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const inventories = await prisma.shopInventory.findMany({
      where:   { guildId },
      include: { material: true },
      orderBy: { material: { name: 'asc' } },
    });

    const rows = inventories.map(inv => {
      const disponible = inv.currentStock - inv.reservedStock;
      return [
        inv.material.name,
        inv.material.baseUnit,
        String(inv.currentStock),
        String(inv.reservedStock),
        String(disponible),
        String(inv.minStockAlert),
      ];
    });

    await writeTab('inventario', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando inventario a Sheets');
  }
}

export async function syncPedidosToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const orders = await prisma.shopOrder.findMany({
      where:   { guildId, status: { in: ['pending', 'accepted'] } },
      include: { customer: true, items: { include: { product: true } } },
      orderBy: { createdAt: 'asc' },
    });

    const STATUS_LABELS: Record<string, string> = {
      pending:  '🟡 Pendiente',
      accepted: '🟢 Aceptado',
    };

    const rows = orders.map(o => [
      o.orderCode,
      STATUS_LABELS[o.status] ?? o.status,
      o.customer.displayName,
      o.items.map(i => `${i.product.name} ×${i.quantity}`).join(', '),
      String(o.totalAmount),
      o.createdAt.toLocaleDateString('es-ES'),
    ]);

    await writeTab('pedidos', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando pedidos a Sheets');
  }
}

/** Vuelca todo el historial de ventas al tab Ventas (útil para inicialización). */
export async function syncVentasToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const sales = await prisma.shopSale.findMany({
      where:   { guildId },
      include: {
        order: { include: { items: { include: { product: true } } } },
        buyer: true,
      },
      orderBy: { soldAt: 'asc' },
    });

    const rows = sales.map(s => [
      s.soldAt.toLocaleDateString('es-ES'),
      s.order.orderCode,
      s.buyer.displayName,
      s.order.items.map(i => `${i.product.name} ×${i.quantity}`).join(', '),
      String(s.totalAmount),
    ]);

    await writeTab('ventas', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando ventas a Sheets');
  }
}

/**
 * Agrega una única venta al tab Ventas.
 * Llamado automáticamente al cerrar un pedido (fire-and-forget).
 */
export async function appendVentaToSheet(orderId: string, guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const sale = await prisma.shopSale.findUnique({
      where:   { orderId },
      include: {
        order: { include: { items: { include: { product: true } } } },
        buyer: true,
      },
    });
    if (!sale) return;

    await appendRow('ventas', [
      sale.soldAt.toLocaleDateString('es-ES'),
      sale.order.orderCode,
      sale.buyer.displayName,
      sale.order.items.map(i => `${i.product.name} ×${i.quantity}`).join(', '),
      String(sale.totalAmount),
    ]);
  } catch (err) {
    logger.warn({ err }, '[sync] Error al agregar venta a Sheets');
  }
}

// ── Sheet → DB ────────────────────────────────────────────────────────────────

export interface ImportSummary {
  created:   number;
  updated:   number;
  unchanged: number;
  notFound:  number;
  errors:    string[];
  createdNames?: string[];
  notFoundNames?: string[];
}

/**
 * Lee el tab Productos y aplica los cambios a la BD:
 * - Nuevas filas → crea el producto.
 * - Precio cambiado → cierra el precio anterior y crea uno nuevo.
 * - Descripción / Activo cambiados → actualiza el producto.
 */
export async function importProductosFromSheet(
  guildId:     string,
  staffUserId: string,
): Promise<ImportSummary> {
  const summary: ImportSummary = {
    created: 0,
    updated: 0,
    unchanged: 0,
    notFound: 0,
    errors: [],
    createdNames: [],
    notFoundNames: [],
  };

  const rows = await readTab('productos');

  for (const row of rows) {
    // Columnas: Nombre | Tipo | Categoría | Subcategoría | Precio ($) | Descripción | Activo
    const nombre          = row[0]?.trim() ?? '';
    const tipo            = row[1]?.trim() || 'single';
    const categoriaRaw    = row[2]?.trim() || null;
    const subcategoriaRaw = row[3]?.trim() || null;
    const precioStr       = (row[4] ?? '0').replace(',', '.');
    const precio          = parseFloat(precioStr);
    const descripcion     = row[5]?.trim() || null;
    const activoStr       = (row[6]?.trim() ?? 'TRUE').toUpperCase();
    const activo          = activoStr === 'TRUE' || activoStr === '1' || activoStr === 'VERDADERO';
    const taxonomy        = coerceShopTaxonomy(categoriaRaw, subcategoriaRaw);

    if (!nombre) continue;
    if (isNaN(precio) || precio < 0) {
      summary.errors.push(`Precio inválido para "${nombre}": "${row[2]}"`);
      continue;
    }

    try {
      const existing = await prisma.shopProduct.findUnique({
        where:   { guildId_name: { guildId, name: nombre } },
        include: { prices: { where: { validTo: null }, take: 1 } },
      });

      if (!existing) {
        await prisma.shopProduct.create({
          data: {
            guildId,
            name:        nombre,
            productType: tipo,
            category:    taxonomy.category,
            subcategory: taxonomy.subcategory,
            description: descripcion,
            isActive:    activo,
            prices: { create: { price: precio, changedByUserId: staffUserId } },
          },
        });
        summary.created++;
        continue;
      }

      let changed = false;

      // Precio
      const precioActual = Number(existing.prices[0]?.price ?? 0);
      if (Math.abs(precioActual - precio) > 0.001) {
        await prisma.$transaction(async tx => {
          for (const p of existing.prices) {
            await tx.shopProductPrice.update({
              where: { id: p.id },
              data:  { validTo: new Date() },
            });
          }
          await tx.shopProductPrice.create({
            data: { productId: existing.id, price: precio, changedByUserId: staffUserId },
          });
        });
        changed = true;
      }

      // Descripción / Activo
      if (
        existing.description !== descripcion ||
        existing.isActive !== activo ||
        existing.category !== taxonomy.category ||
        existing.subcategory !== taxonomy.subcategory
      ) {
        await prisma.shopProduct.update({
          where: { id: existing.id },
          data:  {
            category: taxonomy.category,
            subcategory: taxonomy.subcategory,
            description: descripcion,
            isActive: activo,
          },
        });
        changed = true;
      }

      if (changed) summary.updated++;
      else         summary.unchanged++;
    } catch (err) {
      summary.errors.push(
        `Error en "${nombre}": ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return summary;
}

/**
 * Lee el tab Inventario y aplica los cambios a la BD:
 * - Stock Total cambiado → ajuste con movimiento `manual_adjustment`.
 * - Alerta Mínima cambiada → actualiza el umbral.
 * - Materiales no encontrados en BD → se crean junto con su inventario.
 * - Las columnas Reservado y Disponible del Sheet se tratan como derivadas.
 */
export async function importInventarioFromSheet(
  guildId:     string,
  staffUserId: string,
): Promise<ImportSummary> {
  const summary: ImportSummary = {
    created: 0,
    updated: 0,
    unchanged: 0,
    notFound: 0,
    errors: [],
    createdNames: [],
    notFoundNames: [],
  };

  const rows = await readTab('inventario');

  for (const row of rows) {
    const nombre      = row[0]?.trim() ?? '';
    const unidad      = row[1]?.trim() || 'item';
    const stockNuevo  = parseInt(row[2]?.trim() ?? '0', 10);
    const alertaNueva = parseInt(row[5]?.trim() ?? '0', 10);

    if (!nombre) continue;
    if (isNaN(stockNuevo) || stockNuevo < 0) {
      summary.errors.push(`Stock inválido para "${nombre}": "${row[2]}"`);
      continue;
    }

    try {
      const material = await prisma.shopMaterial.findUnique({
        where:   { guildId_name: { guildId, name: nombre } },//
        include: { inventory: true },
      });

      if (!material) {
        await prisma.$transaction(async tx => {
          const createdMaterial = await tx.shopMaterial.create({
            data: {
              guildId,
              name: nombre,
              baseUnit: unidad,
              inventory: {
                create: {
                  guildId,
                  currentStock: stockNuevo,
                  minStockAlert: !isNaN(alertaNueva) ? alertaNueva : 0,
                },
              },
            },
          });

          if (stockNuevo > 0) {
            await tx.shopInventoryMovement.create({
              data: {
                guildId,
                materialId: createdMaterial.id,
                movementType: 'stock_add',
                quantity: stockNuevo,
                reason: 'Creado desde Google Sheets',
                performedById: staffUserId,
              },
            });
          }
        });

        summary.created++;
        summary.createdNames?.push(nombre);
        continue;
      }

      if (!material.inventory) {
        await prisma.$transaction(async tx => {
          if (material.baseUnit !== unidad) {
            await tx.shopMaterial.update({
              where: { id: material.id },
              data: { baseUnit: unidad },
            });
          }

          await tx.shopInventory.create({
            data: {
              guildId,
              materialId: material.id,
              currentStock: stockNuevo,
              minStockAlert: !isNaN(alertaNueva) ? alertaNueva : 0,
            },
          });

          if (stockNuevo > 0) {
            await tx.shopInventoryMovement.create({
              data: {
                guildId,
                materialId: material.id,
                movementType: 'stock_add',
                quantity: stockNuevo,
                reason: 'Inventario creado desde Google Sheets',
                performedById: staffUserId,
              },
            });
          }
        });

        summary.updated++;
        continue;
      }

      const inv = material.inventory;
      let changed = false;

      if (material.baseUnit !== unidad) {
        await prisma.shopMaterial.update({
          where: { id: material.id },
          data: { baseUnit: unidad },
        });
        changed = true;
      }

      if (inv.currentStock !== stockNuevo) {
        if (stockNuevo < inv.reservedStock) {
          summary.errors.push(
            `"${nombre}": no se puede bajar a ${stockNuevo} — hay ${inv.reservedStock} reservados`,
          );
          continue;
        }
        const delta = stockNuevo - inv.currentStock;
        await prisma.$transaction([
          prisma.shopInventory.update({
            where: { id: inv.id },
            data:  { currentStock: stockNuevo },
          }),
          prisma.shopInventoryMovement.create({
            data: {
              guildId,
              materialId:    material.id,
              movementType:  'manual_adjustment',
              quantity:      delta,
              reason:        'Importado desde Google Sheets',
              performedById: staffUserId,
            },
          }),
        ]);
        changed = true;
      }

      if (!isNaN(alertaNueva) && inv.minStockAlert !== alertaNueva) {
        await prisma.shopInventory.update({
          where: { id: inv.id },
          data:  { minStockAlert: alertaNueva },
        });
        changed = true;
      }

      if (changed) summary.updated++;
      else         summary.unchanged++;
    } catch (err) {
      summary.errors.push(
        `Error en "${nombre}": ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return summary;
}

/**
 * Lee el tab Componentes y aplica las recetas a la BD:
 * - Filas nuevas → crean relación producto-material.
 * - Cantidad cambiada → actualiza quantityRequired.
 * - Requiere que producto y material ya existan.
 */
export async function importComponentesFromSheet(
  guildId: string,
): Promise<ImportSummary> {
  const summary: ImportSummary = {
    created: 0,
    updated: 0,
    unchanged: 0,
    notFound: 0,
    errors: [],
    createdNames: [],
    notFoundNames: [],
  };

  const rows = await readTab('componentes');

  for (const row of rows) {
    const nombreProducto = row[0]?.trim() ?? '';
    const nombreMaterial = row[1]?.trim() ?? '';
    const cantidad = parseInt(row[2]?.trim() ?? '0', 10);

    if (!nombreProducto && !nombreMaterial) continue;

    if (!nombreProducto || !nombreMaterial) {
      summary.errors.push(
        `Fila incompleta en Componentes: producto="${nombreProducto}" material="${nombreMaterial}"`,
      );
      continue;
    }

    if (isNaN(cantidad) || cantidad <= 0) {
      summary.errors.push(
        `Cantidad inválida para "${nombreProducto}" → "${nombreMaterial}": "${row[2] ?? ''}"`,
      );
      continue;
    }

    try {
      const [product, material] = await Promise.all([
        prisma.shopProduct.findUnique({
          where: { guildId_name: { guildId, name: nombreProducto } },
        }),
        prisma.shopMaterial.findUnique({
          where: { guildId_name: { guildId, name: nombreMaterial } },
        }),
      ]);

      if (!product || !material) {
        summary.notFound++;
        summary.notFoundNames?.push(`${nombreProducto} -> ${nombreMaterial}`);
        continue;
      }

      const existing = await prisma.shopProductComponent.findUnique({
        where: {
          productId_materialId: {
            productId: product.id,
            materialId: material.id,
          },
        },
      });

      if (!existing) {
        await prisma.shopProductComponent.create({
          data: {
            productId: product.id,
            materialId: material.id,
            quantityRequired: cantidad,
          },
        });
        summary.created++;
        summary.createdNames?.push(`${nombreProducto} -> ${nombreMaterial}`);
        continue;
      }

      if (existing.quantityRequired !== cantidad) {
        await prisma.shopProductComponent.update({
          where: { id: existing.id },
          data: { quantityRequired: cantidad },
        });
        summary.updated++;
        continue;
      }

      summary.unchanged++;
    } catch (err) {
      summary.errors.push(
        `Error en "${nombreProducto}" → "${nombreMaterial}": ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return summary;
}
