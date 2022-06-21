import { Garden } from "./entities/Garden";
import { Plant } from "./entities/Plant";
import { Field } from "./entities/Field";
import { Connection } from "typeorm";

export async function generateGardenForYears(
  dbContext: Connection,
  rawGarden2dArray: number[][],
  years: number
): Promise<number[][][]> {
  const plans: number[][][] = [[[]]];

  for (let i = 0; i < years; i++) {
    rawGarden2dArray = await generateGardenFromRawGarden2dArray(
      dbContext,
      rawGarden2dArray
    );
    plans.push(rawGarden2dArray);
  }

  return plans;
}

export default async function generateGardenFromRawGarden2dArray(
  dbContext: Connection,
  rawGarden2dArray: number[][]
): Promise<number[][]> {
  // make sure the input array is square
  if (rawGarden2dArray.some((col) => col.length != rawGarden2dArray.length)) {
    return new Promise((resolve, reject) => reject());
  }

  const garden = new Garden();
  garden.size = rawGarden2dArray.length;

  // Plants sorted descending by difficulty
  let plantsWeighted: Plant[] = await dbContext.manager.find(Plant);
  plantsWeighted.sort((p1, p2) => weighPlant(p1) - weighPlant(p2));

  // Find first valid Field (= array cell that contains 0)
  let firstFreeRow: number, firstFreeCol: number;
  firstFreeRow = rawGarden2dArray.findIndex((row) => {
    const hasPlantableField: boolean = row.some((col) => col == 0);
    if (hasPlantableField) firstFreeCol = row.indexOf(0);
    return hasPlantableField;
  });

  // Create field for most difficult plant
  const mostDifficult: Field = new Field();
  mostDifficult.plant = plantsWeighted[0];
  mostDifficult.garden = garden;
  mostDifficult.rowInGarden = firstFreeRow;
  mostDifficult.columnInGarden = firstFreeCol;
  await mostDifficult.save();
  rawGarden2dArray[firstFreeRow][firstFreeCol] = mostDifficult.plant.id;

  for (let i = firstFreeRow; i < rawGarden2dArray.length; i++) {
    for (let j = 0; j < rawGarden2dArray.length; j++) {
      // Make sure the current field is plantable
      if (rawGarden2dArray[i][j] < 0) continue;

      let workingField: Field;

      if (rawGarden2dArray[i][j] > 0) {
        workingField = garden.fields.find(
          (f) => f.rowInGarden == i && f.columnInGarden == j
        );
      } else {
        workingField = new Field();
        workingField.garden = garden;
        workingField.rowInGarden = i;
        workingField.columnInGarden = j;
      }

      await plantSuitingPlant(workingField, rawGarden2dArray, dbContext);
      await workingField.save();

      rawGarden2dArray[i][j] = workingField.plant.id;
    }
  }

  await garden.save();
  return rawGarden2dArray;
}

// Fill field with suiting plant based on surrounding plants
async function plantSuitingPlant(
  field: Field,
  gardenArray: number[][],
  db: Connection
): Promise<Plant> {
  // Get directly adjacent neighbors (top, right, bottom, left)
  const neighbors: Plant[] = [];
  for (let i = -1; i <= 1; i += 2) {
    getPlantAt(
      gardenArray,
      field.rowInGarden,
      field.columnInGarden + i,
      db
    ).then((res) => {
      if (res != null) neighbors.push(res);
    });
    getPlantAt(
      gardenArray,
      field.rowInGarden + i,
      field.columnInGarden,
      db
    ).then((res) => {
      if (res != null) neighbors.push(res);
    });
  }

  // Check each plant against algorithm and find plants which fulfill all criteria
  const plants = await db.manager.find(Plant);
  let possiblePlants: Plant[] = plants;

  plants.forEach((plant: Plant) => {
    // Make sure no two resource usage types are planted twice
    if (field.previousPlants != null) {
      // TODO: Maybe improve this later (probably not tho)
      if (
        field.previousPlants
          .slice(-2)
          .some((prev) => prev.resourceUsage == plant.resourceUsage)
      ) {
        possiblePlants = possiblePlants.filter((p) => p != plant);
      }
    }

    // Bad neighbors contain current plant
    if (neighbors.some((n) => n.badNeighbors.some((bad) => bad == plant))) {
      possiblePlants = possiblePlants.filter((p) => p != plant);
    }
  });

  // Find plants that are still plantable *and* are good neighbors
  let goodPlants = possiblePlants;
  possiblePlants.forEach((plant) => {
    if (!neighbors.some((n) => n.goodNeighbors.some((good) => good == plant))) {
      goodPlants = goodPlants.filter((p) => p != plant);
    }
  });

  if (goodPlants.length > 0) possiblePlants = goodPlants;
  else goodPlants = possiblePlants;

  possiblePlants.forEach((plant) => {
    if (!neighbors.some((n) => n.goodSuccessor.some((good) => good == plant))) {
      goodPlants = goodPlants.filter((p) => p != plant);
    }
  });

  if (goodPlants.length > 0) possiblePlants = goodPlants;

  return possiblePlants[0];
}

const getPlantAt = async (
  gardenArray: number[][],
  row: number,
  col: number,
  db: Connection
): Promise<Plant | null> => {
  // Check that the indezes aren't out of bounds
  if (row + col > gardenArray.length * 2) return null;

  const neighborId = gardenArray[row][col];
  if (neighborId <= 0) return null;

  return await db.manager.findOne(Plant, { id: neighborId });
};

const weighPlant = (plant: Plant): number => {
  return (
    plant.resourceUsage +
    (plant.lengthRequired + plant.widthRequired) / 10 +
    plant.badNeighbors.length
  );
};
