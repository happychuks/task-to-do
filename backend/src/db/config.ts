export = {
  development: {
    client: "postgresql",
    connection: {
      host: "localhost",
      port: "5432",
      database: "todo_db",
      user: "happychuks",
      password: "happychuks123",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + "/migrations",
      tableName: "knex_migrations",
      extension: "ts",
    },
  },
} as { [key: string]: object };
