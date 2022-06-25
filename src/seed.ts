import { Connection } from "typeorm";
import { Field } from "./entities/Field.entity";
import { Garden } from "./entities/Garden.entity";
import { Plant, ResourceUsageType } from "./entities/Plant.entity";

export default async function seedDb(dbContext: Connection) {
  clearDatabase(dbContext);
  await insertPlants(dbContext);
}

function clearDatabase(db: Connection) {
  db.getRepository(Field).clear();
  db.getRepository(Garden).clear();
}

async function insertPlants(dbContext: Connection) {
  const pea = new Plant();
  pea.lengthRequired = 30;
  pea.widthRequired = 3;
  pea.resourceUsage = ResourceUsageType.SCHWACHZEHRER;
  const cucumber = new Plant();
  cucumber.lengthRequired = 100;
  cucumber.widthRequired = 30;
  cucumber.resourceUsage = ResourceUsageType.STARKZEHRER;
  const potato = new Plant();
  potato.lengthRequired = 30;
  potato.widthRequired = 60;
  potato.resourceUsage = ResourceUsageType.STARKZEHRER;
  const tomato = new Plant();
  tomato.lengthRequired = 80;
  tomato.widthRequired = 80;
  tomato.resourceUsage = ResourceUsageType.STARKZEHRER;
  const onion = new Plant();
  onion.lengthRequired = 30;
  onion.widthRequired = 10;
  onion.resourceUsage = ResourceUsageType.MITTELZEHRER;
  const carrot = new Plant();
  carrot.lengthRequired = 35;
  carrot.widthRequired = 3;
  carrot.resourceUsage = ResourceUsageType.MITTELZEHRER;
  const zucchini = new Plant();
  zucchini.lengthRequired = 100;
  zucchini.widthRequired = 100;
  zucchini.resourceUsage = ResourceUsageType.STARKZEHRER;
  const salad = new Plant();
  salad.lengthRequired = 25;
  salad.widthRequired = 2;
  salad.resourceUsage = ResourceUsageType.SCHWACHZEHRER;
  const radish = new Plant();
  radish.lengthRequired = 20;
  radish.widthRequired = 3;
  radish.resourceUsage = ResourceUsageType.SCHWACHZEHRER;
  const kohlrabi = new Plant();
  kohlrabi.lengthRequired = 30;
  kohlrabi.widthRequired = 25;
  kohlrabi.resourceUsage = ResourceUsageType.MITTELZEHRER;
  pea.goodSuccessor = [salad.id];
  pea.goodNeighbors = [
    cucumber.id,
    carrot.id,
    kohlrabi.id,
    salad.id,
    radish.id,
    zucchini.id,
  ];
  pea.badNeighbors = [potato.id, tomato.id, onion.id];
  cucumber.goodSuccessor = [salad.id];
  cucumber.goodNeighbors = [pea.id, salad.id, onion.id];
  cucumber.badNeighbors = [tomato.id, radish.id];
  potato.goodSuccessor = [];
  potato.goodNeighbors = [kohlrabi.id];
  potato.badNeighbors = [tomato.id];
  tomato.goodSuccessor = [];
  tomato.goodNeighbors = [pea.id, potato.id, salad.id, tomato.id, radish.id];
  tomato.badNeighbors = [];
  onion.goodSuccessor = [];
  onion.goodNeighbors = [salad.id, carrot.id];
  onion.badNeighbors = [pea.id];
  carrot.goodSuccessor = [];
  carrot.goodNeighbors = [pea.id, radish.id, tomato.id, onion.id];
  carrot.badNeighbors = [];
  zucchini.goodSuccessor = [];
  zucchini.goodNeighbors = [salad.id, carrot.id, radish.id, onion.id];
  zucchini.badNeighbors = [];
  salad.goodSuccessor = [radish.id];
  salad.goodNeighbors = [pea.id, cucumber.id, carrot.id, tomato.id, onion.id];
  salad.badNeighbors = [];
  radish.goodSuccessor = [salad.id];
  radish.goodNeighbors = [pea.id, salad.id, carrot.id];
  radish.badNeighbors = [cucumber.id];
  kohlrabi.goodSuccessor = [salad.id];
  kohlrabi.goodNeighbors = [pea.id, potato.id, salad.id, tomato.id, radish.id];
  kohlrabi.badNeighbors = [];
  await pea.save();
  await cucumber.save();
  await potato.save();
  await tomato.save();
  await onion.save();
  await carrot.save();
  await zucchini.save();
  await salad.save();
  await radish.save();
  await kohlrabi.save();
}
