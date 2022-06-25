#!/usr/bin/env node

import generateGardenFromRawGarden2dArray, {
  generateGardenForYears,
} from "./logic";
import seedDb from "./seed";
import { createConnection } from "typeorm";
import { Garden } from "./entities/Garden.entity";
import { Field } from "./entities/Field.entity";
import { Plant } from "./entities/Plant.entity";
import * as fs from "fs";
import yargs from "yargs";

yargs
  .scriptName("clitool4Farmfill")
  .usage("$0 run [options]")
  .command(
    "run [options]",
    "Run the script",
    (_) => {},
    async (argv) => {
      const startTime = +Date.now();

      await fs.unlink("./database.sqlite", () => {});
      const dbConnection = await createConnection({
        type: "sqlite",
        database: "database.sqlite",
        synchronize: true,
        logging: false,
        entities: [Garden, Field, Plant],
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

      //Seed the db.
      await seedDb(dbConnection);

      //garden can only be as long as wide
      const gardenArray: number[][] = [
        [-1, -1, -1, 0, 0],
        [-1, 0, 0, 0, 0],
        [-1, 0, 0, -1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, -1, -1],
      ];

      if (!argv.years) {
        generateGardenFromRawGarden2dArray(dbConnection, gardenArray).then(
          (x) => {
            print2DArray(x);
          }
        );
      }

      if (argv.years) {
        const years = +argv.years;
        if (years < 1) {
          console.log("Cannot generate plans for less than one year.");
          process.exit(0);
        }
        generateGardenForYears(dbConnection, gardenArray, +argv.years).then(
          (x) => {
            for (let i = 0; i < x.length; i++) {
              console.log(`Year ${years}.`);
              print2DArray(x[i]);
              console.log(
                `--------------------------------------------------------------------`
              );
            }
          }
        );
      }

      /*
            Not implemented (by algorithm team) due lack of time.

            if(argv.plans && !argv.years) {
                //GENERATE X PLANS FOR ONE YEAR
            }
            if(argv.plans && argv.years) {
                //GENERATE X PLANS FOR X YEARS
            }

        */

      if (argv.benchmark)
        console.log(
          "[BENCHMARK] It took " +
            (+Date.now() - startTime) +
            "ms to calculate those seeding plans."
        );
    }
  )
  .option("benchmark", {
    alias: "b",
    type: "boolean",
    description: "Run in Benchmark Mode",
  })
  /*
        See above.
        .option('plans', {
            alias: 'p',
            type: 'number',
            description: 'Run the tool for X plans'
        })
    */
  .option("years", {
    alias: "y",
    type: "number",
    description: "Run the tool for X years",
  })
  .help().argv;

function print2DArray(x: number[][]): void {
  for (let i = 0; i < x[i].length; i++) {
    for (let z = 0; z < x.length; z++) {
      console.log(x[z][i]);
    }
  }
}
