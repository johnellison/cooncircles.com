/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}", "./static/**/*.{css,html}"],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				card: 'hsl(var(--card) / <alpha-value>)',
				'card-foreground': 'hsl(var(--card-foreground) / <alpha-value>)',
				popover: 'hsl(var(--popover) / <alpha-value>)',
				'popover-foreground': 'hsl(var(--popover-foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				destructuve: {
					DEFAULT: 'hsl(var(--destructuve) / <alpha-value>)',
					foreground: 'hsl(var(--destructuve-foreground) / <alpha-value>)'
				},
				'earth-primary': '#675032',
				'earth-extra': '#785F4B',
				'fire': '#BE5E4F',
				'water': '#6DAAC9',
				'air': '#C49556',
				'spirit': '#765E85',
				'sage': '#D5E6D3',
				'cream': '#f8f2e8',
				'footer-dark': '#675032'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['"Rubik"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				heading: ['"Fraunces"', 'serif'],
				serif: ['"Fraunces"', 'serif']
			}
		}
	}
}
