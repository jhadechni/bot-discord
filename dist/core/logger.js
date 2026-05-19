import pino from 'pino';
import { env } from '../config/env.js';
export const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'SYS:HH:MM:ss',
        },
    },
    level: env.nodeEnv === 'production' ? 'info' : 'debug',
});
//# sourceMappingURL=logger.js.map