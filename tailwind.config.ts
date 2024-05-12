import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#DEFFFC",
        primary: "#C3ACCE",
        text: "#000000",
        secondary: "#5D5179",
        card: "#CF5C36"
      }
    },
  },
  plugins: [],
}
export default config
