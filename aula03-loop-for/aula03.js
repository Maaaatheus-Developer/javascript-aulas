/*
🌟 === AULA 03: LOOP FOR === 🌟

⚙️ FUNCIONAMENTO:
- for (inicialização; condição; incremento)
- let i = 0: inicializa contador em 0
- i < 100: continua enquanto i for menor que 100
- i++: incrementa i em 1 a cada iteração
- i % 2: resto da divisão por 2 (0 = par, 1 = ímpar)
*/

// 🔄 === LOOP QUE EXECUTA 100 VEZES (DE 0 A 99) ===
for (let i = 0; i < 100; i++) {
  // ➗ Verifica se o número é par ou ímpar usando operador módulo
  if (i % 2 == 0) {
    // ✅ Se resto da divisão por 2 é 0, o número é par
    console.log(`O número ${i} é par`);
  } else {
    // ❌ Se resto da divisão por 2 é 1, o número é ímpar
    console.log(`O número ${i} é impar`);
  }
}
