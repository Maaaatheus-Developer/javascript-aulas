const objs1 = document.getElementsByTagName("div");

const objs2 = [...document.getElementsByTagName("div")];
objs2.forEach((element) => {
  element.innerHTML = "mudado o nome";
  
  console.log(element);
});

console.log(objs1);
console.log(objs2);

const soma = (v1, v2, v3) => {
  return v1 + v2 + v3;
};

let valores = [1, 5, 4, 190];

console.log(soma(...valores));
