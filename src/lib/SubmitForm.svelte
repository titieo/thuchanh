<script lang="ts">
	// TODO: Typed form
	export let visible: boolean, form: any;
	import { fade } from 'svelte/transition';
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
	<button
		type="submit"
		class="relative inline-flex items-center justify-start inline-block px-8 py-4 overflow-hidden font-medium transition-all bg-green-600 rounded-full hover:bg-white group cursor-pointer col-start-1 row-start-5 justify-self-start self-center"
	>
		<span
			class="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"
		/>
		<span
			class="relative w-full text-left text-base text-white transition-colors duration-200 ease-in-out group-hover:text-green-600 text-lg"
			>Submit</span
		>
	</button>
</form>
