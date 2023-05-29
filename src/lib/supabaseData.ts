// import { writable } from 'svelte/store';
// import { supabase } from '$lib/supabaseClient';
// import { page } from '$app/stores';
// import { setContext, getContext } from 'svelte';
// // import Type {Database} from '../DatabaseDefinitions.d.ts'
// // TODO: DATABASE Type
// // let supabaseData: object[] = writable([]);
// // import { page } from "$app/stores";

// const { data } = await supabase.from('main').select('*');
// data.sort((a: any, b: any) => b.id - a.id);
// // console.log(data);
// export async function querySupabaseData() {
// 	setContext('supabaseData', writable(data));
// }
// querySupabaseData();
// export function getData() {
// 	getContext('supabaseData');
// }
// /*
// const supabaseData = writable([]);
// supabaseData.subscribe(async (value) => {
// 	// console.log(value);
// 	console.log('1:', value);
// 	if (!value) {
// 		const { data, error } = await supabase.from('main').select('*');
// 		data.sort((a: any, b: any) => b.id - a.id);
// 		supabaseData.set(data);
// 		console.log('1:', value);
// 		console.log('2:', data);
// 	}
// });

// export { supabaseData };
// */
