const colors = require("tailwindcss/colors");

module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         gridTemplateColumns: {
            home: "33% auto",
            footer: "200px minmax(900px, 1fr) 100px",
         },
         colors: {
            purple000: "#585676",
            purple100: "#1E213A",
            purple200: "#100E1D",
            purple300: "#616475",
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
         },
         fontSize: {
            174: "174px",
         },
         maxWidth: {
            13: "13rem",
         },
         width: {
            bg: "130%",
         },
      },

      variants: {
         extend: {},
      },
      plugins: [],
   },
};
