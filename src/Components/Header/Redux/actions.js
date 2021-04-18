import types from "./types";

export const setPageTitle = (value) => ({ type: types.SET_PAGE_TITLE, value });

const actions = {
  setPageTitle,
};

export default actions;
