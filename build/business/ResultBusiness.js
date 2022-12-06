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
exports.ResultBusiness = void 0;
const Result_1 = require("../model/Result");
const Competition_1 = require("../model/Competition");
class ResultBusiness {
    constructor(resultDatabase, competitionDatabase) {
        this.resultDatabase = resultDatabase;
        this.competitionDatabase = competitionDatabase;
        this.registerResult = (input) => __awaiter(this, void 0, void 0, function* () {
            const { competicao_id, atleta, value, unidade } = input;
            try {
                if (!competicao_id || !atleta || !value || !unidade) {
                    throw new Error("Insira corretamente a informação de 'atleta', 'value' e 'unidade'");
                }
                const competicao = yield this.competitionDatabase.getCompetitionById(competicao_id);
                if (competicao.status === Competition_1.STATUS.FINALIZADA) {
                    throw new Error("Não é possível aceitar cadastros de uma competição já finalizada");
                }
                const result = new Result_1.Result(competicao_id, atleta, value, unidade);
                yield this.resultDatabase.insertResult(result);
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
    }
}
exports.ResultBusiness = ResultBusiness;
//# sourceMappingURL=ResultBusiness.js.map