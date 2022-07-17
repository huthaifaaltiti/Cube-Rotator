// Variables

let inputX = document.querySelector(".input-x");
let inputY = document.querySelector(".input-y");
let inputZ = document.querySelector(".input-z");
let resultX = document.querySelector(".value--x");
let resultY = document.querySelector(".value--y");
let resultZ = document.querySelector(".value--z");
// let outputBox = document.querySelector(".box");
let outputBox = document.querySelector(".cube");

let btnReset = document.querySelector(".btn-reset");
let btnCopy = document.querySelector(".btn-copy");

//Functions

function rotateXYZ() {
  return `rotateX(${inputX.value}deg) rotateY(${inputY.value}deg) rotateZ(${inputZ.value}deg)`;
}

// Main DOMs

inputX.addEventListener("input", function () {
  resultX.innerText = inputX.value + " deg";

  outputBox.style.transform = rotateXYZ();
});

inputY.addEventListener("input", function () {
  resultY.innerText = inputY.value + " deg";

  outputBox.style.transform = rotateXYZ();
});

inputZ.addEventListener("input", function () {
  resultZ.innerText = inputZ.value + " deg";

  outputBox.style.transform = rotateXYZ();
});

btnReset.addEventListener("click", function () {
  inputX.value = inputY.value = inputZ.value = 0;

  outputBox.style.transform = rotateXYZ();
});

// copy to console
btnCopy.addEventListener("click", function () {
  console.log("transform", outputBox.style.transform);
});
