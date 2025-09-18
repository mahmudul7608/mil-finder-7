const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal"),
  promoBanner = document.getElementById("promo-banner"),
  loadMoreBtn = document.getElementById("load-more");

let currentMeals = [];
let currentIndex = 0;
const itemsPerPage = 6;

// Render meals with pagination (6 items per page)
function renderMeals() {
  const nextItems = currentMeals.slice(currentIndex, currentIndex + itemsPerPage);

  nextItems.forEach(meal => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("meal");

    mealCard.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <div class="p-4">
        <div>
          <h3>${meal.strMeal}</h3>
          <p>${meal.strCategory || ""} · ${meal.strArea || ""}</p>
        </div>
        <button class="add-btn" data-mealID="${meal.idMeal}">➕ Add to Cart</button>
      </div>
    `;
    mealsEl.appendChild(mealCard);
  });

  currentIndex += itemsPerPage;

  // Show or hide Load More
  if (currentIndex >= currentMeals.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();
  single_mealEl.innerHTML = "";
  mealsEl.innerHTML = "";
  currentMeals = [];
  currentIndex = 0;

  const term = search.value.trim();
  if (!term) return alert("Please enter a search term");

  if (promoBanner) promoBanner.style.display = "none";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    .then(res => res.json())
    .then(data => {
      if (data.meals === null) {
        resultHeading.innerHTML = `<p>No results found. Try again!</p>`;
        loadMoreBtn.style.display = "none";
      } else {
        resultHeading.innerHTML = `<h3>Search results for '${term}':</h3>`;
        currentMeals = data.meals;
        renderMeals(); // প্রথম ৬টা show করবে
      }
    });
  search.value = "";
}

// Event listeners
submit.addEventListener("click", searchMeal);
loadMoreBtn.addEventListener("click", renderMeals);

// Add to cart click
mealsEl.addEventListener("click", e => {
  if (e.target.classList.contains("add-btn")) {
    const mealID = e.target.getAttribute("data-mealid");
    alert(`Meal ID ${mealID} added to cart ✅`);
  }
});
