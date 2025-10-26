# Aula 34 - Método `reduce()`

## O que é o método `reduce()`?

O método `reduce()` é uma função nativa do JavaScript que executa uma função redutora (fornecida por você) para cada elemento do array, resultando em um único valor de retorno. É uma das funções mais poderosas para manipulação de arrays.

## Sintaxe

```javascript
array.reduce(callback(acumulador, valorAtual, índice, array), valorInicial)
```

### Parâmetros:
- **callback**: Função que é executada em cada valor no array
  - **acumulador** (anterior): O valor acumulado retornado na invocação anterior do callback
  - **valorAtual**: O elemento atual sendo processado no array
  - **índice** (opcional): O índice do elemento atual sendo processado
  - **array** (opcional): O array sobre o qual reduce foi chamado
- **valorInicial** (opcional): Valor a ser usado como primeiro argumento da primeira chamada da função callback

## Quando usar o `reduce()`?

Use o `reduce()` quando você precisar:

1. **Somar todos os elementos de um array**
2. **Encontrar o maior/menor valor**
3. **Calcular médias**
4. **Transformar um array em um objeto**
5. **Agrupar elementos**
6. **Achatar arrays (flatten)**
7. **Contar ocorrências**

## Como funciona o código desta aula

Este exemplo demonstra o uso do `reduce()` para somar todos os elementos de um array e acompanhar o processo passo a passo.

### Estrutura do código:

```javascript
const elementos_array = [1, 2, 3, 4, 5];

elementos_array.reduce((anterior, atual, pos) => {
    ant.push(anterior);     // Armazena valores anteriores
    atu.push(atual);        // Armazena valores atuais
    dobro.push(atual * 2);  // Calcula o dobro de cada elemento
    return atual + anterior; // Retorna a soma acumulada
});
```

### Passo a passo da execução:

| Iteração | Anterior | Atual | Retorno | Array ant | Array atu | Array dobro |
|----------|----------|-------|---------|-----------|-----------|-------------|
| 1ª       | 1        | 2     | 3       | [1]       | [2]       | [2, 4]      |
| 2ª       | 3        | 3     | 6       | [1, 3]    | [2, 3]    | [2, 4, 6]   |
| 3ª       | 6        | 4     | 10      | [1, 3, 6] | [2, 3, 4] | [2, 4, 6, 8]|
| 4ª       | 10       | 5     | 15      | [1, 3, 6, 10] | [2, 3, 4, 5] | [2, 4, 6, 8, 10] |

**Resultado final:** 15 (soma de todos os elementos: 1+2+3+4+5)

### ⚠️ Por que o "Atual" começa com 2 e não com 1?

Uma dúvida comum é: **"Por que na primeira iteração o valor atual é 2 se o primeiro elemento do array é 1?"**

**Resposta:** Quando não fornecemos um valor inicial ao `reduce()`, o JavaScript automaticamente:

1. **Usa o primeiro elemento (1) como valor inicial do acumulador ("Anterior")**
2. **Começa as iterações a partir do segundo elemento (2) como "Atual"**

#### Comparação visual:

**Array original:** `[1, 2, 3, 4, 5]`

| Comportamento | Valor Inicial | 1ª Iteração | Total de Iterações |
|---------------|---------------|-------------|-------------------|
| **Sem valor inicial** | `anterior = 1` (1º elemento) | `atual = 2` (2º elemento) | 4 iterações |
| **Com valor inicial 0** | `anterior = 0` (fornecido) | `atual = 1` (1º elemento) | 5 iterações |

#### Exemplo com valor inicial:
```javascript
// Com valor inicial (5 iterações)
[1, 2, 3, 4, 5].reduce((ant, atu) => ant + atu, 0)
// 1ª iteração: ant=0, atu=1

// Sem valor inicial (4 iterações) - nosso exemplo
[1, 2, 3, 4, 5].reduce((ant, atu) => ant + atu)
// 1ª iteração: ant=1, atu=2
```

**Por que isso acontece?** 
- ✅ Economiza uma iteração quando não precisamos de valor inicial específico
- ✅ Evita problemas com arrays vazios
- ✅ Mantém o tipo de dados consistente


## Exemplos práticos do `reduce()`

### 1. Soma simples
```javascript
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acc, atual) => acc + atual, 0);
console.log(soma); // 15
```

### 2. Encontrar o maior valor
```javascript
const numeros = [3, 7, 2, 9, 1];
const maior = numeros.reduce((acc, atual) => atual > acc ? atual : acc);
console.log(maior); // 9
```

### 3. Contar ocorrências
```javascript
const frutas = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã'];
const contador = frutas.reduce((acc, fruta) => {
    acc[fruta] = (acc[fruta] || 0) + 1;
    return acc;
}, {});
console.log(contador); // {maçã: 3, banana: 2, laranja: 1}
```

### 4. Transformar array em objeto
```javascript
const pessoas = [
    {id: 1, nome: 'João'},
    {id: 2, nome: 'Maria'},
    {id: 3, nome: 'Pedro'}
];
const porId = pessoas.reduce((acc, pessoa) => {
    acc[pessoa.id] = pessoa;
    return acc;
}, {});
```

## Vantagens do `reduce()`

- ✅ **Flexível**: Pode retornar qualquer tipo de valor
- ✅ **Funcional**: Não modifica o array original
- ✅ **Poderoso**: Pode substituir muitos loops
- ✅ **Legível**: Expressa claramente a intenção de reduzir dados

## Cuidados importantes

- ⚠️ **Sempre forneça um valor inicial** quando possível
- ⚠️ **Retorne sempre um valor** na função callback
- ⚠️ **Cuidado com arrays vazios** sem valor inicial
- ⚠️ **Performance**: Para operações simples, um loop pode ser mais rápido

---

*Este exemplo faz parte do curso de JavaScript Básico - Aula 34*