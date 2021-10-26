import actionTypes from "../action-types";

const { SEARCH_VIDEOS, SEARCH_VIDEOS_SUCCESS, SEARCH_VIDEOS_ERROR } =
  actionTypes;

const videosReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_VIDEOS: {
      return [];
    }
    case SEARCH_VIDEOS_SUCCESS: {
      return action.payload;
    }
    case SEARCH_VIDEOS_ERROR: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default videosReducer;
