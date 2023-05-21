<script>
	import { fly } from 'svelte/transition';
	export let menuVisible, visible;
	import { base } from '$app/paths';
	import ThemeSwitch from '$lib/ThemeSwitch.svelte';
	// export let menuVisible;
</script>

{#if menuVisible}
	<nav
		class="fixed gap-1 bottom-16 text-xs md:(text-sm bottom-21) right-2 rounded-md cursor-pointer p-4 flex flex-col border-gray-900 shadow border-2 min-w-[8rem] bg-white dark:bg-gray-500"
		transition:fly
	>
		<button
			on:click={() => ((visible = !visible), (menuVisible = false))}
			class="py-2 px-4 cursor-pointer rounded-md flex-center border-none gap-2 hover:border-gray bg-white hover:border-gray-900 hover:shadow transition-all ease-in dark:bg-gray-500 text-dark-600 dark:text-white"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M6 22q-.825 0-1.413-.588T4 20V4q0-.825.588-1.413T6 2h7.175q.4 0 .763.15t.637.425l4.85 4.85q.275.275.425.638t.15.762V11.1l-8 7.975V22H6Zm8.5 0q-.2 0-.35-.15T14 21.5v-1.2q0-.2.088-.4t.212-.325l4.85-4.875l2.15 2.1l-4.875 4.9q-.125.15-.325.225t-.4.075h-1.2Zm7.525-5.9L19.9 13.975l.7-.7q.3-.3.725-.3t.7.3l.7.725q.275.3.275.713t-.275.687l-.7.7ZM14 9h4l-5-5v4q0 .425.288.713T14 9Z"
				/></svg
			>Open Form</button
		>

		<a
			href="{base}/"
			class="py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in dark:bg-gray-500 text-dark-600 dark:text-white"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" /></svg
			>Home</a
		>
		<a
			href="{base}/table"
			class="py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray text-dark-600 bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in dark:bg-gray-500 text-dark-600 dark:text-white"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M3 8V3h19v5H3Zm5 2v11H3V10h5Zm14 11h-5V10h5v11Zm-7-11v11h-5V10h5Z"
				/></svg
			>Table</a
		>
		<a
			href="{base}/tara"
			class="py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in dark:bg-gray-500 text-dark-600 dark:text-white"
			>Green Tara</a
		>
		<a
			href="{base}/guru_rinpoche"
			class="py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in dark:bg-gray-500 text-dark-600 dark:text-white"
			>Guru Rinpoche</a
		>
		<ThemeSwitch />
	</nav>
{/if}

<div class="absolute bottom-1 right-1 sm:right-2 py-3 sm:max-w-xl mx-auto">
	<nav>
		<button
			class="rounded-full text-gray-500 w-10 h-10 md:w-14 md:h-14 relative focus:outline-none bg-white cursor-pointer"
			on:click={() => (menuVisible = !menuVisible)}
		>
			<span class="sr-only">Open main</span>
			<div
				class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<span
					aria-hidden="true"
					class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {menuVisible
						? 'rotate-45'
						: ' -translate-y-1.5'}"
				/>
				<span
					aria-hidden="true"
					class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {menuVisible
						? 'opacity-0'
						: ''}"
				/>
				<span
					aria-hidden="true"
					class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out {menuVisible
						? '-rotate-45'
						: ' translate-y-1.5'}"
				/>
			</div>
		</button>
	</nav>
</div>

<!-- <Theme /> -->
