/*
🌟 === AULA 04: FOR...IN E FOR...OF === 🌟

🎯 OBJETIVO: Comparar diferentes tipos de loops para iterar sobre arrays

📚 CONCEITOS ABORDADOS:
- 🔄 Loop for tradicional com índices
- 🔑 Loop for...in (itera sobre índices/chaves)
- 💎 Loop for...of (itera sobre valores)
- 🆚 Diferenças entre os tipos de loops
- 💡 Quando usar cada tipo

⚙️ FUNCIONAMENTO:
- for tradicional: acessa elemento por índice num[i]
- for...in: 'n' representa o índice/chave do elemento
- for...of: 'n' representa o valor direto do elemento
*/

let num = [10, 20, 30, 40, 50];

//✅ Loop For tradicional - itera usando índices numericos
// for(let i= 0; i < num.length; i++ ){
//     console.log(num[i])  // 🎯 Acessa valor através do índice: num[0], num[1], etc.
// }

//✅ Loop For...In - itera sobre os ÍNDICES/CHAVES do array
// for (n in num) {
//     console.log(num[n])  // 🔑 'n' é o índice (0,1,2,3,4), acessa valor via num[n]
// }
// 💡 Útil para objetos onde você precisa tanto da chave quanto do valor

//✅ Loop For...Of - itera diretamente sobre os VALORES do array
for(n of num){
    console.log(n)  // 💎 'n' é diretamente o valor (10,20,30,40,50)
}
// 🚀 Mais simples quando você só precisa dos valores, não dos índices
