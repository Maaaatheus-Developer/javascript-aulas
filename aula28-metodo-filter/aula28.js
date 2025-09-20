// const filtroMaior18 = (valor) => {
//   if (valor >= 18) {
//     return valor;
//   }
// };

const idades = [15, 21, 30, 17, 18, 44, 12, 50];
const maior = idades.filter((valor, indice, arr) => {
  if (valor >= 18) {
    return valor;
  }
});

const menor = idades.filter((valor, indice, arr) => {
  if (valor < 18) {
    return valor;
  }
});

// const filtroMaior18 = (valor, indice, arr) => {};

console.log(idades);
console.log(menor);
