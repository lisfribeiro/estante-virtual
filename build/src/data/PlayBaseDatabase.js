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
exports.PlayDataBase = void 0;
const Competition_1 = require("../model/Competition");
const BaseDatabase_1 = require("./BaseDatabase");
class PlayDataBase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'plays';
        this.TABLE_NAME2 = 'athlete';
        this.TABLE_NAME3 = 'competition';
        this.insertPlay = (play) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                    .insert(play);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.selectResultByIdCompetition = (id_competition) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                    .select("*")
                    .where({ id_competition: id_competition })
                    .join(this.TABLE_NAME3, "plays.id_competition", "competition.id");
                if (result.name === Competition_1.COMPETITION.DARDO) {
                    const result = yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                        .select("name", "unity")
                        .max('value as value')
                        .where({ id_competition: id_competition })
                        .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                        .groupBy("name", "unity");
                    return result;
                }
                else if (result.name === Competition_1.COMPETITION._100M) {
                    const result = yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                        .select("athlete.name", "plays.value", "plays.unity")
                        .where({ id_competition: id_competition })
                        .join(this.TABLE_NAME2, "plays.id_athlete", "athlete.id")
                        .orderBy("value");
                    return result;
                }
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.PlayDataBase = PlayDataBase;
//# sourceMappingURL=PlayBaseDatabase.js.map