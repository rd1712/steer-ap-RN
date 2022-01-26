// Modules
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// Components
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import ProfessionContainer from "../../components/ProfessionContainer";
import School from "../../icon-buttons/School";
import College from "../../icon-buttons/College";
import Work from "../../icon-buttons/Work";

// Redux
import * as actions from "../../store/actions";

const profession = ({ navigation }) => {
  // Hooks
  const dispatch = useDispatch();
  const profileType = useSelector((state) => state.onboarding.profileType);

  const [schoolTicker, setSchoolTicker] = useState(false);
  const [collegeTicker, setCollegeTicker] = useState(false);
  const [workTicker, setWorkTicker] = useState(false);
  const [checkedValue, setCheckedValue] = useState();

  return (
    <BackgroundCreateAccount
      progressNumber={5}
      whiteBoxHeading={"Let us get to know you!"}
      previousNavigation={() => {
        navigation.goBack();
      }}
      nextNavigation={() => {
        let profession;
        if (schoolTicker) profession = "school";
        else if (collegeTicker) profession = "college";
        else if (workTicker) profession = "work";

        dispatch(actions.addProfession(profession));
        if (checkedValue === 1 || checkedValue === 2)
          navigation.navigate("institutionName", { paramKey: checkedValue });
        else {
          navigation.navigate("loadingScreen");
        }
      }}
      nextCondition={schoolTicker || collegeTicker || workTicker}
      prevCondition={true}
    >
      <Text style={styles.subheading}>Select the options that describes you best. You’re in...</Text>
      <ProfessionContainer
        image={School}
        text={"School"}
        onPress={() => {
          setSchoolTicker(true), setCollegeTicker(false), setWorkTicker(false), setCheckedValue(1);
        }}
        ticker={schoolTicker}
      />
      <ProfessionContainer
        image={College}
        text={"College/University"}
        key={2}
        onPress={() => {
          setSchoolTicker(false), setCollegeTicker(true), setWorkTicker(false), setCheckedValue(2);
        }}
        ticker={collegeTicker}
      />
      <ProfessionContainer
        image={Work}
        text={"Work"}
        onPress={() => {
          setSchoolTicker(false), setCollegeTicker(false), setWorkTicker(true), setCheckedValue(3);
        }}
        ticker={workTicker}
      />
      <Text style={styles.footerText}>If you are taking a gap year, please select your last institution</Text>
    </BackgroundCreateAccount>
  );
};

export default profession;

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
  footerText: {
    width: "65%",
    textAlign: "center",
    marginTop: "5%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "#313537",
  },
});
