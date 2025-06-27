/*
🌟 === AULA 01: OPERADOR TYPEOF === 🌟

⚙️ FUNCIONAMENTO:
O operador typeof retorna uma string indicando o tipo do operando.
Tipos possíveis: "undefined", "boolean", "number", "string", "object", "function", "symbol", "bigint"
*/

// 📝 === DECLARAÇÃO DE VARIÁVEIS COM DIFERENTES TIPOS ===
let v1 = 10; // 🔢 Tipo: number (número inteiro)
let v2 = "10"; // 📝 Tipo: string (texto/string)
let v3 = v1 === v2; // ✅ Tipo: boolean (resultado da comparação estrita)
let v4 = { nome: "Bruno" }; // 📦 Tipo: object (objeto com propriedade)

// 🔍 === VERIFICAÇÃO DOS TIPOS USANDO TYPEOF ===
console.log("Valor " + v1 + " - Tipo: " + typeof v1); // 🔢 number
console.log("Valor " + v2 + " - Tipo: " + typeof v2); // 📝 string
console.log("Valor " + v3 + " - Tipo: " + typeof v3); // ✅ boolean (false - 10 !== "10")
console.log("Valor " + v4 + " - Tipo: " + typeof v4); // 📦 object
console.log("Valor " + v4 + " - Tipo: " + typeof v4.nome); // 📝 string (propriedade do objeto)
