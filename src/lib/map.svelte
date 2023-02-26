<script lang="ts">
	import { LeafletMap, TileLayer, Marker, Tooltip } from 'svelte-leafletjs';
	import 'leaflet/dist/leaflet.css';

	interface MarkerData {
		lat: number;
		lng: number;
		name: string;
	}

	export let markers: MarkerData[];

	const mapOptions = {
		center: [51.620239, 20.974141] as [number, number],
		zoom: 6
	};

	const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	const tileLayerOptions = {
		minZoom: 0,
		maxZoom: 20,
		maxNativeZoom: 19,
		attribution: '© OpenStreetMap contributors'
	};
</script>

<div style="width: 100%; height: 800px;">
	<LeafletMap options={mapOptions}>
		<TileLayer url={tileUrl} options={tileLayerOptions} />

		{#each markers as marker}
			<Marker latLng={[marker.lat, marker.lng]}>
				<Tooltip>{marker.name}</Tooltip>
			</Marker>
		{/each}
	</LeafletMap>
</div>
