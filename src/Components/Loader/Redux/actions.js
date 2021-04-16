import types from './types';

export const startLoader = () => ({
  type: types.START_LOADER,
});
export const stopLoader = () => ({
  type: types.STOP_LOADER,
});
export default {
  startLoader,
  stopLoader,
};
