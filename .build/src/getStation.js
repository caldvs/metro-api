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
exports.station = void 0;
const fetch_1 = require("./fetch");
const station = (stationId) => __awaiter(this, void 0, void 0, function* () {
    const data = yield (0, fetch_1.fetch)();
    console.log("🚀 | file: getStation.ts | line 5 | data", data.data.value);
    return data;
});
exports.station = station;
