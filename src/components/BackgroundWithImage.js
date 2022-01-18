import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  useState,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import SvgComponent from "./Image";

const BackgroundWithImage = (props) => {
  const marginTop = props.marginTop;
  const marginBottom = props.marginBottom;
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.wrapper}>
      <SafeAreaView style={{ ...styles.blueBackground, ...props.style }}>
        <StatusBar barStyle="dark-content" backgroundColor="#EAEEF2" />
        <View style={{ ...styles.titleBox, marginTop: marginTop }}>
          <Text style={styles.title}>Welcome to Steer</Text>
          <SvgComponent style={{ ...styles.image, marginBottom: marginBottom }} />
        </View>
        <View style={styles.whiteBackground}>{props.children}</View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default BackgroundWithImage;

const styles = StyleSheet.create({
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
