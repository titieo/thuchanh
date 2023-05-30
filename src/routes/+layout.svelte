<script lang="ts">
	import { fly } from 'svelte/transition';
	import 'virtual:uno.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ supabase, session } = data);

	onMount(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
	// import type { LayoutData } from './$types';
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
<!-- {#key data.pathname} -->
{#key data.url}
	<!-- transition:fade -->
	<div
		in:fly={{ y: -100, duration: 500, delay: 500 }}
		out:fly={{ y: 100, duration: 500 }}
		class="max-h-screen font-content dark:bg-gray-800 dark:text-white"
	>
		<slot />
	</div>
{/key}
<!-- {/key} -->
