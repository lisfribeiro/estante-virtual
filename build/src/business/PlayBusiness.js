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
exports.PlayBusiness = void 0;
const Competition_1 = require("../model/Competition");
const Plays_1 = require("../model/Plays");
class PlayBusiness {
    constructor(playDatabase, idGenerator, competitionDatabase) {
        this.playDatabase = playDatabase;
        this.idGenerator = idGenerator;
        this.competitionDatabase = competitionDatabase;
        this.createPlay = (input) => __awaiter(this, void 0, void 0, function* () {
            const { id_competition, id_athlete, value, unity } = input;
            try {
                if (!id_competition || !id_athlete || !value || !unity) {
                    throw new Error("Insira corretamente a informação de 'id_competition', 'id_athlete', 'value' e 'unity'");
                }
                const competition = yield this.competitionDatabase.getCompetitionById(id_competition);
                if (competition.status === Competition_1.STATUS.FINALIZADA) {
                    throw new Error("Não é possível aceitar cadastros de uma competição já finalizada");
                }
                if (competition.name === Competition_1.COMPETITION.DARDO) {
                    if (unity !== Plays_1.UNITY.m) {
                        throw new Error("Essa unidade não é compatível com a competição");
                    }
                    for (let nameValue of input.value) {
                        const id = this.idGenerator.generateId();
                        const play = new Plays_1.Plays(id, id_competition, id_athlete, nameValue, unity);
                        if (value.length !== 3) {
                            throw new Error("Devem ser passados três resultados no 'value'");
                        }
                        yield this.playDatabase.insertPlay(play);
                    }
                }
                const id = this.idGenerator.generateId();
                if (competition.name === Competition_1.COMPETITION._100M) {
                    if (unity !== Plays_1.UNITY.s) {
                        throw new Error("Essa unidade não é compatível com a competição");
                    }
                    const play = new Plays_1.Plays(id, id_competition, id_athlete, Number(value), unity);
                    if (value.toString.length !== 1) {
                        throw new Error("Deve ser passado apenas um resultado no 'value'");
                    }
                    yield this.playDatabase.insertPlay(play);
                }
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
        this.getResultByIdCompetition = (id_competition) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!id_competition) {
                    throw new Error("Insira uma competição com esse id");
                }
                const resultDb = yield this.playDatabase.selectResultByIdCompetition(id_competition);
                if (!resultDb) {
                    throw new Error("Não existe competição com esse id");
                }
                return resultDb;
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
    }
}
exports.PlayBusiness = PlayBusiness;
//# sourceMappingURL=PlayBusiness.js.map