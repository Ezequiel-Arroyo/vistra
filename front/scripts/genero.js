function generoParametro(param) {
  const urlParametro = new URLSearchParams(window.location.search);
  return urlParametro.get(param);
}

const genero = decodeURIComponent(generoParametro("genero"));

console.log(genero);
