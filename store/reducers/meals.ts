import { Action } from "redux";
import { MEALS } from "./../../data/dummy-data";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action: Action) => {
  return state;
};

export default mealReducer;
