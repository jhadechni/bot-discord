/**
 * seed-shop.ts — Datos de prueba para el módulo de tienda.
 * Ejecutar con:  npx tsx prisma/seed-shop.ts
 */

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
// Taxonomía dinámica — seed usa categoría genérica. Ajusta categorías reales desde la BD o el panel administrativo.
const inferTaxonomyForMaterial = (_name: string) => ({ category: 'general', subcategory: 'otros' });
const inferTaxonomyForKit      = (_mats: string[]) => ({ category: 'general', subcategory: 'otros' });
const inferTaxonomyForService  = (_name: string) => ({ category: 'general', subcategory: 'otros' });
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma  = new PrismaClient({ adapter });

const GUILD_ID = process.env.GUILD_ID ?? '1486504829755850764';
const PRODUCT_TYPES = ['single', 'bulk', 'kit', 'service'] as const;
const TOTAL_USERS = 100;
const TOTAL_MATERIALS = 100;
const PRODUCTS_PER_TYPE = 25;
const TOTAL_CLOSED_ORDERS = 100;
const TOTAL_WITHDRAWALS = 100;
const BASE_DISCORD_USER_ID = 880000000000000000n;

type ProductType = typeof PRODUCT_TYPES[number];

type ProductDef = {
  name: string;
  type: ProductType;
  category: string;
  subcategory: string;
  price: number;
  desc: string;
  components: Array<{ mat: string; qty: number }>;
};

type CreatedUser = {
  id: string;
  discordUserId: string;
  username: string;
  displayName: string;
};

type CreatedMaterial = {
  id: string;
  name: string;
  stock: number;
};

type CreatedProduct = ProductDef & { id: string };

const MATERIAL_NAMES = [
  'piedra',
  'piedra_lisa',
  'roca',
  'andesita',
  'andesita_pulida',
  'granito',
  'granito_pulido',
  'diorita',
  'diorita_pulida',
  'pizarra_profunda',
  'adoquin_pizarra',
  'ladrillos_pizarra',
  'toba',
  'calcita',
  'grava',
  'arena',
  'arenisca',
  'arenisca_cortada',
  'arenisca_roja',
  'tierra',
  'tierra_fertil',
  'barro',
  'adobe',
  'nieve',
  'hielo',
  'roble',
  'abedul',
  'abeto',
  'jungla',
  'acacia',
  'roble_oscuro',
  'mangle',
  'cerezo',
  'bambu',
  'hongo_carmesi',
  'hongo_distorsionado',
  'musgo',
  'hoja_roble',
  'hoja_abedul',
  'hoja_jungla',
  'cristal',
  'cristal_tintado',
  'terracota',
  'terracota_blanca',
  'terracota_roja',
  'terracota_azul',
  'hormigon_blanco',
  'hormigon_gris',
  'hormigon_negro',
  'hormigon_azul',
  'prismarina',
  'ladrillos_prismarina',
  'prismarina_oscura',
  'ladrillos_piedra',
  'ladrillos_piedra_agrietados',
  'ladrillos_nether',
  'verruga_nether',
  'basalto',
  'basalto_pulido',
  'piedra_negra',
  'ladrillos_piedra_negra',
  'cuarzo',
  'ladrillos_cuarzo',
  'bloque_cuarzo_liso',
  'end_stone',
  'purpur',
  'obsidiana',
  'obsidiana_llorosa',
  'magma',
  'glowstone',
  'carbon',
  'hierro',
  'oro',
  'cobre',
  'lapislazuli',
  'redstone',
  'esmeralda',
  'diamante',
  'netherita',
  'amatista',
  'cobre_cortado',
  'cobre_oxidado',
  'bloque_heno',
  'lana_blanca',
  'lana_gris',
  'lana_negra',
  'lana_azul',
  'lana_verde',
  'ladrillo',
  'bloque_ladrillo',
  'linterna_marina',
  'esponja',
  'esponja_humeda',
  'netherrack',
  'arena_almas',
  'tierra_almas',
  'piedra_end',
  'purpur_pilar',
  'algas_secas',
  'mosaico_bambu',
] as const;

const SERVICE_NAMES = [
  'Entrega express',
  'Entrega premium',
  'Escolta de entrega',
  'Mudanza de inventario',
  'Reabastecimiento rapido',
  'Transporte al spawn',
  'Transporte a base',
  'Logistica de clan',
  'Organizacion de almacen',
  'Clasificacion de cofres',
  'Armado de kit de guerra',
  'Armado de kit de mineria',
  'Armado de kit de construccion',
  'Reposicion de insumos',
  'Ayuda de farmeo',
  'Asistencia de construccion',
  'Mantenimiento de stock',
  'Despacho nocturno',
  'Despacho prioritario',
  'Despacho seguro',
  'Ruta de entrega',
  'Courier del nether',
  'Courier del end',
  'Mudanza de proyecto',
  'Servicio VIP de entrega',
] as const;

