const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector("#c1_2");

console.log(c1_2.parentNode.parentNode); // retorna o elemento pai do elemento c1_2

console.log(c1_2.parentNode.parentNode.parentNode.children[4]); // retorna o elemento pai do elemento c1_2, depois o pai do pai, e depois o filho de índice 4

// console.log(caixa1.hasChildNodes());
// console.log(btn_c[0].hasChildNodes());
// console.log(btn_c[0].childNodes);
// console.log(
//   btn_c[0].children.length > 0 ? "possui filhos" : "não possui filhos"
// );
// // console.log(caixa1.firstElementChild.innerHTML='teste');
// console.log((caixa1.children[2].innerHTML = "teste"));
