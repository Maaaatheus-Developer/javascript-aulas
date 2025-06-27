/*
🌟 === AULA 06: LOOP DO...WHILE === 🌟

⚙️ FUNCIONAMENTO:
- do { código } while (condição) - executa primeiro, verifica depois
- Diferente do while: executa pelo menos uma vez, mesmo se condição for falsa
- Útil quando você precisa executar o código ao menos uma vez
*/

let n = 10;          // 🔢 Variável de controle iniciada em 10
 do {
  console.log("CFB Cursos");  // 📝 Executa pelo menos uma vez
  n++;                        // ➕ Incrementa n (n = n + 1)
} while (n < 10);             // 🔍 Condição: continua se n < 10 (falsa desde o início)

console.log('Fim do programa');  // 🏁 Mensagem final

// 💡 NOTA: Mesmo com n=10 (condição falsa), "CFB Cursos" é exibido uma vez!
