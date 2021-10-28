import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import withRedux from 'withRedux';
import VideoItem from '../components/VideoItem';
import { store } from '../__mocks__/withRedux';

describe('Testing VideoItem with redux', () => {
  it('VideoItem is defined', () => {
    const video = store.getState().videos[0].Angular[0];
    const component = render(withRedux(<VideoItem
      video={video.snippet}
      link={video.etag}
      key={video.etag}
    />));
    expect(component).toBeDefined();
  });

  it('VideoItem snapshot testing', async () => {
    const video = store.getState().videos[0].Angular[0];
    const tree = renderer.create(withRedux(<VideoItem
      video={video.snippet}
      link={video.etag}
      key={video.etag}
    />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
