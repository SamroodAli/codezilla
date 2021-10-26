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

const setCurrentVideo = (video) => onSelectVideo(video);

const searchVideo = (term) => async (dispatch) => {
  try {
    const { data } = await youtube.get('/videos', {
      params: {
        id: term,
      },
    });

    if (data.items.length) {
      dispatch(onSelectVideo(data.items[0]));
    }
  } catch (err) {
    dispatch(onSearchError());
  }
};

const actionCreators = {
  searchVideos,
  searchVideo,
  setCurrentVideo,
};

export default actionCreators;
