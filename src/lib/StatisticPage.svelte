<script lang="ts">
	export let pictureName: string | undefined = undefined,
		reverse: boolean = false;
</script>

<div
	class="grid gap-y-2 sm:gap-y-4 h-screen w-screen"
	grid="cols-[max-content_1fr] lg:rows-[40vh_60vh]"
>
	<picture
		class="lt-sm:(blur brightness-120 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2) max-w-max row-start-1 row-end-2 {reverse
			? 'order-1 justify-self-end '
			: ''}"
	>
		<source media="(min-width:650px)" srcset={pictureName} />
		<source media="(min-width:465px)" srcset={pictureName} />
		<img src={pictureName} alt="Flowers" style="width:auto;" class="h-screen" />
	</picture>
	<slot />
</div>
