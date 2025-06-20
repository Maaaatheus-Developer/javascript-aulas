# 🌟 Aula 08: Introdução às Funções

## 🎯 Objetivo
Aprender o conceito fundamental de funções em JavaScript: como declarar, chamar e usar funções para organizar código em blocos reutilizáveis, aplicando manipulação básica do DOM.

## 📚 Conceitos Fundamentais

### 🔧 Função
Um bloco de código reutilizável que executa uma tarefa específica. Pode ser chamada quantas vezes necessário.

### 📊 Estrutura de uma Função
| Parte | Descrição | Exemplo |
|-------|-----------|---------|
| `function` | Palavra-chave | `function` |
| Nome | Identificador da função | `mudarTexto` |
| `()` | Parênteses (para parâmetros) | `()` |
| `{}` | Bloco de código | `{ ... }` |

## 🚀 Implementação

### 📝 Arquivo: `aula08.js`
```javascript
// Declaração de função básica
function mudarTexto() {
    // Selecionando elementos do DOM
    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");  
    let d3 = document.getElementById("d3");
    
    // Modificando o conteúdo
    d1.innerHTML = "CFB Cursos";
    d2.innerHTML = "CFB Cursos";
    d3.innerHTML = "CFB Cursos";
}
```

### 🎨 Arquivo: `aula08.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Introdução às Funções</title>
</head>
<body>
    <div id="d1">Texto original 1</div>
    <div id="d2">Texto original 2</div>
    <div id="d3">Texto original 3</div>
    
    <!-- Chamando função via onclick -->
    <button onclick="mudarTexto()">Mudar Texto</button>
    
    <script src="aula08.js"></script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Função Simples
```javascript
function saudar() {
    console.log("Olá, mundo!");
}

// Chamando a função
saudar(); // Output: "Olá, mundo!"
```

### 🔬 Teste 2: Função com DOM
```javascript
function alterarCor() {
    let elemento = document.getElementById("meuDiv");
    elemento.style.backgroundColor = "blue";
    elemento.style.color = "white";
}

function resetarCor() {
    let elemento = document.getElementById("meuDiv");
    elemento.style.backgroundColor = "";
    elemento.style.color = "";
}
```

### 🔬 Teste 3: Múltiplas Funções
```javascript
function mostrarHora() {
    let agora = new Date();
    document.getElementById("hora").innerHTML = agora.toLocaleTimeString();
}

function limparTela() {
    document.getElementById("conteudo").innerHTML = "";
}

function carregarDados() {
    document.getElementById("conteudo").innerHTML = "Dados carregados!";
}
```

## 💡 Casos de Uso Práticos

### ✅ Quando Usar Funções
- Organizar código repetitivo
- Separar responsabilidades
- Facilitar manutenção
- Melhorar legibilidade
- Permitir reutilização
- Criar módulos funcionais

### ✅ Exemplos Práticos
```javascript
// Validação de formulário
function validarEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Formatação de dados
function formatarMoeda(valor) {
    return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

// Animações simples
function fadeIn(elemento) {
    elemento.style.opacity = "0";
    elemento.style.display = "block";
    
    let opacidade = 0;
    let timer = setInterval(() => {
        opacidade += 0.1;
        elemento.style.opacity = opacidade;
        if (opacidade >= 1) clearInterval(timer);
    }, 50);
}
```

### ❌ Quando NÃO Criar Funções
- Para código que executa apenas uma vez
- Para operações muito simples
- Quando aumenta desnecessariamente a complexidade

## ⚠️ Pegadinhas Comuns

### 🐛 Esquecer de Chamar a Função
```javascript
function minhaFuncao() {
    console.log("Olá!");
}
// ❌ Função declarada mas nunca executada!
```

### ✅ Lembrar de Chamar
```javascript
function minhaFuncao() {
    console.log("Olá!");
}
minhaFuncao(); // ✅ Agora executa!
```

### 🐛 Elementos Não Encontrados
```javascript
function alterarTexto() {
    let elemento = document.getElementById("inexistente");
    elemento.innerHTML = "Novo texto"; // ❌ Erro! elemento é null
}
```

### ✅ Verificar Existência
```javascript
function alterarTexto() {
    let elemento = document.getElementById("meuElemento");
    if (elemento) {  // ✅ Verifica se existe
        elemento.innerHTML = "Novo texto";
    }
}
```

## 🔧 Conceitos Relacionados

| Conceito | Descrição | Exemplo |
|----------|-----------|---------|
| Declaração | Criar a função | `function nome() {}` |
| Chamada | Executar a função | `nome()` |
| Escopo | Onde a função é acessível | Global vs Local |
| Hoisting | Funções são "elevadas" | Pode chamar antes de declarar |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
- [JavaScript.info - Functions](https://javascript.info/function-basics)

### 🎯 Próximas Aulas
- **Aula 09**: Funções com Parâmetros - Tornando funções mais flexíveis

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de função
- [ ] Sei declarar uma função básica
- [ ] Consigo chamar funções do HTML e JavaScript
- [ ] Entendo como manipular DOM dentro de funções
- [ ] Sei quando usar funções vs código direto
- [ ] Posso criar funções simples para tarefas específicas

**🎉 Parabéns! Você dominou a Introdução às Funções!**
