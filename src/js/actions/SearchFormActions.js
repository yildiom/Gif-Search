import { SET_INPUT } from './actionTypes';

export const setInput = searchStr => ({
  type: SET_INPUT,
  payload: searchStr,
});
