import auth from "@react-native-firebase/auth";
import * as types from "../types";
import { phone } from "phone";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: "673266632947-r28k5qvk70l5rjstukfuj2mkoeh7i9l6.apps.googleusercontent.com",
    offlineAccess: false,
  });
};

export const restoreSession = (props) => (dispatch) => {
  const user = auth().currentUser;
  console.log(user);
  if (user) {
    dispatch(sessionRestoring(user));
    props.navigation.navigate("Onboarding");
  }
};

export const loginUsingGoogle = () => async (dispatch) => {
  dispatch(sessionLoading());
  configureGoogleSignIn();

  try {
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const { user, additionalUserInfo } = await auth().signInWithCredential(googleCredential);

    console.log(user);

    if (additionalUserInfo.isNewUser) {
      console.log("New User");
    }

    dispatch(sessionSuccess(user, "google"));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const verifyOTP = (confirmation, code) => async (dispatch) => {
  dispatch(sessionLoading());

  try {
    await confirmation.confirm(code);
    dispatch(sessionSuccess({}, "phone"));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const loginUsingPhone = (phoneNumber) => async (dispatch) => {
  // dispatch(sessionLoading());

  try {
    const formattedPhoneNumber = phone(phoneNumber, { country: "IND" });
    // if (formattedPhoneNumber.isValid) {
    //   const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber.phoneNumber);
    //   dispatch(sessionOTPSent(confirmation));
    // } else {
    //   dispatch(sessionError("Invalid Phone Number"));
    // }

    const confirmation = await auth().signInWithPhoneNumber("+91" + phoneNumber);
    dispatch(sessionOTPSent(confirmation));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(sessionLoading());
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    dispatch(sessionLogout());
  } catch (error) {
    console.log(error.message);
    dispatch(sessionError(error.message));
  }
};

const sessionRestoring = (user) => ({
  type: types.SESSION_RESTORING,
  user,
});

const sessionLoading = () => ({
  type: types.SESSION_LOADING,
});

const sessionSuccess = (user, auth_type) => ({
  type: types.SESSION_SUCCESS,
  user,
  auth_type,
});

const sessionOTPSent = (confirmation) => ({
  type: types.SESSION_OTP_SENT,
  confirm_otp: confirmation,
});

const signupSuccess = (user) => ({
  type: types.SIGNUP_SUCCESS,
  user,
});

const sessionError = (error) => ({
  type: types.SESSION_ERROR,
  error,
});

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT,
});
