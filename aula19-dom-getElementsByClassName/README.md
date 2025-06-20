# 🌟 Aula 19: DOM getElementsByClassName

## 🎯 Objetivo
Dominar o método `getElementsByClassName()` para selecionar múltiplos elementos HTML que compartilham a mesma classe CSS, permitindo manipulação em lote de elementos similares.

## 📚 Conceitos Fundamentais

### 🔧 getElementsByClassName()
Método que retorna uma HTMLCollection (lista viva) de todos os elementos que possuem a classe CSS especificada.

### 📊 Características do getElementsByClassName
| Aspecto | Descrição | Exemplo |
|---------|-----------|---------|
| Seletor | Nome da classe CSS | `"minhaClasse"` |
| Retorno | HTMLCollection | Lista de elementos |
| Atualização | Lista viva (se DOM muda, lista muda) | Dinâmica |
| Múltiplas classes | Separadas por espaço | `"classe1 classe2"` |

## 🚀 Implementação

### 📝 Arquivo: `aula19.js`
```javascript
// Selecionando elementos por classe
const botoes = document.getElementsByClassName("botao");
const cards = document.getElementsByClassName("card");
const itensLista = document.getElementsByClassName("item-lista");

console.log("Botões encontrados:", botoes.length);
console.log("Cards encontrados:", cards.length);

// Iterando sobre HTMLCollection
function alterarTodosBotoes() {
    // Convertendo para array para usar métodos de array
    const arrayBotoes = Array.from(botoes);
    
    arrayBotoes.forEach((botao, index) => {
        botao.textContent = `Botão ${index + 1} alterado`;
        botao.style.backgroundColor = "#007bff";
        botao.style.color = "white";
    });
}

// Usando for loop tradicional
function destacarCards() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.border = "2px solid red";
        cards[i].style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    }
}

// Adicionando event listeners a múltiplos elementos
function adicionarEventosItens() {
    for (let item of itensLista) {
        item.addEventListener("click", function() {
            this.classList.toggle("selecionado");
            console.log(`Item clicado: ${this.textContent}`);
        });
        
        item.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "#f0f0f0";
        });
        
        item.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "";
        });
    }
}

// Filtrando elementos por múltiplas classes
function destacarItensImportantes() {
    const itensImportantes = document.getElementsByClassName("item-lista importante");
    
    for (let item of itensImportantes) {
        item.style.fontWeight = "bold";
        item.style.color = "red";
    }
}

// Função para mostrar/ocultar elementos
function alternarVisibilidade() {
    const elementosToggle = document.getElementsByClassName("toggle");
    
    for (let elemento of elementosToggle) {
        if (elemento.style.display === "none") {
            elemento.style.display = "block";
        } else {
            elemento.style.display = "none";
        }
    }
}

// Aplicando estilos em lote
function aplicarTemaEscuro() {
    const elementosTema = document.getElementsByClassName("tematizavel");
    
    Array.from(elementosTema).forEach(elemento => {
        elemento.classList.add("tema-escuro");
    });
}

// Removendo elementos
function removerElementosTemporarios() {
    const temporarios = document.getElementsByClassName("temporario");
    
    // Importante: iterar de trás para frente ao remover
    for (let i = temporarios.length - 1; i >= 0; i--) {
        temporarios[i].remove();
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    adicionarEventosItens();
    
    // Exemplo de uso com setTimeout
    setTimeout(() => {
        alterarTodosBotoes();
    }, 2000);
});
```

