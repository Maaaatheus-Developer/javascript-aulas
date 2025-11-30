import getTodosCursos from "../cursos.js"; // Importando a função padrão do módulo cursos.js
// import { cursos as c, getCurso as gc } from "../cursos.js"; //abreviação de nomes com 'as', função getCurso renomeada para gc
import * as m_cursos from "../cursos.js"; // Importando tudo do módulo cursos.js o * asterisco pega tudo que está sendo exportado esse arquivo/modulo

console.log(m_cursos.cursos);
console.log(m_cursos.cursos[1]);
console.log(m_cursos.default());
// console.log(getCurso(2));
// console.log(getTodosCursos());
// console.log(gc());
