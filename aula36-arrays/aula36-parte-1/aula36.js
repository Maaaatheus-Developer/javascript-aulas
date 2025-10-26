const caixa = document.getElementById("caixa");

let cores = ["Azul", "Verde", "Amarelo", ["claro", "escuro", "medio"]];

let cursos = ["HTML5", "CSS3", "JavaScript", cores];

// cursos[0] = 2002;

// cursos.push("C++");
// cursos.unshift("Python");
// cursos.shift();

console.log(cursos[3][3][2]);

console.log(cursos[1]);

cursos.map((el) => {
  let p = document.createElement("p");
  p.innerHTML = el;
  caixa.appendChild(p);
});

console.log(cursos);
