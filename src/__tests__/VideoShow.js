import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import WithRedux from 'withRedux';
import VideoShow from '../components/VideoShow';

describe('Testing VideoShow with redux', () => {
  it('VideoShow is defined', async () => {
    const component = render(
      <WithRedux>
        <VideoShow searchVideo={jest.fn()} />
      </WithRedux>,
    );
    expect(component).toBeDefined();
  });

  it('VideoShow snapshot testing', () => {
    const tree = renderer.create(
      <WithRedux>
        <VideoShow searchVideo={jest.fn()} />
      </WithRedux>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
