# 🌟 Aula 23: Eventos - stopPropagation

## 🎯 Objetivo
Aprender a controlar a propagação de eventos no DOM usando o método `stopPropagation()`.

## 📚 Conceitos Abordados

### 🛑 Event Propagation (Propagação de Eventos)
- **Event Bubbling**: Os eventos "sobem" na hierarquia do DOM (filho → pai → avô)
- **stopPropagation()**: Método que interrompe a propagação do evento
- **Controle de fluxo**: Decidir quando eventos devem ou não propagar

### 🔄 Como Funciona o Event Bubbling
```
Estrutura HTML:
<div id="caixa1">           ← Elemento PAI
  <div class="curso">       ← Elemento FILHO
    Conteúdo
  </div>
</div>

Sem stopPropagation():
Click no curso → Executa evento do curso → Executa evento da caixa1

Com stopPropagation():
Click no curso → Executa evento do curso → PARA AQUI
```

## 🚀 Implementação

### 📝 Arquivo: `aula23.js`
```javascript
// Seleção de elementos
const caixa1 = document.querySelector("#caixa1");
const cursos = [...document.querySelectorAll(".curso")];

// Evento no pai
caixa1.addEventListener("click", () => {
  console.log("clicou na caixa1");
});

// Eventos nos filhos com stopPropagation
cursos.map((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede propagação
    console.log("clicou no curso");
  });
});
```

### 🎨 Arquivo: `aula23.html`
```html
<div id="caixa1">
  <div class="curso">HTML</div>
  <div class="curso">CSS</div>
  <div class="curso">JavaScript</div>
</div>
```

## 🧪 Experimento

### 📊 Teste 1: Com stopPropagation()
1. Clique em qualquer curso
2. **Resultado**: Apenas "clicou no curso" no console
3. **Motivo**: stopPropagation() impediu que o evento subisse

### 📊 Teste 2: Sem stopPropagation()
1. Comente a linha `event.stopPropagation()`
2. Clique em qualquer curso
3. **Resultado**: "clicou no curso" E "clicou na caixa1" no console
4. **Motivo**: Evento propagou do filho para o pai

## 💡 Casos de Uso Práticos

### ✅ Quando Usar stopPropagation()
- **Botões dentro de cards clicáveis**: Evitar que clique no botão abra o card
- **Menus dropdown**: Evitar que clique no item feche o menu
- **Modais**: Evitar que clique no conteúdo feche o modal
- **Elementos aninhados**: Quando ações devem ser independentes

### ❌ Quando NÃO Usar
- **Navegação natural**: Links dentro de containers clicáveis
- **Acessibilidade**: Pode interferir com leitores de tela
- **Eventos de sistema**: Como focus, blur, etc.

## 🔧 Métodos Relacionados

| Método | Descrição |
|--------|-----------|
| `stopPropagation()` | Para a propagação do evento |
| `stopImmediatePropagation()` | Para propagação e outros listeners |
| `preventDefault()` | Previne ação padrão do elemento |
| `stopPropagation() + preventDefault()` | Controle total do evento |

## 📖 Recursos Adicionais

### 🔗 Leitura Complementar
- [MDN - Event.stopPropagation()](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
- [MDN - Event Bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling)

### 🎯 Próximas Aulas
- **Aula 24**: Event Delegation (Delegação de Eventos)
- **Aula 25**: Custom Events (Eventos Customizados)
- **Aula 26**: Otimização de Performance em Eventos

---

## 📋 Checklist de Aprendizado

- [ ] Entendi o conceito de event bubbling
- [ ] Sei quando usar stopPropagation()
- [ ] Testei o comportamento com e sem stopPropagation()
- [ ] Consigo aplicar em casos práticos
- [ ] Entendo a diferença entre stopPropagation() e preventDefault()

**🎉 Parabéns! Você dominou o controle de propagação de eventos!**
