// const c1 = document.querySelector("#c1");
const cursos = [...document.querySelectorAll(".curso")];

cursos.map((el) => {
  el.addEventListener("click", (event) => {
    const el = event.target;
    el.classList.add("destaque");
    console.log(el.innerHTML + " foi clicado");
  });
});

// c1.addEventListener("click", (event) => {
// const el = event.target;
// el.classList.add("destaque");
// });
