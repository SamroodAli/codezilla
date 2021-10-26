// import youtube from '../../api/youtube';
// import youtube from '../../api/publicYoutube';
import axios from 'axios';

import {
  onSearch,
  onSearchSuccess,
  onSearchError,
  onSelectVideo,
} from '../actions';

const searchVideos = (term) => async (dispatch) => {
  try {
    dispatch(onSearch());
    const { data } = await axios.get(`/data/${term}`, {
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
    const { data } = await axios.get(`/data/${term}`);

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
