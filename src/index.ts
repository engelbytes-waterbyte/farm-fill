import { Field } from "@entities/Field";
import { Garden } from "@entities/Garden";
import { Plant } from "@entities/Plant";
import { AppDataSource } from "./data-source";
import { ConnectionManager, createConnection } from "typeorm";
import generateGardenFromRawGarden2dArray from "./logic";
import seedDb from "./seed";
const fs = require("fs");

const main = async (): Promise<any> => {
  await fs.unlink("./database.sqlite", () => {});
  const app = await AppDataSource;
  await seedDb(app);
  //garden can only be as long as wide
  const rawGarden2dArray: number[][] = [
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
  ];
  generateGardenFromRawGarden2dArray(app, rawGarden2dArray);
  return app;
};

main().catch((err) => {
  console.error(err);
});
