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
exports.Garden = void 0;
const typeorm_1 = require("typeorm");
const Field_1 = require("./Field");
let Garden = class Garden extends typeorm_1.BaseEntity {
    id;
    size;
    fields;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Garden.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Garden.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "simple-json" }),
    (0, typeorm_1.OneToMany)(() => Field_1.Field, (field) => field.garden),
    __metadata("design:type", Array)
], Garden.prototype, "fields", void 0);
Garden = __decorate([
    (0, typeorm_1.Entity)()
], Garden);
exports.Garden = Garden;
