# Métodos de Manipulação de String em JavaScript

Este diretório aborda diversos métodos nativos do JavaScript para manipulação de strings. Abaixo está uma explicação de cada método utilizado nos exemplos:

---

## 1. localeCompare

```js
str1.localeCompare(str2)
```
Compara duas strings e retorna:
- `0` se forem iguais
- `-1` se a primeira for menor
- `1` se a primeira for maior
Útil para ordenação ou comparação de textos.

---

## 2. replace

```js
str.replace("textoAntigo", "textoNovo")
```
Substitui parte da string por outro texto. Retorna uma nova string com a alteração.

---

## 3. search

```js
str.search("texto")
```
Retorna o índice da primeira ocorrência do texto pesquisado na string. Se não encontrar, retorna `-1`.

---

## 4. slice

```js
str.slice(inicio, fim)
```
Retorna uma parte da string, começando do índice `inicio` (incluído) até o índice `fim` (não incluído). Útil para "cortar" partes da string.

Exemplo: `"Matheus".slice(0, 4)` retorna "Math".

---

## 5. split

```js
str.split(separador)
```
Divide a string em um array de substrings, usando o separador especificado. Muito útil para transformar textos em listas.

Exemplo: `"Matheus".split("h")` retorna `["Mat", "eus"]`.

---

## Observações
- Todos os métodos acima retornam novas strings ou arrays, não alteram o valor original.
- Para mais detalhes, consulte a documentação oficial do JavaScript: [MDN String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

---

**Autor:** Matheus
