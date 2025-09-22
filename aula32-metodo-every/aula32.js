const p_array = document.getElementById("array");
const btnPesquisar = document.getElementById("btnVerificar");
const resultado = document.getElementById("resultado");

const elementos_array = [21, 25, 19, 20, 18, 17, 22];
p_array.innerHTML = "[" + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  const ret = elementos_array.every((e, i) => {
    if (e < 18) {
      resultado.innerHTML = "O array da posição " + '<b>' + i + '<b/>' + " não está no coforme";
    }
    return e >= 18;
  });
  if (ret) {
    resultado.innerHTML = "Ok!";
  }
  console.log(ret);
});
