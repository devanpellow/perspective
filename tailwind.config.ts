import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				perspectiveBlue: 'rgb(0, 113, 235)',
				perspectiveYellow: 'rgb(251, 191, 36)',
				perspectiveRed: 'rgb(251, 88, 90)',
			},
		},
	},
	plugins: [],
	darkMode: 'class',
} satisfies Config;
