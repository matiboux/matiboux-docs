import { defineConfig, envField } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Docs',
			// description: 'Documentation website with Starlight',
			editLink: {
				baseUrl: 'https://github.com/matiboux/matiboux-docs/edit/main/app/app/',
			},
			social: {
				github: 'https://github.com/matiboux/matiboux-docs',
			},
			customCss: [
				'./src/styles/global.css',
			],
			lastUpdated: true,
			pagination: false,
			components: {
				SiteTitle: '~/components/overrides/SiteTitle.astro',
			},
		}),
	],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	env: {
		schema: {
			GITHUB_REPOSITORY_URL: envField.string({ context: 'client', access: 'public', optional: true }),
			GITHUB_SHA: envField.string({ context: 'client', access: 'public', optional: true }),
		},
		validateSecrets: true,
	},
})
