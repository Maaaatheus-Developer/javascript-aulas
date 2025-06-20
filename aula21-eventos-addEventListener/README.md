# 🌟 Aula 21: Eventos addEventListener

## 🎯 Objetivo
Dominar o método `addEventListener()` para gerenciar eventos de forma moderna e flexível, permitindo múltiplos listeners, controle de propagação e criação de interfaces interativas robustas.

## 📚 Conceitos Fundamentais

### 🔧 addEventListener()
Método moderno para adicionar manipuladores de eventos a elementos HTML, oferecendo mais controle e flexibilidade que métodos antigos.

### 📊 addEventListener vs Métodos Antigos
| Método | Múltiplos Listeners | Remoção Fácil | Controle de Propagação | Recomendado |
|--------|-------------------|---------------|----------------------|-------------|
| `addEventListener` | ✅ Sim | ✅ Sim | ✅ Sim | ✅ Sim |
| `onclick = function` | ❌ Não | ❌ Difícil | ❌ Limitado | ❌ Não |
| `onclick="function()"` | ❌ Não | ❌ Difícil | ❌ Limitado | ❌ Não |

## 🚀 Implementação

### 📝 Arquivo: `aula21.js`
```javascript
// Exemplo básico de addEventListener
const botao = document.getElementById("meuBotao");

if (botao) {
    botao.addEventListener("click", function() {
        console.log("Botão clicado!");
        this.textContent = "Clicado!";
    });
}

// Múltiplos event listeners no mesmo elemento
const botaoMultiplo = document.getElementById("botaoMultiplo");

if (botaoMultiplo) {
    // Primeiro listener
    botaoMultiplo.addEventListener("click", function() {
        console.log("Primeiro listener executado");
    });
    
    // Segundo listener
    botaoMultiplo.addEventListener("click", function() {
        console.log("Segundo listener executado");
        this.style.backgroundColor = "green";
    });
    
    // Terceiro listener
    botaoMultiplo.addEventListener("click", function() {
        console.log("Terceiro listener executado");
    });
}

// Diferentes tipos de eventos
const inputTexto = document.getElementById("inputTexto");

if (inputTexto) {
    inputTexto.addEventListener("focus", function() {
        console.log("Input focado");
        this.style.borderColor = "blue";
    });
    
    inputTexto.addEventListener("blur", function() {
        console.log("Input perdeu foco");
        this.style.borderColor = "";
    });
    
    inputTexto.addEventListener("input", function() {
        console.log("Valor alterado:", this.value);
        const contador = document.getElementById("contador");
        if (contador) {
            contador.textContent = `Caracteres: ${this.value.length}`;
        }
    });
    
    inputTexto.addEventListener("keydown", function(event) {
        console.log("Tecla pressionada:", event.key);
        
        // Impedir números
        if (event.key >= "0" && event.key <= "9") {
            event.preventDefault();
            console.log("Números não são permitidos!");
        }
    });
}

// Eventos de mouse
const areaInterativa = document.getElementById("areaInterativa");

if (areaInterativa) {
    areaInterativa.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "lightblue";
        console.log("Mouse entrou na área");
    });
    
    areaInterativa.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";
        console.log("Mouse saiu da área");
    });
    
    areaInterativa.addEventListener("mousemove", function(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        this.textContent = `Mouse em: (${x}, ${y})`;
    });
}

// Formulário com validação
const formulario = document.getElementById("meuFormulario");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede envio padrão
        
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        
        if (!nome.trim()) {
            alert("Nome é obrigatório!");
            return;
        }
        
        if (!email.includes("@")) {
            alert("Email inválido!");
            return;
        }
        
        console.log("Formulário válido!", { nome, email });
        alert("Formulário enviado com sucesso!");
    });
}

// Event listener com opções
const botaoComOpcoes = document.getElementById("botaoComOpcoes");

if (botaoComOpcoes) {
    // Listener que executa apenas uma vez
    botaoComOpcoes.addEventListener("click", function() {
        console.log("Este listener só executa uma vez!");
        this.textContent = "Usado!";
    }, { once: true });
    
    // Listener passivo (para performance)
    botaoComOpcoes.addEventListener("touchstart", function() {
        console.log("Touch iniciado (passivo)");
    }, { passive: true });
}

// Removendo event listeners
function adicionarListenerTemporario() {
    const botaoTemp = document.getElementById("botaoTemporario");
    
    function handlerTemporario() {
        console.log("Listener temporário executado");
        
        // Remove o próprio listener após execução
        botaoTemp.removeEventListener("click", handlerTemporario);
        botaoTemp.textContent = "Listener removido!";
    }
    
    if (botaoTemp) {
        botaoTemp.addEventListener("click", handlerTemporario);
    }
}

// Delegação de eventos
const lista = document.getElementById("listaInterativa");

if (lista) {
    // Um único listener na lista que funciona para todos os itens
    lista.addEventListener("click", function(event) {
        if (event.target.tagName === "LI") {
            console.log("Item clicado:", event.target.textContent);
            event.target.classList.toggle("selecionado");
        }
    });
    
    // Adicionar novos itens dinamicamente
    const btnAdicionarItem = document.getElementById("btnAdicionarItem");
    let contadorItens = 1;
    
    if (btnAdicionarItem) {
        btnAdicionarItem.addEventListener("click", function() {
            const novoItem = document.createElement("li");
            novoItem.textContent = `Novo item ${contadorItens++}`;
            lista.appendChild(novoItem);
        });
    }
}

// Eventos customizados
function criarEventoCustomizado() {
    const elemento = document.getElementById("elementoCustomizado");
    
    if (elemento) {
        // Criando evento customizado
        const eventoCustomizado = new CustomEvent("meuEvento", {
            detail: { mensagem: "Olá do evento customizado!" }
        });
        
        // Adicionando listener para evento customizado
        elemento.addEventListener("meuEvento", function(event) {
            console.log("Evento customizado recebido:", event.detail.mensagem);
            this.style.backgroundColor = "yellow";
        });
        
        // Disparando evento customizado
        elemento.addEventListener("click", function() {
            this.dispatchEvent(eventoCustomizado);
        });
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM totalmente carregado");
    adicionarListenerTemporario();
    criarEventoCustomizado();
});

// Listener para toda a janela
window.addEventListener("resize", function() {
    console.log("Janela redimensionada:", window.innerWidth, "x", window.innerHeight);
});

window.addEventListener("beforeunload", function(event) {
    event.returnValue = "Tem certeza que deseja sair?";
});
```

