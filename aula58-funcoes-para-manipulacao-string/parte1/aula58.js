let nome = new String("Matheus");
let sobrenome = new String("Minetto");

console.log(nome);
console.log(typeof nome);

console.log(nome.charAt(0)); // M
console.log(nome.charAt(1)); // A
console.log(nome.charAt(2)); // T

console.log(nome.charCodeAt(0)); // 97 (código ASCII)

console.log(nome.concat(" ").concat(sobrenome)); // Resultado =  Matheus Minetto

// nome = nome.concat(sobrenome);
// console.log(nome) // Resultado da variável nome = MatheusMinetto concatenado

console.log(nome.concat(sobrenome));

console.log(nome.indexOf("M")); // 0 (posição do caractere)
// Se eu pesquisar algo que não existe, o retorno será -1

console.log(nome.lastIndexOf("t"));
