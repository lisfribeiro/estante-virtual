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
exports.CompetitionBusiness = void 0;
const Competition_1 = require("../model/Competition");
class CompetitionBusiness {
    constructor(competitionDataBase, idGenerator) {
        this.competitionDataBase = competitionDataBase;
        this.idGenerator = idGenerator;
        this.createCompetition = (input) => __awaiter(this, void 0, void 0, function* () {
            let { name, status } = input;
            try {
                if (!name) {
                    throw new Error("Insira corretamente a informação de 'name'");
                }
                if (!status) {
                    status = Competition_1.STATUS.NÃO_INICIALIZADA;
                }
                if ((status === null || status === void 0 ? void 0 : status.toUpperCase()) === "FINALIZADA") {
                    status = Competition_1.STATUS.FINALIZADA;
                }
                if ((status === null || status === void 0 ? void 0 : status.toUpperCase()) === "ACONTECENDO AGORA") {
                    status = Competition_1.STATUS.ACONTECENDO_AGORA;
                }
                if ((status === null || status === void 0 ? void 0 : status.toUpperCase()) === "NÃO INICIALIZADA") {
                    status = Competition_1.STATUS.NÃO_INICIALIZADA;
                }
                if (status !== Competition_1.STATUS.FINALIZADA && status !== Competition_1.STATUS.ACONTECENDO_AGORA && status !== Competition_1.STATUS.NÃO_INICIALIZADA) {
                    throw new Error("O status passado é invalido. Preencha com os valores de FINALIZADA, ACONTECENDO AGORA OU NÃO INICIALIZADA");
                }
                if (name.toUpperCase() === "100m") {
                    name = Competition_1.COMPETITION._100M;
                }
                if (name.toUpperCase() === "Lançamento de dardo") {
                    name = Competition_1.COMPETITION.DARDO;
                }
                if (name !== Competition_1.COMPETITION._100M && name !== Competition_1.COMPETITION.DARDO) {
                    throw new Error("O name passado é inválido. Preencha com os valores de: 100m ou Lançamento de dardo");
                }
                const id = this.idGenerator.generateId();
                const competition = new Competition_1.Competition(id, name, status);
                yield this.competitionDataBase.insertCompetition(competition);
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
        this.putCompetitionById = (id) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id) {
                    throw new Error("Insira uma competição com esse id");
                }
                const competitionDb = yield this.competitionDataBase.getCompetitionById(id);
                if (!competitionDb) {
                    throw new Error("Não existe competição com esse id");
                }
                yield this.competitionDataBase.updateCompetition(id);
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
    }
}
exports.CompetitionBusiness = CompetitionBusiness;
//# sourceMappingURL=CompetitionBusiness.js.map