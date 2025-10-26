const p_array = document.getElementById("array");
const btnVerificar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

const elementos_array = [10, 5, 9, 11, 10, 15, 17, 2, 15];

p_array.innerHTML = `[${elementos_array}]`;

btnVerificar.addEventListener("click", (evt) => {
  const ret = elementos_array.some((e, i) => {
    if (e < 18) {
      resultado.innerHTML = "Array não conforme na posição " + i;
    }
    return e >= 18;
  });

  if (ret) {
    resultado.innerHTML = "Ok";
  }
});
