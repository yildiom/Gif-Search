import { gifState } from '../store/gifState';
import { SET_GIFS } from '../actions/actionTypes';

export const gifReducer = (state = gifState, action) => {
  switch (action.type) {
    case SET_GIFS:
      return action.payload;
    default:
      return state;
  }
};
