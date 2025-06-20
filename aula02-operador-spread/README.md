# 🌟 Aula 02: Operador Spread (...)

## 🎯 Objetivo
Aprender a usar o operador spread (...) para "espalhar" propriedades de objetos e elementos de arrays, permitindo combinar, copiar e manipular dados de forma eficiente.

## 📚 Conceitos Fundamentais

### 🔧 Operador Spread (...)
O operador spread (...) permite "espalhar" elementos de um array ou propriedades de um objeto dentro de outro.

### 📊 Funcionalidades do Spread
| Uso | Descrição | Exemplo |
|-----|-----------|---------|
| Objetos | Combina propriedades | `{...obj1, ...obj2}` |
| Arrays | Combina elementos | `[...arr1, ...arr2]` |
| Cópia | Cria cópia superficial | `{...original}` |
| Parâmetros | Expande argumentos | `func(...args)` |

## 🚀 Implementação

### 📝 Arquivo: `aula02ex01.js`
```javascript
// Exemplo 1: Combinando objetos
const jogador1 = {
  nome: "Bruno",
  energia: 100,
  vidas: 3,
  magia: 150
};

const jogador2 = {
  nome: "Bruce",    // Sobrescreve jogador1
  energia: 80,      // Sobrescreve jogador1
  vidas: 5,         // Sobrescreve jogador1
  velocidade: 80    // Nova propriedade
};

const jogador3 = { ...jogador1, ...jogador2 };
console.log(jogador3);
// Resultado: { nome: "Bruce", energia: 80, vidas: 5, magia: 150, velocidade: 80 }
```

### 📝 Arquivo: `aula02ex02.js`
```javascript
// Exemplo 2: Outros usos do spread
// (Verificar conteúdo do arquivo para exemplos específicos)
```

### 🎨 Arquivo: `aula02.html`
```html
<!-- HTML para testar os exemplos de spread operator -->
```

## 🧪 Experimentação

### 🔬 Teste 1: Combinando Arrays
```javascript
const frutas = ["maçã", "banana"];
const verduras = ["alface", "tomate"];
const comidas = [...frutas, ...verduras];
console.log(comidas); // ["maçã", "banana", "alface", "tomate"]
```

### 🔬 Teste 2: Copiando Objetos
```javascript
const original = { a: 1, b: 2 };
const copia = { ...original };
copia.c = 3;
console.log(original); // { a: 1, b: 2 }
console.log(copia);    // { a: 1, b: 2, c: 3 }
```

## 💡 Casos de Uso Práticos

### ✅ Quando Usar
- Combinar múltiplos objetos ou arrays
- Criar cópias superficiais de dados
- Adicionar propriedades a um objeto existente
- Passar arrays como argumentos para funções
- Atualizar estado em React/frameworks

### ❌ Quando NÃO Usar
- Com objetos muito aninhados (cópia superficial apenas)
- Quando performance é crítica em loops intensivos
- Com dados que não precisam ser combinados

## ⚠️ Pegadinhas Comuns

### 🐛 Cópia Superficial
```javascript
const obj = { a: { b: 1 } };
const copia = { ...obj };
copia.a.b = 2;
console.log(obj.a.b); // 2 (original foi modificado!)
```

### ✅ Solução: Cópia Profunda
```javascript
const obj = { a: { b: 1 } };
const copia = JSON.parse(JSON.stringify(obj));
// Ou usar bibliotecas como Lodash cloneDeep
```

### 🐛 Ordem de Precedência
```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const resultado = { ...obj1, ...obj2 };
// obj2.b (3) sobrescreve obj1.b (2)
```

## 🔧 Sintaxes Relacionadas

| Sintaxe | Descrição | Exemplo |
|---------|-----------|---------|
| `{...obj}` | Spread em objeto | `{...usuario, idade: 25}` |
| `[...arr]` | Spread em array | `[...numeros, 4, 5]` |
| `func(...args)` | Spread em função | `Math.max(...numeros)` |
| `{a, ...rest}` | Rest parameters | `const {nome, ...dados} = user` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [JavaScript.info - Spread Operator](https://javascript.info/rest-parameters-spread)

### 🎯 Próximas Aulas
- **Aula 03**: Loop For - Estruturas de repetição

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito do operador spread (...)
- [ ] Sei combinar objetos usando spread
- [ ] Sei combinar arrays usando spread
- [ ] Entendo a diferença entre cópia superficial e profunda
- [ ] Sei como a precedência funciona em conflitos de propriedades
- [ ] Posso usar spread em situações práticas

**🎉 Parabéns! Você dominou o Operador Spread!**
