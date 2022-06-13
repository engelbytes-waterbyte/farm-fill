import {Field} from "./entities/Field";

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
}
