const jogador1 = {
  nome: "Bruno",
  energia: 100,
  vidas: 3,
  magia: 150
};

const jogador2 = {
  nome: "Bruce",
  energia: 80,
  vidas: 5,
  velocidade: 80
};

const jogador3 = { ...jogador1,...jogador2 };

// console.log("n1 " + n1);
// console.log("n2 " + n2);
console.log(jogador3);
