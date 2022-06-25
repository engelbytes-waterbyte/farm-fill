"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = (0, typeorm_1.createConnection)({
    type: "sqlite",
    database: "database.sqlite",
    synchronize: true,
    logging: false,
    entities: [path_1.default.join(__dirname, "**", "*.entity.{ts,js}")],
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
