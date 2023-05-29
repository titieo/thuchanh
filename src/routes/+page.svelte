<script lang="ts">
	import { presetUno } from 'unocss';
	import { base } from '$app/paths';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';

	// export let data;
	// TODO: Check back on svelte-fullpage
</script>

<svelte:head>
	<title>Thực Hành</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<!-- <Fullpage> -->
<main
	class="grid h-screen w-screen overflow-y-hidden sm:grid-cols-[70vw_30vw] lg:grid-cols-[1.7fr_1fr] grid-rows-[45vh_55vh] font-title overflow-hidden bg-orange-200 dark:bg-gray-800"
>
	<!-- style="background-image: linear-gradient(to bottom right,#fdd9aa,#f1c89b)" -->
	<div class="text-center prose z-1 flex-col flex-center justify-self-center">
		<h1>KẾT QUẢ THỰC HÀNH</h1>
		<ThemeSwitch width={40} height={40} />
	</div>
	<div
		class="place-self-center z-1 flex lt-sm:text-xl text-lg lg:text-xl gap-4"
	>
		<a
			href="{base}/tara"
			class="flex flex-col items-center no-underline text-black dark:text-white font-bold"
		>
			<img
				class="w-18 h-18 md:(w-24 h-24) p-2 lg:(w-30 h-30) mb-2 bg-white dark:bg-dark rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out"
				src="{base}/tam-new.png"
				style="object-fit: cover;object-position: 50% 50%;;image-resolution: from-image;"
				alt=""
			/>
			Green Tara</a
		>
		<a
			href="{base}/guru_rinpoche"
			class="flex flex-col items-center no-underline text-black dark:text-white font-bold"
		>
			<img
				class="w-18 h-18 md:(w-24 h-24) p-2 lg:(w-30 h-30) mb-2 rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out bg-white dark:bg-dark"
				src="{base}/hung.png"
				style="object-fit: cover;object-position: center;"
				alt=""
			/>
			Guru Rinpoche</a
		>
		<a
			href="{base}/table"
			class="flex flex-col items-center no-underline text-black dark:text-white font-bold"
		>
			<!-- class="text-sm py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray text-dark-600 bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in" -->

			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				class="w-18 h-18 md:(w-24 h-24) p-2 lg:(w-30 h-30) mb-2 rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out bg-white dark:bg-dark"
				><path
					fill="currentColor"
					d="M3 8V3h19v5H3Zm5 2v11H3V10h5Zm14 11h-5V10h5v11Zm-7-11v11h-5V10h5Z"
				/></svg
			>Table</a
		>
	</div>
	<picture
		class="self-center justify-self-start col-start-1 lt-sm:(blur absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2) sm:(col-start-2 row-start-1 row-span-2)"
	>
		<source media="(min-width:650px)" srcset="{base}/eight_symbols.png" />
		<source media="(min-width:465px)" srcset="{base}/eight_symbols.png" />
		<img
			src="{base}/eight_symbols.png"
			alt="Flowers"
			style="width:auto;"
			class="lt-sm:(w-64 h-64) dark: lg:(w-106 h-106) khorlo animate-ping"
		/>
	</picture>
</main>

<style>
	@media (prefers-reduced-motion: reduce) {
		*,
		*::before,
		*::after {
			animation-duration: 0.01ms !important;
			animation-iteration-count: 1 !important;
			transition-duration: 0.01ms !important;
			scroll-behavior: auto !important;
		}
	}
	.khorlo {
		animation: spin 14s linear infinite;
	}
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
