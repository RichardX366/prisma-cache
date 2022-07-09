import { PrismaClient } from '@prisma/client';

/**
 * Initiates caching for the given prisma client.
 * @param prisma Prisma client that will have caching enabled.
 * @param options Options for the caching.
 * @param options.expiration How long queries will take to expire in seconds. (default: 10 minutes)
 */
export default function prismaCache(
  prisma: PrismaClient,
  options?: { expiration?: number },
): void;
