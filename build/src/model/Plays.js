"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plays = exports.UNITY = void 0;
var UNITY;
(function (UNITY) {
    UNITY["s"] = "s";
    UNITY["m"] = "m";
})(UNITY = exports.UNITY || (exports.UNITY = {}));
class Plays {
    constructor(id, id_competition, id_athlete, value, unity) {
        this.id = id;
        this.id_competition = id_competition;
        this.id_athlete = id_athlete;
        this.value = value;
        this.unity = unity;
    }
}
exports.Plays = Plays;
//# sourceMappingURL=Plays.js.map