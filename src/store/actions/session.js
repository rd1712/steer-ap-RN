import auth from "@react-native-firebase/auth";
import * as types from "../types";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const restoreSession = (props) => (dispatch) => {
  const user = auth().currentUser;
  console.log(user);
  if (user) {
    dispatch(sessionRestoring(user));
    // props.navigation.navigate("App");
  }
};

export const loginUsingGoogle = () => async (dispatch) => {
  dispatch(sessionLoading());

  // GoogleSignin.configure({
  //   webClientId: "673266632947-r28k5qvk70l5rjstukfuj2mkoeh7i9l6.apps.googleusercontent.com",
  //   offlineAccess: false,
  // });

  try {
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // console.log(googleCredential);
    // const { user, additionalUserInfo } = await auth().signInWithCredential(googleCredential);
    // console.log(user);

    // if (additionalUserInfo.isNewUser) {
    // const userRef = db.collection("users");
    // await userRef.doc(user.uid).set({
    //   uid: user.uid,
    //   displayName: user.displayName,
    //   photoURL: user.photoURL,
    //   email: user.email,
    // });
    // }

    dispatch(sessionSuccess(user));
  } catch (error) {
    dispatch(sessionError(error.message));
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch(sessionLoading());
    // await auth().signOut();
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

const sessionSuccess = (user) => ({
  type: types.SESSION_SUCCESS,
  user,
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
