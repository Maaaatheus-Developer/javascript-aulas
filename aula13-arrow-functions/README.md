# 🌟 Aula 13: Arrow Functions

## 🎯 Objetivo
Dominar a sintaxe moderna das arrow functions (=>) e entender quando e como usá-las efetivamente.

## 📚 Conceitos Fundamentais

### ➡️ O que são Arrow Functions?
Arrow functions são uma forma mais concisa de escrever funções em JavaScript, introduzidas no ES6 (2015).

### 🆚 Comparação de Sintaxes
```javascript
// Função tradicional
function somar(a, b) {
  return a + b;
}

// Função anônima
const somar = function(a, b) {
  return a + b;
};

// Arrow function
const somar = (a, b) => a + b;
```

## 🚀 Implementação

### 📝 Arquivo: `aula13.js`
```javascript
// Arrow function com múltiplas linhas
const soma = (v1, v2) => {
  let res = v1 + v2;
  return res;
};

// Arrow function com return simples
const nome = (n) => {
  return n;
};

// Arrow function simplificada (return implícito)
const adicionar = (n) => n + 10;
```

## 📐 Regras de Sintaxe

### 🔧 Variações da Sintaxe

| Caso | Sintaxe | Exemplo |
|------|---------|---------|
| **Sem parâmetros** | `() => {}` | `() => console.log("Olá")` |
| **Um parâmetro** | `param => {}` | `x => x * 2` |
| **Múltiplos parâmetros** | `(a, b) => {}` | `(a, b) => a + b` |
| **Uma expressão** | `param => expressão` | `x => x * 2` |
| **Múltiplas linhas** | `param => { ... }` | `x => { const y = x * 2; return y; }` |

### 🎯 Return Implícito vs Explícito

```javascript
// ✅ Return implícito (uma linha)
const dobrar = x => x * 2;

// ✅ Return explícito (múltiplas linhas)
const calcular = x => {
  const resultado = x * 2;
  return resultado;
};

// ✅ Return de objeto (use parênteses)
const criarPessoa = nome => ({ nome: nome, idade: 0 });
```

## 🧪 Exemplos Práticos

### 📊 Com Arrays
```javascript
const numeros = [1, 2, 3, 4, 5];

// Map com arrow function
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// Filter com arrow function
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]

// Reduce com arrow function
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 15
```

### 🎮 Eventos no DOM
```javascript
// Tradicional
document.getElementById("btn").addEventListener("click", function() {
  console.log("Clicou!");
});

// Arrow function
document.getElementById("btn").addEventListener("click", () => {
  console.log("Clicou!");
});
```

## ⚠️ Diferenças Importantes

### 🔄 Binding do `this`
```javascript
const objeto = {
  nome: "Maria",
  
  // Função tradicional - this refere ao objeto
  tradicional: function() {
    console.log(this.nome); // "Maria"
  },
  
  // Arrow function - this refere ao escopo pai
  arrow: () => {
    console.log(this.nome); // undefined
  }
};
```

### 🚫 Não Podem Ser Usadas Como

| Uso | Motivo |
|-----|--------|
| **Construtores** | Não tem `prototype` |
| **Métodos de objeto** | `this` não funciona como esperado |
| **Geradores** | Não suportam `yield` |
| **Argumentos dinâmicos** | Não tem objeto `arguments` |

## 💡 Casos de Uso Ideais

### ✅ Quando Usar Arrow Functions
- **Callbacks curtos**: `array.map(x => x * 2)`
- **Funções de uma linha**: `const isValid = value => value != null`
- **Event handlers simples**: `btn.onclick = () => console.log("Click")`
- **Programação funcional**: `filter`, `map`, `reduce`

### ❌ Quando NÃO Usar
- **Métodos de objeto**: Quando precisa acessar `this`
- **Construtores**: Para criar instâncias
- **Funções principais**: Quando legibilidade é prioridade
- **Debugging**: Funções nomeadas são mais fáceis de debugar

## 🔧 Transformações Comuns

### 📝 De Função Tradicional para Arrow
```javascript
// Antes
function multiplicar(a, b) {
  return a * b;
}

// Depois
const multiplicar = (a, b) => a * b;

// Antes
const numeros = [1,2,3,4,5];
const pares = numeros.filter(function(n) {
  return n % 2 === 0;
});

// Depois
const pares = numeros.filter(n => n % 2 === 0);
```

## 🎨 Exemplos Avançados

### 🔄 Currying com Arrow Functions
```javascript
const somar = a => b => a + b;
const somar5 = somar(5);
console.log(somar5(3)); // 8
```

### 🔗 Composição de Funções
```javascript
const adicionar10 = x => x + 10;
const multiplicarPor2 = x => x * 2;
const composta = x => multiplicarPor2(adicionar10(x));

console.log(composta(5)); // 30
```

---

## 📋 Checklist de Aprendizado

- [ ] Entendo a sintaxe básica das arrow functions
- [ ] Sei a diferença entre return implícito e explícito
- [ ] Conheço as regras para parênteses em parâmetros
- [ ] Entendo as diferenças do `this`
- [ ] Sei quando usar e quando não usar arrow functions
- [ ] Posso refatorar funções tradicionais para arrow functions

**🎉 Parabéns! Você dominou as arrow functions modernas!**
