# Aula 35 - Iteradores (Iterators)

## O que são Iteradores?

Os **Iteradores** são objetos que implementam o protocolo de iteração do JavaScript. Eles fornecem uma maneira padronizada de percorrer elementos de uma coleção, um por vez, usando o método `next()`.

## Conceitos Fundamentais

### Symbol.iterator

O `Symbol.iterator` é um símbolo bem conhecido que especifica o iterador padrão para um objeto. Quando um objeto implementa este símbolo, ele se torna **iterável**.

```javascript
const iterador = objeto[Symbol.iterator]();
```

### Protocolo de Iteração

Um iterador deve implementar o método `next()` que retorna um objeto com:
- **`value`**: O próximo valor na sequência
- **`done`**: Boolean indicando se a iteração terminou (`true`) ou não (`false`)

## Como funciona o código desta aula

### Exemplo com String

```javascript
const texto = "Youtub";
const iterador_texto = texto[Symbol.iterator]();

console.log(iterador_texto.next()); // { value: "Y", done: false }
console.log(iterador_texto.next()); // { value: "o", done: false }
console.log(iterador_texto.next()); // { value: "u", done: false }
console.log(iterador_texto.next()); // { value: "t", done: false }
console.log(iterador_texto.next()); // { value: "u", done: false }
console.log(iterador_texto.next()); // { value: "b", done: false }
console.log(iterador_texto.next()); // { value: undefined, done: true }
```

### Passo a passo da execução:

| Chamada | Resultado | Explicação |
|---------|-----------|------------|
| 1ª `next()` | `{ value: "Y", done: false }` | Primeiro caractere |
| 2ª `next()` | `{ value: "o", done: false }` | Segundo caractere |
| 3ª `next()` | `{ value: "u", done: false }` | Terceiro caractere |
| 4ª `next()` | `{ value: "t", done: false }` | Quarto caractere |
| 5ª `next()` | `{ value: "u", done: false }` | Quinto caractere |
| 6ª `next()` | `{ value: "b", done: false }` | Sexto caractere |
| 7ª `next()` | `{ value: undefined, done: true }` | Fim da string |

## Tipos Iteráveis Nativos

O JavaScript possui vários tipos que são iteráveis por padrão:

### 1. Arrays
```javascript
const valores = [10, 8, 9, 2];
const iterador_valores = valores[Symbol.iterator]();

console.log(iterador_valores.next()); // { value: 10, done: false }
console.log(iterador_valores.next()); // { value: 8, done: false }
console.log(iterador_valores.next()); // { value: 9, done: false }
console.log(iterador_valores.next()); // { value: 2, done: false }
console.log(iterador_valores.next()); // { value: undefined, done: true }
```

### 2. Strings
```javascript
const texto = "ABC";
const iterador = texto[Symbol.iterator]();
// Itera por cada caractere
```

### 3. Map
```javascript
const mapa = new Map([['a', 1], ['b', 2]]);
const iterador = mapa[Symbol.iterator]();

console.log(iterador.next()); // { value: ['a', 1], done: false }
console.log(iterador.next()); // { value: ['b', 2], done: false }
console.log(iterador.next()); // { value: undefined, done: true }
```

### 4. Set
```javascript
const conjunto = new Set([1, 2, 3]);
const iterador = conjunto[Symbol.iterator]();

console.log(iterador.next()); // { value: 1, done: false }
console.log(iterador.next()); // { value: 2, done: false }
console.log(iterador.next()); // { value: 3, done: false }
console.log(iterador.next()); // { value: undefined, done: true }
```

## Onde os Iteradores são Usados

### 1. Loop for...of
```javascript
const array = [1, 2, 3];
for (const valor of array) {
    console.log(valor); // Usa o iterador internamente
}
```

### 2. Destructuring (Desestruturação)
```javascript
const [primeiro, segundo] = [1, 2, 3]; // Usa iterador
```

### 3. Spread Operator
```javascript
const array1 = [1, 2];
const array2 = [...array1, 3, 4]; // Usa iterador
```

### 4. Array.from()
```javascript
const string = "ABC";
const array = Array.from(string); // ["A", "B", "C"]
```

## Criando um Iterador Customizado

```javascript
const meuObjeto = {
    dados: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let indice = 0;
        const dados = this.dados;
        
        return {
            next() {
                if (indice < dados.length) {
                    return { value: dados[indice++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// Agora pode ser usado com for...of
for (const valor of meuObjeto) {
    console.log(valor); // 1, 2, 3, 4, 5
}
```

## Exemplos Práticos

### 1. Iterador de Números Pares
```javascript
function* numerosPares(limite) {
    let numero = 0;
    while (numero <= limite) {
        if (numero % 2 === 0) {
            yield numero;
        }
        numero++;
    }
}

const pares = numerosPares(10);
console.log(pares.next()); // { value: 0, done: false }
console.log(pares.next()); // { value: 2, done: false }
```

### 2. Verificando se um Objeto é Iterável
```javascript
function ehIteravel(obj) {
    return obj != null && typeof obj[Symbol.iterator] === 'function';
}

console.log(ehIteravel([1, 2, 3]));     // true
console.log(ehIteravel("texto"));       // true
console.log(ehIteravel(123));           // false
console.log(ehIteravel({}));            // false
```

## Vantagens dos Iteradores

- ✅ **Padronização**: Interface consistente para percorrer dados
- ✅ **Lazy Evaluation**: Valores são gerados sob demanda
- ✅ **Memória Eficiente**: Não carrega todos os valores de uma vez
- ✅ **Compatibilidade**: Funciona com for...of, spread, destructuring
- ✅ **Customização**: Permite criar lógicas de iteração personalizadas

## Diferença: Iterável vs Iterador

| Conceito | Definição | Exemplo |
|----------|-----------|---------|
| **Iterável** | Objeto que implementa `Symbol.iterator` | Array, String, Map, Set |
| **Iterador** | Objeto que implementa o método `next()` | Resultado de `arr[Symbol.iterator]()` |

```javascript
const array = [1, 2, 3];           // Iterável
const iterador = array[Symbol.iterator](); // Iterador

// Iterável tem Symbol.iterator
console.log(typeof array[Symbol.iterator]); // "function"

// Iterador tem next()
console.log(typeof iterador.next); // "function"
```

## Cuidados Importantes

- ⚠️ **Estado**: Iteradores mantêm estado interno (posição atual)
- ⚠️ **Consumo único**: Uma vez consumido, precisa criar um novo iterador
- ⚠️ **Performance**: Para arrays simples, loop tradicional pode ser mais rápido
- ⚠️ **Compatibilidade**: Verifique suporte em navegadores mais antigos

## Casos de Uso Ideais

- 🎯 **Processamento de dados grandes**: Evita carregar tudo na memória
- 🎯 **APIs que retornam dados paginados**: Itera página por página
- 🎯 **Streams de dados**: Processa dados conforme chegam
- 🎯 **Algoritmos geradores**: Fibonacci, números primos, etc.

---

*Este exemplo faz parte do curso de JavaScript Básico - Aula 35*