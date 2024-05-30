/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cooper: "'cooper-black-std', serif",
      },
      scale: {
        60: "0.6", // Adding custom scale for 60%
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
