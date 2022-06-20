import {Field} from "./entities/Field";
import {Plant} from "./entities/Plant";
import {ResourceUsage, ResourceUsageType} from "./entities/ResourceUsage";

export default async function seedDb() {
    const field = new Field();
    field.rows = 10;
    field.columns = 10;
    await field.save();

    const field2 = new Field();
    field2.rows = 10;
    field2.columns = 10;
    await field2.save();

    const field3 = new Field();
    field3.rows = 30;
    field3.columns = 30;
    await field3.save();

    const pea = new Plant();
    pea.lengthRequired = 30;
    pea.widthRequired = 3;
    pea.resourceUsage.resourceUsageType = ResourceUsageType.SCHWACHZEHRER;

    const cucumber = new Plant();
    cucumber.lengthRequired = 100;
    cucumber.widthRequired = 30;
    cucumber.resourceUsage.resourceUsageType = ResourceUsageType.STARKZEHRER;

    const potato = new Plant();
    potato.lengthRequired = 30;
    potato.widthRequired = 60;
    potato.resourceUsage.resourceUsageType = ResourceUsageType.STARKZEHRER;

    const tomato = new Plant();
    tomato.lengthRequired = 80;
    tomato.widthRequired = 80;
    tomato.resourceUsage.resourceUsageType = ResourceUsageType.STARKZEHRER;

    const onion = new Plant();
    onion.lengthRequired = 30;
    onion.widthRequired = 10;
    onion.resourceUsage.resourceUsageType = ResourceUsageType.MITTELZEHRER;

    const carrot = new Plant();
    carrot.lengthRequired = 35;
    carrot.widthRequired = 3;
    carrot.resourceUsage.resourceUsageType = ResourceUsageType.MITTELZEHRER;

    const zucchini = new Plant();
    zucchini.lengthRequired = 100;
    zucchini.widthRequired = 100;
    zucchini.resourceUsage.resourceUsageType = ResourceUsageType.STARKZEHRER;

    const salad = new Plant();
    salad.lengthRequired = 25;
    salad.widthRequired = 2;
    salad.resourceUsage.resourceUsageType = ResourceUsageType.SCHWACHZEHRER;

    const radish = new Plant();
    radish.lengthRequired = 20;
    radish.widthRequired = 3;
    radish.resourceUsage.resourceUsageType = ResourceUsageType.SCHWACHZEHRER;

    const kohlrabi = new Plant();
    kohlrabi.lengthRequired = 30;
    kohlrabi.widthRequired = 25;
    kohlrabi.resourceUsage.resourceUsageType = ResourceUsageType.MITTELZEHRER;

    pea.goodSuccessor = [salad];
    pea.goodNeighbors = [cucumber, carrot, kohlrabi, salad, radish, zucchini];
    pea.badNeighbors = [potato, tomato, onion];

    cucumber.goodSuccessor = [salad];
    cucumber.goodNeighbors = [pea, salad, onion];
    cucumber.badNeighbors = [tomato, radish];

    potato.goodSuccessor = [];
    potato.goodNeighbors = [kohlrabi];
    potato.badNeighbors = [tomato];

    tomato.goodSuccessor = [];
    tomato.goodNeighbors = [pea, potato, salad, tomato, radish];
    tomato.badNeighbors = [];

    onion.goodSuccessor = [];
    onion.goodNeighbors = [salad, carrot];
    onion.badNeighbors = [pea];

    carrot.goodSuccessor = [];
    carrot.goodNeighbors = [pea, radish, tomato, onion];
    carrot.badNeighbors = [];

    zucchini.goodSuccessor = [];
    zucchini.goodNeighbors = [salad, carrot, radish, onion];
    zucchini.badNeighbors = [];

    salad.goodSuccessor = [radish];
    salad.goodNeighbors = [pea, cucumber, carrot, tomato, onion];
    salad.badNeighbors = [];

    radish.goodSuccessor = [salad];
    radish.goodNeighbors = [pea, salad, carrot];
    radish.badNeighbors = [cucumber];

    kohlrabi.goodSuccessor = [salad];
    kohlrabi.goodNeighbors = [pea, potato, salad, tomato, radish];
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
