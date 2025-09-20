# Aula 30 - Prática com Método Toggle

Esta aula demonstra a implementação de uma aplicação interativa para gerenciar uma lista de cursos, utilizando o método `toggle()` para alternar classes CSS e criar uma interface dinâmica.

## O que o código faz

A aplicação permite:
- **Visualizar** uma lista de cursos pré-definidos
- **Selecionar** cursos clicando diretamente sobre eles
- **Adicionar** novos cursos antes ou depois do curso selecionado
- **Remover** o curso atualmente selecionado
- **Identificar** qual curso está selecionado

## Como funciona

### 1. Estrutura HTML (`aula30.html`)
- **Container principal**: Duas caixas lado a lado
  - **Caixa de funcionalidades**: Contém controles para gerenciar os cursos
  - **Caixa de cursos**: Onde os cursos são exibidos dinamicamente

### 2. Estilização CSS (`estilos30.css`)
- **`.curso`**: Estilo padrão dos elementos de curso
- **`.selecionado`**: Classe especial que muda a aparência do curso selecionado
  - Fundo vermelho (`#800`)
  - Texto claro (`#fcc`)
  - Borda vermelha (`#f00`)

### 3. Lógica JavaScript (`aula30.js`)

#### Principais funções:

**`tirarSelecao()`**
```javascript
const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};
```
- Remove a classe `selecionado` de todos os elementos
- Garante que apenas um curso fique selecionado por vez

**`criarNovoCurso(curso)`**
```javascript
const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click", (evt) => {
    tirarSelecao();
    evt.target.classList.toggle("selecionado");
  });
  return novoElemento;
};
```
- Cria um novo elemento HTML para o curso
- Adiciona evento de clique que usa `toggle()` para alternar a seleção
- **Método Toggle**: `classList.toggle("selecionado")` adiciona a classe se não existir, ou remove se já existir

**`cursoSelecionado()`**
```javascript
const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];
};
```
- Retorna o primeiro (e único) curso com a classe `selecionado`

#### Eventos dos botões:

1. **"Curso selecionado"**: Exibe o nome do curso atualmente selecionado
2. **"Remover Selecionado"**: Remove o curso selecionado do DOM
3. **"Adicionar Antes"**: Insere um novo curso antes do selecionado
4. **"Adicionar Depois"**: Insere um novo curso depois do selecionado

## Conceitos importantes demonstrados

### Método `toggle()`
- **Função**: Alterna a presença de uma classe CSS
- **Uso**: `elemento.classList.toggle("nomeDaClasse")`
- **Comportamento**: 
  - Se a classe existe → remove
  - Se a classe não existe → adiciona

### Manipulação do DOM
- **`createElement()`**: Criação de novos elementos
- **`addEventListener()`**: Adição de eventos
- **`appendChild()`**: Inserção de elementos
- **`insertBefore()`**: Inserção posicionada
- **`remove()`**: Remoção de elementos

### Spread Operator (`...`)
```javascript
const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
```
- Converte NodeList em Array
- Permite usar métodos de array como `map()`

## Estado visual da seleção

Quando um curso é clicado:
1. A função `tirarSelecao()` remove qualquer seleção anterior
2. O `toggle("selecionado")` adiciona a classe ao elemento clicado
3. O CSS `.selecionado` é aplicado, mudando a aparência visual
4. O curso fica visualmente destacado com cores diferentes

## Tratamento de erros

O código inclui blocos `try-catch` para:
- Verificar se existe um curso selecionado antes de realizar operações
- Exibir alertas informativos quando necessário
- Validar se o campo de nome do curso não está vazio

Esta implementação demonstra como criar uma interface interativa e responsiva usando JavaScript vanilla com foco na experiência do usuário.