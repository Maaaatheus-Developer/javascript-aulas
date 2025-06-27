/*
🌟 === AULA 07: BREAK E CONTINUE === 🌟

⚙️ FUNCIONAMENTO:
- break: para a execução do loop completamente
- continue: pula para a próxima iteração do loop
- Úteis para otimizar performance e controlar lógica
*/

let n = 0;           // 🔢 Contador inicial
let max = 1000;      // 🎯 Limite máximo

//✅ Exemplo com break (comentado)
// while(n< max){
//     console.log('CFB Cursos - ' + n)  // 📝 Exibe mensagem
//     if(n > 8){                        // 🔍 Condição de parada
//         break                         // 🛑 Sai do loop quando n > 8
//     }
//     n++                              // ➕ Incrementa contador
// }
// console.log('Fim do programa')       // 🏁 Fim do loop

// 🧮 === EXEMPLO COM CONTINUE - CONTAGEM DE NÚMEROS PARES ===
let pares = 0;       // 📊 Contador de números pares

for (let i = n; i < max; i++) {
  if (i % 2 !== 0) {           // 🔍 Se o número é ímpar
    continue;                  // ⏭️ Pula para próxima iteração
  }
  pares++;                     // ➕ Incrementa contador de pares
}

console.log("Quantidade de números pares: " + pares);  // 📊 Resultado: 500 números pares
console.log("Fim do programa");                        // 🏁 Fim da execução
