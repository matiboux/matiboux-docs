import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
		},
	},
	integrations: [
		svelte(),
		starlight({
			title: 'Matiboux Docs',
			components: {
				SiteTitle: '~/components/overrides/SiteTitle.astro',
			},
			customCss: [
				'./src/tailwind.css',
			],
		}),
		tailwind({
			applyBaseStyles: false, // Disable default base styles
		}),
	],
})
