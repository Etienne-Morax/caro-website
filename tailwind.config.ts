import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: "#FAF8F5",
          subtle: "#F4EFE9",
          muted: "#ECE5DB",
          dark: "#14171A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FFFFFF",
          card: "#FFFFFF",
          subtle: "#F9F7F4",
          dark: "#1E2227",
        },
        ink: {
          DEFAULT: "#15181C",
          secondary: "#474F5A",
          muted: "#768190",
          faint: "#A5B0BF",
          inverse: "#FAF8F5",
        },
        border: {
          DEFAULT: "#E7E1D7",
          subtle: "#F0EBE2",
          strong: "#D0C6B7",
          dark: "#2C323B",
        },
        accent: {
          DEFAULT: "#C85A32",
          hover: "#B24E27",
          light: "#FCF3EF",
          muted: "#EEDAD1",
          dark: "#E06B43",
        },
        sage: {
          DEFAULT: "#2F6B52",
          light: "#EDF6F1",
          muted: "#D2E7DC",
        },
        highlight: {
          DEFAULT: "#FFF7D6",
          strong: "#FFEAA3",
          border: "#E9D278",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        paper: "0 1px 3px rgba(22, 25, 28, 0.04), 0 4px 12px rgba(22, 25, 28, 0.03)",
        "paper-hover": "0 2px 6px rgba(22, 25, 28, 0.06), 0 12px 28px rgba(22, 25, 28, 0.07)",
        "paper-lg": "0 8px 30px rgba(22, 25, 28, 0.08), 0 20px 50px rgba(22, 25, 28, 0.06)",
        "notebook-tab": "0 2px 8px rgba(200, 90, 50, 0.15)",
      },
      borderRadius: {
        notebook: "10px",
      },
    },
  },
  plugins: [],
};

export default config;
