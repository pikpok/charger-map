<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;

	let LeafletContainer: typeof import('../lib/map.svelte').default;
	onMount(async () => {
		if (browser) {
			LeafletContainer = (await import('../lib/map.svelte')).default;
		}
	});
</script>

{#if browser}
	<svelte:component
		this={LeafletContainer}
		markers={[
			...data.greenway.map((entry) => ({
				lat: entry.latitude,
				lng: entry.longitude,
				name: `Greenway: ${entry.name} ${entry.available}/${entry.total}`
			})),
			...data.orlen.map((entry) => ({
				lat: entry.Access.GPSLatitude,
				lng: entry.Access.GPSLongitude,
				name: `Orlen: ${entry.FriendlyName} ${entry.AvailableEvses}/${entry.TotalEvses}`
			}))
		]}
	/>
{/if}

<!-- {#each data.greenway as entry}
	<div>{entry.name}</div>
	<div>{entry.available}/{entry.total}</div>
{/each} -->

<!-- {#each data.orlen as entry}
	<div>{entry.FriendlyName}</div>
	<div>Available EVSEs: {entry.AvailableEvses}/{entry.TotalEvses}</div>
	<div>{JSON.stringify(entry)}</div>
{/each} -->
