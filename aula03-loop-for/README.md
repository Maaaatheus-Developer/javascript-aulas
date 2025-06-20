# 🌟 Aula 03: Loop For

## 🎯 Objetivo
Dominar a estrutura básica do loop `for` e aplicar condicionais para verificar números pares e ímpares.

## 📚 Conceitos Fundamentais

### 🔄 Estrutura do Loop For
```javascript
for (inicialização; condição; incremento) {
  // código a ser executado
}
```

### 📊 Componentes do For
| Componente | Descrição | Exemplo |
|------------|-----------|---------|
| **Inicialização** | Define variável de controle | `let i = 0` |
| **Condição** | Testa se loop deve continuar | `i < 100` |
| **Incremento** | Modifica variável a cada iteração | `i++` |

## 🚀 Implementação

### 📝 Arquivo: `aula03.js`
```javascript
// Loop que executa 100 vezes (de 0 a 99)
for (let i = 0; i < 100; i++) {
  // Verifica se número é par ou ímpar
  if (i % 2 == 0) {
    console.log(`O número ${i} é par`);
  } else {
    console.log(`O número ${i} é impar`);
  }
}
```

## 🧮 Matemática por Trás

### ➗ Operador Módulo (%)
- **Conceito**: Retorna o resto da divisão
- **Par**: `número % 2 === 0`
- **Ímpar**: `número % 2 === 1`

### 📊 Exemplos do Módulo
```javascript
console.log(4 % 2);  // 0 (par)
console.log(5 % 2);  // 1 (ímpar)
console.log(8 % 2);  // 0 (par)
console.log(9 % 2);  // 1 (ímpar)
```

## 🧪 Variações do Loop For

### 🔢 Contagem Crescente
```javascript
for (let i = 1; i <= 10; i++) {
  console.log(`Número: ${i}`);
}
```

### 🔢 Contagem Decrescente
```javascript
for (let i = 10; i >= 1; i--) {
  console.log(`Countdown: ${i}`);
}
```

### 🔢 Incremento Personalizado
```javascript
for (let i = 0; i <= 20; i += 2) {
  console.log(`Número par: ${i}`);
}
```

### 🔢 Iteração em Arrays
```javascript
const frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta ${i + 1}: ${frutas[i]}`);
}
```

## 💡 Casos de Uso Práticos

### ✅ Geração de Tabuada
```javascript
const numero = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
```

### ✅ Soma de Números
```javascript
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(`Soma de 1 a 100: ${soma}`); // 5050
```

### ✅ Encontrar Números Primos
```javascript
function isPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```

## 🔧 Comparação com Outros Loops

| Loop | Melhor Para | Sintaxe |
|------|-------------|---------|
| `for` | Contador conhecido | `for(init; cond; incr)` |
| `while` | Condição indefinida | `while(condição)` |
| `for...of` | Valores de array | `for(valor of array)` |
| `for...in` | Propriedades de objeto | `for(chave in objeto)` |

## 📈 Performance e Otimização

### ⚡ Dicas de Performance
```javascript
// ✅ Boa prática - cache length
const arr = [1,2,3,4,5];
for (let i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// ❌ Evitar - recalcula length a cada iteração
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 Loop Infinito
```javascript
// ❌ PERIGO: Loop infinito
for (let i = 0; i < 10; /* esqueceu o i++ */) {
  console.log(i); // Sempre 0!
}
```

### 🐛 Escopo da Variável
```javascript
// ❌ Problema: var vaza do escopo
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Sempre 3
}

// ✅ Solução: let mantém escopo
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

## 📖 Template Literals

### 🎨 Interpolação de Strings
```javascript
const nome = "Maria";
const idade = 25;
console.log(`Nome: ${nome}, Idade: ${idade}`);

// Equivalente a:
console.log("Nome: " + nome + ", Idade: " + idade);
```

---

## 📋 Checklist de Aprendizado

- [ ] Entendo a sintaxe completa do for
- [ ] Sei usar o operador módulo (%)
- [ ] Posso criar loops crescentes e decrescentes
- [ ] Entendo template literals com ${}
- [ ] Consigo evitar loops infinitos
- [ ] Sei quando usar for vs outros tipos de loop

**🎉 Parabéns! Você dominou os loops for em JavaScript!**
