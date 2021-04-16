import { all } from "redux-saga/effects";
import blogOperations from "./Blogs/Redux/operations";

export default function* rootSaga() {
  yield all([...blogOperations]);
}
