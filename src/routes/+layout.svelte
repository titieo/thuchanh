<script>
	import { fade } from 'svelte/transition';
	import 'virtual:uno.css';
	export let data;
</script>

{#key data.pathname}
	<div transition:fade class="max-h-screen font-content">
		<slot />
	</div>
{/key}
