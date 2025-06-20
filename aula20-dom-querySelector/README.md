# 🌟 Aula 20: DOM querySelector

## 🎯 Objetivo
Dominar os métodos `querySelector()` e `querySelectorAll()` para selecionar elementos HTML usando seletores CSS, oferecendo máxima flexibilidade na seleção de elementos do DOM.

## 📚 Conceitos Fundamentais

### 🔧 querySelector e querySelectorAll
Métodos modernos que permitem usar qualquer seletor CSS válido para encontrar elementos no DOM.

### 📊 Comparação querySelector vs querySelectorAll
| Método | Retorno | Descrição | Exemplo |
|--------|---------|-----------|---------|
| `querySelector()` | Primeiro elemento ou null | Retorna apenas o primeiro match | `document.querySelector(".classe")` |
| `querySelectorAll()` | NodeList | Retorna todos os matches | `document.querySelectorAll(".classe")` |

## 🚀 Implementação

### 📝 Arquivo: `aula20.js`
```javascript
// Seletores básicos
const primeiroParagrafo = document.querySelector("p");
const elementoPorId = document.querySelector("#meuId");
const elementoPorClasse = document.querySelector(".minhaClasse");

// Seletores avançados
const primeiroItemLista = document.querySelector("ul li:first-child");
const ultimoItemLista = document.querySelector("ul li:last-child");
const segundoItem = document.querySelector("ul li:nth-child(2)");

// Seletores de atributo
const inputEmail = document.querySelector('input[type="email"]');
const linkExterno = document.querySelector('a[href^="http"]');
const imagemComAlt = document.querySelector('img[alt]');

// Seletores combinados
const botaoDentroForm = document.querySelector("form button");
const divComClasses = document.querySelector("div.container.ativo");

// querySelectorAll - selecionando múltiplos elementos
const todosParagrafos = document.querySelectorAll("p");
const todosLinks = document.querySelectorAll("a");
const botoesPrimarios = document.querySelectorAll(".btn-primary");

console.log("Parágrafos encontrados:", todosParagrafos.length);

// Iterando sobre NodeList
todosParagrafos.forEach((paragrafo, index) => {
    paragrafo.dataset.numero = index + 1;
    console.log(`Parágrafo ${index + 1}: ${paragrafo.textContent}`);
});

// Função para destacar elementos
function destacarElementos() {
    const elementosDestaque = document.querySelectorAll(".destaque");
    
    elementosDestaque.forEach(elemento => {
        elemento.style.backgroundColor = "yellow";
        elemento.style.padding = "10px";
        elemento.style.border = "2px solid orange";
    });
}

// Seletores com pseudo-classes
function aplicarEstilosAlternados() {
    const itensImpares = document.querySelectorAll("li:nth-child(odd)");
    const itensPares = document.querySelectorAll("li:nth-child(even)");
    
    itensImpares.forEach(item => {
        item.style.backgroundColor = "#f0f0f0";
    });
    
    itensPares.forEach(item => {
        item.style.backgroundColor = "#e0e0e0";
    });
}

// Seletor com múltiplas classes
function gerenciarFormulario() {
    const camposObrigatorios = document.querySelectorAll("input.obrigatorio");
    const botaoSubmit = document.querySelector("button[type='submit']");
    
    if (botaoSubmit) {
        botaoSubmit.addEventListener("click", function(e) {
            let todosValidos = true;
            
            camposObrigatorios.forEach(campo => {
                if (!campo.value.trim()) {
                    campo.classList.add("erro");
                    todosValidos = false;
                } else {
                    campo.classList.remove("erro");
                }
            });
            
            if (!todosValidos) {
                e.preventDefault();
                alert("Preencha todos os campos obrigatórios!");
            }
        });
    }
}

// Seletores contextuais
function navegacaoInterativa() {
    const menuItems = document.querySelectorAll("nav ul li a");
    
    menuItems.forEach(link => {
        link.addEventListener("click", function(e) {
            // Remove ativo de todos
            menuItems.forEach(l => l.classList.remove("ativo"));
            
            // Adiciona ativo ao clicado
            this.classList.add("ativo");
        });
    });
}

// Combinando seletores
function sistemaModal() {
    const btnsAbrirModal = document.querySelectorAll("[data-modal]");
    const btnsFecharModal = document.querySelectorAll(".modal .fechar");
    const overlayModal = document.querySelector(".modal-overlay");
    
    btnsAbrirModal.forEach(btn => {
        btn.addEventListener("click", function() {
            const modalId = this.dataset.modal;
            const modal = document.querySelector(`#${modalId}`);
            
            if (modal) {
                modal.classList.add("visivel");
                if (overlayModal) overlayModal.classList.add("visivel");
            }
        });
    });
    
    btnsFecharModal.forEach(btn => {
        btn.addEventListener("click", function() {
            const modal = this.closest(".modal");
            if (modal) {
                modal.classList.remove("visivel");
                if (overlayModal) overlayModal.classList.remove("visivel");
            }
        });
    });
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    destacarElementos();
    aplicarEstilosAlternados();
    gerenciarFormulario();
    navegacaoInterativa();
    sistemaModal();
});
```

### 🎨 Arquivo: `aula20.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM querySelector</title>
    <style>
        .destaque {
            transition: all 0.3s ease;
        }
        
        .erro {
            border: 2px solid red !important;
            background-color: #ffebee;
        }
        
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
        }
        
        nav ul li {
            margin-right: 20px;
        }
        
        nav ul li a {
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 4px;
        }
        
        nav ul li a.ativo {
            background-color: #007bff;
            color: white;
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            z-index: 1001;
        }
        
        .modal.visivel {
            display: block;
        }
        
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1000;
        }
        
        .modal-overlay.visivel {
            display: block;
        }
        
        .fechar {
            float: right;
            background: #dc3545;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 3px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>querySelector Demo</h1>
        
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        
        <section>
            <h2>Parágrafos</h2>
            <p class="destaque">Este é um parágrafo destacado.</p>
            <p>Este é um parágrafo normal.</p>
            <p class="destaque">Outro parágrafo destacado.</p>
        </section>
        
        <section>
            <h2>Lista</h2>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
            </ul>
        </section>
        
        <section>
            <h2>Formulário</h2>
            <form>
                <div>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" class="obrigatorio" required>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" class="obrigatorio" required>
                </div>
                <div>
                    <label for="telefone">Telefone (opcional):</label>
                    <input type="tel" id="telefone">
                </div>
                <button type="submit">Enviar</button>
            </form>
        </section>
        
        <section>
            <h2>Modais</h2>
            <button data-modal="modal1">Abrir Modal 1</button>
            <button data-modal="modal2">Abrir Modal 2</button>
        </section>
        
        <section>
            <h2>Links</h2>
            <a href="http://exemplo.com">Link Externo</a>
            <a href="#interno">Link Interno</a>
        </section>
    </div>
    
    <!-- Modais -->
    <div class="modal-overlay"></div>
    
    <div id="modal1" class="modal">
        <button class="fechar">&times;</button>
        <h3>Modal 1</h3>
        <p>Conteúdo do primeiro modal.</p>
    </div>
    
    <div id="modal2" class="modal">
        <button class="fechar">&times;</button>
        <h3>Modal 2</h3>
        <p>Conteúdo do segundo modal.</p>
    </div>
    
    <script src="aula20.js"></script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Seletores Avançados
```javascript
// Seletores por atributo específicos
const inputsComPlaceholder = document.querySelectorAll("input[placeholder]");
const linksComTarget = document.querySelectorAll("a[target='_blank']");
const imagensComSrcEspecifico = document.querySelectorAll("img[src$='.jpg']");

// Seletores de posição
const primeiroFilho = document.querySelector("ul li:first-child");
const ultimoFilho = document.querySelector("ul li:last-child");
const terceiroItem = document.querySelector("ul li:nth-child(3)");
const itensPares = document.querySelectorAll("ul li:nth-child(even)");

// Seletores não (negação)
const inputsNaoHidden = document.querySelectorAll("input:not([type='hidden'])");
const divsNaoVazias = document.querySelectorAll("div:not(:empty)");
```

### 🔬 Teste 2: Sistema de Filtros
```javascript
function sistemaFiltrosAvancado() {
    const filtros = {
        categoria: document.querySelector("#filtroCategoria"),
        preco: document.querySelector("#filtroPreco"),
        disponibilidade: document.querySelector("#filtroDisponibilidade")
    };
    
    const produtos = document.querySelectorAll(".produto");
    
    function aplicarFiltros() {
        produtos.forEach(produto => {
            let mostrar = true;
            
            // Filtro por categoria
            if (filtros.categoria.value && 
                produto.dataset.categoria !== filtros.categoria.value) {
                mostrar = false;
            }
            
            // Filtro por preço
            if (filtros.preco.value) {
                const preco = parseFloat(produto.dataset.preco);
                const maxPreco = parseFloat(filtros.preco.value);
                if (preco > maxPreco) mostrar = false;
            }
            
            // Filtro por disponibilidade
            if (filtros.disponibilidade.checked && 
                produto.dataset.disponivel !== "true") {
                mostrar = false;
            }
            
            produto.style.display = mostrar ? "block" : "none";
        });
    }
    
    Object.values(filtros).forEach(filtro => {
        filtro.addEventListener("change", aplicarFiltros);
    });
}
```

## 💡 Casos de Uso Práticos

### ✅ Use querySelector quando:
- Precisar de seletores CSS complexos
- Quiser máxima flexibilidade na seleção
- Trabalhar com pseudo-classes e pseudo-elementos
- Necessitar de seletores de atributo específicos
- Implementar funcionalidades modernas de UI

### ✅ Exemplos Práticos
```javascript
// Sistema de abas complexo
function sistemaAbasAvancado() {
    const abas = document.querySelectorAll("[data-tab]");
    const paineis = document.querySelectorAll("[data-panel]");
    
    abas.forEach(aba => {
        aba.addEventListener("click", function() {
            const targetPanel = this.dataset.tab;
            
            // Desativa todas as abas e painéis
            abas.forEach(a => a.classList.remove("ativa"));
            paineis.forEach(p => p.classList.remove("visivel"));
            
            // Ativa a aba clicada e painel correspondente
            this.classList.add("ativa");
            const painel = document.querySelector(`[data-panel="${targetPanel}"]`);
            if (painel) painel.classList.add("visivel");
        });
    });
}

// Busca em tempo real
function buscaTempoReal() {
    const campoBusca = document.querySelector("#busca");
    const itens = document.querySelectorAll(".item-busca");
    
    campoBusca.addEventListener("input", function() {
        const termo = this.value.toLowerCase();
        
        itens.forEach(item => {
            const texto = item.textContent.toLowerCase();
            const match = texto.includes(termo);
            
            item.style.display = match || termo === "" ? "block" : "none";
            
            if (match && termo !== "") {
                item.classList.add("highlight");
            } else {
                item.classList.remove("highlight");
            }
        });
    });
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 querySelector vs getElementById Performance
```javascript
// ✅ Mais rápido para IDs únicos
const el1 = document.getElementById("meuId");

// ❌ Mais lento, mas mais flexível
const el2 = document.querySelector("#meuId");

// Use querySelector quando precisar de flexibilidade
```

### 🐛 NodeList vs HTMLCollection
```javascript
const nodeList = document.querySelectorAll(".classe");    // NodeList
const htmlCollection = document.getElementsByClassName("classe"); // HTMLCollection

// NodeList tem forEach nativo
nodeList.forEach(el => {}); // ✅ Funciona

// HTMLCollection não tem forEach
// htmlCollection.forEach(el => {}); // ❌ Erro!
Array.from(htmlCollection).forEach(el => {}); // ✅ Funciona
```

### 🐛 Seletores CSS Inválidos
```javascript
// ❌ Seletor inválido causa erro
try {
    const elementos = document.querySelectorAll("div::");
} catch (error) {
    console.log("Seletor CSS inválido:", error);
}

// ✅ Sempre validar seletores dinâmicos
function seletorSeguro(seletor) {
    try {
        return document.querySelectorAll(seletor);
    } catch (error) {
        console.warn("Seletor inválido:", seletor);
        return [];
    }
}
```

## 🔧 Seletores CSS Úteis

| Seletor | Descrição | Exemplo |
|---------|-----------|---------|
| `:first-child` | Primeiro filho | `li:first-child` |
| `:last-child` | Último filho | `li:last-child` |
| `:nth-child(n)` | N-ésimo filho | `li:nth-child(2)` |
| `:not(seletor)` | Negação | `input:not([type="hidden"])` |
| `[atributo]` | Possui atributo | `img[alt]` |
| `[atributo="valor"]` | Atributo com valor exato | `input[type="email"]` |
| `[atributo^="valor"]` | Atributo começa com | `a[href^="http"]` |
| `[atributo$="valor"]` | Atributo termina com | `img[src$=".jpg"]` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - querySelector](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)
- [MDN - CSS Selectors](https://developer.mozilla.org/pt-BR/docs/Web/CSS/CSS_Selectors)

### 🎯 Próximas Aulas
- **Aula 21**: Eventos addEventListener - Manipulação de eventos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi a diferença entre querySelector e querySelectorAll
- [ ] Sei usar seletores CSS complexos
- [ ] Compreendo a diferença entre NodeList e HTMLCollection
- [ ] Consigo criar sistemas de busca e filtros
- [ ] Sei quando usar querySelector vs outros métodos
- [ ] Posso aplicar seletores avançados em projetos reais

**🎉 Parabéns! Você dominou querySelector!**
