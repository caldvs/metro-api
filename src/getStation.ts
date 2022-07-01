const { fetch } = require('./fetch');
const { transform } = require('./transform');
import { DeparturesGroupedByDestination } from './transform';

type StationResponse = {
    version: string;
    departures: DeparturesGroupedByDestination[];
    messages: string[];
    firstAndLast: string[];
}

export const station = async (stationId: string): Promise<StationResponse> => {
    const { data } = await fetch();
    const { departures, messages } = transform(data, stationId);
    return {
        version: `metro-api-${process.env.environment}`,
        departures,
        messages,
        firstAndLast: ['06:00', '23:59']
    }
}