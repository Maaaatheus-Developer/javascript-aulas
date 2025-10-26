class Carro {
  //Classe Pai
  constructor(nome, portas) {
    this.nome = nome;
    this.portas = portas;
    this.ligado = false;
    this.velocidade = 0;
    this.cor = undefined;
  }

  ligar = function () {
    this.ligado = true;
  };

  desligar = function () {
    this.ligado = false;
  };

  setCor = function (cor) {
    this.cor = cor;
  };
}

class Militar extends Carro {
  //Classe Filho
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas);
    this.blindagem = blindagem;
    this.municao = municao;
    this.setCor("Verde");
  }
  atirar = function () {
    if (this.municao > 0) {
      this.municao--;
    }
  };
}

class Utilitario extends Carro {
  //Classe Filho
  constructor(nome, portas) {
    super(nome, portas);
    this.setCor("Branco");
    this.ligado = true;
    this.velocidade = 80;
  }
}

const c1 = new Carro("Normal", 4);
c1.ligar();
c1.setCor("Vermelho");

const c2 = new Militar("Lutador", 1, 100, 50);

for (let i = 0; i < 5; i++) {
  c2.atirar();
}
// c2.setCor("Azul"); Alterando cor

c3 = new Utilitario("Golf", 4);

console.log(`Nome: ${c1.nome}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c1.velocidade}`);
console.log(`Cor: ${c1.cor}`);
console.log("----------------------------------------");

console.log(`Nome: ${c2.nome}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Ligado: ${c2.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c2.velocidade}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Munição: ${c2.municao}`);
console.log(`Cor: ${c2.cor}`);
console.log("----------------------------------------");

console.log(`Nome: ${c3.nome}`);
console.log(`Portas: ${c3.portas}`);
console.log(`Ligado: ${c3.ligado ? "Sim" : "Não"}`);
console.log(`Velocidade: ${c3.velocidade}`);
console.log(`Cor: ${c3.cor}`);
