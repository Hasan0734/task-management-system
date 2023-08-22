/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#484c7f",
        ofLight: "#f9fbfd",
        secondary: "#F19828",
        lightpink: "#f5558d",
        "lightpink-300": "#F1C8DB",
        graylight: "#555555",
        "graylight-500": "#9a9b9d",
        "graylight-300": "#F0F0F0",
        lightgreen: "#198754",
      },
      screens: {
        xs: "490px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
