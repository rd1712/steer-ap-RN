import * as React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/store/";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
