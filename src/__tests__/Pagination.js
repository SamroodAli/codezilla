import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import Pagination from '../components/Pagination';

describe('Testing Pagination with redux', () => {
  it('Pagination is defined', async () => {
    const component = render(withRedux(<Pagination />));
    expect(component).toBeDefined();
  });

  it('Pagination snapshot testing', () => {
    const tree = renderer.create(withRedux(<Pagination />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
