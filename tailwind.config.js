// /** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'montAlt': ["Montserrat Alternates", "sans-serif"],
        // roboto: ["Roboto", "sans-serif"],
        // letta: ["Lexend Zetta", "sans-serif"],

        cooperBlack: ["cooper-black-std", "serif"],
      },
    },
  },
  plugins: [],
};
