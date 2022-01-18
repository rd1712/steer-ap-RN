import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Steps = (props) => {
  return (
    <View>
      <Text style={styles(props).step}>Step {props.num} of 5</Text>
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    step: {
      position: "absolute",
      width: 69,
      height: 19,
      left: 23,
      top: 83,
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: 19,
      color: "#313537",
    },
  });
export default Steps;
