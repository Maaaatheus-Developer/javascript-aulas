/*
=== AULA 02: OPERADOR SPREAD - EXEMPLO 1 ===

OBJETIVO: Aprender a usar o operador spread (...) para combinar objetos

CONCEITOS ABORDADOS:
- Operador spread (...) com objetos
- Criação e estrutura de objetos
- Mesclagem/fusão de propriedades de objetos
- Precedência em caso de propriedades duplicadas

FUNCIONAMENTO:
O operador spread (...) "espalha" as propriedades de um objeto dentro de outro.
Se houver propriedades com mesmo nome, a última prevalece (jogador2 sobrescreve jogador1).
*/

// Criação do primeiro objeto jogador
const jogador1 = {
  nome: "Bruno", // String: nome do jogador
  energia: 100, // Number: pontos de energia
  vidas: 3, // Number: quantidade de vidas
  magia: 150, // Number: pontos de magia
};

// Criação do segundo objeto jogador com propriedades diferentes
const jogador2 = {
  nome: "Bruce", // String: nome diferente (vai sobrescrever o de jogador1)
  energia: 80, // Number: energia diferente (vai sobrescrever)
  vidas: 5, // Number: vidas diferentes (vai sobrescrever)
  velocidade: 80, // Number: nova propriedade exclusiva
};

// Usando spread operator para combinar os dois objetos
// Resultado: propriedades de jogador1 + jogador2 (jogador2 prevalece em conflitos)
const jogador3 = { ...jogador1, ...jogador2 };

// Comentários de debug anteriores (desabilitados)
// console.log("n1 " + n1);
// console.log("n2 " + n2);

// Exibe o objeto resultante da fusão
console.log(jogador3);
// Resultado esperado: { nome: "Bruce", energia: 80, vidas: 5, magia: 150, velocidade: 80 }
