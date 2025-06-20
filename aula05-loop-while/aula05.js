/*
🌟 === AULA 05: LOOP WHILE === 🌟

🎯 OBJETIVO: Aprender a estrutura do loop while e aplicar em cálculo de fatorial

📚 CONCEITOS ABORDADOS:
- 🔄 Estrutura do loop while (condição)
- 🆚 Diferença entre while e for
- 🧮 Cálculo de fatorial
- ➖ Operador de decremento (--)
- ⚠️ Importância de modificar a variável de controle

⚙️ FUNCIONAMENTO:
- while (condição): executa enquanto condição for verdadeira
- Necessário modificar variável de controle dentro do loop
- Fatorial: n! = n × (n-1) × (n-2) × ... × 1
*/

//✅ Exemplo básico de while (comentado)
// let n = 0;
// while (n < 10) {
//   console.log(n);     // 📊 Exibe o valor atual
//   n = n + 1;          // ➕ Incrementa para evitar loop infinito
// }

//✅ Exemplo prático: Cálculo de fatorial usando while
let n = 10;          // 🔢 Número para calcular o fatorial (10!)
let fatorial = 1;    // 📊 Acumulador iniciado em 1 (neutro da multiplicação)

// 🔄 Loop continua enquanto n for maior ou igual a 1
while (n >= 1) {
  fatorial = fatorial * n;  // ✖️ Multiplica fatorial pelo valor atual de n
  n--;                      // ➖ Decrementa n (equivale a n = n - 1)
  console.log(fatorial);    // 📊 Mostra resultado parcial a cada iteração
}

// 🎯 Exibe o resultado final do fatorial
console.log(fatorial);  // 🧮 10! = 3.628.800
