import { DataSource } from "typeorm";
import { AppDataSource } from "./data-source";

const main = async (): Promise<DataSource> => {
  const app = AppDataSource.initialize();
  console.log("ramba zamba");
  return app;
};

main().catch((err) => {
  console.error(err);
});
