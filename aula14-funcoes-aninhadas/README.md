# 🌟 Aula 14: Funções Aninhadas

## 🎯 Objetivo
Compreender o conceito de funções aninhadas (funções dentro de outras funções), explorando escopo, closures e criação de funções especializadas e módulos privados.

## 📚 Conceitos Fundamentais

### 🔧 Funções Aninhadas
Funções declaradas dentro de outras funções, criando um escopo privado e permitindo encapsulamento de lógica.

### 📊 Estrutura de Funções Aninhadas
| Conceito | Descrição | Exemplo |
|----------|-----------|---------|
| Função Externa | Contém outras funções | `function externa() {}` |
| Função Interna | Declarada dentro de outra | `function interna() {}` |
| Escopo | Acesso às variáveis da função pai | Closure |
| Privacidade | Função interna não é acessível externamente | Encapsulamento |

## 🚀 Implementação

### 📝 Arquivo: `aula14.js`
```javascript
// Exemplo básico de função aninhada
function funcaoExterna() {
    let variavelExterna = "Eu sou da função externa";
    
    function funcaoInterna() {
        let variavelInterna = "Eu sou da função interna";
        console.log(variavelExterna); // Acessa variável da função pai
        console.log(variavelInterna);
    }
    
    funcaoInterna(); // Chama a função interna
    // funcaoInterna não é acessível fora desta função
}

funcaoExterna();

// Exemplo com closure - retornando função interna
function contador() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const meuContador = contador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3

// Exemplo com múltiplas funções internas
function calculadora() {
    let resultado = 0;
    
    function somar(n) {
        resultado += n;
        return calculadora; // Retorna para permitir chaining
    }
    
    function subtrair(n) {
        resultado -= n;
        return calculadora;
    }
    
    function obterResultado() {
        return resultado;
    }
    
    // Retorna objeto com métodos
    return {
        somar,
        subtrair,
        resultado: obterResultado
    };
}

const calc = calculadora();
const final = calc.somar(10).somar(5).subtrair(3).resultado();
console.log(final); // 12
```

## 🧪 Experimentação

### 🔬 Teste 1: Factory de Funções
```javascript
function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const multiplicarPor2 = criarMultiplicador(2);
const multiplicarPor10 = criarMultiplicador(10);

console.log(multiplicarPor2(5));  // 10
console.log(multiplicarPor10(3)); // 30
```

### 🔬 Teste 2: Sistema de Configuração
```javascript
function criarConfigurador() {
    let configuracoes = {};
    
    function definir(chave, valor) {
        configuracoes[chave] = valor;
        return criarConfigurador(); // Retorna nova instância para chaining
    }
    
    function obter(chave) {
        return configuracoes[chave];
    }
    
    function listar() {
        return { ...configuracoes };
    }
    
    return {
        definir,
        obter,
        listar
    };
}

const config = criarConfigurador();
config.definir("tema", "escuro").definir("idioma", "pt-BR");
console.log(config.obter("tema"));    // "escuro"
console.log(config.listar());         // { tema: "escuro", idioma: "pt-BR" }
```

### 🔬 Teste 3: Sistema de Cache
```javascript
function criarCache() {
    let cache = new Map();
    
    function get(chave) {
        return cache.get(chave);
    }
    
    function set(chave, valor, ttl = 0) {
        cache.set(chave, valor);
        
        if (ttl > 0) {
            setTimeout(function() {
                cache.delete(chave);
            }, ttl);
        }
        
        return true;
    }
    
    function has(chave) {
        return cache.has(chave);
    }
    
    function clear() {
        cache.clear();
        return true;
    }
    
    function size() {
        return cache.size;
    }
    
    return { get, set, has, clear, size };
}

const meuCache = criarCache();
meuCache.set("usuario", { nome: "Ana" });
meuCache.set("temp", "dados temporários", 5000); // 5 segundos TTL

console.log(meuCache.get("usuario")); // { nome: "Ana" }
console.log(meuCache.size());         // 2
```

## 💡 Casos de Uso Práticos

### ✅ Use Funções Aninhadas para:
- Criar closures e encapsular dados privados
- Implementar padrão Factory
- Criar funções especializadas (currying)
- Implementar módulos e namespaces
- Gerenciar estado interno de forma segura

