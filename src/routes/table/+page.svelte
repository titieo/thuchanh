<script>
	export let data;

	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => b.id - a.id);
	const inputDates = dates.map((ele) => ({
		created_at: ele.created_at,
		tara: ele.tara === null ? '' : ele.tara,
		taras_homage: ele.taras_homage === null ? '' : ele.taras_homage,
		lay_dai: ele.lay_dai === null ? '' : ele.lay_dai,
		hang_phuc: ele.hang_phuc === null ? '' : ele.hang_phuc,
		lhs: ele.lhs === null ? '' : ele.lhs,
		seven_lines: ele.seven_lines === null ? '' : ele.seven_lines,
		vo_niem: ele.vo_niem === null ? '' : ele.vo_niem,
	}));

	let sum = {
		title: 'Sum',
		tara: 0,
		taras_homage: 0,
		lay_dai: 'N/A',
		hang_phuc: 'N/A',
		lhs: 0,
		seven_lines: 0,
		vo_niem: 'N/A',
	};

	dates.forEach((ele) => {
		sum.tara += ele.tara;
		sum.taras_homage += ele.taras_homage;
		sum.lhs += ele.lhs;
		sum.seven_lines += ele.seven_lines;
	});
	// const sum = dates.map((ele) => {});
	const headers = Object.entries({
		created_at: 'Ngày',
		tara: 'Green Tara',
		taras_homage: '21 Tara Homages',
		lay_dai: 'Lạy Dài',
		vo_niem: 'An trú Vô Niệm',
		hang_phuc: 'Kiết Già Hàng Phục',
		lhs: 'Guru Rinpoche',
		seven_lines: 'Seven Lines Guru Rinpoche',
	});

	console.log(Object.entries(dates));
</script>

<svelte:head>
	<title>Thời Khoá Thực Hành</title>
</svelte:head>

<div
	class="flex flex-col overflow-y-scroll max-h-screen lg:overflow-x-hidden scrollbar scrollbar-rounded scrollbar-w-2px scrollbar-h-4px"
>
	<div
		class="overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar scrollbar-rounded scrollbar-w-2px scrollbar-h-4px"
	>
		<div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
			<div class="overflow-hidden">
				<table class="rounded-md min-w-full text-left text-sm font-light">
					<thead
						class="border-b font-medium font-title text-lg dark:border-neutral-500"
					>
						<tr>
							{#each headers as [content, title]}
								<th class="px-6 py-4">
									{title}
								</th>{/each}
						</tr>
					</thead>
					<tbody>
						<tr
							class="border-b font-medium font-title text-lg dark:border-neutral-500"
						>
							{#each Object.entries(sum) as [title, content]}
								<td class="whitespace-nowrap font-italic px-6 py-4">
									{#if title == 'tara'}
										{content} / {Math.ceil(1200000 / 108).toLocaleString('en', {
											useGrouping: true,
										})}
									{:else}
										{content}{/if}
								</td>
							{/each}
						</tr>
						{#each inputDates as date (date.id)}
							<tr
								class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 text-lg font-normal dark:border-neutral-500 dark:hover:bg-neutral-600"
							>
								{#each headers as [content, title]}
									<td class="whitespace-nowrap px-6 py-4">
										{#if date[content] === 0 && content === 'tara'}
											NQ Ngắn
										{:else}
											{date[content]}
										{/if}
									</td>
								{/each}
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<!-- <OpenMenu /> -->

<style>
	table {
		border-spacing: 0;
		border-top: 1px solid black;
		border-left: 1px solid black;
	}

	th,
	td {
		border-bottom: 1px solid black;
		border-right: 1px solid black;
		padding: 0.5rem;
	}
</style>
