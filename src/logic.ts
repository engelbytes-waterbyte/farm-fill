import { DataSource } from "typeorm";
import { Garden } from "@entities/Garden";
import { Plant } from "@entities/Plant";
import { Field } from "@entities/Field";

export default async function generateGardenFromRawGarden2dArray(
  dbContext: DataSource,
  rawGarden2dArray: number[][]
): Promise<void> {
  const garden = new Garden();
  garden.size = rawGarden2dArray.length;

  const tempFields: Field[] = [];
  for (let i = 0; i < rawGarden2dArray.length; i++) {
    for (let j = 0; j < rawGarden2dArray.length; j++) {
      var newField: Field = new Field();
      newField
      try {
        if (rawGarden2dArray[i][j] != -1) {
          var p = getSuitingPlant(dbContext);
        }
      } catch (e) {}
    }
  }

  // garden = new Garden();

  garden.size = 5;
  await garden.save();
}

function getSuitingPlant(db: DataSource): Plant {
  // db.getRepository(Plant).findOne
  var plant: Plant = new Plant();
  //find plant with index y in database

  return new Plant();
}
