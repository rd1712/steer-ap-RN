import * as types from "../types";

import firestore from "@react-native-firebase/firestore";
import { ToastAndroid } from "react-native";

const db = firestore();

// Basic Info
export const addBasicInfo = (name, dob, gender, location) => ({
  type: types.ONB_ADD_BASIC_INFO,
  name,
  dob,
  gender,
  location,
});
// Profile Type
export const addProfileType = (profileType) => ({
  type: types.ONB_ADD_PROFILE_TYPE,
  profileType,
});
// Exam Selection
export const removeExam = (profileType, currentExam) => ({
  type: types.ONB_RMV_EXAM,
  profileType,
  currentExam,
});
// Current Preparation
export const upsertExam = (forProfileType, currentExam) => ({
  type: types.ONB_UPS_EXAM,
  forProfileType,
  currentExam,
});
// Profession
export const addProfession = (profession) => ({
  type: types.ONB_ADD_PROFESSION,
  profession,
});
// Institution Name
export const addInstitution = (institution) => ({
  type: types.ONB_ADD_INSTITUTION,
  institution,
});
// Loading Screen
export const updateDB = (sessionObject, onboardingObject) => async (dispatch) => {
  const userUID = sessionObject.user.id;

  // AspirantProfile
  // - userId: ""
  // - exams: []
  //    - {}
  //      - examId
  //      - skillLevel

  let aspirantProfileRef = {};
  if (onboardingObject.profileType === "aspirant" || onboardingObject.profileType === "both") {
    aspirantProfileRef = await firestore()
      .collection("aspirantProfile")
      .add({
        exams: onboardingObject.aspirantProfile.exams,
        user: db.doc(`user/${userUID}`),
      });
  }

  // MentorProfile
  // - userId: ""
  // - exams: []
  //    - {}
  //      - examId
  //      - document

  console.log(`user/${userUID}`);
  let mentorProfileRef = {};
  if (onboardingObject.profileType === "mentor" || onboardingObject.profileType === "both") {
    mentorProfileRef = await firestore()
      .collection("mentorProfile")
      .add({
        exams: onboardingObject.mentorProfile.exams,
        user: db.doc(`user/${userUID}`),
      });
  }

  // User (session.user.id)
  // - dob
  // - gender
  // - location
  // - name = session.user.name | onboarding.user.obj
  // - currentProfession {}
  //    - institution
  //    - type
  // - onboardingDone

  const userProfile = {
    dob: onboardingObject.dob,
    gender: onboardingObject.gender,
    location: onboardingObject.location,
    name: sessionObject.type === "phone" ? onboardingObject.name : sessionObject.user.name,
    onboardingDone: true,
    currentProfession: onboardingObject.currentProfession,
  };

  if (Object.keys(aspirantProfileRef) !== 0) {
    userProfile.aspirantProfile = db.doc(`aspirantProfile/${aspirantProfileRef.id}`);
  }

  if (Object.keys(mentorProfileRef) !== 0) {
    userProfile.mentorProfile = db.doc(`mentorProfile/${mentorProfileRef.id}`);
  }

  const userRef = db.collection("user");
  await userRef.doc(userUID).update(userProfile);

  dispatch({ type: types.ONB_UPD_DB });
};

// ONB_FETCH_FROM_DB
export const fetchFromDB = (userProfile, aspirantProfile, mentorProfile) => async (dispatch) => {
  let profileType = "";
  if (aspirantProfile) profileType = "aspirant";
  if (mentorProfile) profileType = "mentor";
  if (aspirantProfile && mentorProfile) profileType = "both";

  const onboardingObject = {
    name: userProfile.name,
    dob: userProfile.dob,
    gender: userProfile.gender, //male, female, other, not-revealed
    location: userProfile.location,
    profileType: "", //aspirant, mentor, both
    aspirantProfile: {
      exams: profileType === "aspirant" || profileType === "both" ? aspirantProfile.exams : [], //{index, examId, skillLevel}
    },
    mentorProfile: {
      exams: profileType === "mentor" || profileType === "both" ? mentorProfile.exams : [], //{index, examId, document}
    },
    currentProfession: userProfile.currentProfession,
    onboardingDone: true,
    profileType,
  };
  dispatch({ type: types.ONB_FETCH_FROM_DB, onboardingObject });
};
