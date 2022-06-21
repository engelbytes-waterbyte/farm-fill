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
const Field_1 = require("@entities/Field");
const Plant_1 = require("@entities/Plant");
const Garden_1 = require("@entities/Garden");
const ResourceUsage_1 = require("./entities/ResourceUsage");
function seedDb(dbContext) {
    return __awaiter(this, void 0, void 0, function* () {
        //bitte imma olles auslan, bevor ma wos eine duan
        clearDatabase(dbContext);
        const pea = new Plant_1.Plant();
        pea.lengthRequired = 30;
        pea.widthRequired = 3;
        pea.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.SCHWACHZEHRER;
        const cucumber = new Plant_1.Plant();
        cucumber.lengthRequired = 100;
        cucumber.widthRequired = 30;
        cucumber.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.STARKZEHRER;
        const potato = new Plant_1.Plant();
        potato.lengthRequired = 30;
        potato.widthRequired = 60;
        potato.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.STARKZEHRER;
        const tomato = new Plant_1.Plant();
        tomato.lengthRequired = 80;
        tomato.widthRequired = 80;
        tomato.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.STARKZEHRER;
        const onion = new Plant_1.Plant();
        onion.lengthRequired = 30;
        onion.widthRequired = 10;
        onion.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.MITTELZEHRER;
        const carrot = new Plant_1.Plant();
        carrot.lengthRequired = 35;
        carrot.widthRequired = 3;
        carrot.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.MITTELZEHRER;
        const zucchini = new Plant_1.Plant();
        zucchini.lengthRequired = 100;
        zucchini.widthRequired = 100;
        zucchini.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.STARKZEHRER;
        const salad = new Plant_1.Plant();
        salad.lengthRequired = 25;
        salad.widthRequired = 2;
        salad.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.SCHWACHZEHRER;
        const radish = new Plant_1.Plant();
        radish.lengthRequired = 20;
        radish.widthRequired = 3;
        radish.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.SCHWACHZEHRER;
        const kohlrabi = new Plant_1.Plant();
        kohlrabi.lengthRequired = 30;
        kohlrabi.widthRequired = 25;
        kohlrabi.resourceUsage.resourceUsageType = ResourceUsage_1.ResourceUsageType.MITTELZEHRER;
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
exports.default = seedDb;
function clearDatabase(db) {
    db.getRepository(Field_1.Field).clear();
    db.getRepository(Garden_1.Garden).clear();
}
