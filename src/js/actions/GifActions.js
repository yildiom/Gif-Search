import axios from 'axios';
import { SET_GIFS } from './actionTypes';

export const getGifs = function() {
  return function(dispatch, getState) {
    axios
      .get(
        `https://api.tenor.com/v1/search?q=${getState().search}&key=${
          process.env.APIKEY
        }`
      )
      .then(function(response) {
        dispatch({
          type: SET_GIFS,
          payload: response.data.results,
        });
      });
  };
};
