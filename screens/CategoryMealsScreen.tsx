import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { CATEGORIES } from "../data/dummy-data";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const CategoryMealsScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Category MealScreen </Text>
      <Button
        title="go to meal detail"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />
    </View>
  );
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
