import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens:{
				'xs': '480px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1390px',
			},
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				blue: '#1b4da1',
				blue2: '#1B4DA1',
				green: '#889A3A',
				greenlight: '#889A3A',
				purple: '#5E56A0',
				red: '#C73C20',
				red2: '#F9A825',
			},
			fontFamily: {
				'gotham-bold': ['var(--font-gotham-rounded-bold)', 'sans-serif'],
				'gotham-bold-italic': ['var(--font-gotham-rounded-bold-italic)', 'sans-serif'],
				'gotham-medium': ['var(--font-gotham-rounded-medium)', 'sans-serif'],
				'gotham-medium-italic': ['var(--font-gotham-rounded-medium-italic)', 'sans-serif'],
				'gotham-light': ['var(--font-gotham-rounded-light)', 'sans-serif'],
				'gotham-light-italic': ['var(--font-gotham-rounded-light-italic)', 'sans-serif'],
				'gotham-book': ['var(--font-gotham-rounded-book)', 'sans-serif'],
				'gotham-book-italic': ['var(--font-gotham-rounded-book-italic)', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
};
export default config;
