const tailwindcss = require("tailwindcss");
module.exports = {
  theme: {
    fontFamily: {
      commissioner: ["Commissioner"],
    },
  },
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
};
