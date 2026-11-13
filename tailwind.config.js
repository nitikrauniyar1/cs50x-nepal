/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        sand: "rgb(var(--sand) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
          mute: "rgb(var(--ink-mute) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--gold) / <alpha-value>)",
          deep: "rgb(var(--gold-deep) / <alpha-value>)",
          pale: "rgb(var(--gold-pale) / <alpha-value>)",
        },
        crimson: "rgb(var(--crimson) / <alpha-value>)",
        "crimson-fill": "rgb(var(--crimson-fill) / <alpha-value>)",
        "crimson-hover": "rgb(var(--crimson-hover) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Avenir Next'", "'Segoe UI'", "system-ui", "Roboto", "Arial", "sans-serif"],
        sans: ["'Avenir Next'", "'Segoe UI'", "system-ui", "Roboto", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 38s linear infinite" },
    },
  },
  plugins: [],
};
