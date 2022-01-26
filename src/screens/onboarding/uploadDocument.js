// Modules
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import GreyContainer from "../../components/GreyContainer";
import Picker from "../../components/Picker";

// Redux
import * as actions from "../../store/actions";

const uploadDocument = ({ navigation, route }) => {
  // Hooks
  const dispatch = useDispatch();
  const examList = useSelector((state) => state.metadata.examList);

  const { exam, forProfileType, profileType } = route.params;

  const [examText, setExamText] = useState("");
  const [examPickerVisible, setExamPickerVisible] = useState(false);

  return (
    <BackgroundCreateAccount
      progressNumber={4}
      whiteBoxHeading={"Let us get to know you!"}
      previousNavigation={() => navigation.goBack()}
      nextNavigation={() => {
        dispatch(actions.upsertExam(forProfileType, { index: 0, examId: exam, document: "doc" }));
        navigation.navigate("examsSelection", { forProfileType, profileType });
      }}
      nextCondition={true}
      prevCondition={true}
    >
      <Text style={styles.subheading}>Upload Documents</Text>
    </BackgroundCreateAccount>
  );
};

export default uploadDocument;

const styles = StyleSheet.create({
  subheading: {
    width: "85%",
    marginTop: "12%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "#313537",
  },
  examText: {
    textAlign: "left",
    marginTop: "10%",
    marginLeft: "-63%",
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
