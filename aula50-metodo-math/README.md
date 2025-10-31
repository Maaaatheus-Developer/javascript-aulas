# Aula 50 - Método Math em JavaScript

## O que é o Objeto Math?

O `Math` é um objeto global em JavaScript que fornece propriedades e métodos para realizar operações matemáticas. É um objeto estático, o que significa que você não precisa criar uma instância dele - você usa diretamente `Math.método()`.

## Principais Métodos do Math

### 🎲 Números Aleatórios

#### `Math.random()`
Gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).

```javascript
Math.random(); // Ex: 0.7834920394
```

#### Gerando números aleatórios em intervalos específicos:
```javascript
// Número entre 0 e 10
Math.random() * 10;

// Número inteiro entre 1 e 10
Math.floor(Math.random() * 10) + 1;

// Número inteiro entre 1 e 100
Math.floor(Math.random() * 100) + 1;
```

#### 🤔 **Por que o `+ 1` no final?**

O `+ 1` é usado para ajustar o intervalo dos números gerados. Vamos entender:

**Entendendo o Math.random():**
- O `Math.random()` gera números **entre 0 (inclusivo) e 1 (exclusivo)**
- Pode gerar: `0`, `0.1`, `0.5`, `0.999...`
- **NUNCA** gera exatamente `1`

**Vamos analisar passo a passo:**

**Sem o `+ 1`:**
```javascript
Math.floor(Math.random() * 10)
```
1. `Math.random()` → gera 0 a 0.999...
2. `* 10` → resulta em 0 a 9.999...
3. `Math.floor()` → arredonda para baixo: **0, 1, 2, 3, 4, 5, 6, 7, 8, 9**

**Resultado: números de 0 a 9 (10 números)**

**Com o `+ 1`:**
```javascript
Math.floor(Math.random() * 10) + 1
```
1. `Math.random()` → gera 0 a 0.999...
2. `* 10` → resulta em 0 a 9.999...
3. `Math.floor()` → arredonda para baixo: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
4. `+ 1` → soma 1 a cada resultado: **1, 2, 3, 4, 5, 6, 7, 8, 9, 10**

**Resultado: números de 1 a 10 (10 números)**

**Exemplos Práticos:**

```javascript
// Dado (1 a 6):
Math.floor(Math.random() * 6) + 1
// Sem +1: 0,1,2,3,4,5 ❌
// Com +1: 1,2,3,4,5,6 ✅

// Sorteio de 1 a 100:
Math.floor(Math.random() * 100) + 1
// Sem +1: 0 a 99 ❌
// Com +1: 1 a 100 ✅
```

**Quando NÃO usar `+ 1`:**

Se você quiser incluir o zero (ex: índices de array):
```javascript
// Índices de array (0,1,2,3,4)
Math.floor(Math.random() * 5) // Não precisa do +1

// Exemplo: escolher cor aleatória
const cores = ['red', 'blue', 'green', 'yellow'];
const indiceAleatorio = Math.floor(Math.random() * cores.length);
const corEscolhida = cores[indiceAleatorio];
```

**Resumo Visual:**

| Código | Min | Max | Uso Comum |
|--------|-----|-----|-----------|
| `Math.floor(Math.random() * 10)` | 0 | 9 | Índices de array |
| `Math.floor(Math.random() * 10) + 1` | 1 | 10 | Contagem natural |
| `Math.floor(Math.random() * 6) + 1` | 1 | 6 | Dado |
| `Math.floor(Math.random() * 2)` | 0 | 1 | Verdadeiro/Falso |

**Em resumo:** O `+ 1` desloca o intervalo para começar em 1 em vez de 0, que é mais natural quando queremos simular coisas do mundo real como dados, sorteios, etc.

### 🔢 Arredondamento

#### `Math.round()`
Arredonda para o número inteiro mais próximo.

```javascript
Math.round(4.7); // 5
Math.round(4.4); // 4
Math.round(4.5); // 5
```

#### `Math.floor()`
Arredonda para baixo (piso).

```javascript
Math.floor(4.7); // 4
Math.floor(4.1); // 4
Math.floor(-4.1); // -5
```

#### `Math.ceil()`
Arredonda para cima (teto).

```javascript
Math.ceil(4.1); // 5
Math.ceil(4.7); // 5
Math.ceil(-4.7); // -4
```

### ⚡ Potências e Raízes

#### `Math.pow(base, expoente)`
Calcula a potência de um número.

```javascript
Math.pow(2, 3); // 8 (2³)
Math.pow(10, 2); // 100 (10²)
Math.pow(4, 0.5); // 2 (raiz quadrada de 4)
```

