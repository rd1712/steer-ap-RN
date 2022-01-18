import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AccountMadeImage from "../../icon-buttons/AccountMadeImage";

const loadingScreen = (props) => {
  const marginTop = props.marginTop;
  const marginBottom = props.marginBottom;
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <SafeAreaView style={{ ...styles.blueBackground, ...props.style }}>
        <StatusBar barStyle="dark-content" backgroundColor="#EAEEF2" />
        <View style={{ ...styles.titleBox, marginTop: marginTop }}></View>
        <View style={styles.whiteBackground}>
          <Text style={styles.heading}>Creating your account</Text>
          <Text style={styles.subheading}>This will just take a second.</Text>
          <AccountMadeImage style={{ marginTop: "10%" }} />
          <Text style={styles.footer}>Remember good things come to those who wait ;)</Text>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default loadingScreen;

const styles = StyleSheet.create({
  heading: {
    marginTop: "20%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 16,
    lineHeight: 25,
    /* identical to box height */

    color: "#313537",
  },
  subheading: {
    marginTop: "0%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    /* identical to box height */

    color: "#313537",
  },
  footer: {
    marginTop: "15%",
    width: "50%",
    textAlign: "center",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    /* identical to box height */

    color: "#313537",
  },
  blueBackground: {
    backgroundColor: "#EAEEF2",
    width: "100%",
    height: "100%",
  },
  title: {
    fontFamily: "Nunito-Regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.02,
    color: "#004475",
    marginTop: "20%",
  },
  titleBox: {
    alignItems: "center",
  },
  image: {
    marginTop: "10%",
  },
  whiteBackground: {
    flex: 1,
    marginTop: "10%",
    width: "100%",
    backgroundColor: "white",
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    shadowColor: "#D6DEE3",
    elevation: 5,
    alignItems: "center",
    borderColor: "red",
    paddingVertical: 10,
  },
  wrapper: {
    flexGrow: 1,
  },
});