### 🎨 Arquivo: `aula19.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM getElementsByClassName</title>
    <style>
        .botao {
            padding: 10px 15px;
            margin: 5px;
            border: none;
            cursor: pointer;
            border-radius: 4px;
        }
        
        .card {
            padding: 20px;
            margin: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
            background-color: #f9f9f9;
        }
        
        .item-lista {
            padding: 10px;
            border-bottom: 1px solid #eee;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .selecionado {
            background-color: #007bff !important;
            color: white;
        }
        
        .importante {
            border-left: 4px solid orange;
        }
        
        .tema-escuro {
            background-color: #333;
            color: white;
        }
        
        .toggle {
            margin: 10px 0;
            padding: 10px;
            background-color: #e7f3ff;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>getElementsByClassName Demo</h1>
        
        <section>
            <h2>Botões</h2>
            <button class="botao">Botão 1</button>
            <button class="botao">Botão 2</button>
            <button class="botao">Botão 3</button>
            <button onclick="alterarTodosBotoes()">Alterar Todos os Botões</button>
        </section>
        
        <section>
            <h2>Cards</h2>
            <div class="card tematizavel">
                <h3>Card 1</h3>
                <p>Conteúdo do primeiro card.</p>
            </div>
            <div class="card tematizavel">
                <h3>Card 2</h3>
                <p>Conteúdo do segundo card.</p>
            </div>
            <button onclick="destacarCards()">Destacar Cards</button>
        </section>
        
        <section>
            <h2>Lista de Itens</h2>
            <div class="lista">
                <div class="item-lista">Item normal 1</div>
                <div class="item-lista importante">Item importante 1</div>
                <div class="item-lista">Item normal 2</div>
                <div class="item-lista importante">Item importante 2</div>
                <div class="item-lista">Item normal 3</div>
            </div>
            <button onclick="destacarItensImportantes()">Destacar Importantes</button>
        </section>
        
        <section>
            <h2>Elementos Toggle</h2>
            <div class="toggle">Elemento toggle 1</div>
            <div class="toggle">Elemento toggle 2</div>
            <div class="toggle">Elemento toggle 3</div>
            <button onclick="alternarVisibilidade()">Alternar Visibilidade</button>
        </section>
        
        <section>
            <h2>Controles</h2>
            <button onclick="aplicarTemaEscuro()">Aplicar Tema Escuro</button>
            <button onclick="removerElementosTemporarios()">Remover Temporários</button>
        </section>
        
        <div class="temporario">Elemento temporário 1</div>
        <div class="temporario">Elemento temporário 2</div>
    </div>
    
    <script src="aula19.js"></script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Sistema de Filtros
```javascript
function sistemaFiltros() {
    const produtos = document.getElementsByClassName("produto");
    const filtros = document.getElementsByClassName("filtro");
    
    function aplicarFiltro(categoria) {
        Array.from(produtos).forEach(produto => {
            if (categoria === "todos" || produto.dataset.categoria === categoria) {
                produto.style.display = "block";
            } else {
                produto.style.display = "none";
            }
        });
    }
    
    Array.from(filtros).forEach(filtro => {
        filtro.addEventListener("click", function() {
            // Remove ativo de todos
            Array.from(filtros).forEach(f => f.classList.remove("ativo"));
            // Adiciona ativo ao clicado
            this.classList.add("ativo");
            // Aplica filtro
            aplicarFiltro(this.dataset.categoria);
        });
    });
}
```

### 🔬 Teste 2: Galeria de Imagens
```javascript
function galeriaImagens() {
    const miniaturas = document.getElementsByClassName("miniatura");
    const imagemPrincipal = document.getElementById("imagemPrincipal");
    
    Array.from(miniaturas).forEach((miniatura, index) => {
        miniatura.addEventListener("click", function() {
            // Remove seleção de todas
            Array.from(miniaturas).forEach(m => m.classList.remove("selecionada"));
            
            // Adiciona seleção à clicada
            this.classList.add("selecionada");
            
            // Atualiza imagem principal
            if (imagemPrincipal) {
                imagemPrincipal.src = this.src;
                imagemPrincipal.alt = this.alt;
            }
        });
    });
}
```

## 💡 Casos de Uso Práticos

### ✅ Use getElementsByClassName quando:
- Precisar selecionar múltiplos elementos similares
- Quiser aplicar a mesma ação a vários elementos
- Trabalhar com componentes repetitivos (cards, itens de lista, botões)
- Implementar funcionalidades em lote
- Criar sistemas de filtros ou categorização

### ✅ Exemplos Práticos
```javascript
// Sistema de tabs
function sistemaAbas() {
    const abas = document.getElementsByClassName("aba");
    const conteudos = document.getElementsByClassName("conteudo-aba");
    
    Array.from(abas).forEach((aba, index) => {
        aba.addEventListener("click", function() {
            // Desativa todas as abas
            Array.from(abas).forEach(a => a.classList.remove("ativa"));
            Array.from(conteudos).forEach(c => c.classList.remove("visivel"));
            
            // Ativa a aba clicada
            this.classList.add("ativa");
            if (conteudos[index]) {
                conteudos[index].classList.add("visivel");
            }
        });
    });
}

// Validação de formulário
function validarCampos() {
    const camposObrigatorios = document.getElementsByClassName("obrigatorio");
    let todosValidos = true;
    
    Array.from(camposObrigatorios).forEach(campo => {
        if (!campo.value.trim()) {
            campo.classList.add("erro");
            todosValidos = false;
        } else {
            campo.classList.remove("erro");
        }
    });
    
    return todosValidos;
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 HTMLCollection é Lista Viva
```javascript
const elementos = document.getElementsByClassName("teste");
console.log(elementos.length); // 3

// Removendo elementos afeta a lista
elementos[0].remove();
console.log(elementos.length); // 2 - mudou automaticamente!
```

### 🐛 Iteração Direta Limitada
```javascript
const elementos = document.getElementsByClassName("item");

// ❌ Não tem método forEach
// elementos.forEach(el => {}); // Erro!

// ✅ Converter para array primeiro
Array.from(elementos).forEach(el => {});

// ✅ Ou usar for...of
for (let elemento of elementos) {}
```

### 🐛 Remoção Durante Iteração
```javascript
const elementos = document.getElementsByClassName("remover");

// ❌ Problemas ao remover durante iteração forward
for (let i = 0; i < elementos.length; i++) {
    elementos[i].remove(); // Índices mudam!
}

// ✅ Iterar de trás para frente
for (let i = elementos.length - 1; i >= 0; i--) {
    elementos[i].remove();
}
```

## 🔧 Métodos Úteis com HTMLCollection

| Método/Propriedade | Descrição | Exemplo |
|-------------------|-----------|---------|
| `length` | Quantidade de elementos | `elementos.length` |
| `item(index)` | Acessa elemento por índice | `elementos.item(0)` |
| `[index]` | Acesso direto por índice | `elementos[0]` |
| `Array.from()` | Converte para array | `Array.from(elementos)` |
| `for...of` | Iteração direta | `for(let el of elementos)` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - getElementsByClassName](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName)
- [MDN - HTMLCollection](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection)

### 🎯 Próximas Aulas
- **Aula 20**: DOM querySelector - Seletores CSS avançados

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de getElementsByClassName
- [ ] Sei trabalhar com HTMLCollection
- [ ] Consigo iterar sobre múltiplos elementos
- [ ] Entendo a diferença entre lista viva e estática
- [ ] Posso aplicar ações em lote a elementos
- [ ] Sei evitar problemas com remoção durante iteração

**🎉 Parabéns! Você dominou getElementsByClassName!**
