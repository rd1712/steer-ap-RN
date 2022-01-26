// Modules
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

// Components
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import ProfessionContainer from "../../components/ProfessionContainer";
import Aspirant from "../../icon-buttons/Aspirant";
import Mentor from "../../icon-buttons/Mentor";

// Redux
import * as actions from "../../store/actions";

const profileType = ({ navigation }) => {
  // Hooks
  const dispatch = useDispatch();

  const [aspirantTicker, setAspirantTicker] = useState(false);
  const [mentorTicker, setMentorTicker] = useState(false);

  return (
    <BackgroundCreateAccount
      progressNumber={2}
      whiteBoxHeading={"Let us get to know you!"}
      nextCondition={mentorTicker || aspirantTicker}
      prevCondition={true}
      // PREVIOUS
      previousNavigation={() => navigation.goBack()}
      // NEXT
      nextNavigation={() => {
        let profileType;
        if (aspirantTicker && mentorTicker) profileType = "both";
        else if (aspirantTicker && !mentorTicker) profileType = "aspirant";
        else if (mentorTicker && !aspirantTicker) profileType = "mentor";

        dispatch(actions.addProfileType(profileType));

        if (profileType === "both" || profileType === "aspirant")
          navigation.navigate("examsSelection", { forProfileType: "aspirant", profileType });
        else navigation.navigate("examsSelection", { forProfileType: "mentor", profileType });
      }}
    >
      <Text style={styles.subheading}>Select the options that describes you best. You can also be both!</Text>
      <ProfessionContainer
        image={Aspirant}
        text={"Aspirant"}
        onPress={() => {
          setAspirantTicker(!aspirantTicker);
        }}
        ticker={aspirantTicker}
      />
      <ProfessionContainer
        image={Mentor}
        text={"Mentor"}
        onPress={() => {
          setMentorTicker(!mentorTicker);
        }}
        ticker={mentorTicker}
      />
      {/* <View style={styles.buttonContainer}>
                <BlueButton
                    disabled={false}
                    title={"Previous"}
                    style={{ color: "#004475", width: 60 }}
                    onPress={() => navigation.navigate("D")}
                />
                <BlueButton color={!(aspirantTicker || mentorTicker) ? "#CFCFCF" : "#004475"}
                    disabled={!(aspirantTicker || mentorTicker)}
                    title={"Continue"}
                />
            </View> */}
    </BackgroundCreateAccount>
  );
};

export default profileType;

const styles = StyleSheet.create({
  subheading: {
    width: "85%",
    marginTop: "2%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "#313537",
  },
  // buttonContainer: {
  //     marginTop: "3%",
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     width: "80%",
  // },
});
