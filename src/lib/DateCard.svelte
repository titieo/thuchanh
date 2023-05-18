<script>
	// import InfiniteScroll from 'svelte-infinite-scroll';
	import dayjs from 'dayjs';
	import customParseFormat from 'dayjs/plugin/customParseFormat';
	import { useMediaQuery } from 'svelte-breakpoints';

	const isMobile = useMediaQuery('(max-width: 768px)');
	// => Returns type Readable<boolean>

	dayjs.extend(customParseFormat);
	export let created_at, dates_length, order;
	// export let dates,order;
	$: created_date = created_at;
	$: if ($isMobile) {
		// console.log('desktop!');
		created_date = dayjs(created_at, 'DD/MM/YYYY').format('DD/MM');
	} else {
		created_date = created_at;
	}
</script>

<div
	class="card w-full group flex gap-4 items-center justify-between"
	style="order:{dates_length - order}"
>
	<!-- style="order:{dates.length - order}" -->
	<h3 class="text-sm sm:text-base md:text-lg font-title">
		{created_date}
	</h3>
	<slot />
	<!-- TODO: Infinite scroll -->
	<!-- <InfiniteScroll
		threshold={100}
		on:loadMore={() => page++}
		class="flex-shrink"
	/> -->
</div>

<style>
	.card {
		/* From https://css.glass */
		padding: 4px 1.5rem;
		background: rgba(255, 255, 255, 0.19);
		border-radius: 16px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(6.1px);
		-webkit-backdrop-filter: blur(6.1px);
		border: 1px solid rgba(255, 255, 255, 0.3);
	}
</style>
