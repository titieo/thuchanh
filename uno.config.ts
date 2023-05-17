import {
	defineConfig,
	presetAttributify,
	presetUno,
	presetWind,
	presetTypography,
	presetWebFonts,
} from 'unocss';
import { presetScrollbar } from 'unocss-preset-scrollbar';

export default defineConfig({
	safelist: 'group-hover:border-[25px]'.split(' '),
	presets: [
		presetUno(),
		presetAttributify(),
		presetWind(),
		presetWebFonts({
			// use axios with an https proxy
			/*
			customFetch: (url) =>
				axios.get(url, {
					httpsAgent: new ProxyAgent('https://localhost:7890'),
				}),
            */
			provider: 'google',
			fonts: {
				title: 'Work Sans',
				content: 'Merriweather',
				// TODO: https://unocss.dev/presets/web-fonts
			},
		}),
		presetTypography(),
		presetScrollbar(),
	],
	shortcuts: {
		'flex-center': 'flex justify-center items-center',
	},
});
