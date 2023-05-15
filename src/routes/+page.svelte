<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';
	import { base } from '$app/paths';
	// import allDates from '$lib/data.json';
	// import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	// TODO: Check back on svelte-fullpage
	// const startDate = dayjs('2023-05-02T00:00:00.000Z');
	// import dayjs from 'dayjs';

	let page = 0;
	let size = 10;
	// let dates = [];

	export let data;
	let { tData } = data;
	$: ({ tData } = data);
	tData.sort((a, b) => a.id - b.id); // b - a for reverse sort
	console.log(tData);
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<!-- <Fullpage> -->
<main
	style="background-color: #fdd9aa"
	class="grid h-screen w-screen overflow-y-hidden grid-cols-[2fr_1fr]"
>
	<!-- style="background-image: linear-gradient(to bottom right,#fdd9aa,#f1c89b)" -->
	<div class="place-self-center flex text-xl gap-2">
		<a href="{base}/tara" class="flex flex-col items-center">
			<img
				class="w-30 h-30 rounded-md hover:rounded-full duration-600 transition-all ease-out"
				src="tam.jpg"
				style="object-fit: cover;object-position: top;"
				alt=""
			/>
			Green Tara</a
		>
		<a href="{base}/guru_rinpoche" class="flex flex-col items-center">
			<img
				class="w-30 h-30 rounded-md hover:rounded-full duration-600 transition-all ease-in"
				src="hung.jpg"
				style="object-fit: cover;object-position: top;"
				alt=""
			/>
			Guru Rinpoche</a
		>
	</div>
	<picture class="justify-self-end self-end">
		<source media="(min-width:650px)" srcset="main.webp" />
		<source media="(min-width:465px)" srcset="main.webp" />
		<img src="main.webp" alt="Flowers" style="width:auto;" class="h-screen" />
	</picture>
</main>

<style>
	:global(body) {
		height: 100vh;
		overflow-x: hidden;
	}
</style>
