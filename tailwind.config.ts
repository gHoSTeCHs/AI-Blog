import type { Config } from 'tailwindcss';

export default {
	content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
				screens: {
					'2xl': '1400px',
					xl: '1140px',
					lg: '960px',
					md: '768px',
					sm: '640px',
					xs: '480px',
				},
			},
			colors: {
				'bg-primary': 'var(--color-bg-primary)',
				'bg-secondary': 'var(--color-bg-secondary)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'text-tetriary': 'var(--color-text-tetriary)',
				border: 'var(--color-border)',
				yellow: 'var(--color-yellow)',
			},
		},
	},
	plugins: [],
} satisfies Config;
