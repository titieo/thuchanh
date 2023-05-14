import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: data, error } = await supabase.from('lhs').select('*');
	return {
		dates: data ?? [],
	};
}
