const caixaCursos = document.querySelector("#caixaCursos");
const btn_c = document.querySelector(".curso");
const cursos = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "MySQL",
  "PHP",
  "React Nativa",
];

const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");
const btnRemoverCurso = document.getElementById("btnRemoverCurso");
const btnAdicionarNovoCursoAntes = document.getElementById(
  "btnAdicionarNovoCursoAntes"
);
const btnAdicionarNovoCursoDepois = document.getElementById(
  "btnAdicionarNovoCursoDepois"
);
const nomeCurso = document.getElementById("nomeCurso");

let indice = 0;

const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");

  const rb = document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso");

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);

  return novoElemento;
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  const radioSelecionado = todosRadios.filter((el) => {
    return el.checked;
  });
  return radioSelecionado[0];
};

btnCursoSelecionado.addEventListener("click", (e) => {
  const rs = radioSelecionado();
  if (rs !== undefined) {
    const cursoSelecionado = rs.parentNode.previousSibling.textContent;
    alert("Curso selecionado: " + cursoSelecionado);
  } else {
    alert("Selecione um curso!");
  }

  // console.log(radioSelecionado);
  // console.log(cursoSelecionado);
});

btnRemoverCurso.addEventListener("click", (e) => {
  const rs = radioSelecionado();

  if (rs !== undefined) {
    const cursoSelecionado = rs.parentNode.parentNode;
    cursoSelecionado.remove();
  } else {
    alert("Selecione um curso para remover!");
  }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (e) => {
  const rs = radioSelecionado();
  try {
    if (nomeCurso.value.trim() != "") {
      const cursoSelecionado = rs.parentNode.parentNode;
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado);
    } else {
      alert("Digite o nome do curso!");
    }
  } catch {
    alert("Selecione um curso!");
  }
});

btnAdicionarNovoCursoDepois.addEventListener("click", () => {
  const rs = radioSelecionado();
  if (nomeCurso.value.trim() !== "") {
    const cursoSelecionado = rs.parentNode.parentNode;
    const novoCurso = criarNovoCurso(nomeCurso.value);
    caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling);
  } else {
    alert("Digite o nome do curso!");
  }
  try {
  } catch (ex) {
    alert("Selecione um curso!");
  }
});
