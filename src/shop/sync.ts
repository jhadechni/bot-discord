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
import {
  writeTab,
  appendRow,
  readTab,
  applyDescuentosDropdowns,
  applyMaterialesDropdowns,
  applyProductosDropdowns,
} from '../utils/sheets-shop.js';
import {
  coerceShopTaxonomy,
  getTaxonomy,
  loadTaxonomy,
  parseTaxonomyRows,
} from './taxonomy.js';
import {
  normalizeStackSize,
  resolvePresentationLabel,
  resolvePresentationQuantity,
  type PresentationType,
} from './quantities.js';

function parseSheetBoolean(value: string | undefined, fallback = true): boolean {
  const normalized = value?.trim().toUpperCase();
  if (!normalized) return fallback;
  return normalized === 'TRUE' || normalized === '1' || normalized === 'VERDADERO' || normalized === 'SI';
}

function parseOptionalDate(value: string | undefined): Date | null {
  const normalized = value?.trim();
  if (!normalized) return null;
  const parsed = new Date(normalized);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function parseOptionalInteger(value: string | undefined): number | null {
  const normalized = value?.trim();
  if (!normalized) return null;
  const parsed = parseInt(normalized, 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function normalizeDisplayUnit(value: string | null | undefined): string {
  const normalized = value?.trim().toLowerCase();
  if (!normalized) return 'unidad';

  if ([
    'item',
    'unit',
    'unidad',
    'stack',
    'chest',
    'cofre',
    'double_chest',
    'cofre_doble',
  ].includes(normalized)) {
    return 'unidad';
  }

  return value?.trim() || 'unidad';
}

function mapPresentationTypeToSheet(value: string | null | undefined): string {
  switch (value) {
    case 'unit':
      return 'unidad';
    case 'stack':
      return 'stack';
    case 'chest':
      return 'cofre';
    case 'double_chest':
      return 'cofre_doble';
    case 'custom':
    default:
      return 'personalizada';
  }
}

function parsePresentationTypeFromSheet(value: string | undefined): PresentationType {
  const normalized = value?.trim().toLowerCase();
  switch (normalized) {
    case 'unidad':
    case 'unit':
      return 'unit';
    case 'stack':
      return 'stack';
    case 'cofre':
    case 'chest':
      return 'chest';
    case 'cofre_doble':
    case 'double_chest':
      return 'double_chest';
    case 'personalizada':
    case 'custom':
      return 'custom';
    default:
      return 'custom';
  }
}

function inferPresentationTypeFromQuantity(
  quantity: number,
  stackSize: number,
): PresentationType {
  const normalizedStackSize = normalizeStackSize(stackSize);

  if (quantity === 1) return 'unit';
  if (quantity === normalizedStackSize) return 'stack';
  if (quantity === normalizedStackSize * 27) return 'chest';
  if (quantity === normalizedStackSize * 54) return 'double_chest';
  return 'custom';
}

function getSheetProductType(product: {
  productType: string;
}, hasDirectMaterial: boolean): string {
  if (product.productType === 'service') return 'servicio';
  if (product.productType === 'kit') return 'kit';
  if (hasDirectMaterial) return 'material';
  return product.productType;
}

function resolveInternalProductType(params: {
  hasBaseMaterial: boolean;
  presentationType: PresentationType;
  rawType: string;
}): string {
  const normalized = params.rawType.trim().toLowerCase();

  if (normalized === 'servicio' || normalized === 'service') return 'service';
  if (normalized === 'kit') return 'kit';
  if (normalized === 'single' || normalized === 'bulk') return normalized;

  if (normalized === 'material') {
    if (!params.hasBaseMaterial) return 'single';
    return params.presentationType === 'unit' ? 'single' : 'bulk';
  }

  if (params.hasBaseMaterial) {
    return params.presentationType === 'unit' ? 'single' : 'bulk';
  }

  return 'single';
}

function inferDirectProductFromComponents(product: {
  baseMaterial: {
    name: string;
    stackSize: number;
  } | null;
  baseMaterialId: string | null;
  components: Array<{
    material: {
      id: string;
      name: string;
      stackSize: number;
    };
    quantityRequired: number;
  }>;
  productType: string;
  presentationLabel: string | null;
  presentationQuantity: number;
  presentationType: string;
}): {
  materialName: string;
  presentationLabel: string;
  presentationQuantity: number;
  presentationType: PresentationType;
} | null {
  if (product.baseMaterialId && product.baseMaterial) {
    const presentationType = product.presentationType as PresentationType;
    return {
      materialName: product.baseMaterial.name,
      presentationLabel: product.presentationLabel ?? resolvePresentationLabel({
        presentationQuantity: product.presentationQuantity,
        presentationType,
        stackSize: product.baseMaterial.stackSize,
      }),
      presentationQuantity: product.presentationQuantity,
      presentationType,
    };
  }

  if (product.productType === 'kit' || product.productType === 'service') {
    return null;
  }

  if (product.components.length !== 1) return null;

  const component = product.components[0];
  if (!component) return null;
  const presentationType = inferPresentationTypeFromQuantity(
    component.quantityRequired,
    component.material.stackSize,
  );

  return {
    materialName: component.material.name,
    presentationLabel: product.presentationLabel ?? resolvePresentationLabel({
      presentationQuantity: component.quantityRequired,
      presentationType,
      stackSize: component.material.stackSize,
    }),
    presentationQuantity: component.quantityRequired,
    presentationType,
  };
}

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
        rows.push([
          cat.key,
          `${cat.emoji} ${cat.label}`,
          cat.imageUrl ?? '',
          sub.key,
          sub.label,
          sub.imageUrl ?? '',
        ]);
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

export async function syncMaterialesToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const materials = await prisma.shopMaterial.findMany({
      where: { guildId },
      orderBy: { name: 'asc' },
    });

    const rows = materials.map(material => [
      material.name,
      normalizeDisplayUnit(material.baseUnit),
      String(material.stackSize),
      material.isActive ? 'TRUE' : 'FALSE',
    ]);

    await writeTab('materiales', rows);
    await applyMaterialesDropdowns();
    const taxonomy = getTaxonomy();
    await applyProductosDropdowns(
      taxonomy.map(category => category.key),
      taxonomy.flatMap(category => category.subcategories.map(subcategory => subcategory.key)),
    );
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando materiales a Sheets');
  }
}

export async function syncProductosToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const products = await prisma.shopProduct.findMany({
      where: { guildId },
      include: {
        baseMaterial: true,
        components: {
          include: {
            material: true,
          },
        },
        prices: { where: { validTo: null }, take: 1 },
      },
      orderBy: { name: 'asc' },
    });

    const rows = products.map(product => {
      const directConfig = inferDirectProductFromComponents(product);

      return [
        product.name,
        getSheetProductType(product, !!directConfig),
        product.category,
        product.subcategory,
        String(product.prices[0]?.price ?? 0),
        directConfig?.materialName ?? '',
        directConfig ? mapPresentationTypeToSheet(directConfig.presentationType) : '',
        directConfig ? String(directConfig.presentationQuantity) : '',
        directConfig?.presentationLabel ?? '',
        product.description ?? '',
        product.isActive ? 'TRUE' : 'FALSE',
      ];
    });

    await writeTab('productos', rows);
    const taxonomy = getTaxonomy();
    await applyProductosDropdowns(
      taxonomy.map(category => category.key),
      taxonomy.flatMap(category => category.subcategories.map(subcategory => subcategory.key)),
    );
    await applyDescuentosDropdowns();
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando productos a Sheets');
  }
}

