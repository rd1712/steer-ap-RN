import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import ProfessionContainer from "../../components/ProfessionContainer";
import Aspirant from "../../icon-buttons/Aspirant";
import Mentor from "../../icon-buttons/Mentor";

const profileType = ({ navigation }) => {
  const [aspirantTicker, setAspirantTicker] = useState(false);
  const [mentorTicker, setMentorTicker] = useState(false);
  return (
    <BackgroundCreateAccount
      progressNumber={2}
      whiteBoxHeading={"Let us get to know you!"}
      previousNavigation={() => navigation.navigate("basicInfo")}
      nextNavigation={() => navigation.navigate("examsSelection")}
      nextCondition={mentorTicker || aspirantTicker}
    >
      <Text style={styles.subheading}>Select the options that describes you best. You can also be both!</Text>
      <ProfessionContainer
        image={Aspirant}
        text={"Aspirant"}
        onPress={() => {
          setAspirantTicker(true), setMentorTicker(false);
        }}
        ticker={aspirantTicker}
      />
      <ProfessionContainer
        image={Mentor}
        text={"Mentor"}
        onPress={() => {
          setMentorTicker(true), setAspirantTicker(false);
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
    marginTop: "12%",
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
