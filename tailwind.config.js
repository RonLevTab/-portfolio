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
          pos: "rgb(var(--ac-pos) / <alpha-value>)",
          neg: "rgb(var(--ac-neg) / <alpha-value>)",
          "hero-from": "rgb(var(--ac-hero-from) / <alpha-value>)",
          "hero-via": "rgb(var(--ac-hero-via) / <alpha-value>)",
          "hero-to": "rgb(var(--ac-hero-to) / <alpha-value>)",
        },
      },
      keyframes: {
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "grid-drift": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "60px 60px" },
        },
        "shimmer-slide": {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "drift-aurora": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(1.2%,-1%,0) scale(1.03)" },
          "100%": { transform: "translate3d(0,0,0) scale(1)" },
        },
      },
      animation: {
        "float-gentle": "float-gentle 5s ease-in-out infinite",
        "grid-drift": "grid-drift 40s linear infinite",
        "drift-aurora": "drift-aurora 16s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
