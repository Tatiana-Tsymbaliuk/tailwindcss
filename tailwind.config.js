module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      gray: "#323232",
      white: "#FFFFFF",
      violet: "#8B60FA",
    },
    extend: {
      borderColor: {
        "gradient-violet-write": "linear-gradient(to bottom, #8B60FA, #FFFFFF)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".border-gradient": {
          "border-image": "linear-gradient(to bottom, #8B60FA, #323232) 1",
          "border-image-slice": 1,
          "border-radius": "0.5rem",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
