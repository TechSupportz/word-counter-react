module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			colors: {
				"blue-light": "hsl(203, 97%, 87%)",
				"blue-less-light": "hsl(200, 63%, 80%)",
				"blue-dark": "hsl(215, 40%, 19%)",
				"blue-darker": "hsl(222, 43%, 9%)",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
