# 🌟 Aula 09: Funções com Parâmetros

## 🎯 Objetivo
Aprender a criar funções que recebem dados externos (parâmetros) para processamento, tornando-as mais flexíveis e reutilizáveis, além de entender o conceito de retorno de valores.

## 📚 Conceitos Fundamentais

### 🔧 Parâmetros vs Argumentos
- **Parâmetros**: Variáveis declaradas na definição da função
- **Argumentos**: Valores reais passados para a função

### 📊 Tipos de Funções
| Tipo | Estrutura | Uso | Exemplo |
|------|-----------|-----|---------|
| Sem parâmetros | `function nome() {}` | Valores fixos internos | `function agora() {}` |
| Com parâmetros | `function nome(param) {}` | Valores dinâmicos | `function somar(a, b) {}` |
| Com return | `function nome() { return valor; }` | Retorna resultado | `function calcular() { return x; }` |

## 🚀 Implementação

### 📝 Arquivo: `aula09.js`
```javascript
// Função sem parâmetros (valores internos)
function canal() {
    let n1 = "0";           // String convertida automaticamente
    let n2 = 2;             // Número
    let res = n1 * n2;      // Resultado: 0 * 2 = 0
    
    // Verifica se é par ou ímpar
    if (res % 2 == 0) {
        return "Par";       // Retorna resultado
    } else {
        return "Impar";
    }
}

// Armazenando o resultado
let resultado = canal();    // Executa e armazena retorno
console.log(resultado);     // Exibe: "Par"
```

### 🎨 Versão Melhorada com Parâmetros
```javascript
// Função COM parâmetros (mais flexível)
function verificarParidade(numero1, numero2) {
    let resultado = numero1 * numero2;
    
    if (resultado % 2 === 0) {
        return `${resultado} é Par`;
    } else {
        return `${resultado} é Ímpar`;
    }
}

// Testando com diferentes valores
console.log(verificarParidade(3, 4));  // "12 é Par"
console.log(verificarParidade(2, 5));  // "10 é Par"
console.log(verificarParidade(3, 3));  // "9 é Ímpar"
```

## 🧪 Experimentação

### 🔬 Teste 1: Função com Múltiplos Parâmetros
```javascript
function apresentar(nome, idade, cidade) {
    return `Olá! Eu sou ${nome}, tenho ${idade} anos e moro em ${cidade}.`;
}

console.log(apresentar("Ana", 25, "São Paulo"));
console.log(apresentar("João", 30, "Rio de Janeiro"));
```

### 🔬 Teste 2: Função com Parâmetros Opcionais
```javascript
function saudar(nome, periodo = "dia") {
    return `Bom ${periodo}, ${nome}!`;
}

console.log(saudar("Maria"));           // "Bom dia, Maria!"
console.log(saudar("João", "noite"));   // "Boa noite, João!"
```

### 🔬 Teste 3: Função Calculadora
```javascript
function calculadora(num1, num2, operacao) {
    switch(operacao) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero";
        default: return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "+"));   // 15
console.log(calculadora(10, 5, "*"));   // 50
console.log(calculadora(10, 0, "/"));   // "Erro: Divisão por zero"
```

## 💡 Casos de Uso Práticos

### ✅ Funções com Parâmetros são Ideais para:
- Cálculos com valores variáveis
- Validações dinâmicas
- Formatação de dados
- Processamento de arrays/objetos
- APIs e web services

### ✅ Exemplos Práticos
```javascript
// Validação de email
function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Formatação de moeda
function formatarMoeda(valor, simbolo = "R$") {
    return `${simbolo} ${valor.toFixed(2).replace(".", ",")}`;
}

// Cálculo de desconto
function calcularDesconto(preco, percentual) {
    const desconto = preco * (percentual / 100);
    return preco - desconto;
}

// Geração de senha
function gerarSenha(tamanho, incluirNumeros = true) {
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    if (incluirNumeros) caracteres += "0123456789";
    
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 Número Errado de Parâmetros
```javascript
function somar(a, b) {
    return a + b;
}

console.log(somar(5));        // NaN (b é undefined)
console.log(somar(5, 10, 3)); // 15 (ignora o 3)
```

### ✅ Solução: Valores Padrão
```javascript
function somar(a = 0, b = 0) {
    return a + b;
}

console.log(somar(5));     // 5 (usa b = 0)
console.log(somar());      // 0 (usa a = 0, b = 0)
```

### 🐛 Modificação de Objetos
```javascript
function modificarPessoa(pessoa) {
    pessoa.idade = 25;  // ❌ Modifica o objeto original!
}

let usuario = { nome: "Ana", idade: 20 };
modificarPessoa(usuario);
console.log(usuario.idade); // 25 (foi modificado!)
```

### ✅ Solução: Criar Cópia
```javascript
function modificarPessoa(pessoa) {
    let copia = { ...pessoa };  // Cria cópia
    copia.idade = 25;
    return copia;
}
```

## 🔧 Tipos de Parâmetros

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| Obrigatórios | Devem ser fornecidos | `function f(a, b) {}` |
| Opcionais | Têm valor padrão | `function f(a, b = 0) {}` |
| Rest | Múltiplos valores | `function f(...args) {}` |
| Destructuring | Extrai propriedades | `function f({nome, idade}) {}` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Function Parameters](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions#Function_parameters)
- [JavaScript.info - Function Parameters](https://javascript.info/function-basics#parameters)

### 🎯 Próximas Aulas
- **Aula 10**: Funções com Return - Retornando valores e resultados

---

## 📋 Checklist de Aprendizado

- [ ] Entendi a diferença entre parâmetros e argumentos
- [ ] Sei criar funções com e sem parâmetros
- [ ] Entendo como o return funciona
- [ ] Consigo usar valores padrão em parâmetros
- [ ] Sei evitar modificações indesejadas de objetos
- [ ] Posso criar funções flexíveis e reutilizáveis

**🎉 Parabéns! Você dominou Funções com Parâmetros!**
