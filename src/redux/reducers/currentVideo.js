import actionTypes from '../action-types';

const { VIDEO_SELECT } = actionTypes;

const videoSelector = (state = null, action) => {
  switch (action.type) {
    case VIDEO_SELECT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default videoSelector;
