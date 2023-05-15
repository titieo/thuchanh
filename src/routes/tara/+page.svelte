<script>
	import 'virtual:uno.css';
	import { presetUno } from 'unocss';
	import { createForm } from 'felte';
	import { DateInput } from 'date-picker-svelte';

	import StatisticPage from '$lib/StatisticPage.svelte';
	import DateCard from '$lib/DateCard.svelte';
	import { supabase } from '$lib/supabaseClient';
	import OpenFormButton from '$lib/OpenFormButton.svelte';
	import SubmitForm from '$lib/SubmitForm.svelte';
	import dayjs from 'dayjs';

	import { fade } from 'svelte/transition';
	let visible = false;

	let page = 0;
	let size = 10;
	let created_at = new Date();
	// let dates = [];
	const { form } = createForm({
		onSubmit: async (values, { reset }) => {
			/* call to an api */
			const created_date = dayjs(created_at).format('DD/MM/YYYY');
			const { data, error } = await supabase.from('tara').insert([
				{
					tara: values.tara,
					taras_homage: values.taras_homage,
					hang_phuc: values.hang_phuc,
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

			console.log(values);
			reset();
			visible = false;
		},
	});

	export let data;

	let { dates } = data;
	$: ({ dates } = data);
	dates.sort((a, b) => a.id - b.id); // b - a for reverse sort
	console.log(dates);
	let dates_length = dates.length;
	// const { form } = createForm();
	// $: dates = [...dates, ...allDates.splice(size * page, size * (page + 1) - 1)];
</script>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<main style="height: 100vh" class="h-screen overflow-y-hidden">
	<StatisticPage pictureName="0.green_tara.png">
		{#each dates as { tara, taras_homage, created_at, hang_phuc, tam }, i}
			<!-- {#each dates as { tara, taras_homage, created_at, lay_dai, lhs, hang_phuc, tam, qt_chu_tara }, i} -->
			<DateCard {page} {created_at} {dates_length} order={i}>
				<p class="text-base text-right">
					{tara ? tara * 108 : 0} Biến Green Tara ({hang_phuc ? hang_phuc : 0} Phút
					Kiết Già Hàng Phục) - Tán thán 21 Tara: {taras_homage
						? taras_homage
						: 0}
					Lần <br />
					Quán tưởng TAM: {tam ? tam : 0} Phút

					<!-- <li>Lạy dài: {lay_dai ? lay_dai : 0} Lần</li>
                        <li>Liên Hoa Sinh: {lhs ? lhs * 108 : 0} Biến</li>
                        <li>Kiết già hàng phục: {hang_phuc ? hang_phuc : 0} Phút</li>
                        <li>Quán chủng tự TAM: {tam ? tam : 0} Phút</li>
                        -->
				</p></DateCard
			>
		{/each}

		<!-- Button to open the form -->
		<OpenFormButton bind:visible additionalClasses="bg-green-600" />

		<!-- Start of the form -->
		{#if visible}
			<SubmitForm bind:visible buttonColor="green-600" {form}>
				<div class="col-start-1 row-start-1">
					<h4>Green Tara (Chuỗi)</h4>
					<input type="number" name="tara" class="py-2 px-4 mt-2 rounded-md" />
				</div>
				<div class="col-start-1 row-start-2">
					<h4>Tán thán 21 đức Tara (Biến)</h4>
					<input
						type="number"
						name="taras_homage"
						class="py-2 px-4 mt-2 rounded-md"
					/>
				</div>
				<div class="col-start-1 row-start-3">
					<h4>Thời gian ngồi Kiết Già Hàng Phục (Phút)</h4>
					<input
						type="number"
						name="hang_phuc"
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
	</StatisticPage>
</main>

<style>
	.date-wrapper {
		--icon-position: 0.75rem;
		--icon-width: 1rem;
		--icon-date: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(65, 84, 98)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E");
	}
	.date-wrapper :global(.date-time-field input[type='text']) {
		padding-right: calc(var(--icon-width) + var(--icon-position));
		background-image: var(--icon-date);
		background-position: center right var(--icon-position);
		background-size: var(--icon-width) auto;
		background-repeat: no-repeat;
	}
</style>
