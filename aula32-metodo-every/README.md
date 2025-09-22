# Aula 32 - Método Every

Esta aula demonstra o uso do método `every()` em JavaScript para verificar se todos os elementos de um array atendem a uma condição específica, criando uma aplicação de validação de critérios.

## O que é o método `every()`

O método `every()` é uma função nativa de arrays em JavaScript que:
- **Testa** se todos os elementos de um array atendem a uma condição
- **Retorna** `true` se todos os elementos passarem no teste, `false` caso contrário
- **Para a execução** no primeiro elemento que falhar na condição
- **Executa** uma função de callback para cada elemento até encontrar um que retorne `false`

### Sintaxe básica:
```javascript
array.every(callback(elemento, índice, array))
```

### Características importantes:
- ✅ Retorna **`true`** apenas se TODOS os elementos atenderem à condição
- ✅ Retorna **`false`** no primeiro elemento que falhar
- ✅ Para a execução assim que encontra um elemento que não atende
- ✅ Não modifica o array original
- ✅ Retorna `true` para arrays vazios (vacuously true)

## Como o código funciona

### 1. Estrutura HTML (`aula32.html`)
A aplicação possui três seções principais:
- **Caixa do Array**: Exibe o array com idades para verificação
- **Caixa de Verificação**: Botão para executar a validação
- **Caixa de Resultado**: Mostra o resultado da verificação

### 2. Estilização CSS (`estilos32.css`)
- Design moderno similar à aula31 com gradientes e efeitos
- Cores diferenciadas para cada seção (verde, azul, vermelho)
- Layout responsivo e acessível

### 3. Lógica JavaScript (`aula32.js`)

#### Array de dados (idades):
```javascript
const elementos_array = [21, 25, 19, 20, 18, 17, 22];
```
**Contexto**: Array representa idades de pessoas que precisam ser verificadas

#### Implementação do `every()`:
```javascript
btnPesquisar.addEventListener("click", (evt) => {
  const ret = elementos_array.every((e, i) => {
    if (e < 18) {
      resultado.innerHTML = "O array da posição " + '<b>' + i + '</b>' + " não está no conforme";
    }
    return e >= 18;
  });
  if (ret) {
    resultado.innerHTML = "Ok!";
  }
  console.log(ret);
});
```

## Como o método `every()` funciona neste exemplo

### Condição de validação:
**Verificar se todas as idades são ≥ 18 anos (maior de idade)**

### Parâmetros da função callback:
- **`e`** (elemento): A idade atual sendo verificada
- **`i`** (índice): A posição da idade no array
- **`array`** (não usado): Referência ao array original

### Fluxo de execução:
1. **Clique no botão "Verificar"**: Inicia a validação
2. **Execução do every()**: 
   - Para cada idade no array
   - Verifica se `idade >= 18`
   - Se encontrar idade < 18, mostra a posição e para
   - Se todas forem ≥ 18, continua até o final
3. **Resultado final**:
   - `true`: Todas as idades são válidas → "Ok!"
   - `false`: Pelo menos uma idade é inválida → mostra posição

### Exemplo prático:

**Array atual**: `[21, 25, 19, 20, 18, 17, 22]`

**Execução do `every()`**:
- Verifica 21 ≥ 18 → ✅ true
- Verifica 25 ≥ 18 → ✅ true  
- Verifica 19 ≥ 18 → ✅ true
- Verifica 20 ≥ 18 → ✅ true
- Verifica 18 ≥ 18 → ✅ true
- Verifica 17 ≥ 18 → ❌ **false** → Para aqui!
- **Resultado**: `false` → "O array da posição **5** não está no conforme"

**Se fosse**: `[21, 25, 19, 20, 18, 19, 22]`
- Todas as idades ≥ 18 → **Resultado**: `true` → "Ok!"

## Diferenças entre métodos de validação

| Método | Retorno | Comportamento |
|--------|---------|---------------|
| `every()` | `true` se **todos** atenderem | Para no primeiro `false` |
| `some()` | `true` se **pelo menos um** atender | Para no primeiro `true` |
| `filter()` | Array com elementos que atendem | Verifica todo o array |
| `find()` | Primeiro elemento que atende | Para na primeira ocorrência |

## Casos de uso do `every()`

### 1. Validação de formulários:
```javascript
const campos = ['nome', 'email', 'senha'];
const todosPreenchidos = campos.every(campo => 
  document.getElementById(campo).value.trim() !== ''
);
```

### 2. Verificação de permissões:
```javascript
const permissoes = ['read', 'write', 'delete'];
const usuario = {permissoes: ['read', 'write']};
const temTodasPermissoes = permissoes.every(p => 
  usuario.permissoes.includes(p)
);
```

### 3. Validação de números:
```javascript
const notas = [8.5, 9.0, 7.5, 8.0];
const todosAprovados = notas.every(nota => nota >= 7.0);
```

### 4. Verificação de objetos:
```javascript
const produtos = [
  {nome: 'Produto A', preco: 100, estoque: 5},
  {nome: 'Produto B', preco: 200, estoque: 0},
];
const todosDisponiveis = produtos.every(p => p.estoque > 0);
```

## Problema no código atual

### Bug identificado:
```javascript
if (e < 18) {
  resultado.innerHTML = "O array da posição " + '<b>' + i + '<b/>' + " não está no conforme";
}
```

**Problema**: Tag HTML malformada `<b/>` deveria ser `</b>`

### Versão corrigida:
```javascript
if (e < 18) {
  resultado.innerHTML = "O array da posição " + '<b>' + i + '</b>' + " não está conforme";
}
```

## Vantagens do método `every()`

- **Performance**: Para na primeira falha encontrada
- **Clareza**: Intenção explícita de validar todos os elementos
- **Funcional**: Abordagem declarativa vs imperativa
- **Reutilizável**: Facilita criação de funções de validação

## Cenários práticos de uso

### 1. **Validação de idade para eventos**:
```javascript
const idades = [19, 21, 23, 18, 20];
const podeEntrar = idades.every(idade => idade >= 18);
```

### 2. **Verificação de status de pedidos**:
```javascript
const pedidos = ['entregue', 'entregue', 'pendente'];
const todosEntregues = pedidos.every(status => status === 'entregue');
```

### 3. **Validação de configurações**:
```javascript
const configs = {ssl: true, backup: true, monitoring: false};
const sistemaSeguro = Object.values(configs).every(config => config === true);
```

## Melhorias sugeridas

1. **Correção da tag HTML** malformada
2. **Validação mais específica** com mensagens detalhadas
3. **Feedback visual** diferenciado para sucesso/erro
4. **Botão de reset** para nova verificação
5. **Exibição do elemento** que falhou na validação

Este exemplo demonstra como usar o método `every()` para criar validações robustas e eficientes, especialmente úteis em cenários onde todos os elementos devem atender a critérios específicos.