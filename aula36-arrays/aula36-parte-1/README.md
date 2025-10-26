# Aula 36 - Arrays em JavaScript

## O que são Arrays?

Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Em JavaScript, arrays são objetos especiais que podem conter elementos de diferentes tipos, incluindo outros arrays (arrays multidimensionais).

## Conceitos Demonstrados

### 1. Criação de Arrays

```javascript
let cores = ["Azul", "Verde", "Amarelo", ["claro", "escuro", "medio"]];
let cursos = ["HTML5", "CSS3", "JavaScript", cores];
```

- Arrays podem conter **strings, números, objetos, outros arrays**
- Índices começam em **0** (zero-indexado)
- Arrays podem ser **multidimensionais** (arrays dentro de arrays)

### 2. Arrays Multidimensionais

No código da aula, temos uma estrutura aninhada:

```javascript
// Estrutura visual do array 'cursos':
cursos = [
    0: "HTML5",
    1: "CSS3", 
    2: "JavaScript",
    3: cores = [
        0: "Azul",
        1: "Verde", 
        2: "Amarelo",
        3: ["claro", "escuro", "medio"]
    ]
]
```

### 3. Acessando Elementos

#### Acesso Simples:
```javascript
console.log(cursos[1]); // "CSS3"
```

#### Acesso em Arrays Multidimensionais:
```javascript
console.log(cursos[3][3][2]); // "medio"
```

**Explicação do acesso `cursos[3][3][2]`:**
- `cursos[3]` → Acessa o array `cores`
- `[3]` → Acessa o sub-array `["claro", "escuro", "medio"]`
- `[2]` → Acessa o elemento "medio"

## Métodos de Arrays Comentados no Código

### 1. Modificação de Elementos
```javascript
// cursos[0] = 2002; // Substitui "HTML5" por 2002
```

### 2. Adicionar Elementos

#### `push()` - Adiciona no final
```javascript
// cursos.push("C++"); 
// Resultado: ["HTML5", "CSS3", "JavaScript", cores, "C++"]
```

#### `unshift()` - Adiciona no início
```javascript
// cursos.unshift("Python");
// Resultado: ["Python", "HTML5", "CSS3", "JavaScript", cores]
```

### 3. Remover Elementos

#### `shift()` - Remove do início
```javascript
// cursos.shift(); 
// Remove o primeiro elemento do array
```

#### `pop()` - Remove do final (não usado no código)
```javascript
// cursos.pop(); 
// Remove o último elemento do array
```

## Método `map()` - Manipulação do DOM

```javascript
cursos.map((el) => {
  let p = document.createElement("p");
  p.innerHTML = el;
  caixa.appendChild(p);
});
```

### O que este código faz:

1. **Itera** por cada elemento do array `cursos`
2. **Cria** um elemento `<p>` para cada item
3. **Define** o conteúdo HTML como o valor do elemento
4. **Adiciona** o parágrafo ao elemento com ID "caixa"

### Resultado no HTML:
```html
<div id="caixa">
    <p>HTML5</p>
    <p>CSS3</p>
    <p>JavaScript</p>
    <p>Azul,Verde,Amarelo,claro,escuro,medio</p>
</div>
```

⚠️ **Nota:** O último `<p>` mostra o array `cores` como string concatenada.

## Estrutura Visual dos Arrays

### Array Principal (`cursos`):
```
cursos[0] = "HTML5"
cursos[1] = "CSS3"  
cursos[2] = "JavaScript"
cursos[3] = cores (array aninhado)
```

### Array Aninhado (`cores`):
```
cores[0] = "Azul"
cores[1] = "Verde"
cores[2] = "Amarelo" 
cores[3] = ["claro", "escuro", "medio"] (sub-array)
```

### Sub-array de Tonalidades:
```
cores[3][0] = "claro"
cores[3][1] = "escuro"
cores[3][2] = "medio"
```

## Principais Métodos de Arrays

### Modificação
| Método | Descrição | Exemplo |
|--------|-----------|---------|
| `push()` | Adiciona no final | `arr.push("novo")` |
| `unshift()` | Adiciona no início | `arr.unshift("primeiro")` |
| `pop()` | Remove do final | `arr.pop()` |
| `shift()` | Remove do início | `arr.shift()` |
| `splice()` | Remove/adiciona em posição específica | `arr.splice(1, 2)` |

### Iteração
| Método | Descrição | Retorno |
|--------|-----------|---------|
| `map()` | Transforma cada elemento | Novo array |
| `forEach()` | Executa função para cada elemento | undefined |
| `filter()` | Filtra elementos | Novo array |
| `find()` | Encontra primeiro elemento | Elemento ou undefined |

### Consulta
| Método | Descrição | Retorno |
|--------|-----------|---------|
| `indexOf()` | Encontra índice | Número ou -1 |
| `includes()` | Verifica se contém | Boolean |
| `length` | Quantidade de elementos | Número |

## Exemplos Práticos

### 1. Navegando em Arrays Multidimensionais
```javascript
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]); // 1
console.log(matriz[1][2]); // 6
console.log(matriz[2][1]); // 8
```

### 2. Adicionando e Removendo Elementos
```javascript
let frutas = ["maçã", "banana"];

frutas.push("laranja");        // ["maçã", "banana", "laranja"]
frutas.unshift("uva");         // ["uva", "maçã", "banana", "laranja"]
frutas.pop();                  // ["uva", "maçã", "banana"]
frutas.shift();                // ["maçã", "banana"]
```

### 3. Criando Elementos HTML com Arrays
```javascript
const tecnologias = ["HTML", "CSS", "JavaScript"];
const container = document.getElementById("container");

tecnologias.forEach(tech => {
    const div = document.createElement("div");
    div.textContent = tech;
    div.className = "tecnologia";
    container.appendChild(div);
});
```

## Interface HTML

O exemplo inclui:
- **Div container**: Elemento com ID "caixa" onde os elementos são inseridos
- **Estilização CSS**: Arquivo `estilos36.css` para formatação
- **Renderização dinâmica**: Elementos `<p>` criados via JavaScript

## Vantagens dos Arrays

- ✅ **Flexibilidade**: Podem conter qualquer tipo de dado
- ✅ **Dinamismo**: Tamanho pode ser alterado durante execução
- ✅ **Métodos poderosos**: Rica biblioteca de funções nativas
- ✅ **Indexação**: Acesso direto por índice O(1)
- ✅ **Iteração**: Fácil percorrimento com loops e métodos

## Cuidados Importantes

- ⚠️ **Índices**: Sempre começam em 0, não em 1
- ⚠️ **Tipos mistos**: Evite misturar tipos desnecessariamente
- ⚠️ **Mutabilidade**: Métodos como `push()` modificam o array original
- ⚠️ **Arrays multidimensionai
s**: Cuidado com a profundidade de acesso
- ⚠️ **Performance**: Para arrays muito grandes, considere estruturas especializadas

## Casos de Uso Comuns

- 🎯 **Listas de dados**: Produtos, usuários, configurações
- 🎯 **Manipulação DOM**: Criar múltiplos elementos
- 🎯 **Processamento de dados**: Filtrar, transformar, reduzir
- 🎯 **Matrizes**: Jogos, gráficos, cálculos matemáticos
- 🎯 **Histórico**: Undo/redo, navegação

---

*Este exemplo faz parte do curso de JavaScript Básico - Aula 36*