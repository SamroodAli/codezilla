import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Testing Pagination with redux', () => {
  it('Pagination is defined', async () => {
    const component = render(<Pagination />);
    expect(component).toBeDefined();
  });

  it('Pagination snapshot testing', () => {
    const tree = renderer.create(<Pagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
