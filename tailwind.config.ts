import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            brand: {
                DEFAULT: "#0bb58d", // slightly deeper, more institutional blue
                dark: "#044838",
            },
        },
    },
  },
  plugins: [],
}

export default config
