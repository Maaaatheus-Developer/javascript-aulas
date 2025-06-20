# 🌟 Aula 24: Elementos DOM

## 🎯 Objetivo
Dominar as técnicas de criação, manipulação e remoção de elementos DOM dinamicamente, aprendendo a construir interfaces interativas que se atualizam em tempo real.

## 📚 Conceitos Fundamentais

### 🔧 Manipulação de Elementos DOM
Conjunto de métodos e propriedades para criar, modificar e gerenciar elementos HTML usando JavaScript.

### 📊 Operações com Elementos DOM
| Operação | Método Principal | Descrição |
|----------|------------------|-----------|
| Criar | `createElement()` | Cria novo elemento |
| Adicionar | `appendChild()`, `insertBefore()` | Insere no DOM |
| Remover | `remove()`, `removeChild()` | Remove do DOM |
| Clonar | `cloneNode()` | Copia elemento |
| Substituir | `replaceChild()` | Substitui elemento |

## 🚀 Implementação

### 📝 Arquivo: `aula24.js`
```javascript
// Criação básica de elementos
function criarElementoBasico() {
    const novoDiv = document.createElement("div");
    novoDiv.textContent = "Elemento criado dinamicamente";
    novoDiv.className = "elemento-dinamico";
    novoDiv.style.padding = "10px";
    novoDiv.style.backgroundColor = "#e7f3ff";
    novoDiv.style.border = "1px solid #007bff";
    novoDiv.style.margin = "10px 0";
    
    const container = document.getElementById("containerElementos");
    if (container) {
        container.appendChild(novoDiv);
    }
}

// Sistema de lista de tarefas dinâmica
class ListaTarefas {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.contadorId = 0;
        this.tarefas = [];
        this.init();
    }
    
    init() {
        this.criarFormulario();
        this.criarLista();
    }
    
    criarFormulario() {
        const form = document.createElement("form");
        form.className = "formulario-tarefa";
        
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Digite uma nova tarefa...";
        input.className = "input-tarefa";
        input.required = true;
        
        const botaoAdicionar = document.createElement("button");
        botaoAdicionar.type = "submit";
        botaoAdicionar.textContent = "Adicionar";
        botaoAdicionar.className = "btn-adicionar";
        
        form.appendChild(input);
        form.appendChild(botaoAdicionar);
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.adicionarTarefa(input.value.trim());
            input.value = "";
        });
        
        this.container.appendChild(form);
    }
    
    criarLista() {
        this.lista = document.createElement("ul");
        this.lista.className = "lista-tarefas";
        this.container.appendChild(this.lista);
    }
    
    adicionarTarefa(texto) {
        if (!texto) return;
        
        const tarefa = {
            id: ++this.contadorId,
            texto: texto,
            concluida: false,
            dataCreacao: new Date()
        };
        
        this.tarefas.push(tarefa);
        this.renderizarTarefa(tarefa);
    }
    
    renderizarTarefa(tarefa) {
        const li = document.createElement("li");
        li.className = "item-tarefa";
        li.dataset.id = tarefa.id;
        
        // Checkbox para marcar como concluída
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tarefa.concluida;
        checkbox.addEventListener("change", () => {
            this.alternarConclusao(tarefa.id);
        });
        
        // Texto da tarefa
        const textoSpan = document.createElement("span");
        textoSpan.textContent = tarefa.texto;
        textoSpan.className = "texto-tarefa";
        if (tarefa.concluida) {
            textoSpan.style.textDecoration = "line-through";
            textoSpan.style.opacity = "0.6";
        }
        
        // Botão de editar
        const botaoEditar = document.createElement("button");
        botaoEditar.textContent = "Editar";
        botaoEditar.className = "btn-editar";
        botaoEditar.addEventListener("click", () => {
            this.editarTarefa(tarefa.id, textoSpan);
        });
        
        // Botão de remover
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "btn-remover";
        botaoRemover.addEventListener("click", () => {
            this.removerTarefa(tarefa.id);
        });
        
        // Container para botões
        const containerBotoes = document.createElement("div");
        containerBotoes.className = "botoes-tarefa";
        containerBotoes.appendChild(botaoEditar);
        containerBotoes.appendChild(botaoRemover);
        
        li.appendChild(checkbox);
        li.appendChild(textoSpan);
        li.appendChild(containerBotoes);
        
        this.lista.appendChild(li);
    }
    
    alternarConclusao(id) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (tarefa) {
            tarefa.concluida = !tarefa.concluida;
            const elemento = this.lista.querySelector(`[data-id="${id}"] .texto-tarefa`);
            if (elemento) {
                if (tarefa.concluida) {
                    elemento.style.textDecoration = "line-through";
                    elemento.style.opacity = "0.6";
                } else {
                    elemento.style.textDecoration = "none";
                    elemento.style.opacity = "1";
                }
            }
        }
    }
    
    editarTarefa(id, textoElemento) {
        const tarefa = this.tarefas.find(t => t.id === id);
        if (!tarefa) return;
        
        const input = document.createElement("input");
        input.type = "text";
        input.value = tarefa.texto;
        input.className = "input-edicao";
        
        textoElemento.style.display = "none";
        textoElemento.parentNode.insertBefore(input, textoElemento);
        
        input.focus();
        input.select();
        
        function salvarEdicao() {
            const novoTexto = input.value.trim();
            if (novoTexto) {
                tarefa.texto = novoTexto;
                textoElemento.textContent = novoTexto;
            }
            input.remove();
            textoElemento.style.display = "inline";
        }
        
        input.addEventListener("blur", salvarEdicao);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                salvarEdicao();
            } else if (e.key === "Escape") {
                input.remove();
                textoElemento.style.display = "inline";
            }
        });
    }
    
    removerTarefa(id) {
        const elemento = this.lista.querySelector(`[data-id="${id}"]`);
        if (elemento) {
            elemento.style.opacity = "0";
            elemento.style.transform = "translateX(-100%)";
            elemento.style.transition = "all 0.3s ease";
            
            setTimeout(() => {
                elemento.remove();
            }, 300);
        }
        
        this.tarefas = this.tarefas.filter(t => t.id !== id);
    }
}

// Sistema de galeria de imagens dinâmica
class GaleriaImagens {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.imagens = [];
        this.init();
    }
    
    init() {
        this.criarControles();
        this.criarGaleria();
    }
    
    criarControles() {
        const controles = document.createElement("div");
        controles.className = "controles-galeria";
        
        const inputArquivo = document.createElement("input");
        inputArquivo.type = "file";
        inputArquivo.accept = "image/*";
        inputArquivo.multiple = true;
        inputArquivo.addEventListener("change", (e) => {
            this.adicionarImagens(e.target.files);
        });
        
        const botaoLimpar = document.createElement("button");
        botaoLimpar.textContent = "Limpar Galeria";
        botaoLimpar.addEventListener("click", () => {
            this.limparGaleria();
        });
        
        controles.appendChild(inputArquivo);
        controles.appendChild(botaoLimpar);
        this.container.appendChild(controles);
    }
    
    criarGaleria() {
        this.galeria = document.createElement("div");
        this.galeria.className = "galeria-grid";
        this.container.appendChild(this.galeria);
    }
    
    adicionarImagens(arquivos) {
        Array.from(arquivos).forEach(arquivo => {
            if (arquivo.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.criarItemImagem(e.target.result, arquivo.name);
                };
                reader.readAsDataURL(arquivo);
            }
        });
    }
    
    criarItemImagem(src, nome) {
        const item = document.createElement("div");
        item.className = "item-galeria";
        
        const img = document.createElement("img");
        img.src = src;
        img.alt = nome;
        img.loading = "lazy";
        
        const overlay = document.createElement("div");
        overlay.className = "overlay-imagem";
        
        const nome元素 = document.createElement("span");
        nome元素.textContent = nome;
        nome元素.className = "nome-imagem";
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "×";
        botaoRemover.className = "btn-remover-imagem";
        botaoRemover.addEventListener("click", (e) => {
            e.stopPropagation();
            this.removerImagem(item);
        });
        
        overlay.appendChild(nome元素);
        overlay.appendChild(botaoRemover);
        
        item.appendChild(img);
        item.appendChild(overlay);
        
        // Evento para visualização em tela cheia
        item.addEventListener("click", () => {
            this.visualizarImagemCompleta(src, nome);
        });
        
        this.galeria.appendChild(item);
        
        // Animação de entrada
        item.style.opacity = "0";
        item.style.transform = "scale(0.8)";
        setTimeout(() => {
            item.style.transition = "all 0.3s ease";
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
        }, 100);
    }
    
    removerImagem(item) {
        item.style.transform = "scale(0)";
        item.style.opacity = "0";
        setTimeout(() => {
            item.remove();
        }, 300);
    }
    
    visualizarImagemCompleta(src, nome) {
        const modal = document.createElement("div");
        modal.className = "modal-imagem";
        
        const img = document.createElement("img");
        img.src = src;
        img.alt = nome;
        
        const botaoFechar = document.createElement("button");
        botaoFechar.textContent = "×";
        botaoFechar.className = "btn-fechar-modal";
        botaoFechar.addEventListener("click", () => {
            modal.remove();
        });
        
        modal.appendChild(img);
        modal.appendChild(botaoFechar);
        
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        document.body.appendChild(modal);
    }
    
    limparGaleria() {
        const itens = this.galeria.querySelectorAll(".item-galeria");
        itens.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = "scale(0)";
                item.style.opacity = "0";
                setTimeout(() => {
                    item.remove();
                }, 300);
            }, index * 50);
        });
    }
}

// Construtor de formulários dinâmico
class ConstrutorFormulario {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.campos = [];
        this.init();
    }
    
    init() {
        this.criarControles();
        this.criarFormulario();
    }
    
    criarControles() {
        const controles = document.createElement("div");
        controles.className = "controles-formulario";
        
        const tiposCampo = [
            { value: "text", label: "Texto" },
            { value: "email", label: "Email" },
            { value: "number", label: "Número" },
            { value: "textarea", label: "Área de Texto" },
            { value: "select", label: "Lista Suspensa" },
            { value: "radio", label: "Botão Radio" },
            { value: "checkbox", label: "Checkbox" }
        ];
        
        const select = document.createElement("select");
        tiposCampo.forEach(tipo => {
            const option = document.createElement("option");
            option.value = tipo.value;
            option.textContent = tipo.label;
            select.appendChild(option);
        });
        
        const botaoAdicionar = document.createElement("button");
        botaoAdicionar.textContent = "Adicionar Campo";
        botaoAdicionar.addEventListener("click", () => {
            this.adicionarCampo(select.value);
        });
        
        controles.appendChild(select);
        controles.appendChild(botaoAdicionar);
        this.container.appendChild(controles);
    }
    
    criarFormulario() {
        this.formulario = document.createElement("form");
        this.formulario.className = "formulario-dinamico";
        this.container.appendChild(this.formulario);
    }
    
    adicionarCampo(tipo) {
        const campo = this.criarCampoElemento(tipo);
        this.formulario.appendChild(campo);
        this.campos.push({ tipo, elemento: campo });
    }
    
    criarCampoElemento(tipo) {
        const container = document.createElement("div");
        container.className = "campo-dinamico";
        
        const label = document.createElement("label");
        label.textContent = `Campo ${this.campos.length + 1}:`;
        
        let input;
        switch(tipo) {
            case "textarea":
                input = document.createElement("textarea");
                break;
            case "select":
                input = document.createElement("select");
                ["Opção 1", "Opção 2", "Opção 3"].forEach(opcao => {
                    const option = document.createElement("option");
                    option.textContent = opcao;
                    input.appendChild(option);
                });
                break;
            default:
                input = document.createElement("input");
                input.type = tipo;
                if (tipo === "radio" || tipo === "checkbox") {
                    input.name = `campo_${this.campos.length + 1}`;
                }
        }
        
        const botaoRemover = document.createElement("button");
        botaoRemover.type = "button";
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "btn-remover-campo";
        botaoRemover.addEventListener("click", () => {
            container.remove();
        });
        
        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(botaoRemover);
        
        return container;
    }
}

// Inicialização
document.addEventListener("DOMContentLoaded", function() {
    // Configurar botão para criar elemento básico
    const btnCriarElemento = document.getElementById("btnCriarElemento");
    if (btnCriarElemento) {
        btnCriarElemento.addEventListener("click", criarElementoBasico);
    }
    
    // Inicializar sistemas
    window.listaTarefas = new ListaTarefas("containerTarefas");
    window.galeriaImagens = new GaleriaImagens("containerGaleria");
    window.construtorFormulario = new ConstrutorFormulario("containerFormulario");
});
```

