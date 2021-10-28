import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import Filter from '../components/Filter';

describe('Testing Filter with redux', () => {
  it('Filter is defined', async () => {
    const filter = render(withRedux(<Filter />));
    expect(filter).toBeDefined();
  });

  it('Filter snapshot testing', () => {
    const tree = renderer.create(withRedux(<Filter />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
