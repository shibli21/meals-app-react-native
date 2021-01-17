import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationScreenProp } from "react-navigation";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
const FavoritesScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text>Favorites Screen</Text>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
