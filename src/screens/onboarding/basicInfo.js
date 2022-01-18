import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import DateTimePicker from "@react-native-community/datetimepicker";

import Picker from "../../components/Picker";
import GreyContainer from "../../components/GreyContainer";
import { stateData } from "../../data/StateData";
import { genderData } from "../../data/GenderData";

const basicInfo = (props) => {
  const [date, setDate] = useState(new Date());
  const [isDateSet, setIsDateSet] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [genderPickerVisible, setGenderPickerVisible] = useState(false);
  const [statePickerVisible, setStatePickerVisible] = useState(false);
  const [genderText, setGenderText] = useState("");
  const [stateText, setStateText] = useState("");
  const [dateChecker, setDateChecker] = useState(false);
  const [genderChecker, setGenderChecker] = useState(false);
  const [stateChecker, setStateChecker] = useState(false);

  const formatDate = (date) => {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return "" + (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;
  };

  return (
    <BackgroundCreateAccount
      progressNumber={1}
      whiteBoxHeading={"Let us get to know you!"}
      previousNavigation={() => {
        console.log("Previous");
        // props.navigation.navigate("C", { paramKey: "99999999999"
      }}
      nextNavigation={() => props.navigation.navigate("profileType")}
      nextCondition={dateChecker && stateChecker && genderChecker}
    >
      <Text style={styles.heading}>Date of Birth</Text>
      <GreyContainer
        Placeholder="Date of Birth"
        Text={isDateSet ? formatDate(date) : ""}
        OnPress={() => {
          setDatePickerVisible(true);
        }}
      />
      {datePickerVisible ? (
        <DateTimePicker
          value={date}
          mode="date"
          showIcon={false}
          onChange={(e, date) => {
            setDatePickerVisible(false);

            if (e.type === "set") {
              setDate(date);
              setIsDateSet(true);
              setDateChecker(true);
            }
          }}
        />
      ) : null}
      <Text style={styles.gender}>Gender</Text>
      <GreyContainer
        Placeholder="You identify as"
        Text={genderText}
        OnPress={() => {
          setGenderPickerVisible(true);
        }}
      />
      <Picker
        data={genderData}
        label={"name"}
        value={"value"}
        onValueChange={(value) => setGenderText(value)}
        visible={genderPickerVisible}
        setVisibility={setGenderPickerVisible}
        checker={() => {
          setGenderChecker(true);
        }}
      />
      <Text style={styles.state}>State</Text>
      <GreyContainer
        Placeholder="Which State so you live in?"
        Text={stateText}
        OnPress={() => {
          setStatePickerVisible(true);
        }}
      />
      <Picker
        data={stateData}
        label={"name"}
        value={"value"}
        onValueChange={(value) => setStateText(value)}
        visible={statePickerVisible}
        setVisibility={setStatePickerVisible}
        checker={() => {
          setStateChecker(true);
        }}
      />
    </BackgroundCreateAccount>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "#313537",
    marginTop: "20%",
    marginLeft: "-55%",
    marginBottom: "5%",
  },
  date: {
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
  gender: {
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
  state: {
    marginTop: "10%",
    marginLeft: "-64%",
    marginBottom: "5%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    /* identical to box height */

    color: "#313537",
  },
  dropDownPicker: {
    width: "85%",
    alignSelf: "center",
    backgroundColor: "#F2F2F4",
    borderRadius: 16,
    borderWidth: 0,
    paddingLeft: "6%",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "rgba(0, 0, 0, 0.87)",
  },
  placeholder: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "rgba(0, 0, 0, 0.32)",
  },
  // buttonContainer: {
  //   marginTop: "3%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "80%",
  // },
});
export default basicInfo;
