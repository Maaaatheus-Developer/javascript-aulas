const caixa1 = document.querySelector("#caixa1");
const btn_c = document.querySelectorAll(".curso");
const c1_2 = document.querySelector("#c1_2");
const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "React",
  "MySQL",
  "React Native",
];

cursos.map((el, chave) => {
  const novoElemento = document.createElement("div");
  novoElemento.innerHTML = el;

  const btn_lixeira = document.createElement("img");
  btn_lixeira.setAttribute("src", "./images/excluir.png");
  btn_lixeira.setAttribute("class", "btn_lixeira");
  novoElemento.appendChild(btn_lixeira);

  novoElemento.setAttribute("class", `curso c${chave + 1}`);

  btn_lixeira.addEventListener("click", (e) => {
    console.log(e.target.parentNode);
    caixa1.removeChild(novoElemento);
  });

  caixa1.appendChild(novoElemento);
});
