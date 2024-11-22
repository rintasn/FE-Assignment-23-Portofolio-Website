/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // screens: {
    //   sm: "340px",
    //   md: "540px",
    //   lg: "768px",
    //   xl: "1180px",
    // },
    extend: {
      colors: {
        bg: {
          100: "#ffffff",
          200: "#f5f5f5",
          300: "#cccccc",
        },
        primary: {
          100: "#7E685A",
          200: "#ae9687",
          300: "#fff9e9",
        },
        accent: {
          100: "#D9C2B6",
          200: "#786459",
        },
        text: {
          100: "#2C2926",
          200: "#55514e",
        },
      },
    },
    fontFamily: {
      font1: ["Poppins", "sans-serif"],
      font2: ["Source Sans 3", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
};
