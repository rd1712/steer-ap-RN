import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import ProgressIndicator from "./ProgressIndicator";
import BlueButton from "./BlueButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const BackgroundCreateAccount = (props, { navigation }) => {
  return (
    <KeyboardAwareScrollView contentContainerStyle={{ minHeight: "100%" }}>
      <SafeAreaView style={styles.blueBackground}>
        <StatusBar barStyle="dark-content" backgroundColor="#EAEEF2" />
        <View style={styles.titleBox}>
          <Text style={styles.title}>Create Account</Text>
          <ProgressIndicator progressNumber={props.progressNumber} style={{ marginTop: "5%" }} />
        </View>
        <View style={styles.whiteBackground}>
          <Text style={styles.whiteBoxHeading}>{props.whiteBoxHeading}</Text>
          <View></View>
          {props.children}
          <View
            style={{ ...styles.buttonContainer, justifyContent: props.prevCondition ? "space-between" : "flex-end" }}
          >
            {props.prevCondition ? (
              <BlueButton
                title={"Previous"}
                textStyle={{ color: "#004475", width: 60 }}
                onPress={props.previousNavigation}
              />
            ) : (
              <></>
            )}
            <BlueButton
              color={props.nextCondition ? "#004475" : "#CFCFCF"}
              disabled={!props.nextCondition}
              title={"Continue"}
              onPress={props.nextNavigation}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default BackgroundCreateAccount;

const styles = StyleSheet.create({
  blueBackground: {
    flex: 1,
    backgroundColor: "#EAEEF2",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  whiteBackground: {
    flex: 1,
    marginTop: "5%",
    backgroundColor: "#FDFDFD",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    shadowColor: "#D6DEE3",
    alignItems: "center",
    // height: "100%"
    // justifyContent: "space-between"
  },
  title: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.02,
    color: "#004475",
  },
  titleBox: {
    marginTop: "10%",
    alignItems: "center",
  },
  whiteBoxHeading: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    color: "#313537",
    marginTop: "10%",
    textAlign: "left",
    width: "85%",
  },
  buttonContainer: {
    marginTop: "3%",
    flexDirection: "row",

    width: "80%",
  },
});
