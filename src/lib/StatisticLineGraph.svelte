<script>
	import {
		VisXYContainer,
		VisLine,
		VisAxis,
		VisBulletLegend,
		VisCrosshair,
	} from '@unovis/svelte';
	export let bulletLegendItems, DataRecord, axisY, lineGraphDates;
	import { browser } from '$app/environment';
	import { useMediaQuery } from 'svelte-breakpoints';

	const isMobile = useMediaQuery('(max-width: 768px)');
</script>

{#if browser && !$isMobile}
	<div
		class="col-start-2 row-start-2 lg:max-w-60vw max-w-70vw ml-10 mr-16 mb-10"
	>
		<VisBulletLegend
			items={bulletLegendItems}
			labelClassName="dark:text-white"
		/>
		<VisXYContainer data={DataRecord} height="50vh">
			<VisLine x={(d) => d.x} y={axisY} />
			<VisAxis type="x" tickFormat={(i) => lineGraphDates[i].created_at} />
			<VisAxis type="y" />
			<VisCrosshair />
		</VisXYContainer>
	</div>
{/if}
