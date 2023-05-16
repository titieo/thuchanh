<script>
	export let menuVisible;
</script>

<div class="absolute bottom-2 right-2 py-3 sm:max-w-xl mx-auto">
	<nav>
		<button
			class="rounded-full text-gray-500 w-14 h-14 relative focus:outline-none bg-white cursor-pointer"
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
