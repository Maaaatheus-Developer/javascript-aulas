const btn_alert = document.getElementById("btn_alert");
const btn_confirm = document.getElementById("btn_confirm");
const btn_prompt = document.getElementById("btn_prompt");

btn_alert.addEventListener("click", (evt) => {
  alert("Alerta acionado!");
});

btn_confirm.addEventListener("click", (evt) => {
  const retorno = confirm("Você está aprendendo muito?");
  retorno
    ? console.log("Botão de Ok Pressionado")
    : console.log("Botão de Cancelar Pressionado");
});

btn_prompt.addEventListener("click", (evt) => {
  const nome = prompt("Digite seu nome", "Matheus Minetto");

  if (nome == null) {
    console.log("Botão cancelar pressionado");
    console.log(typeof nome);
  } else {
    console.log("Botão OK pressionado");
    console.log(typeof nome);
  }
  console.log(nome);
});