export async function syncComponentesToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const products = await prisma.shopProduct.findMany({
      where: { guildId },
      include: {
        components: {
          include: {
            material: true,
          },
          orderBy: {
            material: {
              name: 'asc',
            },
          },
        },
      },
      orderBy: { name: 'asc' },
    });

    const rows = products.flatMap(product => {
      const inferredDirect =
        !product.baseMaterialId
        && product.productType !== 'kit'
        && product.productType !== 'service'
        && product.components.length === 1;

      return product.components
        .filter(component => component.materialId !== product.baseMaterialId)
        .filter(() => !inferredDirect)
        .map(component => [
          product.name,
          component.material.name,
          String(component.quantityRequired),
        ]);
    });

    await writeTab('componentes', rows);
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando componentes a Sheets');
  }
}

export async function syncDescuentosToSheet(guildId: string): Promise<void> {
  if (!sheetsEnabled()) return;
  try {
    const policies = await prisma.shopDiscountPolicy.findMany({
      where: { guildId },
      include: { product: true },
      orderBy: [
        { policyType: 'asc' },
        { product: { name: 'asc' } },
        { minQuantity: 'asc' },
        { name: 'asc' },
      ],
    });

    const rows = policies.map(policy => [
      policy.id,
      policy.name,
      policy.policyType,
      policy.product?.name ?? '',
      policy.minQuantity != null ? String(policy.minQuantity) : '',
      policy.scope,
      policy.discountType,
      String(policy.discountValue),
      String(policy.priority),
      policy.startsAt?.toISOString() ?? '',
      policy.endsAt?.toISOString() ?? '',
      policy.isActive ? 'TRUE' : 'FALSE',
      policy.description ?? '',
    ]);

    await writeTab('descuentos', rows);
    await applyDescuentosDropdowns();
  } catch (err) {
    logger.warn({ err }, '[sync] Error exportando descuentos a Sheets');
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
        normalizeDisplayUnit(inv.material.baseUnit),
        String(inv.material.stackSize),
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

export async function importMaterialesFromSheet(
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

  const rows = await readTab('materiales');

  for (const row of rows) {
    const nombre = row[0]?.trim() ?? '';
    const unidadVisual = row[1]?.trim() || 'unidad';
    const stackSize = parseOptionalInteger(row[2]) ?? 64;
    const activo = parseSheetBoolean(row[3], true);

    if (!nombre) continue;
    if (stackSize <= 0) {
      summary.errors.push(`Stack max inválido para "${nombre}": "${row[2] ?? ''}"`);
      continue;
    }

    try {
      const existing = await prisma.shopMaterial.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
      });

      if (!existing) {
        await prisma.shopMaterial.create({
          data: {
            guildId,
            name: nombre,
            baseUnit: unidadVisual,
            stackSize,
            isActive: activo,
          },
        });
        summary.created++;
        summary.createdNames?.push(nombre);
        continue;
      }

      if (
        existing.baseUnit === unidadVisual
        && existing.stackSize === stackSize
        && existing.isActive === activo
      ) {
        summary.unchanged++;
        continue;
      }

      await prisma.shopMaterial.update({
        where: { id: existing.id },
        data: {
          baseUnit: unidadVisual,
          stackSize,
          isActive: activo,
        },
      });
      summary.updated++;
    } catch (err) {
      summary.errors.push(
        `Error en material "${nombre}": ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return summary;
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
    const isNewFormat     = row.length >= 10;
    const nombre          = row[0]?.trim() ?? '';
    const tipoRaw         = row[1]?.trim() || 'single';
    const categoriaRaw    = row[2]?.trim() || null;
    const subcategoriaRaw = row[3]?.trim() || null;
    const precioStr       = (row[4] ?? '0').replace(',', '.');
    const precio          = parseFloat(precioStr);
    const materialBaseRaw = isNewFormat ? (row[5]?.trim() ?? '') : '';
    const presentacionRaw = isNewFormat ? (row[6]?.trim() ?? '') : '';
    const cantidadBaseRaw = isNewFormat ? (row[7]?.trim() ?? '') : '';
    const etiquetaRaw     = isNewFormat ? (row[8]?.trim() ?? '') : '';
    const descripcion     = (isNewFormat ? row[9] : row[5])?.trim() || null;
    const activo          = parseSheetBoolean(isNewFormat ? row[10] : row[6], true);
    const taxonomy        = coerceShopTaxonomy(categoriaRaw, subcategoriaRaw);

    if (!nombre) continue;
    if (isNaN(precio) || precio < 0) {
      summary.errors.push(`Precio inválido para "${nombre}": "${row[4] ?? ''}"`);
      continue;
    }

    try {
      let directMaterial:
        | {
            id: string;
            name: string;
            stackSize: number;
          }
        | null = null;
      let presentationType: PresentationType = 'custom';
      let presentationQuantity = 1;
      let presentationLabel: string | null = null;

      if (isNewFormat && materialBaseRaw) {
        directMaterial = await prisma.shopMaterial.findUnique({
          where: { guildId_name: { guildId, name: materialBaseRaw } },
          select: {
            id: true,
            name: true,
            stackSize: true,
          },
        });

        if (!directMaterial) {
          summary.notFound++;
          summary.notFoundNames?.push(materialBaseRaw);
          continue;
        }

        presentationType = parsePresentationTypeFromSheet(presentacionRaw || 'unidad');
        const customQuantity = parseOptionalInteger(cantidadBaseRaw);

        try {
          presentationQuantity = resolvePresentationQuantity({
            customQuantity,
            presentationType,
            stackSize: directMaterial.stackSize,
          });
        } catch (err) {
          summary.errors.push(
            `Presentación inválida para "${nombre}": ${err instanceof Error ? err.message : String(err)}`,
          );
          continue;
        }

        presentationLabel = etiquetaRaw || resolvePresentationLabel({
          presentationQuantity,
          presentationType,
          stackSize: directMaterial.stackSize,
        });
      } else if (isNewFormat && tipoRaw.trim().toLowerCase() === 'material') {
        summary.errors.push(`"${nombre}": los productos tipo material requieren "Material Base".`);
        continue;
      }

      const internalProductType = resolveInternalProductType({
        hasBaseMaterial: !!directMaterial,
        presentationType,
        rawType: tipoRaw,
      });

      const existing = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: nombre } },
        include: {
          prices: { where: { validTo: null }, take: 1 },
        },
      });

      if (!existing) {
        await prisma.$transaction(async tx => {
          const createdProduct = await tx.shopProduct.create({
            data: {
              guildId,
              name: nombre,
              productType: internalProductType,
              category: taxonomy.category,
              subcategory: taxonomy.subcategory,
              description: descripcion,
              isActive: activo,
              baseMaterialId: directMaterial?.id ?? null,
              presentationType: directMaterial ? presentationType : 'custom',
              presentationQuantity: directMaterial ? presentationQuantity : 1,
              presentationLabel: directMaterial ? presentationLabel : null,
              prices: { create: { price: precio, changedByUserId: staffUserId } },
            },
          });

          if (directMaterial) {
            await tx.shopProductComponent.upsert({
              where: {
                productId_materialId: {
                  productId: createdProduct.id,
                  materialId: directMaterial.id,
                },
              },
              update: { quantityRequired: presentationQuantity },
              create: {
                productId: createdProduct.id,
                materialId: directMaterial.id,
                quantityRequired: presentationQuantity,
              },
            });
          }
        });
        summary.created++;
        summary.createdNames?.push(nombre);
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

      if (isNewFormat) {
        const nextBaseMaterialId = directMaterial?.id ?? null;
        const nextPresentationType = directMaterial ? presentationType : 'custom';
        const nextPresentationQuantity = directMaterial ? presentationQuantity : 1;
        const nextPresentationLabel = directMaterial ? presentationLabel : null;

        if (
          existing.baseMaterialId !== nextBaseMaterialId
          || existing.presentationType !== nextPresentationType
          || existing.presentationQuantity !== nextPresentationQuantity
          || existing.presentationLabel !== nextPresentationLabel
          || existing.productType !== internalProductType
        ) {
          await prisma.$transaction(async tx => {
            await tx.shopProduct.update({
              where: { id: existing.id },
              data: {
                baseMaterialId: nextBaseMaterialId,
                presentationType: nextPresentationType,
                presentationQuantity: nextPresentationQuantity,
                presentationLabel: nextPresentationLabel,
                productType: internalProductType,
              },
            });

            if (existing.baseMaterialId && existing.baseMaterialId !== nextBaseMaterialId) {
              await tx.shopProductComponent.deleteMany({
                where: {
                  productId: existing.id,
                  materialId: existing.baseMaterialId,
                },
              });
            }

            if (directMaterial) {
              await tx.shopProductComponent.upsert({
                where: {
                  productId_materialId: {
                    productId: existing.id,
                    materialId: directMaterial.id,
                  },
                },
                update: { quantityRequired: presentationQuantity },
                create: {
                  productId: existing.id,
                  materialId: directMaterial.id,
                  quantityRequired: presentationQuantity,
                },
              });
            }
          });
          changed = true;
        }
      }

      if (
        existing.description !== descripcion ||
        existing.isActive !== activo ||
        existing.category !== taxonomy.category ||
        existing.subcategory !== taxonomy.subcategory ||
        (!isNewFormat && existing.productType !== internalProductType)
      ) {
        const data: {
          category: string;
          description: string | null;
          isActive: boolean;
          productType?: string;
          subcategory: string;
        } = {
          category: taxonomy.category,
          subcategory: taxonomy.subcategory,
          description: descripcion,
          isActive: activo,
        };

        if (!isNewFormat) {
          data.productType = internalProductType;
        }

        await prisma.shopProduct.update({
          where: { id: existing.id },
          data,
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
 * - Stock Base cambiado → ajuste con movimiento `manual_adjustment`.
 * - Alerta Mínima cambiada → actualiza el umbral.
 * - Si falta un material solo se crea automáticamente cuando la fila ya viene
 *   en el formato nuevo (incluye Stack Max).
 * - Las columnas Reservado y Disponible del Sheet se tratan como derivadas.
 * - La definición de unidad visual y stack max vive en el tab Materiales.
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
    const isNewFormat = row.length >= 7;
    const nombre = row[0]?.trim() ?? '';
    const unidadVisual = row[1]?.trim() || 'unidad';
    const stackSize = isNewFormat ? (parseOptionalInteger(row[2]) ?? null) : null;
    const stockNuevo = parseInt((isNewFormat ? row[3] : row[2])?.trim() ?? '0', 10);
    const alertaNueva = parseInt((isNewFormat ? row[6] : row[5])?.trim() ?? '0', 10);

    if (!nombre) continue;
    if (isNaN(stockNuevo) || stockNuevo < 0) {
      summary.errors.push(`Stock inválido para "${nombre}": "${isNewFormat ? row[3] : row[2]}"`);
      continue;
    }

    try {
      const material = await prisma.shopMaterial.findUnique({
        where:   { guildId_name: { guildId, name: nombre } },
        include: { inventory: true },
      });

      if (!material) {
        if (stackSize == null) {
          summary.notFound++;
          summary.notFoundNames?.push(nombre);
          continue;
        }

        await prisma.$transaction(async tx => {
          const createdMaterial = await tx.shopMaterial.create({
            data: {
              guildId,
              name: nombre,
              baseUnit: unidadVisual,
              stackSize,
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

      if (product.baseMaterialId === material.id) {
        summary.errors.push(
          `"${nombreProducto}" ya define "${nombreMaterial}" como material base en el tab Productos. Edita la presentación allí, no en Componentes.`,
        );
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

export async function importDescuentosFromSheet(
  guildId: string,
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

  const rows = await readTab('descuentos');

  for (const row of rows) {
    const id = row[0]?.trim() ?? '';
    const name = row[1]?.trim() ?? '';
    const policyType = row[2]?.trim().toLowerCase() ?? '';
    const productName = row[3]?.trim() ?? '';
    const minQuantityRaw = row[4]?.trim() ?? '';
    const scope = (row[5]?.trim().toLowerCase() || 'order');
    const discountType = (row[6]?.trim().toLowerCase() || 'percent');
    const discountValueRaw = (row[7] ?? '0').replace(',', '.');
    const priorityRaw = row[8]?.trim() ?? '0';
    const startsAt = parseOptionalDate(row[9]);
    const endsAt = parseOptionalDate(row[10]);
    const isActive = parseSheetBoolean(row[11], true);
    const description = row[12]?.trim() || null;

    if (!name && !policyType && !productName && !minQuantityRaw) continue;

    if (!name) {
      summary.errors.push('Fila de descuento sin nombre.');
      continue;
    }

    if (!['seasonal', 'volume'].includes(policyType)) {
      summary.errors.push(`"${name}": tipo de política inválido "${row[2] ?? ''}"`);
      continue;
    }

    if (!['item', 'order'].includes(scope)) {
      summary.errors.push(`"${name}": scope inválido "${row[5] ?? ''}"`);
      continue;
    }

    if (!['percent', 'fixed'].includes(discountType)) {
      summary.errors.push(`"${name}": tipo de descuento inválido "${row[6] ?? ''}"`);
      continue;
    }

    const discountValue = parseFloat(discountValueRaw);
    if (!Number.isFinite(discountValue) || discountValue < 0) {
      summary.errors.push(`"${name}": valor de descuento inválido "${row[7] ?? ''}"`);
      continue;
    }

    const priority = parseInt(priorityRaw, 10);
    if (!Number.isFinite(priority)) {
      summary.errors.push(`"${name}": prioridad inválida "${row[8] ?? ''}"`);
      continue;
    }

    let minQuantity: number | null = null;
    if (minQuantityRaw) {
      minQuantity = parseInt(minQuantityRaw, 10);
      if (!Number.isFinite(minQuantity) || minQuantity <= 0) {
        summary.errors.push(`"${name}": cantidad mínima inválida "${row[4] ?? ''}"`);
        continue;
      }
    }

    if (policyType === 'volume' && scope !== 'item') {
      summary.errors.push(`"${name}": los descuentos por volumen deben usar scope "item".`);
      continue;
    }

    if (policyType === 'volume' && minQuantity == null) {
      summary.errors.push(`"${name}": falta la cantidad mínima para el descuento por volumen.`);
      continue;
    }

    let productId: string | null = null;
    if (productName) {
      const product = await prisma.shopProduct.findUnique({
        where: { guildId_name: { guildId, name: productName } },
      });

      if (!product) {
        summary.notFound++;
        summary.notFoundNames?.push(productName);
        continue;
      }

      productId = product.id;
    }

    if (policyType === 'volume' && !productId) {
      summary.errors.push(`"${name}": los descuentos por volumen requieren un producto.`);
      continue;
    }

    try {
      const existing = id
        ? await prisma.shopDiscountPolicy.findFirst({
            where: { guildId, id },
          })
        : await prisma.shopDiscountPolicy.findFirst({
            where: {
              guildId,
              name,
              policyType,
              productId,
              minQuantity,
              scope,
            },
          });

      const data = {
        description,
        discountType,
        discountValue,
        endsAt,
        guildId,
        isActive,
        minQuantity: policyType === 'volume' ? minQuantity : null,
        name,
        policyType,
        priority,
        productId: policyType === 'volume' ? productId : null,
        scope,
        startsAt,
      };

      if (!existing) {
        await prisma.shopDiscountPolicy.create({
          data: {
            ...data,
            createdByUserId: staffUserId,
            ...(id ? { id } : {}),
          },
        });
        summary.created++;
        summary.createdNames?.push(name);
        continue;
      }

      const unchanged =
        existing.name === data.name &&
        existing.description === data.description &&
        existing.policyType === data.policyType &&
        existing.productId === data.productId &&
        existing.minQuantity === data.minQuantity &&
        existing.scope === data.scope &&
        existing.discountType === data.discountType &&
        existing.discountValue.toString() === String(data.discountValue) &&
        existing.priority === data.priority &&
        (existing.startsAt?.toISOString() ?? null) === (data.startsAt?.toISOString() ?? null) &&
        (existing.endsAt?.toISOString() ?? null) === (data.endsAt?.toISOString() ?? null) &&
        existing.isActive === data.isActive;

      if (unchanged) {
        summary.unchanged++;
        continue;
      }

      await prisma.shopDiscountPolicy.update({
        where: { id: existing.id },
        data,
      });
      summary.updated++;
    } catch (err) {
      summary.errors.push(
        `Error en descuento "${name}": ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  return summary;
}
