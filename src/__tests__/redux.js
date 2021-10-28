import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import reduxThunk from 'redux-thunk';

import configureStore from 'redux-mock-store';

describe('Testing redux reducers', () => {
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

  it('Redux store is defined', async () => {
    const store = mockStore(initialState);
    expect(store.getState()).toEqual(initialState);
  });

  it('Redux store is defined', async () => {
    const store = mockStore(initialState);
    expect(store.getState()).toEqual(initialState);
  });
});

// const app = await render(<Provider store={store}></Provider>);
