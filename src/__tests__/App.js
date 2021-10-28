import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';

import App from '../components/App';

describe('Testing App with redux', () => {
  it('App is defined', async () => {
    const app = render(withRedux(<App />));
    expect(app).toBeDefined();
  });

  it('App snapshot testing', () => {
    const tree = renderer.create(withRedux(<App />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
