<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';
	import { base } from '$app/paths';
	// import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	// TODO: Check back on svelte-fullpage
</script>

<svelte:head>
	<title>Thực Hành</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<!-- <Fullpage> -->
<main
	style="background-color: #fdd9aa"
	class="grid h-screen w-screen overflow-y-hidden sm:grid-cols-[70vw_30vw] lg:grid-cols-[2fr_1fr] grid-rows-[30vh_70vh] font-title"
>
	<!-- style="background-image: linear-gradient(to bottom right,#fdd9aa,#f1c89b)" -->
	<div class="text-center prose z-1 flex-center justify-self-center">
		<h1>KẾT QUẢ THỰC HÀNH</h1>
	</div>
	<div
		class="place-self-center z-1 flex lt-sm:text-xl text-lg lg:text-xl gap-4"
	>
		<a
			href="{base}/tara"
			class="flex flex-col items-center no-underline text-black font-bold"
		>
			<img
				class="w-20 h-20 md:(w-24 h-24) lg:(w-30 h-30) rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out"
				src="{base}/tam.png"
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
				class="w-20 h-20 md:(w-24 h-24) lg:(w-30 h-30) rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out"
				src="{base}/hung.jpg"
				style="object-fit: cover;object-position: center;"
				alt=""
			/>
			Guru Rinpoche</a
		>
		<a
			href="{base}/table"
			class="flex flex-col items-center no-underline text-black font-bold"
		>
			<!-- class="text-sm py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray text-dark-600 bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in" -->

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				class="w-18 h-18 md:(w-24 h-24) p-2 lg:(w-30 h-30) rounded-lg hover:rounded-3xl duration-200 transition-all ease-in-out bg-white"
				><path
					fill="currentColor"
					d="M3 8V3h19v5H3Zm5 2v11H3V10h5Zm14 11h-5V10h5v11Zm-7-11v11h-5V10h5Z"
				/></svg
			>Table</a
		>
	</div>
	<picture
		class="justify-self-end self-end col-start-1 lt-sm:(blur absolute top-0 left-0) sm:(col-start-2 row-start-1 row-span-2)"
	>
		<source media="(min-width:650px)" srcset="{base}/main.webp" />
		<source media="(min-width:465px)" srcset="{base}/main.webp" />
		<img
			src="{base}/main.webp"
			alt="Flowers"
			style="width:auto;"
			class="h-screen"
		/>
	</picture>
</main>

<style>
	:global(body) {
		height: 100vh;
		overflow-x: hidden;
	}
</style>
