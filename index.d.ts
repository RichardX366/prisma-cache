import { PrismaClient } from '@prisma/client';
import NodeCache from 'node-cache';

export default function prismaCache(
  prisma: PrismaClient,
  cache: NodeCache,
): void;
