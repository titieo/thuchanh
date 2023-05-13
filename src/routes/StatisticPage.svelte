<script>
	export let pictureName;
</script>

<div class="grid gap-4 grid-cols-[max-content_1fr] h-screen w-screen">
	<picture class="max-w-max">
		<source media="(min-width:650px)" srcset={pictureName} />
		<source media="(min-width:465px)" srcset={pictureName} />
		<img src={pictureName} alt="Flowers" style="width:auto;" class="h-screen" />
	</picture>
	<div
		class="px-4 py-10 scrollbar scrollbar-rounded overflow-y-scroll flex flex-col gap-4"
	>
		<slot />
	</div>
</div>