### 🎨 Arquivo: `aula21.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>addEventListener</title>
    <style>
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .secao {
            margin: 20px 0;
            padding: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        
        button {
            margin: 5px;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            background-color: #007bff;
            color: white;
        }
        
        button:hover {
            background-color: #0056b3;
        }
        
        input {
            margin: 5px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        .area-interativa {
            width: 200px;
            height: 100px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            cursor: pointer;
        }
        
        .selecionado {
            background-color: #007bff;
            color: white;
        }
        
        ul {
            list-style-type: none;
            padding: 0;
        }
        
        li {
            padding: 10px;
            margin: 5px 0;
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            cursor: pointer;
            border-radius: 4px;
        }
        
        li:hover {
            background-color: #e9ecef;
        }
        
        .contador {
            margin: 10px 0;
            font-weight: bold;
            color: #6c757d;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>addEventListener Demo</h1>
        
        <div class="secao">
            <h2>Botões Básicos</h2>
            <button id="meuBotao">Clique aqui</button>
            <button id="botaoMultiplo">Múltiplos Listeners</button>
            <button id="botaoComOpcoes">Com Opções (once)</button>
            <button id="botaoTemporario">Temporário</button>
        </div>
        
        <div class="secao">
            <h2>Input com Eventos</h2>
            <input type="text" id="inputTexto" placeholder="Digite apenas letras">
            <div id="contador" class="contador">Caracteres: 0</div>
        </div>
        
        <div class="secao">
            <h2>Área Interativa</h2>
            <div id="areaInterativa" class="area-interativa">
                Mova o mouse aqui
            </div>
        </div>
        
        <div class="secao">
            <h2>Formulário</h2>
            <form id="meuFormulario">
                <div>
                    <input type="text" id="nome" placeholder="Nome" required>
                </div>
                <div>
                    <input type="email" id="email" placeholder="Email" required>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
        
        <div class="secao">
            <h2>Lista Interativa (Delegação de Eventos)</h2>
            <ul id="listaInterativa">
                <li>Item 1 - Clique para selecionar</li>
                <li>Item 2 - Clique para selecionar</li>
                <li>Item 3 - Clique para selecionar</li>
            </ul>
            <button id="btnAdicionarItem">Adicionar Novo Item</button>
        </div>
        
        <div class="secao">
            <h2>Evento Customizado</h2>
            <div id="elementoCustomizado" style="padding: 20px; border: 2px solid #ccc; cursor: pointer;">
                Clique para disparar evento customizado
            </div>
        </div>
    </div>
    
    <script src="aula21.js"></script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Sistema de Drag and Drop
```javascript
function dragAndDrop() {
    const draggables = document.querySelectorAll(".draggable");
    const dropZones = document.querySelectorAll(".drop-zone");
    
    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text/plain", this.id);
            this.style.opacity = "0.5";
        });
        
        draggable.addEventListener("dragend", function() {
            this.style.opacity = "1";
        });
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener("dragover", function(e) {
            e.preventDefault();
            this.style.backgroundColor = "#f0f0f0";
        });
        
        zone.addEventListener("dragleave", function() {
            this.style.backgroundColor = "";
        });
        
        zone.addEventListener("drop", function(e) {
            e.preventDefault();
            const draggedId = e.dataTransfer.getData("text/plain");
            const draggedElement = document.getElementById(draggedId);
            
            this.appendChild(draggedElement);
            this.style.backgroundColor = "";
        });
    });
}
```

### 🔬 Teste 2: Teclado Virtual
```javascript
function tecladoVirtual() {
    const display = document.getElementById("displayTeclado");
    const teclas = document.querySelectorAll(".tecla");
    
    teclas.forEach(tecla => {
        tecla.addEventListener("click", function() {
            const valor = this.dataset.valor;
            
            if (valor === "backspace") {
                display.value = display.value.slice(0, -1);
            } else if (valor === "clear") {
                display.value = "";
            } else if (valor === "space") {
                display.value += " ";
            } else {
                display.value += valor;
            }
        });
        
        // Efeito visual
        tecla.addEventListener("mousedown", function() {
            this.style.transform = "scale(0.95)";
        });
        
        tecla.addEventListener("mouseup", function() {
            this.style.transform = "scale(1)";
        });
    });
}
```

## 💡 Casos de Uso Práticos

### ✅ Use addEventListener quando:
- Precisar de múltiplos listeners no mesmo elemento
- Quiser controle fino sobre propagação de eventos
- Implementar delegação de eventos
- Trabalhar com eventos customizados
- Criar interfaces modernas e interativas

### ✅ Exemplos Práticos
```javascript
// Sistema de notificações
function sistemaNotificacoes() {
    const container = document.getElementById("notificacoes");
    
    function mostrarNotificacao(mensagem, tipo = "info", duracao = 3000) {
        const notificacao = document.createElement("div");
        notificacao.className = `notificacao ${tipo}`;
        notificacao.textContent = mensagem;
        
        // Botão fechar
        const btnFechar = document.createElement("button");
        btnFechar.textContent = "×";
        btnFechar.addEventListener("click", function() {
            removerNotificacao(notificacao);
        });
        
        notificacao.appendChild(btnFechar);
        container.appendChild(notificacao);
        
        // Auto-remoção
        setTimeout(() => {
            removerNotificacao(notificacao);
        }, duracao);
    }
    
    function removerNotificacao(notificacao) {
        notificacao.style.opacity = "0";
        setTimeout(() => {
            if (notificacao.parentNode) {
                notificacao.parentNode.removeChild(notificacao);
            }
        }, 300);
    }
    
    return { mostrar: mostrarNotificacao };
}

// Infinite Scroll
function infiniteScroll() {
    let carregando = false;
    let pagina = 1;
    
    window.addEventListener("scroll", function() {
        if (carregando) return;
        
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        
        if (scrollTop + clientHeight >= scrollHeight - 5) {
            carregando = true;
            carregarMaisConteudo().then(() => {
                carregando = false;
            });
        }
    });
    
    async function carregarMaisConteudo() {
        // Simular carregamento
        console.log(`Carregando página ${++pagina}...`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Adicionar conteúdo...
    }
}
```

## ⚠️ Pegadinhas Comuns

### 🐛 Event Listener em Loop
```javascript
// ❌ Problema: todos os listeners capturam o último valor de i
for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        console.log(i); // Sempre o último valor!
    });
}

// ✅ Solução 1: let (escopo de bloco)
for (let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function() {
        console.log(i); // Valor correto
    });
}

// ✅ Solução 2: IIFE
for (var i = 0; i < botoes.length; i++) {
    (function(index) {
        botoes[index].addEventListener("click", function() {
            console.log(index); // Valor correto
        });
    })(i);
}
```

### 🐛 Memory Leaks
```javascript
// ❌ Vazamento de memória
function criarElementosComEventos() {
    const elemento = document.createElement("div");
    const dadosGrandes = new Array(1000000).fill("dados");
    
    elemento.addEventListener("click", function() {
        console.log(dadosGrandes.length); // Mantém referência
    });
    
    return elemento;
}

// ✅ Melhor: limpar referências
function criarElementosOtimizado() {
    const elemento = document.createElement("div");
    const tamanho = 1000000; // Só o que precisa
    
    elemento.addEventListener("click", function() {
        console.log(tamanho);
    });
    
    return elemento;
}
```

## 🔧 Opções do addEventListener

| Opção | Descrição | Exemplo |
|-------|-----------|---------|
| `once` | Executa apenas uma vez | `{once: true}` |
| `passive` | Não chama preventDefault | `{passive: true}` |
| `capture` | Captura na fase de captura | `{capture: true}` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - addEventListener](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
- [MDN - Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)

### 🎯 Próximas Aulas
- **Aula 22**: Eventos Múltiplos - Gerenciando vários eventos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi as vantagens do addEventListener
- [ ] Sei adicionar múltiplos listeners ao mesmo elemento
- [ ] Compreendo delegação de eventos
- [ ] Consigo remover event listeners
- [ ] Entendo as opções do addEventListener
- [ ] Posso criar eventos customizados

**🎉 Parabéns! Você dominou addEventListener!**
