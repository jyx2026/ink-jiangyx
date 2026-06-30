/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'), // 这对我们的 Markdown 博客排版很重要
	],
	darkMode: 'class', // 确保暗黑模式通过 class 切换
}