import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ScreenProps } from "react-native-screens";
import { NavigationScreenProp } from "react-navigation";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { CATEGORIES } from "../data/dummy-data";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const CategoriesScreen = (props: Props) => {
  const renderGridItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() =>
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: item.id,
            },
          })
        }
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      numColumns={2}
      renderItem={renderGridItem}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
