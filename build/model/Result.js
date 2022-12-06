"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.UNIDADE = void 0;
var UNIDADE;
(function (UNIDADE) {
    UNIDADE["s"] = "s";
    UNIDADE["m"] = "m";
})(UNIDADE = exports.UNIDADE || (exports.UNIDADE = {}));
class Result {
    constructor(competicao_id, atleta, value, unidade) {
        this.competicao_id = competicao_id;
        this.atleta = atleta;
        this.value = value;
        this.unidade = unidade;
    }
}
exports.Result = Result;
//# sourceMappingURL=Result.js.map