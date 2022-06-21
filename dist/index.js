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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const seed_1 = __importDefault(require("./seed"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = yield data_source_1.AppDataSource.initialize();
    //pflonzn eineschnoitzn
    (0, seed_1.default)(app);
    // //garden can only be as long as wide
    // const rawGarden2dArray:number[][] = [
    //   [0, 0, 0, -1, -1],
    //   [0, 0, 0, -1, -1],
    //   [0, 0, 0, -1, -1],
    //   [0, 0, 0, -1, -1],
    //   [0, 0, 0, -1, -1],
    // ];
    // generateGardenFromRawGarden2dArray(app, rawGarden2dArray);
    return app;
});
main().catch((err) => {
    console.error(err);
});
