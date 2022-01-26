import { Text, Button, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{ flex: 1, width: "100%", height: "100%", padding: "10%", justifyContent: "center", alignItems: "center" }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#EAEEF2" />
      <Text style={{ fontSize: 24, padding: 5 }}>Welcome to Steer</Text>
      <Button title="Logout" onPress={() => dispatch(actions.logout())}></Button>
    </SafeAreaView>
  );
};

export default Home;
