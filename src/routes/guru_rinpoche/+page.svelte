<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';

	import StatisticPage from '$lib/StatisticPage.svelte';
	import DateCard from '$lib/DateCard.svelte';

	// const startDate = dayjs('2023-05-02T00:00:00.000Z');
	// import dayjs from 'dayjs';

	let page = 0;
	let size = 10;
	// let dates = [];

	export let data;
	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => a.id - b.id); // b - a for reverse sort
	console.log(dates);
	let dates_length = dates.length;
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<main class="overflow-y-hidden">
	<StatisticPage pictureName="guru_rinpoche.webp" reverse>
		{#each dates as { lhs, seven_lines, created_at }, i}
			<DateCard {page} {created_at} {dates_length} order={i}>
				<p class="text-base text-right">
					{lhs ? lhs : 0} Biến Guru Rinpoche - Tán 7 dòng: {seven_lines
						? seven_lines
						: 0} Lần
				</p></DateCard
			>
		{/each}
	</StatisticPage>
</main>

<style>
	:global(body) {
		height: 100vh;
		overflow-x: hidden;
	}
</style>
