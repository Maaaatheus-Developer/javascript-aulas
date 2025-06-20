# 🌟 Aula 22: Eventos Múltiplos

## 🎯 Objetivo
Aprender a gerenciar múltiplos tipos de eventos em elementos, criar sistemas de eventos complexos e implementar padrões avançados de interação em interfaces web modernas.

## 📚 Conceitos Fundamentais

### 🔧 Eventos Múltiplos
Técnicas para adicionar diferentes tipos de eventos ao mesmo elemento ou gerenciar eventos em vários elementos simultaneamente.

### 📊 Estratégias para Eventos Múltiplos
| Estratégia | Descrição | Quando usar |
|-----------|-----------|-------------|
| Múltiplos addEventListener | Vários eventos no mesmo elemento | Interações complexas |
| Delegação de eventos | Um listener para vários elementos | Listas dinâmicas |
| Event namespacing | Organizar eventos por categoria | Aplicações grandes |
| Event pooling | Reutilizar objetos de evento | Performance crítica |

## 🚀 Implementação

### 📝 Arquivo: `aula22.js`
```javascript
// Múltiplos eventos no mesmo elemento
const botaoInterativo = document.getElementById("botaoInterativo");

if (botaoInterativo) {
    // Eventos de mouse
    botaoInterativo.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "#0056b3";
        console.log("Mouse entrou no botão");
    });
    
    botaoInterativo.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "#007bff";
        console.log("Mouse saiu do botão");
    });
    
    botaoInterativo.addEventListener("mousedown", function() {
        this.style.transform = "scale(0.95)";
        console.log("Botão pressionado");
    });
    
    botaoInterativo.addEventListener("mouseup", function() {
        this.style.transform = "scale(1)";
        console.log("Botão liberado");
    });
    
    // Eventos de teclado
    botaoInterativo.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            this.click();
            event.preventDefault();
        }
    });
    
    // Evento de clique
    botaoInterativo.addEventListener("click", function() {
        console.log("Botão clicado!");
        this.textContent = `Clicado ${Date.now()}`;
    });
    
    // Eventos de foco
    botaoInterativo.addEventListener("focus", function() {
        this.style.outline = "3px solid orange";
        console.log("Botão focado");
    });
    
    botaoInterativo.addEventListener("blur", function() {
        this.style.outline = "";
        console.log("Botão perdeu foco");
    });
}

// Sistema de arrastar e soltar com múltiplos eventos
function implementarDragDrop() {
    const itensArrastaveis = document.querySelectorAll(".arrastavel");
    const zonasDestino = document.querySelectorAll(".zona-destino");
    
    itensArrastaveis.forEach(item => {
        // Eventos de drag
        item.addEventListener("dragstart", function(e) {
            e.dataTransfer.setData("text/plain", this.id);
            this.style.opacity = "0.5";
            console.log(`Iniciou arrasto: ${this.id}`);
        });
        
        item.addEventListener("drag", function() {
            // Durante o arrasto (pode ser usado para animações)
        });
        
        item.addEventListener("dragend", function() {
            this.style.opacity = "1";
            console.log(`Terminou arrasto: ${this.id}`);
        });
    });
    
    zonasDestino.forEach(zona => {
        // Eventos de drop
        zona.addEventListener("dragenter", function(e) {
            e.preventDefault();
            this.classList.add("hover-drop");
            console.log("Item entrou na zona");
        });
        
        zona.addEventListener("dragover", function(e) {
            e.preventDefault();
        });
        
        zona.addEventListener("dragleave", function() {
            this.classList.remove("hover-drop");
            console.log("Item saiu da zona");
        });
        
        zona.addEventListener("drop", function(e) {
            e.preventDefault();
            const itemId = e.dataTransfer.getData("text/plain");
            const item = document.getElementById(itemId);
            
            this.appendChild(item);
            this.classList.remove("hover-drop");
            console.log(`Item ${itemId} solto na zona`);
        });
    });
}

// Gerenciador de eventos centralizado
class GerenciadorEventos {
    constructor() {
        this.listeners = new Map();
        this.init();
    }
    
    init() {
        // Eventos globais
        this.adicionarEventoGlobal("scroll", this.onScroll.bind(this));
        this.adicionarEventoGlobal("resize", this.onResize.bind(this));
        this.adicionarEventoGlobal("keydown", this.onKeyDown.bind(this));
    }
    
    adicionarEventoGlobal(tipo, handler) {
        window.addEventListener(tipo, handler);
        
        if (!this.listeners.has("window")) {
            this.listeners.set("window", new Map());
        }
        this.listeners.get("window").set(tipo, handler);
    }
    
    adicionarEvento(elemento, tipo, handler) {
        elemento.addEventListener(tipo, handler);
        
        if (!this.listeners.has(elemento)) {
            this.listeners.set(elemento, new Map());
        }
        this.listeners.get(elemento).set(tipo, handler);
    }
    
    removerTodosEventos() {
        this.listeners.forEach((eventos, elemento) => {
            eventos.forEach((handler, tipo) => {
                if (elemento === "window") {
                    window.removeEventListener(tipo, handler);
                } else {
                    elemento.removeEventListener(tipo, handler);
                }
            });
        });
        this.listeners.clear();
    }
    
    onScroll() {
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        console.log(`Scroll: ${scrollPercent.toFixed(1)}%`);
        
        // Atualizar barra de progresso se existir
        const barraProgresso = document.querySelector(".barra-progresso");
        if (barraProgresso) {
            barraProgresso.style.width = `${scrollPercent}%`;
        }
    }
    
    onResize() {
        console.log(`Redimensionado: ${window.innerWidth}x${window.innerHeight}`);
        
        // Adaptar layout responsivo
        const elementos = document.querySelectorAll(".responsivo");
        elementos.forEach(el => {
            if (window.innerWidth < 768) {
                el.classList.add("mobile");
            } else {
                el.classList.remove("mobile");
            }
        });
    }
    
    onKeyDown(event) {
        // Atalhos de teclado globais
        if (event.ctrlKey || event.metaKey) {
            switch(event.key) {
                case "s":
                    event.preventDefault();
                    console.log("Salvamento rápido ativado");
                    break;
                case "z":
                    event.preventDefault();
                    console.log("Desfazer ativado");
                    break;
                case "y":
                    event.preventDefault();
                    console.log("Refazer ativado");
                    break;
            }
        }
        
        // Teclas especiais
        if (event.key === "Escape") {
            this.fecharModais();
        }
    }
    
    fecharModais() {
        const modais = document.querySelectorAll(".modal.visivel");
        modais.forEach(modal => {
            modal.classList.remove("visivel");
        });
    }
}

// Sistema de formulário com múltiplas validações
function sistemaFormularioAvancado() {
    const formulario = document.getElementById("formularioAvancado");
    
    if (formulario) {
        const campos = formulario.querySelectorAll("input, select, textarea");
        
        campos.forEach(campo => {
            // Múltiplos eventos de validação
            campo.addEventListener("blur", validarCampo);
            campo.addEventListener("input", validarTempoReal);
            campo.addEventListener("focus", limparErros);
        });
        
        formulario.addEventListener("submit", validarFormularioCompleto);
    }
    
    function validarCampo(event) {
        const campo = event.target;
        const valor = campo.value.trim();
        
        // Validações específicas por tipo
        switch(campo.type) {
            case "email":
                if (valor && !valor.includes("@")) {
                    mostrarErro(campo, "Email inválido");
                }
                break;
            case "tel":
                if (valor && !/^\d{10,11}$/.test(valor.replace(/\D/g, ""))) {
                    mostrarErro(campo, "Telefone inválido");
                }
                break;
            case "password":
                if (valor && valor.length < 8) {
                    mostrarErro(campo, "Senha deve ter pelo menos 8 caracteres");
                }
                break;
        }
        
        // Validação de campo obrigatório
        if (campo.required && !valor) {
            mostrarErro(campo, "Campo obrigatório");
        }
    }
    
    function validarTempoReal(event) {
        const campo = event.target;
        
        // Contador de caracteres
        if (campo.maxLength) {
            const contador = campo.parentNode.querySelector(".contador");
            if (contador) {
                contador.textContent = `${campo.value.length}/${campo.maxLength}`;
            }
        }
        
        // Validação de força da senha
        if (campo.type === "password") {
            atualizarForcaSenha(campo);
        }
    }
    
    function limparErros(event) {
        const campo = event.target;
        const erro = campo.parentNode.querySelector(".erro");
        if (erro) {
            erro.remove();
        }
        campo.classList.remove("invalido");
    }
    
    function mostrarErro(campo, mensagem) {
        limparErros({ target: campo });
        
        campo.classList.add("invalido");
        const divErro = document.createElement("div");
        divErro.className = "erro";
        divErro.textContent = mensagem;
        campo.parentNode.appendChild(divErro);
    }
    
    function atualizarForcaSenha(campoSenha) {
        const senha = campoSenha.value;
        const indicador = document.querySelector(".forca-senha");
        
        if (indicador) {
            let forca = 0;
            if (senha.length >= 8) forca++;
            if (/[A-Z]/.test(senha)) forca++;
            if (/[0-9]/.test(senha)) forca++;
            if (/[^A-Za-z0-9]/.test(senha)) forca++;
            
            const niveis = ["fraca", "media", "boa", "forte"];
            indicador.className = `forca-senha ${niveis[forca - 1] || ""}`;
            indicador.textContent = niveis[forca - 1] || "muito fraca";
        }
    }
    
    function validarFormularioCompleto(event) {
        event.preventDefault();
        
        const camposInvalidos = formulario.querySelectorAll(".invalido");
        
        if (camposInvalidos.length === 0) {
            console.log("Formulário válido! Enviando...");
            // Simular envio
            setTimeout(() => {
                alert("Formulário enviado com sucesso!");
            }, 1000);
        } else {
            console.log("Formulário contém erros");
            camposInvalidos[0].focus();
        }
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    implementarDragDrop();
    sistemaFormularioAvancado();
    
    // Criar instância do gerenciador de eventos
    window.gerenciadorEventos = new GerenciadorEventos();
});

// Limpeza ao sair da página
window.addEventListener("beforeunload", function() {
    if (window.gerenciadorEventos) {
        window.gerenciadorEventos.removerTodosEventos();
    }
});
```

