import actionTypes from '../action-types';

const { SET_THEME } = actionTypes;

const themeSelector = (state = 'light', action) => {
  switch (action.type) {
    case SET_THEME: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default themeSelector;
