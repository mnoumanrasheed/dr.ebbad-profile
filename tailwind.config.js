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
        background: "#08090B",
        surface: {
          DEFAULT: "#111317",
          soft: "#1B1E23",
          hover: "#22262D",
        },
        foreground: "#F6F5F1",
        muted: "#A8ADB5",
        metallic: {
          light: "#E1E4EB",
          DEFAULT: "#C1C5CC",
          dark: "#7E8490",
        },
        border: "rgba(255, 255, 255, 0.12)",
        paper: "#F4F3EF",
        ink: "#0D0F12",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        editorial: ["var(--font-serif)", "Georgia", "serif"],
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
