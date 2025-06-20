let n = 0;
let max = 1000;

//✅ Uso com break
// while(n< max){
//     console.log('CFB Cursos - ' + n)
//     if(n > 8){
//         break
//     }
//     n++
// }
// console.log('Fim do programa')

let pares = 0;

for (let i = n; i < max; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  pares++;

}
console.log("Quantidade de números pares: " + pares);
console.log("Fim do programa");
