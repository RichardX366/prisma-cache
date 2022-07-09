import { PrismaClient } from '@prisma/client';
import NodeCache from 'node-cache';

export function prismaCache(prisma: PrismaClient, cache: NodeCache): void;
