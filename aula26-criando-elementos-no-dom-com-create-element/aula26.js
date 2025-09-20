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
  novoElemento.setAttribute("class", `curso c${chave + 1}`);
  caixa1.appendChild(novoElemento);
  console.log(chave);
});