### ✅ Exemplos Práticos
```javascript
// Sistema de autenticação
function criarSistemaAuth() {
    let usuarioLogado = null;
    let tentativasLogin = 0;
    const MAX_TENTATIVAS = 3;
    
    function login(usuario, senha) {
        if (tentativasLogin >= MAX_TENTATIVAS) {
            return { sucesso: false, erro: "Muitas tentativas" };
        }
        
        // Simular validação
        if (usuario === "admin" && senha === "123") {
            usuarioLogado = usuario;
            tentativasLogin = 0;
            return { sucesso: true, usuario };
        } else {
            tentativasLogin++;
            return { sucesso: false, erro: "Credenciais inválidas" };
        }
    }
    
    function logout() {
        usuarioLogado = null;
        return true;
    }
    
    function estaLogado() {
        return usuarioLogado !== null;
    }
    
    function obterUsuario() {
        return usuarioLogado;
    }
    
    return { login, logout, estaLogado, obterUsuario };
}

// Validador de dados
function criarValidador() {
    const regras = {};
    
    function adicionarRegra(campo, validador, mensagem) {
        if (!regras[campo]) regras[campo] = [];
        regras[campo].push({ validador, mensagem });
        return criarValidador(); // Para chaining
    }
    
    function validar(dados) {
        const erros = {};
        
        for (let campo in regras) {
            if (dados.hasOwnProperty(campo)) {
                for (let regra of regras[campo]) {
                    if (!regra.validador(dados[campo])) {
                        if (!erros[campo]) erros[campo] = [];
                        erros[campo].push(regra.mensagem);
                    }
                }
            }
        }
        
        return {
            valido: Object.keys(erros).length === 0,
            erros
        };
    }
    
    return { adicionarRegra, validar };
}

const validador = criarValidador();
validador.adicionarRegra("email", email => email.includes("@"), "Email deve conter @");
validador.adicionarRegra("idade", idade => idade >= 18, "Deve ser maior de idade");

const resultado = validador.validar({ email: "test", idade: 16 });
console.log(resultado);
```

## ⚠️ Pegadinhas Comuns

### 🐛 Closure em Loops
```javascript
// ❌ Problema clássico
function criarContadores() {
    let contadores = [];
    
    for (var i = 0; i < 3; i++) {
        contadores.push(function() {
            return i; // Sempre retorna 3!
        });
    }
    
    return contadores;
}

const contadores = criarContadores();
console.log(contadores[0]()); // 3 (esperado: 0)
```

### ✅ Soluções
```javascript
// Solução 1: IIFE
function criarContadoresCorrigido1() {
    let contadores = [];
    
    for (var i = 0; i < 3; i++) {
        contadores.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    
    return contadores;
}

// Solução 2: let (escopo de bloco)
function criarContadoresCorrigido2() {
    let contadores = [];
    
    for (let i = 0; i < 3; i++) {
        contadores.push(function() {
            return i;
        });
    }
    
    return contadores;
}
```

### 🐛 Memory Leaks
```javascript
// ❌ Potencial vazamento de memória
function problemaMemoria() {
    let dadosMuitoGrandes = new Array(1000000).fill("dados");
    
    return function pequenaFuncao() {
        console.log("Oi"); // Mantém referência a dadosMuitoGrandes
    };
}

// ✅ Melhor: limpar referências desnecessárias
function melhorMemoria() {
    let dadosMuitoGrandes = new Array(1000000).fill("dados");
    let resultado = dadosMuitoGrandes.length; // Extrair apenas o necessário
    dadosMuitoGrandes = null; // Limpar referência
    
    return function pequenaFuncao() {
        console.log(`Dados processados: ${resultado}`);
    };
}
```

## 🔧 Padrões com Funções Aninhadas

| Padrão | Descrição | Uso |
|--------|-----------|-----|
| Factory | Retorna funções customizadas | Criação de instâncias |
| Module | Encapsula dados privados | Organização de código |
| Closure | Mantém acesso ao escopo pai | Estado persistente |
| Currying | Função que retorna função | Especialização de funções |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Closures](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures)
- [JavaScript.info - Nested Functions](https://javascript.info/closure)

### 🎯 Próximas Aulas
- **Aula 15**: Funções Geradoras - yield e iteradores

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de funções aninhadas
- [ ] Compreendo como funciona o escopo em funções aninhadas
- [ ] Sei criar closures para encapsular dados
- [ ] Consigo implementar padrões Factory e Module
- [ ] Entendo os problemas de memory leak e como evitá-los
- [ ] Posso usar funções aninhadas para criar APIs limpas

**🎉 Parabéns! Você dominou Funções Aninhadas!**
