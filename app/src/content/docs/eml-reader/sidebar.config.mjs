import { sidebarLinks } from '../sidebar.config.mjs'

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: '← Home',
		slug: 'index',
	},
	{
		label: 'EML Reader',
		collapsed: false,
		items: [
			{
				label: 'EML Reader',
				slug: 'eml-reader',
			},
		],
	},
]

export default sidebar
