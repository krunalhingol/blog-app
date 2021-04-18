import { all } from "redux-saga/effects";
import blogOperations from "./Blogs/Redux/operations";
import postOperations from "./Post/Redux/operations";

export default function* rootSaga() {
  yield all([...blogOperations]);
  yield all([...postOperations]);
}
