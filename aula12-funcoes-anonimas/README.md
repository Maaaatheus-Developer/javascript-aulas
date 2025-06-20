# 🌟 Aula 12: Funções Anônimas

## 🎯 Objetivo
Compreender funções anônimas em JavaScript: funções sem nome que podem ser atribuídas a variáveis, usadas como argumentos ou executadas imediatamente (IIFE).

## 📚 Conceitos Fundamentais

### 🔧 Função Anônima
Uma função sem nome que pode ser atribuída a uma variável ou usada diretamente onde uma função é esperada.

### 📊 Tipos de Funções Anônimas
| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| Atribuída | Armazenada em variável | `const func = function() {}` |
| Callback | Passada como argumento | `arr.map(function(x) {})` |
| IIFE | Executa imediatamente | `(function() {})()` |
| Event Handler | Em eventos | `btn.onclick = function() {}` |

## 🚀 Implementação

### 📝 Arquivo: `aula12.js`
```javascript
// Função anônima atribuída a variável
const saudar = function() {
    console.log("Olá!");
};

saudar(); // Chama a função

// Função anônima com parâmetros
const somar = function(a, b) {
    return a + b;
};

console.log(somar(5, 3)); // 8

// Função anônima como callback
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados); // [2, 4, 6, 8, 10]

// IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Executando imediatamente!");
})();

// IIFE com parâmetros
(function(nome) {
    console.log(`Olá, ${nome}!`);
})("Ana");
```

### 🎨 Arquivo: `aula12.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Funções Anônimas</title>
</head>
<body>
    <button id="meuBotao">Clique aqui</button>
    
    <script>
        // Função anônima em event handler
        document.getElementById("meuBotao").onclick = function() {
            alert("Botão clicado!");
        };
        
        // Usando addEventListener
        document.getElementById("meuBotao").addEventListener("mouseover", function() {
            console.log("Mouse sobre o botão");
        });
    </script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Função Anônima vs Nomeada
```javascript
// Função nomeada
function minhaFuncaoNomeada() {
    console.log("Função nomeada");
}

// Função anônima
const minhaFuncaoAnonima = function() {
    console.log("Função anônima");
};

// Ambas funcionam igual
minhaFuncaoNomeada();
minhaFuncaoAnonima();
```

### 🔬 Teste 2: Callbacks com Funções Anônimas
```javascript
const pessoas = [
    { nome: "Ana", idade: 25 },
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 22 }
];

// Filtrar maiores de 23 anos
const maiores = pessoas.filter(function(pessoa) {
    return pessoa.idade > 23;
});

// Ordenar por idade
const ordenados = pessoas.sort(function(a, b) {
    return a.idade - b.idade;
});

console.log(maiores);
console.log(ordenados);
```

### 🔬 Teste 3: IIFE para Módulos
```javascript
// Criando um módulo com IIFE
const meuModulo = (function() {
    let contador = 0; // Variável privada
    
    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obterValor: function() {
            return contador;
        }
    };
})();

console.log(meuModulo.incrementar()); // 1
console.log(meuModulo.incrementar()); // 2
console.log(meuModulo.obterValor());  // 2
```

## 💡 Casos de Uso Práticos

### ✅ Use Funções Anônimas quando:
- Definir callbacks para eventos
- Usar métodos de array (map, filter, reduce)
- Criar closures e módulos
- Executar código uma única vez (IIFE)
- Definir handlers temporários

### ✅ Exemplos Práticos
```javascript
// Sistema de timer
const cronometro = (function() {
    let tempo = 0;
    let interval;
    
    return {
        iniciar: function() {
            interval = setInterval(function() {
                tempo++;
                console.log(`Tempo: ${tempo}s`);
            }, 1000);
        },
        parar: function() {
            clearInterval(interval);
        },
        reset: function() {
            tempo = 0;
            console.log("Cronômetro resetado");
        }
    };
})();

// Validação de formulário
const validador = {
    email: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },
    senha: function(senha) {
        return senha.length >= 8;
    },
    validarFormulario: function(dados) {
        return Object.keys(dados).every(function(campo) {
            return this[campo] && this[campo](dados[campo]);
        }.bind(this));
    }
};
```

### ❌ Evite Funções Anônimas quando:
- Precisar de recursão (precisa do nome)
- Quiser debug mais fácil (nome ajuda)
- A função for muito complexa
- Precisar reutilizar em vários lugares

## ⚠️ Pegadinhas Comuns

### 🐛 Hoisting com Funções Anônimas
```javascript
// ✅ Função nomeada - hoisting funciona
console.log(minhaFuncao()); // "Olá!"

function minhaFuncao() {
    return "Olá!";
}

// ❌ Função anônima - ReferenceError
console.log(minhaVarFuncao()); // Erro!

var minhaVarFuncao = function() {
    return "Olá!";
};
```

### 🐛 This em Funções Anônimas
```javascript
const objeto = {
    nome: "Teste",
    metodo: function() {
        // ❌ this não funciona em função anônima tradicional
        setTimeout(function() {
            console.log(this.nome); // undefined
        }, 1000);
        
        // ✅ Solução 1: Arrow function
        setTimeout(() => {
            console.log(this.nome); // "Teste"
        }, 1000);
        
        // ✅ Solução 2: Bind
        setTimeout(function() {
            console.log(this.nome); // "Teste"
        }.bind(this), 1000);
    }
};
```

### 🐛 Memory Leaks com Closures
```javascript
function criarHandler() {
    const dadosGrandes = new Array(1000000).fill("dados");
    
    return function() {
        // ❌ Mantém referência aos dadosGrandes
        console.log("Handler executado");
    };
}

// ✅ Melhor: limpar referências desnecessárias
function criarHandlerOtimizado() {
    const dadosGrandes = new Array(1000000).fill("dados");
    
    // Processar dados se necessário
    const resultado = dadosGrandes.length;
    
    // Retornar função sem referência aos dados grandes
    return function() {
        console.log(`Handler executado, dados processados: ${resultado}`);
    };
}
```

## 🔧 Padrões com Funções Anônimas

| Padrão | Descrição | Exemplo |
|--------|-----------|---------|
| Callback | Função passada como argumento | `arr.map(function(x) {})` |
| IIFE | Execução imediata | `(function() {})()` |
| Closure | Encapsulamento de dados | `function() { let x; return {} }` |
| Event Handler | Manipulador de eventos | `el.onclick = function() {}` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Function Expression](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/function)
- [JavaScript.info - Function Expressions](https://javascript.info/function-expressions)

### 🎯 Próximas Aulas
- **Aula 13**: Arrow Functions - Sintaxe moderna e concisa

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de função anônima
- [ ] Sei a diferença entre função nomeada e anônima
- [ ] Consigo usar funções anônimas como callbacks
- [ ] Compreendo IIFE e suas aplicações
- [ ] Entendo closures com funções anônimas
- [ ] Sei evitar problemas com this e hoisting

**🎉 Parabéns! Você dominou Funções Anônimas!**
