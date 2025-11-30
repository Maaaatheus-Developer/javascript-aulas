const objetos = document.getElementById("objetos");

const computador = {
  cpu: "",
  ram: "",
  armazenamento: "",
  placaDeVideo: "",
  sistemaOperacional: "",
  // Método para exibir informações específicas do computador ao ser chamado
  info: function () {
    console.log(`CPU: ${this.cpu}`);
    console.log(`RAM: ${this.ram}`);
    console.log(`ARMAZENAMENTO: ${this.armazenamento}`);
  },
};

computador["monitor"] = "27 polegadas"; // Adicionando nova propriedade dentro do objeto computador, uma forma
computador.mouse = "Mouse Gamer"; // Adicionando nova propriedade dentro do objeto computador, outra forma

delete computador.armazenamento;
// console.log(computador);

const c1 = Object.assign({}, computador); //  Cria uma cópia do objeto computador e atribui a c1, assim ele consegue modificar sem alterar o original
c1.info();

const c2 = Object.create(computador);

c2.cpu = "Intel Core i9";
c2.ram = "32GB";
c2.armazenamento = "1TB SSD";

c2.info();

const o1 = { obj1: "12" };
const o2 = { obj2: "2" };
const o3 = { obj3: "3" };
const o4 = Object.assign(o1, o2, o3); // Une os três objetos em um único objeto o4, assim o assign obtem todas as propriedades dos objetos passados como argumentos
// console.log(o4);

// Array de objetos computadores
const computadores = [
  {
    cpu: "Intel Core i5",
    ram: "8GB",
    armazenamento: "512GB SSD",
  },
  {
    cpu: "Intel Core i3",
    ram: "32GB",
    armazenamento: "512GB SSD",
  },
  {
    cpu: "Intel Core i7",
    ram: "16GB",
    armazenamento: "512GB SSD",
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
