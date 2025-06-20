# 🌟 Aula 11: Funções Rest Parameters

## 🎯 Objetivo
Aprender a usar rest parameters (...args) para criar funções que aceitam um número variável de argumentos, proporcionando maior flexibilidade na passagem de parâmetros.

## 📚 Conceitos Fundamentais

### 🔧 Rest Parameters (...)
Permite que uma função aceite qualquer quantidade de argumentos, agrupando-os em um array.

### 📊 Sintaxe Rest Parameters
| Sintaxe | Descrição | Exemplo |
|---------|-----------|---------|
| `...args` | Captura todos argumentos | `function f(...args) {}` |
| `a, ...rest` | Primeiro fixo, resto variável | `function f(a, ...rest) {}` |
| `...numeros` | Nome descritivo | `function somar(...numeros) {}` |

## 🚀 Implementação

### 📝 Arquivo: `aula11.js`
```javascript
// Função com rest parameters
function somar(...numeros) {
    let total = 0;
    for (let numero of numeros) {
        total += numero;
    }
    return total;
}

// Testando com diferentes quantidades de argumentos
console.log(somar(1, 2, 3));           // 6
console.log(somar(1, 2, 3, 4, 5));     // 15
console.log(somar(10));                 // 10
console.log(somar());                   // 0

// Combinando parâmetros fixos com rest
function apresentar(nome, ...hobbies) {
    console.log(`Olá, eu sou ${nome}`);
    console.log(`Meus hobbies são: ${hobbies.join(", ")}`);
}

apresentar("Ana", "leitura", "natação", "culinária");
```

## 🧪 Experimentação

### 🔬 Teste 1: Calculadora Flexível
```javascript
function calcular(operacao, ...numeros) {
    switch(operacao) {
        case "soma":
            return numeros.reduce((acc, num) => acc + num, 0);
        case "multiplicacao":
            return numeros.reduce((acc, num) => acc * num, 1);
        case "maximo":
            return Math.max(...numeros);
        case "minimo":
            return Math.min(...numeros);
        default:
            return "Operação inválida";
    }
}

console.log(calcular("soma", 1, 2, 3, 4));        // 10
console.log(calcular("multiplicacao", 2, 3, 4));  // 24
console.log(calcular("maximo", 5, 2, 8, 1));      // 8
```

### 🔬 Teste 2: Função de Log Personalizada
```javascript
function log(nivel, ...mensagens) {
    const timestamp = new Date().toLocaleTimeString();
    const msg = mensagens.join(" ");
    console.log(`[${timestamp}] ${nivel.toUpperCase()}: ${msg}`);
}

log("info", "Sistema", "iniciado", "com", "sucesso");
log("erro", "Falha", "na", "conexão");
log("aviso", "Memória", "baixa");
```

### 🔬 Teste 3: Criador de Arrays
```javascript
function criarArray(tipo, ...elementos) {
    switch(tipo) {
        case "numeros":
            return elementos.filter(el => typeof el === "number");
        case "strings":
            return elementos.filter(el => typeof el === "string");
        case "todos":
            return [...elementos];
        default:
            return [];
    }
}

const mixed = criarArray("numeros", 1, "texto", 2, true, 3);
console.log(mixed); // [1, 2, 3]
```

## 💡 Casos de Uso Práticos

### ✅ Quando Usar Rest Parameters
- Funções matemáticas (soma, média, etc.)
- Funções de logging/debugging
- Criação de arrays dinâmicos
- APIs que precisam de flexibilidade
- Wrappers de outras funções

### ✅ Exemplos Práticos
```javascript
// Sistema de notificações
function notificar(usuario, ...mensagens) {
    mensagens.forEach(msg => {
        console.log(`📧 ${usuario}: ${msg}`);
    });
}

// Validador de dados
function validar(...valores) {
    return valores.every(valor => 
        valor !== null && 
        valor !== undefined && 
        valor !== ""
    );
}

// Construtor de URLs
function construirUrl(base, ...segmentos) {
    return base + "/" + segmentos.join("/");
}

const url = construirUrl("https://api.exemplo.com", "users", "123", "posts");
console.log(url); // "https://api.exemplo.com/users/123/posts"
```

## ⚠️ Pegadinhas Comuns

### 🐛 Rest Deve Ser o Último Parâmetro
```javascript
// ❌ Erro: rest parameter deve ser o último
function erro(...args, ultimo) {
    // SyntaxError!
}
```

### ✅ Solução: Rest por Último
```javascript
// ✅ Correto
function correto(primeiro, ...resto) {
    console.log("Primeiro:", primeiro);
    console.log("Resto:", resto);
}
```

### 🐛 Confundir com Spread
```javascript
// Rest (na declaração da função)
function minhaFuncao(...args) {
    console.log(args); // Array
}

// Spread (na chamada da função)
const numeros = [1, 2, 3];
minhaFuncao(...numeros); // Espalha o array
```

### 🐛 Arguments vs Rest
```javascript
// ❌ Forma antiga (não recomendada)
function antiga() {
    console.log(arguments); // Não é array real
}

// ✅ Forma moderna (recomendada)
function moderna(...args) {
    console.log(args); // Array real com métodos
}
```

## 🔧 Métodos Úteis com Rest Parameters

| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `args.length` | Quantidade de argumentos | `if (args.length > 0)` |
| `args.forEach()` | Iterar sobre argumentos | `args.forEach(arg => {})` |
| `args.filter()` | Filtrar argumentos | `args.filter(n => n > 0)` |
| `args.reduce()` | Reduzir a um valor | `args.reduce((a, b) => a + b)` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Rest Parameters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [JavaScript.info - Rest Parameters](https://javascript.info/rest-parameters-spread)

### 🎯 Próximas Aulas
- **Aula 12**: Funções Anônimas - Funções sem nome

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de rest parameters
- [ ] Sei a diferença entre rest e spread
- [ ] Consigo criar funções com número variável de argumentos
- [ ] Entendo que rest deve ser o último parâmetro
- [ ] Posso combinar parâmetros fixos com rest
- [ ] Sei usar métodos de array com rest parameters

**🎉 Parabéns! Você dominou Rest Parameters!**
