import pino from 'pino';
import { env } from '../config/env.js';
const isDev = env.nodeEnv !== 'production';
export const logger = pino({ level: isDev ? 'debug' : 'info' }, isDev
    ? pino.transport({
        target: 'pino-pretty',
        options: { colorize: true, ignore: 'pid,hostname', translateTime: 'SYS:HH:MM:ss' },
    })
    : undefined);
//# sourceMappingURL=logger.js.map