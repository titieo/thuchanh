<script>
	import { fade } from 'svelte/transition';
	import 'virtual:uno.css';
	export let data;
	import { base } from '$app/paths';
</script>

<svelte:head
	><link
		rel="apple-touch-icon"
		sizes="180x180"
		href="{base}/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="{base}/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="{base}/favicon-16x16.png"
	/>
	<link rel="manifest" href="{base}/site.webmanifest" />
	<link rel="mask-icon" href="{base}/safari-pinned-tab.svg" color="#5bbad5" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" /></svelte:head
>
{#key data.pathname}
	<div transition:fade class="max-h-screen font-content">
		<slot />
	</div>
{/key}
