import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { useSelector } from "react-redux";
import MealItem from "./MealItem";

interface Props {
  navigation: NavigationScreenProp<any, any>;
  listData: any;
}

const MealList = (props: Props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  const renderMealItem = ({ item }: any) => {
    const isFav = favoriteMeals.some((meal) => meal.id === item.id);

    return (
      <MealItem
        title={item.title}
        image={item.imageUrl}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: item.id,
              mealTitle: item.title,
              isFav: isFav,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default MealList;
