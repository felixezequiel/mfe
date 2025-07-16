const coreTheme = require('winxx-core/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  presets: [coreTheme],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
}
