import * as React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";

import store, { persistor } from "./src/store/";
import AppNavigator from "./src/navigation/AppNavigator";

const renderLoading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
  </View>
);

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={renderLoading()}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
