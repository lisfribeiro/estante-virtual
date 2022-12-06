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
exports.AthleteController = void 0;
class AthleteController {
    constructor(athleteBusiness) {
        this.athleteBusiness = athleteBusiness;
        this.createAthlete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const input = {
                    name
                };
                yield this.athleteBusiness.createAthlete(input);
                res.status(201).send({ message: "Atleta criado com sucesso!" });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
    }
}
exports.AthleteController = AthleteController;
//# sourceMappingURL=AthleteController.js.map