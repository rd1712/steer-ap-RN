import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from "react-native";
import BackgroundWithImage from "../../components/BackgroundWithImage";
import TextInputContainer from "../../components/TextInputContainer";
import BlueButton from "../../components/BlueButton";
import * as actions from "../../store/actions";

import RNOtpVerify from "react-native-otp-verify";

import { useSelector, useDispatch } from "react-redux";

import { OTP_TIMER_VALUE, OTP_LENGTH } from "../../constants";

const enterOTP = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const confirm_otp = useSelector((state) => state.session.confirm_otp);

  const [enteredValue, setEnteredValue] = useState("");
  const [buttonColor, setButtonColor] = useState("#CFCFCF");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    if (!isNaN(inputText) && inputText.toString().length === OTP_LENGTH) {
      setButtonColor("#004475");
      setButtonDisabled(false);
    } else {
      setButtonColor("#CFCFCF");
      setButtonDisabled(true);
    }
  };

  const [resendOTPTimer, setResendOTPTimer] = useState(OTP_TIMER_VALUE);

  const startResendOTPTimer = (timerStartValue) => {
    try {
      if (timerStartValue) setResendOTPTimer(timerStartValue);
      const resendOTPTimerInterval = setInterval(() => {
        setResendOTPTimer((resendOTPTimer) => {
          if (resendOTPTimer <= 0) {
            clearInterval(resendOTPTimerInterval);
            return resendOTPTimer;
          } else {
            return resendOTPTimer - 1;
          }
        });
      }, 1000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const requestOTPHandler = () => {
    dispatch(actions.verifyOTP(confirm_otp, enteredValue));
    // navigation.navigate("Onboarding");
  };
  const previousHandler = () => {
    navigation.navigate("loginOptions");
  };

  const otpHandler = (message) => {
    console.log(message);
    if (message === "Timeout Error.") {
      RNOtpVerify.removeListener();
      return;
    }

    const otp = /(\d{6})/g.exec(message)[1];
    setEnteredValue(otp);
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };

  useEffect(async () => {
    await RNOtpVerify.getOtp();
    RNOtpVerify.addListener(otpHandler);

    // navigation.addListener("beforeRemove", (e) => {
    //   e.preventDefault();
    // });

    startResendOTPTimer();

    return () => RNOtpVerify.removeListener();
  }, []);

  return (
    <BackgroundWithImage style={styles.background}>
      <Text style={styles.whiteBoxTitle}>Create Account</Text>
      <Text style={styles.mobileNumber}>Mobile Number</Text>
      <TextInputContainer
        placeholder={route.params.paramKey}
        style={{ marginTop: 7, paddingLeft: "5%" }}
        editable={false}
      />
      <View style={styles.optView}>
        <Text style={styles.otp}>Enter OTP</Text>
        <TouchableOpacity
          disabled={resendOTPTimer > 0}
          onPress={() => {
            startResendOTPTimer(OTP_TIMER_VALUE);
          }}
        >
          {resendOTPTimer > 0 ? (
            <Text style={styles.resend_disabled}>Resend in {resendOTPTimer} sec</Text>
          ) : (
            <Text style={styles.resend}>Resend</Text>
          )}
        </TouchableOpacity>
      </View>
      <TextInputContainer
        style={{ marginTop: 7, paddingLeft: "6%" }}
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={OTP_LENGTH}
        value={enteredValue}
        onChangeText={numberInputHandler}
        placeholder={"ex: 5038"}
      />
      <View style={styles.buttonContainer}>
        <BlueButton
          disabled={false}
          title={"Previous"}
          style={{ color: "#004475", width: 60 }}
          onPress={previousHandler}
        />
        <BlueButton color={buttonColor} disabled={buttonDisabled} title={"Continue"} onPress={requestOTPHandler} />
      </View>
    </BackgroundWithImage>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
  },
  whiteBoxTitle: {
    marginTop: "5%",
    // fontFamily: 'Nunito',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    alignItems: "center",
    textAlign: "center",
  },
  mobileNumber: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "#313537",
    marginTop: "10%",
    marginLeft: "-50%",
  },
  optView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10%",
    width: "75%",
  },
  otp: {
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    color: "#313537",
  },
  resend: {
    color: "#004475",
    textDecorationLine: "underline",
  },
  resend_disabled: {
    color: "#313537",
  },
  buttonContainer: {
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
export default enterOTP;
