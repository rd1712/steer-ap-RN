// Modules
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import AssessContainer from "../../components/AssessContainer";
import AssessBarGraph from "../../icon-buttons/AssessBarGraph";

// Redux
import * as actions from "../../store/actions";

const currentPreparation = ({ navigation, route }) => {
  // Hooks
  const dispatch = useDispatch();

  const [beginnerChecker, setBeginnerChecker] = useState(false);
  const [intermediateChecker, setIntermediateChecker] = useState(false);
  const [advancedChecker, setAdvancedChecker] = useState(false);

  const { exam, forProfileType, profileType } = route.params;

  return (
    <BackgroundCreateAccount
      progressNumber={4}
      whiteBoxHeading={"Please self assess yourself"}
      previousNavigation={() => navigation.goBack()}
      nextNavigation={() => {
        let skillLevel = 0;
        if (beginnerChecker) skillLevel = 0;
        else if (intermediateChecker) skillLevel = 1;
        else if (advancedChecker) skillLevel = 2;

        dispatch(actions.upsertExam(forProfileType, { index: 0, examId: exam, skillLevel }));
        navigation.navigate("examsSelection", { forProfileType, profileType });
      }}
      prevCondition={true}
      nextCondition={beginnerChecker || intermediateChecker || advancedChecker}
    >
      <Text style={styles.subheading}>Select what fits you the best right now</Text>
      <AssessContainer
        image={AssessBarGraph}
        assessNumber={1}
        heading={"Beginner"}
        subheading={"I am just starting preparations"}
        onPress={() => {
          setBeginnerChecker(true), setIntermediateChecker(false), setAdvancedChecker(false);
        }}
        ticker={beginnerChecker}
      />
      <AssessContainer
        image={AssessBarGraph}
        assessNumber={2}
        heading={"Intermediate"}
        subheading={"I am well-versed with concepts,need polishing"}
        onPress={() => {
          setBeginnerChecker(false), setIntermediateChecker(true), setAdvancedChecker(false);
        }}
        ticker={intermediateChecker}
      />
      <AssessContainer
        image={AssessBarGraph}
        assessNumber={3}
        heading={"Advanced"}
        subheading={"I’m only revising & I’m ready for the exam"}
        onPress={() => {
          setBeginnerChecker(false), setIntermediateChecker(false), setAdvancedChecker(true);
        }}
        ticker={advancedChecker}
      />
    </BackgroundCreateAccount>
  );
};

export default currentPreparation;

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
});
