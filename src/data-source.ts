import { DataSource } from "typeorm";
import { Field } from "./entities/Field";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Field],
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
