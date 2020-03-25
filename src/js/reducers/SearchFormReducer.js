import { searchState } from '../store/searchState';

export const searchFormReducer = (state = searchState, { type, payload }) => {
  switch (type) {
    case 'SET_INPUT':
      return payload;
    default:
      return state;
  }
};
