/*
🌟 === AULA 18: DOM - getElementById === 🌟

🎯 OBJETIVO: Aprender a selecionar elementos HTML pelo ID e trabalhar com coleções

📚 CONCEITOS ABORDADOS:
- 🎯 getElementById() para selecionar elemento único
- 📋 getElementsByTagName() para selecionar múltiplos elementos
- 🔄 Conversão de HTMLCollection para Array com spread operator
- 📦 Armazenamento de elementos em arrays
- 🗺️ Método map() para iterar sobre arrays
- 🆚 Diferença entre HTMLCollection e Array

⚙️ FUNCIONAMENTO:
- getElementById(): retorna UM elemento ou null
- getElementsByTagName(): retorna HTMLCollection (array-like)
- Spread operator [...] converte HTMLCollection em Array real
- Arrays permitem uso de métodos como map(), forEach(), etc.
*/

// 🎯 === SELEÇÃO DE ELEMENTOS INDIVIDUAIS POR ID ===
const dc1 = document.getElementById("c1");  // 📍 Seleciona elemento com id="c1"
const dc2 = document.getElementById("c2");  // 📍 Seleciona elemento com id="c2"
const dc3 = document.getElementById("c3");  // 📍 Seleciona elemento com id="c3"
const dc4 = document.getElementById("c4");  // 📍 Seleciona elemento com id="c4"
const dc5 = document.getElementById("c5");  // 📍 Seleciona elemento com id="c5"
const dc6 = document.getElementById("c6");  // 📍 Seleciona elemento com id="c6"

// 📦 === AGRUPAMENTO DE ELEMENTOS EM ARRAY ===
const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];
// 🗂️ Cria array com todos os elementos selecionados para facilitar manipulação

// 📋 === SELEÇÃO DE MÚLTIPLOS ELEMENTOS POR TAG ===
const colecaoHTML = [...document.getElementsByTagName("div")];
// 🔄 Seleciona TODAS as divs da página e converte para Array

// 📊 === EXIBIÇÃO E ITERAÇÃO ===
console.log(colecaoHTML);  // 📝 Mostra o array com todas as divs

// 🗺️ Usa map() para iterar sobre cada elemento da coleção
colecaoHTML.map((e) => {
  console.log(e);  // 📍 Exibe cada elemento div individualmente
});
