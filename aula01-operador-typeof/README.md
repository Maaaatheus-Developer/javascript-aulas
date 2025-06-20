# 🌟 Aula 01: Operador typeof

## 🎯 Objetivo
Aprender a usar o operador `typeof` para verificar e identificar tipos de dados em JavaScript.

## 📚 Conceitos Fundamentais

### 🔍 O que é o typeof?
O `typeof` é um operador unário que retorna uma string indicando o tipo do operando.

### 📊 Tipos de Dados em JavaScript
| Tipo | Descrição | Exemplo | typeof retorna |
|------|-----------|---------|----------------|
| `number` | Números inteiros e decimais | `42`, `3.14` | `"number"` |
| `string` | Texto/cadeia de caracteres | `"Hello"`, `'World'` | `"string"` |
| `boolean` | Valores lógicos | `true`, `false` | `"boolean"` |
| `object` | Objetos, arrays, null | `{}`, `[]`, `null` | `"object"` |
| `undefined` | Variável não definida | `undefined` | `"undefined"` |
| `function` | Funções | `function() {}` | `"function"` |

## 🚀 Implementação

### 📝 Arquivo: `aula01.js`
```javascript
// Declaração de variáveis com diferentes tipos
let v1 = 10;                    // number
let v2 = "10";                  // string
let v3 = v1 === v2;            // boolean (false)
let v4 = { nome: "Bruno" };     // object

// Verificação dos tipos
console.log("Valor " + v1 + " - Tipo: " + typeof v1);        // number
console.log("Valor " + v2 + " - Tipo: " + typeof v2);        // string
console.log("Valor " + v3 + " - Tipo: " + typeof v3);        // boolean
console.log("Valor " + v4 + " - Tipo: " + typeof v4);        // object
console.log("Valor " + v4.nome + " - Tipo: " + typeof v4.nome); // string
```

## 🧪 Experimentação

### 🔬 Teste Diferentes Valores
```javascript
console.log(typeof 42);           // "number"
console.log(typeof "Hello");      // "string"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" ⚠️ (peculiaridade do JS)
console.log(typeof []);           // "object"
console.log(typeof {});           // "object"
console.log(typeof function(){}); // "function"
```

## ⚠️ Pegadinhas Importantes

### 🐛 `null` retorna "object"
```javascript
let valor = null;
console.log(typeof valor); // "object" (bug histórico do JavaScript)

// Verificação correta para null:
if (valor === null) {
  console.log("É null");
}
```

### 🔢 Diferença entre Number e String
```javascript
let numero = 10;
let texto = "10";
console.log(numero === texto);        // false (tipos diferentes)
console.log(typeof numero);           // "number"
console.log(typeof texto);            // "string"
```

## 💡 Casos de Uso Práticos

### ✅ Validação de Parâmetros
```javascript
function processarDados(dados) {
  if (typeof dados !== "string") {
    throw new Error("Esperado uma string");
  }
  // Processar dados...
}
```

### ✅ Verificação Defensiva
```javascript
function somar(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Ambos valores devem ser números";
  }
  return a + b;
}
```

### ✅ Debugging
```javascript
function debug(variavel, nome) {
  console.log(`${nome}: ${variavel} (tipo: ${typeof variavel})`);
}
```

## 🔧 Operadores Relacionados

| Operador | Uso | Exemplo |
|----------|-----|---------|
| `typeof` | Verifica tipo | `typeof valor` |
| `instanceof` | Verifica instância | `obj instanceof Array` |
| `===` | Comparação estrita | `a === b` |
| `==` | Comparação com coerção | `a == b` |

## 📖 Dicas Importantes

### 💎 Boas Práticas
- ✅ Use `typeof` para verificar tipos primitivos
- ✅ Use `===` para comparações estritas
- ✅ Sempre verifique tipos antes de operações críticas
- ❌ Evite `==` (pode causar conversões inesperadas)

### 🎯 Para Objetos Específicos
```javascript
// Para arrays
Array.isArray(valor)

// Para null
valor === null

// Para NaN
Number.isNaN(valor)
```

---

## 📋 Checklist de Aprendizado

- [ ] Entendo o que é o operador typeof
- [ ] Sei identificar todos os tipos primitivos
- [ ] Conheço a peculiaridade do null
- [ ] Posso usar typeof para validações
- [ ] Entendo a diferença entre === e ==

**🎉 Parabéns! Você dominou a verificação de tipos em JavaScript!**
