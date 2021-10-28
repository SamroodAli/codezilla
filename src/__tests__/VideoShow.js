import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import VideoShow from '../components/VideoShow';

describe('Testing VideoShow with redux', () => {
  it('VideoShow is defined', async () => {
    const component = render(withRedux(<VideoShow />));
    expect(component).toBeDefined();
  });

  it('VideoShow snapshot testing', () => {
    const tree = renderer.create(withRedux(<VideoShow />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
