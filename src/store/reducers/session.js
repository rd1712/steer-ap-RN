import * as types from "../types";

const initialState = {
  loading: false,
  user: {},
  error: null,
  type: "",
  phoneLogin: {
    confirmOTP: {},
    phoneNumber: "",
  },
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.SESSION_OTP_SENT:
      return {
        ...state,
        loading: false,
        phoneLogin: {
          phoneNumber: action.phoneNumber,
          confirmOTP: action.confirmOTP,
        },
      };
    case types.SESSION_SUCCESS:
      return {
        ...initialState,
        loading: false,
        user: action.userProfile,
        type: action.authType,
      };
    case types.SESSION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
