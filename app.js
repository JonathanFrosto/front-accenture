var teclas = document.querySelectorAll(".btn-value");
var tela = document.querySelector("#tela");
var apagar = document.getElementById("apagar");
var espaco = document.getElementById("espaco");



teclas.forEach((element) => {
  element.addEventListener("click", function () {
    tela.value = tela.value + element.textContent[0];
  });
});

apagar.addEventListener("click", function () {
  tela.value = "";
});

espaco.addEventListener("click", function () {
  tela.value = tela.value + " ";
});