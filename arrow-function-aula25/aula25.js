//✅ Padrão função anônima
// const soma = function (v1, v2) {
//   return v1 + v2;
// };
// console.log(soma(10, 5));

const soma = (v1, v2) => {
  let res = v1 + v2;
  return res;
};
console.log(soma(10, 5));

const nome = (n) => {
  return n;
};
console.log(nome("Getúlio Vargas"));

const adicionar = (n) => n + 10;
console.log(adicionar(10));

// 🛑OBS Arrow functions🛑
//Se for só um parâmetro de entrada não preciso dos parenteses e do return
//Agora se for algo mais complexo, é preciso indicar as chaves e o return
