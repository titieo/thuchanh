import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
// import AutoImport from 'unplugin-auto-import/vite';
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
		// AutoImport({
		// 	dirs: ['src/composables'],
		// }),
	],
	optimizeDeps: {
		exclude: [
			'@iconify/utils/lib/loader/fs',
			'@iconify/utils/lib/loader/install-pkg',
			'@iconify/utils/lib/loader/node-loader',
			'@iconify/utils/lib/loader/node-loaders',
		],
	},
	build: {
		rollupOptions: {
			external: [
				'@iconify/utils/lib/loader/fs',
				'@iconify/utils/lib/loader/install-pkg',
				'@iconify/utils/lib/loader/node-loader',
				'@iconify/utils/lib/loader/node-loaders',
			],
		},
	},
});
