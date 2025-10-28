const Nave = function (energia) {
  this.energia = energia;
  this.disparos = 100;
};

const n1 = new Nave(100);

//Prototype serve para adicionar propriedades e métodos para todas as instâncias de um objeto
//Isso para adicionar depois que a classe já tiver sido criada, instanciada
Nave.prototype.vidas = 3;
Nave.prototype.disparar = function () {
  let totalDisparos = this.disparos;
  for (let i = 20; i <= totalDisparos; i++) {
    if (this.disparos > 0) {
      this.disparos--;
      //console.log(`Disparou! Restam ${this.disparos} disparos.`);
    }
  }
};

n1.disparar();

console.log(Nave);
console.log(n1);
console.log(n1.energia);
console.log(n1.disparos);
