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
exports.ResultController = void 0;
class ResultController {
    constructor(resultBusiness) {
        this.resultBusiness = resultBusiness;
        this.registerResult = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { competicao_id } = req.params;
                const { atleta, value, unidade } = req.body;
                const input = {
                    competicao_id,
                    atleta,
                    value,
                    unidade
                };
                yield this.resultBusiness.registerResult(input);
                res.status(201).send({ message: "Resultado cadastrado com sucesso!" });
            }
            catch (error) {
                res.status(500).send(error.slqMessage || error.message);
            }
        });
    }
}
exports.ResultController = ResultController;
//# sourceMappingURL=ResultController.js.map