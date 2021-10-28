import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import Home from '../components/Home';

describe('Testing Home with redux', () => {
  it('Home is defined', async () => {
    const component = render(withRedux(<Home />));
    expect(component).toBeDefined();
  });

  it('Home snapshot testing', () => {
    const tree = renderer.create(withRedux(<Home />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
