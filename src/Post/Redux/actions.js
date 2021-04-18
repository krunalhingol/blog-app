import types from "./types";

export const setPostDetails = (value) => ({
  type: types.SET_POST_DETAILS,
  value,
});

export const getPostDetails = (value) => ({
  type: types.GET_POST_DETAILS,
  value,
});

export const getComments = (value) => ({
  type: types.GET_COMMENTS,
  value,
});

export const setComments = (value) => ({
  type: types.SET_COMMENTS,
  value,
});

const actions = {
  setPostDetails,
  getPostDetails,
  getComments,
  setComments,
};
export default actions;
