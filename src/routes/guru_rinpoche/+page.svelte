<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';

	import { createForm } from 'felte';
	import { DateInput } from 'date-picker-svelte';
	import dayjs from 'dayjs';

	import StatisticPage from '$lib/StatisticPage.svelte';
	import DateCard from '$lib/DateCard.svelte';
	import { supabase } from '$lib/supabaseClient';
	import OpenMenu from '$lib/OpenMenu.svelte';
	// import OpenFormButton from '$lib/OpenFormButton.svelte';
	import SubmitForm from '$lib/SubmitForm.svelte';
	import StatisticLineGraph from '$lib/StatisticLineGraph.svelte';

	let page = 0;
	let size = 10;
	let visible = false,
		menuVisible = false;

	let created_at = new Date();
	// let dates = [];

	const { form } = createForm({
		onSubmit: async (values, { reset }) => {
			/* call to an api */
			const created_date = dayjs(created_at).format('DD/MM/YYYY');

			if (values.created_at == dates[dates_length - 1].created_at) {
				let lastDate = dates[dates_length - 1];
				await supabase
					.from('main')
					.update({
						lhs: values.lhs + lastDate.lhs,
						seven_lines: values.seven_lines + lastDate.seven_lines,
					})
					.eq('created_at', values.created_at);
				lastDate.lhs += values.lhs;
				lastDate.seven_lines += values.seven_lines;
			} else {
				await supabase.from('main').insert([
					{
						lhs: values.lhs,
						seven_lines: values.seven_lines,
						created_at: created_date,
					},
				]);
				dates = [
					...dates,
					{
						tara: values.tara,
						taras_homage: values.taras_homage,
						hang_phuc: values.hang_phuc,
						created_at: created_date,
					},
				];
			}
			// console.log(values);
			reset();
			visible = false;
		},
	});
	// let dates = [];

	export let data;
	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => a.id - b.id); // b - a for reverse sort
	// console.log(dates);
	let dates_length = dates.length;
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];

	// Line Graph
	let lineGraphDates = dates.slice(-10);
	// console.log(lineGraphDates);
	let DataRecord = [];
	lineGraphDates.forEach((e, i) => {
		DataRecord.push({
			x: i,
			y: e.lhs,
			y1: e.seven_lines,
		});
	});
	// const x = (DataRecord) => DataRecord.x;
	const axisY = [(DataRecord) => DataRecord.y, (DataRecord) => DataRecord.y1];

	const bulletLegendItems = [
		'Guru Rinpoche',
		'7 Lines Homages to Guru Rinpoche',
	].map((label) => ({ name: label }));
</script>

<svelte:head>
	<title>Guru Rinpoche</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<main class="overflow-hidden">
	<StatisticPage pictureName="guru_rinpoche.webp" reverse>
		<div
			class="scrollbar scrollbar-rounded dark:(scrollbar-track-color-gray-700 scrollbar-thumb-color-gray-600) overflow-y-scroll max-h-[20rem] flex flex-col gap-4"
			p="x-4 y-4"
			m="t-4 r-10"
		>
			{#each dates as { lhs, seven_lines, created_at }, i}
				<DateCard {page} {created_at} {dates_length} order={i}>
					<p class="text-xs lg:text-base text-right">
						{lhs ? lhs : 0} Biến Guru Rinpoche - Tán 7 dòng: {seven_lines
							? seven_lines
							: 0} Lần
					</p></DateCard
				>
			{/each}
		</div>

		<StatisticLineGraph
			{bulletLegendItems}
			{DataRecord}
			{axisY}
			{lineGraphDates}
		/>
	</StatisticPage>
</main>
<OpenMenu bind:menuVisible bind:visible />
<!-- Start of the form -->
{#if visible}
	<SubmitForm
		bind:visible
		buttonColor="green-600"
		{form}
		grid="cols-[1fr_1fr] rows-4"
	>
		<div class="col-start-1 row-start-1">
			<h4>Guru Rinpoche (Biến)</h4>
			<input type="number" name="lhs" class="py-2 px-4 mt-2 rounded-md" />
		</div>
		<div class="col-start-1 row-start-2">
			<h4>Tán 7 dòng Guru Rinpoche (Biến)</h4>
			<input
				type="number"
				name="seven_lines"
				class="py-2 px-4 mt-2 rounded-md"
			/>
		</div>
		<div class="date-wrapper">
			<h4>Ngày</h4>
			<DateInput
				bind:value={created_at}
				format="dd/MM/yyyy"
				visible={true}
				closeOnSelection={false}
				placeholder="dd/MM/yyyy"
				required
				class="py-2 px-4 mt-2 rounded-md"
			/>
		</div>
	</SubmitForm>
{/if}
