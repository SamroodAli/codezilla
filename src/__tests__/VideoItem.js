import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import VideoItem from '../components/VideoItem';
import { store } from '../__mocks__/withRedux';

describe('Testing VideoItem with redux', () => {
  it('VideoItem is defined', () => {
    const video = store.getState().videos[0].Angular[0];
    const component = render(
      <StaticRouter>
        <VideoItem
          video={video.snippet}
          link={video.etag}
          key={video.etag}
        />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('VideoItem snapshot testing', async () => {
    const video = store.getState().videos[0].Angular[0];
    const tree = renderer.create(
      <StaticRouter>
        <VideoItem
          video={video.snippet}
          link={video.etag}
          key={video.etag}
        />
      </StaticRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
