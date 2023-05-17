import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: data, error } = await supabase.from('main').select('*');
	return {
		dates: data ?? [],
		// lhsData: dataLHS ?? [],
	};
}
