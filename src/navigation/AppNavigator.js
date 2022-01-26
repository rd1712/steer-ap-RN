import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./Onboarding";
import Login from "./Login";
import Home from "../screens/home/index";

import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  const user = useSelector((state) => state.session.user);
  // const user = { name: "Deepesh" };
  const onboardingDone = useSelector((state) => state.onboarding.onboardingDone);

  let navigateTo = Login;
  if (Object.keys(user).length > 0) {
    navigateTo = Onboarding;
    if (onboardingDone) navigateTo = Home;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={navigateTo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
