import actionTypes from '../action-types';

const {
  SEARCH_VIDEOS,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_ERROR,
  VIDEO_SELECT,
  SET_THEME,
  SET_FILTER,
} = actionTypes;

export const onSearch = () => ({ type: SEARCH_VIDEOS });

export const onSearchSuccess = (videos) => ({
  type: SEARCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const onSearchError = () => ({ type: SEARCH_VIDEOS_ERROR });

export const onSelectVideo = (video) => ({ type: VIDEO_SELECT, payload: video });

export const onThemeSelect = (theme) => ({ type: SET_THEME, payload: theme });

export const onFilterSelect = (course) => ({ type: SET_FILTER, payload: course });
