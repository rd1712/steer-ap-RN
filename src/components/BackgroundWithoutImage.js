import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

const BackgroundWithoutImage = (props) => {
  return (
    <SafeAreaView style={styles.blueBackground}>
      <StatusBar barStyle="dark-content" backgroundColor="#EAEEF2" />
      <View style={styles.titleBox}>
        <Text style={styles.title}>Welcome to Steer</Text>
      </View>
      <View style={styles.whiteBackground}>{props.children}</View>
    </SafeAreaView>
  );
};

export default BackgroundWithoutImage;

const styles = StyleSheet.create({
  blueBackground: {
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
  },
  title: {
    fontFamily: "Nunito-Regular",
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
});
