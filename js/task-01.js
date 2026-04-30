const categoriesRef = document.querySelector("#categories");
const allCategoriesRef = categoriesRef.querySelectorAll(".item");
console.log("Number of categories:", allCategoriesRef.length);

allCategoriesRef.forEach((item) => {
  const nameCategory = item.querySelector("h2").textContent;
  const numberOfItems = item.querySelectorAll("ul li").length;
  console.log(`Category: ${nameCategory}`);
  console.log(`Element: ${numberOfItems}`);
});
