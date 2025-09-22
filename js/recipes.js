const recipes = [
    {
      id: 1,
      title: "Avocado Toast with Egg",
      category: "breakfast",
      img: "assets/images/recipe-avocado.jpg",
      desc: "A quick, nutritious breakfast packed with healthy fats and protein.",
      ingredients: [
        "2 slices whole-grain bread",
        "1 ripe avocado",
        "1 boiled egg",
        "Salt & pepper",
        "Chili flakes (optional)"
      ],
      steps: [
        "Toast the bread.",
        "Mash avocado and spread on toast.",
        "Top with sliced boiled egg.",
        "Season with salt, pepper, and chili flakes."
      ],
      nutrition: { Calories: 350, Carbs: "32g", Protein: "15g", Fat: "20g" }
    },
    {
      id: 2,
      title: "Quinoa Veggie Bowl",
      category: "lunch",
      img: "assets/images/recipe-quinoa.jpg",
      desc: "A wholesome bowl with quinoa, veggies, and a light dressing.",
      ingredients: [
        "1 cup cooked quinoa",
        "1 cup roasted veggies (carrot, zucchini, peppers)",
        "1 tbsp olive oil",
        "1 tsp lemon juice",
        "Salt & pepper"
      ],
      steps: [
        "Cook quinoa as per package instructions.",
        "Roast veggies with olive oil and seasoning.",
        "Combine quinoa and veggies in a bowl.",
        "Drizzle with lemon juice before serving."
      ],
      nutrition: { Calories: 420, Carbs: "50g", Protein: "12g", Fat: "18g" }
    },
    {
      id: 3,
      title: "Grilled Salmon with Asparagus",
      category: "dinner",
      img: "assets/images/recipe-salmon.jpg",
      desc: "A protein-rich dinner with omega-3 packed salmon.",
      ingredients: [
        "150g salmon fillet",
        "6–8 asparagus spears",
        "1 tbsp olive oil",
        "Garlic powder",
        "Salt & pepper"
      ],
      steps: [
        "Season salmon with garlic, salt, and pepper.",
        "Grill salmon 3–4 mins each side.",
        "Grill asparagus until tender.",
        "Serve together with a drizzle of olive oil."
      ],
      nutrition: { Calories: 480, Carbs: "8g", Protein: "35g", Fat: "30g" }
    },
    {
      id: 4,
      title: "Berry Smoothie",
      category: "snack",
      img: "assets/images/recipe-smoothie.jpg",
      desc: "Refreshing smoothie packed with antioxidants.",
      ingredients: [
        "1 cup mixed berries",
        "1 banana",
        "1/2 cup Greek yogurt",
        "1/2 cup almond milk",
        "1 tsp honey"
      ],
      steps: [
        "Add all ingredients to a blender.",
        "Blend until smooth.",
        "Pour into a glass and serve cold."
      ],
      nutrition: { Calories: 250, Carbs: "45g", Protein: "8g", Fat: "4g" }
    },
    {
      id: 5,
      title: "Chickpea Salad",
      category: "lunch",
      img: "assets/images/recipe-chickpea.jpg",
      desc: "Light yet filling salad with chickpeas and veggies.",
      ingredients: [
        "1 cup boiled chickpeas",
        "1 cucumber (diced)",
        "1 tomato (diced)",
        "1 tbsp olive oil",
        "1 tsp lemon juice",
        "Fresh parsley"
      ],
      steps: [
        "Mix chickpeas, cucumber, and tomato in a bowl.",
        "Add olive oil, lemon juice, and parsley.",
        "Toss and serve fresh."
      ],
      nutrition: { Calories: 320, Carbs: "40g", Protein: "12g", Fat: "10g" }
    }
  ];
  
  // Render Recipe Cards
  const recipeContainer = document.getElementById("recipe-container");
  function displayRecipes(list) {
    recipeContainer.innerHTML = "";
    list.forEach(r => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <img src="${r.img}" alt="${r.title}">
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
      `;
      card.addEventListener("click", () => openModal(r));
      recipeContainer.appendChild(card);
    });
  }
  displayRecipes(recipes);
  
  // Search & Filter
  function filterRecipes() {
    const term = document.getElementById("search").value.toLowerCase();
    const category = document.getElementById("category").value;
    const filtered = recipes.filter(r =>
      r.title.toLowerCase().includes(term) &&
      (category === "all" || r.category === category)
    );
    displayRecipes(filtered);
  }
  document.getElementById("search").addEventListener("input", filterRecipes);
  document.getElementById("category").addEventListener("change", filterRecipes);
  
  // Modal
  const modal = document.getElementById("recipe-modal");
  const closeBtn = document.getElementById("close-modal");
  
  function openModal(recipe) {
    document.getElementById("recipe-title").textContent = recipe.title;
    document.getElementById("recipe-img").src = recipe.img;
    document.getElementById("recipe-desc").textContent = recipe.desc;
  
    const ingList = document.getElementById("recipe-ingredients");
    ingList.innerHTML = "";
    recipe.ingredients.forEach(i => {
      const li = document.createElement("li");
      li.textContent = i;
      ingList.appendChild(li);
    });
  
    const stepList = document.getElementById("recipe-steps");
    stepList.innerHTML = "";
    recipe.steps.forEach(s => {
      const li = document.createElement("li");
      li.textContent = s;
      stepList.appendChild(li);
    });
  
    const nutritionTable = document.getElementById("nutrition-table");
    nutritionTable.innerHTML = `
      <tr><th>Calories</th><td>${recipe.nutrition.Calories}</td></tr>
      <tr><th>Carbs</th><td>${recipe.nutrition.Carbs}</td></tr>
      <tr><th>Protein</th><td>${recipe.nutrition.Protein}</td></tr>
      <tr><th>Fat</th><td>${recipe.nutrition.Fat}</td></tr>
    `;
  
    modal.classList.remove("hidden");
  }
  closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.classList.add("hidden");
  });