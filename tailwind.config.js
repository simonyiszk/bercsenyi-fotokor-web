/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "roboto-mono": ["Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        fotokor: {
          zold: "#CFEE01",
          szurke: "#F1F1F1",
        },
      },
    },
  },
  plugins: [],
};
