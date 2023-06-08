const config = {
  pg: {
    pgHost: process.env.PG_HOST,
    pgUser: process.env.PG_USER,
    pgPort: process.env.PG_PORT,
    pgDb: process.env.PG_DB,
    pgPass: process.env.PG_PASS,
    pgHost: process.env.PG_HOST,
    pgMaxClients: process.env.PG_MAX_CLIENTS,
    pgIdleTimeoutMs: process.env.PG_IDLE_TIMEOUT_MS,
    schema: process.env.SCHEMA,
  },
};

export { config };
