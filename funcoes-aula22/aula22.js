function adicionar(v) {
  valor += v;
}

let valor = 0;
console.log(valor);

adicionar(10);
console.log(valor);

adicionar(5);
console.log(valor);

let valorPadrao = 2;

function soma(n1 = valorPadrao, n2 = valorPadrao) {
  let res;
  res = n1 + n2;
  return res;
}

let resultado_soma = soma();
// console.log(resultado_soma);
