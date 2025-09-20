import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Pop Art specific colors
				'pop-orange': 'hsl(var(--pop-orange))',
				'pop-pink': 'hsl(var(--pop-pink))',
				'pop-yellow': 'hsl(var(--pop-yellow))',
				'pop-cyan': 'hsl(var(--pop-cyan))',
				'pop-purple': 'hsl(var(--pop-purple))',
				'pop-lime': 'hsl(var(--pop-lime))',
				'comic-black': 'hsl(var(--comic-black))',
				'comic-white': 'hsl(var(--comic-white))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'pop': ['Permanent Marker', 'cursive'],
				'comic': ['Comic Neue', 'cursive']
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
				},
				'bounce-in': {
					'0%': {
						transform: 'scale(0.3) rotate(-5deg)',
						opacity: '0'
					},
					'50%': {
						transform: 'scale(1.05) rotate(1deg)'
					},
					'70%': {
						transform: 'scale(0.9) rotate(-0.5deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1'
					}
				},
				'wobble': {
					'0%': { transform: 'rotate(-1deg)' },
					'15%': { transform: 'rotate(-5deg)' },
					'30%': { transform: 'rotate(3deg)' },
					'45%': { transform: 'rotate(-3deg)' },
					'60%': { transform: 'rotate(2deg)' },
					'75%': { transform: 'rotate(-1deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'bounce-in': 'bounce-in 0.6s ease-out',
				'wobble': 'wobble 0.6s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;