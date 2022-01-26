import React, { useEffect, useRef, useState } from "react";
import { Button, Text, AppState, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../store/actions";

const TryScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
          <Text> Card Content </Text>
          <Button onPress={dispatch(actions.fetchExams())}></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 16,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    // borderWidth: 1,
    borderColor: "blue",
    overflow: "hidden",
    // flex: 1,
  },
});

export default TryScreen;
