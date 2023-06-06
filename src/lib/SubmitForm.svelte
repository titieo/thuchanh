<script lang="ts">
	// TODO: Typed form
	import { fade } from 'svelte/transition';
	// let hidden = false;
	export let visible: boolean, form: any;
</script>

<div
	class="absolute top-0 left-0 bottom-0 right-0 cursor-pointer"
	backdrop="blur-md brightness-75"
	on:click={() => (visible = false)}
/>
<form
	use:form
	class="bg-dark-500 px-10 py-16 rounded gap-4 text-white grid
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	grid="cols-[1fr_1fr] rows-4"
	transition:fade={{ duration: 500 }}
>
	<slot />
	<!-- use:hotKeyAction={{
				code: 'Space',
				cb: handleClick,
			}} -->
	<button
		type="submit"
		class="px-3 py-1.5 sm:(px-4 py-2) relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block cursor-pointer font-bold text-base sm:text-lg flex-shrink w-max
       relative inline-flex cursor-pointer col-start-1 row-start-5 justify-self-start self-center"
	>
		<span
			class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"
		/>
		<span class="relative group-hover:text-white flex-center"
			>Submit<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				class="ml-1"
				><path
					fill="currentColor"
					d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
				/></svg
			></span
		>
	</button>
</form>
