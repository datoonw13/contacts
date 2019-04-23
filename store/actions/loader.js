import { TOGGLE_LOADER } from './actionTypes';

export const toggleLoader = load => {
  return {
    type: TOGGLE_LOADER,
    load
  };
};
