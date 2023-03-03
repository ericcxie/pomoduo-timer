/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#EDEEF0",
        "light-theme-gray": "#bfbfbf",
        "light-button-gray": "#bfbfbf",
        "light-font": "#474747",
        green: {
          50: "#f6f7f6",
          100: "#e3e7e0",
          200: "#c5cec1",
          300: "#a0ae9a",
          400: "#798a72",
          500: "#61725a",
          600: "#4b5a47",
          700: "#3e4a3b",
          800: "#353d32",
          900: "#2e352c",
        },
      },

      borderRadius: {
        card: "10px",
      },

      boxShadow: {
        "light-card":
          "5px 5px 8px 0 rgba(0, 0, 0, .25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
        "light-button":
          "6px 6px 7px 0 rgba(190, 190, 190, 0.3), -4px -4px 6px 0 rgba(250, 250, 250, .25)",
      },
    },
  },
  plugins: [],
};
