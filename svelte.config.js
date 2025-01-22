import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
	preprocess: sveltePreprocess(),

	kit: {
		appDir: 'app',
		adapter: adapter(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/registro-cooperativas' : ''
		}
	}
};

export default config;
