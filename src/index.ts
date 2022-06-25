import { AppDataSource } from "./data-source";
import generateGardenFromRawGarden2dArray from "./logic";
import seedDb from "./seed";
import fs from "fs";

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
