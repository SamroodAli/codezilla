import youtube from '../../api/youtube';
import history from '../../history';

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

const setCurrentVideo = (video) => {
  history.push(`${video.etag}`);
  return onSelectVideo(video);
};

const actionCreators = {
  searchVideos,
  setCurrentVideo,
};

export default actionCreators;
