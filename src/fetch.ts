import axios from 'axios';

export const fetch = async (station: string = '') => {
	let url = station ? `https://api.tfgm.com/odata/Metrolinks` : `https://api.tfgm.com/odata/Metrolinks` ;
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Credentials': 'true',
		'Ocp-Apim-Subscription-Key': process.env.TFGM_KEY,
		'responseType': 'json',
	}
	return await axios.get(
		url, { headers }
	)
}
