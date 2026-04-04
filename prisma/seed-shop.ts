/**
 * seed-shop.ts — Datos de prueba para el módulo de tienda.
 * Ejecutar con:  npx tsx prisma/seed-shop.ts
 */

import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma  = new PrismaClient({ adapter });
const GUILD_ID = process.env.GUILD_ID ?? '1486504829755850764';
const PRODUCT_TYPES = ['single', 'bulk', 'kit', 'service'] as const;
const TARGET_PRODUCTS_PER_TYPE = 100;

async function main() {
  console.log('🌱 Sembrando datos de prueba de la tienda...\n');

  // ── 1. Usuarios ─────────────────────────────────────────────────────────────
  const staff = await prisma.shopUser.upsert({
    where:  { guildId_discordUserId: { guildId: GUILD_ID, discordUserId: '111111111111111111' } },
    update: {},
    create: {
      guildId:       GUILD_ID,
      discordUserId: '111111111111111111',
      username:      'StaffDemo',
      displayName:   'Staff Demo',
    },
  });

  const cliente1 = await prisma.shopUser.upsert({
    where:  { guildId_discordUserId: { guildId: GUILD_ID, discordUserId: '222222222222222222' } },
    update: {},
    create: {
      guildId:       GUILD_ID,
      discordUserId: '222222222222222222',
      username:      'Jugador1',
      displayName:   'Jugador Uno',
    },
  });

  const cliente2 = await prisma.shopUser.upsert({
    where:  { guildId_discordUserId: { guildId: GUILD_ID, discordUserId: '333333333333333333' } },
    update: {},
    create: {
      guildId:       GUILD_ID,
      discordUserId: '333333333333333333',
      username:      'Jugador2',
      displayName:   'Jugador Dos',
    },
  });

  console.log('✅ Usuarios creados');

  // ── 2. Materiales + inventario ────────────────────────────────────────────
  const materiales = [
    { name: 'piedra',         baseUnit: 'cofre_doble', stock: 20,   alert: 3  },
    { name: 'diamante',       baseUnit: 'item',        stock: 500,  alert: 50 },
    { name: 'hierro',         baseUnit: 'stack',       stock: 30,   alert: 5  },
    { name: 'madera',         baseUnit: 'cofre_doble', stock: 10,   alert: 2  },
    { name: 'antorcha',       baseUnit: 'stack',       stock: 15,   alert: 3  },
    { name: 'pan',            baseUnit: 'item',        stock: 1024, alert: 64 },
    { name: 'pico_diamante',  baseUnit: 'item',        stock: 20,   alert: 5  },
    { name: 'espada_hierro',  baseUnit: 'item',        stock: 10,   alert: 2  },
    { name: 'cofre',          baseUnit: 'item',        stock: 200,  alert: 20 },
  ];

  const matMap: Record<string, string> = {}; // name → id

  for (const m of materiales) {
    const mat = await prisma.shopMaterial.upsert({
      where:  { guildId_name: { guildId: GUILD_ID, name: m.name } },
      update: {},
      create: {
        guildId:  GUILD_ID,
        name:     m.name,
        baseUnit: m.baseUnit,
        inventory: {
          create: {
            guildId:      GUILD_ID,
            currentStock: m.stock,
            minStockAlert: m.alert,
          },
        },
      },
    });
    matMap[m.name] = mat.id;

    // Movimiento inicial de stock
    await prisma.shopInventoryMovement.create({
      data: {
        guildId:      GUILD_ID,
        materialId:   mat.id,
        movementType: 'stock_add',
        quantity:     m.stock,
        reason:       'Stock inicial (seed)',
        performedById: staff.id,
      },
    });
  }

  console.log('✅ Materiales e inventario creados');

  // ── 3. Productos ─────────────────────────────────────────────────────────
  type ProductDef = {
    name: string;
    type: typeof PRODUCT_TYPES[number];
    price: number;
    desc: string;
    components: Array<{ mat: string; qty: number }>;
  };

  const materialUnitPrice: Record<string, number> = {
    piedra:        500,
    diamante:      200,
    hierro:        400,
    madera:        300,
    antorcha:      120,
    pan:           25,
    pico_diamante: 1500,
    espada_hierro: 900,
    cofre:         80,
  };

  const labelForMaterial = (name: string) =>
    name
      .split('_')
      .map(part => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');

  const roundPrice = (price: number) => Math.max(50, Math.round(price / 50) * 50);

  const buildGeneratedProduct = (
    type: typeof PRODUCT_TYPES[number],
    serial: number,
  ): ProductDef => {
    if (type === 'service') {
      return {
        name:  `Servicio Seed ${String(serial).padStart(3, '0')}`,
        type,
        price: roundPrice(150 + serial * 15),
        desc:  '',
        components: [],
      };
    }

    if (type === 'kit') {
      const first  = materiales[(serial - 1) % materiales.length]!;
      const second = materiales[(serial + 1) % materiales.length]!;
      const third  = materiales[(serial + 4) % materiales.length]!;
      const components: Array<{ mat: string; qty: number }> = [
        { mat: first.name,  qty: 1 + (serial % 3) },
        { mat: second.name, qty: 1 + ((serial + 1) % 2) },
      ];

      if (serial % 2 === 0) {
        components.push({ mat: third.name, qty: 1 + (serial % 4) });
      }

      const price = roundPrice(
        components.reduce((sum, component) => {
          return sum + (materialUnitPrice[component.mat] ?? 100) * component.qty;
        }, 0) * 1.12,
      );

      return {
        name:  `Kit Seed ${String(serial).padStart(3, '0')}`,
        type,
        price,
        desc:  '',
        components,
      };
    }

    const material = materiales[(serial - 1) % materiales.length]!;
    const singleQuantities = material.baseUnit === 'item'
      ? [1, 2, 4, 8, 16, 32]
      : [1, 1, 2, 2, 3, 4];
    const bulkQuantities = material.baseUnit === 'item'
      ? [16, 32, 48, 64, 96, 128]
      : [1, 2, 3, 4, 5, 6];
    const quantity = type === 'single'
      ? singleQuantities[(serial - 1) % singleQuantities.length]!
      : bulkQuantities[(serial - 1) % bulkQuantities.length]!;
    const basePrice = (materialUnitPrice[material.name] ?? 100) * quantity;
    const price = type === 'single'
      ? roundPrice(basePrice)
      : roundPrice(basePrice * 0.9);

    return {
      name:  `${type === 'single' ? 'Single' : 'Bulk'} Seed ${String(serial).padStart(3, '0')} - ${labelForMaterial(material.name)} x${quantity}`,
      type,
      price,
      desc:  '',
      components: [{ mat: material.name, qty: quantity }],
    };
  };

  const completeProductsByType = (baseProducts: ProductDef[]) => {
    const products = [...baseProducts];
    const counts = new Map<typeof PRODUCT_TYPES[number], number>(
      PRODUCT_TYPES.map(type => [type, 0]),
    );

    for (const product of baseProducts) {
      counts.set(product.type, (counts.get(product.type) ?? 0) + 1);
    }

    for (const type of PRODUCT_TYPES) {
      let serial = 1;
      while ((counts.get(type) ?? 0) < TARGET_PRODUCTS_PER_TYPE) {
        const candidate = buildGeneratedProduct(type, serial);
        serial += 1;

        if (products.some(product => product.name === candidate.name)) continue;

        products.push(candidate);
        counts.set(type, (counts.get(type) ?? 0) + 1);
      }
    }

    return products;
  };

  const productosBase: ProductDef[] = [
    {
      name:  'Piedra x1 cofre doble',
      type:  'bulk',
      price: 500,
      desc:  '1 cofre doble de piedra',
      components: [{ mat: 'piedra', qty: 1 }],
    },
    {
      name:  'Diamante x16',
      type:  'single',
      price: 3200,
      desc:  '16 diamantes',
      components: [{ mat: 'diamante', qty: 16 }],
    },
    {
      name:  'Diamante x64',
      type:  'bulk',
      price: 12000,
      desc:  '64 diamantes (1 stack)',
      components: [{ mat: 'diamante', qty: 64 }],
    },
    {
      name:  'Hierro x1 stack',
      type:  'bulk',
      price: 400,
      desc:  '1 stack de lingotes de hierro',
      components: [{ mat: 'hierro', qty: 1 }],
    },
    {
      name:  'Kit Minero',
      type:  'kit',
      price: 1800,
      desc:  'Pico de diamante + 2 stacks de antorchas + 64 panes',
      components: [
        { mat: 'pico_diamante', qty: 1 },
        { mat: 'antorcha',      qty: 2 },
        { mat: 'pan',           qty: 64 },
      ],
    },
    {
      name:  'Kit Guerrero',
      type:  'kit',
      price: 2500,
      desc:  'Espada de hierro + 2 cofres + 32 panes',
      components: [
        { mat: 'espada_hierro', qty: 1 },
        { mat: 'cofre',         qty: 2 },
        { mat: 'pan',           qty: 32 },
      ],
    },
    {
      name:  'Madera x1 cofre doble',
      type:  'bulk',
      price: 300,
      desc:  '1 cofre doble de madera (cualquier tipo)',
      components: [{ mat: 'madera', qty: 1 }],
    },
    {
      name:  'Entrega a domicilio',
      type:  'service',
      price: 200,
      desc:  'El staff entrega el pedido directamente en tu base',
      components: [],
    },
  ];
  const productos = completeProductsByType(productosBase);

  const prodMap: Record<string, string> = {}; // name → id

  for (const p of productos) {
    const prod = await prisma.shopProduct.upsert({
      where:  { guildId_name: { guildId: GUILD_ID, name: p.name } },
      update: {},
      create: {
        guildId:     GUILD_ID,
        name:        p.name,
        productType: p.type,
        description: p.desc,
        isActive:    true,
        prices: {
          create: { price: p.price, changedByUserId: staff.id },
        },
      },
    });
    prodMap[p.name] = prod.id;

    for (const comp of p.components) {
      await prisma.shopProductComponent.upsert({
        where:  { productId_materialId: { productId: prod.id, materialId: matMap[comp.mat]! } },
        update: { quantityRequired: comp.qty },
        create: { productId: prod.id, materialId: matMap[comp.mat]!, quantityRequired: comp.qty },
      });
    }
  }

  console.log('✅ Productos y componentes creados');

  // ── 4. Pedidos de ejemplo ────────────────────────────────────────────────

  // Limpiar pedidos de seed anteriores (para idempotencia)
  const seedCodes = ['AQ-SEED01', 'AQ-SEED02', 'AQ-SEED03', 'AQ-SEED04'];
  const oldOrders = await prisma.shopOrder.findMany({
    where: { orderCode: { in: seedCodes } },
    select: { id: true },
  });
  const oldIds = oldOrders.map(o => o.id);
  if (oldIds.length > 0) {
    await prisma.shopSale.deleteMany({ where: { orderId: { in: oldIds } } });
    await prisma.shopOrderEvent.deleteMany({ where: { orderId: { in: oldIds } } });
    await prisma.shopInventoryMovement.deleteMany({ where: { relatedOrderId: { in: oldIds } } });
    await prisma.shopOrderItem.deleteMany({ where: { orderId: { in: oldIds } } });
    await prisma.shopOrder.deleteMany({ where: { id: { in: oldIds } } });
    // Restaurar stocks reservados que se crearon en seeds anteriores
    await prisma.shopInventory.updateMany({ where: { guildId: GUILD_ID }, data: { reservedStock: 0 } });
  }

  // Pedido 1: pendiente
  const order1 = await prisma.shopOrder.create({
    data: {
      guildId:        GUILD_ID,
      orderCode:      'AQ-SEED01',
      customerUserId: cliente1.id,
      status:         'pending',
      subtotalAmount: 3200,
      totalAmount:    3200,
      items: {
        create: {
          productId:     prodMap['Diamante x16']!,
          quantity:      1,
          unitPrice:     3200,
          grossLineTotal: 3200,
        },
      },
    },
  });
  await prisma.shopOrderEvent.create({
    data: { orderId: order1.id, eventType: 'created', newStatus: 'pending', performedById: cliente1.id },
  });

  // Pedido 2: aceptado (stock reservado)
  const order2 = await prisma.shopOrder.create({
    data: {
      guildId:          GUILD_ID,
      orderCode:        'AQ-SEED02',
      customerUserId:   cliente2.id,
      status:           'accepted',
      acceptedByUserId: staff.id,
      acceptedAt:       new Date(),
      subtotalAmount:   1800,
      totalAmount:      1800,
      items: {
        create: {
          productId:        prodMap['Kit Minero']!,
          quantity:         1,
          unitPrice:        1800,
          grossLineTotal:   1800,
          reservedQuantity: 1,
        },
      },
    },
  });
  // Reservar stock del Kit Minero: pico_diamante x1, antorcha x2, pan x64
  await prisma.shopInventory.update({
    where: { materialId: matMap['pico_diamante']! },
    data:  { reservedStock: { increment: 1 } },
  });
  await prisma.shopInventory.update({
    where: { materialId: matMap['antorcha']! },
    data:  { reservedStock: { increment: 2 } },
  });
  await prisma.shopInventory.update({
    where: { materialId: matMap['pan']! },
    data:  { reservedStock: { increment: 64 } },
  });
  for (const [mat, qty] of [['pico_diamante', 1], ['antorcha', 2], ['pan', 64]] as const) {
    await prisma.shopInventoryMovement.create({
      data: {
        guildId:        GUILD_ID,
        materialId:     matMap[mat]!,
        movementType:   'reserve',
        quantity:       qty,
        reason:         'Reserva pedido AQ-SEED02',
        relatedOrderId: order2.id,
        performedById:  staff.id,
      },
    });
  }
  await prisma.shopOrderEvent.create({
    data: { orderId: order2.id, eventType: 'created',  newStatus: 'pending',  performedById: cliente2.id },
  });
  await prisma.shopOrderEvent.create({
    data: { orderId: order2.id, eventType: 'accepted', oldStatus: 'pending', newStatus: 'accepted', performedById: staff.id },
  });

  // Pedido 3: cerrado (venta registrada)
  const order3 = await prisma.shopOrder.create({
    data: {
      guildId:         GUILD_ID,
      orderCode:       'AQ-SEED03',
      customerUserId:  cliente1.id,
      status:          'closed',
      acceptedByUserId: staff.id,
      closedByUserId:   staff.id,
      acceptedAt:      new Date(Date.now() - 2 * 24 * 3600_000),
      closedAt:        new Date(Date.now() - 1 * 24 * 3600_000),
      subtotalAmount:  1300,
      totalAmount:     1300,
      items: {
        create: [
          {
            productId:        prodMap['Hierro x1 stack']!,
            quantity:         2,
            unitPrice:        400,
            grossLineTotal:   800,
            reservedQuantity: 2,
            deliveredQuantity: 2,
          },
          {
            productId:        prodMap['Entrega a domicilio']!,
            quantity:         1,
            unitPrice:        200,
            grossLineTotal:   200,
            reservedQuantity: 0,
            deliveredQuantity: 1,
          },
          {
            productId:        prodMap['Madera x1 cofre doble']!,
            quantity:         1,
            unitPrice:        300,
            grossLineTotal:   300,
            reservedQuantity: 1,
            deliveredQuantity: 1,
          },
        ],
      },
    },
  });
  // Consumir stock
  await prisma.shopInventory.update({
    where: { materialId: matMap['hierro']! },
    data:  { currentStock: { decrement: 2 }, reservedStock: { decrement: 2 } },
  });
  await prisma.shopInventory.update({
    where: { materialId: matMap['madera']! },
    data:  { currentStock: { decrement: 1 }, reservedStock: { decrement: 1 } },
  });
  for (const [mat, qty] of [['hierro', 2], ['madera', 1]] as const) {
    await prisma.shopInventoryMovement.create({
      data: {
        guildId:        GUILD_ID,
        materialId:     matMap[mat]!,
        movementType:   'sale',
        quantity:       qty,
        reason:         'Venta pedido AQ-SEED03',
        relatedOrderId: order3.id,
        performedById:  staff.id,
      },
    });
  }
  await prisma.shopSale.create({
    data: {
      guildId:        GUILD_ID,
      orderId:        order3.id,
      buyerUserId:    cliente1.id,
      registeredById: staff.id,
      totalAmount:    1300,
      soldAt:         new Date(Date.now() - 1 * 24 * 3600_000),
    },
  });
  for (const [evt, old, nw] of [
    ['created', null, 'pending'],
    ['accepted', 'pending', 'accepted'],
    ['closed', 'accepted', 'closed'],
  ] as const) {
    await prisma.shopOrderEvent.create({
      data: { orderId: order3.id, eventType: evt, oldStatus: old ?? null, newStatus: nw, performedById: staff.id },
    });
  }

  // Pedido 4: rechazado
  const order4 = await prisma.shopOrder.create({
    data: {
      guildId:          GUILD_ID,
      orderCode:        'AQ-SEED04',
      customerUserId:   cliente2.id,
      status:           'rejected',
      rejectedByUserId: staff.id,
      rejectedAt:       new Date(Date.now() - 3 * 24 * 3600_000),
      rejectionReason:  'No hay suficiente stock en este momento.',
      subtotalAmount:   12000,
      totalAmount:      12000,
      items: {
        create: {
          productId:     prodMap['Diamante x64']!,
          quantity:      1,
          unitPrice:     12000,
          grossLineTotal: 12000,
        },
      },
    },
  });
  await prisma.shopOrderEvent.create({
    data: { orderId: order4.id, eventType: 'created',  newStatus: 'pending',  performedById: cliente2.id },
  });
  await prisma.shopOrderEvent.create({
    data: { orderId: order4.id, eventType: 'rejected', oldStatus: 'pending', newStatus: 'rejected', performedById: staff.id, notes: 'No hay suficiente stock en este momento.' },
  });

  console.log('✅ Pedidos de ejemplo creados (pending, accepted, closed, rejected)');

  console.log('\n✨ Seed completado.');
  console.log(`   Guild: ${GUILD_ID}`);
  console.log(`   Materiales: ${materiales.length} | Productos: ${productos.length} | Pedidos: 4`);
  console.log(
    `   Por tipo: ${PRODUCT_TYPES.map(type => `${type}:${productos.filter(product => product.type === type).length}`).join(' | ')}`,
  );
}

main()
  .catch(err => { console.error(err); process.exit(1); })
  .finally(() => prisma.$disconnect());
