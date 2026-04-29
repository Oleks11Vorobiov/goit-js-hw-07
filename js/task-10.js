function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("input");

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function createBoxes(amount) {
  let size = 30;
  let markup = "";
  for (let i = 0; i < amount; i += 1) {
    markup += `<div style="width:${size}px; height:${size}px; background-color:${getRandomHexColor()}"></div>`;
    size += 10;
  }
  boxesRef.innerHTML = markup;
  console.log(amount);
}
function onCreateBtnClick(event) {
  const amount = Number(inputRef.value);
  createBoxes(amount);
}

function onDestroyBtnClick(event) {
  boxesRef.innerHTML = "";
}
