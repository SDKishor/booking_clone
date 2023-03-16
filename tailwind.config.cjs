/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#013074",

          secondary: "#0067B7",

          accent: "#275077",

          neutral: "#051321",

          "base-100": "#fff",

          info: "#7D858D",

          success: "#F5F5F5",

          warning: "#F39112",

          error: "#F2182A",
        },
      },
    ],
  },
};
