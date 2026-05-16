import { PrismaPg } from '@prisma/adapter-pg';
import type { PoolConfig } from 'pg';
import { PrismaClient } from '../generated/prisma/client.js';
import { env } from '../config/env.js';
import { logger } from '../core/logger.js';

const poolConfig: PoolConfig = {
  connectionString: env.databaseUrl,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
  maxLifetimeSeconds: 300,
};

const adapter = new PrismaPg(poolConfig, {
  onPoolError: (err) => {
    logger.warn({ err }, 'Error en pool PostgreSQL inactivo');
  },
});

export const prisma = new PrismaClient({ adapter });
