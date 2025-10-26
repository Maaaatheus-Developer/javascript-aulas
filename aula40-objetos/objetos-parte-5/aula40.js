const Pessoa = {
  nome,
  idade,
  getNome: function () {
    return this.nome;
  },
  getIdade: function () {
    return this.idade;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
    return this.nome;
  },
  setIdade: function (novaIdade) {
    this.idade = novaIdade;
    return this.idade;
  },
};

let nome = document.getElementById("f_nome").value;
let idade = document.getElementById("f_idade").value;

const p2 = Pessoa;
const p3 = Pessoa;

p3.nome = "Cladisvarsion"; // Altera o valor da propriedade 'nome' do objeto Pessoa
Pessoa.setNome("Novo nome da pessoa"); // Altera o valor da propriedade 'nome' do objeto Pessoa
// p2["nome"] = "Bruno Silva"; Formato alternativo de alterar o valor da propriedade

console.log(Pessoa.nome);
console.log(p2.getNome());
console.log(p3.nome);
