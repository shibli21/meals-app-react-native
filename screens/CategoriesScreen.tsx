import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const CategoriesScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text></Text>
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
