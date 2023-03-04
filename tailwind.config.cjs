/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF5D01'
			},
			backgroundImage: {
				'hero-pattern': "url('/src/assets/topography.svg')",
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
