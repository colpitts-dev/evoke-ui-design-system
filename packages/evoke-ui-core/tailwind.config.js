const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  darkMode: isProduction ? "media" : "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        accent: "#ec489a",
        dark: "#232628",
        light: "#F6F7F7",
        black: "#232628",
        "off-white": "#d5d5d0",
        blue: "#75dff2",
        cyan: "#708387",
        green: "#b3e33b",
        magenta: "#ae89fe",
        red: "#fc4384",
        yellow: "#ffa727",
        "bright-black": "#626566",
        "bright-white": "#f9f9f4",
        "bright-blue": "#75dff2",
        "bright-cyan": "#b1c6ca",
        "bright-green": "#c8ed71",
        "bright-magenta": "#ae89fe",
        "bright-red": "#ff7fac",
        "bright-yellow": "#ebdf86",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
