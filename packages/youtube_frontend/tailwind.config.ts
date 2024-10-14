import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#f4003f",
				solidWhite: "#f4f4f4",
				gray: "#797979"
			},
			keyframes: {
				fade: {
					from: {
						opacity: "0"
					},
					to: {
						opacity: "1"
					}
				},
				scaleIn: {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)"
					},
					"50%": {
						opacity: "0.3"
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)"
					}
				}
			},
			animation: {
				fade: "fade 0.5s ease-in-out",
				scaleIn: "scaleIn 0.35s ease-in-out"
			}
		}
	},
	plugins: []
};
export default config;
