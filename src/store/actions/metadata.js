import * as types from "../types";
import firestore from "@react-native-firebase/firestore";

const db = firestore();

export const fetchExamList = () => async (dispatch) => {
  try {
    const collection = await db.collection("exam").get();
    const examList = [];
    collection.forEach((doc) => {
      const exam = doc.data();
      examList.push(exam);
    });
    dispatch({ type: types.MD_FETCH_EXAM_LIST, examList });
  } catch (error) {
    console.log(error.message);
  }
};

// export const addExamData = async () => {
//   const exams = [
//     "NTSE",
//     "KVPY",
//     "JEE and other engineering exams",
//     "NEET UG",
//     "NEET PG",
//     "GATE",
//     "CAT and other MBA exams",
//     "GMAT",
//     "GRE",
//     "IELTS",
//     "LSAT",
//     "TOEFL",
//     "BANK EXAMS",
//     "UPSC CSE",
//     "UPSC OTHER",
//     "CA EXAMS",
//     "LAW EXAMS",
//     "DEFENCE EXAMS",
//     "OTHER",
//   ];

//   exams.forEach((exam) => {
//     firestore().collection("exam").add({
//       name: exam,
//     });
//   });
// };
