"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompetitionSuccessDTO = exports.competition2 = exports.competition1 = void 0;
const Competition_1 = require("../../src/model/Competition");
const Competition_2 = require("../../src/model/Competition");
const Competition_3 = require("../../src/model/Competition");
exports.competition1 = new Competition_1.Competition("id_competition1", Competition_2.COMPETITION.DARDO, Competition_3.STATUS.FINALIZADA);
exports.competition2 = new Competition_1.Competition("id_competition2", Competition_2.COMPETITION._100M, Competition_3.STATUS.ACONTECENDO_AGORA);
exports.CompetitionSuccessDTO = {
    name: Competition_2.COMPETITION.DARDO,
    status: Competition_3.STATUS.ACONTECENDO_AGORA
};
//# sourceMappingURL=CompetitionMock.js.map