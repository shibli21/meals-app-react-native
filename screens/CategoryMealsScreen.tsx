import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const CategoryMealScreen = (props: Props) => {
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

export default CategoryMealScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
