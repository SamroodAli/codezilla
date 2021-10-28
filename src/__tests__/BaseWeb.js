import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';

import BaseWeb from '../components/BaseWeb';

describe('Testing BaseWeb with redux', () => {
  it('BaseWeb is defined', async () => {
    const baseweb = render(withRedux(<BaseWeb><p>Hello Base web</p></BaseWeb>));
    expect(baseweb).toBeDefined();
  });

  it('BaseWeb snapshot testing', () => {
    const tree = renderer.create(withRedux(<BaseWeb><p>Hello Base web</p></BaseWeb>)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
