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
exports.CompetitionDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class CompetitionDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = 'competition';
        this.insertCompetition = (competition) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                    .insert(competition);
                return "Competição criada com sucesso!";
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getCompetitionById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const [result] = yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                    .select("*")
                    .where({ id });
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.updateCompetition = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.BaseDatabase.connection(this.TABLE_NAME)
                    .update({ status: "FINALIZADA" })
                    .where({ id });
                return "Status modificado!";
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompetitionDatabase = CompetitionDatabase;
//# sourceMappingURL=CompetitionDatabase.js.map