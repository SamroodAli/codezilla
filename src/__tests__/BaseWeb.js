import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import WithRedux from 'withRedux';

import BaseWeb from '../components/BaseWeb';

describe('Testing BaseWeb with redux', () => {
  it('BaseWeb is defined', async () => {
    const baseweb = render(
      <WithRedux>
        <BaseWeb><p>Hello Base web</p></BaseWeb>
      </WithRedux>,
    );
    expect(baseweb).toBeDefined();
  });

  it('BaseWeb snapshot testing', () => {
    const tree = renderer.create(
      <WithRedux>
        <BaseWeb><p>Hello Base web</p></BaseWeb>
      </WithRedux>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
