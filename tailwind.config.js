const defaultTheme = require("tailwindcss/defaultTheme");

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
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
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
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "rgb(207, 238, 1)",
          secondary: "#299fbc",
          accent: "#a4f760",
          neutral: "#1F1D34",
          "base-100": "#fff",
          info: "#84B7F5",
          success: "#22c55e",
          warning: "#F6CE1E",
          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
