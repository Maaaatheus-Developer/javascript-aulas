const numero = document.getElementById("numero");
const btn_promessa = document.getElementById("btn_promessa");

btn_promessa.addEventListener("click", (evt) => {
  numero.innerHTML = "Processando...";
  console.log(promessa());
  // .then((retorno) => {
  //   // then é executado quando a promise é resolvida com sucesso
  //   numero.innerHTML = retorno;
  //   numero.classList.remove("erro");
  //   numero.classList.add("ok");
  // })
  // .catch((retorno) => {
  //   // catch é executado quando a promise é rejeitada
  //   numero.innerHTML = retorno;
  //   numero.classList.add("erro");
  //   numero.classList.remove("Ok");
  // });
});

const promessa = () => {
  let promise = new Promise((resolve, reject) => {
    // promise recebe uma função com dois parâmetros: resolve e reject
    let resultado = true;
    let tempo = 3000;

    setTimeout(() => {
      if (resultado) {
        resolve("Deu tudo certo!");
        numero.innerHTML = "Deu tudo certo!";
        numero.classList.remove("erro");
        numero.classList.add("ok");
      } else {
        reject("Deu tudo errado!");
        numero.innerHTML = "Deu tudo errado!";
        numero.classList.add("erro");
        numero.classList.remove("Ok");
      }
    }, tempo);
  });
  return promise;
};

numero.innerHTML = "Esperando...";
