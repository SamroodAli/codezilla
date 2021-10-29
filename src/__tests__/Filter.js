import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Filter from '../components/Filter';

describe('Testing Filter with static router', () => {
  it('Filter is defined', async () => {
    const component = render(
      <StaticRouter>
        <Filter filterState={{}} setFilter={jest.fn()} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Filter snapshot testing', () => {
    const tree = renderer.create(
      <StaticRouter>
        <Filter filterState={{}} setFilter={jest.fn()} />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
