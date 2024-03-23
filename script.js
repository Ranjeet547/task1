// Function to add calorie item
// Function to add calorie item
// Function to add calorie item
function addCalorie() {
    var foodInput = document.getElementById("food");
    var caloriesInput = document.getElementById("calories");
    var mealSelect = document.getElementById("meal");

    var food = foodInput.value;
    var calories = parseInt(caloriesInput.value);
    var meal = mealSelect.value;

    if (food.trim() === "" || isNaN(calories)) {
        alert("Please enter valid food item and calories.");
        return;
    }

    var mealList = document.getElementById(meal + "-list");

    var calorieItem = document.createElement("div");
    calorieItem.className = "calorie-item";
    calorieItem.innerHTML = `<strong>${food}:</strong> ${calories} calories`;

    mealList.appendChild(calorieItem);

    updateCalories(calories);

    // Clear input fields
    foodInput.value = "";
    caloriesInput.value = "";
}

// Function to update total calories, calories burned, and calories remaining
function updateCalories(calories) {
    var totalCaloriesElement = document.getElementById("total");
    var burnCaloriesElement = document.getElementById("burn");
    var remainingCaloriesElement = document.getElementById("remaining");

    var totalCalories = parseInt(totalCaloriesElement.textContent) + calories;
    var burnCalories = Math.floor(totalCalories * 0.2); // Assuming 20% burned
    var remainingCalories = totalCalories - burnCalories;

    totalCaloriesElement.textContent = totalCalories;
    burnCaloriesElement.textContent = burnCalories;
    remainingCaloriesElement.textContent = remainingCalories;
}
