<script lang="ts">
	import { presetUno } from 'unocss';

	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;
	// TODO: Check back on svelte-fullpage
</script>

<svelte:head>
	<title>Admin Login</title>
</svelte:head>

<!-- TODO: https://unocss.dev/presets/wind#breakpoints - Add breakpoints -->

<!-- <Fullpage> -->
<main
	style="background-color: #fdd9aa"
	class="grid h-screen w-screen overflow-y-hidden sm:grid-cols-[70vw_30vw] lg:grid-cols-[2fr_1fr] grid-rows-[45vh_55vh] font-title"
>
	<Auth
		supabaseClient={data.supabase}
		view="magic_link"
		redirectTo={`${data.url}/logging-in?redirect=/`}
		showLinks={false}
		appearance={{
			theme: ThemeSupa,
			// style: { input: 'color: #fff' }
		}}
	/>
</main>
