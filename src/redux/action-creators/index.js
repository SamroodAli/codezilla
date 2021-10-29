import axios from 'axios';

import {
  onSearch,
  onSearchSuccess,
  onSearchError,
  onSelectVideo,
  onThemeSelect,
  onFilterSelect,
} from '../actions';

const searchVideos = () => async (dispatch) => {
  try {
    dispatch(onSearch());
    const { data } = await axios.get('/data/courses.json');

    dispatch(onSearchSuccess(data));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const setCurrentVideo = (video) => onSelectVideo(video);

const searchVideo = (searchId) => async (dispatch) => {
  try {
    const { data } = await axios.get('/data/courses.json');

    const courses = Object.values(data).flat();

    const video = courses.find(({ etag }) => searchId === etag);

    dispatch(onSelectVideo(video));
  } catch (err) {
    dispatch(onSearchError());
  }
};

const setTheme = (theme) => onThemeSelect(theme);

const setFilter = (filter) => onFilterSelect(filter);

const actionCreators = {
  searchVideos,
  searchVideo,
  setCurrentVideo,
  setTheme,
  setFilter,
};

export default actionCreators;
