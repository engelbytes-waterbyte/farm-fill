import { createConnection } from "typeorm";

export const AppDataSource = createConnection({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
  // const conn = await createConnection({
  //   type: "postgres",
  //   url: process.env.DATABASE_URL,
  //   logging: true,
  //   // synchronize: true,
  //   migrations: [path.join(__dirname, "./migrations/*")],
  //   // entities: [Field],
  // });
});

// export const AppDataSourcePsql = createConnection({
//   type: "postgres",
//   host: "localhost",
//   synchronize: true,
//   port: 5432,
//   username: "postgres",
//   password: "postgres",
//   database: "farmfilldb",
//   logging: false,
//   entities: ["src/entities/*.ts"],
// });
