"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Field = void 0;
const typeorm_1 = require("typeorm");
const Garden_1 = require("./Garden");
const Plant_1 = require("./Plant");
let Field = class Field extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Field.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Field.prototype, "rowInGarden", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Field.prototype, "columnInGarden", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    (0, typeorm_1.ManyToOne)(() => Garden_1.Garden, (garden) => garden.fields),
    __metadata("design:type", Garden_1.Garden)
], Field.prototype, "garden", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-array", nullable: true }),
    __metadata("design:type", Array)
], Field.prototype, "previousPlants", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Plant_1.Plant, (plant) => plant.fields),
    __metadata("design:type", Plant_1.Plant)
], Field.prototype, "plant", void 0);
Field = __decorate([
    (0, typeorm_1.Entity)()
], Field);
exports.Field = Field;
