import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const CategoryMealScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Category MealScreen </Text>
    </View>
  );
};

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
