import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Testing Filter with redux', () => {
  it('Filter is defined', async () => {
    const component = render(<Filter />);
    expect(component).toBeDefined();
  });

  it('Filter snapshot testing', () => {
    const tree = renderer.create(<Filter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
