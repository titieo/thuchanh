<script>
	// import Date from './lib/Date.svelte';
	// import 'virtual:uno.css';
	// TODO: Check back on this
	import 'uno.css';
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

	import Tara from './Tara.svelte';
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
		<StatisticPage pictureName="0.green_tara.png">
			<Tara {page} {dates} {startDate} />
		</StatisticPage>
	</FullpageSection>
</Fullpage>

<style>
	:global(body) {
		height: 100vh;
	}
</style>
