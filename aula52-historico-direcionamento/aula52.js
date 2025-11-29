const url = document.getElementById("url");
const btn_url = document.getElementById("btn_url");

btn_url.addEventListener("click", (evt) => {
  // window.location.replace("https://www.google.com.br"); Redireciona e remova a url do histórico
  //window.location.assign("https://www.google.com.br"); // Redireciona e mantém a url no histórico, não deleta
  //window.location.reload();
  // window.history.back(); // Volta para a página anterior no histórico
  //window.history.forward(); // Avança para a próxima página no histórico
  // window.history.go(); // Vai para uma página específica no histórico, 0 é a página atual, -1 é a anterior, 1 é a próxima
  console.log(url.value);
  window.location = url.value
});