### 🎨 Arquivo: `aula22.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos Múltiplos</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: Arial, sans-serif;
        }
        
        .barra-progresso {
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: #007bff;
            width: 0%;
            transition: width 0.3s ease;
            z-index: 1000;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .secao {
            margin: 40px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        #botaoInterativo {
            padding: 15px 30px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: all 0.2s ease;
        }
        
        .drag-drop-area {
            display: flex;
            gap: 20px;
            margin: 20px 0;
        }
        
        .arrastavel {
            padding: 15px;
            background: #f8f9fa;
            border: 2px solid #dee2e6;
            border-radius: 5px;
            cursor: move;
            user-select: none;
        }
        
        .zona-destino {
            min-height: 100px;
            width: 200px;
            border: 2px dashed #ccc;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
        }
        
        .zona-destino.hover-drop {
            border-color: #007bff;
            background: #e7f3ff;
        }
        
        .formulario-avancado {
            max-width: 500px;
        }
        
        .campo-grupo {
            margin: 15px 0;
        }
        
        .campo-grupo label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .campo-grupo input,
        .campo-grupo textarea,
        .campo-grupo select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 14px;
        }
        
        .campo-grupo input.invalido {
            border-color: #dc3545;
            background: #ffebee;
        }
        
        .erro {
            color: #dc3545;
            font-size: 12px;
            margin-top: 5px;
        }
        
        .contador {
            font-size: 12px;
            color: #666;
            text-align: right;
        }
        
        .forca-senha {
            padding: 5px;
            border-radius: 3px;
            font-size: 12px;
            margin-top: 5px;
        }
        
        .forca-senha.fraca { background: #ffebee; color: #c62828; }
        .forca-senha.media { background: #fff3e0; color: #ef6c00; }
        .forca-senha.boa { background: #e8f5e8; color: #2e7d32; }
        .forca-senha.forte { background: #e3f2fd; color: #1565c0; }
        
        .responsivo.mobile {
            font-size: 14px;
            padding: 10px;
        }
        
        .altura-scroll {
            height: 150vh;
            background: linear-gradient(to bottom, #f8f9fa, #dee2e6);
        }
    </style>
</head>
<body>
    <div class="barra-progresso"></div>
    
    <div class="container">
        <h1>Eventos Múltiplos Demo</h1>
        
        <div class="secao">
            <h2>Botão com Múltiplos Eventos</h2>
            <p>Este botão responde a mouse, teclado e foco:</p>
            <button id="botaoInterativo" tabindex="0">Botão Interativo</button>
        </div>
        
        <div class="secao">
            <h2>Drag and Drop</h2>
            <p>Arraste os itens para as zonas de destino:</p>
            <div class="drag-drop-area">
                <div>
                    <div id="item1" class="arrastavel" draggable="true">Item 1</div>
                    <div id="item2" class="arrastavel" draggable="true">Item 2</div>
                    <div id="item3" class="arrastavel" draggable="true">Item 3</div>
                </div>
                <div class="zona-destino">Zona A</div>
                <div class="zona-destino">Zona B</div>
            </div>
        </div>
        
        <div class="secao">
            <h2>Formulário Avançado</h2>
            <form id="formularioAvancado" class="formulario-avancado">
                <div class="campo-grupo">
                    <label for="nome">Nome *</label>
                    <input type="text" id="nome" name="nome" required maxlength="50">
                    <div class="contador">0/50</div>
                </div>
                
                <div class="campo-grupo">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="campo-grupo">
                    <label for="telefone">Telefone</label>
                    <input type="tel" id="telefone" name="telefone">
                </div>
                
                <div class="campo-grupo">
                    <label for="senha">Senha *</label>
                    <input type="password" id="senha" name="senha" required>
                    <div class="forca-senha"></div>
                </div>
                
                <div class="campo-grupo">
                    <label for="biografia">Biografia</label>
                    <textarea id="biografia" name="biografia" rows="4" maxlength="200"></textarea>
                    <div class="contador">0/200</div>
                </div>
                
                <button type="submit">Enviar Formulário</button>
            </form>
        </div>
        
        <div class="secao responsivo">
            <h2>Área Responsiva</h2>
            <p>Esta área se adapta ao redimensionamento da janela.</p>
            <p>Redimensione a janela para ver o efeito.</p>
        </div>
        
        <div class="altura-scroll">
            <h2>Área para Scroll</h2>
            <p>Role a página para ver a barra de progresso no topo.</p>
            <p>Use Ctrl+S, Ctrl+Z, Ctrl+Y para testar atalhos.</p>
            <p>Pressione ESC para fechar modais.</p>
        </div>
    </div>
    
    <script src="aula22.js"></script>
</body>
</html>
```

## 💡 Casos de Uso Práticos

### ✅ Use Eventos Múltiplos quando:
- Criar interfaces altamente interativas
- Implementar funcionalidades complexas (drag-drop, editores)
- Gerenciar estados complexos de UI
- Criar experiências responsivas e acessíveis
- Desenvolver aplicações web modernas

### ✅ Exemplos Práticos
```javascript
// Editor de texto com múltiplos eventos
class EditorTexto {
    constructor(elemento) {
        this.elemento = elemento;
        this.historico = [];
        this.indiceHistorico = -1;
        this.init();
    }
    
    init() {
        // Eventos de teclado
        this.elemento.addEventListener("keydown", this.onKeyDown.bind(this));
        this.elemento.addEventListener("input", this.onInput.bind(this));
        
        // Eventos de mouse
        this.elemento.addEventListener("mouseup", this.onSelecao.bind(this));
        this.elemento.addEventListener("contextmenu", this.onContextMenu.bind(this));
        
        // Eventos de foco
        this.elemento.addEventListener("focus", this.onFocus.bind(this));
        this.elemento.addEventListener("blur", this.onBlur.bind(this));
    }
    
    onKeyDown(event) {
        if (event.ctrlKey || event.metaKey) {
            switch(event.key) {
                case "z":
                    event.preventDefault();
                    this.desfazer();
                    break;
                case "y":
                    event.preventDefault();
                    this.refazer();
                    break;
                case "b":
                    event.preventDefault();
                    this.aplicarFormatacao("bold");
                    break;
            }
        }
    }
    
    onInput() {
        this.salvarEstado();
    }
    
    onSelecao() {
        const selecao = window.getSelection();
        if (selecao.toString()) {
            this.mostrarBarraFormatacao();
        }
    }
    
    // ... outros métodos
}
```

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - Event Types](https://developer.mozilla.org/en-US/docs/Web/Events)
- [JavaScript.info - Event Details](https://javascript.info/event-details)

### 🎯 Próximas Aulas
- **Aula 23**: stopPropagation - Controlando propagação de eventos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi como gerenciar múltiplos eventos
- [ ] Sei implementar drag and drop
- [ ] Consigo criar validações complexas de formulário
- [ ] Compreendo gerenciamento centralizado de eventos
- [ ] Posso criar interfaces altamente interativas
- [ ] Entendo quando usar cada estratégia de eventos

**🎉 Parabéns! Você dominou Eventos Múltiplos!**
