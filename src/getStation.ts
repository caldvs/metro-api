import { fetch } from './fetch';

export const station = async (stationId: string) => {
    const data = await fetch();
    console.log("🚀 | file: getStation.ts | line 5 | data", data.data.value)
    return data;
}