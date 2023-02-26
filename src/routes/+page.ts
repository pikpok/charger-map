import { getGreenwayStations } from '../fetchers/greenway';
import { getOrlenStations } from '../fetchers/orlen';
import type { PageLoad } from './$types';

export const load = (async () => {
	return {
		orlen: await getOrlenStations(),
		greenway: await getGreenwayStations()
	};
}) satisfies PageLoad;
