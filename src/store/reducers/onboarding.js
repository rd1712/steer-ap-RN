import * as types from "../types";

const initialState = {
  name: "",
  dob: "",
  gender: "", //male, female, other, not-revealed
  location: "",
  profileType: "", //aspirant, mentor, both
  aspirantProfile: {
    exams: [], //{index, examId, skillLevel}
  },
  mentorProfile: {
    exams: [], //{index, examId, document}
  },
  currentProfession: {
    type: "", //school, college, work
    institution: "",
  },
  onboardingDone: false,
};

const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    // Basic Info
    // addBasicInfo (name, dob, gender, location)
    case types.ONB_ADD_BASIC_INFO:
      return {
        ...state,
        name: action.name,
        dob: action.dob,
        gender: action.gender,
        location: action.location,
      };

    // Profile Type
    // addProfileType (profileType)
    case types.ONB_ADD_PROFILE_TYPE:
      return {
        ...state,
        profileType: action.profileType,
      };

    // Exam Selection
    // removeExam (profileType, currentExam)
    case types.ONB_RMV_EXAM:
      return {
        ...state,
        aspirantProfile:
          profileType === "aspirant"
            ? {
                exams: state.aspirantProfile.exams.filter((exam, index) => currentExam.index !== index),
              }
            : state.aspirantProfile,
        mentorProfile:
          profileType === "mentor"
            ? {
                exams: state.mentorProfile.exams.filter((exam, index) => currentExam.index !== index),
              }
            : state.mentorProfile,
      };

    // Current Preparation
    // upsertExam (forProfileType, currentExam)
    case types.ONB_UPS_EXAM:
      // Aspirant
      if (action.forProfileType === "aspirant") {
        if (state.aspirantProfile.exams.filter((exam) => exam.index === action.currentExam.index).length > 0) {
          return {
            ...state,
            aspirantProfile: {
              exams: state.aspirantProfile.exams.map((exam) => {
                if (action.currentExam.index === exam.index) return action.currentExam;
                return exam;
              }),
            },
          };
        } else {
          const concatExams = state.aspirantProfile.exams;
          concatExams.push(action.currentExam);
          return {
            ...state,
            aspirantProfile: {
              exams: concatExams,
            },
          };
        }
      }
      // Mentor
      else if (action.forProfileType === "mentor") {
        if (state.mentorProfile.exams.filter((exam) => exam.index === action.currentExam.index).length > 0) {
          return {
            ...state,
            mentorProfile: {
              exams: state.mentorProfile.exams.map((exam) => {
                if (action.currentExam.index === exam.index) return action.currentExam;
                return exam;
              }),
            },
          };
        } else {
          const concatExams = state.mentorProfile.exams;
          concatExams.push(action.currentExam);
          return {
            ...state,
            mentorProfile: {
              exams: concatExams,
            },
          };
        }
      }

      return state;

    // Profession
    // addProfession (profession)
    case types.ONB_ADD_PROFESSION:
      return {
        ...state,
        currentProfession: {
          ...state.currentProfession,
          type: action.profession,
        },
      };

    // Institution Name
    // addInstitution (institution)
    case types.ONB_ADD_INSTITUTION:
      return {
        ...state,
        currentProfession: {
          ...state.currentProfession,
          institution: action.institution,
        },
      };

    // Loading Screen
    // updateDB ()
    case types.ONB_UPD_DB:
      return { ...state, onboardingDone: true };

    case types.ONB_ERROR:
      return state;

    case types.ONB_FETCH_FROM_DB:
      return action.onboardingObject;

    default:
      return state;
  }
};

export default onboardingReducer;
