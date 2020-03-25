import { UNLIKE_A_GIF } from './actionTypes';

export const unLikeGif = gifID => ({
  type: UNLIKE_A_GIF,
  payload: gifID,
});
