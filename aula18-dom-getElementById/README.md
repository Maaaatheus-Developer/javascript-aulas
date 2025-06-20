# 🌟 Aula 18: DOM getElementById

## 🎯 Objetivo
Dominar o método `getElementById()` para selecionar elementos HTML específicos no DOM e manipulá-los com JavaScript, estabelecendo a base para interação dinâmica com páginas web.

## 📚 Conceitos Fundamentais

### 🔧 getElementById()
Método que retorna uma referência ao elemento HTML que possui o ID especificado. Retorna `null` se nenhum elemento for encontrado.

### 📊 Características do getElementById
| Aspecto | Descrição | Exemplo |
|---------|-----------|---------|
| Seletor | ID único do elemento | `"meuElemento"` |
| Retorno | Elemento ou null | `HTMLElement` ou `null` |
| Performance | Muito rápida | Busca otimizada por ID |
| Unicidade | Apenas um elemento | IDs devem ser únicos |

## 🚀 Implementação

### 📝 Arquivo: `aula18.js`
```javascript
// Selecionando elementos por ID
const titulo = document.getElementById("titulo");
const botao = document.getElementById("meuBotao");
const resultado = document.getElementById("resultado");

// Verificando se elementos existem
if (titulo) {
    console.log("Título encontrado:", titulo);
    titulo.textContent = "Novo título definido via JavaScript";
} else {
    console.log("Elemento com ID 'titulo' não encontrado");
}

// Modificando conteúdo
function alterarConteudo() {
    const paragrafo = document.getElementById("paragrafo1");
    if (paragrafo) {
        paragrafo.innerHTML = "<strong>Conteúdo alterado!</strong>";
        paragrafo.style.color = "blue";
        paragrafo.style.fontSize = "18px";
    }
}

// Modificando atributos
function alterarImagem() {
    const imagem = document.getElementById("minhaImagem");
    if (imagem) {
        imagem.src = "nova-imagem.jpg";
        imagem.alt = "Nova descrição da imagem";
        imagem.title = "Imagem alterada via JavaScript";
    }
}

// Adicionando event listeners
if (botao) {
    botao.addEventListener("click", function() {
        const input = document.getElementById("campoTexto");
        if (input && resultado) {
            resultado.textContent = `Você digitou: ${input.value}`;
        }
    });
}

// Trabalhando com formulários
function validarFormulario() {
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const erro = document.getElementById("mensagemErro");
    
    if (!nome.value.trim()) {
        erro.textContent = "Nome é obrigatório";
        nome.focus();
        return false;
    }
    
    if (!email.value.includes("@")) {
        erro.textContent = "Email inválido";
        email.focus();
        return false;
    }
    
    erro.textContent = "";
    return true;
}

// Manipulação dinâmica de classes
function alternarTema() {
    const container = document.getElementById("container");
    if (container) {
        container.classList.toggle("tema-escuro");
    }
}
```

### 🎨 Arquivo: `aula18.html`
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM getElementById</title>
    <style>
        .tema-escuro {
            background-color: #333;
            color: white;
        }
        .highlight {
            background-color: yellow;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div id="container">
        <h1 id="titulo">Título Original</h1>
        
        <p id="paragrafo1">Este é o parágrafo original.</p>
        
        <img id="minhaImagem" src="imagem-original.jpg" alt="Imagem original">
        
        <form id="meuFormulario">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome">
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
            
            <button type="button" onclick="validarFormulario()">Validar</button>
        </form>
        
        <div id="mensagemErro" style="color: red;"></div>
        
        <input type="text" id="campoTexto" placeholder="Digite algo...">
        <button id="meuBotao">Processar Texto</button>
        <div id="resultado"></div>
        
        <button onclick="alterarConteudo()">Alterar Conteúdo</button>
        <button onclick="alterarImagem()">Alterar Imagem</button>
        <button onclick="alternarTema()">Alternar Tema</button>
    </div>
    
    <script src="aula18.js"></script>
</body>
</html>
```

## 🧪 Experimentação

### 🔬 Teste 1: Contador Dinâmico
```javascript
let contador = 0;

function criarContador() {
    const display = document.getElementById("contadorDisplay");
    const btnIncrementar = document.getElementById("btnIncrementar");
    const btnDecrementar = document.getElementById("btnDecrementar");
    const btnReset = document.getElementById("btnReset");
    
    function atualizarDisplay() {
        if (display) {
            display.textContent = contador;
            
            // Mudança de cor baseada no valor
            if (contador > 0) display.style.color = "green";
            else if (contador < 0) display.style.color = "red";
            else display.style.color = "black";
        }
    }
    
    if (btnIncrementar) {
        btnIncrementar.onclick = () => {
            contador++;
            atualizarDisplay();
        };
    }
    
    if (btnDecrementar) {
        btnDecrementar.onclick = () => {
            contador--;
            atualizarDisplay();
        };
    }
    
    if (btnReset) {
        btnReset.onclick = () => {
            contador = 0;
            atualizarDisplay();
        };
    }
    
    atualizarDisplay(); // Inicializar
}

// Chamar quando DOM estiver carregado
document.addEventListener("DOMContentLoaded", criarContador);
```

### 🔬 Teste 2: Lista de Tarefas Simples
```javascript
function gerenciadorTarefas() {
    const inputTarefa = document.getElementById("inputTarefa");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const listaTarefas = document.getElementById("listaTarefas");
    
    function adicionarTarefa() {
        if (inputTarefa && inputTarefa.value.trim() && listaTarefas) {
            const li = document.createElement("li");
            li.textContent = inputTarefa.value.trim();
            
            // Botão para remover tarefa
            const btnRemover = document.createElement("button");
            btnRemover.textContent = "Remover";
            btnRemover.onclick = () => li.remove();
            
            li.appendChild(btnRemover);
            listaTarefas.appendChild(li);
            
            inputTarefa.value = "";
            inputTarefa.focus();
        }
    }
    
    if (btnAdicionar) {
        btnAdicionar.onclick = adicionarTarefa;
    }
    
    if (inputTarefa) {
        inputTarefa.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                adicionarTarefa();
            }
        });
    }
}
```

### 🔬 Teste 3: Sistema de Tabs
```javascript
function sistemaAbas() {
    const abas = ["tab1", "tab2", "tab3"];
    
    abas.forEach((tabId, index) => {
        const btnTab = document.getElementById(`btn${tabId}`);
        const conteudoTab = document.getElementById(`conteudo${tabId}`);
        
        if (btnTab) {
            btnTab.onclick = () => mostrarAba(index);
        }
    });
    
    function mostrarAba(indiceAtivo) {
        abas.forEach((tabId, index) => {
            const btn = document.getElementById(`btn${tabId}`);
            const conteudo = document.getElementById(`conteudo${tabId}`);
            
            if (btn && conteudo) {
                if (index === indiceAtivo) {
                    btn.classList.add("ativa");
                    conteudo.style.display = "block";
                } else {
                    btn.classList.remove("ativa");
                    conteudo.style.display = "none";
                }
            }
        });
    }
    
    // Mostrar primeira aba por padrão
    mostrarAba(0);
}
```

## 💡 Casos de Uso Práticos

### ✅ Use getElementById quando:
- Precisar selecionar um elemento específico e único
- O elemento tiver um ID definido
- Quiser máxima performance na seleção
- Trabalhar com formulários e campos específicos
- Implementar funcionalidades específicas para elementos únicos

### ✅ Exemplos Práticos
```javascript
// Sistema de notificações
function mostrarNotificacao(mensagem, tipo = "info") {
    const notificacao = document.getElementById("notificacao");
    if (notificacao) {
        notificacao.textContent = mensagem;
        notificacao.className = `notificacao ${tipo}`;
        notificacao.style.display = "block";
        
        setTimeout(() => {
            notificacao.style.display = "none";
        }, 3000);
    }
}

