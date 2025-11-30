const objetos = document.getElementById("objetos");

// Criando um objeto computador com várias propriedades
const computador = {
  cpu: "Intel Core i7",
  ram: "16GB",
  armazenamento: "512GB SSD",
  placaDeVideo: "NVIDIA GeForce RTX 3060",
  sistemaOperacional: "Windows 11",
  // Método para exibir informações específicas do computador ao ser chamado
  info: function () {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`ARMAZENAMENTO: ${this.armazenamento}`);
  },
};

computador["monitor"] = "27 polegadas"; // Adicionando nova propriedade dentro do objeto computador, uma forma

computador.mouse = "Mouse Gamer"; // Adicionando nova propriedade dentro do objeto computador, outra forma

console.log(computador["armazenamento"]);

// Array de objetos computadores
const computadores = [
  {
    cpu: "Intel Core i5",
    ram: "8GB",
    armazenamento: "512GB SSD",
    placaDeVideo: "NVIDIA GeForce RTX 3060",
    sistemaOperacional: "Windows 11",
  },
  {
    cpu: "Intel Core i3",
    ram: "32GB",
    armazenamento: "512GB SSD",
    placaDeVideo: "NVIDIA GeForce GTX 1680",
    sistemaOperacional: "Windows 11",
  },
  {
    cpu: "Intel Core i7",
    ram: "16GB",
    armazenamento: "512GB SSD",
    placaDeVideo: "NVIDIA GeForce RTX 3060",
    sistemaOperacional: "Windows 11",
  },
];

// Percorrendo o array de objetos computadores e exibindo suas informações na tela do html, dentro da div objetos
computadores.forEach((c) => {
  const div = document.createElement("div");
  div.innerHTML = `${c.cpu} <br/> ${c.ram} <br/> ${c.armazenamento} <br/>`;
  div.setAttribute("class", "computador");
  objetos.appendChild(div);
});

// computador.info();
// console.log(computadores);
// objetos.innerHTML = JSON.stringify(computadores);
