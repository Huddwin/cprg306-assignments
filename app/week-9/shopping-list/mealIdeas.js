"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-white">
        {ingredient ? `Meal ideas for " ${ingredient}"` : `Meal ideas (select an item)`}
      </h2>
      {ingredient ? (
        <div>
          {meals.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {meals.map((meal) => (
                <div key={meal.idMeal} className="p-4 bg-gray-900 text-white rounded border border-white">
                  {meal.strMeal}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No meals found.</p>
          )}
        </div>
      ) : (
        <p className="text-gray-600">Choose an item to see ideas.</p>
      )}
    </div>
  );
}