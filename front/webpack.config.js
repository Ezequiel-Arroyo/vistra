module.exports = {
  entry: {
    index: "./scripts/index.js",
    formulario: "./scripts/formulario.js",
    nav: "./scripts/nav.js",
    genero: "./scripts/genero.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
};
