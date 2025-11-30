# Aula 52 - Histórico e Direcionamento

## Descrição
Esta aula demonstra como manipular o histórico de navegação e realizar redirecionamentos em JavaScript, utilizando os objetos `window.location` e `window.history`.

## Código

O código implementa um botão que redireciona o usuário para uma URL digitada em um campo de input.

## Funções e Métodos Utilizados

### `window.location`
Objeto que contém informações sobre a URL atual e permite navegar para outras páginas.

- **`window.location.replace(url)`**: Redireciona para uma nova URL e **remove** a página atual do histórico. O usuário não consegue voltar para a página anterior usando o botão "voltar" do navegador.

- **`window.location.assign(url)`**: Redireciona para uma nova URL e **mantém** a página atual no histórico. O usuário pode voltar usando o botão "voltar" do navegador.

- **`window.location.reload()`**: Recarrega a página atual (equivalente a pressionar F5).

- **`window.location = url`**: Forma simplificada de redirecionar para uma nova URL (usado no código). Comporta-se de forma similar ao `assign()`, mantendo o histórico.

### `window.history`
Objeto que permite manipular o histórico de sessão do navegador.

- **`window.history.back()`**: Volta para a página anterior no histórico (equivalente ao botão "voltar" do navegador).

- **`window.history.forward()`**: Avança para a próxima página no histórico (equivalente ao botão "avançar" do navegador).

- **`window.history.go(n)`**: Navega para uma página específica no histórico:
  - `go(0)`: Recarrega a página atual
  - `go(-1)`: Volta uma página (igual ao `back()`)
  - `go(1)`: Avança uma página (igual ao `forward()`)
  - `go(-2)`: Volta duas páginas

## Como Funciona

1. O usuário digita uma URL no campo de input
2. Ao clicar no botão, o evento `click` é capturado
3. O valor da URL é obtido através de `url.value`
4. A página é redirecionada para a URL digitada usando `window.location`

## Diferenças Importantes

| Método | Mantém no Histórico | Pode Voltar |
|--------|---------------------|-------------|
| `location.replace()` | ❌ Não | ❌ Não |
| `location.assign()` | ✅ Sim | ✅ Sim |
| `location = url` | ✅ Sim | ✅ Sim |

## Exemplo de Uso

```javascript
// Redirecionar sem poder voltar
window.location.replace("https://www.google.com.br");

// Redirecionar podendo voltar
window.location.assign("https://www.google.com.br");

// Voltar para a página anterior
window.history.back();
```
