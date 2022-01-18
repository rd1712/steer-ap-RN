import * as types from "../types";

const initialState = {
  restoring: false,
  loading: false,
  user: {},
  error: null,
};

const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_RESTORING:
      return { ...initialState, user: action.user, restoring: true };
    case types.SESSION_LOADING:
      return { ...initialState, loading: true };
    case types.SESSION_SUCCESS:
      return {
        ...initialState,
        user: action.user,
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
