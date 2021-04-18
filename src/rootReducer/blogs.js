import { SET_POSTS } from "../Blogs/Redux/types";
import { SET_COMMENTS, SET_POST_DETAILS } from "../Post/Redux/types";

const INITIAL_STATE = {
  blogList: [],
  postDetails: null,
  comments: [],
};

const reducerHandler = (action, state = INITIAL_STATE) => {
  const reducerObject = {
    [SET_POSTS]: () => ({
      ...state,
      blogList: action.value,
    }),
    [SET_POST_DETAILS]: () => ({
      ...state,
      postDetails: action.value,
    }),
    [SET_COMMENTS]: () => ({
      ...state,
      comments: action.value,
    }),
  };
  return (reducerObject[action.type] && reducerObject[action.type]()) || state;
};

const blogs = (state, action) => reducerHandler(action, state);

export default blogs;
