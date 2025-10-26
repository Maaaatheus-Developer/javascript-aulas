const caixa = document.querySelector("#caixa");

let mapa = new Map();

mapa.set("curso", "Javascript");
mapa.set(10, "CFB Cursos");
mapa.set(1, 100);
mapa.set("canal", 200);

mapa.delete("curso"); //Deleta o item da coleção pelo valor da chave

console.log(mapa);

let pes = "curso";
let res = "";

if (mapa.has(pes)) {
  res = "A chave existe na coleção com o valor: " + mapa.get(pes);
} else {
  res = "A chave não está na coleção";
}
res += "<br/> <br/> O tamanho da coleção é " + mapa.size;

caixa.innerHTML = res;

mapa.forEach((el) => {
  console.log(el);
});

// caixa.innerHTML = mapa.get(10);
