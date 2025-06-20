/*
=== AULA 02: OPERADOR SPREAD - EXEMPLO 2 ===

OBJETIVO: Demonstrar o uso do operador spread (...) com arrays e HTMLCollections

CONCEITOS ABORDADOS:
- Conversão de HTMLCollection para Array usando spread
- Diferença entre HTMLCollection e Array
- Método forEach() em arrays
- Spread operator com parâmetros de função
- Arrow functions

FUNCIONAMENTO:
- HTMLCollection não possui métodos de array como forEach()
- Spread operator converte HTMLCollection em Array verdadeiro
- Permite usar métodos de array e passar elementos individuais para funções
*/

// Obtém HTMLCollection (não é um array real, sem métodos como forEach)
const objs1 = document.getElementsByTagName("div");

// Usa spread operator para converter HTMLCollection em Array verdadeiro
const objs2 = [...document.getElementsByTagName("div")];

// Agora pode usar forEach() para iterar sobre cada elemento
objs2.forEach((element) => {
  // Modifica o conteúdo HTML de cada div
  element.innerHTML = "mudado o nome";

  // Exibe cada elemento no console
  console.log(element);
});

// Comparação: HTMLCollection vs Array
console.log(objs1); // HTMLCollection - coleção "viva" do DOM
console.log(objs2); // Array - cópia estática dos elementos

// === EXEMPLO COM FUNÇÕES E SPREAD ===

// Arrow function que soma três valores
const soma = (v1, v2, v3) => {
  return v1 + v2 + v3;
};

// Array com valores para somar
let valores = [1, 5, 4, 190];

// Usa spread para "espalhar" os elementos do array como argumentos individuais
// soma(...valores) é equivalente a soma(1, 5, 4, 190)
// Nota: só os 3 primeiros valores serão usados (v1=1, v2=5, v3=4)
console.log(soma(...valores)); // Resultado: 10 (1+5+4)
