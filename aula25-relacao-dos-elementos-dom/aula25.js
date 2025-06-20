/*
🌟 === AULA 25: RELAÇÃO DOS ELEMENTOS DOM === 🌟

🎯 OBJETIVO: Aprender a navegar pela árvore DOM usando relações entre elementos

📚 CONCEITOS ABORDADOS:
- 🔗 Navegação entre elementos pais e filhos no DOM
- 👆 Propriedade parentNode para acessar elemento pai
- 👶 Propriedade children para acessar elementos filhos
- ✅ Método hasChildNodes() para verificar se há filhos
- 🆚 Propriedade childNodes vs children
- 🥇 Propriedade firstElementChild
- ✏️ Modificação de innerHTML através de navegação DOM

⚙️ FUNCIONAMENTO:
- parentNode: retorna o elemento pai
- children: retorna HTMLCollection dos elementos filhos
- hasChildNodes(): retorna boolean indicando se há nós filhos
- Navegação pode ser encadeada: pai.pai.filho[índice]
*/

// 🎯 === SELEÇÃO DE ELEMENTOS DO DOM ===
const caixa1 = document.querySelector("#caixa1");        // 📦 Elemento com id="caixa1"
const btn_c = [...document.querySelectorAll(".curso")];  // 📋 Array de elementos com class="curso"
const c1_2 = document.querySelector("#c1_2");            // 🎯 Elemento com id="c1_2"

// 👆 === NAVEGAÇÃO PARA ELEMENTOS PAIS ===
console.log(c1_2.parentNode.parentNode); 
// 🔼 Navega: c1_2 → pai → pai (avô do elemento c1_2)

console.log(c1_2.parentNode.parentNode.parentNode.children[4]); 
// 🔼🔼🔼 Navega: c1_2 → pai → pai → pai, depois acessa o 5º filho (índice 4)

// 👶 === VERIFICAÇÃO DE FILHOS (EXEMPLOS COMENTADOS) ===
// console.log(caixa1.hasChildNodes());
// ✅ Verifica se caixa1 possui nós filhos (retorna true/false)

// console.log(btn_c[0].hasChildNodes());
// ✅ Verifica se o primeiro elemento .curso possui filhos

// console.log(btn_c[0].childNodes);
// 📋 Retorna todos os nós filhos (incluindo text nodes)

// console.log(
//   btn_c[0].children.length > 0 ? "possui filhos" : "não possui filhos"
// );
// ❓ Operador ternário: verifica se há elementos filhos e retorna mensagem

// ✏️ === MODIFICAÇÃO DE CONTEÚDO ATRAVÉS DE NAVEGAÇÃO ===
// console.log(caixa1.firstElementChild.innerHTML='teste');
// 🥇 Modifica o innerHTML do primeiro elemento filho de caixa1

// console.log((caixa1.children[2].innerHTML = "teste"));
// 🎯 Modifica o innerHTML do 3º filho (índice 2) de caixa1
