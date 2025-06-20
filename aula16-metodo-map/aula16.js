//✅ Uma forma de fazer usando o método map()
const converterInt = (e) => parseInt(e);
const dobrar = (e) => e * 2;
let num = ["1", "2", "3", "4", "5"].map(dobrar);
console.log(num);

//✅ outra forma de fazer usando o método map()
// const el = document.getElementsByTagName("div");

// el = [...el];
// el.map((e, i) => {
//   console.log(e.innerHTML);
// });

//✅ Outra forma de fazer usando o método map()
// const el = document.getElementsByTagName("div");
// const valores = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML);
// console.log(valores);

//✅ Mais uma forma de fazer

// const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT"];
// let c = cursos.map((el, i) => {
//   console.log("Curso: " + el + " - Posição do curso: " + i);
//   return "<div>" + el + " </div>";
// });
// console.log(c);
