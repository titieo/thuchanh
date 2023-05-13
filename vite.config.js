import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
export default defineConfig({
	server: {
		open: true,
	},
	plugins: [
		UnoCSS({
			extractors: [
				//   extractorSvelte()
			],
			/* more options */
		}),
		sveltekit(),
	],
});
