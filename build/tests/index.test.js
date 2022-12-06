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
const PlayBusiness_1 = require("../src/business/PlayBusiness");
const CompetitionDatabaseMock_1 = require("./mocks/CompetitionDatabaseMock");
const IdGenerator_1 = require("./mocks/IdGenerator");
const PlayDatabaseMock_1 = require("./mocks/PlayDatabaseMock");
const PlayMock_1 = require("./mocks/PlayMock");
const CompetitionMock_1 = require("./mocks/CompetitionMock");
const CompetitionBusiness_1 = require("../src/business/CompetitionBusiness");
const AthleteBusiness_1 = require("../src/business/AthleteBusiness");
const AthleteDatabaseMock_1 = require("./mocks/AthleteDatabaseMock");
const athleteBusiness = new AthleteBusiness_1.AthleteBusiness(new AthleteDatabaseMock_1.AthleteDatabaseMock, new IdGenerator_1.IdGeneratorMock);
const playBusinessMock = new PlayBusiness_1.PlayBusiness(new PlayDatabaseMock_1.PlayDataBaseMock(), new IdGenerator_1.IdGeneratorMock(), new CompetitionDatabaseMock_1.CompetitionDatabaseMock());
const competitionBusinessMock = new CompetitionBusiness_1.CompetitionBusiness(new CompetitionDatabaseMock_1.CompetitionDatabaseMock(), new IdGenerator_1.IdGeneratorMock());
describe("tests of competition, athlete and plays table", () => {
    test("Insert competition, sucess", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield competitionBusinessMock.createCompetition(CompetitionMock_1.CompetitionSuccessDTO);
            expect(result).toBe("Competição criada com sucesso!");
        }
        catch (error) {
        }
    }));
    test("getResultByIdCompetition, empty id_competition parameter", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield playBusinessMock.getResultByIdCompetition("");
        }
        catch (error) {
            expect(error.message).toBe("Insira uma competição com esse id");
        }
    }));
    test("Sucess test getResultByIdCompetition", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const result = yield playBusinessMock.getResultByIdCompetition("id_competition1");
            console.log(result);
            expect(result).toBe(PlayMock_1.play1);
        }
        catch (error) {
        }
    }));
    test("Sucess test updateCompetition", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            const result = yield competitionBusinessMock.putCompetitionById("id_mock");
            expect(result).toBe("Status modificado!");
        }
        catch (error) {
            console.log(error);
        }
    }));
    test("puCompetitionById, empty id_competition parameter", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(1);
        try {
            yield competitionBusinessMock.putCompetitionById("");
        }
        catch (error) {
            expect(error.message).toBe("Insira uma competição com esse id");
        }
    }));
});
//# sourceMappingURL=index.test.js.map