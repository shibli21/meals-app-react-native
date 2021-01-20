import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import React, { useState } from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import MealsNavigator from "./navigation/MealsNavigator";
import mealReducer from "./store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({ meals: mealReducer });

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
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

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