// Player de música simples
const player = {
    audio: document.getElementById("audioPlayer"),
    btnPlay: document.getElementById("btnPlay"),
    btnPause: document.getElementById("btnPause"),
    progresso: document.getElementById("progressoAudio"),
    
    init() {
        if (this.btnPlay) {
            this.btnPlay.onclick = () => this.play();
        }
        if (this.btnPause) {
            this.btnPause.onclick = () => this.pause();
        }
        if (this.audio && this.progresso) {
            this.audio.ontimeupdate = () => this.atualizarProgresso();
        }
    },
    
    play() {
        if (this.audio) this.audio.play();
    },
    
    pause() {
        if (this.audio) this.audio.pause();
    },
    
    atualizarProgresso() {
        if (this.audio && this.progresso) {
            const porcentagem = (this.audio.currentTime / this.audio.duration) * 100;
            this.progresso.style.width = porcentagem + "%";
        }
    }
};
```

## ⚠️ Pegadinhas Comuns

### 🐛 Elemento Não Encontrado
```javascript
// ❌ Não verifica se elemento existe
const elemento = document.getElementById("naoExiste");
elemento.textContent = "Texto"; // TypeError!

// ✅ Sempre verificar
const elemento2 = document.getElementById("naoExiste");
if (elemento2) {
    elemento2.textContent = "Texto";
} else {
    console.log("Elemento não encontrado");
}
```

### 🐛 Script Executado Antes do DOM
```javascript
// ❌ Script no <head> sem aguardar DOM
const botao = document.getElementById("meuBotao"); // null!

// ✅ Aguardar DOM carregar
document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("meuBotao"); // Funciona!
});

// ✅ Ou colocar script antes de </body>
```

### 🐛 IDs Duplicados
```html
<!-- ❌ IDs duplicados -->
<div id="item">Item 1</div>
<div id="item">Item 2</div>

<script>
// Sempre retorna o primeiro elemento
const item = document.getElementById("item"); // Pega apenas "Item 1"
</script>
```

## 🔧 Propriedades e Métodos Úteis

| Propriedade/Método | Descrição | Exemplo |
|--------------------|-----------|---------|
| `textContent` | Texto sem HTML | `el.textContent = "Texto"` |
| `innerHTML` | Conteúdo com HTML | `el.innerHTML = "<b>Bold</b>"` |
| `style` | Estilos CSS | `el.style.color = "red"` |
| `classList` | Manipular classes CSS | `el.classList.add("ativa")` |
| `value` | Valor de inputs | `input.value` |
| `addEventListener` | Adicionar eventos | `el.addEventListener("click", fn)` |

## 📖 Recursos Adicionais

### 🔗 Links Úteis
- [MDN - getElementById](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)
- [MDN - DOM Introduction](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)

### 🎯 Próximas Aulas
- **Aula 19**: DOM getElementsByClassName - Selecionando por classe

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito do DOM e getElementById
- [ ] Sei selecionar elementos únicos pelo ID
- [ ] Consigo verificar se elemento existe antes de usar
- [ ] Posso modificar conteúdo, estilos e atributos
- [ ] Entendo quando usar getElementById vs outros seletores
- [ ] Consigo criar interações dinâmicas básicas

**🎉 Parabéns! Você dominou getElementById!**
