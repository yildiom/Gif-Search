import { likeState } from '../store/likeState';
import { LIKE_A_GIF } from '../actions/actionTypes';

export const likeReducer = (state = likeState, action) => {
  switch (action.type) {
    case LIKE_A_GIF:
      state.push(action.payload);
      return state;
    default:
      return state;
  }
};
