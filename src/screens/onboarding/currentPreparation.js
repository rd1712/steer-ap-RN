import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import AssessContainer from "../../components/AssessContainer";
import AssessBarGraph from "../../icon-buttons/AssessBarGraph";

const currentPreparation = ({ navigation }) => {
  const [beginnerChecker, setBeginnerChecker] = useState(false);
  const [intermediateChecker, setIntermediateChecker] = useState(false);
  const [advancedChecker, setAdvancedChecker] = useState(false);
  return (
    <BackgroundCreateAccount
      progressNumber={4}
      whiteBoxHeading={"Please self assess yourself"}
      previousNavigation={() => navigation.navigate("examsSelection")}
      nextNavigation={() => navigation.navigate("schoolOrWork")}
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
    marginTop: "12%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "#313537",
  },
});
