import { sidebarLinks } from '../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: 'Env Converter',
		collapsed: false,
		items: [
			{
				label: 'Env Converter',
				slug: 'env-converter',
			},
		],
	},
]

export default sidebar
