// Modules
import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";

// Components
import BackgroundCreateAccount from "../../components/BackgroundCreateAccount";
import Picker from "../../components/Picker";
import GreyContainer from "../../components/GreyContainer";
import TextInputContainer from "../../components/TextInputContainer";

// Data
import { stateData } from "../../data/StateData";
import { genderData } from "../../data/GenderData";

// Redux
import * as actions from "../../store/actions";

const basicInfo = (props) => {
  // Hooks
  const dispatch = useDispatch();
  const authType = useSelector((state) => state.session.type);

  const [date, setDate] = useState(new Date());
  const [isDateSet, setIsDateSet] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [genderPickerVisible, setGenderPickerVisible] = useState(false);
  const [statePickerVisible, setStatePickerVisible] = useState(false);
  const [genderText, setGenderText] = useState("");
  const [stateText, setStateText] = useState("");
  const [dateChecker, setDateChecker] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  const formatDate = (date) => {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var y = date.getFullYear();
    return "" + (d <= 9 ? "0" + d : d) + "-" + (m <= 9 ? "0" + m : m) + "-" + y;
  };

  const nextCondition =
    authType === "phone"
      ? dateChecker && stateText !== "" && genderText !== "" && enteredValue !== ""
      : dateChecker && stateText !== "" && genderText !== "";

  return (
    // <KeyboardAwareScrollView contentContainerStyle={{ minHeight: "100%" }}>
    <BackgroundCreateAccount
      progressNumber={1}
      whiteBoxHeading={"Let us get to know you!"}
      prevCondition={false}
      nextCondition={nextCondition}
      // NEXT
      nextNavigation={() => {
        dispatch(actions.addBasicInfo(enteredValue, date, genderText, stateText));
        props.navigation.navigate("profileType");
      }}
    >
      {authType === "phone" ? (
        <>
          <Text style={styles.heading}>Name</Text>
          <TextInputContainer
            placeholder={"Name"}
            style={{ paddingLeft: "6%" }}
            blurOnSubmit
            autoCorrect={false}
            value={enteredValue}
            onChangeText={(value) => setEnteredValue(value)}
          />
        </>
      ) : (
        <></>
      )}

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
      <Text style={styles.heading}>Gender</Text>
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
        checker={() => {}}
      />
      <Text style={styles.heading}>State</Text>
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
        checker={() => {}}
      />

      {/* <Button
        title="Logout"
        onPress={() => {
          dispatch(actions.logout());
        }}
      ></Button> */}
    </BackgroundCreateAccount>
    // </KeyboardAwareScrollView>
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
    marginTop: "5%",
    marginBottom: "3%",
    alignSelf: "flex-start",
    marginLeft: "10%",
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
