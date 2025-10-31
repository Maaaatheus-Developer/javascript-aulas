const numero = document.getElementById("numero");
let promise = new Promise((resolve, reject) => {
  // promise recebe uma função com dois parâmetros: resolve e reject
  let resultado = true;
  let tempo = 3000;

  setTimeout(() => {
    if (resultado) {
      resolve("Deu tudo certo!");
    } else {
      reject("Deu tudo errado!");
    }
  }, tempo);
});

promise.then((retorno) => {
  // then é executado quando a promise é resolvida com sucesso
  numero.innerHTML = retorno;
  numero.classList.remove("erro");
  numero.classList.add("ok");
});

promise.catch((retorno) => {
  // catch é executado quando a promise é rejeitada
  numero.innerHTML = retorno;
  numero.classList.add("erro");
  numero.classList.remove("Ok");
});

// setTimeout(() => {
//   resultado = true;
// }, tempo);

// if (resultado) {
//   numero.innerHTML = "Deu tudo certo!";
//   numero.classList.remove("erro");
//   numero.classList.add("ok");
// } else {
//   numero.innerHTML = "Deu tudo errado!";
//   numero.classList.add("erro");
//   numero.classList.remove("Ok");
// }

numero.innerHTML = "Processando...";
