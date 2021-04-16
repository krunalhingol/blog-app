import loaderTypes from "../Components/Loader/Redux/types";

const INITIAL_STATE = {
  isLoading: false,
};

const reducerHandler = (action, state = INITIAL_STATE) => {
  const reducerObject = {
    [loaderTypes.START_LOADER]: () => ({
      ...state,
      isLoading: true,
    }),
    [loaderTypes.STOP_LOADER]: () => ({
      ...state,
      isLoading: false,
    }),
  };
  return (reducerObject[action.type] && reducerObject[action.type]()) || state;
};

const common = (state, action) => reducerHandler(action, state);

export default common;
