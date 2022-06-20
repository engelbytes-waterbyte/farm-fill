import { Field } from "@entities/Field";
import { Garden } from "@entities/Garden";
import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";
import generatePlan from "./logic";
import seedDb from "./seed";

const main = async (): Promise<DataSource> => {
  const app: DataSource = await AppDataSource.initialize();

  //pflonzn eineschnoitzn
  seedDb(app);

  //garden can only be as long as wide
  const garden2dArray = [
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
  ];
  const garden = new Garden();
  garden.size = garden2dArray.length;

  generatePlan(app, garden);
  
  return app;
};

main().catch((err) => {
  console.error(err);
});
