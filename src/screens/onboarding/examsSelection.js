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

const examsSelection = ({ navigation, route }) => {
  // Hooks
  const dispatch = useDispatch();
  const examList = useSelector((state) => state.metadata.examList);

  const { forProfileType, profileType } = route.params;

  useEffect(async () => {
    console.log(forProfileType);
    dispatch(actions.fetchExamList());
  }, []);

  const [examText, setExamText] = useState("");
  const [examPickerVisible, setExamPickerVisible] = useState(false);

  return (
    <BackgroundCreateAccount
      progressNumber={3}
      whiteBoxHeading={"Let us get to know you!"}
      prevCondition={true}
      nextCondition={examText !== ""}
      // PREVIOUS
      previousNavigation={() => navigation.goBack()}
      // NEXT
      nextNavigation={() => {
        if (forProfileType === "aspirant" && profileType === "both")
          navigation.push("examsSelection", { forProfileType: "mentor", profileType });
        else navigation.navigate("profession");
      }}
    >
      <Text style={styles.subheading}>
        {forProfileType === "aspirant"
          ? "Choose the exam you are preparing for"
          : "Choose the exam you are mentoriing for"}
      </Text>
      <Text style={styles.examText}>Exam</Text>
      <GreyContainer
        Placeholder="You identify as"
        Text={examText}
        OnPress={() => {
          setExamPickerVisible(true);
        }}
      />
      <Picker
        data={examList}
        label={"name"}
        value={"name"}
        onValueChange={(value) => {
          console.log(value, forProfileType);
          setExamText(value);
          if (forProfileType === "aspirant")
            navigation.push("currentPreparation", { exam: value, profileType, forProfileType });
          else if (forProfileType === "mentor")
            navigation.navigate("uploadDocument", { exam: value, profileType, forProfileType });
        }}
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
    marginTop: "5%",
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
    alignSelf: "flex-start",
    marginLeft: "10%",
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
