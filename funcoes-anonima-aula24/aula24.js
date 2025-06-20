// const f = new Function("v1", "v2", "v3", "return v1+v2"); //Função construtor anônima


//✅ Função anônima
const fun = function (...valores) {
  let res = 0;
  for (let i = 0; i < valores.length; i++) {
    res += valores[i];
  }
  return res;
};

console.log(fun(10, 5, 2, 15));
