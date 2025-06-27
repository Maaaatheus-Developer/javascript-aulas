/*
🌟 === AULA 16: MÉTODO MAP === 🌟

⚙️ FUNCIONAMENTO:
- array.map(função) - aplica função a cada elemento
- Retorna novo array com elementos transformados
- Não modifica o array original
- Pode usar elemento e índice como parâmetros
*/

//✅ Primeira forma: Transformação simples com função nomeada
const converterInt = (e) => parseInt(e); // 🔄 Converte string para número
const dobrar = (e) => e * 2; // ✖️ Multiplica por 2
let num = ["1", "2", "3", "4", "5"].map(dobrar); // 🗺️ Aplica dobrar a cada elemento
console.log(num); // 📊 Resultado: [2, 4, 6, 8, 10] (mas ainda strings convertidas)

//✅ Segunda forma: Map com elementos DOM (comentado)
// const el = document.getElementsByTagName("div");  // 📋 Seleciona todas as divs
// el = [...el];                                     // 🔄 Converte para array
// el.map((e, i) => {                               // 🗺️ Itera com elemento e índice
//   console.log(e.innerHTML);                       // 📝 Exibe conteúdo de cada div
// });

//✅ Terceira forma: Map com call() (comentado)
// const el = document.getElementsByTagName("div");
// const valores = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML);  // 🔧 Usa destructuring
// console.log(valores);  // 📋 Array com todos os innerHTML

//✅ Quarta forma: Map com array de strings criando HTML
// const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT"];  // 📚 Array de cursos
// let c = cursos.map((el, i) => {                                // 🗺️ Map com elemento e índice
//   console.log("Curso: " + el + " - Posição do curso: " + i);   // 📝 Exibe informações
//   return "<div>" + el + " </div>";                             // 🎨 Retorna HTML
// });
// console.log(c);  // 📋 Array de elementos HTML
