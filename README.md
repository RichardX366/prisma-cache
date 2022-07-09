# Prisma Cache

Caches prisma queries for fetching any form of data (excluding raw) and handles uncaching when data is changed.

## Use

```js
const prisma = new PrismaClient();
const cache = new NodeCache({ stdTTL: 60 * 10 }); // Caches for 10 minutes

prismaCache(prisma, cache);
```
