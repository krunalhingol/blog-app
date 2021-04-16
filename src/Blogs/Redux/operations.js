import { getPosts } from "../../services/blogService";
import { call, put, takeLatest } from "redux-saga/effects";
import { setPosts } from "./actions";
import { GET_POSTS } from "./types";

function* getBlogs() {
  try {
    const list = yield call(getPosts);
    yield put(setPosts(list));
  } catch (e) {
    yield setPosts([]);
  }
}

const operations = [takeLatest(GET_POSTS, getBlogs)];
export default operations;
