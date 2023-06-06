<script>
	import { createTable, Subscribe, Render } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	// import OpenMenu from '$lib/OpenMenu.svelte';
	export let data;

	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => a.id - b.id);
	const inputDates = dates.map((ele) => ({
		created_at: ele.created_at,
		tara: ele.tara === null ? '' : ele.tara,
		taras_homage: ele.taras_homage === null ? '' : ele.taras_homage,
		lay_dai: ele.lay_dai === null ? '' : ele.lay_dai,
		hang_phuc: ele.hang_phuc === null ? '' : ele.hang_phuc,
		lhs: ele.lhs === null ? '' : ele.lhs,
		seven_lines: ele.seven_lines === null ? '' : ele.seven_lines,
	}));
	const tableData = readable(inputDates);

	const table = createTable(tableData);
	const headerLabel = [
		'Thời gian',
		'Green Tara',
		'21 Tara Homages',
		'Lạy Dài',
		'Kiết Già Hàng Phục',
		'Guru Rinpoche',
		'Seven Lines Guru Rinpoche',
	];
	const headerAncesor = [
		'created_at',
		'tara',
		'taras_homage',
		'lay_dai',
		'hang_phuc',
		'lhs',
		'seven_lines',
	];

	const columns = table.createColumns([
		// headerLabel.map(label, (i) =>
		// 	table.column({
		// 		header: label,
		// 		accessor: headerAncesor[i],
		// 	})
		// )
		table.column({
			header: headerLabel[0],
			accessor: headerAncesor[0],
		}),
		table.column({
			header: headerLabel[1],
			accessor: headerAncesor[1],
		}),
		table.column({
			header: headerLabel[2],
			accessor: headerAncesor[2],
		}),
		table.column({
			header: headerLabel[3],
			accessor: headerAncesor[3],
		}),
		table.column({
			header: headerLabel[4],
			accessor: headerAncesor[4],
		}),
		table.column({
			header: headerLabel[5],
			accessor: headerAncesor[5],
		}),
		table.column({
			header: headerLabel[6],
			accessor: headerAncesor[6],
		}),
	]);

	const { headerRows, rows, tableAttrs, tableBodyAttrs } =
		table.createViewModel(columns);
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
				<table
					{...$tableAttrs}
					class="rounded-md min-w-full text-left text-sm font-light"
				>
					<thead
						class="border-b font-medium font-title text-lg dark:border-neutral-500"
					>
						{#each $headerRows as headerRow (headerRow.id)}
							<Subscribe rowAttrs={headerRow.attrs()} let:rowAttrs>
								<tr {...rowAttrs}>
									{#each headerRow.cells as cell (cell.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<th {...attrs} class="px-6 py-4">
												<Render of={cell.render()} />
											</th>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
						{/each}
					</thead>
					<tbody {...$tableBodyAttrs}>
						{#each $rows as row (row.id)}
							<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
								<tr
									{...rowAttrs}
									class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 text-lg font-normal dark:border-neutral-500 dark:hover:bg-neutral-600"
								>
									{#each row.cells as cell (cell.id)}
										<Subscribe attrs={cell.attrs()} let:attrs>
											<td class="whitespace-nowrap px-6 py-4" {...attrs}>
												<Render of={cell.render()} />
											</td>
										</Subscribe>
									{/each}
								</tr>
							</Subscribe>
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
