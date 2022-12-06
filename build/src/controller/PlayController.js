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
exports.PlayController = void 0;
class PlayController {
    constructor(playBusiness) {
        this.playBusiness = playBusiness;
        this.createPlay = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_competition, id_athlete } = req.params;
            const { value, unity } = req.body;
            try {
                const input = {
                    id_competition,
                    id_athlete,
                    value,
                    unity
                };
                yield this.playBusiness.createPlay(input);
                res.status(201).send({ message: "Resultado cadastrado com sucesso!" });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
        this.getResultByIdCompetition = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id_competition } = req.params;
            try {
                const result = yield this.playBusiness.getResultByIdCompetition(id_competition);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.PlayController = PlayController;
//# sourceMappingURL=PlayController.js.map