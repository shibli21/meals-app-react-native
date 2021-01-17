import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const CategoriesScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
        title="go to meals"
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
          });
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
