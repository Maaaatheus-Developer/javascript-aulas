/*
🌟 === AULA 21: EVENTOS - addEventListener === 🌟

🎯 OBJETIVO: Aprender a adicionar eventos a múltiplos elementos com addEventListener

📚 CONCEITOS ABORDADOS:
- 🎧 Método addEventListener() para capturar eventos
- 🖱️ Evento 'click' em elementos
- 🎯 event.target para identificar elemento clicado
- 🎨 classList.add() para adicionar classes CSS
- 🗺️ map() para aplicar eventos a múltiplos elementos
- 🔄 Spread operator para converter NodeList em Array

⚙️ FUNCIONAMENTO:
- addEventListener('evento', função) - adiciona ouvinte de evento
- event.target - elemento que disparou o evento
- classList.add() - adiciona classe CSS ao elemento
- map() permite aplicar mesma funcionalidade a vários elementos
*/

// 🎯 === SELEÇÃO DE ELEMENTOS ===
// const c1 = document.querySelector("#c1");              // 📍 Seleção individual (comentado)
const cursos = [...document.querySelectorAll(".curso")]; // 📋 Todos elementos com class="curso"

// 🎧 === ADIÇÃO DE EVENTOS A MÚLTIPLOS ELEMENTOS ===
cursos.map((el) => {
  // 🗺️ Aplica a cada elemento curso
  el.addEventListener("click", (event) => {
    // 🖱️ Adiciona evento de click
    const el = event.target; // 🎯 Elemento que foi clicado
    el.classList.add("destaque"); // 🎨 Adiciona classe "destaque"
    console.log(el.innerHTML + " foi clicado"); // 📝 Log do elemento clicado
  });
});

// 🎧 === EXEMPLO DE EVENTO INDIVIDUAL (COMENTADO) ===
// c1.addEventListener("click", (event) => {             // 🖱️ Evento para elemento específico
// const el = event.target;                            // 🎯 Elemento clicado
// el.classList.add("destaque");                       // 🎨 Adiciona classe
// });

// 💡 NOTA: A primeira abordagem é mais eficiente para múltiplos elementos!
