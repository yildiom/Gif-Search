import { LIKE_A_GIF } from './actionTypes';

export const likeGif = (gifURL, gifID) => ({
  type: LIKE_A_GIF,
  payload: {
    gifID,
    gifURL,
  },
});
