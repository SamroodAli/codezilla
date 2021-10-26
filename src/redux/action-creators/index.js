// import youtube from '../../api/youtube';
// import youtube from '../../api/publicYoutube';
import axios from 'axios';

import {
  onSearch,
  onSearchSuccess,
  onSearchError,
  onSelectVideo,
  onThemeSelect,
} from '../actions';

const searchVideos = (term) => async (dispatch) => {
  try {
    dispatch(onSearch());
    const { data } = await axios.get(`/data/${term}.json`);

    dispatch(onSearchSuccess(data.items));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const setCurrentVideo = (video) => onSelectVideo(video);

const searchVideo = (searchTag) => async (dispatch) => {
  try {
    const { data } = await axios.get('/data/courses.json');

    const video = data.find(({ etag }) => searchTag === etag);

    dispatch(onSelectVideo(video));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const setTheme = (theme) => onThemeSelect(theme);

const actionCreators = {
  searchVideos,
  searchVideo,
  setCurrentVideo,
  setTheme,
};

export default actionCreators;
