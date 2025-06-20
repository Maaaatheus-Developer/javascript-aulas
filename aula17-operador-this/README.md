# 🌟 Aula 17: Operador This

## 🎯 Objetivo
Compreender o operador `this` em JavaScript, suas diferentes formas de uso e como seu valor muda dependendo do contexto de execução da função.

## 📚 Conceitos Fundamentais

### 🔧 Operador This
O `this` é uma palavra-chave que se refere ao objeto no qual uma função está sendo executada. Seu valor depende de como a função é chamada.

### 📊 Contextos do This
| Contexto | Valor do this | Exemplo |
|----------|---------------|---------|
| Global | window (browser) / global (Node) | `console.log(this)` |
| Método de objeto | O próprio objeto | `obj.metodo()` |
| Função regular | undefined (strict) / window (non-strict) | `funcao()` |
| Arrow function | this do escopo pai | `() => {}` |
| Event handler | Elemento que disparou o evento | `element.onclick` |

## 🚀 Implementação

### 📝 Arquivo: `aula17.js`
```javascript
// This no contexto global
console.log("This global:", this); // window (navegador)

// This em métodos de objeto
const pessoa = {
    nome: "Ana",
    idade: 25,
    
    apresentar: function() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos`);
        console.log("This no método:", this); // objeto pessoa
    },
    
    // Arrow function - this do escopo pai
    apresentarArrow: () => {
        console.log("This na arrow function:", this); // window
        // console.log(`Olá, eu sou ${this.nome}`); // undefined
    }
};

pessoa.apresentar();      // this = pessoa
pessoa.apresentarArrow(); // this = window

// This em funções regulares
function funcaoRegular() {
    console.log("This em função regular:", this); // undefined (strict mode)
}

funcaoRegular();

// This em construtores
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    
    this.falar = function() {
        console.log(`${this.nome} está falando`);
    };
}

const pessoa1 = new Pessoa("João", 30);
pessoa1.falar(); // this = pessoa1

// This com call, apply, bind
const outroObjeto = { nome: "Maria", idade: 28 };

// call - chama função imediatamente
pessoa.apresentar.call(outroObjeto); // this = outroObjeto

// apply - similar ao call, mas argumentos em array
pessoa.apresentar.apply(outroObjeto);

// bind - retorna nova função com this fixo
const apresentarMaria = pessoa.apresentar.bind(outroObjeto);
apresentarMaria(); // this = outroObjeto
```

## 🧪 Experimentação

### 🔬 Teste 1: This em Event Handlers
```javascript
// HTML: <button id="meuBotao">Clique</button>

document.getElementById("meuBotao").addEventListener("click", function() {
    console.log("This no event handler:", this); // elemento button
    this.style.backgroundColor = "red";
});

// Com arrow function
document.getElementById("meuBotao").addEventListener("click", () => {
    console.log("This na arrow function:", this); // window
    // this.style... não funcionará
});
```

### 🔬 Teste 2: This em Classes
```javascript
class MinhaClasse {
    constructor(nome) {
        this.nome = nome;
    }
    
    metodoRegular() {
        console.log(`Método regular: ${this.nome}`);
    }
    
    metodoArrow = () => {
        console.log(`Método arrow: ${this.nome}`);
    }
}

const instancia = new MinhaClasse("Teste");
instancia.metodoRegular(); // this = instancia
instancia.metodoArrow();   // this = instancia

// Extraindo métodos
const metodoExtraido = instancia.metodoRegular;
const arrowExtraida = instancia.metodoArrow;

// metodoExtraido(); // this = undefined (erro)
arrowExtraida();     // this = instancia (funciona)
```

### 🔬 Teste 3: This em Callbacks
```javascript
const objeto = {
    nome: "Objeto",
    numeros: [1, 2, 3],
    
    processarRegular: function() {
        this.numeros.forEach(function(num) {
            // console.log(`${this.nome}: ${num}`); // this = undefined
        });
    },
    
    processarArrow: function() {
        this.numeros.forEach((num) => {
            console.log(`${this.nome}: ${num}`); // this = objeto
        });
    },
    
    processarBind: function() {
        this.numeros.forEach(function(num) {
            console.log(`${this.nome}: ${num}`);
        }.bind(this)); // força this = objeto
    }
};

