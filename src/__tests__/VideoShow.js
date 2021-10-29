import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import VideoShow from '../components/VideoShow';

describe('Testing VideoShow with redux', () => {
  it('VideoShow is defined', async () => {
    const component = render(<VideoShow />);
    expect(component).toBeDefined();
  });

  it('VideoShow snapshot testing', () => {
    const tree = renderer.create(<VideoShow />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
