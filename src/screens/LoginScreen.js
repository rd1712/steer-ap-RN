import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "../scripts/firebase-test";
import * as actions from "../store/actions";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const loginUsingGoogle = async () => {
    try {
      await dispatch(actions.loginUsingGoogle());
      // navigation.navigate("HomeScreen");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SafeAreaView>
      <Text>This is the Login Screen</Text>
      <Button title="Google" onPress={() => loginUsingGoogle()} />
      {/* <Button title="Fetch Users" onPress={fetchUsers} /> */}
    </SafeAreaView>
  );
};

export default LoginScreen;
