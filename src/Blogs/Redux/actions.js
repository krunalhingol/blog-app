import { GET_POSTS, SET_POSTS } from "./types";

export const getPosts = (value) => ({ type: GET_POSTS, value });
export const setPosts = (value) => ({ type: SET_POSTS, value });

const actions = { getPosts, setPosts };

export default actions;
