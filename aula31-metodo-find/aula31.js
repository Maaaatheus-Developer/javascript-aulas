const p_array = document.getElementById("array");

const txt_pesquisar = document.getElementById("txt_pesquisar");

const btnPesquisar = document.getElementById("btnPesquisar");

const resultado = document.getElementById("resultado");

const elementos_array = [10, 5, 8, 2, 9, 15, 20];

p_array.innerHTML = "[ " + elementos_array + "]";

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML = "<br> Valor não encontrado!";
  const ret = elementos_array.find((e, i) => {
    if (e == txt_pesquisar.value) {
      resultado.innerHTML =
        "<br> Valor encontrado: " + e + " encontrado na posição: " + i;
      return e;
    }
  });
  console.log(ret);
});

// O MESMO PODE SER FEITO PARA VALORES DE TEXTO NO ARRAY
// EXEMPLO:
// const elementos_array = ["Banana", "Maçã", "Uva", "Laranja", "Abacaxi"];
// p_array.innerHTML = "[ " + elementos_array + "]";
// btnPesquisar.addEventListener("click", (evt) => {
//   resultado.innerHTML = "<br> Valor não encontrado!";
//   const ret = elementos_array.find((e, i) => {
//     if (e.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
//       resultado.innerHTML =
//         "<br> Valor encontrado: " + e + " encontrado na posição: " + i;
//       return e;
//     }
//   });
// });
