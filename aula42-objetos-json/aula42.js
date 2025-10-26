const pessoa = {
  nome: "Ana",
  canal: "CFB Cursos",
  curso: "JavaScript",
  aulas: {
    aula01: "Introdução",
    aula02: "Variáveis",
    aula03: "Objetos",
  },
};

// console.log(pessoa.aulas.aula02)

const string_pessoa =
  '{"nome":"Ana","canal":"CFB Cursos","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Objetos"}}';

const s_json_pessoa = JSON.stringify(pessoa); // stringify converte objeto para string JSON
const o_json_pessoa = JSON.parse(string_pessoa); // parse converte string JSON para objeto JSON

console.log(pessoa);
console.log(s_json_pessoa);
console.log(o_json_pessoa);
