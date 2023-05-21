import { persisted } from 'svelte-local-storage-store';
let theme;

export const colorTheme = persisted('color-theme', '');
