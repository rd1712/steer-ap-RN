import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Tick from "../icon-buttons/Tick";

const ProfessionContainer = (props) => {
  return (
    <TouchableOpacity
      style={props.ticker ? styles.professionContainerTicked : styles.professionContainerNotTicked}
      onPress={props.onPress}
    >
      <View style={styles.cardContainer}>
        <props.image />
        <Text style={styles.text}>{props.text}</Text>
      </View>
      <Tick style={styles.tick} ticker={props.ticker} />
    </TouchableOpacity>
  );
};

export default ProfessionContainer;

const styles = StyleSheet.create({
  professionContainerNotTicked: {
    height: "17%",
    width: "90%",
    borderRadius: 8,
    shadowColor: "#000",
    backgroundColor: "transparent",
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 6,
  },
  professionContainerTicked: {
    height: "17%",
    width: "90%",
    borderRadius: 8,
    marginTop: "5%",
    flexDirection: "row",
    borderColor: "#004475",
    borderWidth: 2,
    justifyContent: "space-between",
    padding: "1%",
  },
  text: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 22,
    flex: 1,
    marginLeft: "10%",
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
