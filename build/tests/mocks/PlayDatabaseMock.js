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
exports.PlayDataBaseMock = void 0;
const PlayMock_1 = require("./PlayMock");
class PlayDataBaseMock {
    constructor() {
        this.selectResultByIdCompetition = (id_competition) => __awaiter(this, void 0, void 0, function* () {
            switch (id_competition) {
                case "id_competition1":
                    return PlayMock_1.play1;
                case "id_competition2":
                    return PlayMock_1.play2;
                default:
                    return undefined;
            }
        });
    }
}
exports.PlayDataBaseMock = PlayDataBaseMock;
//# sourceMappingURL=PlayDatabaseMock.js.map