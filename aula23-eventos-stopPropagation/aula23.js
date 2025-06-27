/*
🌟 === AULA 23: EVENTOS - stopPropagation === 🌟

⚙️ FUNCIONAMENTO:
- Event bubbling: eventos sobem da hierarquia (filho → pai)
- stopPropagation(): impede que evento continue subindo
- Útil quando elemento filho não deve disparar evento do pai
*/

// 🎯 === SELEÇÃO DE ELEMENTOS ===
const caixa1 = document.querySelector("#caixa1");        // 📦 Elemento pai (container)
const btn_c1 = document.querySelector("#c1");            // 🎯 Elemento específico
const cursos = [...document.querySelectorAll(".curso")]; // 📋 Elementos filhos (cursos)

// 📦 === EVENTO NO ELEMENTO PAI ===
caixa1.addEventListener("click", (event) => {
  console.log("clicou");  // 📝 Sempre executa quando caixa1 ou seus filhos são clicados
});

// 🛑 === EVENTOS NOS ELEMENTOS FILHOS COM stopPropagation ===
cursos.map((el) => {
  el.addEventListener("click", (event) => {
    event.stopPropagation();  // 🛑 IMPEDE que o evento suba para o pai (caixa1)
    // 💡 Resultado: quando curso é clicado, NÃO executa o evento de caixa1
  });
});

// 🔍 EXPERIMENTO: Comente o stopPropagation() e veja a diferença!
// Sem stopPropagation(): click no curso → executa evento do curso E da caixa1
// Com stopPropagation(): click no curso → executa APENAS evento do curso
