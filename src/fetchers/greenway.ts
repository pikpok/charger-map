interface GreenwayStation {
	location_id: number;
	latitude: number;
	longitude: number;
	partner_id: number;
	code: string;
	name: string;
	street: string;
	house_number: string;
	city: string;
	access_instructions: string;
	owner_type: string;
	max_power: number;
	total: number;
	available: number;
	availability: string;
}

const baseUrl = 'https://api.greenwaypolska.pl/api/location/map';
export const getGreenwayStations = async () => {
	const url = new URL(baseUrl);
	url.searchParams.set('max_power[from]', '1');
	url.searchParams.set('max_power[to]', '350');
	url.searchParams.set('connector_type[ccs_plug]', '1');
	url.searchParams.set('connector_type[chademo_plug]', '1');
	url.searchParams.set('connector_type[type2_plug]', '1');
	url.searchParams.set('connector_type[type2_socket]', '1');
	url.searchParams.set('spanLat', '33.889909976146875');
	url.searchParams.set('spanLng', '46.69189453125');
	url.searchParams.set('latitude', '42.48007004013098');
	url.searchParams.set('longitude', '-3.8272572673518255');

	const response = await fetch(url, {
		headers: {
			'User-Agent':
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0',
			Accept: 'application/json, text/plain, */*'
		},
		referrer: 'https://map.greenwaypolska.pl/',
		method: 'GET',
		mode: 'cors'
	});

	return (await response.json()) as GreenwayStation[];
};
