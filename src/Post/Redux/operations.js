import { getCommentsByPostId, getPost } from "../../services/blogService";
import { call, put, takeLatest } from "redux-saga/effects";
import { setComments, setPostDetails } from "./actions";
import { GET_COMMENTS, GET_POST_DETAILS } from "./types";
import { setPageTitle } from "../../Components/Header/Redux/actions";
import { startLoader, stopLoader } from "../../Components/Loader/Redux/actions";

function* getPostDetails(actionObj) {
  const postId = actionObj.value;
  try {
    const post = yield call(getPost, postId);
    yield put(startLoader());
    yield put(setPageTitle(post.title));
    yield put(setPostDetails(post));
    yield put(stopLoader());
  } catch (e) {
    yield setPostDetails(null);
    yield put(stopLoader());
  }
}

function* getComments(actionObj) {
  const postId = actionObj.value;
  try {
    yield put(startLoader());
    const post = yield call(getCommentsByPostId, postId);
    yield put(setComments(post));
    yield put(stopLoader());
  } catch (e) {
    yield setComments(null);
    yield put(stopLoader());
  }
}

const operations = [
  takeLatest(GET_POST_DETAILS, getPostDetails),
  takeLatest(GET_COMMENTS, getComments),
];
export default operations;
