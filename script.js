const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// search meal and featch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEl.innerHTML = "";

  // Get search term
  const term = search.value;

  // check for empty
  if (term.trim()) {
    console.log(term);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  } else {
    alert("Please enter a search term");
  }
}

// Event listener
submit.addEventListener("submit", searchMeal);
