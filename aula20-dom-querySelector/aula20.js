const divTodas = [...document.getElementsByTagName("div")];
const cursoTodos = [...document.getElementsByClassName("curso")];
const cursoC1 = [...document.getElementsByClassName("c1")];
const cursoC2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementById("c1");

// const query_divTodas = [...document.querySelectorAll("div[class]")];
const query_divTodas = [...document.querySelectorAll("div > p")];
const query_cursoTodos = [...document.querySelectorAll(".curso")];
const query_cursoC1 = [...document.querySelectorAll(".c1,p")];
const query_cursoC2 = [...document.querySelectorAll(".c2")];
const query_cursoEspecial = document.querySelectorAll("#c1")[0];
console.log(query_divTodas);

// console.log(divTodas);
// console.log(cursoTodos);
// console.log(cursoC1);
// console.log(cursoC2);
// console.log(cursoEspecial);

// cursoC2.map((el) => {
//   el.classList.add("destaque");
// });
