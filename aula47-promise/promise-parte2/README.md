# 🔄 Promise - Parte 2: Promises com Funções e Eventos

## 📚 Evolução do Conceito

Esta parte 2 avança o conceito de Promises mostrando como:
- Encapsular promises em **funções**
- Usar promises com **eventos de clique**
- Retornar promises de funções
- Controlar quando a promise é executada

## 📋 O que este código faz?

Este exemplo demonstra uma Promise mais avançada que:

1. **Encapsula a Promise em uma função** (`promessa()`)
2. **Executa apenas quando o botão é clicado**
3. **Retorna a Promise** para ser usada depois
4. **Atualiza a interface** dentro da própria promise

### 🔍 Fluxo do Código

```
1. Página carrega → "Esperando..."
2. Usuário clica no botão → "Processando..."
3. Função promessa() é chamada
4. Promise executa por 3 segundos
5. Promise resolve → "Deu tudo certo!"
6. Aplica classe CSS "ok" (verde)
```

## 🎯 Principais Diferenças da Parte 1

| Parte 1 | Parte 2 |
|---------|---------|
| Promise executa automaticamente | Promise executa só quando clica |
| Promise global | Promise dentro de função |
| `.then()` e `.catch()` separados | Lógica dentro da própria promise |
| Texto inicial: "Processando..." | Texto inicial: "Esperando..." |

## 📝 Estrutura de Promise em Função

```javascript
const promessa = () => {
  let promise = new Promise((resolve, reject) => {
    // Lógica assíncrona aqui
    setTimeout(() => {
      if (condicao) {
        resolve("Sucesso!");
        // Atualiza interface aqui mesmo
      } else {
        reject("Erro!");
        // Trata erro aqui mesmo
      }
    }, tempo);
  });
  return promise; // Retorna a promise
};
```

## 🎮 Controle por Eventos

```javascript
botao.addEventListener("click", () => {
  const minhaPromise = promessa(); // Chama a função
  // Pode usar .then() e .catch() se necessário
});
```

## 🔧 Padrões de Uso

### ✅ Boas Práticas Demonstradas

1. **Encapsular em funções**: Reutilização de código
2. **Controle de execução**: Promise só roda quando necessário
3. **Feedback visual**: Usuário sabe o que está acontecendo
4. **Separação de responsabilidades**: HTML, CSS e JS organizados

### 🎨 Estados Visuais

- **Esperando**: Aguardando ação do usuário
- **Processando**: Promise em execução
- **Sucesso**: Resultado positivo (classe `.ok`)
- **Erro**: Resultado negativo (classe `.erro`)

## 💡 Quando Usar Este Padrão?

- **Requisições HTTP**: Buscar dados de APIs
- **Upload de arquivos**: Envio de documentos
- **Validações assíncronas**: Verificar se email já existe
- **Operações custosas**: Cálculos complexos que demoram

## 🔄 Comparação com Callbacks

**Antes (Callbacks):**
```javascript
function fazerAlgo(callback) {
  setTimeout(() => {
    callback("Resultado");
  }, 1000);
}

fazerAlgo((resultado) => {
  console.log(resultado);
});
```

**Agora (Promises):**
```javascript
function fazerAlgo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado");
    }, 1000);
  });
}

fazerAlgo().then((resultado) => {
  console.log(resultado);
});
```

## 📁 Arquivos

- `aula47.html`: Estrutura HTML com botão e elemento de resultado
- `aula47.js`: Promise encapsulada em função com controle por evento
- `estilos47.css`: Estilos visuais para diferentes estados

## 🎓 Próximos Passos

Depois desta aula, você pode aprender:
- **Async/Await**: Sintaxe mais limpa para promises
- **Promise.all()**: Executar múltiplas promises
- **Promise.race()**: Primeira promise a resolver
- **Fetch API**: Promises para requisições HTTP