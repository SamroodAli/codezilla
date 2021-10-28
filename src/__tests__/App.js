import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import configureStore from 'redux-mock-store';

import App from '../components/App';

describe('Testing App with redux', () => {
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

  const mockStore = configureStore();

  it('App is defined', async () => {
    const store = mockStore(initialState);
    const app = await render(<Provider store={store}><App /></Provider>);
    expect(app).toBeDefined();
  });

  it('Button snapshot testing', () => {
    const store = mockStore(initialState);
    const tree = renderer.create(<Provider store={store}><App /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
