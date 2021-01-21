export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

export const toggleFavorite = (id: number) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilter = (filterSettings: any) => {
  return { type: SET_FILTERS, filter: filterSettings };
};
