<script>
	import { fly } from 'svelte/transition';
	export let menuVisible, visible;
	import { base } from '$app/paths';
</script>

{#if menuVisible}
	<nav
		class="absolute gap-1 bottom-21 right-2 rounded-md cursor-pointer text-white p-4 flex flex-col border-gray-900 shadow border-2 min-w-[8rem]"
		transition:fly
	>
		<button
			on:click={() => ((visible = !visible), (menuVisible = false))}
			class="text-sm py-2 px-4 cursor-pointer rounded-md flex justify-center items-center border-none gap-2 hover:border-gray bg-white hover:border-gray-900 hover:shadow transition-all ease-in"
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
			class="text-sm py-2 px-4 cursor-pointer rounded-md flex items-center border-none gap-2 hover:border-gray text-dark-600 bg-white decoration-none hover:border-gray-900 hover:shadow transition-all ease-in"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" /></svg
			>Home</a
		>
	</nav>
{/if}
