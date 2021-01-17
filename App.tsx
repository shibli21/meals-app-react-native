import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

const fetchFonts = async () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState<Boolean>(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        onError={() => console.log("ada")}
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
});
