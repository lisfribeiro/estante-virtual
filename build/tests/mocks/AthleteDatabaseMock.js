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
exports.AthleteDatabaseMock = void 0;
class AthleteDatabaseMock {
    constructor() {
        this.insertAthlete = (athlete) => __awaiter(this, void 0, void 0, function* () {
            switch (athlete.getId()) {
                case "id_mock":
                    return "Atleta adicionado com sucesso";
                default:
                    throw new Error("Error");
            }
        });
    }
}
exports.AthleteDatabaseMock = AthleteDatabaseMock;
//# sourceMappingURL=AthleteDatabaseMock.js.map