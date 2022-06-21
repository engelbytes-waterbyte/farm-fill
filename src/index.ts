import { createConnection } from "typeorm";
import generateGardenFromRawGarden2dArray from "./logic";
import seedDb from "./seed";

const main = async (): Promise<any> => {
  const app = await createConnection({
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
  
  //pflonzn eineschnoitzn
  await seedDb(app);

  //garden can only be as long as wide
  const rawGarden2dArray: number[][] = [
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
    [0, 0, 0, -1, -1],
  ];
  // generateGardenFromRawGarden2dArray(app, rawGarden2dArray);

  return app;
};

main().catch((err) => {
  console.error(err);
});
