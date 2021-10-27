import actionTypes from '../action-types';

const { SET_FILTER } = actionTypes;

const initialState = {
  React: true,
  Angular: true,
  Vue: true,
  'Functional Programming': true,
  'Object Oriented Programming': true,
  Microservices: true,
  JAMStack: true,
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
