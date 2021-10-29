import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import BaseWeb from '../components/BaseWeb';

describe('Testing BaseWeb with redux', () => {
  it('BaseWeb is defined', async () => {
    const baseweb = render(<BaseWeb><p>Hello Base web</p></BaseWeb>);
    expect(baseweb).toBeDefined();
  });

  it('BaseWeb snapshot testing', () => {
    const tree = renderer.create(<BaseWeb><p>Hello Base web</p></BaseWeb>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