#### `Math.sqrt()`
Calcula a raiz quadrada.

```javascript
Math.sqrt(9); // 3
Math.sqrt(16); // 4
Math.sqrt(2); // 1.4142135623730951
```

### 📊 Valores Máximos e Mínimos

#### `Math.max()`
Retorna o maior valor entre os argumentos.

```javascript
Math.max(1, 3, 2); // 3
Math.max(-1, -3, -2); // -1
Math.max(1, 3, 2, 8, 5); // 8
```

#### `Math.min()`
Retorna o menor valor entre os argumentos.

```javascript
Math.min(1, 3, 2); // 1
Math.min(-1, -3, -2); // -3
```

### 🧮 Outras Funções Úteis

#### `Math.abs()`
Retorna o valor absoluto (sem sinal).

```javascript
Math.abs(-5); // 5
Math.abs(3); // 3
Math.abs(-3.14); // 3.14
```

#### `Math.trunc()`
Remove a parte decimal (trunca).

```javascript
Math.trunc(4.9); // 4
Math.trunc(-4.9); // -4
```

## Constantes Matemáticas

O objeto Math também possui constantes úteis:

```javascript
Math.PI;    // 3.141592653589793 (π)
Math.E;     // 2.718281828459045 (número de Euler)
```

## Análise do Código da Aula

### No arquivo `aula50.js`:

```javascript
const mat = document.getElementById("mat");

// Gera número aleatório entre 1 e 11 e arredonda
const num = Math.round(Math.random() * 10) + 1;

// Gera número aleatório entre 1 e 11 e arredonda para baixo
const num2 = Math.floor(Math.random() * 10) + 1;

console.log(num2); // Exibe o número no console

// Calcula 10³ e exibe no elemento HTML
mat.innerHTML = Math.pow(10, 3); // Resultado: 1000
```

### O que cada linha faz:

1. **`const num = Math.round(Math.random() * 10) + 1;`**
   - `Math.random()` gera um número entre 0 e 0.999...
   - Multiplicar por 10 resulta em 0 a 9.999...
   - `Math.round()` arredonda para o inteiro mais próximo (0 a 10)
   - Somar 1 resulta em números de 1 a 11

2. **`const num2 = Math.floor(Math.random() * 10) + 1;`**
   - Similar ao anterior, mas usa `Math.floor()`
   - Arredonda sempre para baixo (0 a 9)
   - Somar 1 resulta em números de 1 a 10

3. **`mat.innerHTML = Math.pow(10, 3);`**
   - Calcula 10 elevado a 3 (10³ = 1000)
   - Exibe o resultado no elemento HTML com id "mat"

## Exemplos Práticos

### 🎮 Simulador de Dado
```javascript
function jogarDado() {
    return Math.floor(Math.random() * 6) + 1; // 1 a 6
}
```

### 🎯 Número entre dois valores
```javascript
function numeroEntre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

numeroEntre(10, 20); // Número entre 10 e 20
```

### 📐 Cálculo de hipotenusa
```javascript
function hipotenusa(a, b) {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}

hipotenusa(3, 4); // 5
```

### 🔢 Arredondar para casas decimais
```javascript
function arredondar(numero, casas) {
    return Math.round(numero * Math.pow(10, casas)) / Math.pow(10, casas);
}

arredondar(3.14159, 2); // 3.14
```

## Arquivos do Projeto

- `aula50.html` - Estrutura HTML básica com elemento para exibir resultado
- `aula50.js` - Código JavaScript demonstrando métodos Math
- `estilos50.css` - Estilos CSS para o projeto
- `README.md` - Esta documentação

## Como Executar

1. Abra o arquivo `aula50.html` no navegador
2. Abra o console do navegador (F12) para ver o valor de `num2`
3. O elemento na página mostrará o resultado de `Math.pow(10, 3)` = 1000

## Dicas Importantes

⚠️ **Cuidado com Math.random()**: 
- Nunca retorna exatamente 1, sempre menor que 1
- Para números inteiros, sempre use `Math.floor()` após a multiplicação

✅ **Boas práticas**:
- Use `Math.floor()` para arredondar para baixo em sorteios
- Use `Math.round()` quando precisar do valor mais próximo
- Combine métodos Math para criar funções mais complexas

🧠 **Para lembrar**:
- Math é um objeto estático - não precisa de `new Math()`
- Todos os métodos retornam números
- Útil para jogos, animações, cálculos científicos e muito mais!