const categoriesRef = document.querySelector("#categories");
const allCategoriesRef = categoriesRef.querySelectorAll(".item");
console.log("Number of categories:", allCategoriesRef.length);

allCategoriesRef.forEach((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  const itemQuantity = item.querySelectorAll("ul li").length;
  console.log(`Category: ${nameCategory}`);
  console.log(`Element: ${itemQuantity}`);
});
