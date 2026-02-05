let nome = new String("Matheus");
let nome2 = new String("Matheus");

let sobrenome = new String("Minetto");

// console.log(nome === nome2); // false

//---------------------------------------------------------------------------------------
//Método localeCompare
console.log(nome.localeCompare(nome2)); // retorno 0 signfica que as strings são iguais
// -1 significa que a string da esquerda é menor que a da direita
// 1 significa que a string da esquerda é maior que a da direita
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
//Método replace
console.log(nome.replace("Mat", "Matheuzinho")); // substitui parte da string
//---------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
//Método search
console.log(nome.search("t")); // retorna o índice da string onde começa a palavra pesquisada, usado para fazer buscas
//----------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------
//Método slice
console.log(nome.slice("0", "7  ")); // retorna uma parte da string, começando do índice 0 até o índice 4, serve para - partes da string
// Indice 0, indica que ele pega o caractere do índice 0 que é o M, como start e o índice 4 indica que ele pega até o caractere do índice 4, mas não inclui o caractere do índice 4 que é o H

// Cortei a string em 3 partes
console.log(nome.slice("0", "2")) +
console.log(nome.slice("2", "5")) +
console.log(nome.slice("5", "7"));

//---------------------------------------------------------------------------------------

//OBS:
// O método slice(0, 4) funciona assim:
// Primeiro parâmetro (0): índice onde começa (incluído)
// Segundo parâmetro (4): índice onde termina (NÃO incluído)
// Então slice(0, 4) pega do índice 0 até antes do índice 4, ou seja: índices 0, 1, 2 e 3 → "Math"
// O índice 4 (que é o "e") não é incluído no resultado. É assim que o slice funciona em JavaScript - o segundo parâmetro é sempre exclusivo (não faz parte do resultado)
//---------------------------------------------------------------------------------------

sobrenome = nome.slice("0", "4");
console.log(sobrenome); // Math

//---------------------------------------------------------------------------------------
// Método split

let arr_nome = nome.split("h");
console.log(arr_nome); // [ 'Mat', 'eus' ]
// O método split() divide uma string em um array de substrings com base em um separador especificado. No exemplo acima, a string "Matheus" é dividida na letra "h", resultando no array ['Mat', 'eus'].
//---------------------------------------------------------------------------------------
