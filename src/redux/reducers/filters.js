import actionTypes from '../action-types';

const { SET_FILTER } = actionTypes;

const initialState = {
  React: true,
  Angular: false,
  Vue: false,
  'Functional Programming': false,
  'Object Oriented Programming': false,
  Microservices: false,
  JAMStack: false,
};

const videoSelector = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return { ...state, [action.payload]: !state[action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default videoSelector;
