<script>
	// import Date from './lib/Date.svelte';
	import 'virtual:uno.css';
	// TODO: Check back on this
	// import 'uno.css';
	import { presetUno } from 'unocss';
	import dayjs from 'dayjs';
	const startDate = dayjs('2023-05-02T00:00:00.000Z');
	import allDates from '$lib/data.json';
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import StatisticPage from './StatisticPage.svelte';

	let page = 0;
	let size = 20;
	let dates = [];

	$: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];

	import DateCard from './DateCard.svelte';
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

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
				{#each dates as { tara, taras_homage, lay_dai, lhs, hang_phuc, tam, chan_ngon }, i}
					<DateCard {page} {dates} {startDate} order={i}>
						<p class="text-base text-right">
							{tara ? tara * 108 : 0} Biến Green Tara ({tara ? tara : 0} Tràng) -
							Tán thán 21 Tara: {taras_homage ? taras_homage : 0} Lần <br />
							Quán tưởng chân ngôn Tara: {chan_ngon ? chan_ngon : 0} Phút

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
				{#each dates as { lhs, seven_lines }, i}
					<DateCard {page} {dates} {startDate} order={i}>
						<p class="text-base text-right">
							{lhs ? lhs * 108 : 0} Biến Guru Rinpoche ({lhs ? lhs : 0} Tràng) -
							Tán 7 dòng: {seven_lines ? seven_lines : 0} Lần
						</p></DateCard
					>
				{/each}
			</StatisticPage>
		</FullpageSlide>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
