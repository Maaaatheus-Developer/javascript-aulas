const caixa = document.querySelector("#caixa");

let musicas = new Set(["musica1", "musica boa", "musica10"]);

musicas.add("musica muito legal");
musicas.add("musica1");
musicas.add("musica1");
musicas.add("musica10");

musicas.delete("musica1"); //Deleta um item específico da coleção
// musicas.clear() // Limpa todo a coleção

console.log(musicas); // Set não permite entradas duplicadas

// musicas.forEach((el) => {
//   caixa.innerHTML += el + "<br/> <br/>";
// });

for (let m of musicas) {
  // console.log(m);

  caixa.innerHTML += m + "<br/> <br/>";
}
