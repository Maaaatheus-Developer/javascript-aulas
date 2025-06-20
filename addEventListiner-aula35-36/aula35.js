const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_transferir");
const todosCursos = [...document.querySelectorAll(".curso")];

todosCursos.map((event) => {
  event.addEventListener("click", (e) => {
    const curso = e.target;
    curso.classList.toggle("selecionado");
  });
});

//✅Resolução feita por mim: Matheus
btn.addEventListener("click", () => {
  todosCursos.map((el) => {
    if (
      el.parentElement.id == "caixa1" &&
      el.classList.contains("selecionado")
    ) {
      caixa2.appendChild(el);
    } else if (
      el.parentElement.id == "caixa2" &&
      !el.classList.contains("selecionado")
    ) {
      caixa1.appendChild(el);
    }
  });
});

// //✅ Resolução do Professor
// btn.addEventListener("click", () => {
//   const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
//   const cursosNaoSelecionados = [
//     ...document.querySelectorAll(".curso:not(.selecionado)"),
//   ];
//   cursosSelecionados.map((el) => {
//     caixa2.appendChild(el);
//   });
//   cursosNaoSelecionados.map((el) => {
//     caixa1.appendChild(el);
//   });
// });
