const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsRef = document.querySelector("#ingredients");
const ingredientAdd = ingredients.map((element) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList.add("ingredient-element");
  return ingredient;
});
ingredientsRef.append(...ingredientAdd);
