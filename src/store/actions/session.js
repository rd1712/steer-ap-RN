import auth from "@react-native-firebase/auth";
import * as types from "../types";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import phone from "phone";
import firestore from "@react-native-firebase/firestore";
import { ToastAndroid } from "react-native";

import { fetchFromDB } from "./onboarding";

const db = firestore();

const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: "673266632947-r28k5qvk70l5rjstukfuj2mkoeh7i9l6.apps.googleusercontent.com",
    offlineAccess: false,
  });
};

// GOOGLE LOGIN
export const loginUsingGoogle = () => async (dispatch) => {
  configureGoogleSignIn();

  try {
    dispatch(sessionLoading());

    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const { user, additionalUserInfo } = await auth().signInWithCredential(googleCredential);

    dispatch(login(user, additionalUserInfo, "google"));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

// PHONE LOGIN
export const loginUsingPhone = (phoneNumber) => async (dispatch) => {
  try {
    const formattedPhoneNumber = phone(phoneNumber, { country: "IND" });
    // const confirmOTP = await auth().signInWithPhoneNumber("+91" + phoneNumber);
    if (formattedPhoneNumber.isValid) {
      const confirmOTP = await auth().signInWithPhoneNumber(formattedPhoneNumber.phoneNumber);

      dispatch(sessionOTPSent(phoneNumber, confirmOTP));
    } else {
      dispatch(sessionError("Invalid Phone Number"));
    }
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

// VERIFY OTP
export const verifyOTP = (phoneLogin, code) => async (dispatch) => {
  try {
    dispatch(sessionLoading());

    const { user, additionalUserInfo } = await phoneLogin.confirmOTP.confirm(code);

    dispatch(login(user, additionalUserInfo, "phone"));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const login = (user, additionalUserInfo, type) => async (dispatch) => {
  const userProfile = {
    id: user.uid,
  };

  if (type === "phone") {
    userProfile.phoneNumber = user.phoneNumber;
  } else if (type === "google") {
    userProfile.name = user.displayName;
    userProfile.photoURL = user.photoURL;
    userProfile.emailId = user.email;
  }

  try {
    if (additionalUserInfo.isNewUser) {
      const userRef = db.collection("user");
      await userRef.doc(user.uid).set(userProfile);
    } else {
      console.log("existing user");
      const userSnapshot = await db.collection("user").doc(user.uid).get();
      if (userSnapshot.exists) {
        const userData = userSnapshot.data();

        var seen = [];

        console.log(
          "user data\n" +
            JSON.stringify(userData, function (key, val) {
              if (val != null && typeof val == "object") {
                if (seen.indexOf(val) >= 0) {
                  return;
                }
                seen.push(val);
              }
              return val;
            })
        );

        let aspirantProfileData, mentorProfileData;
        if (userData.onboardingDone) {
          console.log("onboarding is done");
          if (userData.mentorProfile) {
            var seen = [];
            console.log("mentorProfile " + userData.mentorProfile);
            const mentorProfileSnapshot = await userData.mentorProfile.get();
            if (mentorProfileSnapshot.exists) {
              var seen = [];
              mentorProfileData = mentorProfileSnapshot.data();
              console.log(
                "mentor data\n" +
                  JSON.stringify(mentorProfileData, function (key, val) {
                    if (val != null && typeof val == "object") {
                      if (seen.indexOf(val) >= 0) {
                        return;
                      }
                      seen.push(val);
                    }
                    return val;
                  })
              );
            }
          }
          if (userData.aspirantProfile) {
            console.log("aspirantProfile " + userData.aspirantProfile);

            const aspirantProfileSnapshot = await userData.aspirantProfile.get();
            if (aspirantProfileSnapshot.exists) {
              var seen = [];
              aspirantProfileData = aspirantProfileSnapshot.data();
              console.log(
                "aspirant data\n" +
                  JSON.stringify(aspirantProfileData, function (key, val) {
                    if (val != null && typeof val == "object") {
                      if (seen.indexOf(val) >= 0) {
                        return;
                      }
                      seen.push(val);
                    }
                    return val;
                  })
              );
            }
          }
          dispatch(fetchFromDB(userData, aspirantProfileData, mentorProfileData));
        }
      }
    }
  } catch (error) {
    dispatch(sessionError(error.message));
  }

  dispatch(sessionSuccess(userProfile, "phone"));
};

// LOGOUT
export const logout = (type) => async (dispatch) => {
  try {
    dispatch(sessionLoading());

    if (type === "google") {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    }
    dispatch(sessionLogout());
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

const sessionSuccess = (userProfile, authType) => ({
  type: types.SESSION_SUCCESS,
  userProfile,
  authType,
});

const sessionLoading = () => ({
  type: types.SESSION_LOADING,
});

const sessionOTPSent = (phoneNumber, confirmOTP) => ({
  type: types.SESSION_OTP_SENT,
  phoneNumber,
  confirmOTP,
});

const sessionError = (error) => {
  ToastAndroid.show(error, ToastAndroid.LONG);

  return {
    type: types.SESSION_ERROR,
    error,
  };
};

const sessionLogout = () => ({
  type: types.SESSION_LOGOUT,
});
