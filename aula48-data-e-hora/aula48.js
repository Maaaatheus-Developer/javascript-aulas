const div_data = document.getElementById("div_data");
const div_relogio = document.getElementById("div_relogio");
const data = new Date(); //Obtem todas as informações relacionadas a data e hora atuais

let dia = data.getDate();
dia = dia < 10 ? "0" + dia : dia;
let mes = data.getMonth();
mes = mes < 10 ? "0" + mes : mes;
let data_resumida = dia + "/" + mes + "/" + data.getFullYear();
div_data.innerHTML = data_resumida;

const relogio = () => {
  const data = new Date();
  let hora = data.getHours();
  hora = hora < 10 ? "0" + hora : hora;
  let minuto = data.getMinutes();
  minuto = minuto < 10 ? "0" + minuto : minuto;
  let segundo = data.getSeconds();
  segundo = segundo < 10 ? "0" + segundo : segundo;
  const hora_completa = hora + ":" + minuto + ":" + segundo;
  div_relogio.innerHTML = hora_completa;
  console.log(hora);
};

const intervalo = setInterval(relogio, 1000);

// getDate() - Retorna o dia do mês (1-31)
// getDay() - Retorna o dia da semana (0-6) (0 = Domingo, 1 = Segunda, ...)
// getMonth() - Retorna o mês (0-11) (0 = Janeiro, 1 = Fevereiro, ...)
// getFullYear() - Retorna o ano com 4 dígitos
// getHours() - Retorna a hora (0-23)
// getMinutes() - Retorna os minutos (0-59)
// getSeconds() - Retorna os segundos (0-59)
// getMilliseconds() - Retorna os milissegundos (0-999)
// getTime() - Retorna o timestamp (milissegundos desde 1 de janeiro de 1970)
// getTimezoneOffset() - Retorna a diferença, em minutos, entre o horário local e o UTC
// getUTCDate() - Retorna o dia do mês em UTC (1-31)
// getUTCDay() - Retorna o dia da semana em UTC (0-6)
// getUTCMonth() - Retorna o mês em UTC (0-11)
// getUTCFullYear() - Retorna o ano em UTC com 4 dígitos
// getUTCHours() - Retorna a hora em UTC (0-23)
// getUTCMinutes() - Retorna os minutos em UTC (0-59)
// setDate() - Define o dia do mês (1-31)
// setMonth() - Define o mês (0-11)
// setFullYear() - Define o ano com 4 dígitos
// setHours() - Define a hora (0-23)
// setMinutes() - Define os minutos (0-59)
// setSeconds() - Define os segundos (0-59)
// setMilliseconds() - Define os milissegundos (0-999)
// toDateString() - Retorna a data como uma string legível
// Date.now() - Retorna o timestamp atual (milissegundos desde 1 de janeiro de 1970)
