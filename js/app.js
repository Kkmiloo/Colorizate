const mainDiv = document.getElementsByTagName("main")[0];
const colorDiv = document.getElementsByClassName("colorDiv");

function colorRandom() {
  let max = 255;
  let rgb;
  let r = Math.floor(Math.random() * max);
  let g = Math.floor(Math.random() * max);
  let b = Math.floor(Math.random() * max);
  rgb = {
    r,
    g,
    b,
  };
  return rgb;
}

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

function cambiarColorSection(sectionDiv) {
  let pRGB = sectionDiv.children[0];
  let pHEX = sectionDiv.children[1];
  let { r, g, b } = colorRandom();

  sectionDiv.style.background = `rgb(${r},${g},${b})`;
  pRGB.textContent = `RGB : ${r} , ${g} , ${b}`;
  pHEX.textContent = `HEX : ${ConvertRGBtoHex(r,g,b)}`;

  if (r * 0.299 + g * 0.587 + b * 0.114 > 186) {
    pRGB.style.color = "#000";
    pHEX.style.color = "#000";
  } else {
    pRGB.style.color = "#fff";
    pHEX.style.color = "#fff";
  }
}

function reinicioColores() {
  for (let i = 0; i < colorDiv.length; i++) {
    cambiarColorSection(colorDiv[i]);
  }
}

function eventListeners() {
  document.addEventListener("DOMContentLoaded", () => {
    reinicioColores();
  });
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      reinicioColores();
    }
  });

  mainDiv.addEventListener("click", (e) => {
    if (e.target.tagName == "BUTTON") {
      cambiarColorSection(e.target.parentElement);
    }
  });
}

eventListeners();
