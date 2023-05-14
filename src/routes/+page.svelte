<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';

	// import allDates from '$lib/data.json';
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import StatisticPage from './StatisticPage.svelte';
	import DateCard from './DateCard.svelte';

	// const startDate = dayjs('2023-05-02T00:00:00.000Z');
	// import dayjs from 'dayjs';

	let page = 0;
	let size = 10;
	// let dates = [];

	export let data;
	let { tData } = data;
	$: ({ tData } = data);
	tData.sort((a, b) => a.id - b.id); // b - a for reverse sort
	// console.log('This is data');
	console.log(tData);
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<Fullpage>
	<FullpageSection style="background-color: #fdd9aa">
		<!-- style="background-image: linear-gradient(to bottom right,#fdd9aa,#f1c89b)" -->
		<div class="grid h-screen w-screen">
			<picture class="justify-self-end self-end">
				<source media="(min-width:650px)" srcset="main.webp" />
				<source media="(min-width:465px)" srcset="main.webp" />
				<img
					src="main.webp"
					alt="Flowers"
					style="width:auto;"
					class="h-screen"
				/>
			</picture>
		</div>
	</FullpageSection>

	<FullpageSection style="height: 100vh;">
		<FullpageSlide>
			<StatisticPage pictureName="0.green_tara.png">
				{#each tData as { tara, taras_homage, created_at, lay_dai, lhs, hang_phuc, tam, qt_chu_tara }, i}
					<DateCard {page} {created_at}>
						<p class="text-base text-right">
							{tara ? tara * 108 : 0} Biến Green Tara ({hang_phuc
								? hang_phuc
								: 0} Phút) - Tán thán 21 Tara: {taras_homage ? taras_homage : 0}
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
		</FullpageSlide>
		<FullpageSlide>
			<StatisticPage pictureName="guru_rinpoche.webp" reverse>
				<!-- {#each dates as { lhs, seven_lines }, i}
					<DateCard {page} {dates} {startDate} order={i}>
						<p class="text-base text-right">
							{lhs ? lhs * 108 : 0} Biến Guru Rinpoche ({lhs ? lhs : 0} Tràng) -
							Tán 7 dòng: {seven_lines ? seven_lines : 0} Lần
						</p></DateCard
					>
				{/each} -->
			</StatisticPage>
		</FullpageSlide>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
