const btnImp = document.getElementById("btn_imp");

btnImp.addEventListener("click", (evt) => {
  const conteudo = document.getElementById("tabela").innerHTML;

  let estilo = "<style>";
  estilo += "table {width 100%; font: 25px Calibri;}";
  estilo += "table, th, td {border: solid 2px #888; border-collapse: collapse;";
  estilo += "padding: 4px 8px; text-align: center;}";
  estilo += "</style>";

  const win = window.open("", "", "height=700, width=700"); //abre uma nova janela, define nos parametros que a url vai estar vazia, que no target não vai fazer nata e no fratures vao definir o tamanho da janela

  win.document.write("<html><head>"); //abre a estrutura do html
  win.document.write("<title>CFB Cursos</title>"); //define o titulo da nova janela
  win.document.write(estilo); //adiciona o estilo
  win.document.write("</head><body>"); //fecha o head e abre o body
  win.document.write(conteudo); //adiciona o conteudo
  win.document.write("</body></html>"); //fecha o body e o html
  win.document.close(); // sinaliza: "terminei de escrever, pode processar tudo agora". Só depois disso o navegador: processar o conteúdo
  win.onload = () => {
    win.print();
  };
  win.onafterprint = () => {
    win.close();
  };
});
