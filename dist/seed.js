"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Field_entity_1 = require("./entities/Field.entity");
const Garden_entity_1 = require("./entities/Garden.entity");
const Plant_entity_1 = require("./entities/Plant.entity");
function seedDb(dbContext) {
    return __awaiter(this, void 0, void 0, function* () {
        clearDatabase(dbContext);
        yield insertPlants(dbContext);
    });
}
exports.default = seedDb;
function clearDatabase(db) {
    db.getRepository(Field_entity_1.Field).clear();
    db.getRepository(Garden_entity_1.Garden).clear();
}
function insertPlants(dbContext) {
    return __awaiter(this, void 0, void 0, function* () {
        const pea = new Plant_entity_1.Plant();
        pea.lengthRequired = 30;
        pea.widthRequired = 3;
        pea.resourceUsage = Plant_entity_1.ResourceUsageType.SCHWACHZEHRER;
        const cucumber = new Plant_entity_1.Plant();
        cucumber.lengthRequired = 100;
        cucumber.widthRequired = 30;
        cucumber.resourceUsage = Plant_entity_1.ResourceUsageType.STARKZEHRER;
        const potato = new Plant_entity_1.Plant();
        potato.lengthRequired = 30;
        potato.widthRequired = 60;
        potato.resourceUsage = Plant_entity_1.ResourceUsageType.STARKZEHRER;
        const tomato = new Plant_entity_1.Plant();
        tomato.lengthRequired = 80;
        tomato.widthRequired = 80;
        tomato.resourceUsage = Plant_entity_1.ResourceUsageType.STARKZEHRER;
        const onion = new Plant_entity_1.Plant();
        onion.lengthRequired = 30;
        onion.widthRequired = 10;
        onion.resourceUsage = Plant_entity_1.ResourceUsageType.MITTELZEHRER;
        const carrot = new Plant_entity_1.Plant();
        carrot.lengthRequired = 35;
        carrot.widthRequired = 3;
        carrot.resourceUsage = Plant_entity_1.ResourceUsageType.MITTELZEHRER;
        const zucchini = new Plant_entity_1.Plant();
        zucchini.lengthRequired = 100;
        zucchini.widthRequired = 100;
        zucchini.resourceUsage = Plant_entity_1.ResourceUsageType.STARKZEHRER;
        const salad = new Plant_entity_1.Plant();
        salad.lengthRequired = 25;
        salad.widthRequired = 2;
        salad.resourceUsage = Plant_entity_1.ResourceUsageType.SCHWACHZEHRER;
        const radish = new Plant_entity_1.Plant();
        radish.lengthRequired = 20;
        radish.widthRequired = 3;
        radish.resourceUsage = Plant_entity_1.ResourceUsageType.SCHWACHZEHRER;
        const kohlrabi = new Plant_entity_1.Plant();
        kohlrabi.lengthRequired = 30;
        kohlrabi.widthRequired = 25;
        kohlrabi.resourceUsage = Plant_entity_1.ResourceUsageType.MITTELZEHRER;
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
        yield pea.save();
        yield cucumber.save();
        yield potato.save();
        yield tomato.save();
        yield onion.save();
        yield carrot.save();
        yield zucchini.save();
        yield salad.save();
        yield radish.save();
        yield kohlrabi.save();
    });
}
