// import adapter from '@sveltejs/adapter-auto';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	kit: {
// 		adapter: adapter(),
// 		prerender: {
// 			enabled: true
// 		},
// 		vite: {

// 		}
// 	}
// };

// export default config;

import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),

		prerender: {
			default: true,
			entries: ['*']
		}
	}
};

export default config;
