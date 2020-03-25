import { gifReducer } from './GifReducer';
import { searchFormReducer } from './SearchFormReducer';
import { likeReducer } from './LikeReducer';

const reducer = {
  results: gifReducer,
  search: searchFormReducer,
  likeInfo: likeReducer,
};

export default reducer;
