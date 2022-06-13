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
const Field_1 = require("./entities/Field");
function seedDb() {
    return __awaiter(this, void 0, void 0, function* () {
        const field = new Field_1.Field();
        field.size = 10;
        yield field.save();
        const field2 = new Field_1.Field();
        field2.size = 10;
        yield field2.save();
        const field3 = new Field_1.Field();
        field3.size = 30;
        yield field3.save();
    });
}
exports.default = seedDb;
