<script>
	export let pictureName, reverse;
</script>

<div
	class="grid gap-4 h-screen w-screen"
	grid="cols-[max-content_1fr] rows-[40vh_60vh]"
>
	<picture
		class={reverse
			? 'order-1 justify-self-end max-w-max row-start-1 row-end-2'
			: 'max-w-max row-start-1 row-end-2'}
	>
		<source media="(min-width:650px)" srcset={pictureName} />
		<source media="(min-width:465px)" srcset={pictureName} />
		<img src={pictureName} alt="Flowers" style="width:auto;" class="h-screen" />
	</picture>

	<slot />
</div>
