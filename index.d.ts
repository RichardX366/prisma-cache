import { PrismaClient } from '@prisma/client';

/**
 * Initiates caching for the given prisma client.
 * @param prisma Prisma client that will have caching enabled.
 * @param options Options for the caching.
 * @param {number} [options.expiration=600] How long queries will take to expire in seconds.
 */
export default function prismaCache(
  prisma: PrismaClient,
  options: { expiration: number },
): void;
