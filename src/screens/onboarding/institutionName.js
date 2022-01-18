import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import School from "../../icon-buttons/School";
import College from "../../icon-buttons/College";
import TextInputContainer from "../../components/TextInputContainer";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const institutionName = ({ route, navigation }) => {
  const [enteredValue, setEnteredValue] = useState("");
  if (route.params.paramKey === 1)
    return (
      <BackgroundCreateAccount
        progressNumber={5}
        whiteBoxHeading={"School Name"}
        nextCondition={enteredValue !== ""}
        previousNavigation={() => navigation.navigate("schoolOrWork")}
        nextNavigation={() => navigation.navigate("loadingScreen")}
      >
        <School style={{ marginTop: "30%" }} />
        <Text style={styles.text}>School Name</Text>
        <TextInputContainer
          placeholder={"School name"}
          style={{ marginTop: 7, paddingLeft: "6%" }}
          blurOnSubmit
          autoCorrect={false}
          value={enteredValue}
          onChangeText={(value) => setEnteredValue(value)}
        />
      </BackgroundCreateAccount>
    );
  else
    return (
      <BackgroundCreateAccount
        progressNumber={5}
        whiteBoxHeading={"College/University Name"}
        nextCondition={enteredValue !== ""}
        previousNavigation={() => navigation.navigate("schoolOrWork")}
        nextNavigation={() => navigation.navigate("loadingScreen")}
      >
        <College style={{ marginTop: "30%" }} />
        <Text style={styles.text}>College/University Name</Text>
        <TextInputContainer
          placeholder={"College/University name"}
          style={{ marginTop: 7, paddingLeft: "6%" }}
          blurOnSubmit
          autoCorrect={false}
          value={enteredValue}
          onChangeText={(value) => setEnteredValue(value)}
        />
      </BackgroundCreateAccount>
    );
};

export default institutionName;

const styles = StyleSheet.create({
  text: {
    textAlign: "left",
    marginTop: "10%",
    marginLeft: "7%",
    width: "80%",
    marginBottom: "5%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    /* identical to box height */

    color: "#313537",
  },
});
