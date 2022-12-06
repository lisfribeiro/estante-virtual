"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const CompetitionBusiness_1 = require("./business/CompetitionBusiness");
const ResultBusiness_1 = require("./business/ResultBusiness");
const CompetitionController_1 = require("./controller/CompetitionController");
const ResultController_1 = require("./controller/ResultController");
const CompetitionDatabase_1 = require("./data/CompetitionDatabase");
const ResultDatabase_1 = require("./data/ResultDatabase");
const IdGenerator_1 = require("./services/IdGenerator");
const competitionController = new CompetitionController_1.CompetitionController(new CompetitionBusiness_1.CompetitionBusiness(new CompetitionDatabase_1.CompetitionDatabase, new IdGenerator_1.IdGenerator));
const resultController = new ResultController_1.ResultController(new ResultBusiness_1.ResultBusiness(new ResultDatabase_1.ResultDatabase, new CompetitionDatabase_1.CompetitionDatabase));
app_1.default.post("/competition", competitionController.createCompetition);
app_1.default.post("/result/:competicao_id", resultController.registerResult);
app_1.default.put("/competition/:id", competitionController.putCompetitionById);
//# sourceMappingURL=index.js.map