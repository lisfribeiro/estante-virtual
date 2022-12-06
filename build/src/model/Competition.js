"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Competition = exports.COMPETITION = exports.STATUS = void 0;
var STATUS;
(function (STATUS) {
    STATUS["FINALIZADA"] = "FINALIZADA";
    STATUS["ACONTECENDO_AGORA"] = "ACONTECENDO AGORA";
    STATUS["N\u00C3O_INICIALIZADA"] = "N\u00C3O INICIALIZADA";
})(STATUS = exports.STATUS || (exports.STATUS = {}));
var COMPETITION;
(function (COMPETITION) {
    COMPETITION["_100M"] = "100m";
    COMPETITION["DARDO"] = "Lan\u00E7amento de dardo";
})(COMPETITION = exports.COMPETITION || (exports.COMPETITION = {}));
class Competition {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    getId() {
        return this.id;
    }
}
exports.Competition = Competition;
//# sourceMappingURL=Competition.js.map