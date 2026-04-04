/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#1163FB",
        backgroundcolor: "#f0f9ff",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#1163FB",
        secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(191, 219, 254)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(191, 219, 254, 0.256) 0%, rgba(218, 218, 218, 0.612) 100%)",
        "backgro-gradient":
          "linear-gradient(90deg, rgba(59, 130, 246, 0.545) 0%, rgba(164, 164, 164, 0.61) 100%);",
        "backgro-gradient-revert":
          "linear-gradient(90deg, rgba(164, 164, 164, 0.61) 0% ,rgba(59, 130, 246, 0.545) 100%);",
      },
    },
  },
  plugins: [],
};
