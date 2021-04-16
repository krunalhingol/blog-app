import { SET_POSTS } from "../Blogs/Redux/types";

const INITIAL_STATE = {
  blogList: [],
};

const reducerHandler = (action, state = INITIAL_STATE) => {
  const reducerObject = {
    [SET_POSTS]: () => ({
      ...state,
      blogList: action.value,
    }),
  };
  return (reducerObject[action.type] && reducerObject[action.type]()) || state;
};

const blogs = (state, action) => reducerHandler(action, state);

export default blogs;
