# 🔄 Promise - Parte 1: Introdução Básica

## 📚 O que são Promises?

**Promise** (promessa) é uma forma de lidar com operações assíncronas em JavaScript. É como fazer uma promessa no mundo real: você promete fazer algo e pode **cumprir** (resolve) ou **falhar** (reject) em cumprir essa promessa.

### 🎯 Conceitos Principais

- **Assincronia**: Operações que não bloqueiam o código (como setTimeout, requisições HTTP)
- **Resolve**: Quando a promessa é cumprida com sucesso
- **Reject**: Quando a promessa falha
- **Then**: Executa quando a promise é resolvida
- **Catch**: Executa quando a promise é rejeitada

## 📋 O que este código faz?

Este exemplo demonstra uma Promise básica que:

1. **Cria uma Promise** que simula uma operação que demora 3 segundos
2. **Sempre resolve com sucesso** (resultado = true)
3. **Atualiza a interface** mostrando o resultado na tela
4. **Aplica estilos diferentes** para sucesso (.ok) e erro (.erro)

### 🔍 Fluxo do Código

```
1. Página carrega → "Processando..."
2. Promise executa por 3 segundos
3. Promise resolve → "Deu tudo certo!"
4. Aplica classe CSS "ok" (verde)
```

## 📝 Estrutura da Promise

```javascript
let promise = new Promise((resolve, reject) => {
  // Código assíncrono aqui
  setTimeout(() => {
    if (condicao) {
      resolve("Sucesso!"); // ✅ Deu certo
    } else {
      reject("Erro!");     // ❌ Deu errado
    }
  }, 3000);
});
```

## 🎨 Como usar `.then()` e `.catch()`

```javascript
promise
  .then((resultado) => {
    // Executa quando dá certo
    console.log(resultado);
  })
  .catch((erro) => {
    // Executa quando dá errado
    console.error(erro);
  });
```

## 🚀 Estados da Promise

- **Pending** (Pendente): A promise ainda está executando
- **Fulfilled** (Cumprida): A promise foi resolvida com sucesso
- **Rejected** (Rejeitada): A promise falhou

## 💡 Vantagens das Promises

1. **Evita Callback Hell**: Código mais limpo e legível
2. **Melhor tratamento de erros**: Com `.catch()`
3. **Composição**: Pode encadear múltiplas promises
4. **Assíncrono sem bloquear**: Não trava a interface

## 📁 Arquivos

- `aula47.html`: Estrutura HTML com elemento para mostrar resultado
- `aula47.js`: Código JavaScript com exemplo de Promise básica
- `estilos47.css`: Estilos para diferenciar sucesso e erro