import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";
import seedDb from "./seed";

const main = async (): Promise<DataSource> => {
  const app = await AppDataSource.initialize();
  console.log("ramba zamba");
  seedDb();
  return app;
};

main().catch((err) => {
  console.error(err);
});
