// tailwind.config.js
import daisyui from "daisyui";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: false, // ⛔️ désactive tous les thèmes
  },
};

export default config;