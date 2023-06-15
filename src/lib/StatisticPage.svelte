<script lang="ts">
	import { ZoomImg } from 'svelte-parts/zoom';
	import { mediaQuery } from 'svelte-legos';
	export let pictureName: string = '21_tara.webp',
		reverse: boolean = false;
	const isMobile = mediaQuery('(max-width: 768px)');
</script>

<div
	class="grid gap-y-2 sm:gap-y-4 h-screen w-screen"
	grid="cols-[max-content_1fr] lg:rows-[40vh_60vh]"
>
	{#if $isMobile}
		<picture
			class="lt-sm:(blur brightness-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2) max-w-max row-start-1 row-end-2 {reverse
				? 'order-1 justify-self-end '
				: ''}"
		>
			<source media="(min-width:650px)" srcset={pictureName} />
			<source media="(min-width:465px)" srcset={pictureName} />
			<img
				src={pictureName}
				alt="Flowers"
				style="width:auto;"
				class="h-screen"
			/>
		</picture>
	{:else}
		<div
			class="lt-sm:(blur brightness-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2) max-w-max row-start-1 row-end-2 h-screen {reverse
				? 'order-1 justify-self-end '
				: ''}"
		>
			<ZoomImg src={pictureName} width="40vw" alt={pictureName} />
		</div>
	{/if}
	<slot />
</div>
