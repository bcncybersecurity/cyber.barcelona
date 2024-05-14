/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#FFFFFF",
      brand: "#827edc",
      darkblue: "#26273B",
      navy: "#232441",
      indigo: "#465FFF",
      gray: "#ACADC1",
      gray01: "#F0F0F5",
      gray02: "#D6D6E1",
      gray03: "#ACADC1",
      gray04: "#6F708B",
      gray05: "#454560",
      gray06: "#26273B",
      dark: "#181820",
    },
    fontFamily: {
      sans: ["Inter", "Helvetica", "sans-serif"],
      mono: ["JetBrains Mono", "Courier", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
