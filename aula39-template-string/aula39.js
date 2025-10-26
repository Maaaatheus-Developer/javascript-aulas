const caixa = document.querySelector("#caixa");

const carros = ["Polo", "Golf", "T-Cross", "Tiguan"];

let ul = `<ul>`;

carros.map((el) => {
  ul += `<li>${el}</li>`;
});

ul + `<ul/>`;

const curso = "Javascript";
const canal = "CFB Cursos";
// const frase = "Este é o curso de " + curso + " do canal " + canal;

const frase = `Este é o <br/> curso de ${curso} do <br/> canal ${canal}`;

console.log(frase);

caixa.innerHTML = ul;
