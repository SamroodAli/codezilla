import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import WithRedux from 'withRedux';
import App from '../components/App';

describe('Testing App with redux', () => {
  it('App is defined', async () => {
    const app = render(<WithRedux><App /></WithRedux>);
    expect(app).toBeDefined();
  });

  it('App snapshot testing', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