if (MATERIAL_NAMES.length < TOTAL_MATERIALS) {
  throw new Error(`Se requieren al menos ${TOTAL_MATERIALS} materiales base para el seed.`);
}

function labelize(value: string): string {
  return value
    .split('_')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function roundPrice(price: number): number {
  return Math.max(50, Math.round(price / 50) * 50);
}

function buildDiscordUserId(offset: number): string {
  return (BASE_DISCORD_USER_ID + BigInt(offset)).toString();
}

function materialUnitPrice(name: string): number {
  const index = MATERIAL_NAMES.indexOf(name as (typeof MATERIAL_NAMES)[number]);
  const safeIndex = index >= 0 ? index : 0;
  return 500 + (safeIndex % 10) * 75;
}

function buildProductDefs(materialNames: string[]): ProductDef[] {
  const products: ProductDef[] = [];

  for (let index = 0; index < PRODUCTS_PER_TYPE; index += 1) {
    const material = materialNames[index]!;
    const taxonomy = inferTaxonomyForMaterial(material);
    products.push({
      name:  `${labelize(material)} x1 cofre doble`,
      type:  'single',
      category: taxonomy.category,
      subcategory: taxonomy.subcategory,
      price: roundPrice(materialUnitPrice(material)),
      desc:  '',
      components: [{ mat: material, qty: 1 }],
    });
  }

  for (let index = 0; index < PRODUCTS_PER_TYPE; index += 1) {
    const material = materialNames[PRODUCTS_PER_TYPE + index]!;
    const quantity = 2 + (index % 4);
    const taxonomy = inferTaxonomyForMaterial(material);
    products.push({
      name:  `${labelize(material)} x${quantity} cofres dobles`,
      type:  'bulk',
      category: taxonomy.category,
      subcategory: taxonomy.subcategory,
      price: roundPrice(materialUnitPrice(material) * quantity * 0.92),
      desc:  '',
      components: [{ mat: material, qty: quantity }],
    });
  }

  for (let index = 0; index < PRODUCTS_PER_TYPE; index += 1) {
    const first  = materialNames[50 + index]!;
    const second = materialNames[75 + (index % 25)]!;
    const third  = materialNames[(index * 3) % materialNames.length]!;
    const components = [
      { mat: first, qty: 1 + (index % 2) },
      { mat: second, qty: 1 + ((index + 1) % 2) },
      { mat: third, qty: 1 + (index % 3) },
    ];
    const price = roundPrice(
      components.reduce((sum, component) => {
        return sum + materialUnitPrice(component.mat) * component.qty;
      }, 0) * 0.9,
    );
    const taxonomy = inferTaxonomyForKit(components.map(component => component.mat));

    products.push({
      name:  `Kit Seed ${String(index + 1).padStart(3, '0')} - ${labelize(first)}`,
      type:  'kit',
      category: taxonomy.category,
      subcategory: taxonomy.subcategory,
      price,
      desc:  '',
      components,
    });
  }

  for (let index = 0; index < PRODUCTS_PER_TYPE; index += 1) {
    const taxonomy = inferTaxonomyForService(SERVICE_NAMES[index]!);
    products.push({
      name:  `${SERVICE_NAMES[index]} Seed`,
      type:  'service',
      category: taxonomy.category,
      subcategory: taxonomy.subcategory,
      price: roundPrice(250 + index * 35),
      desc:  'Servicio manual del staff.',
      components: [],
    });
  }

  return products;
}

async function clearShopData() {
  const [orders, products] = await Promise.all([
    prisma.shopOrder.findMany({ where: { guildId: GUILD_ID }, select: { id: true } }),
    prisma.shopProduct.findMany({ where: { guildId: GUILD_ID }, select: { id: true } }),
  ]);

  const orderIds = orders.map(order => order.id);
  const productIds = products.map(product => product.id);

  if (orderIds.length > 0) {
    await prisma.shopOrderEvent.deleteMany({ where: { orderId: { in: orderIds } } });
    await prisma.shopSale.deleteMany({ where: { orderId: { in: orderIds } } });
    await prisma.shopOrderItem.deleteMany({ where: { orderId: { in: orderIds } } });
  }

  await prisma.shopInventoryMovement.deleteMany({ where: { guildId: GUILD_ID } });
  await prisma.shopWithdrawal.deleteMany({ where: { guildId: GUILD_ID } });

  if (orderIds.length > 0) {
    await prisma.shopOrder.deleteMany({ where: { id: { in: orderIds } } });
  }

  if (productIds.length > 0) {
    await prisma.shopProductPrice.deleteMany({ where: { productId: { in: productIds } } });
    await prisma.shopProductComponent.deleteMany({ where: { productId: { in: productIds } } });
  }

  await prisma.shopProduct.deleteMany({ where: { guildId: GUILD_ID } });
  await prisma.shopInventory.deleteMany({ where: { guildId: GUILD_ID } });
  await prisma.shopMaterial.deleteMany({ where: { guildId: GUILD_ID } });
  await prisma.shopUser.deleteMany({ where: { guildId: GUILD_ID } });
}

async function main() {
  console.log('🌱 Sembrando datos de prueba de la tienda...\n');
  console.log(`🧹 Eliminando datos previos de tienda para guild ${GUILD_ID}...`);
  await clearShopData();
  console.log('✅ Datos previos eliminados');

  // ── 1. Usuarios ─────────────────────────────────────────────────────────────
  const staff = await prisma.shopUser.create({
    data: {
      guildId:       GUILD_ID,
      discordUserId: '111111111111111111',
      username:      'StaffSeed',
      displayName:   'Staff Seed',
    },
  });

  const customers: CreatedUser[] = [];

  for (let index = 1; index < TOTAL_USERS; index += 1) {
    const sequence = String(index).padStart(3, '0');
    const user = await prisma.shopUser.create({
      data: {
        guildId:       GUILD_ID,
        discordUserId: buildDiscordUserId(index),
        username:      `ClienteSeed${sequence}`,
        displayName:   `Cliente Seed ${sequence}`,
      },
    });

    customers.push({
      id: user.id,
      discordUserId: user.discordUserId,
      username: user.username,
      displayName: user.displayName,
    });
  }

  console.log(`✅ Usuarios creados: ${1 + customers.length}`);

  // ── 2. Materiales + inventario ────────────────────────────────────────────
  const createdMaterials: CreatedMaterial[] = [];
  const materialIdByName: Record<string, string> = {};

  for (const [index, materialName] of MATERIAL_NAMES.slice(0, TOTAL_MATERIALS).entries()) {
    const stock = 300 + (index % 10) * 25;
    const alert = 10 + (index % 5) * 2;
    const material = await prisma.shopMaterial.create({
      data: {
        guildId:  GUILD_ID,
        name:     materialName,
        baseUnit: 'cofre_doble',
        inventory: {
          create: {
            guildId:       GUILD_ID,
            currentStock:  stock,
            reservedStock: 0,
            minStockAlert: alert,
          },
        },
      },
    });

    createdMaterials.push({ id: material.id, name: material.name, stock });
    materialIdByName[material.name] = material.id;

    await prisma.shopInventoryMovement.create({
      data: {
        guildId:       GUILD_ID,
        materialId:    material.id,
        movementType:  'stock_add',
        quantity:      stock,
        reason:        'Stock inicial completo de seed',
        performedById: staff.id,
      },
    });
  }

  console.log(`✅ Materiales creados: ${createdMaterials.length}`);

  // ── 3. Productos ───────────────────────────────────────────────────────────
  const productDefs = buildProductDefs(createdMaterials.map(material => material.name));
  const createdProducts: CreatedProduct[] = [];

  for (const productDef of productDefs) {
    const product = await prisma.shopProduct.create({
      data: {
        guildId:     GUILD_ID,
        name:        productDef.name,
        productType: productDef.type,
        category:    productDef.category,
        subcategory: productDef.subcategory,
        description: productDef.desc,
        isActive:    true,
        prices: {
          create: {
            price:           productDef.price,
            changedByUserId: staff.id,
          },
        },
        ...(productDef.components.length > 0
          ? {
              components: {
                create: productDef.components.map(component => ({
                  materialId:       materialIdByName[component.mat]!,
                  quantityRequired: component.qty,
                })),
              },
            }
          : {}),
      },
    });

    createdProducts.push({ ...productDef, id: product.id });
  }

  console.log(`✅ Productos creados: ${createdProducts.length}`);

  // ── 4. Pedidos completados + ventas ────────────────────────────────────────
  let totalOrderEvents = 0;
  let totalOrderItems = 0;
  let totalSales = 0;
  let totalSaleMovements = 0;

  for (let index = 0; index < TOTAL_CLOSED_ORDERS; index += 1) {
    const customer = customers[index % customers.length]!;
    const product = createdProducts[index % createdProducts.length]!;
    const quantity = product.type === 'service' ? 1 : 1 + (index % 2);
    const subtotal = product.price * quantity;
    const acceptedAt = new Date(Date.now() - (TOTAL_CLOSED_ORDERS - index) * 90 * 60_000);
    const completedAt = new Date(acceptedAt.getTime() + 45 * 60_000);
    const orderCode = `AQ-TST${String(index + 1).padStart(4, '0')}`;

    const order = await prisma.shopOrder.create({
      data: {
        guildId:          GUILD_ID,
        orderCode,
        customerUserId:   customer.id,
        status:           'completed',
        acceptedByUserId: staff.id,
        closedByUserId:   staff.id,
        subtotalAmount:   subtotal,
        totalDiscountAmount: 0,
        totalAmount:      subtotal,
        acceptedAt,
        closedAt: completedAt,
        items: {
          create: {
            productId:          product.id,
            quantity,
            unitPrice:          product.price,
            grossLineTotal:     subtotal,
            netLineTotal:       subtotal,
            reservedQuantity:   product.components.length > 0 ? quantity : 0,
            deliveredQuantity:  quantity,
          },
        },
      },
    });

    totalOrderItems += 1;

    await prisma.shopOrderEvent.create({
      data: {
        orderId:       order.id,
        eventType:     'order_created',
        newStatus:     'pending',
        performedById: customer.id,
      },
    });
    await prisma.shopOrderEvent.create({
      data: {
        orderId:       order.id,
        eventType:     'order_accepted',
        oldStatus:     'pending',
        newStatus:     'accepted',
        performedById: staff.id,
      },
    });
    await prisma.shopOrderEvent.create({
      data: {
        orderId:       order.id,
        eventType:     'order_completed',
        oldStatus:     'accepted',
        newStatus:     'completed',
        performedById: staff.id,
      },
    });
    totalOrderEvents += 3;

    for (const component of product.components) {
      const movementQuantity = component.qty * quantity;
      await prisma.shopInventory.update({
        where: { materialId: materialIdByName[component.mat]! },
        data:  { currentStock: { decrement: movementQuantity } },
      });
      await prisma.shopInventoryMovement.create({
        data: {
          guildId:        GUILD_ID,
          materialId:     materialIdByName[component.mat]!,
          movementType:   'sale',
          quantity:       movementQuantity,
          reason:         `Venta completada del pedido ${orderCode}`,
          relatedOrderId: order.id,
          performedById:  staff.id,
        },
      });
      totalSaleMovements += 1;
    }

    await prisma.shopSale.create({
      data: {
        guildId:        GUILD_ID,
        orderId:        order.id,
        buyerUserId:    customer.id,
        registeredById: staff.id,
        totalAmount:    subtotal,
        soldAt:         completedAt,
      },
    });
    totalSales += 1;
  }

  console.log(`✅ Pedidos completados creados: ${TOTAL_CLOSED_ORDERS}`);

  // ── 5. Retiros de inventario ───────────────────────────────────────────────
  let totalWithdrawals = 0;
  let totalWithdrawalMovements = 0;

  for (let index = 0; index < TOTAL_WITHDRAWALS; index += 1) {
    const material = createdMaterials[index % createdMaterials.length]!;
    const quantity = 1 + (index % 3);

    await prisma.shopInventory.update({
      where: { materialId: material.id },
      data:  { currentStock: { decrement: quantity } },
    });

    await prisma.shopWithdrawal.create({
      data: {
        guildId:       GUILD_ID,
        materialId:    material.id,
        quantity,
        reason:        `Retiro seed ${String(index + 1).padStart(3, '0')}`,
        performedById: staff.id,
      },
    });
    totalWithdrawals += 1;

    await prisma.shopInventoryMovement.create({
      data: {
        guildId:       GUILD_ID,
        materialId:    material.id,
        movementType:  'withdrawal',
        quantity,
        reason:        `Retiro seed ${String(index + 1).padStart(3, '0')}`,
        performedById: staff.id,
      },
    });
    totalWithdrawalMovements += 1;
  }

  console.log(`✅ Retiros creados: ${totalWithdrawals}`);

  const totalComponents = productDefs.reduce((sum, product) => sum + product.components.length, 0);
  const totalMovements = createdMaterials.length + totalSaleMovements + totalWithdrawalMovements;

  console.log('\n✨ Seed completado.');
  console.log(`   Guild: ${GUILD_ID}`);
  console.log(`   ShopUser: ${1 + customers.length}`);
  console.log(`   ShopMaterial: ${createdMaterials.length}`);
  console.log(`   ShopInventory: ${createdMaterials.length}`);
  console.log(`   ShopProduct: ${createdProducts.length}`);
  console.log(`   ShopProductPrice: ${createdProducts.length}`);
  console.log(`   ShopProductComponent: ${totalComponents}`);
  console.log(`   ShopOrder: ${TOTAL_CLOSED_ORDERS}`);
  console.log(`   ShopOrderItem: ${totalOrderItems}`);
  console.log(`   ShopSale: ${totalSales}`);
  console.log(`   ShopWithdrawal: ${totalWithdrawals}`);
  console.log(`   ShopOrderEvent: ${totalOrderEvents}`);
  console.log(`   ShopInventoryMovement: ${totalMovements}`);
}

main()
  .catch(err => { console.error(err); process.exit(1); })
  .finally(() => prisma.$disconnect());
