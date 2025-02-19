import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Docs',
			customCss: [
				'./src/tailwind.css',
			],
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
})
