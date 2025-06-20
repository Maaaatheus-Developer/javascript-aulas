# 🌟 Aula 05: Loop While

## 🎯 Objetivo
Aprender a estrutura de repetição `while`, que executa um bloco de código enquanto uma condição for verdadeira, aplicando em um exemplo prático de cálculo de fatorial.

## 📚 Conceitos Fundamentais

### 🔧 Loop While
Uma estrutura de repetição que testa a condição ANTES de executar o bloco de código. Continua executando enquanto a condição for `true`.

### 📊 Comparação While vs For
| Característica | While | For |
|----------------|-------|-----|
| Estrutura | Condição apenas | Inicialização, condição, incremento |
| Uso ideal | Quando não sabemos quantas iterações | Quando sabemos o número de iterações |
| Controle | Manual da variável | Automático no cabeçalho |
| Flexibilidade | Mais flexível | Mais estruturado |

## 🚀 Implementação

### 📝 Arquivo: `aula05.js`
```javascript
// Exemplo básico de while
let n = 0;
while (n < 10) {
    console.log(n);    // Exibe: 0, 1, 2, ..., 9
    n = n + 1;         // ⚠️ IMPORTANTE: modificar variável de controle
}

// Exemplo prático: Cálculo de fatorial
let numero = 10;      // Calcular 10!
let fatorial = 1;     // Acumulador (neutro da multiplicação)

while (numero >= 1) {
    fatorial = fatorial * numero;  // Multiplica pelo valor atual
    numero--;                      // Decrementa (numero = numero - 1)
    console.log(fatorial);         // Mostra resultado parcial
}

console.log(fatorial); // Resultado final: 3.628.800
```

## 🧪 Experimentação

### 🔬 Teste 1: Contador Regressivo
```javascript
let contador = 5;
while (contador > 0) {
    console.log(`Contagem: ${contador}`);
    contador--;
}
console.log("🚀 Decolagem!");
```

### 🔬 Teste 2: Soma de Números
```javascript
let soma = 0;
let i = 1;
while (i <= 100) {
    soma += i;  // soma = soma + i
    i++;
}
console.log(`Soma de 1 a 100: ${soma}`); // 5050
```

### 🔬 Teste 3: Leitura de Array
```javascript
const numeros = [2, 4, 6, 8, 10];
let indice = 0;

while (indice < numeros.length) {
    console.log(`Posição ${indice}: ${numeros[indice]}`);
    indice++;
}
```

## 💡 Casos de Uso Práticos

### ✅ Quando Usar While
- Não sabemos quantas iterações serão necessárias
- Dependemos de uma condição externa (input do usuário)
- Processamento até encontrar um valor específico
- Algoritmos de busca e validação
- Jogos com condições dinâmicas

### ❌ Quando NÃO Usar
- Quando sabemos exatamente quantas iterações
- Para iterar sobre arrays/objetos (prefira for...of, forEach)
- Quando o for tradicional é mais claro

## ⚠️ Pegadinhas Comuns

### 🐛 Loop Infinito
```javascript
let n = 0;
while (n < 10) {
    console.log(n);
    // ❌ Esqueceu de incrementar n!
}
// Resultado: loop infinito!
```

### ✅ Solução
```javascript
let n = 0;
while (n < 10) {
    console.log(n);
    n++; // ✅ Sempre modifique a variável de controle!
}
```

### 🐛 Condição Inicial Falsa
```javascript
let x = 10;
while (x < 5) {
    console.log(x); // ❌ Nunca executa!
}
```

### ✅ Verificação da Condição
```javascript
let x = 10;
if (x >= 5) {
    while (x < 15) {
        console.log(x);
        x++;
    }
}
```

## 🔧 Operadores Relacionados

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| `++` | Incremento | `n++` ou `++n` |
| `--` | Decremento | `n--` ou `--n` |
| `+=` | Adição composta | `soma += n` |
| `-=` | Subtração composta | `total -= custo` |
| `*=` | Multiplicação composta | `produto *= fator` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while)
- [JavaScript.info - Loops](https://javascript.info/while-for)

### 🎯 Próximas Aulas
- **Aula 06**: Loop Do...While - Executa pelo menos uma vez

---

## 📋 Checklist de Aprendizado

- [ ] Entendi a estrutura básica do while
- [ ] Sei a diferença entre while e for
- [ ] Consigo evitar loops infinitos
- [ ] Entendo quando usar while vs outros loops
- [ ] Posso aplicar while em problemas práticos
- [ ] Compreendo a importância da variável de controle

**🎉 Parabéns! Você dominou o Loop While!**
