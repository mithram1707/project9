const recipes = [
  {
    name: "Spaghetti Bolognese",
    ingredients: [
      "200g spaghetti",
      "100g minced meat",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "Salt, pepper, herbs"
    ],
    instructions: "Boil spaghetti. In a pan, cook onion and meat. Add tomatoes and spices. Mix with spaghetti."
  },
  {
    name: "Pancakes",
    ingredients: [
      "1 cup flour",
      "1 egg",
      "1 cup milk",
      "1 tbsp sugar",
      "Pinch of salt"
    ],
    instructions: "Mix ingredients into a batter. Heat a pan, pour some batter, cook both sides until golden."
  },
  {
    name: "Veggie Sandwich",
    ingredients: [
      "2 slices bread",
      "Lettuce",
      "Tomato slices",
      "Cucumber",
      "Mayonnaise"
    ],
    instructions: "Spread mayo on bread, add veggies, and top with the second slice. Serve chilled or grilled."
  }
];

const recipeListDiv = document.getElementById("recipeList");
const recipeDetailsDiv = document.getElementById("recipeDetails");

recipes.forEach((recipe, index) => {
  const button = document.createElement("button");
  button.textContent = recipe.name;
  button.onclick = () => showRecipe(index);
  recipeListDiv.appendChild(button);
});

function showRecipe(index) {
  const recipe = recipes[index];
  recipeDetailsDiv.innerHTML = `
    <h2>${recipe.name}</h2>
    <h4>Ingredients:</h4>
    <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}</ul>
    <h4>Instructions:</h4>
    <p>${recipe.instructions}</p>
  `;
}
