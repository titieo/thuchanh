<script>
	export let pictureName, reverse;
</script>

<div
	class="grid gap-4 h-screen w-screen"
	grid="cols-[max-content_1fr] rows-[1.5fr_2fr]"
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
	<div
		class="scrollbar scrollbar-rounded overflow-y-scroll max-h-[20rem] flex flex-col gap-4"
		p="x-4 y-4"
		m="t-4 r-10"
	>
		<slot />
	</div>
</div>
