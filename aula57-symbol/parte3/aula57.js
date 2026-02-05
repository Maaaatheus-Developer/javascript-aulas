const nome = Symbol("nome");
const numero = Symbol("numero");
const corUniforme = Symbol("cor do uniforme");
const teste = Symbol("teste");

const Jogador = {
  [nome]: "j1",
};

Jogador[numero] = 10;
Jogador[corUniforme] = "azul";
Jogador[teste] = "teste";

for (p in Jogador) {
  console.log(p);
}

console.log(Jogador);
console.log(Jogador[numero]);
console.log(Jogador[corUniforme]);
console.log(Jogador[teste]);
