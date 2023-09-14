/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mintcream: "#ecfff8",
        black: "#000",
        gainsboro: {
          "100": "#e3dada",
          "200": "#d9d9d9",
        },
        mediumaquamarine: "#59d1a5",
        snow: {
          "100": "#fffafa",
          "200": "#fff9f9",
          "300": "#fff8f8",
        },
        silver: "#b8b5b5",
        lavenderblush: "#f1e4e4",
        firebrick: "#cd2a2a",
        darkslategray: "#29405b",
        gray: {
          "100": "#fffdfd",
          "200": "#818181",
          "300": "#122439",
          "400": "#0d0c0c",
          "500": "rgba(0, 0, 0, 0.42)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "4xl": "23px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      xl: "20px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
