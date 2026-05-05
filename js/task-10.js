function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("input");
const createBtnRef = controlsRef.querySelector("[data-create]");
const destroyBtnRef = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreateBtnRefClick);
destroyBtnRef.addEventListener("click", onDestroyBtnRefClick);

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesRef.innerHTML = markup;
}

function onCreateBtnRefClick(event) {
  const amount = Number(inputRef.value);
  if (amount >= 1 && amount <= 10) {
    createBoxes(amount);
  } else {
    alert("Please enter a number from 1 to 10");
    inputRef.value = "";
  }
}

function onDestroyBtnRefClick(event) {
  boxesRef.innerHTML = "";
}
