import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Nav from '../components/Nav';

describe('Testing Nav with redux', () => {
  it('Nav is defined', async () => {
    const component = render(<Nav />);
    expect(component).toBeDefined();
  });

  it('Nav snapshot testing', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
