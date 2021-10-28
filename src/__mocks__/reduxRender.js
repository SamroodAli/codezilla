import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import configureStore from 'redux-mock-store';

const initialState = {
  videos: [],
  filters: {
    React: true,
    Angular: true,
    Vue: true,
    'Functional Programming': true,
    'Object Oriented Programming': true,
    Microservices: true,
    'JAM Stack': true,
  },
  theme: 'light',
  currentVideo: null,
};

const mockStore = configureStore([reduxThunk]);
const store = mockStore(initialState);

const reduxRender = (component) => render(<Provider store={store}>{component}</Provider>);
export default reduxRender;
