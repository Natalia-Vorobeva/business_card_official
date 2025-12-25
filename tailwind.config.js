/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				navy: '#1a365d',
				gold: '#d4af37',
				light: '#f8f9fa',
			},
			fontFamily: {
				'serif': ['Georgia', 'Times New Roman', 'serif'],
			},
			boxShadow: {
				'elegant': '0 4px 20px rgba(0, 0, 0, 0.08)',
			},
			backgroundImage: {
				'pattern': 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
			},
			spacing: {
				'section-padding': '5rem',
			},
		},
	},
	plugins: [],
}