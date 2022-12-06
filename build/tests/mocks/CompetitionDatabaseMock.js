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
exports.CompetitionDatabaseMock = void 0;
const CompetitionMock_1 = require("./CompetitionMock");
class CompetitionDatabaseMock {
    constructor() {
        this.insertCompetition = (competition) => __awaiter(this, void 0, void 0, function* () {
            switch (competition.getId()) {
                case "id_mock":
                    return "Competição criada com sucesso!";
                default:
                    throw new Error("Error");
            }
        });
        this.selectCompetitionById = (id) => __awaiter(this, void 0, void 0, function* () {
            switch (id) {
                case "id_competition1":
                    return CompetitionMock_1.competition1;
                case "id_competition2":
                    return CompetitionMock_1.competition2;
                default:
                    return undefined;
            }
        });
        this.updateCompetition = (id) => __awaiter(this, void 0, void 0, function* () {
            switch (id) {
                case "id_mock":
                    return "Status modificado!";
                default:
                    return "Error";
            }
        });
        this.getCompetitionById = (id) => __awaiter(this, void 0, void 0, function* () {
            switch (id) {
                case "id_mock":
                    return CompetitionMock_1.competition2;
                default:
                    return undefined;
            }
        });
    }
}
exports.CompetitionDatabaseMock = CompetitionDatabaseMock;
//# sourceMappingURL=CompetitionDatabaseMock.js.map