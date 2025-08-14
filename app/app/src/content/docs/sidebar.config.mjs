/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
export const sidebarLinks = [
	{
		label: '👤 Matiboux.me',
		link: 'https://matiboux.me',
		attrs: {
			target: '_blank',
		},
	},
	{
		label: '💻 Github @matiboux',
		link: 'https://github.com/matiboux',
		attrs: {
			target: '_blank',
		},
	},
	{
		label: '📂 Matiboux Guides',
		link: 'https://guides.matiboux.me',
		attrs: {
			target: '_blank',
		},
	},
]

/** @type {import('@astrojs/starlight/types').StarlightUserConfig} */
const sidebar = [
	...sidebarLinks,
	{
		label: 'Home',
		slug: 'index',
	},
	{
		label: 'EML Reader',
		slug: 'eml-reader',
	},
	{
		label: 'Env Converter',
		slug: 'env-converter',
	},
]

export default sidebar
