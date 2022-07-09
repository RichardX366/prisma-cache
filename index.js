module.exports = function prismaCache(prisma, cache) {
  prisma.$use(async (params, next) => {
    const { action, model, args } = params;
    if (
      action.includes('find') ||
      action === 'aggregate' ||
      action === 'count'
    ) {
      const key = `${model}${action}${JSON.stringify(args)}`;
      const cached = cache.get(key);
      if (cached) return cached;
      const result = await next(params);
      cache.set(key, result);
      return result;
    }
    if (action.includes('create')) {
      cache.del(
        cache
          .keys()
          .filter(
            (key) =>
              key.includes(model) &&
              !key.includes('Unique') &&
              !key.includes('First'),
          ),
      );
    } else if (action.includes('delete') || action.includes('upsert')) {
      cache.del(cache.keys().filter((key) => key.includes(model)));
    } else if (action.includes('update')) {
      cache.del(
        cache
          .keys()
          .filter((key) => key.includes(model) && !key.includes('count')),
      );
    }
    return next(params);
  });
};
