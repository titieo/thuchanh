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
				sans: 'Roboto',
				mono: ['Fira Code', 'Fira Mono:400,700'],
				// TODO: https://unocss.dev/presets/web-fonts
			},
		}),
		presetTypography(),
		presetScrollbar(),
	],
});
