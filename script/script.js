let enviar = document.querySelector("#encriptar");

enviar.addEventListener("click", () => {
  let texto = document.querySelector("#textAntes").value;
  let nuevoTexto = "";
  for (letra of texto) {
    nuevoTexto = nuevoTexto + letra + "i";
  }

  let imagen = document.querySelector(".noTxt");
  imagen.style.display = "none";

  let traducido = document.querySelector("#textAreaDespues");
  traducido.style.display = "block";
  traducido.append(nuevoTexto);
});

// let reiniciar = document.querySelector('#reiniciar');

// reiniciar.addEventListener('click', () => {

// })
