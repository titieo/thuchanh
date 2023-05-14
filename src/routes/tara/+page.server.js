import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: data, error } = await supabase.from('tara').select('*');
	return {
		dates: data ?? [],
		// lhsData: dataLHS ?? [],
	};
}
