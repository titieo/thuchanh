<script>
	export let pictureName, reverse;
</script>

<div class="grid gap-4 grid-cols-[max-content_1fr] h-screen w-screen">
	<picture class={reverse ? 'order-1 justify-self-end max-w-max' : 'max-w-max'}>
		<source media="(min-width:650px)" srcset={pictureName} />
		<source media="(min-width:465px)" srcset={pictureName} />
		<img src={pictureName} alt="Flowers" style="width:auto;" class="h-screen" />
	</picture>
	<div
		class="scrollbar scrollbar-rounded overflow-y-scroll flex flex-col gap-4"
		p="x-4 y-10"
	>
		<slot />
	</div>
</div>
