import { MEALS } from "./../../data/dummy-data";
import { TOGGLE_FAVORITE } from "./../actions/meals";

type Meals = {
  id: string;
  categoryIds: Array<string>;
  title: string;
  affordability: string;
  complexity: string;
  imageUrl: string;
  duration: number;
  ingredients: Array<string>;
  steps: Array<string>;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
};

type State = {
  meals: Meals[];
  filteredMeals: Meals[];
  favoriteMeals: Meals[];
};

const initialState: State = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavoriteMeal = [...state.favoriteMeals];
        updatedFavoriteMeal.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavoriteMeal };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal!!) };
      }

    default:
      return state;
  }
};

export default mealReducer;
