import { getPosts } from "../../services/blogService";
import { call, put, takeLatest } from "redux-saga/effects";
import { setPosts } from "./actions";
import { GET_POSTS } from "./types";
import { setPageTitle } from "../../Components/Header/Redux/actions";
import { startLoader, stopLoader } from "../../Components/Loader/Redux/actions";

function* getBlogs() {
  try {
    yield put(startLoader());
    const list = yield call(getPosts);
    yield put(setPageTitle("Blogs"));
    yield put(setPosts(list));
    yield put(stopLoader());
  } catch (e) {
    yield setPosts([]);
    yield put(stopLoader());
  }
}

const operations = [takeLatest(GET_POSTS, getBlogs)];
export default operations;
