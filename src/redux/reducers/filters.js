import actionTypes from '../action-types';

const { FILTER } = actionTypes;

const initialState = {
  React: true,
  Angular: true,
  Vue: true,
  'Functional Programming': true,
  'Object Oriented Programming': true,
  Microservices: true,
  'JAM Stack': true,
};

const videoSelector = (state = initialState, action) => {
  switch (action.type) {
    case FILTER: {
      return { ...state, [action.payload]: !state[action.payload] };
    }
    default: {
      return state;
    }
  }
};

export default videoSelector;
