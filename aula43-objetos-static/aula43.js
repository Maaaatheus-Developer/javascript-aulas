class NPC {
  static alerta = false; // Propriedade estática, esse membro pertence a classe e não as instâncias da classe   
  constructor(energia) {
    this.energia = energia;
  }

  info = function () {
    console.log(`Energia: ${this.energia}`);
    console.log(`Alerta: ${NPC.alerta ? "Sim" : "Não"}`);
    console.log("-------------------------------------");
  };

  static setAlerta = function () { // Método estático
    NPC.alerta = true;
  };
}

const npc1 = new NPC(1000);
const npc2 = new NPC(80);
const npc3 = new NPC(30);

// NPC.alerta = true; // Alterando o valor da propriedade estática
NPC.setAlerta();


npc1.info();
npc2.info();
npc3.info();
