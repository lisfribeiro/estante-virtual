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
exports.AthleteBusiness = void 0;
const Athlete_1 = require("../model/Athlete");
class AthleteBusiness {
    constructor(athleteDataBase, idGenerator) {
        this.athleteDataBase = athleteDataBase;
        this.idGenerator = idGenerator;
        this.createAthlete = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name } = input;
            try {
                if (!name) {
                    throw new Error("Insira corretamente a informação de 'name'");
                }
                const id = this.idGenerator.generateId();
                const athlete = new Athlete_1.Athlete(id, name);
                yield this.athleteDataBase.insertAthlete(athlete);
            }
            catch (error) {
                throw new Error(error.slqMessage || error.message);
            }
        });
    }
}
exports.AthleteBusiness = AthleteBusiness;
//# sourceMappingURL=AthleteBusiness.js.map