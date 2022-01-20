import * as types from "../types";

const initialState = {
  restoring: false,
  loading: false,
  user: {},
  error: null,
  type: null,
  confirm_otp: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_RESTORING:
      return { ...state, user: action.user, restoring: true };
    case types.SESSION_LOADING:
      return { ...state, loading: true };
    case types.SESSION_OTP_SENT:
      return { ...initialState, confirm_otp: action.confirm_otp };
    case types.SESSION_SUCCESS:
      return {
        ...initialState,
        user: action.user,
        type: action.type,
        confirm_otp: null,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...initialState,
        user: action.user,
      };
    case types.SESSION_ERROR:
      return {
        ...initialState,
        error: action.error,
      };
    case types.SESSION_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default sessionReducer;
