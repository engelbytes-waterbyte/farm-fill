"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const logic_1 = require("./logic");
const seed_1 = require("./seed");
const fs = require("fs");
const main = async () => {
    await fs.unlink("./database.sqlite", () => { });
    const app = await data_source_1.AppDataSource;
    await (0, seed_1.default)(app);
    //garden can only be as long as wide
    const rawGarden2dArray = [
        [0, 0, 0, -1, -1],
        [0, 0, 0, -1, -1],
        [0, 0, 0, -1, -1],
        [0, 0, 0, -1, -1],
        [0, 0, 0, -1, -1],
    ];
    (0, logic_1.default)(app, rawGarden2dArray);
    return app;
};
main().catch((err) => {
    console.error(err);
});
