import * as types from "../types";

const initialState = {
  examList: [],
};

const metadataReducer = (state = initialState, action) => {
  switch (action.type) {
    // Basic Info
    // fetchExamList (examList)
    case types.MD_FETCH_EXAM_LIST:
      return {
        ...state,
        examList: action.examList,
      };
    default:
      return state;
  }
};

export default metadataReducer;
