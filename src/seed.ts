import { Field } from "./entities/Field";

export default async function seedDb() {
  const field = new Field();
  field.size = 10;
  await field.save();

  const field2 = new Field();
  field2.size = 10;
  await field2.save();

  const field3 = new Field();
  field3.size = 30;
  await field3.save();
}
