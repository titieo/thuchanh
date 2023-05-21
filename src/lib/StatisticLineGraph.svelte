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
</script>

{#if browser}
	<div class="col-start-2 row-start-2 ml-10 mr-20 mb-10">
		<VisBulletLegend items={bulletLegendItems} />
		<VisXYContainer data={DataRecord} height="50vh">
			<VisLine x={(d) => d.x} y={axisY} />
			<VisAxis type="x" tickFormat={(i) => lineGraphDates[i].created_at} />
			<VisAxis type="y" />
			<VisCrosshair />
		</VisXYContainer>
	</div>
{/if}
