import youtube from '../../api/youtube';
import {
  onSearch,
  onSearchSuccess,
  onSearchError,
  onSelectVideo,
} from '../actions';

const searchVideos = (term) => async (dispatch) => {
  try {
    dispatch(onSearch());
    const { data } = await youtube.get('/search', {
      params: {
        q: `${term} coding`,
      },
    });

    dispatch(onSearchSuccess(data.items));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const currentVideo = (video) => {
  dispatch();
};

const actionCreators = {
  searchVideos,
};

export default actionCreators;
