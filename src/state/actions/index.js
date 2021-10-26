import {
  SEARCH_VIDEOS,
  SEARCH_VIDEOS_SUCCESS,
  SEARCH_VIDEOS_ERROR,
} from "../action-types";

export const onSearch = () => ({ type: SEARCH_VIDEOS });

export const onSearchSuccess = (videos) => ({
  type: SEARCH_VIDEOS_SUCCESS,
  payload: videos,
});

export const onSearchError = () => ({ type: SEARCH_VIDEOS_ERROR });
