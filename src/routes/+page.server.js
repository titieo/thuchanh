import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: taraData, error } = await supabase.from('tara').select('*');
	return {
		tData: taraData ?? [],
		// lhsData: dataLHS ?? [],
	};
}
