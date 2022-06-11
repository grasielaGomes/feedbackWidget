module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#8257E5",
        primaryHover: "#996DFF"
      },
      borderRadius: {
        md: "4px"
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")]
};
