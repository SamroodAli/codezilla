import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('Testing Home with redux', () => {
  it('Home is defined', async () => {
    const component = render(<Home />);
    expect(component).toBeDefined();
  });

  it('Home snapshot testing', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
