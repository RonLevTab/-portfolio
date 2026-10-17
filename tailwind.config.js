/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        th: {
          page: "rgb(var(--th-page) / <alpha-value>)",
          surface: "rgb(var(--th-surface) / <alpha-value>)",
          "surface-alt": "rgb(var(--th-surface-alt) / <alpha-value>)",
          elevated: "rgb(var(--th-elevated) / <alpha-value>)",
          heading: "rgb(var(--th-heading) / <alpha-value>)",
          body: "rgb(var(--th-body) / <alpha-value>)",
          muted: "rgb(var(--th-muted) / <alpha-value>)",
          faint: "rgb(var(--th-faint) / <alpha-value>)",
          line: "rgb(var(--th-line) / <alpha-value>)",
          "line-subtle": "rgb(var(--th-line-subtle) / <alpha-value>)",
        },
        ac: {
          1: "rgb(var(--ac-1) / <alpha-value>)",
          2: "rgb(var(--ac-2) / <alpha-value>)",
          3: "rgb(var(--ac-3) / <alpha-value>)",
          ink: "rgb(var(--ac-ink) / <alpha-value>)",
          pos: "rgb(var(--ac-pos) / <alpha-value>)",
          neg: "rgb(var(--ac-neg) / <alpha-value>)",
          "hero-from": "rgb(var(--ac-hero-from) / <alpha-value>)",
          "hero-via": "rgb(var(--ac-hero-via) / <alpha-value>)",
          "hero-to": "rgb(var(--ac-hero-to) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
}
