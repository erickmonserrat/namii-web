module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        "darck-blue": "var(--darck-blue)",
        indigo: "var(--indigo)",
        jade: "var(--jade)",
        light: "var(--light)",
        papay: "var(--papay)",
        "playing-yellow": "var(--playing-yellow)",
        textbody: "var(--textbody)",
        textsubtle: "var(--textsubtle)",
        turquoise: "var(--turquoise)",
        white: "var(--white)",
      },
      fontFamily: {
        body: "var(--body-font-family)",
        bold: "var(--bold-font-family)",
        button: "var(--button-font-family)",
        h2: "var(--h2-font-family)",
        h3: "var(--h3-font-family)",
        link: "var(--link-font-family)",
        pretitle: "var(--pretitle-font-family)",
        small: "var(--small-font-family)",
        subtitle: "var(--subtitle-font-family)",
        "title-h1": "var(--title-h1-font-family)",
      },
      boxShadow: { "alert-shadow": "var(--alert-shadow)" },
    },
  },
  plugins: [],
};
