import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async ({ url, locals: { supabase, getSession } }) => {
	const session = await getSession();

	// if (!session) {
	// 	throw redirect(303, '/');
	// }

	return { session, url: url.origin };
}) satisfies PageServerLoad;

export const actions = {
	signout: async ({ locals: { supabase, getSession } }) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		}
	},
} satisfies Actions;
