const caixa1 = document.querySelector("#caixa1");
const btn_c = [...document.querySelectorAll(".curso")];

console.log(btn_c[0].getRootNode()); //retorna o nó raiz do contexto em que o nó está inserido, que pode ser o próprio documento (HTMLDocument) ou um ShadowRoot no caso de Shadow DOM.
console.log(btn_c[0].ownerDocument);// Em JavaScript, ownerDocument é uma propriedade de um elemento do DOM (Document Object Model) que referencia o objeto Document que contém esse elemento. Em outras palavras, ele aponta para o documento HTML ou XML onde o elemento está inserido. 

// console.log(caixa1.firstElementChild);
// console.log(caixa1.lastElementChild);
// console.log(caixa1.children);
