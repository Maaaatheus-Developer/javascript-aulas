/*
🌟 === AULA 13: ARROW FUNCTIONS === 🌟

🎯 OBJETIVO: Aprender a sintaxe moderna das arrow functions (=>) 

📚 CONCEITOS ABORDADOS:
- ➡️ Sintaxe de arrow functions com =>
- 🆚 Diferença entre função tradicional e arrow function
- ⚡ Simplificação de sintaxe para casos simples
- 📝 Quando usar parênteses e chaves
- 🔄 Return implícito vs explícito

⚙️ FUNCIONAMENTO:
- (parâmetros) => { código } - sintaxe básica
- Um parâmetro: pode omitir parênteses
- Uma expressão: pode omitir chaves e return (return implícito)
- Múltiplas linhas: necessário chaves e return explícito
*/

//✅ Comparação: Função anônima tradicional (comentada)
// const soma = function (v1, v2) {
//   return v1 + v2;
// };
// console.log(soma(10, 5));

// ➡️ === ARROW FUNCTION COM MÚLTIPLAS LINHAS ===
const soma = (v1, v2) => {
  let res = v1 + v2;  // 📊 Variável intermediária
  return res;         // 🔄 Return explícito necessário
};
console.log(soma(10, 5));  // 🎯 Resultado: 15

// ➡️ === ARROW FUNCTION COM RETURN SIMPLES ===
const nome = (n) => {
  return n;  // 🔄 Return explícito
};
console.log(nome("Getúlio Vargas"));  // 📝 Retorna: "Getúlio Vargas"

// ⚡ === ARROW FUNCTION SIMPLIFICADA ===
const adicionar = (n) => n + 10;  // 🚀 Return implícito, sem chaves
console.log(adicionar(10));       // 🎯 Resultado: 20

// 🛑 === REGRAS DAS ARROW FUNCTIONS === 🛑
// 1️⃣ Um parâmetro: pode omitir parênteses → n => n + 10
// 2️⃣ Múltiplos parâmetros: parênteses obrigatórios → (a,b) => a + b  
// 3️⃣ Uma expressão: return implícito → n => n + 10
// 4️⃣ Múltiplas linhas: chaves e return explícito obrigatórios
