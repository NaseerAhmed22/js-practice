const recipe_container = document.querySelector(".recipe");
const favrt_recipe_container = document.querySelector(".fav-recipe");
const searchInput = document.querySelector('.search-input');


async function getData() {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const responseData = await response.json()
    const randomRecipes = responseData.meals[0]
    console.log(randomRecipes);
    addRecipe(randomRecipes)

}

getData();

async function getMeelById(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const responseData = await response.json()
    const meal = responseData.meals[0]
    return meal

}

async function getNameBySearch (name) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const responseData = await response.json()
    const meals = responseData.meals;
    return meals;
}


function addRecipe(recipe) {
    const recipe_card = document.createElement('div');
    recipe_card.classList.add('recipe-card');
    recipe_card.innerHTML = `
    <div class="recipe-card">
    <div class="recipe-img-container">
    <img src="${recipe.strMealThumb}" alt="">
    </div>
    <div class="recipe-name">
    <p>${recipe.strMeal}</p>
    <i class="fa-regular fa-star"></i>
    </div>
    </div>


`
    recipe_container.appendChild(recipe_card);
    
    const btn = recipe_card.querySelector('.fa-star');
    btn.addEventListener('click', () => {
        if (btn.classList.contains('fa-regular')) {
            btn.setAttribute('class', 'fa-solid fa-star')
            addMealToFav(recipe.idMeal)
           
        } else {
            btn.setAttribute('class', 'fa-regular fa-star')
           
        }
    })
};


function addMealToFav(meal){
const fav_meal = document.createElement('div');
fav_meal.innerHTML = `

<div class="single">
<div class="top">
    <div class="img-container">
        <img src="${meal.strMealThumb}">
    </div>
    <div class="text">
        <p>${meal.strMeal}</p>
    </div>
</div>
</div>


`
favrt_recipe_container.appendChild(fav_meal);
}


searchInput.addEventListener("keydown", async () => {
recipe_container.innerHTML = ''
const searchVal = searchInput.value;
const meals = await getNameBySearch(searchVal)
if(meals) {
meals.forEach(meal => {
addRecipe(meal)
})
}
})

