import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Adaptador para desplegar en Netlify
		adapter: adapter(),

		// Opcional: si quieres cambiar el directorio de build
		// target: '#svelte', // solo si tu versión lo necesita
	}
};

export default config;
