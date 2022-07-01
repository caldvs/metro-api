const fetch = require('./fetch');
const transform = require('./transform');

export const station = async (stationId: string) => {
    const { data } = await fetch();
    const transformed = transform(data, stationId);
        
    return {
        version: `metro-api-${process.env.environment}`,
        transformed,
        firstAndLast: ['06:00', '23:59']
    }
}