const cursos = [
  "JavaScript",
  "HTML",
  "CSS",
  "Arduino",
  "Raspberry",
  "C++",
  "Python",
  "Java",
  "C#",
];

export default function getTodosCursos() {
  return cursos;
}

export function getCurso(i_curso) {
  return cursos[i_curso];
}

// const getTodosCursos = () => {
//   return cursos;
// };

export { cursos }; // Exportando as variáveis cursos e carros
