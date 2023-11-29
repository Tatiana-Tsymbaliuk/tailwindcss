module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "320px",
      md: "478px",
      lg: "768px",
      xl: "1920px",
    },
    container: {
      center: true,
      padding: {
        sm: "0.313rem",
        md: "0.438rem",
        lg: "4.438rem",
        xl: "8.438rem",
      },
    },
    colors: {
      gray: "#323232",
      white: "#FFFFFF",
      violet: "#9463FE",
      yellow: "#F4F73C",
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".bg-siri": {
          "background-image": "url('../public/image/bg.svg')",
          "background-repeat": "no-repeat",
          "background-size": "contain",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // require("tailwindcss"),
    // require("autoprefixer"),
  ],
};
