import youtube from '../../api/youtube';
import { onSearch, onSearchSuccess, onSearchError } from '../actions';

const searchVideos = (term) => async (dispatch) => {
  try {
    dispatch(onSearch());
    const { data: items } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    dispatch(onSearchSuccess(items));
  } catch (err) {
    dispatch(onSearchError());
  }
};

export default {
  searchVideos,
};
