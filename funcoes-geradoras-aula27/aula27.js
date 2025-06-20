// ✅ Exemplo com função utilizando o yield
// function* perguntas() {
//   const nome = yield "Qual é o seu nome";
//   const esporte = yield "Qaul seu esporte favorito?";
//   return "Seu nome é " + nome + ", seu esporte favorito é " + esporte;
// }

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 5) break;
  }
}

const itc = contador();
// for (let i = 0; i <= 10; i++) {
//   console.log(itc.next().value);
// }

for (let c of itc) {
  console.log(c);
}

// ✅Usado com o o primeiro exemplo
// const itp = perguntas();
// console.log(itp.next().value);
// console.log(itp.next("Bruno").value);
// console.log(itp.next("Natação").value);
