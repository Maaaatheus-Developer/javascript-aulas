function soma(...valores) {
  let res = 0;

  //✅Exemplo com o for tradicional
  //for (let i = 0; i < tam; i++) {
  //res += valores[i];
  //}

  //✅Exemplo com for of
  //Nessa iteração a váriavel v recebe os valores que estão dentro do array 'valores'
  // for (let v of valores) {
  //   res += v;
  // }


  //✅Exemplo com for in
  for (let i in valores) {
    res += valores;
  }

  return res;
}
console.log(soma(10, 5, 7));
