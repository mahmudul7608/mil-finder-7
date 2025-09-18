const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();
  single_mealEl.innerHTML = "";

  const term = search.value.trim();
  if (!term) return alert("Please enter a search term");

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
      mealsEl.innerHTML = "";
      if (data.meals === null) {
        resultHeading.innerHTML = `<p>No results found. Try again!</p>`;
      } else {
        resultHeading.innerHTML = `<h3>Search results for '${term}':</h3>`;
        data.meals.forEach(meal => {
          const mealCard = document.createElement("div");
          mealCard.classList.add("meal");
          mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <div class="meal-info" data-mealID="${meal.idMeal}">
              <h3>${meal.strMeal}</h3>
              <p>${meal.strCategory || ""} · ${meal.strArea || ""}</p>
            </div>
            <button class="add-btn" data-mealID="${meal.idMeal}">Add to Cart</button>
          `;
          mealsEl.appendChild(mealCard);
        });
      }
    });
  search.value = "";
}

// Event listener
submit.addEventListener("click", searchMeal);

// Add to cart click
mealsEl.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn")) {
    const mealID = e.target.getAttribute("data-mealid");
    alert(`Meal ID ${mealID} added to cart ✅`);
  }
});
