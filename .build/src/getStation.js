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
var _ = require('lodash');
const station = (stationId) => __awaiter(this, void 0, void 0, function* () {
    const data = yield (0, fetch_1.fetch)();
    const pickDestinationAndWait = (filtered) => {
        return filtered.map((pid) => {
            const range = [0, 1, 2, 3];
            const dests = Array.from(range, x => `Dest${x}`);
            const waits = Array.from(range, x => `Wait${x}`);
            return range.map((e) => {
                if (pid[dests[e]]) {
                    return {
                        destination: pid[dests[e]],
                        wait: pid[waits[e]]
                    };
                }
            });
        }).flat().filter(Boolean);
    };
    const filtered = data.data.value.filter((station) => station.TLAREF === stationId);
    const destinations = Array.from(new Set(filtered.map((pid) => [pid.Dest0, pid.Dest1, pid.Dest2, pid.Dest3]).flat().filter(Boolean)));
    return destinations.map((destination) => {
        const destinationsAndWaits = pickDestinationAndWait(filtered).map((departure) => {
            return departure.destination === destination && departure.wait;
        }).filter(Boolean);
        return {
            destination,
            wait: _.sortedUniq(destinationsAndWaits)
        };
    });
});
exports.station = station;
