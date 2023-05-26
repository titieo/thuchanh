<script lang="ts">
	import { presetUno } from 'unocss';
	import { enhance, type SubmitFunction } from '$app/forms';
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';

	export let data;

	let { session, supabase } = data;
	let loading = false;

	const handleSignOut: SubmitFunction = () => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	};
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
	{#if session}
		<div class="form-widget">
			<form method="post" action="?/signout" use:enhance={handleSignOut}>
				<div>
					<button class="button block" disabled={loading}>Sign Out</button>
				</div>
			</form>
			<p>{session.user.email}</p>
		</div>
	{:else}
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
	{/if}
</main>
