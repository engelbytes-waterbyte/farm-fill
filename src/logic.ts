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
      newField;
      try {
        if (rawGarden2dArray[i][j] != -1) {
          var p = getSuitingPlant(dbContext);
        }
      } catch (e) {}
      tempFields.push(newField);
    }
  }

  await garden.save();
}

//get suiting plant based on surrounding plants
function getSuitingPlant(db: DataSource): Plant {
  return new Plant();
}
