import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions";

import BackgroundWithoutImage from "../../components/BackgroundWithoutImage";
import TextInputContainer from "../../components/TextInputContainer";
import BlueButton from "../../components/BlueButton";
import Or from "../../components/Or";
import Google from "../../icon-buttons/Google";

const loginOptions = (props) => {
  const dispatch = useDispatch();

  const [enteredValue, setEnteredValue] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    if (!isNaN(inputText) && inputText.toString().length === 10) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const requestOTPHandler = () => {
    dispatch(actions.loginUsingPhone(enteredValue));
    console.log(enteredValue);
    props.navigation.navigate("enterOTP", { paramKey: enteredValue });
  };
  return (
    <BackgroundWithoutImage style={styles.background}>
      <Text style={styles.whiteBoxTitle}>Create Account</Text>
      <TextInputContainer
        style={styles.inputText}
        placeholder={"Your Phone Number"}
        textAlign={"center"}
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={10}
        value={enteredValue}
        onChangeText={numberInputHandler}
      />
      <BlueButton
        title={"Request OTP"}
        color={buttonDisabled ? "#CFCFCF" : "#004475"}
        disabled={buttonDisabled}
        onPress={requestOTPHandler}
      />
      <Or />
      <Text style={styles.signUpText}>Sign up with</Text>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => {
            dispatch(actions.loginUsingGoogle());
          }}
        >
          <Google />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={{ ...styles.footerText, color: "#0bccea" }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </BackgroundWithoutImage>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
  },
  whiteBoxTitle: {
    marginTop: "5%",
    // fontFamily: 'Nunito',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    alignItems: "center",
  },
  inputText: {
    marginTop: "10%",
  },
  signUpText: {
    marginTop: "15%",
    // fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 25,
    color: "#313537",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: 400,
    marginTop: "10%",
  },
  footer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  footerText: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
  },
});

export default loginOptions;
