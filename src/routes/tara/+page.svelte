<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';

	// import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	// TODO: Check back on svelte-fullpage
	import StatisticPage from '$lib/StatisticPage.svelte';
	import DateCard from '$lib/DateCard.svelte';

	let page = 0;
	let size = 10;
	// let dates = [];

	export let data;
	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => a.id - b.id); // b - a for reverse sort
	console.log(dates);
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<main style="height: 100vh" class="h-screen overflow-y-hidden">
	<StatisticPage pictureName="0.green_tara.png">
		{#each dates as { tara, taras_homage, created_at, lay_dai, lhs, hang_phuc, tam, qt_chu_tara }, i}
			<DateCard {page} {created_at}>
				<p class="text-base text-right">
					{tara ? tara * 108 : 0} Biến Green Tara ({hang_phuc ? hang_phuc : 0} Phút
					Kiết Già Hàng Phục) - Tán thán 21 Tara: {taras_homage
						? taras_homage
						: 0}
					Lần <br />
					Quán tưởng TAM: {tam ? tam : 0} Phút

					<!-- <li>Lạy dài: {lay_dai ? lay_dai : 0} Lần</li>
                        <li>Liên Hoa Sinh: {lhs ? lhs * 108 : 0} Biến</li>
                        <li>Kiết già hàng phục: {hang_phuc ? hang_phuc : 0} Phút</li>
                        <li>Quán chủng tự TAM: {tam ? tam : 0} Phút</li>
                        -->
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
