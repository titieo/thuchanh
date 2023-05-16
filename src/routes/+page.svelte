<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';
	import { base } from '$app/paths';
	// import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	// TODO: Check back on svelte-fullpage
</script>

<svelte:head>
	<title>Tu tập</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<!-- <Fullpage> -->
<main
	style="background-color: #fdd9aa"
	class="grid h-screen w-screen overflow-y-hidden grid-cols-[2fr_1fr] grid-rows-[60vh_40vh]"
>
	<!-- style="background-image: linear-gradient(to bottom right,#fdd9aa,#f1c89b)" -->
	<div class="place-self-center flex text-xl gap-2">
		<a
			href="{base}/tara"
			class="flex flex-col items-center no-underline text-black font-bold"
		>
			<img
				class="w-30 h-30 rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out"
				src="tam.png"
				style="object-fit: cover;object-position: 50% 50%;;image-resolution: from-image;"
				alt=""
			/>
			Green Tara</a
		>
		<a
			href="{base}/guru_rinpoche"
			class="flex flex-col items-center no-underline text-black font-bold"
		>
			<img
				class="w-30 h-30 rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out"
				src="hung.jpg"
				style="object-fit: cover;object-position: top;"
				alt=""
			/>
			Guru Rinpoche</a
		>
	</div>
	<picture class="justify-self-end self-end col-start-2 row-start-1 row-span-2">
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
