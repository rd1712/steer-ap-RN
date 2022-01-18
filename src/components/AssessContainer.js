import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
// import { color } from "react-native-reanimated";
import Tick from "../icon-buttons/Tick";

const AssessContainer = (props) => {
  return (
    <TouchableOpacity
      style={props.ticker ? styles.professionContainerTicked : styles.professionContainerNotTicked}
      onPress={props.onPress}
    >
      <View style={styles.cardContainer}>
        <props.image assessNumber={props.assessNumber} />
        <View style={{ marginLeft: "10%", flex: 1, width: "100%" }}>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.subheading}>{props.subheading}</Text>
        </View>
      </View>
      <Tick style={styles.tick} ticker={props.ticker} />
    </TouchableOpacity>
  );
};

export default AssessContainer;

const styles = StyleSheet.create({
  professionContainerNotTicked: {
    height: "20%",
    width: "90%",
    borderRadius: 8,
    shadowColor: "#000",
    backgroundColor: "transparent",
    margin: "2%",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 6,
  },
  professionContainerTicked: {
    height: "20%",
    width: "90%",
    borderRadius: 8,
    margin: "2%",
    flexDirection: "row",
    padding: "1%",
    borderColor: "#004475",
    borderWidth: 2,
    justifyContent: "space-between",
  },
  heading: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 24,
    color: "#313537",
  },
  subheading: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 10,
    lineHeight: 14,
    textAlign: "left",
    color: "#313537",
  },
  tick: {
    marginTop: "1%",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: "10%",
  },
});
