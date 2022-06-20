
import {Garden} from "./entities/Garden";

export default async function generatePlan(): Promise<Garden> {
    const garden = new Garden();
    garden.size = 5;
    await garden.save();

    return garden;
}