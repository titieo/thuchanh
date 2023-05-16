import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: data, error } = await supabase
		.from('main')
		.select('*')
		.gt('lhs', 0);
	return {
		dates: data ?? [],
	};
}

let { data: main, error } = await supabase.from('main').select('*');
