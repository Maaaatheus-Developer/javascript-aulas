/*
🌟 === AULA 09: FUNÇÕES COM PARÂMETROS === 🌟

⚙️ FUNCIONAMENTO:
- function nome() { código } - função sem parâmetros
- return valor - retorna resultado da função
- Função pode ter lógica interna e retornar diferentes valores
*/

// ⚡ === FUNÇÃO SEM PARÂMETROS (VALORES INTERNOS) ===
function canal() {
  let n1 = "0";                    // 📝 String que será convertida para número
  let n2 = 2;                      // 🔢 Número inteiro
  let res = n1 * n2;              // ✖️ Multiplicação (n1 é convertido automaticamente)
  
  // 🔀 Verifica se resultado é par ou ímpar
  if (res % 2 == 0) {             // ➗ Resto da divisão por 2
    return "Par";                 // ✅ Retorna "Par" se resto é 0
  } else {
    return "Impar";               // ❌ Retorna "Ímpar" se resto é 1
  }
}

// 📊 === CHAMADA DA FUNÇÃO E ARMAZENAMENTO DO RESULTADO ===
let res = canal();               // 🔄 Executa a função e armazena o retorno
console.log(res);                // 📝 Exibe: "Par" (pois 0 * 2 = 0, que é par)
