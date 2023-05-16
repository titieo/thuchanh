<script>
	import { fade } from 'svelte/transition';
	export let data;
</script>

{#key data.pathname}
	<div transition:fade class="max-h-screen">
		<slot />
	</div>
{/key}
