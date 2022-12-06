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
exports.CompetitionController = void 0;
class CompetitionController {
    constructor(competitionBusiness) {
        this.competitionBusiness = competitionBusiness;
        this.createCompetition = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, status } = req.body;
                const input = {
                    name,
                    status
                };
                yield this.competitionBusiness.createCompetition(input);
                res.status(201).send({ message: "Competição criada com sucesso!" });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
        this.putCompetitionById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const competitionId = yield this.competitionBusiness.putCompetitionById(id);
                res.status(200).send(competitionId);
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompetitionController = CompetitionController;
//# sourceMappingURL=CompetitionController.js.map