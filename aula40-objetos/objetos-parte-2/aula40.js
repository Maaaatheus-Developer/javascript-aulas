class Carros {
  canal = "CFB Cursos";
  constructor(pnome, ptipo) {
    this.nome = pnome;
    this.canal = "Youtub";
    if (ptipo == 1) {
      this.tipo = "Esportivo";
      this.velmax = 300;
    } else if (ptipo == 2) {
      this.tipo = "Utilitário";
      this.velmax = 200;
    } else if (ptipo == 3) {
      this.tipo = "Passeio";
      this.velmax = 160;
    } else {
      this.tipo = "Militar";
      this.velmax = 250;
    }
  }
  //métodos get
  getNome() {
    return this.nome;
  }

  getTipo() {
    return this.tipo;
  }

  getVelMax() {
    return this.velmax;
  }

  getInfo() {
    return [this.nome, this.tipo, this.velmax];
  }
  //métodos set
  setNome(nome) {
    this.nome = nome;
  }

  setTipo(ptipo) {
    this.tipo = ptipo;
  }

  setVeLMax(pvelmax) {
    this.velmax = pvelmax;
  }

  info() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Velocidade Maxima: ${this.velmax}`);
    console.log(`Canal: ${this.canal}`);
    console.log("---------------------");
  }
}

let c1 = new Carros("Rapidao", 1);
let c2 = new Carros("Super Luxo", 2);
let c3 = new Carros("Bombadão", 4);
let c4 = new Carros("Carrego tudo", 3);

c1.setNome("Super veloz");
c1.setVeLMax(500);

c1.setTipo("Sedan");

c1.info();
// c2.info();

// console.log(c1.nome);
// console.log(c1.tipo);
// console.log(c1.velmax);

// console.log(c1.getInfo()[2]);
