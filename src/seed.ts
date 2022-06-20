import {Field} from "./entities/Field";
import {Garden} from "./entities/Garden";

export default async function seedDb() {
    const garden = new Garden();
    garden.size = 10;
    await garden.save();

    const field = new Field();
    field.garden = garden;
    field.rowInGarden = 1;
    field.columnInGarden = 1;
    await field.save();

    const field2 = new Field();
    field2.garden = garden;
    field2.rowInGarden = 2;
    field2.columnInGarden = 2;
    await field2.save();

    const field3 = new Field();
    field3.garden = garden;
    field3.rowInGarden = 3;
    field3.columnInGarden = 3;
    await field3.save();
}
