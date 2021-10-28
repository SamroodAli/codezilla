import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import Drawer from '../components/Drawer';

describe('Testing Drawer with redux', () => {
  it('Drawer is defined', async () => {
    const component = render(withRedux(<Drawer />));
    expect(component).toBeDefined();
  });

  it('Drawer snapshot testing', () => {
    const tree = renderer.create(withRedux(<Drawer />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
