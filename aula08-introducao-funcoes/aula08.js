/*
🌟 === AULA 08: INTRODUÇÃO ÀS FUNÇÕES === 🌟

⚙️ FUNCIONAMENTO:
- function nomeFuncao() { código } - declara uma função
- Função é executada apenas quando chamada
- Pode ser chamada do HTML via onclick ou do JavaScript
*/

// ⚡ === FUNÇÃO QUE MODIFICA O TEXTO DE ELEMENTOS HTML ===
function mudarTexto() {
  // 🎯 Seleciona elementos do DOM pelos seus IDs
  let d1 = document.getElementById("d1");  // 📍 Busca elemento com id="d1"
  let d2 = document.getElementById("d2");  // 📍 Busca elemento com id="d2"  
  let d3 = document.getElementById("d3");  // 📍 Busca elemento com id="d3"
  
  // ✏️ Modifica o conteúdo HTML de cada elemento
  d1.innerHTML = "CFB Cursos";  // 🔄 Altera o texto interno do elemento d1
  d2.innerHTML = "CFB Cursos";  // 🔄 Altera o texto interno do elemento d2
  d3.innerHTML = "CFB Cursos";  // 🔄 Altera o texto interno do elemento d3
}
