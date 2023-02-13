/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "users": "repeat(auto-fit, minmax(250px, 1fr))",
        "popup-detials": "auto 1fr",
      },
      boxShadow: {
        overlay: "0 0 0 100vmax rgba(0, 0, 0, 0.7)",
      },
    },
  },
  plugins: [],
};
