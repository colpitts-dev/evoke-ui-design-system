const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  darkMode: isProduction ? "media" : "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx,html}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Quicksand", "sans-serif"],
      serif: ["Merriweather", "serif"],
      primary: ["var(--font-primary)"],
      secondary: ["var(--font-secondary)"],
    },
    extend: {
      colors: {
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        info: "var(--color-info)",
        warn: "var(--color-warn)",
        danger: "var(--color-danger)",
        black: "#232628",
        white: "#ffffff",
        evoke: {
          dark: "#232628",
          light: "#F6F7F7",
          primary: "#ff276a",
        },
        ansi: {
          blue: "#75dff2",
          cyan: "#708387",
          green: "#b3e33b",
          magenta: "#ae89fe",
          red: "#fc4384",
          yellow: "#ffa727",
        },
        "off-white": "#d5d5d0",
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
