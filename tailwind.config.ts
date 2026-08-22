import type { Config } from "tailwindcss";

/**
 * Design system — "Ink & Ember"
 * Editorial noir hero → warm ivory body → noir close.
 * Colour is authored in oklch so the ember accent stays perceptually
 * consistent against both the ink and the paper canvases.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "oklch(0.152 0.011 264 / <alpha-value>)",
          soft: "oklch(0.205 0.013 264 / <alpha-value>)",
          raised: "oklch(0.252 0.013 264 / <alpha-value>)",
          line: "oklch(0.318 0.013 264 / <alpha-value>)",
        },
        paper: {
          DEFAULT: "oklch(0.972 0.010 88 / <alpha-value>)",
          sunk: "oklch(0.945 0.014 84 / <alpha-value>)",
          card: "oklch(0.995 0.004 88 / <alpha-value>)",
          line: "oklch(0.885 0.016 82 / <alpha-value>)",
        },
        graphite: {
          DEFAULT: "oklch(0.34 0.012 264 / <alpha-value>)",
          muted: "oklch(0.455 0.012 264 / <alpha-value>)",
          faint: "oklch(0.66 0.011 264 / <alpha-value>)",
        },
        ember: {
          DEFAULT: "oklch(0.685 0.175 45 / <alpha-value>)",
          deep: "oklch(0.505 0.152 40 / <alpha-value>)",
          glow: "oklch(0.78 0.145 58 / <alpha-value>)",
          wash: "oklch(0.955 0.030 60 / <alpha-value>)",
        },
        sage: {
          DEFAULT: "oklch(0.485 0.068 165 / <alpha-value>)",
          light: "oklch(0.955 0.020 165 / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Instrument Serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter Tight", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.18em",
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
      },
      boxShadow: {
        lift: "0 1px 2px oklch(0.15 0.01 264 / 0.05), 0 12px 32px -12px oklch(0.15 0.01 264 / 0.16)",
        "lift-lg": "0 2px 4px oklch(0.15 0.01 264 / 0.05), 0 32px 64px -24px oklch(0.15 0.01 264 / 0.28)",
        ember: "0 12px 40px -16px oklch(0.685 0.175 45 / 0.55)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        shell: "84rem",
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
