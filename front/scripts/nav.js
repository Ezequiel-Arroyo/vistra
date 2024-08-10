const ulGenero = document.querySelector("#generos");

ulGenero.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("genero")) {
    genero = event.target.textContent;
    window.location.href = `../pages/genero.html?genero=${genero}`;
  }
});
