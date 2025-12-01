class Jogador {
  constructor(nome) {
    this.nome = nome;
    this.id = Symbol();
  }
}

let jogadores = [
  new Jogador("jg1"),
  new Jogador("jg1"),
  new Jogador("jg2"),
  new Jogador("jg3"),
  new Jogador("jg4"),
  new Jogador("jg4"),
  new Jogador("jg5"),
  new Jogador("jg5"),
];

let s = [];

let s_jogadores = jogadores.filter((jg) => {
  return jg.nome == "jg1";
});

s = s_jogadores.map((jg) => {
  return jg.id;
});

//-------------------------------------------------------------------------------------------------------
//Forma de excluir itens de um array utilizando filter onde ele retorna um novo array sem o item desejado
// isso é possível porque cada jogador tem um id único gerado pelo Symbol e o returno do filter é baseado na comparação desse id
// jogadores = jogadores.filter((jg) => {
//   return jg.nome !== "jg5" && jg.nome !== "jg4";
// });
//-------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------
//Exemplo removendo o jogador com o método slice
// let indice = jogadores.findIndex(jg => jg.id === s1);
// if (indice !== -1) {
//   jogadores = [
//     ...jogadores.slice(0, indice),
//     ...jogadores.slice(indice + 1)
//   ];
// }
//----------------------------------------------------------------

console.log(s_jogadores);
console.log(s);
