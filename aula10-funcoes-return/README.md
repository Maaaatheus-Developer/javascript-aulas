# 🌟 Aula 10: Funções com Return

## 🎯 Objetivo
Dominar o uso do comando `return` em funções, entendendo como retornar valores, usar valores padrão em parâmetros e gerenciar o escopo de variáveis entre funções.

## 📚 Conceitos Fundamentais

### 🔧 Return Statement
O comando `return` permite que uma função envie um resultado de volta para quem a chamou.

### 📊 Tipos de Retorno
| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| Valor direto | Retorna valor específico | `return 42;` |
| Variável | Retorna conteúdo de variável | `return resultado;` |
| Expressão | Retorna resultado de cálculo | `return a + b;` |
| Void | Não retorna nada | Sem `return` ou `return;` |

## 🚀 Implementação

### 📝 Arquivo: `aula10.js`
```javascript
// Função que modifica variável global
function adicionar(v) {
    valor += v;  // Modifica variável externa
}

let valor = 0;
console.log(valor);    // 0

adicionar(10);
console.log(valor);    // 10

adicionar(5);
console.log(valor);    // 15

// Função com parâmetros padrão e return
let valorPadrao = 2;

function soma(n1 = valorPadrao, n2 = valorPadrao) {
    let res;
    res = n1 + n2;
    return res;    // Retorna o resultado
}

let resultado_soma = soma();  // Usa valores padrão (2 + 2 = 4)
console.log(resultado_soma);  // 4
```

## 🧪 Experimentação

### 🔬 Teste 1: Return vs Sem Return
```javascript
// Função SEM return
function semReturn(a, b) {
    let resultado = a + b;
    console.log(resultado);  // Apenas exibe
}

// Função COM return
function comReturn(a, b) {
    let resultado = a + b;
    return resultado;  // Retorna o valor
}

// Comparando comportamentos
let teste1 = semReturn(5, 3);    // undefined
let teste2 = comReturn(5, 3);    // 8

console.log(teste1);  // undefined
console.log(teste2);  // 8
```

### 🔬 Teste 2: Return Múltiplo
```javascript
function analisarNumero(num) {
    if (num > 0) {
        return "Positivo";
    } else if (num < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
    // Código após return nunca executa
    console.log("Esta linha nunca será executada");
}

console.log(analisarNumero(5));   // "Positivo"
console.log(analisarNumero(-3));  // "Negativo"
console.log(analisarNumero(0));   // "Zero"
```

### 🔬 Teste 3: Return de Objetos
```javascript
function criarPessoa(nome, idade) {
    return {
        nome: nome,
        idade: idade,
        apresentar: function() {
            return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos`;
        }
    };
}

let pessoa = criarPessoa("Ana", 25);
console.log(pessoa.apresentar());  // "Olá, eu sou Ana e tenho 25 anos"
```

## 💡 Casos de Uso Práticos

### ✅ Use Return quando:
- Precisar do resultado em outras partes do código
- Quiser compor funções (usar resultado de uma em outra)
- Criar funções puras (sem efeitos colaterais)
- Fazer cálculos e processamentos
- Implementar validações

### ✅ Exemplos Práticos
```javascript
// Validação com return
function validarIdade(idade) {
    return idade >= 18;
}

if (validarIdade(20)) {
    console.log("Maior de idade");
}

// Cálculos compostos
function calcularAreaCirculo(raio) {
    return Math.PI * raio * raio;
}

function calcularVolumeEsfera(raio) {
    return (4/3) * calcularAreaCirculo(raio) * raio;
}

// Formatação de dados
function formatarNome(primeiroNome, ultimoNome) {
    return `${primeiroNome.charAt(0).toUpperCase()}${primeiroNome.slice(1).toLowerCase()} ${ultimoNome.toUpperCase()}`;
}

console.log(formatarNome("joÃO", "silva")); // "João SILVA"
```

### ❌ Não Use Return quando:
- A função só precisa executar uma ação (como console.log)
- Está modificando DOM diretamente
- Está fazendo alterações em variáveis globais

## ⚠️ Pegadinhas Comuns

### 🐛 Return Para Execução
```javascript
function exemploReturn(x) {
    if (x > 10) {
        return "Grande";
    }
    console.log("Processando...");  // Só executa se x <= 10
    return "Pequeno";
}
```

### 🐛 Return Undefined
```javascript
function semReturnExplicito() {
    let resultado = 2 + 2;
    // Sem return - retorna undefined automaticamente
}

console.log(semReturnExplicito()); // undefined
```

### ✅ Solução: Return Explícito
```javascript
function comReturnExplicito() {
    let resultado = 2 + 2;
    return resultado;  // ✅ Retorna o valor
}

console.log(comReturnExplicito()); // 4
```

### 🐛 Return em Loops
```javascript
function encontrarPar(numeros) {
    for (let num of numeros) {
        if (num % 2 === 0) {
            return num;  // ✅ Para o loop e retorna
        }
    }
    return null;  // Se não encontrar nenhum par
}
```

## 🔧 Padrões com Return

| Padrão | Descrição | Exemplo |
|--------|-----------|---------|
| Early Return | Sair cedo da função | `if (erro) return;` |
| Return Object | Retornar múltiplos valores | `return {x, y, z};` |
| Return Function | Retornar função | `return () => {};` |
| Return Promise | Retornar promessa | `return fetch(url);` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - return](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return)
- [JavaScript.info - Function Return](https://javascript.info/function-basics#returning-a-value)

### 🎯 Próximas Aulas
- **Aula 11**: Funções Rest Parameters - Parâmetros flexíveis

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de return
- [ ] Sei a diferença entre função com e sem return
- [ ] Compreendo que return para a execução da função
- [ ] Consigo usar return para compor funções
- [ ] Entendo valores padrão em parâmetros
- [ ] Posso criar funções que retornam diferentes tipos de dados

**🎉 Parabéns! Você dominou Funções com Return!**
