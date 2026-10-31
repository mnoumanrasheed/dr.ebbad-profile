/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E1015",
        surface: {
          DEFAULT: "#14171F",
          soft: "#1D212A",
          hover: "#262B36",
        },
        foreground: "#F8F7F4",
        muted: "#9AA0AC",
        metallic: {
          light: "#E3E5EB",
          DEFAULT: "#C5C8D0",
          dark: "#848A96",
        },
        champagne: {
          light: "#FFF6DE",
          DEFAULT: "#E2C98E",
          dark: "#BD903C",
          muted: "rgba(226, 201, 142, 0.35)",
        },
        paper: {
          DEFAULT: "#FAF9F5",
          warm: "#F3F1E9",
          muted: "#E8E5DA",
          border: "#E2DED2",
        },
        ink: {
          DEFAULT: "#12141A",
          soft: "#2C313E",
          muted: "#5A6172",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        editorial: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-subtle": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
