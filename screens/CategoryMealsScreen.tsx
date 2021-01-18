import React from "react";
import { StyleSheet } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import MealList from "../components/MealList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const CategoryMealsScreen = (props: Props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;

CategoryMealsScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}) => {
  const catId = navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory?.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
