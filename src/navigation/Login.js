import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import loginOptions from "../screens/login/loginOptions";
import enterOTP from "../screens/login/enterOTP";

const Login = createNativeStackNavigator();

export default LoginScreen = () => (
  <Login.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Login.Screen name="loginOptions" component={loginOptions} />
    <Login.Screen name="enterOTP" component={enterOTP} />
  </Login.Navigator>
);
