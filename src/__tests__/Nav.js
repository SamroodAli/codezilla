import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import Nav from '../components/Nav';

describe('Testing Nav with router', () => {
  it('Nav is defined', async () => {
    const component = render(
      <StaticRouter>
        <Nav />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Nav snapshot testing', () => {
    const tree = renderer.create(
      <StaticRouter>
        <Nav />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