objeto.processarArrow(); // Funciona
objeto.processarBind();  // Funciona
```

## 💡 Casos de Uso Práticos

### ✅ Quando This é Útil
- Métodos de objetos e classes
- Event handlers que precisam referenciar o elemento
- Construtores para inicializar propriedades
- APIs que seguem padrões orientados a objeto

### ✅ Exemplos Práticos
```javascript
// Sistema de validação
const validador = {
    regras: {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        telefone: /^\d{10,11}$/
    },
    
    validar: function(campo, valor) {
        if (this.regras[campo]) {
            return this.regras[campo].test(valor);
        }
        return false;
    },
    
    adicionarRegra: function(campo, regex) {
        this.regras[campo] = regex;
        return this; // Para method chaining
    }
};

// Calculator com this
const calculadora = {
    resultado: 0,
    
    somar: function(valor) {
        this.resultado += valor;
        return this;
    },
    
    subtrair: function(valor) {
        this.resultado -= valor;
        return this;
    },
    
    obterResultado: function() {
        return this.resultado;
    },
    
    limpar: function() {
        this.resultado = 0;
        return this;
    }
};

// Method chaining
const resultado = calculadora
    .somar(10)
    .somar(5)
    .subtrair(3)
    .obterResultado();

console.log(resultado); // 12
```

## ⚠️ Pegadinhas Comuns

### 🐛 This em Arrow Functions
```javascript
const obj = {
    nome: "Teste",
    
    // ❌ Arrow function não tem this próprio
    metodo: () => {
        console.log(this.nome); // undefined
    },
    
    // ✅ Função regular tem this
    metodoCorreto: function() {
        console.log(this.nome); // "Teste"
    }
};
```

### 🐛 This Perdido em Callbacks
```javascript
const pessoa = {
    nome: "Ana",
    
    falar: function() {
        console.log(`${this.nome} está falando`);
    },
    
    falarDepois: function() {
        // ❌ This será perdido
        setTimeout(this.falar, 1000);
        
        // ✅ Soluções
        setTimeout(() => this.falar(), 1000);           // Arrow function
        setTimeout(this.falar.bind(this), 1000);        // Bind
        
        const self = this;
        setTimeout(function() { self.falar(); }, 1000); // Variável auxiliar
    }
};
```

### 🐛 This em Destructuring
```javascript
const pessoa = {
    nome: "João",
    falar: function() {
        console.log(`${this.nome} está falando`);
    }
};

// ❌ This será perdido
const { falar } = pessoa;
// falar(); // Erro: this.nome é undefined

// ✅ Manter referência
const falarBound = pessoa.falar.bind(pessoa);
falarBound(); // Funciona
```

## 🔧 Métodos para Controlar This

| Método | Descrição | Sintaxe | Quando usar |
|--------|-----------|---------|-------------|
| `call` | Chama função com this específico | `func.call(thisArg, arg1, arg2)` | Argumentos individuais |
| `apply` | Como call, mas argumentos em array | `func.apply(thisArg, [args])` | Argumentos em array |
| `bind` | Retorna função com this fixo | `func.bind(thisArg)` | Criar função reutilizável |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)
- [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)

### 🎯 Próximas Aulas
- **Aula 18**: DOM getElementById - Selecionando elementos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito do operador this
- [ ] Sei como this muda dependendo do contexto
- [ ] Compreendo a diferença entre arrow functions e funções regulares
- [ ] Consigo usar call, apply e bind
- [ ] Sei resolver problemas de this perdido
- [ ] Posso aplicar this em orientação a objetos

**🎉 Parabéns! Você dominou o Operador This!**
