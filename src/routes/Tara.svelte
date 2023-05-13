<script>
	export let dates, startDate, page;
	import InfiniteScroll from 'svelte-infinite-scroll';
</script>

{#each dates as { tara, taras_homage, lay_dai, lhs, hang_phuc, tam, chan_ngon }, i}
	<div
		class="card max-h-[20rem] mr-16 flex gap-4 items-center justify-between"
		style="order:{dates.length - i}"
	>
		<h3 class="text-lg">
			{startDate.add(i, 'd').format('DD/MM/YYYY')}
		</h3>
		<p class="text-base text-right">
			{tara ? tara * 108 : 0} Biến Green Tara ({tara ? tara : 0} Tràng) - Tán thán
			21 Tara: {taras_homage ? taras_homage : 0} Lần <br />
			Quán tưởng chân ngôn Tara: {chan_ngon ? chan_ngon : 0} Phút

			<!-- <li>Lạy dài: {lay_dai ? lay_dai : 0} Lần</li>
			<li>Liên Hoa Sinh: {lhs ? lhs * 108 : 0} Biến</li>
			<li>Kiết già hàng phục: {hang_phuc ? hang_phuc : 0} Phút</li>
			<li>Quán chủng tự TAM: {tam ? tam : 0} Phút</li>
			-->
		</p>
		<InfiniteScroll
			threshold={100}
			on:loadMore={() => page++}
			class="flex-shrink"
		/>
	</div>
{/each}

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
