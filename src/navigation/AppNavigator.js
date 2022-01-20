import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "./Onboarding";
import Login from "./Login";

import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  const user = useSelector((state) => state.session.user);
  console.log();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {Object.keys(user).length === 0 ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <Stack.Screen name="Onboarding" component={Onboarding} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
