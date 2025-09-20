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
const c1_2 = document.querySelector("#c1_2");
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

const tirarSelecao = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((el) => {
    el.classList.remove("selecionado");
  });
};
const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id", "c" + indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click", (evt) => {
    tirarSelecao();
    evt.target.classList.toggle("selecionado");
  });

  return novoElemento;
};

const cursoSelecionado = () => {
  const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];
};

cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el);
  caixaCursos.appendChild(novoElemento);
  indice++;
});

btnCursoSelecionado.addEventListener("click", (e) => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().innerHTML);
  } catch (ex) {
    alert("Selecione um curso!");
  }
});

btnRemoverCurso.addEventListener("click", (e) => {
  const cs = cursoSelecionado();

  if (cs !== undefined) {
    cs.remove();
  } else {
    alert("Selecione um curso para remover!");
  }
});

btnAdicionarNovoCursoAntes.addEventListener("click", (e) => {
  try {
    if (nomeCurso.value.trim() != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado());
    } else {
      alert("Digite o nome do curso!");
    }
  } catch {
    alert("Selecione um curso!");
  }
});

btnAdicionarNovoCursoDepois.addEventListener("click", () => {
  try {
    if (nomeCurso.value.trim() !== "") {
      const novoCurso = criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextElementSibling);
    } else {
      alert("Digite o nome do curso!");
    }
  } catch (ex) {
    alert("Selecione um curso!");
  }
});
