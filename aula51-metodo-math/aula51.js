const olhos = [...document.getElementsByClassName("olho")];

let posx_mouse = 0;
let posy_mouse = 0;

window.addEventListener("mousemove", (evt) => {
  posx_mouse = evt.clientX;
  posy_mouse = evt.clientY;
  const rot = Math.atan2(posx_mouse, posy_mouse); //retorna o angulo em radianos

  const valor_rot_convertido = (rot * 180) / Math.PI; //converte para graus

  olhos.forEach((o) => {
    o.style.transform = "rotate(" + valor_rot_convertido + "deg)";
  });
  //console.log(posx_mouse, posy_mouse);
});

// olhos[0].style.transform = "rotate(" + 300 + "deg)";
