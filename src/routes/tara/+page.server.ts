import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, locals: { getSession } }) => {
	const session = await getSession();
	// console.log(session);
	const { data } = await supabase
		.from('main')
		.select('id, created_at, tara, taras_homage, lay_dai, hang_phuc');
	return {
		dates: data ?? [],
		session:
			session &&
			(session.user.email == 'loctran101106@gmail.com' ||
				session.user.email == 'locphuc016@gmail.com' ||
				session.user.email == 'trungphuc016@gmail.com'),
		// lhsData: dataLHS ?? [],
	};
	// if (session) {
	// 	throw redirect(303, '/account');
	// }

	// return { url: url.origin };
};
