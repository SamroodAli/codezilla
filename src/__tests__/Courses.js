import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import WithRedux from 'withRedux';
import Courses from '../components/Courses';

describe('Testing Courses with redux', () => {
  it('Courses is defined', async () => {
    const courses = render(
      <WithRedux>
        <Courses videos={[]} filters={{}} searchVideos={jest.fn()} />
      </WithRedux>,
    );
    expect(courses).toBeDefined();
  });

  it('Courses snapshot testing', () => {
    const tree = renderer.create(
      <WithRedux>
        <Courses videos={[]} filters={{}} searchVideos={jest.fn()} />
      </WithRedux>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
