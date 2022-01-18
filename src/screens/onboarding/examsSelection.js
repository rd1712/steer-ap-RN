import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import GreyContainer from "../../components/GreyContainer";
import Picker from "../../components/Picker";
import { examData } from "../../data/ExamData";

const examsSelection = ({ navigation }) => {
  const [examText, setExamText] = useState("");
  const [examPickerVisible, setExamPickerVisible] = useState(false);
  return (
    <BackgroundCreateAccount
      progressNumber={3}
      whiteBoxHeading={"Let us get to know you!"}
      previousNavigation={() => navigation.navigate("profileType")}
      nextNavigation={() => navigation.navigate("currentPreparation")}
      nextCondition={examText !== ""}
    >
      <Text style={styles.subheading}>Choose the exam you are preparing for</Text>
      <Text style={styles.examText}>Exam</Text>
      <GreyContainer
        Placeholder="You identify as"
        Text={examText}
        OnPress={() => {
          setExamPickerVisible(true);
        }}
      />
      <Picker
        data={examData}
        label={"name"}
        value={"value"}
        onValueChange={(value) => setExamText(value)}
        visible={examPickerVisible}
        setVisibility={setExamPickerVisible}
        checker={() => {
          null;
        }}
      />
    </BackgroundCreateAccount>
  );
};

export default examsSelection;

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
