"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = (0, typeorm_1.createConnection)({
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
