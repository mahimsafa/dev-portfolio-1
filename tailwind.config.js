module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  // content: [
  //   // Example content paths...
  //   './public/**/*.html',
  //   './src/**/*.{js,jsx,ts,tsx,vue}',
  // ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      // "custom-light": " 0 0 10px #313131",
      "custom-light": "7px 9px 19px -1px rgba(0,0,0,0.42)",
      // "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      "custom-dark": "6px 9px 28px -2px rgba(0,0,0,0.72)",
    },

    extend: {
      backgroundImage: {
        'mahim': "url('/MAHIM.svg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