### 🎨 Arquivo: `aula24.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Elementos DOM</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .secao {
            margin: 30px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        
        /* Elementos básicos */
        #containerElementos {
            min-height: 100px;
            border: 2px dashed #ccc;
            padding: 20px;
            margin: 10px 0;
        }
        
        .elemento-dinamico {
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        /* Lista de tarefas */
        .formulario-tarefa {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .input-tarefa {
            flex: 1;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        
        .btn-adicionar {
            padding: 10px 20px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .lista-tarefas {
            list-style: none;
            padding: 0;
        }
        
        .item-tarefa {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            margin: 5px 0;
            background: #f8f9fa;
            border-radius: 4px;
            transition: all 0.3s ease;
        }
        
        .texto-tarefa {
            flex: 1;
            cursor: pointer;
        }
        
        .botoes-tarefa {
            display: flex;
            gap: 5px;
        }
        
        .btn-editar, .btn-remover {
            padding: 5px 10px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            font-size: 12px;
        }
        
        .btn-editar {
            background: #ffc107;
            color: black;
        }
        
        .btn-remover {
            background: #dc3545;
            color: white;
        }
        
        .input-edicao {
            padding: 5px;
            border: 1px solid #007bff;
            border-radius: 3px;
        }
        
        /* Galeria de imagens */
        .controles-galeria {
            margin-bottom: 20px;
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .galeria-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
        }
        
        .item-galeria {
            position: relative;
            cursor: pointer;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .item-galeria:hover {
            transform: scale(1.05);
        }
        
        .item-galeria img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .overlay-imagem {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .item-galeria:hover .overlay-imagem {
            opacity: 1;
        }
        
        .btn-remover-imagem {
            align-self: flex-end;
            background: #dc3545;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            cursor: pointer;
        }
        
        .modal-imagem {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        
        .modal-imagem img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        }
        
        .btn-fechar-modal {
            position: absolute;
            top: 20px;
            right: 20px;
            background: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 20px;
            cursor: pointer;
        }
        
        /* Construtor de formulário */
        .controles-formulario {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .formulario-dinamico {
            border: 1px solid #ddd;
            padding: 20px;
            border-radius: 4px;
            min-height: 100px;
        }
        
        .campo-dinamico {
            margin: 15px 0;
            padding: 10px;
            border: 1px solid #eee;
            border-radius: 4px;
            display: flex;
            gap: 10px;
            align-items: center;
        }
        
        .campo-dinamico label {
            min-width: 100px;
            font-weight: bold;
        }
        
        .campo-dinamico input,
        .campo-dinamico textarea,
        .campo-dinamico select {
            flex: 1;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        
        .btn-remover-campo {
            background: #dc3545;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 3px;
            cursor: pointer;
        }
        
        button {
            transition: all 0.2s ease;
        }
        
        button:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌟 Manipulação de Elementos DOM</h1>
        
        <div class="secao">
            <h2>📝 Criação Básica de Elementos</h2>
            <button id="btnCriarElemento">Criar Novo Elemento</button>
            <div id="containerElementos">
                <p>Clique no botão acima para adicionar elementos aqui...</p>
            </div>
        </div>
        
        <div class="secao">
            <h2>✅ Lista de Tarefas Dinâmica</h2>
            <div id="containerTarefas"></div>
        </div>
        
        <div class="secao">
            <h2>🖼️ Galeria de Imagens</h2>
            <div id="containerGaleria"></div>
        </div>
        
        <div class="secao">
            <h2>📋 Construtor de Formulário</h2>
            <div id="containerFormulario"></div>
        </div>
    </div>
    
    <script src="aula24.js"></script>
</body>
</html>
```

## 💡 Casos de Uso Práticos

### ✅ Use Manipulação de DOM quando:
- Criar interfaces dinâmicas e interativas
- Implementar SPAs (Single Page Applications)
- Construir componentes reutilizáveis
- Gerenciar conteúdo que muda frequentemente
- Criar ferramentas de edição visual

### ✅ Exemplos Práticos
```javascript
// Sistema de comentários dinâmico
class SistemaComentarios {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.comentarios = [];
        this.init();
    }
    
    criarComentario(autor, texto) {
        const comentario = document.createElement("div");
        comentario.className = "comentario";
        
        const avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.textContent = autor.charAt(0).toUpperCase();
        
        const conteudo = document.createElement("div");
        conteudo.className = "conteudo-comentario";
        
        const cabecalho = document.createElement("div");
        cabecalho.innerHTML = `<strong>${autor}</strong> <span class="timestamp">${new Date().toLocaleString()}</span>`;
        
        const textoComentario = document.createElement("p");
        textoComentario.textContent = texto;
        
        conteudo.appendChild(cabecalho);
        conteudo.appendChild(textoComentario);
        
        comentario.appendChild(avatar);
        comentario.appendChild(conteudo);
        
        return comentario;
    }
}
```

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - DOM Manipulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [MDN - Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

### 🎯 Próximas Aulas
- **Aula 25**: Relação dos Elementos DOM - Navegação entre elementos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi como criar elementos dinamicamente
- [ ] Sei adicionar e remover elementos do DOM
- [ ] Consigo manipular propriedades e atributos
- [ ] Posso criar interfaces complexas dinamicamente
- [ ] Entendo performance e boas práticas
- [ ] Consigo implementar componentes reutilizáveis

**🎉 Parabéns! Você dominou Elementos DOM!**
