const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector("ul");

const foodIngredients = ingredients.forEach(ingredient => {
  let item = document.createElement("li");
  item.innerHTML = ingredient;
  ulRef.append(item);
});

console.log(ulRef);
console.log(foodIngredients);