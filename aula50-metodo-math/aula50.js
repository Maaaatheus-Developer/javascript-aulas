const mat = document.getElementById("mat");

const num = Math.round(Math.random() * 10) + 1; // Arredonda um número aleatório entre 0 e 10

const num2 = Math.floor(Math.random() * 10) + 1; // Arredonda para baixo um número aleatório entre 0 e 10

console.log(num2)

mat.innerHTML = Math.pow(10, 3); // Potência
// mat.innerHTML = Math.sqrt(); // Raiz quadrada
// mat.innerHTML = Math.floor(Math.random() * 10); // Gera um número aleatório entre 0 e 9
