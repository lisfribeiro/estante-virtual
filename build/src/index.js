"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const AthleteBusiness_1 = require("./business/AthleteBusiness");
const CompetitionBusiness_1 = require("./business/CompetitionBusiness");
const PlayBusiness_1 = require("./business/PlayBusiness");
const AthleteController_1 = require("./controller/AthleteController");
const CompetitionController_1 = require("./controller/CompetitionController");
const PlayController_1 = require("./controller/PlayController");
const AthleteDatabase_1 = require("./data/AthleteDatabase");
const CompetitionDatabase_1 = require("./data/CompetitionDatabase");
const PlayBaseDatabase_1 = require("./data/PlayBaseDatabase");
const IdGenerator_1 = require("./services/IdGenerator");
const competitionController = new CompetitionController_1.CompetitionController(new CompetitionBusiness_1.CompetitionBusiness(new CompetitionDatabase_1.CompetitionDatabase, new IdGenerator_1.IdGenerator));
const athleteController = new AthleteController_1.AthleteController(new AthleteBusiness_1.AthleteBusiness(new AthleteDatabase_1.AthleteDatabase, new IdGenerator_1.IdGenerator));
const playController = new PlayController_1.PlayController(new PlayBusiness_1.PlayBusiness(new PlayBaseDatabase_1.PlayDataBase, new IdGenerator_1.IdGenerator, new CompetitionDatabase_1.CompetitionDatabase));
app_1.default.get("/:id_competition", playController.getResultByIdCompetition);
app_1.default.post("/competition", competitionController.createCompetition);
app_1.default.post("/athlete", athleteController.createAthlete);
app_1.default.post("/play/:id_competition/:id_athlete", playController.createPlay);
app_1.default.put("/competition/:id", competitionController.putCompetitionById);
//# sourceMappingURL=index.js.map