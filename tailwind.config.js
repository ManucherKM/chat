/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
        dark: '#131313',
        gray: '#2e333d',
        blue: '#6d8afd',
      },
		},
	},
	plugins: [],
}
